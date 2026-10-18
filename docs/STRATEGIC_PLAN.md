# ZQM Computing — 12-Month Strategy and Operating Plan

**Version:** 2.0 proposed | **Updated:** 2026-10-18  
**Horizon:** 18 October 2026–17 October 2027  
**Status:** Proposed for review; not a claim that every repository or deployment currently passes.

## Positioning
ZQM Computing is the geospatial engineering and technical knowledge arm of ZQM Labs. It publishes reusable geospatial patterns, data-engineering examples, spatial infrastructure practices, and developer tools for GIS analysts, geospatial developers, data engineers, and adjacent technical teams.

The public promise is practical and reproducible: explain the problem, state assumptions, show runnable patterns, identify trade-offs, and let readers verify the result. It should not read like a games-marketing site; ZQM Labs should not be reduced to a technical tooling catalog.

## Strategic priorities
1. **Trustworthy portfolio:** each public repository has a clear purpose, license/provenance, supported environment, working examples, meaningful CI, and stated support level.
2. **Useful technical publishing:** prioritize tested patterns that solve common workflows over repository volume.
3. **Reproducibility:** provide small sample data, explicit CRS/units, bounded dependencies, expected outputs, cleanup, and known limitations.
4. **Discoverability:** make the umbrella repo and docs sites guide users to the right tool and avoid dead links.
5. **Responsible reuse:** integrate with ZQM Labs through documented interfaces and non-sensitive/synthetic examples.
6. **Operational discipline:** make GitHub Actions, Cloudflare Pages, dependency scanning, and release status observable.

## Baseline and uncertainty
The public portfolio README describes geospatial repositories across PostGIS, pgRouting, GDAL, GeoPandas, GeoParquet, COG/STAC, MapLibre, H3, DuckDB, QGIS, infrastructure operations, and Ollama fleet patterns. Cloudflare Pages has multiple documentation projects linked to ZQM-Computing repositories. The broader estate audit found placeholder CI in some repos and an umbrella consolidation proposal whose destination checks are not yet sufficient to justify bulk migration.

These are source/documentation observations, not proof that every repo is healthy or every site is live. The inspected Cloudflare configuration showed production deployments disabled for 17 Git-connected Pages projects. Confirm intent and current deployment history before changing settings.

## Repository quality tiers
- **Tier A — maintained reference:** meaningful CI, tested examples, versioned docs, license/provenance, security reporting path, maintenance expectation.
- **Tier B — useful but limited:** core content works, but coverage, supported versions, or maintenance commitment is incomplete and clearly stated.
- **Tier C — experimental/archive candidate:** research or prototype, labeled as such, with no implied production support.

A polished README alone does not promote a repo to Tier A. Require executed checks and a clean setup/example run.

## Standard release checklist
1. Confirm scope and consumer impact.
2. Run syntax, unit, integration, and example tests appropriate to the stack.
3. Validate dependency/license provenance and scan for secrets.
4. Build docs in an executed job or controlled local environment.
5. Check links and live-domain smoke tests where applicable.
6. Verify examples against expected outputs.
7. Record release notes, known issues, and rollback.
8. Compare deployed content with the intended commit before calling it released.

## Cross-estate alignment from the 83-repository audit

The supplied consolidated audit reports 83 repositories across ZQM-Computing and ZQM-Labs. Reconcile counts and findings against a fresh GitHub inventory before treating them as current.

For the public geospatial portfolio, keep `geospatial-patterns` as the umbrella/index and each technology-specific repository canonical only for its bounded subject. The audit reports 11 geospatial technology repos and describes them as MIT, dependency-light, and runnable; verify actual license files and clean-environment execution before making this a blanket claim. Use the umbrella for navigation and cross-cutting examples, not as a reason for bulk migration.

