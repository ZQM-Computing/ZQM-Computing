# ZQM Computing — Geospatial Arm of ZQM Labs

<!-- ZQM-START -->
<!-- markdownlint-disable MD033 -->
<p align="center">
  <strong>ZQM Labs — Z's Quests & Mischief</strong><br>
  <a href="https://zqmlabs.com">zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Labs">GitHub</a>
</p>
<!-- markdownlint-enable MD033 -->
<!-- ZQM-END -->

**ZQM Computing** is the geospatial engineering arm of **ZQM Labs** — the games studio behind Z's Quests & Mischief. We build the geospatial patterns, data infrastructure, and tooling that ground ZQM Labs games in real-world locations across Volusia County, Florida.

## Repository role and status

**Status:** Active, public. Documented verdict (2026-10-19 estate audit): **KEEP**.

**What this repository is:** The ZQM-Computing account profile repository — its README is what GitHub renders on the public ZQM-Computing profile page. It introduces ZQM Computing as the geospatial engineering arm of ZQM Labs, states the strategy and operating standards, and points readers at the geospatial pattern portfolio.

**What it contributes:** The account's public front door. It is the first thing a visitor to the ZQM-Computing account sees, and the canonical short statement of what the account is and what it publishes.

**Standing:** A public brand surface, not scaffolding — deleting it would remove the account profile page. No deployment depends on it, but its profile role is load-bearing for the account's public presence.

## Strategy and operating standards

See [ZQM Computing 12-month strategy](docs/STRATEGIC_PLAN.md) for repository quality tiers, reproducibility standards, Pages governance, and the portfolio roadmap. The strategy is proposed for review; it does not claim all checks or deployments currently pass.

## Who this is for

Geospatial developers, GIS analysts, data engineers, and Python developers who need production-tested patterns for spatial data workflows. Also game developers building location-based experiences.

## The games connection

ZQM Labs builds location-based scavenger-hunt games (Z's Quests & Mischief). ZQM Computing provides the geospatial engine:

| Layer | Tool | Use in games |
|---|---|---|
| Desktop | QGIS | Game design, location scouting |
| Conversion | GDAL | Asset processing, reprojection |
| Python | GeoPandas | Spatial analysis, location selection |
| Database | PostGIS | System of record for game data |
| Routing | pgRouting | Route optimization, game paths |
| Analytics | DuckDB | Fast telemetry analysis |
| Raster | COG/STAC | Cloud-native map serving |
| Frontend | MapLibre | Game UI rendering |
| Grid | H3 | Location binning, leaderboards |

## Geospatial repos (15 public)

| Layer | Repo | Description |
|---|---|---|
| System of Record | [postgis-patterns](https://github.com/ZQM-Computing/postgis-patterns) | Production PostGIS patterns: spatial indexing, MVT, KNN |
| System of Record | [pgrouting-patterns](https://github.com/ZQM-Computing/pgrouting-patterns) | Routing, shortest path, isochrones, network analysis |
| System of Record | [geospatial-api-reference](https://github.com/ZQM-Computing/geospatial-api-reference) | OGC API - Features with FastAPI + PostGIS |
| Conversion | [gdal-patterns](https://github.com/ZQM-Computing/gdal-patterns) | GDAL/OGR CLI: reprojection, conversion, VRT |
| Python | [geopandas-patterns](https://github.com/ZQM-Computing/geopandas-patterns) | GeoPandas: spatial joins, CRS, overlays |
| Columnar | [geoparquet-patterns](https://github.com/ZQM-Computing/geoparquet-patterns) | GeoParquet: partitioning, predicate pushdown |
| Raster | [cog-patterns](https://github.com/ZQM-Computing/cog-patterns) | Cloud Optimized GeoTIFF: creation, serving |
| Discovery | [stac-patterns](https://github.com/ZQM-Computing/stac-patterns) | STAC: catalogs, validation, search API |
| Frontend | [maplibre-patterns](https://github.com/ZQM-Computing/maplibre-patterns) | MapLibre GL JS: vector tiles, 3D terrain |
| Grid | [h3-patterns](https://github.com/ZQM-Computing/h3-patterns) | H3: hexagonal binning, aggregation |
| Desktop | [qgis-resources](https://github.com/ZQM-Computing/qgis-resources) | QGIS expressions, PyQGIS, styles |
| Analytics | [duckdb-spatial-patterns](https://github.com/ZQM-Computing/duckdb-spatial-patterns) | DuckDB: SQL spatial, GeoParquet, H3 |
| Infrastructure | [proxmox-ceph-operations](https://github.com/ZQM-Computing/proxmox-ceph-operations) | Proxmox VE + Ceph runbooks |
| AI ops | [ollama-fleet-patterns](https://github.com/ZQM-Computing/ollama-fleet-patterns) | Ollama fleet operations |
| Umbrella | [geospatial-patterns](https://github.com/ZQM-Computing/geospatial-patterns) | Index of all geospatial repos |

## Games monorepo

- **zqm-labs** (private) — Z's Quests & Mischief: player PWA, PocketBase backend, Twine content, Hugo site, Docker infra

## Quick start

```bash
# Python stack
pip install geopandas duckdb pystac rasterio h3

# System stack
sudo apt install gdal-bin postgresql postgis pgrouting

# Docker stack
docker-compose up -d  # pgrouting-patterns
```

## What we do

- **Geospatial patterns** — production-tested open-source repos for every layer of the geospatial stack
- **Data infrastructure** — Project Volusia data portal, DuckDB analytics, PostGIS system of record
- **Tooling** — conversion (GDAL), Python (GeoPandas), routing (pgRouting), rasters (COG/STAC), frontend (MapLibre), grids (H3)
- **AI ops** — Ollama fleet management patterns

## License

All repos are MIT licensed — see each repo's LICENSE file.

Contact: <zqmcomputing@gmail.com>

*Part of [ZQM Labs](https://github.com/ZQM-Labs) — games, gear & a little mischief. Play more. Plan less.*

<!-- ZQM-FOOTER-START -->
<!-- markdownlint-disable MD033 -->
---

<p align="center">
  <em>Play more. Plan less.</em><br>
  <a href="https://zqmlabs.com">zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Labs">ZQM Labs</a> •
  <a href="https://github.com/ZQM-Computing">ZQM Computing</a>
</p>
<!-- markdownlint-enable MD033 -->
<!-- ZQM-FOOTER-END -->

## Validation

This repository uses GitHub Actions for continuous integration. See [CI workflow](https://github.com/ZQM-Computing/ZQM-Computing/actions) for details.

To validate locally:

```bash
# Run documentation checks
python scripts/check_docs.py
```
