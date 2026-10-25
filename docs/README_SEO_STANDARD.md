# README and search-discoverability standard

This standard governs public ZQM Computing repository READMEs and the public ZQM Labs project READMEs. It is intended to improve search-engine snippets, GitHub repository discovery, and the first-run experience without keyword stuffing or unsupported claims.

## Required README opening

1. **Specific H1:** Use the tool, format, product, or domain name people search for (for example, “QGIS and PyQGIS Resources” rather than “Resources”).
2. **First-paragraph summary:** In roughly 40–80 words, state what the repository does, the main technologies, the intended user, and the practical problem it solves. Put the strongest natural search terms in the first two sentences.
3. **Audience and use case:** Name the likely reader and concrete tasks.
4. **Truthful status:** Distinguish implemented examples from planned work, reference code from production service, documentation links from tested integration, and synthetic fixtures from real-world data.
5. **Fast path:** Provide the shortest verified quickstart, required versions/dependencies, and expected output. If no runnable quickstart exists, say what must be installed and link to the tested path instead of inventing commands.
6. **Evidence:** Link to the exact CI workflow, tests, fixtures, examples, API docs, or release notes that support claims.
7. **Navigation:** Link to relevant sibling repositories only when the relationship is useful. Label relationships as documentation, optional interoperability, or verified runtime/build dependency; never imply integration from a link alone.
8. **Limitations and safety:** State meaningful CRS/SRID, data rights, privacy, access, production, hardware, or runtime limitations where applicable.
9. **Contribution and license:** Link to the actual contribution guide and license where they exist. Do not claim a license when repository metadata/files do not support it.

## Search quality rules

- Write for humans first; include domain terms naturally (QGIS, PyQGIS, GDAL/OGR, GeoPandas, PostGIS, pgRouting, DuckDB Spatial, GeoParquet, COG, STAC, OGC API – Features, MapLibre, H3, Ollama, Proxmox VE, Ceph, or game-specific terms as appropriate).
- Avoid repeated keyword lists, hidden text, keyword stuffing, generic “best/ultimate/production-ready” claims, and unsupported metrics.
- Make page titles unique across repositories. Do not copy one repository's description into every README.
- Keep the first paragraph understandable when GitHub, a search engine, or a link unfurl shows only the opening excerpt.
- Use badges only when they point to real workflows or artifacts. A green badge describes that workflow's status, not product quality, production readiness, conformance, or operational availability.
- Prefer canonical GitHub repository URLs for source links and stable docs URLs for published documentation. Check internal relative links and external links when CI supports it.
- Do not place artificial SEO metadata or YAML front matter into a GitHub README expecting it to set page-level HTML title/description. For actual site SEO, configure the website generator's title, description, canonical URL, sitemap, robots policy, and social-card metadata in the site source.
- Treat repository “About” description, homepage, and topic tags as separate GitHub metadata fields. README edits do not update those fields.

## Repository-specific acceptance checklist

- [ ] H1 uniquely names the project and primary technology/problem.
- [ ] Opening paragraph names audience, core tasks, and expected value.
- [ ] Search terms are relevant and natural, not stuffed.
- [ ] Quickstart commands and output are tested or explicitly marked unverified.
- [ ] Implemented vs planned scope is clear.
- [ ] Data source/license/provenance and privacy constraints are stated where relevant.
- [ ] CI badge and workflow target the intended workflow.
- [ ] Cross-repository links use canonical names and do not imply unverified integration.
- [ ] Relative links, spelling, heading structure, and accessible link text are checked.
- [ ] Any website SEO claims are verified from the actual site configuration and rendered output.

## Portfolio-specific constraints

- Keep ZQM Computing's geospatial engineering/tooling identity distinct from ZQM Labs' games and community products.
- The Observatory may use public sources only after item-level reuse rights and provenance are established. Public availability or a disclaimer does not itself grant redistribution rights.
- Do not use game telemetry, individual movement traces, or personal data to produce Observatory products.
- Geometry alone does not establish access, current conditions, safety, accessibility, or legal status.
- Never describe proposed repository handoffs as tested integrations without a reproducible test or configuration proving the connection.
