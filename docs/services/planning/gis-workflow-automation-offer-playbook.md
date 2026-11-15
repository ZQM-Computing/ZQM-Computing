# ZQM Computing: GIS workflow automation offers and delivery proof

Prepared November 14, 2026. Repository planning reference for ZQM Computing.

**Status:** Proposed offers and implementation hypotheses. The current service
terms in [the repository README](../../../README.md) remain authoritative;
this appendix does not approve price changes or publish website offers.
The [synthetic QA sample](../examples/gis-workflow-qa-synthetic-sample.md)
is a reproducible demonstration, not a client case study.

**Recommended entry offer:** retain the documented **$1,500 GIS Workflow
Diagnostic**, then quote one bounded implementation from the findings.
Automation and data QA belong in the same sales conversation: repetitive
processing is valuable only when its outputs reconcile and failures are visible.
Keep environmental production as the established first-priority technical
offer and use spatial automation as its closest non-environmental extension.
ZQM Labs games retain their own audience, offers and acquisition funnel.

## What is established, and what remains a hypothesis

| Finding | Evidence and limit |
| --- | --- |
| Buyers procure spatial data engineering | USAC's current Enterprise Data Platform RFP, section 6.8, explicitly requests spatial ingestion, validation, format conversion, joins, indexing and CRS transformations. This supports the category, not a forecast of small-project sales. [M1] |
| ZQM already has a buyer-oriented diagnostic resource | The GeoPandas workflow guide documents the proposed $1,500 diagnostic, intake scope, deliverables and conditional five-business-day target. Its report template covers baseline evidence, QA, implementation acceptance and findings review. [G1, G2] |
| A non-environmental demonstration actually runs | This review ran the existing point-record QA demo and its tests: **8 input records, 2 accepted, 6 rejected; 45 tests passed**. Counts reconcile; the edge-point rule and failure behavior are explicit. [G3, G4] |
| Supporting repositories have tested components | The recorded main commits have successful relevant GitHub test/validation workflows. Source inspection confirms specific patterns listed below. They do not establish an integrated customer pipeline. [G1, B3, D4, P2] |
| Quick revenue, willingness to pay and ROI remain unverified | No new paid customer, measured client labor savings, keyword export, conversion rate or successful production migration was established by this review. |

The November market report already identified automation as a priority and
treated prices as hypothetical tests. This brief preserves that evidence
standard. The $1,500 figure is an existing **proposed** offer, not evidence
of a completed sale or newly approved public pricing. [L1]

## 1. Commercial offer ladder

| Stage | Offer | Commercial basis | Buyer receives | Boundary |
| --- | --- | --- | --- | --- |
| Entry | GIS Workflow Diagnostic | Existing documented proposal: **$1,500** | Current-state workflow map, evidence-labeled baseline, QA findings, prioritized recommendations and separately scoped implementation proposal | One recurring process, up to three agreed representative inputs, one target output; implementation and support separate |
| Implementation | One Spatial ETL / Reporting Pilot | Existing repository test range: **$5,000-$12,000**, scoped after discovery | Configured workflow, agreed output, reason-coded exceptions, reconciliation, tests, runbook and handoff | One workflow and one agreed target environment; record/file-size limits and integrations fixed in the statement of work |
| Expansion | Operationalize and maintain the accepted workflow | Quote after delivery evidence; no default retainer price | Agreed scheduling, monitoring, replay/recovery procedure, ownership and support window | Client-funded existing infrastructure where suitable; ongoing operations begin only under an explicit agreement |

The implementation row preserves the current repository's **$5,000-$12,000**
market-test range. The earlier research report suggested **$2,000-$7,500+**
as an alternative hypothesis; that range has not been adopted and does not
supersede the service terms. Neither range is an observed market rate or a
binding quotation. No diagnostic credit or automatic discount is assumed. If the analysis
shows automation is uneconomic, deliver that conclusion as a valid outcome.

