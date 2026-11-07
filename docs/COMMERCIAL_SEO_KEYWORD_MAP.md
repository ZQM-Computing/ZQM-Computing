# ZQM Computing: commercial organic acquisition map

Status: strategic keyword-to-content plan (2026-11-07). Keyword demand, ranking difficulty, conversions, and service availability are **not independently measured**. ZQM Computing provides GIS engineering, automation and spatial data architecture, not games; ZQM Labs has its own discovery strategy.

## First commercial landing pages

| Primary search intent | Proposed canonical service page | Supporting public evidence | Buyer conversion |
| --- | --- | --- | --- |
| GIS workflow automation services; GIS workflow diagnostic | `/services/gis-workflow-automation/` | GeoPandas and QGIS read-only dataset QA examples | Request a scoped workflow diagnostic |
| PostGIS consulting; spatial database optimization | `/services/postgis-consulting/` | PostGIS production runbook, migration discovery template | Request a spatial-database review |
| environmental constraints mapping; preliminary GIS screening | `/services/environmental-gis-screening/` | QGIS, GeoPandas, STAC/COG examples where verified | Request a preliminary desktop screening |
| GIS data migration services; geospatial data quality | `/services/gis-data-migration/` | PostGIS migration discovery and reconciled QA fixtures | Request migration discovery |
| geospatial API development; GIS system integration | `/services/geospatial-api-development/` | OGC API reference implementation and tested examples | Request integration scoping |

**These paths are proposed, not currently published.** Choose and validate a Computing-controlled domain and publishing repository before implementation. Do not publish service pages on zqmlabs.com or imply a game studio sells geospatial consulting.

## Supporting technical query clusters

- **GIS automation:** how to automate repetitive QGIS workflows; GIS report automation with Python; GeoPandas data validation.
- **PostGIS:** migrate shapefiles to PostGIS; PostGIS index performance; geometry and CRS reconciliation.
- **Environmental screening:** preliminary parcel-level constraints mapping; open wetlands and flood-zone source limitations; data currency and uncertainty in site screening.
- **Cloud-native geospatial:** STAC and COG pipeline design; GeoParquet validation; tile and API serving patterns.
- **Integration:** OGC API Features implementation; reliable GIS ETL; GIS QA audit evidence.

Answer technical questions in the existing cookbooks and link to service pages **only where directly relevant**. Service pages must link back to runnable, verified reference examples. Avoid claiming that unrelated cookbooks are integrated production products.

## Minimum evidence-based page specification

1. State the buyer's problem, method, exact deliverables and exclusions in natural language.
2. Give an immediately useful answer to the main query and a realistic technical worked example.
3. Show the actual evidence: synthetic fixtures, test logs, code, benchmarks with reproducible measurement, or release artifacts.
4. Describe the offer as a proposed scope pending contracting confirmation. Do not publish unverified pricing as a binding offer.
5. Explain data authorization, CRS and positional limits, resolution, privacy, permitted reuse and QA/recovery conditions.
6. For screening explicitly exclude certified surveys, delineations, engineering opinions, environmental site assessments and regulatory approvals.
7. Offer one low-friction qualified inquiry path; do not request confidential datasets or credentials in a public form.
8. Provide unique page title/description, semantic headings, a self-consistent canonical, relevant internal links and accessible diagrams.

## Measurement

- First verify Google Search Console, Bing Webmaster Tools, index coverage and the website's actual host.
- Record organic impressions, clicks and page-to-**qualified inquiry** conversion for each service cluster.
- Separate consultation requests, accepted scopes, signed engagements and collected revenue. Do not report synthetic examples as customer case studies.
- Evaluate keyword expansion only after observed impressions and search terms are available. Paid-ad keyword competition is not organic SEO difficulty.
- Use content consolidation rather than generating duplicate city or industry doorway pages.

## Implementation dependencies and next steps

1. Confirm the Computing publishing host, repository, and DNS ownership; do not infer these from the Labs site.
2. Create a service home and the first three focused service pages with a reviewed technical proof link each.
3. Add a build-time sitemap/robots/canonical/title/link validator and a preview smoke test.
4. Implement privacy-respecting qualified inquiry events; determine which legitimate channels produce real contracts.
5. Compare early results by commercial intent and conversion rather than raw traffic.

Reference: [current GIS capability statement](GIS_SERVICE_CAPABILITIES.md) and [public README discoverability standard](README_SEO_STANDARD.md).
