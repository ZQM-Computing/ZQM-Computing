# Non-environmental GIS opportunities: evidence review

Research date: November 14, 2026. ZQM Computing planning reference.

**Decision:** retain GIS workflow automation and ETL as the primary
non-environmental service experiment. Include data QA in its acceptance
contract and offer bounded cleanup where the buyer has a concrete backlog.
Keep desktop location screening secondary, conditional on access to suitable
data and a documented decision model. This ordering is a capability-based
commercial hypothesis; no ZQM sales-speed comparison has been measured.

Use the [offer playbook](gis-workflow-automation-offer-playbook.md) for scope,
proof and intake. Existing service terms in [the README](../../../README.md)
remain authoritative. This review approves no pricing or production changes.

## 1. Audit of the submitted market claims

| Submitted claim | Finding | Treatment |
| --- | --- | --- |
| Spatial/geospatial ETL is a $1.5-$4.2B market in 2024/2025 with $4.4-$10.8B forecasts | Original-publisher summaries contain billion-dollar estimates, but product definitions, base years and horizons differ. The full submitted endpoints were not independently reproduced as a comparable range. | Retain individually attributed estimates below; do not present a consensus range or add overlapping categories. |
| ETL services consistently represent 37-39% | No consistent ETL-specific percentage was verified in the retrieved evidence. A 37.7% services statistic located during checking belongs to a **geospatial analytics software** report, not the ETL platform category. [S1, S7] | Exclude the percentage from ZQM market sizing and service revenue calculations. |
| Geographic Information Technology Services is $14.9B in 2025 at about 14% CAGR | A consistent original-source basis for this exact claim was not established. The located publisher's search-index summary and retrieved page exposed materially different values and base-year labels. [S6] | Exclude the figure; do not replace it with another market's GIS total. |
| Location intelligence is approximately $21-$28B in 2025/2026 | Several original publishers provide estimates in or near this range, with different year-specific values and forecasts. [S3-S5] | Supported as attributed publisher estimates, not an observed common total or ZQM's addressable market. |
| Retail is the largest vertical, around 24% | Mordor identifies retail/consumer goods at 24.08% in 2025. Grand View instead identifies transportation/logistics as largest at 19.3%. [S3, S5] | State the publisher and segmentation; there is no uniform largest-vertical finding across these sources. |
| Automation sells fastest for ZQM | Existing technical proof supports trying a bounded automation offer. No comparative ZQM conversion or time-to-close dataset was supplied or established. | Keep as an experiment priority, not a sales promise. |
| Active vendors/freelancers prove demand | Vendor service pages establish supply/positioning. A buyer request is stronger evidence of a requested job; neither by itself proves completed sales or ZQM willingness to pay. | Keep evidence categories separate. |

Unverified means this review did not establish the claim from consistent,
accessible evidence. It does not establish that no supporting report exists.

## 2. Individually traceable market estimates

All values are **USD billions**. These are commercial research publishers'
estimates and forecasts. The underlying paid datasets were not audited.

| Publisher and category | Base-year estimate | Later estimate / forecast | Publisher's stated CAGR | Retrieval limit |
| --- | --- | --- | --- | --- |
| DataIntelo: Geospatial ETL Platform [S1] | 1.68 in 2024 | 5.23 in 2033 | 13.7%, 2025-2033 | Publisher's indexed summary retrieved; direct page encountered a verification challenge |
| DataIntelo: Spatial ETL Software [S2] | 1.95 in 2024 | 5.76 in 2033 | 12.7%, 2025-2033 | Publisher's indexed summary; overlapping category from the same publisher, not independent corroboration |
| Grand View Research: Location Intelligence [S3] | 24.2 in 2025 | 27.9 in 2026; 76.4 in 2033 | 15.5%, 2026-2033 | Public report summary inspected |
| Fortune Business Insights: Location Intelligence [S4] | 20.90 in 2025 | 23.58 in 2026; 66.12 in 2034 | 13.8%, 2026-2034 | Public report summary inspected; page dated October 26, 2026 |
| Mordor Intelligence: Location Intelligence [S5] | 25.06 in 2025 | 28.36 in 2026; 52.67 in 2031 | 13.19%, 2026-2031 | Public report summary inspected; publisher identifies a proprietary estimation framework |

