# ZQM Computing Cookbook Directory

This directory explains **what each cookbook is for and why it belongs in the ZQM Computing portfolio**. Descriptions are topic-level summaries based on each project's technology/domain, not claims that every recipe has been independently tested or that each repository is production-ready. Before using a recipe, check that repository's current README, license, dependencies, security notes, and CI status.

**Inventory method:** repository-name search for `cookbook` in the ZQM-Computing organization, then inclusion of repositories whose names end in `-cookbook` or `-cookbooks`. The current inventory contains 91 repositories, including the umbrella index. Re-run the search periodically because repositories and scopes change.

## Core geospatial, GIS & scientific analysis

### [cloudcompare-cookbook](https://github.com/ZQM-Computing/cloudcompare-cookbook)

Point-cloud and 3D-scene inspection workflows; included for QA and analysis of dense survey and reality-capture data.

### [earthengine-cookbook](https://github.com/ZQM-Computing/earthengine-cookbook)

Google Earth Engine geospatial processing patterns; included for scalable satellite, environmental, and time-series analysis.

### [folium-cookbook](https://github.com/ZQM-Computing/folium-cookbook)

Python-to-Leaflet interactive map patterns; included for lightweight map outputs in notebooks and data applications.

### [gdal-cookbook](https://github.com/ZQM-Computing/gdal-cookbook)

GDAL/OGR raster and vector processing recipes; included as foundational interoperability, conversion, reprojection, and automation guidance.

### [geonetwork-cookbook](https://github.com/ZQM-Computing/geonetwork-cookbook)

GeoNetwork metadata catalog patterns; included for discoverability, metadata publishing, and spatial-data catalog operations.

### [geonode-cookbook](https://github.com/ZQM-Computing/geonode-cookbook)

GeoNode geospatial content management patterns; included for collaborative publishing and management of spatial datasets and maps.

### [geopandas-cookbook](https://github.com/ZQM-Computing/geopandas-cookbook)

GeoPandas vector-analysis patterns; included for reproducible Python workflows over tabular and vector geospatial data.

### [geoparquet-cookbook](https://github.com/ZQM-Computing/geoparquet-cookbook)

GeoParquet storage and interoperability patterns; included for columnar, analytics-friendly exchange of spatial data.

### [geoserver-cookbook](https://github.com/ZQM-Computing/geoserver-cookbook)

GeoServer publishing and service configuration patterns; included for operational OGC services and web map/data delivery.

### [grass-cookbook](https://github.com/ZQM-Computing/grass-cookbook)

GRASS GIS analysis patterns; included for raster, terrain, hydrology, and advanced spatial processing workflows.

### [maplibre-cookbook](https://github.com/ZQM-Computing/maplibre-cookbook)

MapLibre web-map implementation patterns; included for open mapping front ends and vector-tile visualization.

### [mapproxy-cookbook](https://github.com/ZQM-Computing/mapproxy-cookbook)

MapProxy caching and proxy patterns; included to improve map-service performance and manage upstream map sources.

### [mapserver-cookbook](https://github.com/ZQM-Computing/mapserver-cookbook)

MapServer configuration and publishing patterns; included for performant map rendering and OGC service delivery.

### [metpy-cookbook](https://github.com/ZQM-Computing/metpy-cookbook)

Meteorological data analysis and visualization patterns; included to cover weather, atmospheric science, and geospatially relevant scientific datasets.

### [osmnx-cookbook](https://github.com/ZQM-Computing/osmnx-cookbook)

Street-network retrieval and analysis patterns; included for reproducible urban network, accessibility, and mobility analysis.

### [osrm-cookbook](https://github.com/ZQM-Computing/osrm-cookbook)

Open Source Routing Machine deployment and routing patterns; included for route calculation and network-based services.

### [pdal-cookbook](https://github.com/ZQM-Computing/pdal-cookbook)

Point Data Abstraction Library pipelines; included for repeatable point-cloud filtering, transformation, and format conversion.

### [pelias-cookbook](https://github.com/ZQM-Computing/pelias-cookbook)

Pelias geocoder patterns; included for building and operating address/place search services.

### [qgis-cookbook](https://github.com/ZQM-Computing/qgis-cookbook)

QGIS desktop and PyQGIS automation patterns; included for desktop GIS workflows, processing, plugins, and repeatable project operations.

### [rasterio-cookbook](https://github.com/ZQM-Computing/rasterio-cookbook)

Python raster I/O and processing patterns; included for dependable raster access, windows, masks, transforms, and georeferencing.

