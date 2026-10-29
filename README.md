# ZQM Computing

**ZQM Computing builds the Global Observatory** — a self-hosted, open-source
observatory that turns public data into mapped, verifiable intelligence:
GEOINT (land, water, infrastructure, imagery, sensors) and OSINT (entities,
domains, records, signals) fused into one picture.

**Volusia County, Florida is the proving ground, not the boundary.** The
pattern is built to travel anywhere public data allows, and the AI tools grown
on it are meant for everyone's use.

## Focus

- **Safety** — safe places and routes, and the conditions that make them safe.
- **Situational awareness** — what is happening around you right now.
- **Operational awareness** — the state of the systems, services, and activities
  you depend on.
- **Security awareness** — threats and risks, as one of the three awarenesses,
  not the whole.
- **Family values** — family-friendly places and activities, and products a
  family can use and trust.

## Principles

1. **Public/open sources only.** No credentialed, paywalled, or private data.
2. **Passive-only against third parties.** Active tools run on owned or
   authorized targets only.
3. **Verify before claim.** Source, retrieval date, and method on every product.
4. **No purchases, ever.** The entire stack is free and open-source.

## The Observatory

- [zqm-observatory](https://github.com/ZQM-Computing/zqm-observatory) — the
  Observatory's home: mission, focus, principles, and products. License:
  Apache 2.0 for code, CC BY 4.0 for data products.

## Cookbooks — production-tested geospatial methods

**Live cookbook docs:** [cog](https://cog.zqmlabs.com) ·
[duckdb](https://duckdb.zqmlabs.com) · [gdal](https://gdal.zqmlabs.com) ·
[geopandas](https://geopandas.zqmlabs.com) ·
[geoparquet](https://geoparquet.zqmlabs.com) · [h3](https://h3.zqmlabs.com) ·
[maplibre](https://maplibre.zqmlabs.com) ·
[pgrouting](https://pgrouting.zqmlabs.com) ·
[postgis](https://postgis.zqmlabs.com) · [stac](https://stac.zqmlabs.com)

| Layer | Repo | Description |
| --- | --- | --- |
| System of Record | [postgis-cookbook](https://github.com/ZQM-Computing/postgis-cookbook) | Production PostGIS patterns: spatial indexing, MVT, KNN |
| System of Record | [pgrouting-cookbook](https://github.com/ZQM-Computing/pgrouting-cookbook) | Routing, shortest path, isochrones, network analysis |
| System of Record | [geospatial-api-reference](https://github.com/ZQM-Computing/geospatial-api-reference) | OGC API - Features with FastAPI + PostGIS |
| Conversion | [gdal-cookbook](https://github.com/ZQM-Computing/gdal-cookbook) | GDAL/OGR CLI: reprojection, conversion, VRT |
| Python | [geopandas-cookbook](https://github.com/ZQM-Computing/geopandas-cookbook) | GeoPandas: spatial joins, CRS, overlays |
| Columnar | [geoparquet-cookbook](https://github.com/ZQM-Computing/geoparquet-cookbook) | GeoParquet: partitioning, predicate pushdown |
| Raster | [cog-cookbook](https://github.com/ZQM-Computing/cog-cookbook) | Cloud Optimized GeoTIFF: creation, serving |
| Discovery | [stac-cookbook](https://github.com/ZQM-Computing/stac-cookbook) | STAC: catalogs, validation, search API |
| Frontend | [maplibre-cookbook](https://github.com/ZQM-Computing/maplibre-cookbook) | MapLibre GL JS: vector tiles, 3D terrain |
| Grid | [h3-cookbook](https://github.com/ZQM-Computing/h3-cookbook) | H3: hexagonal binning, aggregation |
| Desktop | [qgis-resources](https://github.com/ZQM-Computing/qgis-resources) | QGIS expressions, PyQGIS, styles |
| Analytics | [duckdb-spatial-cookbook](https://github.com/ZQM-Computing/duckdb-spatial-cookbook) | DuckDB: SQL spatial, GeoParquet, H3 |
| Infrastructure | [proxmox-ceph-operations](https://github.com/ZQM-Computing/proxmox-ceph-operations) | Proxmox VE + Ceph runbooks |
| AI ops | [ollama-fleet-cookbook](https://github.com/ZQM-Computing/ollama-fleet-cookbook) | Ollama fleet operations |
| Umbrella | [geospatial-cookbooks](https://github.com/ZQM-Computing/geospatial-cookbooks) | Index of all geospatial repos |

## Quick start

```bash
# Python stack
pip install geopandas duckdb pystac rasterio h3

# System stack
sudo apt install gdal-bin postgresql postgis pgrouting

# Docker stack
docker-compose up -d  # pgrouting-cookbook
```

## Who this is for

Geospatial developers, GIS analysts, data engineers, and Python developers
who need production-tested methods for spatial data workflows — and
communities and families who want honest, sourced answers about the places
around them.

## What we do

- **The Observatory** — living map layers, a STAC imagery catalog, a weekly
  intel digest, community briefs, and family guides, all sourced and dated.
- **Cookbooks** — production-tested open-source methods for every layer of
  the geospatial stack.
- **Data infrastructure** — DuckDB analytics, PostGIS system of record.
- **Tooling** — conversion (GDAL), Python (GeoPandas), routing (pgRouting),
  rasters (COG/STAC), frontend (MapLibre), grids (H3).
- **AI ops** — Ollama fleet management.

## Sister projects

ZQM Labs builds location games ([Z's Quests & Mischief](https://zqmlabs.com))
with open geospatial methods — the same craft behind these cookbooks. ZQM
Computing provides the supporting infrastructure behind those games: the
methods, tools, and data infrastructure they are built on. The two projects
are siblings: shared methods, shared love of real places, each standing on
its own. Nothing here depends on the games.

## Licenses

Licenses vary by repo — see each repo's LICENSE file. The Observatory
(zqm-observatory) is Apache 2.0 for code and CC BY 4.0 for data products.

Contact: <zqmcomputing@gmail.com>

*Built once in Volusia, built to travel.*
