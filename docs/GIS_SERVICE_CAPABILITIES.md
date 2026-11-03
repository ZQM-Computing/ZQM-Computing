# ZQM Computing — GIS Engineering Capability Statement

*Geospatial engineering, workflow automation, spatial data quality and
systems architecture.*

## Who this is for

Engineering, environmental, infrastructure and public-sector teams with
repeating spatial-data workflows, GIS migrations, data quality bottlenecks,
or integration backlogs. ZQM Computing is the geospatial engineering brand,
**distinct from ZQM Labs**, which develops community-centered games.

Alex Zelenski, GISP, brings approximately 12 years of geospatial
architecture, analysis and development experience. Delivery may be remote
or Florida-local; travel, site access and specialized resources require
separate scope and approval. Procurement, insurance and vendor eligibility
must be verified before any proposal or commitment.

## Core services

| Service | Initial commercial model | What the engagement delivers |
| --- | --- | --- |
| **GIS Workflow Diagnostic** | Proposed **$1,500 fixed fee**, subject to fit | Map one recurring process, review up to three representative inputs and one target output, label observed vs estimated work, identify QA/rework risks, prioritize improvements and prepare a separate implementation scope |
| **Workflow implementation** | Proposed **$5,000–$12,000 range** | Build one explicitly scoped GIS processing or integration workflow; define acceptance fixtures, recovery policy, operator documentation and handoff |
| **Migration discovery** | Proposed **$2,000–$4,000 range** | Inventory source/target data, check CRS/geometry/key semantics, define reconciliation, cutover risks and acceptance conditions; production migration priced separately |
| **Fractional geospatial leadership** | Proposed **$3,500/month for up to 20 hours** | Scheduled technical architecture, code review, test strategy and engineering backlog guidance |

The diagnostic's target turnaround is five business days from kickoff and
receipt of agreed inputs, **not** a blanket guarantee. Prices are proposed
market tests, not binding quotes, agency fee schedules or independently
verified market benchmarks. Capacity and contracting terms must be confirmed.

## Technical foundations and reviewable evidence

These are **open-source, synthetic or reference implementations**, not
client testimonials, signed projects or production guarantees.

| Capability | Public evidence | What is actually demonstrated |
| --- | --- | --- |
| Vector workflow QA | [GeoPandas workflow diagnostic](https://github.com/ZQM-Computing/geopandas-cookbook/blob/main/docs/workflow-diagnostic.md) | Eight synthetic incoming records reconciled into two accepted and six reason-coded rejects; CRS and boundary contracts, input identities, repeatability and report publication tests |
| QGIS dataset inspection | [QGIS read-only dataset QA](https://github.com/ZQM-Computing/qgis-resources/blob/main/docs/DATASET_QA.md) | Synthetic vector/raster inventory and QA, runtime-tested on QGIS 3.40.15 with a pinned Linux CI commit; later tests verify failure-preserving report writes |
| Spatial database architecture | [PostGIS production runbook](https://github.com/ZQM-Computing/postgis-cookbook/blob/main/docs/production-runbook.md) | Synthetic spatial SQL patterns for quality, indexing, joins, access control, migration and recovery planning |
| Migration due diligence | [PostGIS migration discovery scope](https://github.com/ZQM-Computing/postgis-cookbook/blob/main/docs/migration-discovery.md) | A reusable inventory, risk, spatial reconciliation and acceptance template, not a completed client migration |
| Wider technical depth | [Geospatial cookbook index](https://github.com/ZQM-Computing/geospatial-cookbooks) | Independent references spanning GDAL, GeoParquet, DuckDB, STAC, OGC APIs and browser mapping; integration must be verified per project |

## Working method

1. **Fit discussion:** 20 minutes to establish workflow, stakeholder,
   deliverable, frequency and constraints. Do not send credentials or
   confidential datasets through a public issue or ordinary introductory email.
2. **Written scope:** identify the responsible contracting identity, data
   authorization, accepted inputs, exclusions, evidence, delivery milestones,
   revision limits, handoff and payment terms before work begins.
3. **Evidence-based delivery:** validate outputs against explicit CRS, schema,
   geometry, row-count reconciliation and recovery requirements; distinguish
   measured savings from estimates and hypotheses.
4. **Review and next phase:** deliver the agreed packet and findings review;
   implement only under a separate authorized agreement when justified.

## Boundary and procurement posture

- **No professional certification implied.** GIS screening is not a
  certified land survey, professional engineering opinion, environmental
  site assessment, or regulatory approval.
- **No unauthorized data access.** Use only client-authorized inputs and
  separate secure sharing, retention and deletion controls.
- **No false qualification claims.** Business registration, legal contracting
  identity, insurance limits, team capacity, agency vendor status and
  subconsultant eligibility must be confirmed for each solicitation.
- **No fabricated ROI.** Sample tests establish sample behavior, not verified
  client savings or operations at the buyer's scale.
- **Open source stays free.** Clients pay for discovery, scoped integration,
  validation, support and delivery accountability, not access to the
  public cookbook repositories.

## Contact

For a scoped conversation, email **[alexzelenski@outlook.com](mailto:alexzelenski@outlook.com)**
with the recurring workflow, formats/tools, expected output and general
timeframe. Share sensitive data only after a secure exchange is agreed.

*Revision: November 2026. Commercial terms and availability are subject to
individual confirmation.*