### [rio-cogeo-cookbook](https://github.com/ZQM-Computing/rio-cogeo-cookbook)

Cloud Optimized GeoTIFF creation and validation patterns; included for efficient remote raster access and distribution.

### [saga-cookbook](https://github.com/ZQM-Computing/saga-cookbook)

SAGA GIS terrain and geoscientific processing patterns; included for specialized raster, geomorphology, and environmental analysis.

### [sentinelsat-cookbook](https://github.com/ZQM-Computing/sentinelsat-cookbook)

Sentinel satellite data discovery and download patterns; included for repeatable access to Earth-observation inputs.

### [webodm-cookbook](https://github.com/ZQM-Computing/webodm-cookbook)

WebODM photogrammetry workflows; included for turning drone imagery into orthomosaics, point clouds, and surface models.

### [whitebox-cookbook](https://github.com/ZQM-Computing/whitebox-cookbook)

WhiteboxTools geospatial analysis recipes; included for terrain, hydrology, and geoscience processing.

## Spatial databases, formats & discovery

### [cog-cookbook](https://github.com/ZQM-Computing/cog-cookbook)

Cloud Optimized GeoTIFF usage patterns; included for practical cloud-native raster delivery, access, and validation.

### [duckdb-spatial-cookbook](https://github.com/ZQM-Computing/duckdb-spatial-cookbook)

DuckDB spatial extension patterns; included for fast analytical SQL over spatial files and columnar datasets.

### [geospatial-cookbooks](https://github.com/ZQM-Computing/geospatial-cookbooks)

Portfolio index for the geospatial cookbook collection; included as the navigation hub for finding related repositories and avoiding isolated discovery.

### [pgpointcloud-cookbook](https://github.com/ZQM-Computing/pgpointcloud-cookbook)

PostgreSQL point-cloud storage and query patterns; included for managing and analyzing large lidar datasets in database workflows.

### [pgrouting-cookbook](https://github.com/ZQM-Computing/pgrouting-cookbook)

pgRouting network-analysis recipes; included for shortest paths, routing, and graph analysis directly in PostGIS.

### [pgstac-cookbook](https://github.com/ZQM-Computing/pgstac-cookbook)

pgSTAC catalog implementation patterns; included for STAC API-style discovery backed by PostgreSQL.

### [postgis-cookbook](https://github.com/ZQM-Computing/postgis-cookbook)

PostGIS spatial SQL patterns; included as a core reference for indexing, geometry operations, validity, and spatial database design.

### [pystac-cookbook](https://github.com/ZQM-Computing/pystac-cookbook)

PySTAC catalog and item authoring patterns; included for programmatic creation, validation, and management of STAC metadata.

### [stac-cookbook](https://github.com/ZQM-Computing/stac-cookbook)

SpatioTemporal Asset Catalog concepts and implementation patterns; included to connect Earth-observation assets with consistent searchable metadata.

### [timescaledb-cookbook](https://github.com/ZQM-Computing/timescaledb-cookbook)

Time-series database patterns; included for combining temporal telemetry or observations with spatially indexed workflows where applicable.

### [titiler-cookbook](https://github.com/ZQM-Computing/titiler-cookbook)

Dynamic raster tile service patterns; included for serving cloud-hosted raster assets as web maps and analysis-ready tiles.

## Data engineering, pipelines & analytics

### [airbyte-cookbook](https://github.com/ZQM-Computing/airbyte-cookbook)

Connector-based data ingestion patterns; included for repeatable extraction and loading of external data into geospatial pipelines.

### [airflow-cookbook](https://github.com/ZQM-Computing/airflow-cookbook)

Airflow DAG orchestration patterns; included for scheduling, dependency management, retries, and observability of data workflows.

### [datahub-cookbook](https://github.com/ZQM-Computing/datahub-cookbook)

DataHub metadata catalog and lineage patterns; included for dataset ownership, discoverability, and governance.

### [dbt-cookbook](https://github.com/ZQM-Computing/dbt-cookbook)

dbt transformation and testing patterns; included for version-controlled, tested SQL models and analytics transformations.

### [dlt-cookbook](https://github.com/ZQM-Computing/dlt-cookbook)

Python-native data loading patterns; included for schema-aware ingestion and repeatable pipeline construction.

### [meltano-cookbook](https://github.com/ZQM-Computing/meltano-cookbook)

Meltano ELT project patterns; included for managing extractor/loader integrations and reproducible data operations.

### [nifi-cookbook](https://github.com/ZQM-Computing/nifi-cookbook)

Apache NiFi flow design patterns; included for visual ingestion, routing, transformation, and provenance-aware data movement.

