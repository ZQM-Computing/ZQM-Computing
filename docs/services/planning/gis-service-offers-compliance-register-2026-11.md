# ZQM Computing: GIS service offer compliance and launch register

Prepared November 16, 2026. Status: **proposed service controls, not a legal opinion, tax exemption, licensed-profession authorization or executed client agreement**. Applies to ZQM Computing only; ZQM Labs' games, payments and event risk are assessed separately.

## Existing offers and evidence boundaries

This register implements current service descriptions at `/computing/`: environmental figure production/preliminary desktop screening, GIS workflow automation, and Web GIS/other spatial APIs. Maintain the quote-first public model. The existing Computing profile's proposed **$1,500 GIS workflow diagnostic** and **$5,000–$12,000 one-pilot market-test range** are not realized sales, binding quotes, or approval for changes. Reuse [existing workflow scopes](workflow-engagement-scope-templates.md) and [source/QA register](pipeline-source-qa-checklist.md); do not create a competing delivery schema. All examples are synthetic unless independently evidenced as client work.

| Offer | Buyer-facing deliverables to agree | Non-negotiable review boundary | Tax/scope decision |
| --- | --- | --- | --- |
| Environmental GIS subcontract map/Atlas figure set | Named figures or parcel pages, PDFs/explicit editable formats, source register, coverage and QA evidence | Consultant's authorized reviewer; not field survey, certification, engineered design, jurisdictional delineation, permit decision or site clearance | Custom consulting service vs separately sold physical map/standardized compiled report |
| Preliminary parcel/environmental desktop screening | Data-sourced indicator matrix, dated GIS maps, source limits, uncertainty and follow-up recommendation | No actual boundary re-establishment, legal opinion, Phase I ESA, wetland field determination or warranted absence of constraints | Professional/personal analytical service vs taxable general information product if reused or physical components supplied |
| GIS workflow diagnostic | One process, up to three representative inputs, one target output; observed baseline, QA gaps and scope/ROI options | No production data modification, certified analysis or guaranteed ROI; reviewer accepts findings or recommendation against automation | Service consultation; classify any separately licensed software/data sold |
| One spatial automation/ETL pilot | Versioned code/config, one agreed input→output contract, reason-coded rejects, count reconciliation, tests, runbook and recovery | No unapproved cutover, other integrations, unrestricted distribution of third-party data or ongoing SLA | Scoped implementation vs software license, taxable tangible product, hosting or recurring subscription |
| Web GIS / PostGIS / geospatial API | Approved browser map, data model or API, security/access contract, tested handoff and deployment/rollback evidence where in scope | No assumed platform administration, engineering certification, protected-data publication or unapproved production support | Custom development service vs hosted SaaS/data resale/third-party API pass-through |
| Physical maps, maps for sale or compiled standardized datasets | **Do not silently bundle.** Separately determine printed quantity, intended reuse and rights | Printed reports/data publications may trigger information-service or tangible-goods treatment | Escalate tax classification before quote |

### Florida regulated-practice decision

**Map production is not automatically unregulated merely because it is GIS.** Florida's chapter 472 broadly defines the practice of surveying and mapping for legal/geodetic boundaries, topography, certifiable measurements, monumentation, record plats and specified property measurements, and section 472.003 enumerates narrow employment/subordinate exceptions. Chapter 471 regulates engineering and some regulated title use. Chapter 492 regulates professional geology. ZQM's **GISP** credential is professional GIS certification, not proof of Florida PSM, PE or PG state licensure.

Scope test BEFORE sending a fixed quote:

