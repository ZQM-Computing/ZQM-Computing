# Shared pipeline source register and QA checklist

Prepared November 15, 2026. Fillable delivery aid for ZQM Computing pilots.
Use with the [tooling standard](gis-pilot-tooling-standard.md) and
[scope templates](workflow-engagement-scope-templates.md).

The canonical [commercial service contract registry](https://github.com/ZQM-Computing/geospatial-cookbooks/blob/d95752d91a13489667601478a6d016708914faf9/docs/commercial-service-contracts.json)
defines required evidence for `gis-automation`. This checklist helps collect
that evidence; it does not introduce a competing machine-readable schema.
Map fields to an existing client/cookbook register when one exists and record
the mapping. Keep completed client registers and restricted evidence outside
public repositories.

## 1. Scope and acceptance record

| Field | Complete before implementation |
| --- | --- |
| Engagement / workflow | `[ID, one process, beginning and end]` |
| Owner and reviewer | `[operator, acceptance reviewer, responsibilities]` |
| Authorized environment | `[runtime, location, access, retention, target]` |
| Input/output contract | `[formats, schema, keys, CRS, units, volume limits]` |
| Quality thresholds | `[blocking rules, accepted/rejected limits, coverage requirements]` |
| Spatial rules | `[boundary predicate, tolerances, overlap policy, measurement method]` |
| Publication and recovery | `[staging, release protocol, prior-good retention, rollback/replay]` |
| Approved scope version | `[revision, approval reference and date]` |

## 2. Source register: one entry per source snapshot

| Evidence group | Required content |
| --- | --- |
| Identity | Stable source ID; title; publisher/custodian; URL or authorized origin; version, edition or snapshot identifier. |
| Permission | License/terms reference; attribution; permitted processing, retention and redistribution; unresolved restrictions and decision owner. Public download alone does not establish unrestricted reuse. |
| Dates | Effective/reference period, publication/update date when known, and retrieval date/time with available precision. Preserve a date-only value as date-only; label unknowns rather than inventing a timestamp. |
| Coverage | Geographic and thematic coverage, resolution/scale, freshness limitations and one canonical state: `verified`, `partial`, `missing`, `unavailable` or `unverified`. Record evidence and a narrative explanation. |
| Snapshot identity | Relative artifact name or controlled location, byte size and SHA-256 for file snapshots. For databases/APIs, identify the extract/query, filters and consistent snapshot or known consistency limit; hash the retained export where permitted. |
| Spatial reference | Native and analysis/output CRS, axis order, horizontal/vertical units where relevant, transformation operation and required grids. Record assumed or unverified information explicitly. |
| Processing lineage | Input layers/tables, key and schema mappings, filters, geometry repairs, joins/aggregation and derived output IDs. Record exclusions and known missingness. |
| Uncertainty | Positional/temporal limitations, ACS uncertainty when relevant, incomplete POI/network coverage and permitted interpretations. |

For constraints, missing/unverified coverage cannot be reported as evidence
of no constraint. For location indicators, unavailable data cannot silently
become zero or an unfavorable score. Define missing-data treatment in the
scoring/report contract. Preserve the actual upstream source-register snapshot
with the run rather than relying only on a mutable website link.

## 3. Run record and delivery manifest

| Field group | Required evidence |
| --- | --- |
| Run identity | Run ID; start/end times with timezone; code commit; configuration revision/hash; operator and environment. |
| Runtime | Python and package versions, native libraries/drivers, DuckDB extension versions, database/QGIS version when used, and lockfile or container digest/platform reference. |
| Inputs | Source IDs and snapshot/hash references matching the source register. |
| Counts and keys | Input count; accepted/rejected counts; reason counts; distinct-key counts; join cardinality and any aggregated/output counts. |
| QA results | Rule ID, expectation/threshold, observed value, `pass`/`fail`/`unknown`/`not-applicable`, evidence location and blocking/advisory classification. Explain any not-applicable result. |
| Outputs | Release ID; relative filename or database target/version; content hash where applicable; rows/features, schema and CRS; source-register snapshot reference. |
| Maps / pages | Page number, filename, parcel/site ID, indicators/flags, CRS, generation date and data-release ID when a map series is produced. |
| Outcome | Separate processing status, quality-gate status and publication status. Include failure/retry/recovery evidence and reviewer decision/date. |

These are logical requirements, not a claim that every existing demo already
emits every field. Redact secrets and unnecessary personal data from logs,
manifests and client-visible metadata while retaining traceable evidence in
the authorized environment.

## 4. QA gates

Before delivery, assign an expectation and evidence location to each applicable
row. An `unknown` blocking result holds publication; it is not a pass.

| Gate | Required check / acceptance evidence |
| --- | --- |
| Scope and rights | Inputs, handling and reuse are authorized; source coverage meets the agreed purpose; unresolved restrictions have an owner. |
| Schema and identity | Required columns/types/domains, non-null keys, duplicate policy and feature types match the contract. Include failing probes. |
| Spatial reference | Native CRS verified; transformation/axis order/units tested against known values; required transformation resources available. |
| Geometry | Null, empty, invalid and unexpected geometry handled explicitly. Approved repairs preserve originals and have reviewed type/part/measurement changes. |
| Row reconciliation | Before joins or aggregation, every source row has exactly one accepted/rejected disposition: input = accepted + rejected. Keep row-level reasons; reason totals may overlap only under a declared multi-reason scheme. |
| Join / aggregation reconciliation | Record expected one-to-one, one-to-many or many-to-many behavior, unmatched/duplicate matches and resulting counts. For aggregation, reconcile contributing source IDs and measures; do not require final output count to equal input count. |
| Quality threshold | Enforce the agreed reject-rate, minimum acceptance and coverage rules explicitly. An all-rejected run can complete processing successfully while failing delivery acceptance. |
| Values and spatial meaning | Compare source/target key sets and relevant values, not only counts. Verify known locations, boundary cases, units and expected relationships; apply declared numeric tolerances. |
| Readback | Reopen actual written files or query the staged target; verify schema, CRS, geometry, records and representative values. |
| Repeat run | Demonstrate the agreed same-input behavior and duplicate handling; distinguish within-batch checks from cross-batch deduplication. |
| Failure and recovery | Exercise malformed input and an applicable failure during publication/loading. Show prior-good preservation and safe replay/rollback on an authorized staging target. |
| Complete release | Dataset, report, source snapshot and maps identify the same accepted run/release. A manifest becomes authoritative only under the tested completion/publication protocol. |
| Human review | Named reviewer accepts actual QA evidence, exceptions, limitations and outputs before client delivery. Production promotion also needs the scoped security/rollback authorization. |

## 5. Delivery review

- [ ] Scope, input/output contract and thresholds are agreed and versioned.
- [ ] Source/register snapshots, reuse terms, coverage and dates are present.
- [ ] Reconciliation, readback and negative-case evidence are recorded.
- [ ] Recovery/replay was exercised for the actual target and scope.
- [ ] No blocking `fail` or `unknown` is presented as accepted output.
- [ ] All outputs share a run/release ID and a tested completion protocol.
- [ ] Map legends, sources, units, scale, CRS and domain-specific limitations are readable.
- [ ] Synthetic inputs/results are labeled; missing data is distinct from zero.
- [ ] Runbook, dependencies, operator, support boundaries and review are recorded.
- [ ] Client-delivery acceptance and any production authorization are recorded separately.

Record unresolved items with owner, consequence and disposition. Advisory
exceptions require an explicit reviewer decision and visible limitations;
they must not silently disable a blocking contract rule.
