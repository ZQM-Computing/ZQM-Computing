#!/usr/bin/env node
"use strict";
// Fail-closed verification of the unpublished Computing Hugo prototype.
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const root = path.resolve(process.argv[2] || "commercial-site/public");
const routes = [
  "index.html",
  "services/gis-workflow-automation/index.html",
  "services/postgis-consulting/index.html",
  "services/environmental-gis-screening/index.html"
];

function attrs(tag) {
  const out = {};
  for (const match of tag.matchAll(/([^\s=<>]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    out[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4];
  }
  return out;
}
function metadata(html) {
  const meta = {};
  for (const tag of html.match(/<meta\b[^>]*>/gi) || []) {
    const a = attrs(tag);
    const key = (a.name || a.property || "").toLowerCase();
    if (key) meta[key] = a.content || "";
  }
  return meta;
}

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
assert.match(robots, /User-agent:\s*\*/i);
assert.match(robots, /Disallow:\s*\//i, "preview must block crawler access");
assert.doesNotMatch(robots, /^Allow:\s*\/$/im, "preview must not advertise crawl access");
for (const route of routes) {
  const html = fs.readFileSync(path.join(root, route), "utf8");
  const meta = metadata(html);
  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  assert.ok(title, route + ": missing title");
  assert.ok(meta.description?.trim(), route + ": missing description");
  const directives = (meta.robots || "").toLowerCase().split(",").map(s => s.trim());
  assert.ok(directives.includes("noindex") && directives.includes("nofollow"),
    route + ": preview must be noindex,nofollow");
  assert.ok(!(html.match(/<link\b[^>]*>/gi) || []).some(tag => (attrs(tag).rel || "").toLowerCase().split(/\s+/).includes("canonical")),
    route + ": unpublished host must not be canonicalized");
  assert.ok(!meta["og:url"], route + ": unpublished host must not be in og:url");
  assert.equal(meta["og:title"], title, route + ": Open Graph title mismatch");
  assert.equal(meta["twitter:title"], title, route + ": Twitter title mismatch");
  assert.match(html, /<h1\b/i, route + ": missing h1");
}
console.log("Computing preview SEO safeguards passed for " + routes.length + " pages.");
