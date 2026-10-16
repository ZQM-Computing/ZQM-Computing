# ZQM Computing — Geospatial Engineering

<p align="center">
  <img src="https://img.shields.io/badge/Geospatial-PostGIS%20H3%20STAC-blue" alt="Geospatial" />
  <img src="https://img.shields.io/badge/Patterns-14%20repos-green" alt="Patterns" />
  <img src="https://img.shields.io/badge/Open%20Source-MIT-green" alt="Open Source" />
</p>

<p align="center">
  <strong>Production-tested geospatial patterns.</strong><br>
  PostgreSQL/PostGIS, H3, STAC, GDAL, GeoPandas, DuckDB, COG, MapLibre, pgRouting, Proxmox/Ceph — 14+ repos of copy-paste-ready SQL, Python, and shell.
</p>

<p align="center">
  <a href="https://zqmlabs.com">🌐 zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Computing/geospatial-patterns">📦 Pattern Index</a>
</p>

---

## 🗺️ What We Do

ZQM Computing is the geospatial engineering arm of [ZQM Labs](https://github.com/ZQM-Labs). We build the patterns, data infrastructure, and tooling that ground location-based games in real-world geospatial data.

## 📚 Pattern Repos

| Repo | Language | Description |
|---|---|---|
| [postgis-patterns](https://github.com/ZQM-Computing/postgis-patterns) | PLpgSQL | GiST/SP-GiST/BRIN spatial indexing, spatial joins, vector tiles (ST_AsMVT), geometry data quality |
| [h3-patterns](https://github.com/ZQM-Computing/h3-patterns) | Python | H3 hexagonal hierarchical grid: indexing, aggregation, visualization, benchmarks |
| [stac-patterns](https://github.com/ZQM-Computing/stac-patterns) | Python | STAC catalog creation, item validation, search API, bulk operations |
| [gdal-patterns](https://github.com/ZQM-Computing/gdal-patterns) | Python | GDAL/OGR command-line patterns: conversion, reprojection, clipping, mosaicking |
| [geopandas-patterns](https://github.com/ZQM-Computing/geopandas-patterns) | Python | GeoPandas/Shapely: spatial joins, CRS handling, overlay, interpolation |
| [duckdb-spatial-patterns](https://github.com/ZQM-Computing/duckdb-spatial-patterns) | Python | DuckDB Spatial: GeoJSON/GeoParquet reads, spatial joins, KNN, GeoParquet export |
| [geoparquet-patterns](https://github.com/ZQM-Computing/geoparquet-patterns) | Python | GeoParquet: partitioning, predicate pushdown, DuckDB/Spark integration |
| [cog-patterns](https://github.com/ZQM-Computing/cog-patterns) | Python | Cloud Optimized GeoTIFF: creation, validation, TiTiler serving, xarray |
| [pgrouting-patterns](https://github.com/ZQM-Computing/pgrouting-patterns) | Python | pgRouting: shortest path, driving distance, isochrones, traffic-aware routing |
| [maplibre-patterns](https://github.com/ZQM-Computing/maplibre-patterns) | JS | MapLibre GL JS: custom layers, 3D terrain, performance tuning |
| [proxmox-ceph-operations](https://github.com/ZQM-Computing/proxmox-ceph-operations) | Shell | Proxmox VE + Ceph: cluster health, backup/restore, OSD replacement, upgrades |
| [ollama-fleet-patterns](https://github.com/ZQM-Computing/ollama-fleet-patterns) | Python | Ollama fleet operations: model sync, health checks, VRAM budgeting, RAG |
| [geospatial-api-reference](https://github.com/ZQM-Computing/geospatial-api-reference) | Python | OGC API - Features reference: FastAPI + PostGIS, GeoJSON over REST |
| [qgis-resources](https://github.com/ZQM-Computing/qgis-resources) | Python | QGIS resources: expressions, PyQGIS snippets, Processing workflows, .qml styles |

## 🏗️ How It Connects to Games

Our games (Wisp's Lost Lanterns, etc.) use these patterns to:
- Bin locations into H3 cells for scalable game areas
- Serve vector tiles (ST_AsMVT) for in-game maps
- Query spatial data with PostGIS for proximity detection
- Process geospatial data with GDAL/GeoPandas for content pipelines

## 📜 License

All repos are MIT-licensed. Each repo includes runnable examples with Docker where applicable.

---

<p align="center">
  <em>Build with location. Play with purpose.</em><br>
  <a href="https://zqmlabs.com">zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Labs">ZQM Labs</a>
</p>