### [nodered-cookbook](https://github.com/ZQM-Computing/nodered-cookbook)

Node-RED integration and flow patterns; included for event-driven glue between APIs, sensors, and operational systems.

### [plotly-cookbook](https://github.com/ZQM-Computing/plotly-cookbook)

Interactive analytical visualization patterns; included for communicating data and geospatial analysis through charts and dashboards.

### [prefect-cookbook](https://github.com/ZQM-Computing/prefect-cookbook)

Prefect workflow orchestration patterns; included for observable, retryable Python data pipelines.

### [redpanda-cookbook](https://github.com/ZQM-Computing/redpanda-cookbook)

Kafka-compatible streaming patterns; included for event pipelines and near-real-time data integration.

### [streamlit-cookbook](https://github.com/ZQM-Computing/streamlit-cookbook)

Streamlit data-app patterns; included for turning analysis and geospatial tools into lightweight interactive interfaces.

### [superset-cookbook](https://github.com/ZQM-Computing/superset-cookbook)

Apache Superset dashboard and semantic-layer patterns; included for operational reporting and exploratory analytics.

## Visualization, apps & mapping

### [h3-cookbook](https://github.com/ZQM-Computing/h3-cookbook)

Hierarchical hexagonal indexing patterns; included for spatial aggregation, indexing, and multi-resolution analysis.

### [keplergl-cookbook](https://github.com/ZQM-Computing/keplergl-cookbook)

Kepler.gl large-scale geospatial visualization patterns; included for exploratory visual analysis of point, path, and polygon datasets.

### [martin-cookbook](https://github.com/ZQM-Computing/martin-cookbook)

Martin vector-tile server patterns; included for serving database-backed vector tiles to web mapping clients.

## Infrastructure, observability & operations

### [authelia-cookbook](https://github.com/ZQM-Computing/authelia-cookbook)

Authelia identity and access gateway patterns; included for documenting authentication boundaries around self-hosted services.

### [caddy-cookbook](https://github.com/ZQM-Computing/caddy-cookbook)

Caddy web server and reverse-proxy patterns; included for TLS termination, routing, and service exposure.

### [elasticsearch-cookbook](https://github.com/ZQM-Computing/elasticsearch-cookbook)

Elasticsearch indexing and search patterns; included for text/search workloads and operational log or metadata discovery.

### [grafana-cookbook](https://github.com/ZQM-Computing/grafana-cookbook)

Grafana dashboards and alerting patterns; included for operational visibility across services and data pipelines.

### [minio-cookbook](https://github.com/ZQM-Computing/minio-cookbook)

S3-compatible object-storage patterns; included for managing raster, vector, imagery, and other data artifacts.

### [mosquitto-cookbook](https://github.com/ZQM-Computing/mosquitto-cookbook)

MQTT broker patterns; included for lightweight telemetry and event collection from sensors or edge systems.

### [ollama-fleet-cookbook](https://github.com/ZQM-Computing/ollama-fleet-cookbook)

Ollama model-serving and fleet operations patterns; included for local inference deployment, lifecycle management, and repeatable AI operations.

### [portainer-cookbook](https://github.com/ZQM-Computing/portainer-cookbook)

Container management patterns; included for operational administration of containerized services.

### [prometheus-cookbook](https://github.com/ZQM-Computing/prometheus-cookbook)

Metrics collection and alerting patterns; included for measurable service health and capacity monitoring.

### [uptime-kuma-cookbook](https://github.com/ZQM-Computing/uptime-kuma-cookbook)

Service availability monitoring patterns; included for simple endpoint checks and outage visibility.

### [vaultwarden-cookbook](https://github.com/ZQM-Computing/vaultwarden-cookbook)

Vaultwarden self-hosted password-manager operations; included for documenting secure deployment and maintenance considerations.

## Documents, metadata & web archives

### [exiftool-cookbook](https://github.com/ZQM-Computing/exiftool-cookbook)

EXIF and file-metadata inspection patterns; included for asset provenance, metadata QA, and forensic-style metadata extraction.

### [pdfplumber-cookbook](https://github.com/ZQM-Computing/pdfplumber-cookbook)

PDF text and table extraction patterns; included for converting document-based reports into structured data.

### [pymupdf-cookbook](https://github.com/ZQM-Computing/pymupdf-cookbook)

PyMuPDF document parsing and rendering patterns; included for PDF text, page, image, and layout processing.

### [waybackpy-cookbook](https://github.com/ZQM-Computing/waybackpy-cookbook)

