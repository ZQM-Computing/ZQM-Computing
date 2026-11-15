# GIS workflow diagnostic and pilot scope templates

Prepared November 15, 2026. Draft scoping aids for ZQM Computing; fill the
placeholders and confirm contracting terms before offering an engagement.
These templates do not create a contract or establish delivery availability.

Use the [existing proposed prices](../../../README.md) and
[offer ladder](gis-workflow-automation-offer-playbook.md): **$1,500** for the
bounded diagnostic and **$5,000-$12,000** as the current implementation
market-test range, subject to scope. Neither is a completed-sale benchmark.
No automatic diagnostic credit, discount or new retainer is assumed.

## Template A: GIS Workflow Diagnostic

**Buyer / owner:** `[organization, decision owner, technical contact]`

**Problem and purpose:** `[one repeated process, current pain and intended decision]`

**Scope:** read-only assessment of one recurring workflow, up to three agreed
representative input datasets and one target output. Describe the process
boundary, source systems, formats, volume, CRS, cadence and authorized handling.
Use failed/edge cases among the representative inputs where available.

**Inputs and dependencies:** `[fixed input inventory; secure exchange; access;
license/reuse permission; environment; staff availability; kickoff criteria]`

**Deliverables:** current-state workflow map; evidence-labeled labor/elapsed-time
baseline; observed schema/spatial/data-quality findings; prioritized options;
acceptance criteria and a separately scoped implementation recommendation when
justified. Use the existing
[diagnostic report template](https://github.com/ZQM-Computing/geopandas-cookbook/blob/f91ca285cc89f77773776327c6c9547248695de7/docs/diagnostic-report-template.md),
with the [shared source/QA record](pipeline-source-qa-checklist.md).

**Acceptance:** the named reviewer receives the report, traceable sample
observations and reproducible checks for the agreed scope. Measured values,
staff estimates and unknowns remain distinct. A supported recommendation
against automation is a valid diagnostic outcome.

**Fee and timing:** `[confirm $1,500 proposed fixed fee, payment terms and scope]`.
The existing target is five business days after kickoff and receipt of agreed
inputs, subject to confirmed availability. Confirm the template's 45-minute
findings review and one clarification round within five business days of report
delivery. Agree how missing inputs, changes or access delays affect the target.

**Exclusions / change control:** implementation, production writes, enterprise
migration/cutover, new integrations, platform administration, certified
professional opinions and ongoing operations are outside this diagnostic.
Additional inputs or changed requirements require a revised scope.

**Review record:** `[client reviewer, scope version, decision/date, unresolved items]`

## Template B: One Spatial Workflow Automation Pilot

**Buyer / owner:** `[organization, technical owner, acceptance reviewer]`

**Outcome:** `[one repeatable transformation/report between named inputs and one target]`

**Fixed scope:** `[input inventory and representative fixture; schema and keys;
CRS/units; maximum batch size; update cadence; one target environment; output
format/schema; integration limits; change-control rule]`.

**Selected stack:** `[documented Python command and justified components]`.
Use the [tooling standard](gis-pilot-tooling-standard.md); PostGIS, orchestration,
web delivery and containers are conditional on the actual target. Identify
client-funded infrastructure, licenses and data before quoting. No new recurring
ZQM subscription is included by default.

**Deliverables:** versioned workflow/configuration; agreed data/report output;
source-register snapshot; reason-coded exceptions and reconciled QA report;
representative tests; dependency record; operator runbook; failure/recovery guide;
and one defined handoff session. Keep client data and credentials in the agreed
authorized location.

**Acceptance schedule:** complete the table and retain actual run evidence.

| Criterion | Agreed expectation / evidence |
| --- | --- |
| Input and output contract | `[supported schema, types, geometry, CRS, units and key policy]` |
| Correctness | `[golden records/values/spatial relationships and numeric tolerances]` |
| Reconciliation | `[accepted/rejected rule; source/target key/value checks; join cardinality]` |
| Quality gates | `[blocking rules, reject threshold, minimum acceptance, missing-coverage policy]` |
| Publication / readback | `[staging and complete-release protocol; reopen/query checks]` |
| Replay and failure | `[same-input behavior, duplicate handling, tested failure and recovery]` |
| Operational bounds | `[measured batch volume/runtime if promised; resource and concurrency limits]` |
| Handoff and review | `[operator, instructions, support window, reviewer and signoff evidence]` |

**Fee and schedule:** `[separately agreed quote informed by the existing
$5,000-$12,000 test range; milestones, payment, availability and dependencies]`.
Define included review/revision rounds, acceptance period and handling of
new requirements. Price any client-funded data, licensing or compute explicitly.
Do not promise a measured speedup or savings before a defensible baseline exists.

**Operational boundary:** the pilot demonstrates the agreed target and recovery
behavior in an authorized environment. Production promotion requires the scoped
authorization after staging review. Scheduling, support and maintenance begin
only if separately included with an owner, monitoring and response expectations.

**Exclusions:** additional workflows/targets, unspecified APIs, enterprise or
Utility Network migrations, continuous availability, platform administration,
unpriced data subscriptions and certified professional findings. Add any of
these only through a qualified, separately agreed scope.

**Acceptance record:** `[release/run ID, reviewer, decision/date, exceptions,
handoff owner, and separate production authorization if applicable]`.

For sales demonstrations, use the
[synthetic QA sample](../examples/gis-workflow-qa-synthetic-sample.md) and label
it explicitly. It establishes example checks and reproducibility, not a client
outcome, an integrated production deployment or evidence of customer savings.