The diagnostic's existing target is five business days after kickoff and
receipt of agreed inputs, subject to confirmed scope and availability.
The report template includes a 45-minute findings review and one clarification
round within five business days of report delivery. Confirm those terms in
the engagement; do not represent them as unconditional availability. [G1, G2]

## 2. Three concrete pilot offers

### A. Recurring asset or location-file QA and reporting

**Buyer:** a GIS lead or operations manager receiving recurring location
exports from field teams, contractors, facilities or business units.

**Trigger:** the same file is checked manually every reporting cycle;
duplicate IDs, missing coordinates or uncertain boundaries create rework.

**Proposed scope:** ingest agreed file schemas, enforce declared CRS and
geometry rules, distinguish accepted records from reason-coded rejects,
assign accepted points to the agreed boundaries, and generate one agreed
clean dataset plus a reconciled summary. A client-specific CSV/GeoPackage
adapter is implementation work; the current demo consumes its documented JSON
contract and emits a custom QA bundle.

**Acceptance:** every source row is accounted for once; duplicate policy and
boundary-edge behavior are approved; no silent CRS inference; expected sample
IDs and spatial relationships match; failed runs preserve the prior output.
Downstream loading enforces a separately agreed rejection threshold.

**Proof:** start with the existing GeoPandas diagnostic demo and the
[synthetic summary](../examples/gis-workflow-qa-synthetic-sample.md). It supports a three-minute
walkthrough immediately, without a new platform build. [G1, G3, G4]

### B. Supplier-file standardization and analytical delivery

**Buyer:** an engineering, transportation, logistics or GIS consulting team
combining repeated deliveries from different contributors.

**Trigger:** incompatible coordinate systems, field names or formats delay
every project handoff or report refresh.

**Proposed scope:** standardize a fixed inventory of agreed inputs into a
documented GeoPackage or GeoParquet schema, record field/CRS mappings and
source versions, check geometry/IDs and verify the written output by reopening
it. If spatial summaries are needed, use explicit join/boundary semantics.

**Acceptance:** required fields and geometry types survive conversion;
key sets, counts and representative values reconcile; CRS and units are
verified after writing; repeat-run and existing-output policies are explicit;
unsupported records are rejected or quarantined under an agreed rule.

**Proof:** GDAL conversion/reprojection examples and runtime tests, plus
DuckDB GeoParquet round-trips and geometry-quality queries. These are
components; controlled batch publication and client-schema adapters still
need implementation and tests. The simple GDAL raster batch example alone
is not an operational ETL product. [D1-D4, B1-B3]

### C. Spatial database import and reconciliation pilot

**Buyer:** a team already using PostgreSQL/PostGIS with a bounded import,
reporting refresh or migration-preparation task.

**Trigger:** database loads cannot be trusted, duplicates appear, or a target
schema needs verified mapping before a broader migration.

**Proposed scope:** map one agreed source to a staging schema; validate keys,
types, SRID and geometry; compare source and staged records in both directions;
demonstrate a repeatable import and rollback/replay plan. Production promotion
is separately authorized after review of actual staging evidence.

**Acceptance:** source/staging key sets and business values reconcile, not
just row counts; duplicate and wrong-SRID probes fail as intended; rejected
records are traceable; failure recovery is exercised without changing the
authoritative source.

**Proof:** PostGIS data-quality/staged-repair patterns and assertions, plus
the GeoPandas optional PostGIS read example. That Python example uses a
temporary table; it does not prove persistent writes, an enterprise migration,
CDC, cross-system transactionality or an ArcGIS Utility Network migration. [P1-P3, G5]

## 3. Which buyers to test first

These are prioritization hypotheses based on scope and existing proof, not
verified sales-cycle statistics.

| Priority | Buyer and observable trigger | Initial conversation | Likely scope trap |
| --- | --- | --- | --- |
| 1 | Existing GIS/engineering consultancy with repetitive project deliveries and an identified GIS owner | Review one recurring task and its most recent failure/rework example | Unpriced white-label revisions or an entire project backlog |
| 2 | Asset, facilities, logistics or utility team with an established file export and repeated QA | Diagnose the refresh between one approved source and one required report | Live system integrations, operational criticality or access rights discovered late |
| 3 | GIS team planning a bounded PostGIS import or format migration | Profile a representative sample and define acceptance/rollback | Treating a pilot as authorization for enterprise cutover |