Cross-estate risks include 36/62 active repositories reportedly having permanently-red supply-chain scans because existing debt is not distinguished from newly introduced findings; six repos reportedly claiming capabilities not delivered; and two unreviewed PRs (`ZQM-Labs/ollama-bridge#15`, `ZQM-Labs/zqm-hermes-skills#25`). Baseline-aware scans must keep inherited findings visible, gate new findings, and never suppress critical exploitable issues just to restore green status. Review stale PRs at current head SHA, including full diff, security impact, and executed checks. See the [prioritized estate remediation plan](https://github.com/ZQM-Labs/zqm-wiki/blob/main/docs/estate-remediation-plan-2026-10-18.md).

## Roadmap

### Phase 1 — Truth and trust (18 October–December 2026)
- Audit the umbrella repo and Pages-connected technical repos.
- Replace placeholder workflows with stack-appropriate checks. If runner failures prevent execution, mark results inconclusive.
- Standardize README essentials: purpose, quick start, supported versions, tests, outputs, license, security contact, maintenance status.
- Audit docs domains, build outputs, broken links, and deployment provenance.
- Produce a per-repo disposition register with evidence and explicit unknowns.

**Exit:** priority repos have a tier, accountable role, test path, and truthful maintenance status. No bulk migration until umbrella CI is credible.

### Phase 2 — Reproducible references (January–March 2027)
- Select representative high-value patterns and make clean setup plus tests reliable.
- Add example data and expected-output checks where licensing/privacy permit.
- Add performance and resource notes for heavy spatial/database examples.
- Improve cross-repo navigation without duplicating authoritative tutorials.
- Document preview/production distinctions and release checks for each Pages site.

**Exit:** a new user can follow selected quick starts in a clean environment and verify results.

### Phase 3 — Adoption and integration (April–June 2027)
- Publish task-oriented guides spanning conversion, storage, analysis, and serving.
- Document safe geospatial interfaces used by ZQM Labs with synthetic fixtures.
- Measure useful adoption proxies: issue quality, repeat contributors, downstream references, and verified task completion.
- Improve contribution guidance from observed friction.
- Pilot a proposed umbrella consolidation only if it reduces maintenance without erasing domain workflows.

**Exit:** selected repos/guides show real use or clear learner value; consolidation is evidence-based.

### Phase 4 — Portfolio optimization (July–October 2027)
- Promote Tier B repos only when evidence supports it.
- Archive stale experiments only after consumer, license, and user-impact review.
- Publish a portfolio report describing maintenance, experiments, gaps, and next-year priorities.
- Optimize around user tasks and maintenance capacity, not raw repo count.

## Technical workstreams

### Docs and examples
Use concise problem statements, assumptions, sample inputs, exact commands, expected outputs, cleanup, and failure modes. Explain CRS, units, geometry validity, precision, data freshness, coordinate transformations, and scale limits. Prefer synthetic/sanitized fixtures. State whether external APIs are optional or required.

### CI and supply chain
Match checks to stack: GDAL binaries, Python geospatial packages, PostGIS/pgRouting services, DuckDB/GeoParquet, STAC, browser examples, and infrastructure runbooks need different validation. Do not make workflows green by echoing success, globally disabling scanners, or silently skipping tools. Record runner failures separately from code failures.

### Cloudflare Pages
Maintain a matrix of project, source repo, branch, build command, output directory, custom domain, current deployment SHA, and smoke-test result. Confirm why production deployment is disabled before changing any flag. Test a representative project and rollback before applying any policy broadly. Keep secrets/private content out of static artifacts.

### Security and governance
Maintain LICENSE, security reporting, contribution guidance, dependency scanning, and a clear support status. Keep credentials and internal topology out of public docs. Require review for DNS, Worker routes, access policy, production workflows, and data-handling changes.

## Metrics
Capture baselines before numeric targets.

| Metric | Definition |
|---|---|
| Meaningful CI coverage | Active repos whose checks execute meaningful behavior |
| Reproducible examples | Selected quick starts passing in a clean environment |
| Documentation integrity | Broken internal/external links, triaged by criticality |
| Deployment traceability | Pages projects with source SHA, successful deploy record, and live smoke test |
| Adoption quality | Useful issues, repeat contributors, downstream references, verified task completion |
| Maintenance burden | Critical issues, time to repair, recurring CI failures |
| Security hygiene | High/critical findings and age of documented exceptions |

## Risks
- Placeholder CI creates false confidence: inspect steps and logs, not badge color alone.
- Bulk consolidation breaks consumers: preserve source repos and migrate one domain at a time.
- External APIs/data drift: pin fixtures, document freshness, add contract checks.
- Private data leaks: use synthetic fixtures and review published artifacts.
- Portfolio overextension: limit Tier A commitments to actual maintenance capacity.
- Deployment surprises: inspect Cloudflare state and history; no blanket production enablement.

## Governance and open decisions
Weekly: prioritize failed checks and user-impacting docs defects. Monthly: review tiers, Pages status, and adoption evidence. Quarterly: review scope, access, and recovery practices.

Resolve:
- Which repositories are Tier A and who is accountable?
- Is Pages production deployment being disabled intentional, and what is the promotion model?
- Is geospatial-patterns an index or future monorepo? Its checks must be proven before migration.
- What support level can actually be sustained for each public repo?

This plan authorizes no production change, bulk migration, or mass archive.
