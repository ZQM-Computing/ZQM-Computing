# Cookbook Portfolio Inventory and Quality Audit Plan

**Review date:** 2026-10-26  
**Scope:** Public cookbook repositories in the ZQM-Computing and ZQM-Labs organizations  
**Status:** Inventory reconciliation complete; repository-level quality audit pending

## Executive summary

The current organization-scoped GitHub repository search returned **91 ZQM-Computing cookbook repositories** and **11 ZQM-Labs cookbook repositories**. The published annotated catalogs contain matching entries for all repositories in those search results:

| Measure | ZQM-Computing | ZQM-Labs |
| --- | ---: | ---: |
| Cookbook repositories found | 91 | 11 |
| Catalog entries matched to found repositories | 91 | 11 |
| Missing catalog entries | 0 | 0 |
| Duplicate catalog entries | 0 | Not detected |

For ZQM-Computing, the annotated directory is `ZQM-Computing/COOKBOOKS.md` in the `ZQM-Computing/ZQM-Computing` repository. Its 91 unique cookbook slugs matched the 91 cookbook repositories returned by the search. For ZQM-Labs, all 11 discovered cookbook repositories were represented in `ZQM-Labs/.github/COOKBOOKS.md`.

This is **catalog coverage evidence only**. It does not mean that every cookbook is complete, secure, runnable, maintained, licensed appropriately, passing CI, or validated in its target application. Those claims require a separate repository-by-repository review.

## Canonical discovery links

### ZQM-Computing

