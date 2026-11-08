"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { validate, validateOrigin } = require("./verify-release.cjs");

test("release origin rejects placeholders, HTTP and path prefixes", () => {
  for (const value of ["http://gis.example.org", "https://example.invalid", "https://localhost",
    "https://gis.example.org/path/", "https://gis.example.org/?ref=1"]) {
    assert.throws(() => validateOrigin(value), value);
  }
  assert.equal(validateOrigin("https://gis.example.org/"), "https://gis.example.org");
});
test("checks complete public SEO contracts, then detects a broken canonical and noindex", t => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "zqm-public-seo-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const origin = "https://gis.example.org";
  const routes = ["/", "/services/gis-workflow-automation/", "/services/postgis-consulting/",
    "/services/environmental-gis-screening/", "/contact/"];
  const records = routes.map((route, i) => {
    const file = path.join(root, route.slice(1), "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const title = "Unique Service " + i;
    const html = [
      "<!doctype html><html><head><title>" + title + "</title>",
      '<meta name="description" content="Distinct description ' + i + '">',
      '<meta property="og:title" content="' + title + '">',
      '<meta name="twitter:title" content="' + title + '">',
      '<meta property="og:url" content="' + origin + route + '">',
      '<link rel="canonical" href="' + origin + route + '">',
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"ZQM Computing","url":"' + origin + '/"}</script>',
      '</head><body><h1>' + title + '</h1></body></html>'
    ].join("");
    fs.writeFileSync(file, html);
    return {file,html,route};
  });
  fs.writeFileSync(path.join(root, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: " + origin + "/sitemap.xml\n");
  fs.writeFileSync(path.join(root, "sitemap.xml"),
    '<?xml version="1.0"?><urlset>' + routes.map(x => "<url><loc>" + origin + x + "</loc></url>").join("") + "</urlset>");
  assert.equal(validate(root, origin).verifiedRoutes, 5);
  const r = records[1];
  fs.writeFileSync(r.file, r.html.replace('href="' + origin + r.route + '"', 'href="https://wrong.example.org/"'));
  assert.throws(() => validate(root, origin), /canonical mismatch/);
  fs.writeFileSync(r.file, r.html.replace("</head>", '<meta name="robots" content="noindex"></head>'));
  assert.throws(() => validate(root, origin), /blocked from search/);
  fs.writeFileSync(r.file, r.html);
  fs.writeFileSync(path.join(root, "robots.txt"), "User-agent: *\nDisallow: /\n");
  assert.throws(() => validate(root, origin), /allow crawling/);
});
