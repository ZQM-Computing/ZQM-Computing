# ZQM Computing — GIS client statement of work and acceptance template

**DRAFT ONLY — no contract is formed until legally identified parties sign.** Fill or remove every placeholder; obtain legal review for enforceability, professional-practice restrictions, indemnity, insurance, intellectual property, privacy, payment and taxes. Prepared November 16, 2026. Keep completed client scopes and supporting restricted data OUT of public GitHub.

Use this with [service offer compliance register](gis-service-offers-compliance-register-2026-11.md), [existing workflow scope templates](workflow-engagement-scope-templates.md) and [source/QA checklist](pipeline-source-qa-checklist.md).

## 1. Parties and authority

| Field | Required details |
| --- | --- |
| Legal service provider and invoice payee | `[actual legal individual/entity, DBA evidence if different, jurisdiction and authorized signer]` |
| Customer | `[legal company/person, authorized purchasing contact and address]` |
| Customer technical reviewer | `[named person, role, authority for acceptance]` |
| Responsible professional, if required | `[Florida PSM / PE / PG or other relevant licensed professional and role, verification/firm authority and legally permissible supervision]` |
| Scope ID / revision / proposed period | `[job number, version, dates, earliest start after complete inputs]` |
| Payment recipient / method | `[invoicing name, approved remittance method, no unverified payment link]` |
| Governing contract and precedence | `[approved MSA / special conditions, order of precedence, counsel approval]` |

**No licensed-work assumption:** ZQM supplies only the specifically described GIS/data/software deliverables. If the task legally constitutes surveying, engineering, professional geology or another regulated practice, do not proceed unless the appropriate license/authorized supervision and entity authority are verified, documented and consistent with applicable law. A client's subsequent stamp, review or verbal instruction alone does not legalize an otherwise impermissible practice.

## 2. Buyer purpose and included deliverables

**Business question or target workflow:** `[one concrete decision or recurring process]`.

**Allowed end use:** `[internal planning / consultant report input / public portal; prohibited uses, scale and permitted distributions]`.

**Selected offer (choose ONE or separate milestones):**

| Offer | Fill the selected scope only |
| --- | --- |
| Environmental figure production / Atlas | `[figure index, parcel count and IDs, PDF size/scale, map themes, source overlays, source register, native output if included]` |
| Preliminary desktop screening | `[screening question, extent, source-by-source indicators, uncertainty matrix, follow-up professional review]` |
| GIS workflow diagnostic | `[one process, up to three representative inputs, one target output, current baseline, report and findings review]` |
| GIS automation pilot | `[one source/output contract, max volume, QA/reconciliation, code/config, tests, operator runbook, replay/rollback]` |
| Web GIS / spatial API | `[authorized users, endpoints/schema, data rights, performance/security test assumptions, deploy target, owner and rollback]` |

**Included files and review:** `[manifest listing each PDF/data/script/config/report, source register, test results, page IDs and deadlines]`.

**Explicit exclusions:** certified/legal property boundary or survey, certified flood elevation, engineering design, geologic determination, regulatory wetland delineation, WOTUS jurisdiction, Phase I ESA, guarantee of suitability or permit approval unless independently lawful and separately contracted; other maps/inputs; production support/hosting, new subscriptions, third-party purchase, emergency response and client system administration unless itemized.

## 3. Inputs, licensing, handling and source accuracy

- Customer supplies data and represents it is authorized to permit the stated uses, processing, retention and redistribution; ZQM must independently review material third-party license/attribution restrictions. Public availability is not evidence of unlimited reuse.
- Transfer approved formats using `[authorized secure channel]`; initial inquiry email should contain only nonsensitive brief. **Do not email passwords, private health/financial records, precise protected-species locations or production keys.**
- Record each source's publisher, version, retrieval date, effective date if known, CRS, units, scale/accuracy, coverage state (`verified`, `partial`, `missing`, `unavailable`, `unverified`) and license/attribution.
- ZQM will not infer a survey boundary from property-appraiser tax parcels or infer a permit-free property from absence of mapped wetland/flood indicators. All measurements require verified methods and reference-system suitability.
- Customer owns supplied data. The parties must specify permitted processed data returns and deletion/retention, including backups, system logs and legal tax records.

**Input acceptance:** `[required schemas/CRS/fields/file counts, deadlines, missing-data treatment, authorization and sources]`. The delivery clock begins only when inputs are accepted and capacity/schedule is confirmed in writing.

## 4. Quality, review and client acceptance