Do not average or sum these totals. ETL software, ETL platforms, location
intelligence and GIS services can overlap while including different hardware,
software, data, implementation and support categories. Two pages or syndicated
copies do not automatically represent independent research. Forecast horizons
and the stated CAGR periods also need to remain attached to their source.

Even a correctly sourced worldwide services share would not identify the
portion reachable by a small Python/PostGIS consultancy. A serviceable market
requires buyer geography, obtainable contract size, capabilities, procurement
eligibility, acquisition access and actual delivery capacity.

## 3. Buyer evidence is more useful for offer design

| Signal | What the evidence establishes | What remains unknown |
| --- | --- | --- |
| USAC Enterprise Data Platform RFP, revised section 6.8 [B1] | A named procuring organization specifies spatial ingestion, validation, format conversion, joins, indexing and CRS transformations. ArcGIS Enterprise remains its authoritative spatial system. | The full platform solicitation is not a qualified small-project lead for ZQM; no ZQM award or conversion follows from the requirements. |
| 1Spatial Utility Network migration offering [B2] | The vendor markets staged readiness, cleanup, model design, migration and validation. This supports assessment/remediation as recognizable commercial packaging. | Advertised services and vendor-hosted customer accounts do not establish typical deal size, independent success rates or ZQM qualifications. |
| Upwork GIS automation request [B3] | A dated indexed buyer listing describes a Python workflow for utility-pole spatial processing and displays a $250 fixed-price budget. | Direct retrieval returned 403; current availability, hiring, completion and final spend were not verified. One listed budget is not a market rate or a calibration for ZQM's differently scoped engagements. |

Competitor presence supports the existence of a service category, while also
showing specialization and substitutes. It does not establish that buyers
will switch vendors, prefer open source, accept a lower price, or retain ZQM.
No outreach, lead qualification or customer transaction was performed here.

## 4. Opportunity boundaries for ZQM

### Workflow automation and ETL: first experiment

Lead with one recurring deliverable and a named operator's pain: repeated
loading, schema/CRS standardization, record QA or report assembly. Start with
the existing proposed $1,500 diagnostic and scope implementation separately.
The current repository's $5,000-$12,000 implementation test range is retained;
this review neither validates it as a market rate nor changes it.

Use the existing GeoPandas diagnostic demonstration and
[synthetic sample](../examples/gis-workflow-qa-synthetic-sample.md) as proof
of the sample's contracts. Source inspection and the previously recorded
45-test run support that bounded example. They do not prove a generic managed
ETL service, client-scale performance, or persistent enterprise migrations.

### QA and cleanup: core control and possible entry project

Separate three scopes: read-only assessment, approved remediation, and system
migration/cutover. A bounded QA assessment can share the diagnostic entry
path; it should not inherit a broad migration program's complexity by default.
Every repair needs explicit rules, original-data preservation, reconciliation,
review of geometry/value changes and acceptance ownership.

Utility Network programs are evidence of specialized market activity, not
evidence of ZQM's hands-on ArcGIS Enterprise or Utility Network delivery.
Do not quote an enterprise migration from generic geometry-cleaning examples.
Any product retirement or mandatory migration date must be checked against
Esri's current product/version guidance before being used in a proposal;
vendor urgency copy is not accepted as lifecycle authority by this review.

### Desktop site/location screening: secondary custom engagement

The reachable offer is a transparent comparison of agreed candidate sites,
criteria and data. Distinguish simple proximity/accessibility measures from
trade-area modeling, cannibalization, customer-origin analysis and revenue
forecasting. The latter require additional data, domain assumptions and
validation; no complete retail decision model was verified in this review.

Do not promise foot-traffic, demographics, competitor inventories or customer
data without confirmed coverage, licenses, freshness and permitted use.
Open-source processing does not eliminate data or analyst costs and does
not establish a price advantage over a platform subscription.

## 5. Sales assets and evidence still required

| Offer | Reuse now | Required before quoting the particular delivery |
| --- | --- | --- |
| Workflow diagnostic | Existing service scope, diagnostic report template, synthetic QA demo and source/test links | Named process and owner; authorized representative inputs; target output; frequency; observed or labeled estimated baseline; scope and availability |
| One-workflow pilot | GeoPandas QA, PostGIS checks, DuckDB analytical patterns and GDAL conversion examples | Agreed schemas/CRS/key rules; rejected-record policy; golden outputs; volume profile; actual integration permissions; failure/replay demonstration and runbook |
| Bounded data cleanup | Existing QA findings and source-preserving staged-repair examples | Agreed error inventory and correction rules; before/after key and value reconciliation; geometry change review; acceptance owner |
| Desktop location comparison | Existing joins, measurements and data-handling methods as components | Synthetic comparison example; criteria/weight register; sourced/licensed input inventory; missing-data treatment; sensitivity checks; boundaries on interpretation |
| Retained operations | The accepted client's delivered workflow and its measured operating history | Explicit schedule, infrastructure budget, monitoring, escalation, support window, recovery ownership and contract |

