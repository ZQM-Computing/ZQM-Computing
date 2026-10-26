# ZQM Computing

**ZQM Computing builds geospatial data engineering tools and the Global Observatory** — open-source GIS, spatial data engineering, and self-hosted public-data intelligence. The portfolio covers QGIS/PyQGIS automation, GDAL/OGR conversion, GeoPandas analysis, PostGIS databases, spatial routing, GeoParquet analytics, cloud-optimized GeoTIFFs (COGs), STAC catalogs, OGC APIs, MapLibre maps, H3 aggregation, and local-LLM operations.

The Global Observatory is a separate application direction: it turns appropriately licensed public sources into mapped, verifiable intelligence. Repository examples, plans, and documentation are not evidence that a live deployment or end-to-end integration exists.

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

## Complete cookbook directory

The curated table above highlights the core geospatial stack. This directory links every repository returned by the current organization cookbook inventory, grouped by topic so the wider portfolio is discoverable without implying that every project has the same maturity, test coverage, or production status. Check each repository's README, license, validation instructions, and current CI before relying on it.

Inventory scope: **91 repositories**, including the `geospatial-cookbooks` umbrella index. This is a name-based discovery inventory, not a certification of content quality or operational readiness.

### Core geospatial, GIS & scientific analysis

[cloudcompare-cookbook](https://github.com/ZQM-Computing/cloudcompare-cookbook) · [earthengine-cookbook](https://github.com/ZQM-Computing/earthengine-cookbook) · [folium-cookbook](https://github.com/ZQM-Computing/folium-cookbook) · [gdal-cookbook](https://github.com/ZQM-Computing/gdal-cookbook) · [geonetwork-cookbook](https://github.com/ZQM-Computing/geonetwork-cookbook) · [geonode-cookbook](https://github.com/ZQM-Computing/geonode-cookbook) · [geopandas-cookbook](https://github.com/ZQM-Computing/geopandas-cookbook) · [geoparquet-cookbook](https://github.com/ZQM-Computing/geoparquet-cookbook) · [geoserver-cookbook](https://github.com/ZQM-Computing/geoserver-cookbook) · [grass-cookbook](https://github.com/ZQM-Computing/grass-cookbook) · [maplibre-cookbook](https://github.com/ZQM-Computing/maplibre-cookbook) · [mapproxy-cookbook](https://github.com/ZQM-Computing/mapproxy-cookbook) · [mapserver-cookbook](https://github.com/ZQM-Computing/mapserver-cookbook) · [metpy-cookbook](https://github.com/ZQM-Computing/metpy-cookbook) · [osmnx-cookbook](https://github.com/ZQM-Computing/osmnx-cookbook) · [osrm-cookbook](https://github.com/ZQM-Computing/osrm-cookbook) · [pdal-cookbook](https://github.com/ZQM-Computing/pdal-cookbook) · [pelias-cookbook](https://github.com/ZQM-Computing/pelias-cookbook) · [qgis-cookbook](https://github.com/ZQM-Computing/qgis-cookbook) · [rasterio-cookbook](https://github.com/ZQM-Computing/rasterio-cookbook) · [rio-cogeo-cookbook](https://github.com/ZQM-Computing/rio-cogeo-cookbook) · [saga-cookbook](https://github.com/ZQM-Computing/saga-cookbook) · [sentinelsat-cookbook](https://github.com/ZQM-Computing/sentinelsat-cookbook) · [webodm-cookbook](https://github.com/ZQM-Computing/webodm-cookbook) · [whitebox-cookbook](https://github.com/ZQM-Computing/whitebox-cookbook)

### Spatial databases, formats & discovery

[cog-cookbook](https://github.com/ZQM-Computing/cog-cookbook) · [duckdb-spatial-cookbook](https://github.com/ZQM-Computing/duckdb-spatial-cookbook) · [pgpointcloud-cookbook](https://github.com/ZQM-Computing/pgpointcloud-cookbook) · [pgrouting-cookbook](https://github.com/ZQM-Computing/pgrouting-cookbook) · [pgstac-cookbook](https://github.com/ZQM-Computing/pgstac-cookbook) · [postgis-cookbook](https://github.com/ZQM-Computing/postgis-cookbook) · [pystac-cookbook](https://github.com/ZQM-Computing/pystac-cookbook) · [stac-cookbook](https://github.com/ZQM-Computing/stac-cookbook) · [timescaledb-cookbook](https://github.com/ZQM-Computing/timescaledb-cookbook) · [titiler-cookbook](https://github.com/ZQM-Computing/titiler-cookbook) · [geospatial-cookbooks](https://github.com/ZQM-Computing/geospatial-cookbooks)

### Data engineering, pipelines & analytics

[airbyte-cookbook](https://github.com/ZQM-Computing/airbyte-cookbook) · [airflow-cookbook](https://github.com/ZQM-Computing/airflow-cookbook) · [datahub-cookbook](https://github.com/ZQM-Computing/datahub-cookbook) · [dbt-cookbook](https://github.com/ZQM-Computing/dbt-cookbook) · [dlt-cookbook](https://github.com/ZQM-Computing/dlt-cookbook) · [meltano-cookbook](https://github.com/ZQM-Computing/meltano-cookbook) · [nifi-cookbook](https://github.com/ZQM-Computing/nifi-cookbook) · [nodered-cookbook](https://github.com/ZQM-Computing/nodered-cookbook) · [plotly-cookbook](https://github.com/ZQM-Computing/plotly-cookbook) · [prefect-cookbook](https://github.com/ZQM-Computing/prefect-cookbook) · [redpanda-cookbook](https://github.com/ZQM-Computing/redpanda-cookbook) · [streamlit-cookbook](https://github.com/ZQM-Computing/streamlit-cookbook) · [superset-cookbook](https://github.com/ZQM-Computing/superset-cookbook)

### Visualization, apps & mapping

[h3-cookbook](https://github.com/ZQM-Computing/h3-cookbook) · [keplergl-cookbook](https://github.com/ZQM-Computing/keplergl-cookbook) · [martin-cookbook](https://github.com/ZQM-Computing/martin-cookbook)

### Infrastructure, observability & operations

[authelia-cookbook](https://github.com/ZQM-Computing/authelia-cookbook) · [caddy-cookbook](https://github.com/ZQM-Computing/caddy-cookbook) · [elasticsearch-cookbook](https://github.com/ZQM-Computing/elasticsearch-cookbook) · [grafana-cookbook](https://github.com/ZQM-Computing/grafana-cookbook) · [minio-cookbook](https://github.com/ZQM-Computing/minio-cookbook) · [mosquitto-cookbook](https://github.com/ZQM-Computing/mosquitto-cookbook) · [ollama-fleet-cookbook](https://github.com/ZQM-Computing/ollama-fleet-cookbook) · [portainer-cookbook](https://github.com/ZQM-Computing/portainer-cookbook) · [prometheus-cookbook](https://github.com/ZQM-Computing/prometheus-cookbook) · [uptime-kuma-cookbook](https://github.com/ZQM-Computing/uptime-kuma-cookbook) · [vaultwarden-cookbook](https://github.com/ZQM-Computing/vaultwarden-cookbook)

### Documents, metadata & web archives

[exiftool-cookbook](https://github.com/ZQM-Computing/exiftool-cookbook) · [pdfplumber-cookbook](https://github.com/ZQM-Computing/pdfplumber-cookbook) · [pymupdf-cookbook](https://github.com/ZQM-Computing/pymupdf-cookbook) · [waybackpy-cookbook](https://github.com/ZQM-Computing/waybackpy-cookbook)

### Public-source collection, security & OSINT

[amass-cookbook](https://github.com/ZQM-Computing/amass-cookbook) · [blackbird-cookbook](https://github.com/ZQM-Computing/blackbird-cookbook) · [censys-cookbook](https://github.com/ZQM-Computing/censys-cookbook) · [certstream-cookbook](https://github.com/ZQM-Computing/certstream-cookbook) · [dnsrecon-cookbook](https://github.com/ZQM-Computing/dnsrecon-cookbook) · [ghunt-cookbook](https://github.com/ZQM-Computing/ghunt-cookbook) · [h8mail-cookbook](https://github.com/ZQM-Computing/h8mail-cookbook) · [holehe-cookbook](https://github.com/ZQM-Computing/holehe-cookbook) · [instaloader-cookbook](https://github.com/ZQM-Computing/instaloader-cookbook) · [intelowl-cookbook](https://github.com/ZQM-Computing/intelowl-cookbook) · [ipwhois-cookbook](https://github.com/ZQM-Computing/ipwhois-cookbook) · [maigret-cookbook](https://github.com/ZQM-Computing/maigret-cookbook) · [misp-cookbook](https://github.com/ZQM-Computing/misp-cookbook) · [nuclei-cookbook](https://github.com/ZQM-Computing/nuclei-cookbook) · [phoneinfoga-cookbook](https://github.com/ZQM-Computing/phoneinfoga-cookbook) · [reconng-cookbook](https://github.com/ZQM-Computing/reconng-cookbook) · [scrapy-cookbook](https://github.com/ZQM-Computing/scrapy-cookbook) · [sherlock-cookbook](https://github.com/ZQM-Computing/sherlock-cookbook) · [shodan-cookbook](https://github.com/ZQM-Computing/shodan-cookbook) · [snscrape-cookbook](https://github.com/ZQM-Computing/snscrape-cookbook) · [spiderfoot-cookbook](https://github.com/ZQM-Computing/spiderfoot-cookbook) · [subfinder-cookbook](https://github.com/ZQM-Computing/subfinder-cookbook) · [sublist3r-cookbook](https://github.com/ZQM-Computing/sublist3r-cookbook) · [theharvester-cookbook](https://github.com/ZQM-Computing/theharvester-cookbook)

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