| Gate | Objective test | Evidence and owner |
| --- | --- | --- |
| Figure/list completeness | Agreed pages/output filenames and IDs all exist; scale/legend/CRS/source dates/attribution | `[manifest/QA worksheet, reviewer]` |
| Coverage / uncertainty | Each layer reports proper missing/partial/unknown coverage and limitations; no "no constraints" without source evidence | `[coverage register]` |
| Schema / counts / geometry | Expected fields, types, keys, units, geometry and `input = accepted + rejected` where relevant; join/aggregation accounted separately | `[QA report and row IDs]` |
| Workflow replay | Golden sample and invalid-input cases, idempotency/rollback and operator guide | `[test IDs and logs]` |
| Web/API security | Access/auth, sensitive geodata restrictions, test coverage, rate/backup/rollback and approved deployment | `[acceptance tests and release evidence]` |
| Professional boundary | Required licensed reviewer or licensed contractor assigned for each regulated subtask, or scope removed | `[authorization and disposition]` |
| Data rights | Allowed use, client data protection and vendor license/attribution verified | `[approved rights register]` |

**Review procedure:** ZQM submits `[deliverable inventory]` by `[accepted milestone date]`. Client's named reviewer provides an acceptance decision or enumerated defects within `[review period]`. Address `[one or other agreed number]` of correction cycles for work that fails written acceptance. New objectives, replacement inputs and preference changes are change orders. **Do not insert automatic deemed acceptance or restrictive refund clauses without explicit legal review.**

**Professional approval:** Client's designated legally qualified professional retains any engineering, surveying, geology, environmental, permitting or formal regulatory interpretation and submission responsibility allocated to them by the approved agreement. ZQM must not perform tasks legally reserved to such professionals without verified authorization. This paragraph does not override licensing law.

## 5. Fees, taxes, payment, change control

**Selected fee:** `[fixed fee / hourly cap / quoted milestones, tax classification]`.

**Reference only, not automatic quote:** ZQM Computing currently proposes a **$1,500 workflow diagnostic** and **$5,000–$12,000 implementation pilot testing range** in its existing planning docs; this SOW does not change those test assumptions. Map and screening fees remain scope-dependent.

**Payment terms:** `[deposit if approved, invoice delivery, milestones, due date, method, expenses/change-order approval, refunds/termination handling]`.

**Tax characterization:** `[professional consulting, custom data processing, electronic-only deliverables, printed map/tangible items, recurring hosted SaaS, licensed data resale]`; record `[Florida DOR rule/TAA interpretation or counsel/CPA advice]` and buyer jurisdiction. Florida DOR TAA 25A-011 concerns a licensed surveyor's services, not a blanket GIS exemption. Do not presume taxes are either owed or excluded without transaction-specific review.

No subscription, cloud hosting, travel, fieldwork, data purchase, software licensing or professional subconsultant fees are committed without separately agreed approval. `[Rate/cap and authorized overrun process]`.

**Scope change:** Customer and service provider approve in writing before new parcel counts, figures, datasets, regulatory interpretations, native formats, integrations, new platforms or deadlines affect work. Record revised cost/time and permissions.

## 6. Confidentiality, intellectual property, privacy

- **Client data** remains with client; its use is limited to performance of this agreement. Identify confidentiality classifications, permitted access and sharing, storage region, retention, deletion request procedure and incident-notice contacts.
- **Preexisting ZQM reusable tools, cookbooks and third-party components** remain subject to their existing ownership/licensing, unless specifically amended. Distinguish ownership of newly commissioned deliverables from underlying reusable libraries; identify the license assigned to client for each.
- **Third-party GIS data** may carry attribution, redistribution, no-derivatives, access or usage restrictions. ZQM will not grant rights it does not hold.
- **Security**: define secret handling, client credentials, minimum retention, approved subcontractors, backups/restoration and applicable privacy law. Provide a reasonable incident-notification procedure; legal review required for breach deadlines.
- **Publicity/portfolio use:** only with separate express client permission and a non-sensitive approved sample; synthetic open-source demos must never be described as completed paid engagements.

## 7. Risk allocation and termination

`[Parties and counsel supply accurately drafted warranties, limited reliance, applicable standard of care, indemnity allocation, liability limits, insurance certificates, governing law/forum, dispute resolution, cancellation, termination, post-termination client-data handling and survival clauses. Do not copy generic boilerplate that attempts to waive statutory rights or professional duties.]`

Each side documents approved owners for site safety, physical surveying, professional opinions and agency submissions; ZQM's desktop screening output is not a site-clearance or development-permission guarantee.

## 8. Evidence and signoff (NOT A SIGNABLE CONTRACT UNTIL REVIEWED)

Client authorized representative: `[name/title/date]`.

ZQM Computing legal seller and signatory: `[name/title/date, verified entity]`.

Professional subconsultant/supervision acknowledgement where needed: `[name/license/role/conditions]`.

Accepted deliverable revision / manifest: `[ID, SHA/QA evidence, approvals and exceptions]`.

Final invoicing/tax/release evidence: `[reference, status, receipt]`.

**Never store a completed SOW containing private names, customer data, prices or signatures in a public repository.**