These gaps call for focused packaging and client-specific validation. No new
repository, paid subscription, platform build or orchestration service was
created by this research. Retained work is an expansion option after a
successful engagement, not an assumed consequence of an audit.

## 6. Practical ordering and validation

1. Continue the environmental production offer while testing spatial automation
   as the primary non-environmental service.
2. Include QA in every automation contract; test standalone read-only QA when
   a buyer's data backlog provides a clearer paid starting point.
3. Pursue desktop location comparison selectively when the client can supply
   decision criteria and suitable licensed data.
4. Scope enterprise migrations and ongoing operations separately after fit
   and capability checks; keep broad platform/AI consulting out of this entry offer.
5. Keep ZQM Labs games and event experiences on their separate funnel and metrics.

Measure qualified conversations, paid diagnostics, proposal outcomes,
time-to-close, collected revenue, delivery hours and contribution by offer
and channel. Record the reason for rejection or scope change. Replace the
relative speed hypotheses only when comparable observed outcomes exist.
Large worldwide forecasts alone do not supply those measurements.

## 7. Source register and access notes

Sources checked November 14, 2026. Public excerpts/pages can change; the
figures above describe the retrieved evidence, not future updates. No paid
report was purchased. Indexed excerpts are explicitly lower-confidence than
an accessible complete source for the particular claim.

- **[S1]** [DataIntelo, Geospatial ETL Platform](https://dataintelo.com/report/geospatial-etl-platform-market). Indexed original-publisher summary supports the listed figures and a software/services split; no consistent 37-39% services figure was established. Full-page retrieval encountered a verification challenge.
- **[S2]** [DataIntelo, Spatial ETL Software](https://dataintelo.com/report/spatial-etl-software-market). Indexed original-publisher summary; same publisher and overlapping scope as S1.
- **[S3]** [Grand View Research, Location Intelligence](https://www.grandviewresearch.com/industry-analysis/location-intelligence-market). Public summary, market values, forecast period and vertical shares.
- **[S4]** [Fortune Business Insights, Location Intelligence](https://www.fortunebusinessinsights.com/location-intelligence-market-111565). Public summary, baseline, later estimates and forecast.
- **[S5]** [Mordor Intelligence, Location Intelligence](https://www.mordorintelligence.com/industry-reports/location-intelligence-market). Public summary and retail/consumer-goods share.
- **[S6]** [Market Research Intellect, Geographic Information Technology Services](https://www.marketresearchintellect.com/product/geographic-information-technology-services-market/). Search-index and full-page retrieval differed materially; excluded as a consistent basis for the submitted $14.9B/14% claim.
- **[S7]** [DataIntelo, Geospatial Analytics Software](https://dataintelo.com/report/global-geospatial-analytics-software-market). Indexed excerpt states a 37.7% services share for that different category; this is not ETL-service-share verification.
- **[B1]** [USAC procurement](https://www.usac.org/about/procurement/rfp-it-26-148-enterprise-data-platform-3/) and [revised RFP](https://www.usac.org/wp-content/uploads/about/documents/Procurement/RFP-IT-26-148-Enterprise-Data-Platform-2nd-Revision.pdf), section 6.8. Original procurer requirements available in indexed document text; not evidence of a ZQM award.
- **[B2]** [1Spatial, Utility Network Migration](https://1spatial.com/solutions/utilities-solutions/utility-network-migration/). Vendor offering and staged service packaging; no product-retirement date or vendor performance claim is adopted here.
- **[B3]** [Upwork, GIS Automation Engineer: Spatial Clustering and Intersection Measurement](https://www.upwork.com/freelance-jobs/apply/GIS-Automation-Engineer-Spatial-Clustering-Intersection-Measurement-via-ArcGIS-Online-API_~022108384835851119257/). Indexed listing dated October 9, 2026; direct retrieval returned 403. Availability and transaction outcome remain unknown.