A named process, owner, current input, output consumer and repeat frequency
are stronger qualification signals than industry labels alone. A manager
who can approve a small defined engagement is more useful for the initial
experiment than a broad organization-level statement of interest.

USAC is included as **demand-language evidence**, not a recommendation that
ZQM prime the full solicitation. Its scope retains ArcGIS Enterprise as the
authoritative spatial system, and its revised Q&A states there is currently
no geospatial data in the warehouse. Do not read desired capability as an
already implemented GIS warehouse or claim ZQM has the corresponding
enterprise operating experience. [M1, M2]

## 4. Exact resource-to-offer map

| Resource | Reusable evidence | Sales use | Work still needed for a client |
| --- | --- | --- | --- |
| `geopandas-cookbook/docs/workflow-diagnostic.md` | Existing diagnostic scope, demo walkthrough and $1,500 proposal | Lead proof page and entry-offer anchor | Agree current scope, availability, legal contracting identity and secure sample exchange |
| `geopandas-cookbook/docs/diagnostic-report-template.md` | Workflow map, baseline labels, QA controls, decisions and acceptance template | Deliverable preview for paid discovery | Fill with authorized observations; preserve unknowns |
| `geopandas-cookbook/demos/workflow_qa.py` and `tests/test_workflow_qa.py` | Explicit CRS, exact duplicate-ID policy, edge-inclusive boundary, row reconciliation, deterministic output, atomic single-file replacement and failure tests | Live synthetic diagnostic demonstration | Client format adapters, domain rules, rejection thresholds and deployment |
| `duckdb-spatial-cookbook/patterns/05_geoparquet_workflows.sql` | Joined/partitioned export and typed readback | Serverless/local file analytics demonstration | Production overwrite policy, bounded resource profile and client schema validation |
| `duckdb-spatial-cookbook/patterns/07_geometry_quality.sql` | Quality findings for null/duplicate IDs and null/empty/invalid geometry | Explain pre-export QA | Explicitly make findings block downstream publication when policy requires it |
| `duckdb-spatial-cookbook/patterns/08_missing_coverage_vs_zero.sql` | Unknown distinguished from observed zero | Reporting reliability | Domain-specific definitions and missingness rules |
| `postgis-cookbook/patterns/05_data_quality.sql` | Geometry/ID checks and temporary staged geometry repair | Database QA and cleanup illustration | Approved repair rules, change audit, review of geometry/area changes and promotion controls |
| `postgis-cookbook/tests/assertions.sql` | Schema, key, SRID, expected results, negative inputs and source/value reconciliation | Show concrete acceptance design | Tests on the customer's target version and representative staging workload |
| `gdal-cookbook/examples/01-ogr2ogr-conversion/run.sh` and `03-gdalwarp-reprojection/run.sh` | Reproducible conversion and reprojection examples | Format/CRS standardization proof | Source/target mapping, licensing, precision and client output checks |
| `gdal-cookbook/tests/test_examples_integration.py` | Reopens actual output, checks CRS, dimensions, counts, VRT/COG behavior and protected Rank 1 output | Show runtime verification rather than file-existence claims | Tests for the specific client delivery contract |
| [QGIS parcel Atlas](https://github.com/ZQM-Computing/qgis-resources/pull/57) | Generated layouts, PDF page checks and manifests for a synthetic environmental exhibit | Supporting output-production skill when a buyer needs map series | Non-environmental themes and client layouts require their own acceptance; not the lead proof for ETL |

Airflow, Prefect and dlt remain secondary architecture options. Their current
source and runtime state were not audited in this brief. Add orchestration
only when scheduling, dependencies, retries, workload or the client's existing
environment justify it. A customer's existing scheduler or a documented manual
command may satisfy a small pilot without a new recurring service.

## 5. Proof run completed in this review

| Item | Result |
| --- | --- |
| Producer commit | GeoPandas `f91ca285cc89f77773776327c6c9547248695de7` |
| Input | Committed synthetic `demos/workflow-input.json` |
| Input SHA-256 | `318fc09e1c430c77c36ee1e580ec8495b7f725b8dd9a58fce2be355d2079b974` |
| Counts | 8 inputs = 2 accepted + 6 rejected |
| Reject reasons | Duplicate ID: 2; missing name: 1; missing/unreadable geometry: 1; non-point: 1; outside boundary: 1 |
| CRS | EPSG:32617 source and analysis; point-on-edge accepted under `covers` |
| Local tests | `python3 -m pytest tests/test_workflow_qa.py -q`: 45 passed |
| Runtime | Python 3.12.14; GeoPandas 1.2.0; Shapely 2.2.0; pyproj 3.8.0 |
| Outputs generated | A row-level JSON bundle and a separate buyer-readable Markdown summary |

Each command publishes one file atomically. The two commands do not form a
joint transaction. Their matching input hash establishes input identity, not
customer acceptance. The accepted geometries are in the declared analysis
CRS inside a custom QA bundle; this is not a standalone RFC 7946 GeoJSON export.
An all-rejected batch can still complete processing successfully; a loader must
check the agreed quality threshold, not merely the command's exit status.

Run from that repository and revision:

```bash
python demos/workflow_qa.py demos/workflow-input.json /tmp/workflow-report.json
python demos/workflow_qa.py demos/workflow-input.json /tmp/workflow-summary.md --format markdown
python -m pytest tests/test_workflow_qa.py -q
```

The supplied sample summary contains no raw names, IDs or coordinates, but
still exposes counts, CRS, versions and input hash. For real data, review
remaining metadata before sharing. Keep client samples and completed reports
outside public repositories.

## 6. Diagnostic scope and intake

Use the existing report template as the paid deliverable. Collect:

1. The one recurring workflow, its beginning/end and intended consumer.
2. Current tools and versions; authorized environment and an accountable owner.
3. Up to three agreed representative input datasets, including failed cases,
   formats, CRS, volume and update frequency.
4. One target output: schema, format, delivery location and acceptance owner.
5. Actual staff time and elapsed time where observable; otherwise a labeled
   staff estimate or unknown value. Include rework and review effort.
6. Data permission, classification, access, retention/deletion and permitted
   handling. Keep credentials out of public issues or intake messages.
7. The deadline and budget constraints, required licenses, and any external
   system access that could affect implementation.

Deliver a process map, baseline table, QA/risks, ranked recommendations and
an implementation scope if justified. Keep measured values, estimates and
unknowns distinct. Preserve qualified human review where the decision requires it.

## 7. Pilot acceptance specification

Before quoting implementation, agree on the following measurable contract:

| Control | Required agreement / test |
| --- | --- |
| Inventory | Fixed source systems/files, target, maximum agreed batch size and supported runtime |
| Identity | Stable key, duplicate policy, schema mapping and expected feature types |
| Spatial meaning | Declared CRS/axis order/units, approved transformation, boundary predicate and tolerance |
| Reconciliation | Input = accepted + rejected; source/target keys and relevant values compared; spatial joins account for legitimate one-to-many output |
| Exceptions | Reason-coded rejects; critical-failure policy and acceptable rejection threshold |
| Correctness | Golden representative inputs with agreed expected records, values and spatial relationships |
| Repeat behavior | Same-input replay and duplicate policy; do not assume the current demo deduplicates across batches |
| Output publication | Reopen and validate output; no partial batch presented as complete; retain the last accepted output on failure |
| Recovery | Exercise a failure and replay/rollback on an authorized staging target |
| Handoff | Configuration, version pins, runbook, ownership and acceptance review |

For external APIs and databases, explicitly define rate limits, permissions,
transaction boundaries, retry safety and partial-side-effect handling. A local
file's atomic rename does not prove atomicity across independent systems.

Security/production authorization, licensing and platform-specific operations
are scoped requirements. ArcGIS Enterprise operating experience must be supported by documented
delivery evidence. Describe each Esri-related task according to the
demonstrated capability and actual delivery responsibilities. ArcGIS Utility Network
migration and certified professional services are outside this entry offer.

## 8. Qualification and economics

**Good fit:** a repeatable bounded process, a named owner, accessible authorized
samples, an identifiable output and an agreed rule for reviewing exceptions.

**Needs a different scope:** unclear source ownership, enterprise cutover,
unknown APIs, continuously changing requirements, 24/7 operational dependence,
regulated signoff, or large-scale performance commitments without profiling.

Record the buyer's baseline before estimating benefits:

| Measure | Definition |
| --- | --- |
| Baseline labor burden | Runs per period × observed or clearly labeled staff hours per run |
| Remaining labor | Review, exceptions, operation and maintenance after implementation |
| Released capacity | Baseline labor minus remaining labor; not automatically payroll savings |
| Recurring cost | Licenses, hosting, data, support and human QA |
| Indicative payback | Implementation cost divided by defensible net periodic benefit, only if that benefit can be supported |

Do not infer savings from a synthetic demo or promote an estimated figure as
an observed result. For ZQM's own pricing, track sales/discovery effort,
delivery hours, revisions, direct expenses, payment fees and support. Judge
the pilot by collected revenue and actual contribution, not quoted price alone.

## 9. Acquisition experiment

Start with one offer and one reusable proof walkthrough. Choose a small,
deliberate list of organizations with an observable repetitive GIS task or
overflow trigger; qualify the process and decision owner before tailoring a
proposal. Prioritize existing relationships and consultant subcontracting
where access and scope are practical. No messages were sent in this work.

Use the same proof sequence in an authorized conversation: show the intended
contract; run the synthetic input; reconcile accepted/rejected records; explain
failure preservation; ask about the buyer's actual handoffs and exception costs.

Track organization, buyer role, trigger, workflow, current tools, frequency,
data access, deadline, source/channel, fit-call outcome, quoted scope/price,
win/loss reason, delivery effort and repeat potential. Qualified responses
and willingness to pay guide the next decision. No conversion-rate target is
presented here as an observed benchmark.

Move from diagnostic to pilot when the owner, inputs, output and acceptance
are agreed and the economics support implementation. Revise the offer when
buyers consistently ask for a different bounded outcome. Park a segment
when repeated relevant conversations do not produce a credible paid problem.
Keep Labs product metrics and communications separate.

## 10. Current evidence register

The following source inspection was performed for this brief. Recorded
workflow successes concern those commits and tests; they are not certifications
of customer readiness, operating systems, scale, or a complete integration.

| Repository | Inspected main commit | Relevant successful workflow |
| --- | --- | --- |
| GeoPandas | `f91ca285cc89f77773776327c6c9547248695de7` | [Tests](https://github.com/ZQM-Computing/geopandas-cookbook/actions/runs/43661398664) |
| DuckDB Spatial | `3b271db895d2b759a82d304d8b772934a91ed158` | [Validate examples](https://github.com/ZQM-Computing/duckdb-spatial-cookbook/actions/runs/42417381638) |
| GDAL | `2ceee9ebb864550add55e08fe9f32ad6cbfa0700` | [Tests](https://github.com/ZQM-Computing/gdal-cookbook/actions/runs/43661614730) |
| PostGIS | `2fd94fbfb4b9ae2d0c5a26001eeb5034ab4cca98` | [Validate PostGIS examples](https://github.com/ZQM-Computing/postgis-cookbook/actions/runs/43661387353) |

### Sources

- **[L1]** ZQM Market Demand Intelligence - B2C, B2B & Enterprise Search Research - November 2026, November 14, 2026, 24 pages. Internal research reference; the report is not included in this public repository. Its ranges and rankings remain hypotheses where labeled.
- **[M1]** [USAC Enterprise Data Platform procurement page](https://www.usac.org/about/procurement/rfp-it-26-148-enterprise-data-platform-3/) and [second-revision RFP](https://www.usac.org/wp-content/uploads/about/documents/Procurement/RFP-IT-26-148-Enterprise-Data-Platform-2nd-Revision.pdf), section 6.8. Primary procurement evidence, checked November 14, 2026; not a ZQM-qualified quick-sale lead.
- **[M2]** [USAC revised questions and answers](https://www.usac.org/wp-content/uploads/about/documents/Procurement/RFP-IT-26-148-Questions-Answers-1st-Revision.pdf), question 222. The requested GIS warehouse capability should not be confused with its stated existing warehouse contents.
- **[G1]** [GeoPandas workflow diagnostic guide](https://github.com/ZQM-Computing/geopandas-cookbook/blob/f91ca285cc89f77773776327c6c9547248695de7/docs/workflow-diagnostic.md).
- **[G2]** [Diagnostic report template](https://github.com/ZQM-Computing/geopandas-cookbook/blob/f91ca285cc89f77773776327c6c9547248695de7/docs/diagnostic-report-template.md).
- **[G3]** [Workflow QA implementation](https://github.com/ZQM-Computing/geopandas-cookbook/blob/f91ca285cc89f77773776327c6c9547248695de7/demos/workflow_qa.py).
- **[G4]** [Workflow QA acceptance tests](https://github.com/ZQM-Computing/geopandas-cookbook/blob/f91ca285cc89f77773776327c6c9547248695de7/tests/test_workflow_qa.py).
- **[G5]** [Optional PostGIS read example](https://github.com/ZQM-Computing/geopandas-cookbook/blob/f91ca285cc89f77773776327c6c9547248695de7/examples/04-postgis-integration/run.py).
- **[B1]** [DuckDB GeoParquet pattern](https://github.com/ZQM-Computing/duckdb-spatial-cookbook/blob/3b271db895d2b759a82d304d8b772934a91ed158/patterns/05_geoparquet_workflows.sql).
- **[B2]** [DuckDB geometry-quality pattern](https://github.com/ZQM-Computing/duckdb-spatial-cookbook/blob/3b271db895d2b759a82d304d8b772934a91ed158/patterns/07_geometry_quality.sql).
- **[B3]** [DuckDB runner and checks](https://github.com/ZQM-Computing/duckdb-spatial-cookbook/blob/3b271db895d2b759a82d304d8b772934a91ed158/scripts/run_examples.py).
- **[P1]** [PostGIS data-quality pattern](https://github.com/ZQM-Computing/postgis-cookbook/blob/2fd94fbfb4b9ae2d0c5a26001eeb5034ab4cca98/patterns/05_data_quality.sql).
- **[P2]** [PostGIS assertions](https://github.com/ZQM-Computing/postgis-cookbook/blob/2fd94fbfb4b9ae2d0c5a26001eeb5034ab4cca98/tests/assertions.sql).
- **[P3]** [PostGIS repository at inspected revision](https://github.com/ZQM-Computing/postgis-cookbook/tree/2fd94fbfb4b9ae2d0c5a26001eeb5034ab4cca98).
- **[D1]** [GDAL conversion example](https://github.com/ZQM-Computing/gdal-cookbook/blob/2ceee9ebb864550add55e08fe9f32ad6cbfa0700/examples/01-ogr2ogr-conversion/run.sh).
- **[D2]** [GDAL reprojection example](https://github.com/ZQM-Computing/gdal-cookbook/blob/2ceee9ebb864550add55e08fe9f32ad6cbfa0700/examples/03-gdalwarp-reprojection/run.sh).
- **[D3]** [GDAL batch example](https://github.com/ZQM-Computing/gdal-cookbook/blob/2ceee9ebb864550add55e08fe9f32ad6cbfa0700/examples/05-batch-processing/run.sh).
- **[D4]** [GDAL runtime integration tests](https://github.com/ZQM-Computing/gdal-cookbook/blob/2ceee9ebb864550add55e08fe9f32ad6cbfa0700/tests/test_examples_integration.py).

This repository planning appendix records proposed scope, evidence and
limits. It does not change website pricing, approve a production deployment,
contact prospects or create a scheduled operation.
