#!/usr/bin/env node
"use strict";
// Offline release-readiness gate. Does NOT publish, deploy, or alter DNS.
// Usage: node verify-release.cjs <generated-directory> <approved-https-origin>
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

function attributes(tag) {
  const out = {};
  for (const m of tag.matchAll(/([^\s=<>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    out[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4];
  }
  return out;
}
function getMetadata(html) {
  const result = new Map();
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    const a = attributes(tag);
    const key = (a.name || a.property || "").toLowerCase();
    if (!key) continue;
    assert.ok(!result.has(key), "Duplicate metadata field: " + key);
    result.set(key, a.content || "");
  }
  return result;
}
function validateOrigin(input) {
  assert.ok(input, "An explicitly approved HTTPS origin is required");
  const u = new URL(input);
  assert.equal(u.protocol, "https:", "Public origin must be HTTPS");
  assert.equal(u.username, "", "Credentials forbidden in origin");
  assert.equal(u.password, "", "Credentials forbidden in origin");
  assert.equal(u.search, "", "Query forbidden in origin");
  assert.equal(u.hash, "", "Fragment forbidden in origin");
  assert.equal(u.pathname, "/", "Origin must not have a path prefix");
  assert.ok(!/(^|\.)((example\.invalid)|(localhost)|(local)|(test))$/i.test(u.hostname), "Placeholder host forbidden");
  assert.ok(!u.hostname.endsWith(".invalid") && !u.hostname.endsWith(".localhost"), "Placeholder host forbidden");
  assert.ok(u.hostname.includes("."), "Public origin must be a DNS hostname");
  return u.origin;
}
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(x => {
    const full = path.join(dir, x.name);
    if (x.isDirectory()) return walk(full);
    return x.isFile() && x.name.endsWith(".html") ? [full] : [];
  });
}
function validate(root, providedOrigin) {
  const origin = validateOrigin(providedOrigin);
  const routes = new Set([
    "/", "/services/gis-workflow-automation/", "/services/postgis-consulting/",
    "/services/environmental-gis-screening/", "/contact/"
  ]);
  const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
  assert.match(robots, /User-agent:\s*\*/i);
  assert.match(robots, /^Allow:\s*\/$/im, "Public robots must explicitly allow crawling");
  assert.doesNotMatch(robots, /^Disallow:\s*\/$/im, "Public robots must not block entire site");
  assert.ok(robots.includes(origin + "/sitemap.xml"), "Robots must reference approved sitemap");
  const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
  const seenCanonical = new Set();
  const seenTitle = new Set();
  for (const route of routes) {
    const file = path.join(root, route.slice(1), "index.html");
    const html = fs.readFileSync(file, "utf8");
    const meta = getMetadata(html);
    const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
    assert.ok(title, route + ": missing title");
    assert.ok(!seenTitle.has(title), route + ": duplicate title"); seenTitle.add(title);
    assert.ok(meta.get("description")?.trim(), route + ": missing description");
    assert.ok(meta.get("og:title")?.trim(), route + ": missing og:title");
    assert.ok(meta.get("twitter:title")?.trim(), route + ": missing twitter:title");
    assert.equal(meta.get("og:title"), title, route + ": OG title diverges");
    assert.equal(meta.get("twitter:title"), title, route + ": Twitter title diverges");
    const robotsMeta = (meta.get("robots") || "").toLowerCase();
    assert.ok(!/\b(noindex|nofollow|none)\b/.test(robotsMeta), route + ": production page blocked from search");
    const canonicals = (html.match(/<link\b[^>]*>/gi) || []).filter(t =>
      (attributes(t).rel || "").toLowerCase().split(/\s+/).includes("canonical")
    );
    assert.equal(canonicals.length, 1, route + ": expected one canonical");
    const expected = origin + route;
    assert.equal(attributes(canonicals[0]).href, expected, route + ": canonical mismatch");
    assert.equal(meta.get("og:url"), expected, route + ": og:url mismatch");
    assert.ok(!seenCanonical.has(expected), route + ": duplicate canonical"); seenCanonical.add(expected);
    assert.ok(sitemapUrls.includes(expected), route + ": missing from sitemap");
    assert.equal((html.match(/<h1\b/gi) || []).length, 1, route + ": expected one H1");
    assert.ok(!html.includes("example.invalid"), route + ": placeholder host leaked");
    const blocks = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
      .filter(m => (attributes("<script " + m[1] + ">").type || "").toLowerCase() === "application/ld+json");
    assert.ok(blocks.length > 0, route + ": missing Organization JSON-LD");
    for (const block of blocks) {
      const value = JSON.parse(block[2]);
      assert.equal(value["@context"], "https://schema.org");
      assert.equal(value.url, origin + "/", route + ": Organization URL mismatch");
    }
  }
  for (const url of sitemapUrls) {
    assert.ok(url.startsWith(origin + "/"), "Sitemap URL outside approved origin: " + url);
  }
  assert.equal(sitemapUrls.length, new Set(sitemapUrls).size, "Duplicate sitemap URLs");
  for (const file of walk(root)) {
    const html = fs.readFileSync(file, "utf8");
    assert.ok(!html.includes("example.invalid"), path.relative(root, file) + ": placeholder host leaked");
  }
  return {origin, verifiedRoutes: routes.size};
}
if (require.main === module) {
  try {
    if (process.argv.length !== 4) throw new Error("Usage: node verify-release.cjs <generated-directory> <approved-https-origin>");
    console.log(JSON.stringify(validate(path.resolve(process.argv[2]), process.argv[3])));
  } catch (err) { console.error(err.message); process.exitCode = 1; }
}
module.exports = { validate, validateOrigin, attributes };