- [Organization profile](https://github.com/ZQM-Computing/.github/blob/main/profile/README.md)
- [Annotated cookbook directory](https://github.com/ZQM-Computing/ZQM-Computing/blob/main/COOKBOOKS.md)
- [Geospatial cookbook index](https://github.com/ZQM-Computing/geospatial-cookbooks)
- [Organization repository listing](https://github.com/orgs/ZQM-Computing/repositories)

### ZQM-Labs

- [Organization profile](https://github.com/ZQM-Labs/.github/blob/main/profile/README.md)
- [Cookbook catalog](https://github.com/ZQM-Labs/.github/blob/main/COOKBOOKS.md)
- [Organization repository listing](https://github.com/orgs/ZQM-Labs/repositories)

## Audit goals

1. Find and fix broken repository, documentation, contribution, security, and example links.
2. Identify repositories with placeholder, boilerplate, or unusually thin documentation.
3. Check that examples have explicit prerequisites, reproducible steps, and expected results.
4. Verify that documented tests and workflows exist and distinguish current CI results from historical claims.
5. Record runtime and version assumptions, licensing, security/privacy concerns, and known limitations.
6. Prioritize improvements by user value, risk reduction, reuse, and effort.
7. Establish repeatable checks so catalogs and quality claims do not silently drift.

## Repository-level review rubric

Review each cookbook using the following checklist. Record **Pass**, **Needs work**, **Not applicable**, or **Not yet checked**, with a short evidence note for each applicable item.

- [ ] **Purpose and scope:** states the intended audience, use cases, and explicit boundaries.
- [ ] **Substantive content:** contains topic-specific guidance rather than only generic boilerplate or promises of future work.
- [ ] **Quick start:** lists prerequisites and supported versions, with steps that a new user can follow.
- [ ] **Runnable example:** provides a minimal example, input or fixture, command, and expected output where appropriate.
- [ ] **Reproducibility:** identifies environment assumptions, configuration, dependencies, and version-sensitive behavior.
- [ ] **Tests:** documents exact test commands and explains what the tests cover.
- [ ] **CI evidence:** links to the relevant workflow and records the commit/ref and observed status; do not infer a pass from workflow presence alone.
- [ ] **Target-runtime validation:** distinguishes static checks and unit tests from actual validation in the target application or service.
- [ ] **Security and privacy:** handles credentials safely and describes relevant authorization, data handling, and threat limitations.
- [ ] **Safety and accessibility:** documents applicable physical-safety, accessibility, or operational constraints.
- [ ] **License and attribution:** license is discoverable and external assets or copied material are attributed appropriately.
- [ ] **Link integrity:** internal anchors, repository links, referenced files, and external documentation links are checked.
- [ ] **Maintenance signals:** records known gaps, supported versions, and a review date without implying unsupported maintenance guarantees.

### Evidence levels

Use precise labels and do not promote a claim beyond the evidence available:

1. **Documented** — instructions and scope are present.
2. **Static-checked** — automated structural, link, lint, or formatting checks passed.
3. **Unit-tested** — relevant unit tests passed at a recorded commit.
4. **Integration-tested** — interacting components were exercised together.
5. **Validated in target runtime** — the example was run in the intended application, service, or environment.
6. **Production-observed** — evidence shows the behavior in a real production context.

A higher level is not implied by a lower one. If evidence is unavailable, record **Not yet checked** rather than guessing.

## Prioritized execution plan

### P0 — Establish reliable audit evidence

- [ ] Validate all links in both organization profiles and both cookbook catalogs.
- [ ] Check every cookbook README for placeholders, empty sections, generic boilerplate, and missing runnable examples.
- [ ] Confirm repository default branch and key file paths before proposing fixes.
- [ ] Capture latest workflow status and commit SHA for repositories with CI.
- [ ] Create a findings register with repository, issue, severity, evidence, recommended change, and verification result.

### P1 — Fix the highest-value documentation and quality defects

- [ ] Rank findings by impact, risk, reuse, and estimated effort.
- [ ] Improve the highest-priority repositories first with scoped documentation and real examples.
- [ ] Add or repair tests only where the intended behavior and validation method can be established.
- [ ] Review security-sensitive topics, especially credentials, authorization, data collection, and payment workflows, with domain-specific care.
- [ ] Keep changes small and independently reviewable; use pull requests where practical and avoid claiming success before checks run.

### P1 — Add repeatable portfolio checks

- [ ] Compare discovered cookbook repository slugs with the annotated catalogs.
- [ ] Detect duplicate entries, missing repositories, and stale links.
- [ ] Validate required README sections without treating section presence as proof of quality.
- [ ] Report the exact commit, commands, results, and failures for each automated run.
- [ ] Ensure checks fail clearly when required evidence is absent or inconsistent.

### P2 — Improve discovery and contributor experience

- [ ] Keep each organization profile focused on its own mission.
- [ ] Link profiles to their canonical catalogs and practical starting points.
- [ ] Explain individual cookbook inclusion rationale without implying that inclusion equals endorsement.
- [ ] Provide consistent contribution, issue-reporting, and validation instructions where appropriate.

## Findings register template

Use one row per actionable finding.

| Field | Required content |
| --- | --- |
| Repository | Canonical `owner/repository` |
| File or component | Exact path, workflow, or behavior |
| Finding | Concrete observed defect or gap |
| Severity | P0, P1, P2, or P3, with rationale |
| Evidence | Link, excerpt, command output, workflow run, or commit |
| Recommended change | Smallest useful corrective action |
| Verification | Exact check and expected result |
| Status | Not started, in progress, blocked, or verified |
| Result commit/PR | Link and SHA when available |

## Reporting rules

- Report inventory counts separately from repository quality results.
- Do not describe a repository as tested merely because it has a workflow file.
- Do not report CI as green without checking the relevant run and commit.
- Do not claim a link is valid solely because it appears in Markdown.
- Do not equate a complete catalog with complete documentation or production readiness.
- Preserve organization boundaries: ZQM-Computing focuses on geospatial engineering and scientific computing; ZQM-Labs focuses on community-centered games and supporting workflows.
- Make changes in reviewable increments and document unresolved limitations.

## Current limitations

- The inventory reconciliation used organization-scoped repository search and matched cookbook slugs to catalog entries. It is a point-in-time result, not a permanent inventory guarantee.
- This pass did not establish quality scores for all 102 repositories.
- The full profile/catalog link graph has not yet been exhaustively tested.
- Repository-level README quality, workflow status, test execution, target-runtime behavior, and license details remain to be audited.
- No claim is made here that the next-phase checks have passed or that any deployment/runtime behavior has been validated.

## Definition of done

The portfolio audit is complete when all in-scope repositories have a recorded review, high-priority findings have been fixed or explicitly blocked with evidence, catalog/link checks are repeatable, CI claims are tied to exact commits, and the remaining gaps are documented without overstating assurance.


## Execution log — 2026-10-26

### README sample review

A first content-level sample was fetched from the default branches of eight cookbook repositories. This is a structural/content inspection, not a full repository audit; no CI run was executed by this sample.

| Repository | README blob SHA | Observed strengths | Follow-up / limitation |
| --- | --- | --- | --- |
| [postgis-cookbook](https://github.com/ZQM-Computing/postgis-cookbook/blob/main/README.md) | `5346e741ba2e5cb2143d62540753e0fea87d6347` | 196 lines; quick start, manual run, design principles, production notes, contributing, license; 35 Markdown links, including 10 relative links to patterns/docs/scripts. | Relative targets and external links still need automated resolution; CI status was not checked. |
| [geopandas-cookbook](https://github.com/ZQM-Computing/geopandas-cookbook/blob/main/README.md) | `4204bce1db22f2c8506492dc35511a3c29d083d2` | 133 lines; prerequisites, Quickstart, usage, patterns, validation, roadmap, contributing, license; no placeholder markers among the six terms scanned. | Link targets and current workflow status still need verification. |
| [pocketbase-cookbook](https://github.com/ZQM-Labs/pocketbase-cookbook/blob/main/README.md) | `d964e79cfe43d5ad15d6848b4c1bb8b528722a89` | 116 lines; clearly states the live API authorization tests have not been run against a live PocketBase instance; separates the integration contract from a deployed bridge. | One occurrence of “placeholder” appears in security guidance about synthetic values; it is not by itself a defect. Verify relative docs/example targets and workflow status. |
| [location-games-cookbook](https://github.com/ZQM-Labs/location-games-cookbook/blob/main/README.md) | `29ba119dfcdd742a157ea38f09a6ceee6e30c583` | 105 lines; separates implemented helpers from planned patterns and calls out safety/client-side limitations. | Verify relative example targets, accessibility/safety coverage, and workflow status. |
| [stripe-cookbook](https://github.com/ZQM-Labs/stripe-cookbook/blob/main/README.md) | `9e4900361c8cfa52954caaff34a5aaadf386cc82` | 97 lines; distinguishes a verified webhook-handler recipe/test harness from a live payment integration and identifies remaining database integration/concurrency testing. | Verify linked contract/example targets and inspect exact CI run evidence before describing the recipe as tested beyond its stated scope. |
| [godot-cookbook](https://github.com/ZQM-Labs/godot-cookbook/blob/main/README.md) | `3e0dac942d74238b11efa941707be92e3bfcd0f9` | 123 lines; distinguishes implemented first-scene work from planned patterns and states the engine-version/runnability quality bar. | Confirm the documented engine/runtime is available in CI and the example is actually launched or otherwise runtime-validated. |
| [playwright-cookbook](https://github.com/ZQM-Labs/playwright-cookbook/blob/main/README.md) | `5338b315bf4e3a1af1e735bd030a0456ef56a17e` | 123 lines; scopes browser-game tests, synthetic-player safety, narrow-viewport checks, and CI foundation explicitly. | Verify workflow run status, test artifacts, and what the tests truly exercise. |
| [phaser-cookbook](https://github.com/ZQM-Labs/phaser-cookbook/blob/main/README.md) | `7a2ff1cef7e5bbf4519c3de52027c5bef2e60dc4` | 106 lines; first scene is identified as implemented while other patterns are marked planned; includes version/runnability expectations. | Verify the relative example target, workflow/test coverage, and runtime execution evidence. |

### Sample findings and decisions

1. **Positive pattern — explicit assurance boundaries.** The sampled Labs READMEs often distinguish a planned pattern, a static test, a test harness, and a live integration. Preserve and standardize this language rather than inflate status claims.
2. **P1 — validate targets, not just Markdown syntax.** The sample surfaced relative links to local examples, docs, and scripts. Add a repeatable checker that resolves local paths and separately checks repository/external links; Markdown link counts alone do not establish validity.
3. **P1 — tie runtime claims to evidence.** For game-engine and payment/backend cookbooks, require an explicit evidence level (static, unit, integration, target-runtime, or production-observed) and record exact workflow run/commit before reporting success.
4. **No automatic README rewrites from this sample.** These eight files already contain substantive scope and limitation statements; the evidence supports targeted validation, not speculative copy expansion.
5. **Scope remains incomplete.** Only eight README files were reviewed in this sample. The remaining Computing and Labs cookbooks, all linked targets, workflow runs, licenses, examples, tests, and runtime behavior are not yet audited by this log.
