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
