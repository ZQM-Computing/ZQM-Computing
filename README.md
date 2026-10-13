# ZQM Computing — Geospatial Arm of ZQM Labs

**ZQM Computing** is the geospatial engineering arm of **ZQM Labs** — the games studio behind Z's Quests & Mischief. We build the geospatial patterns, data infrastructure, and tooling that ground ZQM Labs games in real-world locations across Volusia County, Florida.

## What we do

- **Geospatial patterns** — production-tested open-source repos for every layer of the geospatial stack
- **Data infrastructure** — Project Volusia data portal, DuckDB analytics, PostGIS system of record
- **Tooling** — conversion (GDAL), Python (GeoPandas), routing (pgRaster), rasters (COG/STAC), frontend (MapLibre), grids (H3)
- **AI ops** — Ollama fleet management patterns

## The games connection

ZQM Labs builds location-based scavenger-hunt games (Z's Quests & Mischief). ZQM Computing provides the geospatial engine:

- **QGIS** — desktop mapping for game design
- **GDAL** — raster/vector conversion for game assets
- **GeoPandas** — spatial analysis for location selection
- **PostGIS** — system of record for game data
- **pgRouting** — route optimization for game paths
- **DuckDB** — fast analytics on game telemetry
- **COG/STAC** — cloud-native raster serving for game maps
- **MapLibre** — frontend rendering for game UIs
- **H3** — hexagonal grid for location binning and leaderboards

## Geospatial repos (19 public)

### System of record
- **[postgis-patterns](https://github.com/ZQM-Computing/postgis-patterns)** — production PostGIS patterns: spatial indexing, MVT, KNN
- **[pgrouting-patterns](https://github.com/ZQM-Computing/pgrouting-patterns)** — routing, shortest path, isochrones, network analysis
- **[geospatial-api-reference](https://github.com/ZQM-Computing/geospatial-api-reference)** — OGC API - Features with FastAPI + PostGIS

### Conversion & Python
- **[gdal-patterns](https://github.com/ZQM-Computing/gdal-patterns)** — GDAL/OGR CLI patterns for raster/vector conversion, reprojection
- **[geopandas-patterns](https://github.com/ZQM-Computing/geopandas-patterns)** — GeoPandas/Shapely patterns: spatial joins, CRS, overlays, interpolation
- **[geoparquet-patterns](https://github.com/ZQM-Computing/geoparquet-patterns)** — GeoParquet for columnar analytics: partitioning, predicate pushdown, DuckDB

### Raster & cloud
- **[cog-patterns](https://github.com/ZQM-Computing/cog-patterns)** — Cloud Optimized GeoTIFF: creation, validation, TiTiler serving
- **[stac-patterns](https://github.com/ZQM-Computing/stac-patterns)** — STAC catalogs: creation, validation, search API, bulk operations

### Frontend & grid
- **[maplibre-patterns](https://github.com/ZQM-Computing/maplibre-patterns)** — MapLibre GL JS: vector tiles, custom layers, 3D terrain
- **[h3-patterns](https://github.com/ZQM-Computing/h3-patterns)** — H3 hexagonal grid: indexing, aggregation, visualization

### Desktop & analytics
- **[duckdb-spatial-patterns](https://github.com/ZQM-Computing/duckdb-spatial-patterns)** — DuckDB Spatial: SQL spatial, GeoParquet, H3
- **[qgis-resources](https://github.com/ZQM-Computing/qgis-resources)** — QGIS expressions, PyQGIS, styles, QField guides

### Infrastructure & AI
- **[proxmox-ceph-operations](https://github.com/ZQM-Computing/proxmox-ceph-operations)** — Proxmox VE + Ceph operations runbooks
- **[ollama-fleet-patterns](https://github.com/ZQM-Computing/ollama-fleet-patterns)** — Ollama fleet operations & a minimal RAG reference

### Games monorepo
- **[zqm-labs](https://github.com/ZQM-Computing/zqm-labs)** — Z's Quests & Mischief: player PWA, PocketBase backend, Twine content, Hugo site, Docker infra

### Umbrella
- **[geospatial-patterns](https://github.com/ZQM-Computing/geospatial-patterns)** — umbrella index of all geospatial pattern repos

Contact: zqmcomputing@gmail.com

*Part of [ZQM Labs](https://github.com/ZQM-Labs) — games, gear & a little mischief. Play more. Plan less.*