1. Is the deliverable intended to establish/re-establish a property boundary, prepare a legal description/record plat, verify improvements/grades or certify location/elevation? If yes, **hold** until a Florida-licensed PSM or legally permitted supervised arrangement determines who may perform and certify the regulated tasks; a third-party consultant's eventual review does not by itself establish a lawful subordinate exception.
2. Is hydrologic or hydraulic engineering design, grading, utilities, flood-elevation certification or life-safety analysis asked for? **Hold** regulated portions for a properly licensed PE/qualified firm or verified statutory exception. A GIS map that merely reproduces client-approved model outputs is a different scope.
3. Is geologic evaluation or groundwater/geologic certification asked for? **Hold** regulated professional geology under chapter 492.
4. Is a wetland boundary, species/ERP determination, WOTUS jurisdiction, Phase I ESA or permit approval sought? **Do not offer as a desktop GIS-only deliverable.** Determine field specialist, applicable FDEP/SJRWMD/USACE process, qualified reviewer and division of responsibility. FDEP's formal determinations follow Rule 62-340 F.A.C., not presence/absence of a National Wetlands Inventory polygon.
5. If strictly processing supplied boundary datasets and mapping mapped indicators for professional review, label them `approximate source-derived GIS features, not surveyed boundaries`, provide authoritative source name/date/CRS/accuracy and missing/partial/unverified coverage, and identify the intended use limitations. Still escalate if the actual scope meets regulated-practice definitions.

**Authorized consultant workflow:** use the client's figure list, licensed review/signoff where required, and explicit prime/subcontractor roles; do not assume that working for an engineering firm authorizes the independent practice of engineering, geology or surveying. Confirm licensure, entity authority and supervisory status in the state where work occurs.

### Tax and invoicing decision

Florida DOR's **November 4, 2025 TAA 25A-011** concluded that a **Florida-licensed surveying company's** services (with incidental physical or electronic survey maps) were professional services not subject to Florida sales tax on its stated facts. This is particularly close factually but **not binding on ZQM Computing** and does **not license ZQM** to perform surveying. Florida Administrative Code Rule **12A-1.062** distinguishes professional/customer-specific information from some taxable standardized printed information services; its subsection (5) addresses electronic screen images. Section **212.08(7)(v)** covers professional/personal service transactions with inconsequential tangible elements; separately sold printed maps, standardized reports, data subscriptions and mixed service/products require individual review. Ordinary consulting and custom software implementation may have different treatment than resold goods/standard information. Distinguish sales/use tax from federal income/self-employment tax, Florida business registration and local fees.

For EVERY paid scope record:
- Actual legal merchant name, address/jurisdiction, authorized signer, business identity/DBA, payer and payee, invoice number and legal counterparty.
- Itemized service deliverables vs tangible printed goods, licensed data or hosting; digital delivery method; customer state and delivery location; whether the work is customized/exclusive or sold repeatedly.
- Written Florida tax basis, or specialist/DOR ruling required when unclear; state tax and other-state nexus reviewed as relevant. No default "tax exempt", no tax added solely because a transaction uses Stripe.
- Deposit/milestone amount if negotiated, payment due dates, late fees only if agreed and lawful, acceptance/change-order milestones, expense preapproval, refund/dispute steps. Current advertised service pages are **quote-first**, not automatic checkout.
- Tax forms and record retention per verified seller; do not assert that a former/dissolved entity is still merchant of record.

**State-line discipline:** Florida treatment does not determine other states' professional licensing, consumer laws or tax nexus. Check the destination jurisdiction for regulated work, subcontractor qualifications and local client confidentiality before contracting.

## Contract, acceptance, ownership and confidentiality

Use [GIS engagement SOW draft](gis-client-statement-of-work-template.md) for all new Computing services, plus a separately reviewed master services agreement when risk justifies one. Never take client credentials or restricted geodata through initial inquiry emails/public GitHub issues.

| Control | Acceptance |
| --- | --- |
| Scope / authority | Seller legal entity; responsible client reviewer; intended use; professional licenses/prime approvals if regulated; exclusions and escalation |
| Data rights | Customer supplies authorized inputs; verify original data vendor use, attribution, derived redistribution and output publication rights |
| Data security | Written transfer/storage permissions; least privilege, restricted files, encryption/retention and deletion, no public samples from private client records |
| Source uncertainty | Publisher, version, effective and retrieval date; CRS/units/accuracy; verified/partial/missing/unavailable/unverified coverage |
| Delivery | Files/code opened and validated; record manifest/hashes, QA results, acceptance reviewer, written exceptions |
| Change orders | New parcel/page/theme, changed input data, larger batch, new deployment/hosting/support or professional judgement require signed changes |
| IP and liability | Define client-data ownership, pre-existing ZQM tools, reusable code license and new deliverable rights separately; have counsel review warranties, indemnification and limitation of liability |
| Security and operations | Web GIS/API rate/auth/backup/rollback; separate continuous operation and response times; no implied SLA |
| Closure | Invoice, tax rationale, accepted delivery, retention/destruction of data, approved portfolio attribution only with customer authorization |

