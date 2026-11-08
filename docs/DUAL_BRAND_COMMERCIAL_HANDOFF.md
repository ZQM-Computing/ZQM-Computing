# ZQM Computing → unified zqmlabs.com commercial content handoff

Status: **PROPOSED / documentation only / no public release authorization**. Date: 2026-11-07.

## Approved positioning

ZQM Computing remains distinct from ZQM Labs. The single public domain `zqmlabs.com` will offer `/computing/` alongside `/labs/`, with equal homepage brand visibility and Computing's qualified commercial inquiry prioritized. The public Hugo site source lives in `ZQM-Labs/zqmlabs-site`; the Computing organization remains authoritative for technical substance, examples and service limitations.

## Existing assets

- `commercial-site/` is an unpublished Hugo preview with `baseURL=https://example.invalid/`, `publicRelease=false`, excluded canonicals, noindex/nofollow and CI preview verification. Do **not** enable its publication flags or add a second production publisher.
- `docs/services/ENVIRONMENTAL_GIS_SCREENING.md`, `GIS_WORKFLOW_AUTOMATION.md`, and `POSTGIS_CONSULTING.md` supply draft buyer language and scope boundaries.
- `ZQM-Computing/geospatial-cookbooks/docs/commercial-service-contracts.json` defines launch order: preliminary screening, GIS automation, Web GIS/APIs. PostGIS consulting is a capability/evidence subsection, not a substitute for the three-offer launch order.
- The cookbook index and individual GitHub examples are authoritative references, not proof of completed runtime products, customer results, certified GIS deliverables or worldwide source coverage.

## Proposed site content handoff map

| Existing source | Proposed destination | Review |
| --- | --- | --- |
| `docs/services/ENVIRONMENTAL_GIS_SCREENING.md` and `commercial-site/content/services/environmental-gis-screening.md` | `/computing/services/environmental-screening/` | source rights, jurisdiction, limitations, sample deliverables |
| `docs/services/GIS_WORKFLOW_AUTOMATION.md` and corresponding preview page | `/computing/services/gis-automation/` | QA, rerun/recovery, operator handoff |
| `docs/services/POSTGIS_CONSULTING.md`, `geospatial-api-reference`, `maplibre-cookbook` | `/computing/services/web-gis/` | scope, API/security/deployment disclaimers |
| `geospatial-cookbooks` + validated examples | `/computing/guides/` and resource cards | direct canonical links and exact example evidence |

## Commercial page acceptance contract

Each service page requires: plain-language buyer problem; explicitly scoped available/proposed status; audience; deliverables; methodology and review requirements; source/coverage uncertainty where relevant; limitations and exclusions; a source-backed example; and a qualified inquiry CTA. No licensed survey/engineering/regulatory claim; do not infer absence of constraints from missing spatial data. Worldwide applicability is a design aspiration, not guaranteed dataset coverage or lawful service availability.

## Inquiry requirements

Plan a dedicated structured form with service type, general geography, name/email, optional organization, project goal, deliverable and timeline, privacy acknowledgement. Start without uploads or account creation. Submission processing must be isolated from internal automation, use server-side validation and abuse controls, protect message content and email secrets, and record accepted/failed delivery states. Form architecture requires independent security/privacy review and separate release authorization.

## Dependency handoff

1. Review current content, source provenance, claim evidence, service status and existing site/scaffold route collision.
2. Identify authoritative draft text and owners; no dual maintenance as independently published websites.
3. Propose reviewed draft front matter (brand `computing`, `publication_status=draft`, `offer_status=inquiry-only`) in canonical Hugo.
4. Curate a small hero evidence set (GeoPandas, STAC, DuckDB Spatial, GeoParquet, COG); verify exact claims and links.
5. Validate a design preview of all three landing pages and inquiry CTA.
6. Promote pages only when protected canonical publisher and secure inquiry route pass their own gates.

## Proposed measurement

Organic service landing impressions/clicks, form starts, valid accepted inquiries, qualified inquiries, scoped proposals, contracts accepted, gross revenue, delivery hours and repeat customer rate. Define denominators and avoid counting search impressions, demo plays or hypothetical deals as sales.

## Non-authorization

This document does not change `commercial-site/` settings, production routing, site/Docs releases, service availability, form collection, customer data handling, payment collection or contract terms. No PR resulting from this proposal should merge automatically without the required branch/release protections.

## Approved execution update — November 7, 2026

- **Allocation:** Plan and measure engineering effort at **50% ZQM Computing / 50% ZQM Labs** over each rolling four-week execution period. Track actual engineering hours, not PR counts, and reconcile deviations at the next planning review. Security incidents and already-required release gates may temporarily consume capacity without being concealed in the accounting.
- **Brand separation:** Computing owns geospatial services and reproducible products; Labs owns games, hosting and player experience. Maintain separate buyers, statuses, conversion events, data handling and financial attribution.
- **Commercial priority is not staffing priority:** The three Computing service offers remain sequenced internally; that sequencing does not override the 50/50 cross-brand engineering allocation.
- **Implementation path:** Incremental review branches and private/preview builds first. Existing public routes, direct free Wisp demo, privacy controls and noindex/unpublished Computing preview stay unchanged until explicit artifact parity, source provenance and controlled release checks pass.
- **Promotion evidence:** Exact commit and immutable source SHAs, required CI and security results, representative end-to-end tests, rollback proof, negative publication checks, and paid entitlement → fulfillment → customer inbox proof whenever checkout or delivery is affected. Missing evidence blocks deployment; never infer release readiness from a build-only pass.
- **Scope of approval:** Authorize safely isolated implementation proposals and tests; this document does not authorize a production release, force merge, weaker branch protection, new paid infrastructure, credential rotation or trust-root changes.