Internet Archive Wayback Machine access patterns; included for historical webpage retrieval and source-change research.

## Public-source collection, security & OSINT

### [amass-cookbook](https://github.com/ZQM-Computing/amass-cookbook)

Attack-surface and DNS asset enumeration patterns; included for authorized external asset inventory and security assessment workflows.

### [blackbird-cookbook](https://github.com/ZQM-Computing/blackbird-cookbook)

Public-account discovery patterns; included for lawful, public-source research with clear scope and privacy boundaries.

### [censys-cookbook](https://github.com/ZQM-Computing/censys-cookbook)

Internet-exposed asset search patterns; included for authorized infrastructure discovery and exposure review.

### [certstream-cookbook](https://github.com/ZQM-Computing/certstream-cookbook)

Certificate-transparency stream processing patterns; included for observing newly issued certificates and domain-related signals.

### [dnsrecon-cookbook](https://github.com/ZQM-Computing/dnsrecon-cookbook)

DNS enumeration and record-audit patterns; included for defensive DNS inventory and configuration review.

### [ghunt-cookbook](https://github.com/ZQM-Computing/ghunt-cookbook)

Publicly exposed Google-account footprint research patterns; included for scoped OSINT learning with explicit privacy safeguards.

### [h8mail-cookbook](https://github.com/ZQM-Computing/h8mail-cookbook)

Email exposure-checking patterns; included for defensive breach-exposure assessment and account-risk awareness.

### [holehe-cookbook](https://github.com/ZQM-Computing/holehe-cookbook)

Public account-presence checking patterns; included for authorized account-footprint audits and privacy assessments.

### [instaloader-cookbook](https://github.com/ZQM-Computing/instaloader-cookbook)

Public Instagram content retrieval patterns; included for scoped public-source collection while respecting platform terms and privacy.

### [intelowl-cookbook](https://github.com/ZQM-Computing/intelowl-cookbook)

Threat-intelligence enrichment platform patterns; included for repeatable enrichment of indicators during defensive investigations.

### [ipwhois-cookbook](https://github.com/ZQM-Computing/ipwhois-cookbook)

IP registration and network metadata lookup patterns; included for basic network attribution and infrastructure context.

### [maigret-cookbook](https://github.com/ZQM-Computing/maigret-cookbook)

Username footprint research patterns; included for authorized public-source identity exposure audits.

### [misp-cookbook](https://github.com/ZQM-Computing/misp-cookbook)

MISP threat-intelligence sharing patterns; included for structured indicators, enrichment, and defensive collaboration.

### [nuclei-cookbook](https://github.com/ZQM-Computing/nuclei-cookbook)

Template-driven vulnerability checking patterns; included for authorized security validation and repeatable defensive scanning.

### [phoneinfoga-cookbook](https://github.com/ZQM-Computing/phoneinfoga-cookbook)

Phone-number OSINT research patterns; included for documenting safe, lawful public-source checks and privacy risks.

### [reconng-cookbook](https://github.com/ZQM-Computing/reconng-cookbook)

Recon-ng framework workflows; included for structured, scope-controlled OSINT collection and repeatable investigations.

### [scrapy-cookbook](https://github.com/ZQM-Computing/scrapy-cookbook)

Scrapy crawler and spider patterns; included for maintainable, rate-conscious web extraction and data collection.

### [sherlock-cookbook](https://github.com/ZQM-Computing/sherlock-cookbook)

Username search across public services; included for authorized digital-footprint audits and exposure awareness.

### [shodan-cookbook](https://github.com/ZQM-Computing/shodan-cookbook)

Shodan search and API patterns; included for defensive visibility into internet-facing services and assets.

### [snscrape-cookbook](https://github.com/ZQM-Computing/snscrape-cookbook)

Public social-media data collection patterns; included for research-oriented collection where permitted by source terms and applicable law.

### [spiderfoot-cookbook](https://github.com/ZQM-Computing/spiderfoot-cookbook)

Automated OSINT correlation patterns; included for defensive asset discovery and investigation triage.

### [subfinder-cookbook](https://github.com/ZQM-Computing/subfinder-cookbook)

Subdomain discovery patterns; included for authorized domain inventory and external attack-surface management.

### [sublist3r-cookbook](https://github.com/ZQM-Computing/sublist3r-cookbook)

Subdomain enumeration patterns; included as an additional reference for scoped domain discovery and cross-checking.

### [theharvester-cookbook](https://github.com/ZQM-Computing/theharvester-cookbook)

Public-source email, domain, and host collection patterns; included for authorized exposure assessment and OSINT fundamentals.
