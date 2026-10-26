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

## Cookbooks — reproducible geospatial patterns

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

For the individual purpose and inclusion rationale for every entry, see the [annotated cookbook directory](COOKBOOKS.md).

The curated table above is the recommended entry point for the core geospatial stack. This directory broadens discovery across the organization. **Every repository has its own inclusion rationale** explaining the capability it is intended to document and why that topic belongs in this collection. These are subject-based rationales inferred from repository names and tool domains; they do not certify implementation depth, test coverage, maintenance, or production readiness. Review each repository's README, license, examples, validation instructions, and current CI before relying on it.

Inventory scope: **91 repositories**, including the `geospatial-cookbooks` umbrella index. This is a name-based inventory, not a maturity or quality ranking. Security/OSINT cookbooks are intended for lawful, authorized, privacy-respecting use; inclusion is not permission to target third parties.

### Core geospatial, GIS & scientific analysis

- [cloudcompare-cookbook](https://github.com/ZQM-Computing/cloudcompare-cookbook) — Point-cloud inspection and processing for LiDAR and 3D geospatial data.
- [earthengine-cookbook](https://github.com/ZQM-Computing/earthengine-cookbook) — Cloud-scale analysis of satellite imagery and environmental datasets.
- [folium-cookbook](https://github.com/ZQM-Computing/folium-cookbook) — Python-generated interactive maps for analysis previews and lightweight sharing.
- [gdal-cookbook](https://github.com/ZQM-Computing/gdal-cookbook) — Raster/vector conversion, reprojection, VRT construction, and format interoperability.
- [geonetwork-cookbook](https://github.com/ZQM-Computing/geonetwork-cookbook) — Geospatial metadata cataloging for discovery and standards-based sharing.
- [geonode-cookbook](https://github.com/ZQM-Computing/geonode-cookbook) — Publishing and managing spatial datasets, maps, and collaborative catalogs.
- [geopandas-cookbook](https://github.com/ZQM-Computing/geopandas-cookbook) — Python vector analysis, CRS handling, joins, overlays, and tabular-spatial workflows.
- [geoparquet-cookbook](https://github.com/ZQM-Computing/geoparquet-cookbook) — Columnar geospatial storage, partitioning, and efficient analytical access.
- [geoserver-cookbook](https://github.com/ZQM-Computing/geoserver-cookbook) — OGC spatial services and interoperable map/feature publication.
- [grass-cookbook](https://github.com/ZQM-Computing/grass-cookbook) — Raster, vector, terrain, and environmental modeling in desktop and batch GIS.
- [maplibre-cookbook](https://github.com/ZQM-Computing/maplibre-cookbook) — Browser mapping, vector tiles, styling, and terrain-oriented interfaces.
- [mapproxy-cookbook](https://github.com/ZQM-Computing/mapproxy-cookbook) — Map-service proxying, caching, and tile delivery for interoperability and performance.
- [mapserver-cookbook](https://github.com/ZQM-Computing/mapserver-cookbook) — OGC-compatible map publishing and server-side cartographic rendering.
- [metpy-cookbook](https://github.com/ZQM-Computing/metpy-cookbook) — Meteorological data processing, diagnostics, and visualization.
- [osmnx-cookbook](https://github.com/ZQM-Computing/osmnx-cookbook) — Street-network acquisition and analysis for routing, accessibility, and urban form.
- [osrm-cookbook](https://github.com/ZQM-Computing/osrm-cookbook) — Road-network routing and route-service patterns for network-based applications.
- [pdal-cookbook](https://github.com/ZQM-Computing/pdal-cookbook) — LiDAR/point-cloud ETL including filtering, reprojection, and format conversion.
- [pelias-cookbook](https://github.com/ZQM-Computing/pelias-cookbook) — Open-source geocoding and place-search infrastructure.
- [qgis-cookbook](https://github.com/ZQM-Computing/qgis-cookbook) — QGIS workflows, PyQGIS automation, processing, expressions, and reproducible projects.
- [rasterio-cookbook](https://github.com/ZQM-Computing/rasterio-cookbook) — Python raster I/O, windowed processing, masking, reprojection, and CRS-aware analysis.
- [rio-cogeo-cookbook](https://github.com/ZQM-Computing/rio-cogeo-cookbook) — Creation and validation of cloud-optimized raster products using rio-cogeo.
- [saga-cookbook](https://github.com/ZQM-Computing/saga-cookbook) — Terrain and environmental geoprocessing through SAGA GIS algorithms.
- [sentinelsat-cookbook](https://github.com/ZQM-Computing/sentinelsat-cookbook) — Search and download workflows for Sentinel Earth-observation imagery.
- [webodm-cookbook](https://github.com/ZQM-Computing/webodm-cookbook) — Drone photogrammetry for orthomosaics, point clouds, and 3D models.
- [whitebox-cookbook](https://github.com/ZQM-Computing/whitebox-cookbook) — Terrain, hydrology, raster, and environmental geoprocessing.

### Spatial databases, formats & discovery

- [cog-cookbook](https://github.com/ZQM-Computing/cog-cookbook) — Cloud Optimized GeoTIFF creation, validation, and efficient raster serving.
- [duckdb-spatial-cookbook](https://github.com/ZQM-Computing/duckdb-spatial-cookbook) — Embedded spatial SQL and local analytics, including GeoParquet and H3 workflows.
- [pgpointcloud-cookbook](https://github.com/ZQM-Computing/pgpointcloud-cookbook) — Point-cloud storage and querying in PostgreSQL.
- [pgrouting-cookbook](https://github.com/ZQM-Computing/pgrouting-cookbook) — Shortest paths, routing, isochrones, and graph analysis on spatial networks.
- [pgstac-cookbook](https://github.com/ZQM-Computing/pgstac-cookbook) — PostgreSQL-backed STAC API patterns for spatiotemporal asset search.
- [postgis-cookbook](https://github.com/ZQM-Computing/postgis-cookbook) — Spatial database design, indexing, spatial SQL, nearest-neighbor search, and vector tiles.
- [pystac-cookbook](https://github.com/ZQM-Computing/pystac-cookbook) — Python tools to create, validate, and manipulate STAC items and catalogs.
- [stac-cookbook](https://github.com/ZQM-Computing/stac-cookbook) — STAC catalogs, collections, validation, search, and asset discovery.
- [timescaledb-cookbook](https://github.com/ZQM-Computing/timescaledb-cookbook) — Time-series storage and analysis for telemetry and spatiotemporal measurements.
- [titiler-cookbook](https://github.com/ZQM-Computing/titiler-cookbook) — Dynamic raster tile APIs for COG imagery and responsive map clients.
- [geospatial-cookbooks](https://github.com/ZQM-Computing/geospatial-cookbooks) — Umbrella index for navigating the broader cookbook portfolio; included as the cross-project entry point.

### Data engineering, pipelines & analytics

- [airbyte-cookbook](https://github.com/ZQM-Computing/airbyte-cookbook) — Connector-based ingestion between APIs, databases, and analytics destinations.
- [airflow-cookbook](https://github.com/ZQM-Computing/airflow-cookbook) — Scheduled, dependency-aware data workflows for repeatable processing.
- [datahub-cookbook](https://github.com/ZQM-Computing/datahub-cookbook) — Metadata cataloging and lineage for discoverable, governable data assets.
- [dbt-cookbook](https://github.com/ZQM-Computing/dbt-cookbook) — Version-controlled SQL transformations, tests, and documentation.
- [dlt-cookbook](https://github.com/ZQM-Computing/dlt-cookbook) — Python-first ingestion of structured and semi-structured data into analytics systems.
- [meltano-cookbook](https://github.com/ZQM-Computing/meltano-cookbook) — Composable ELT pipelines and connector management.
- [nifi-cookbook](https://github.com/ZQM-Computing/nifi-cookbook) — Visual dataflow orchestration for routing, transforming, and monitoring data.
- [nodered-cookbook](https://github.com/ZQM-Computing/nodered-cookbook) — Low-code event and integration flows for APIs, devices, and automation.
- [plotly-cookbook](https://github.com/ZQM-Computing/plotly-cookbook) — Interactive charts for geospatial and operational metrics.
- [prefect-cookbook](https://github.com/ZQM-Computing/prefect-cookbook) — Observable Python workflow orchestration with retries and scheduling.
- [redpanda-cookbook](https://github.com/ZQM-Computing/redpanda-cookbook) — Kafka-compatible event streaming for pipelines and near-real-time processing.
- [streamlit-cookbook](https://github.com/ZQM-Computing/streamlit-cookbook) — Rapid data applications for sharing analytical tools with users.
- [superset-cookbook](https://github.com/ZQM-Computing/superset-cookbook) — Business-intelligence dashboards and SQL exploration.

### Visualization, apps & mapping

- [h3-cookbook](https://github.com/ZQM-Computing/h3-cookbook) — Hierarchical hexagonal indexing for spatial aggregation and multi-scale summaries.
- [keplergl-cookbook](https://github.com/ZQM-Computing/keplergl-cookbook) — Interactive large-scale geospatial visualization for exploratory analysis.
- [martin-cookbook](https://github.com/ZQM-Computing/martin-cookbook) — High-performance vector-tile serving from spatial databases and geospatial sources.

### Infrastructure, observability & operations

- [authelia-cookbook](https://github.com/ZQM-Computing/authelia-cookbook) — Self-hosted single sign-on and access control for internal applications.
- [caddy-cookbook](https://github.com/ZQM-Computing/caddy-cookbook) — Reverse proxy and automated TLS patterns for publishing services safely.
- [elasticsearch-cookbook](https://github.com/ZQM-Computing/elasticsearch-cookbook) — Indexing and querying document or event data for search and operational analytics.
- [grafana-cookbook](https://github.com/ZQM-Computing/grafana-cookbook) — Dashboards and alerts for pipeline, application, and infrastructure health.
- [minio-cookbook](https://github.com/ZQM-Computing/minio-cookbook) — S3-compatible object storage for datasets, artifacts, backups, and spatial assets.
- [mosquitto-cookbook](https://github.com/ZQM-Computing/mosquitto-cookbook) — MQTT messaging for telemetry, sensors, and lightweight event-driven systems.
- [ollama-fleet-cookbook](https://github.com/ZQM-Computing/ollama-fleet-cookbook) — Local LLM service operations, model availability, and fleet observability.
- [portainer-cookbook](https://github.com/ZQM-Computing/portainer-cookbook) — Container administration for repeatable self-hosted service management.
- [prometheus-cookbook](https://github.com/ZQM-Computing/prometheus-cookbook) — Metrics collection, alert rules, and reliability monitoring.
- [uptime-kuma-cookbook](https://github.com/ZQM-Computing/uptime-kuma-cookbook) — Self-hosted uptime checks and service-status monitoring.
- [vaultwarden-cookbook](https://github.com/ZQM-Computing/vaultwarden-cookbook) — Self-hosted password-manager operations and security-conscious deployment.

### Documents, metadata & web archives

- [exiftool-cookbook](https://github.com/ZQM-Computing/exiftool-cookbook) — File metadata extraction for imagery provenance and digital-asset workflows.
- [pdfplumber-cookbook](https://github.com/ZQM-Computing/pdfplumber-cookbook) — PDF text and table extraction for document-ingestion pipelines.
- [pymupdf-cookbook](https://github.com/ZQM-Computing/pymupdf-cookbook) — PDF parsing, text extraction, page processing, and transformation.
- [waybackpy-cookbook](https://github.com/ZQM-Computing/waybackpy-cookbook) — Wayback Machine lookup for source history and web provenance.

### Public-source collection, security & OSINT

- [amass-cookbook](https://github.com/ZQM-Computing/amass-cookbook) — Domain and attack-surface discovery for authorized security research.
- [blackbird-cookbook](https://github.com/ZQM-Computing/blackbird-cookbook) — Public username discovery with evidence limits and responsible-use guidance.
- [censys-cookbook](https://github.com/ZQM-Computing/censys-cookbook) — Internet-exposure research for lawful, scoped asset inventory.
- [certstream-cookbook](https://github.com/ZQM-Computing/certstream-cookbook) — Certificate-transparency monitoring to discover newly observed certificates and domains.
- [dnsrecon-cookbook](https://github.com/ZQM-Computing/dnsrecon-cookbook) — DNS enumeration and validation for authorized domain inventory and troubleshooting.
- [ghunt-cookbook](https://github.com/ZQM-Computing/ghunt-cookbook) — Public account-related OSINT with privacy and lawful-use boundaries.
- [h8mail-cookbook](https://github.com/ZQM-Computing/h8mail-cookbook) — Email-exposure intelligence with privacy and authorization safeguards.
- [holehe-cookbook](https://github.com/ZQM-Computing/holehe-cookbook) — Public account-registration signals, documenting limits on inference and personal-data use.
- [instaloader-cookbook](https://github.com/ZQM-Computing/instaloader-cookbook) — Collection of accessible Instagram content/metadata subject to platform rules and privacy constraints.
- [intelowl-cookbook](https://github.com/ZQM-Computing/intelowl-cookbook) — Threat-intelligence enrichment and indicator analysis across supported sources.
- [ipwhois-cookbook](https://github.com/ZQM-Computing/ipwhois-cookbook) — IP registration and network metadata for provenance and investigation triage.
- [maigret-cookbook](https://github.com/ZQM-Computing/maigret-cookbook) — Cross-site public username discovery with responsible OSINT caveats.
- [misp-cookbook](https://github.com/ZQM-Computing/misp-cookbook) — Structured threat-intelligence sharing and event modeling for defensive operations.
- [nuclei-cookbook](https://github.com/ZQM-Computing/nuclei-cookbook) — Template-based checks on owned or authorized targets with safe-scope guidance.
- [phoneinfoga-cookbook](https://github.com/ZQM-Computing/phoneinfoga-cookbook) — Phone-number OSINT for authorized validation, with strong privacy caveats.
- [reconng-cookbook](https://github.com/ZQM-Computing/reconng-cookbook) — Modular OSINT workflows for authorized assessments and repeatable investigations.
- [scrapy-cookbook](https://github.com/ZQM-Computing/scrapy-cookbook) — Structured web crawling with permission, rate-limit, and provenance controls.
- [sherlock-cookbook](https://github.com/ZQM-Computing/sherlock-cookbook) — Public username search with evidence limits and responsible-use caveats.
- [shodan-cookbook](https://github.com/ZQM-Computing/shodan-cookbook) — Internet-connected device search for authorized exposure awareness.
- [snscrape-cookbook](https://github.com/ZQM-Computing/snscrape-cookbook) — Public web/social-source collection with platform terms and provenance.
- [spiderfoot-cookbook](https://github.com/ZQM-Computing/spiderfoot-cookbook) — OSINT automation and correlation for authorized security research.
- [subfinder-cookbook](https://github.com/ZQM-Computing/subfinder-cookbook) — Passive subdomain discovery for authorized domain inventory.
- [sublist3r-cookbook](https://github.com/ZQM-Computing/sublist3r-cookbook) — Subdomain enumeration for scoped testing and domain inventory.
- [theharvester-cookbook](https://github.com/ZQM-Computing/theharvester-cookbook) — Public-source domain/contact discovery for authorized reconnaissance.

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
- **Cookbooks** — open-source methods with explicit validation scope for every layer of
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
