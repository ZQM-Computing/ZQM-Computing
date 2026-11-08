#!/usr/bin/env node
"use strict";
// Fail-closed check for the unpublished Computing Hugo prototype.
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

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
assert.match(robots, /User-agent:\s*\*/i);
assert.match(robots, /Disallow:\s*\//i, "preview must not allow indexing");
assert.doesNotMatch(robots, /^Allow:\s*\/$/im, "preview must not advertise crawl access");
for (const route of routes) {
  const html = fs.readFileSync(path.join(root, route), "utf8");
  assert.match(html, /<title>[^<]+<\/title>/i, route + ": missing title");
  assert.match(html, /<meta\s+name="description"\s+content="[^"]+"/i, route + ": missing description");
  assert.match(html, /<meta\s+name="robots"\s+content="noindex,nofollow"/i, route + ": preview must be noindex");
  assert.doesNotMatch(html, /<link\s+rel="canonical"/i, route + ": unpublished host must not be canonicalized");
  assert.doesNotMatch(html, /<meta\s+property="og:url"/i, route + ": unpublished host must not be in og:url");
  const title = html.match(/<title>([^<]+)<\/title>/i)[1];
  const ogTitle = html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i)?.[1];
  const twitterTitle = html.match(/<meta\s+name="twitter:title"\s+content="([^"]+)"/i)?.[1];
  assert.equal(ogTitle, title, route + ": Open Graph title mismatch");
  assert.equal(twitterTitle, title, route + ": Twitter title mismatch");
  assert.match(html, /<h1\b/i, route + ": missing h1");
}
console.log("Computing preview SEO safeguards passed for " + routes.length + " pages.");