For buyer-facing claims: **no invented turnaround, lead volume, savings percentage, regulatory clearance, licensed seal, production integration or client results**. Professional reviewer signoff and client-specific agreement do not replace statutory licensing requirements.

## Recommended initial sales sequence

1. **Priority A — environmental GIS figure overflow:** sell one narrowly defined figure set to a consulting team, with source-permission/coverage register, QA handoff and named qualified reviewer; price and schedule after checking the actual list/data.
2. **Priority B — one-workflow diagnostic:** retain existing proposed $1,500 diagnostic within its documented scope when offered/approved in writing, then quote pilot separately from evidence; do not promise an ROI.
3. **Priority C — preliminary desktop screening:** market only as mapped-indicator research with uncertainty and professional escalation; property-sensitive conclusions must be reviewed.
4. **Priority D — Web GIS/data interface:** quote only after security/data rights/host ownership; separate development from hosting and maintenance.
5. Record qualified inquiry → written scope → agreement → delivery evidence → invoice → cash collected. Confirm no customer financial outcome from synthetic repository examples.

## Release and operational gates

- G0: Verify actual ZQM Computing contracting identity and any applicable Florida fictitious name/municipal business-tax-receipt obligations **before issuing branded new contracts**. Florida §865.09 requires registration for covered trade names; exceptions must be substantiated and the filing is not a professional license.
- G1: Assign each offer to safe GIS production vs regulated-practice escalation; verify reviewers/qualifications as needed; block scope that crosses the line.
- G2: Scope rights, data confidentiality, liability/insurance needs and relevant third-party licenses; no secrets/customer files in initial email.
- G3: Approve SOW/fees/retainer/deposit terms and written tax treatment for actual merchandise/jurisdiction. No unapproved paid subscriptions/platform dependencies.
- G4: Produce a source register, QA evidence, accepted deliverables and user-facing limitations.
- G5: Confirm authorized distribution, reviewer signoff, acceptance/invoice, tax records, data retention and permitted public references.
- G6: Any public copy/checkout update passes authoritative source pin, affected CI, link/security/SEO checks, production owner release controls and rollback.

## Legal authority checklist (verify against current official text)

- Florida 2026 chapter 472: https://www.flsenate.gov/Laws/Statutes/2026/472.005 ; exceptions https://www.flsenate.gov/Laws/Statutes/2026/472.003 ; prohibitions https://www.flsenate.gov/Laws/Statutes/2026/472.031 .
- Florida engineering chapter 471: https://www.flsenate.gov/Laws/Statutes/2026/471.005 ; qualifications and exceptions https://www.flsenate.gov/Laws/Statutes/2026/471.003 .
- Florida geology chapter 492: https://www.flsenate.gov/Laws/Statutes/2026/492.102 ; restrictions chapter 492.
- Florida DOR TAA **25A-011** (November 4, 2025, licensed surveying and mapping professional service): https://floridarevenue.com/TaxLaw/Documents/25A-011.pdf .
- Florida information-services rule: https://flrules.org/gateway/ruleno.asp?id=12A-1.062 ; professional/personal services Florida 2026 §212.08(7)(v).
- FDEP wetlands/delineation process: https://floridadep.gov/water/submerged-lands-environmental-resources-coordination/content/wetland-evaluation-and ; FDEP WOTUS: https://floridadep.gov/water/submerged-lands-environmental-resources-coordination/content/wotus-determinations .
- Florida fictitious names §865.09: https://www.flsenate.gov/Laws/Statutes/2026/865.09 ; Sunbiz instructions: https://dos.fl.gov/sunbiz/start-business/efile/fl-fictitious-name-registration/instructions/ .
- Florida deceptive/unfair trade practices §501.204 and security/breach §501.171; assess client contract terms and affected jurisdictions.

These references explain risk and options; a Florida attorney/qualified tax adviser and the relevant licensing boards may need to determine whether a particular offer/contract is lawful. **No filings, registrations, payment changes or tax advice requests were submitted by this document.**
