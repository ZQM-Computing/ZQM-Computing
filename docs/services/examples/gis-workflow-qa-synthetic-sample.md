# GIS workflow QA summary

**Synthetic demonstration only. No client results or labor savings are represented.**

Review required: rejected records need correction or an agreed disposition.

| Input records | Accepted records | Rejected records |
| --- | --- | --- |
| 8 | 2 | 6 |

Every input row is accounted for once as accepted or rejected.

## Findings

| Rejection reason | Affected records |
| --- | --- |
| duplicate_id | 2 |
| missing_name | 1 |
| missing_or_unreadable_geometry | 1 |
| not_point | 1 |
| outside_boundary | 1 |

A record may have multiple reasons; these counts are not additive.

## Evidence

- Input SHA-256: `318fc09e1c430c77c36ee1e580ec8495b7f725b8dd9a58fce2be355d2079b974`
- Bundle schema version: 1
- Source CRS: EPSG:32617
- Analysis CRS: EPSG:32617
- Boundary rule: covers, including points on the boundary.
- geopandas: 1.2.0
- pyproj: 3.8.0
- python: 3.12.14
- shapely: 2.2.0

## Interpretation and next step

This report summarizes configured data checks. It does not establish source
accuracy, regulatory suitability, production readiness, or measured labor savings.
The bundled example uses synthetic data. For other inputs, document their
provenance separately before using the results in a client deliverable.

Agree on rejection handling, acceptance thresholds, and the responsible reviewer
before importing accepted records. Refer to the JSON bundle for row-level details.
Raw records, names, IDs and coordinates are omitted from this summary; counts,
CRS, versions and the input hash remain. Review them before external sharing.

## Reproduce and inspect

Source: [GeoPandas workflow diagnostic guide](https://github.com/ZQM-Computing/geopandas-cookbook/blob/f91ca285cc89f77773776327c6c9547248695de7/docs/workflow-diagnostic.md).
Run the committed synthetic fixture at that revision using the guide's JSON
and Markdown commands; compare the input hash and reconciled counts above.
The recorded software versions describe this sample run, not a universal
environment guarantee.

See the [service scope](../GIS_WORKFLOW_AUTOMATION.md) and
[offer planning appendix](../planning/gis-workflow-automation-offer-playbook.md)
for engagement boundaries and implementation acceptance criteria.
