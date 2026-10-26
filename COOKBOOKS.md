# ZQM Computing Cookbook Directory

This directory explains **what each cookbook is for and why it belongs in the ZQM Computing portfolio**. Descriptions are topic-level summaries based on each project's technology/domain, not claims that every recipe has been independently tested or that each repository is production-ready. Before using a recipe, check that repository's current README, license, dependencies, security notes, and CI status.

**Inventory method:** repository-name search for `cookbook` in the ZQM-Computing organization, then inclusion of repositories whose names end in `-cookbook` or `-cookbooks`. The current inventory contains 91 repositories, including the umbrella index. Re-run the search periodically because repositories and scopes change.

**Last inventory reconciliation:** 2026-10-26.

The current search result was reconciled against this document: **91 of 91 repositories
are represented exactly once**, and each entry has both a `What it covers` description
and a `Why it is included` rationale. This checks catalog coverage and documentation
structure—not the technical correctness of every recipe or the current health of every
project.

Each entry has two separate claims: a topic summary and a portfolio-fit rationale. These rationales describe the intended role of the tool based on its domain and name; they are not repository-level implementation audits. A later quality pass should verify actual examples, dependency pins, licensing, test evidence, and maintenance state before any cookbook is promoted as production-ready.

## Core geospatial, GIS & scientific analysis

### [cloudcompare-cookbook](https://github.com/ZQM-Computing/cloudcompare-cookbook)

**What it covers:** Point-cloud and 3D-scene inspection workflows; included for QA and analysis of dense survey and reality-capture data.

**Why it is included:** Its distinct value is interactive 3D point-cloud review; it complements PDAL's pipeline-oriented processing by covering visual inspection and quality assurance.

### [earthengine-cookbook](https://github.com/ZQM-Computing/earthengine-cookbook)

**What it covers:** Google Earth Engine geospatial processing patterns; included for scalable satellite, environmental, and time-series analysis.

**Why it is included:** It adds a cloud-hosted compute model to the portfolio, useful when local raster processing is too slow or data volumes make distributed processing preferable.

### [folium-cookbook](https://github.com/ZQM-Computing/folium-cookbook)

**What it covers:** Python-to-Leaflet interactive map patterns; included for lightweight map outputs in notebooks and data applications.

**Why it is included:** It bridges Python analysis and shareable browser maps without requiring a full tile server or custom front-end application.

### [gdal-cookbook](https://github.com/ZQM-Computing/gdal-cookbook)

**What it covers:** GDAL/OGR raster and vector processing recipes; included as foundational interoperability, conversion, reprojection, and automation guidance.

**Why it is included:** It is the foundational format-translation layer: downstream GIS, raster, and data-engineering recipes depend on reliable conversion, coordinate transformation, and inspection.

### [geonetwork-cookbook](https://github.com/ZQM-Computing/geonetwork-cookbook)

**What it covers:** GeoNetwork metadata catalog patterns; included for discoverability, metadata publishing, and spatial-data catalog operations.

**Why it is included:** It covers metadata catalog governance and discovery, a different concern from serving map tiles or feature APIs.

### [geonode-cookbook](https://github.com/ZQM-Computing/geonode-cookbook)

**What it covers:** GeoNode geospatial content management patterns; included for collaborative publishing and management of spatial datasets and maps.

**Why it is included:** It addresses collaborative dataset and map publishing for teams that need a portal, complementing lower-level service configuration in GeoServer and MapServer.

### [geopandas-cookbook](https://github.com/ZQM-Computing/geopandas-cookbook)

**What it covers:** GeoPandas vector-analysis patterns; included for reproducible Python workflows over tabular and vector geospatial data.

**Why it is included:** It gives Python practitioners a repeatable vector-analysis path between file/database ingestion and downstream visualization or modeling.

### [geoparquet-cookbook](https://github.com/ZQM-Computing/geoparquet-cookbook)

**What it covers:** GeoParquet storage and interoperability patterns; included for columnar, analytics-friendly exchange of spatial data.

**Why it is included:** It documents an open columnar exchange format that connects spatial data production to scalable analytical engines and avoids treating GIS data as only database tables.

### [geoserver-cookbook](https://github.com/ZQM-Computing/geoserver-cookbook)

**What it covers:** GeoServer publishing and service configuration patterns; included for operational OGC services and web map/data delivery.

**Why it is included:** It focuses on publishing and administering standards-based geospatial services, which is the service layer between stored data and consuming applications.

### [grass-cookbook](https://github.com/ZQM-Computing/grass-cookbook)

**What it covers:** GRASS GIS analysis patterns; included for raster, terrain, hydrology, and advanced spatial processing workflows.

**Why it is included:** It provides a mature GIS analysis environment for complex raster and environmental modeling that is not covered by web-serving or data-format cookbooks.

### [maplibre-cookbook](https://github.com/ZQM-Computing/maplibre-cookbook)

**What it covers:** MapLibre web-map implementation patterns; included for open mapping front ends and vector-tile visualization.

**Why it is included:** It represents the client-side cartography layer, covering how users interact with rendered spatial information rather than how the data is stored or served.

### [mapproxy-cookbook](https://github.com/ZQM-Computing/mapproxy-cookbook)

**What it covers:** MapProxy caching and proxy patterns; included to improve map-service performance and manage upstream map sources.

**Why it is included:** It covers caching and brokering existing map services, useful when several upstream sources need a stable, performant delivery layer.

### [mapserver-cookbook](https://github.com/ZQM-Computing/mapserver-cookbook)

**What it covers:** MapServer configuration and publishing patterns; included for performant map rendering and OGC service delivery.

**Why it is included:** It offers an alternative OGC publishing and rendering stack to GeoServer, enabling architecture choices based on deployment and performance requirements.

### [metpy-cookbook](https://github.com/ZQM-Computing/metpy-cookbook)

**What it covers:** Meteorological data analysis and visualization patterns; included to cover weather, atmospheric science, and geospatially relevant scientific datasets.

**Why it is included:** It extends the collection into weather and atmospheric science, where units-aware diagnostics and scientific calculations matter alongside mapping.

### [osmnx-cookbook](https://github.com/ZQM-Computing/osmnx-cookbook)

**What it covers:** Street-network retrieval and analysis patterns; included for reproducible urban network, accessibility, and mobility analysis.

**Why it is included:** It connects open street data to graph construction and urban analysis; its emphasis is acquiring and analyzing networks rather than serving routes to clients.

### [osrm-cookbook](https://github.com/ZQM-Computing/osrm-cookbook)

**What it covers:** Open Source Routing Machine deployment and routing patterns; included for route calculation and network-based services.

**Why it is included:** It documents a deployable routing engine for application-facing route calculations, complementing analytical graph tooling such as pgRouting and OSMnx.

### [pdal-cookbook](https://github.com/ZQM-Computing/pdal-cookbook)

**What it covers:** Point Data Abstraction Library pipelines; included for repeatable point-cloud filtering, transformation, and format conversion.

**Why it is included:** It supplies pipeline-based point-cloud ETL for large LiDAR datasets, complementing CloudCompare's visual QA and PostgreSQL point-cloud storage.

### [pelias-cookbook](https://github.com/ZQM-Computing/pelias-cookbook)

**What it covers:** Pelias geocoder patterns; included for building and operating address/place search services.

**Why it is included:** It covers geocoding as a reusable service capability, distinct from map rendering and route calculation.

### [qgis-cookbook](https://github.com/ZQM-Computing/qgis-cookbook)

**What it covers:** QGIS desktop and PyQGIS automation patterns; included for desktop GIS workflows, processing, plugins, and repeatable project operations.

**Why it is included:** It preserves the desktop analyst and PyQGIS automation path, including reproducible project work that may precede or validate server-side publication.

### [rasterio-cookbook](https://github.com/ZQM-Computing/rasterio-cookbook)

**What it covers:** Python raster I/O and processing patterns; included for dependable raster access, windows, masks, transforms, and georeferencing.

**Why it is included:** It is the Python-native raster processing layer, useful for code-driven workflows where explicit transforms, windows, masks, and nodata handling must be tested.

### [rio-cogeo-cookbook](https://github.com/ZQM-Computing/rio-cogeo-cookbook)

**What it covers:** Cloud Optimized GeoTIFF creation and validation patterns; included for efficient remote raster access and distribution.

**Why it is included:** It focuses on creating and validating COGs from raster workflows; the separate COG cookbook can cover consumption and broader usage patterns.

### [saga-cookbook](https://github.com/ZQM-Computing/saga-cookbook)

**What it covers:** SAGA GIS terrain and geoscientific processing patterns; included for specialized raster, geomorphology, and environmental analysis.

**Why it is included:** It adds a specialized geoscience algorithm suite, broadening the terrain-analysis choices beyond GRASS GIS and WhiteboxTools.

### [sentinelsat-cookbook](https://github.com/ZQM-Computing/sentinelsat-cookbook)

**What it covers:** Sentinel satellite data discovery and download patterns; included for repeatable access to Earth-observation inputs.

**Why it is included:** It covers acquisition of satellite source data, an upstream step that feeds raster processing, cataloging, and analysis recipes.

### [webodm-cookbook](https://github.com/ZQM-Computing/webodm-cookbook)

**What it covers:** WebODM photogrammetry workflows; included for turning drone imagery into orthomosaics, point clouds, and surface models.

**Why it is included:** It covers the photogrammetry workflow from drone images to geospatial products, adding a data-generation path not covered by satellite or LiDAR tools.

### [whitebox-cookbook](https://github.com/ZQM-Computing/whitebox-cookbook)

**What it covers:** WhiteboxTools geospatial analysis recipes; included for terrain, hydrology, and geoscience processing.

**Why it is included:** It provides scriptable terrain and hydrology tools suitable for repeatable geoprocessing, complementing desktop-first and server-first GIS stacks.

## Spatial databases, formats & discovery

### [cog-cookbook](https://github.com/ZQM-Computing/cog-cookbook)

**What it covers:** Cloud Optimized GeoTIFF usage patterns; included for practical cloud-native raster delivery, access, and validation.

**Why it is included:** It covers the COG delivery pattern as a whole—why it is useful, how to validate it, and how clients access it—while rio-cogeo concentrates on a specific toolchain.

### [duckdb-spatial-cookbook](https://github.com/ZQM-Computing/duckdb-spatial-cookbook)

**What it covers:** DuckDB spatial extension patterns; included for fast analytical SQL over spatial files and columnar datasets.

**Why it is included:** It adds lightweight, local analytical SQL without requiring a server database, making it a practical bridge between GeoParquet files and repeatable analysis.

### [geospatial-cookbooks](https://github.com/ZQM-Computing/geospatial-cookbooks)

**What it covers:** Portfolio index for the geospatial cookbook collection; included as the navigation hub for finding related repositories and avoiding isolated discovery.

**Why it is included:** It is the portfolio navigation layer: a user should be able to discover related recipes across repositories without needing prior knowledge of repository names.

### [pgpointcloud-cookbook](https://github.com/ZQM-Computing/pgpointcloud-cookbook)

**What it covers:** PostgreSQL point-cloud storage and query patterns; included for managing and analyzing large lidar datasets in database workflows.

**Why it is included:** It brings dense point clouds into PostgreSQL-centered workflows for cases where database integration and querying matter more than standalone desktop inspection.

### [pgrouting-cookbook](https://github.com/ZQM-Computing/pgrouting-cookbook)

**What it covers:** pgRouting network-analysis recipes; included for shortest paths, routing, and graph analysis directly in PostGIS.

**Why it is included:** It places network analysis beside PostGIS data, useful when routing needs SQL integration and reproducible database-side operations.

### [pgstac-cookbook](https://github.com/ZQM-Computing/pgstac-cookbook)

**What it covers:** pgSTAC catalog implementation patterns; included for STAC API-style discovery backed by PostgreSQL.

**Why it is included:** It documents database-backed spatiotemporal catalog services, connecting STAC concepts to a queryable backend rather than only client-side metadata authoring.

### [postgis-cookbook](https://github.com/ZQM-Computing/postgis-cookbook)

**What it covers:** PostGIS spatial SQL patterns; included as a core reference for indexing, geometry operations, validity, and spatial database design.

**Why it is included:** It is the core spatial system-of-record reference; indexing and query design here support many downstream APIs, analytics, and map-delivery patterns.

### [pystac-cookbook](https://github.com/ZQM-Computing/pystac-cookbook)

**What it covers:** PySTAC catalog and item authoring patterns; included for programmatic creation, validation, and management of STAC metadata.

**Why it is included:** It covers programmatic STAC object creation and manipulation for pipelines that generate metadata, complementing catalog deployment and API operations.

### [stac-cookbook](https://github.com/ZQM-Computing/stac-cookbook)

**What it covers:** SpatioTemporal Asset Catalog concepts and implementation patterns; included to connect Earth-observation assets with consistent searchable metadata.

**Why it is included:** It gives the portfolio a common discovery model for imagery and other spatiotemporal assets, linking data producers with catalog consumers.

### [timescaledb-cookbook](https://github.com/ZQM-Computing/timescaledb-cookbook)

**What it covers:** Time-series database patterns; included for combining temporal telemetry or observations with spatially indexed workflows where applicable.

**Why it is included:** It covers time-oriented telemetry and observation workloads, which need retention, aggregation, and temporal query patterns beyond conventional feature storage.

### [titiler-cookbook](https://github.com/ZQM-Computing/titiler-cookbook)

**What it covers:** Dynamic raster tile service patterns; included for serving cloud-hosted raster assets as web maps and analysis-ready tiles.

**Why it is included:** It turns cloud-hosted raster assets into on-demand tiles, connecting object storage and COG production to interactive map clients.

## Data engineering, pipelines & analytics

### [airbyte-cookbook](https://github.com/ZQM-Computing/airbyte-cookbook)

**What it covers:** Connector-based data ingestion patterns; included for repeatable extraction and loading of external data into geospatial pipelines.

**Why it is included:** It standardizes connector-based ingestion when sources and destinations change independently, reducing bespoke extraction code in recurring pipelines.

### [airflow-cookbook](https://github.com/ZQM-Computing/airflow-cookbook)

**What it covers:** Airflow DAG orchestration patterns; included for scheduling, dependency management, retries, and observability of data workflows.

**Why it is included:** It covers dependency-aware batch orchestration for multi-step pipelines, including scheduling and failure recovery beyond a single script or connector.

### [datahub-cookbook](https://github.com/ZQM-Computing/datahub-cookbook)

**What it covers:** DataHub metadata catalog and lineage patterns; included for dataset ownership, discoverability, and governance.

**Why it is included:** It adds dataset ownership, lineage, and metadata governance so that collected data can be traced and understood after it enters the platform.

### [dbt-cookbook](https://github.com/ZQM-Computing/dbt-cookbook)

**What it covers:** dbt transformation and testing patterns; included for version-controlled, tested SQL models and analytics transformations.

**Why it is included:** It provides a disciplined SQL transformation layer with tests and documentation, helping keep analytical models reviewable rather than embedded in ad hoc queries.

### [dlt-cookbook](https://github.com/ZQM-Computing/dlt-cookbook)

**What it covers:** Python-native data loading patterns; included for schema-aware ingestion and repeatable pipeline construction.

**Why it is included:** It provides Python-centric ingestion for teams that want schema-aware pipelines in code, complementing connector-managed and ELT-platform approaches.

### [meltano-cookbook](https://github.com/ZQM-Computing/meltano-cookbook)

**What it covers:** Meltano ELT project patterns; included for managing extractor/loader integrations and reproducible data operations.

**Why it is included:** It documents a configurable ELT project model for teams that need versioned connectors and repeatable extraction/loading configuration.

### [nifi-cookbook](https://github.com/ZQM-Computing/nifi-cookbook)

**What it covers:** Apache NiFi flow design patterns; included for visual ingestion, routing, transformation, and provenance-aware data movement.

**Why it is included:** It addresses visual, provenance-aware data movement across systems, especially where operators need to inspect and manage flows.

### [nodered-cookbook](https://github.com/ZQM-Computing/nodered-cookbook)

**What it covers:** Node-RED integration and flow patterns; included for event-driven glue between APIs, sensors, and operational systems.

**Why it is included:** It covers lightweight event-driven integration and device/API glue, useful at the edge where a full data-orchestration platform may be excessive.

### [plotly-cookbook](https://github.com/ZQM-Computing/plotly-cookbook)

**What it covers:** Interactive analytical visualization patterns; included for communicating data and geospatial analysis through charts and dashboards.

**Why it is included:** It makes analysis outputs explorable through interactive charts, filling the reporting layer between computation and a user-facing dashboard.

### [prefect-cookbook](https://github.com/ZQM-Computing/prefect-cookbook)

**What it covers:** Prefect workflow orchestration patterns; included for observable, retryable Python data pipelines.

**Why it is included:** It covers Python-native orchestration and runtime visibility for pipelines that need retries and scheduling without expressing every step as a DAG in Airflow.

### [redpanda-cookbook](https://github.com/ZQM-Computing/redpanda-cookbook)

**What it covers:** Kafka-compatible streaming patterns; included for event pipelines and near-real-time data integration.

**Why it is included:** It adds event-streaming patterns for continuously arriving data, complementing scheduled batch ingestion and transformation systems.

### [streamlit-cookbook](https://github.com/ZQM-Computing/streamlit-cookbook)

**What it covers:** Streamlit data-app patterns; included for turning analysis and geospatial tools into lightweight interactive interfaces.

**Why it is included:** It provides a quick path from Python analysis to an interactive internal tool, reducing the gap between a notebook and a maintained application.

### [superset-cookbook](https://github.com/ZQM-Computing/superset-cookbook)

**What it covers:** Apache Superset dashboard and semantic-layer patterns; included for operational reporting and exploratory analytics.

**Why it is included:** It provides shared SQL-driven dashboards and exploration for operational and analytical audiences, complementing code-centric visualization.

## Visualization, apps & mapping

### [h3-cookbook](https://github.com/ZQM-Computing/h3-cookbook)

**What it covers:** Hierarchical hexagonal indexing patterns; included for spatial aggregation, indexing, and multi-resolution analysis.

**Why it is included:** It supplies a common hierarchical spatial index for aggregation and cross-scale summaries, enabling comparable spatial rollups across data sources.

### [keplergl-cookbook](https://github.com/ZQM-Computing/keplergl-cookbook)

**What it covers:** Kepler.gl large-scale geospatial visualization patterns; included for exploratory visual analysis of point, path, and polygon datasets.

**Why it is included:** It focuses on exploratory visual inspection of large geospatial datasets, useful for analyst discovery before building a production map interface.

### [martin-cookbook](https://github.com/ZQM-Computing/martin-cookbook)

**What it covers:** Martin vector-tile server patterns; included for serving database-backed vector tiles to web mapping clients.

**Why it is included:** It documents vector-tile delivery from data sources, complementing MapLibre's browser rendering by covering the server side of the tile contract.

## Infrastructure, observability & operations

### [authelia-cookbook](https://github.com/ZQM-Computing/authelia-cookbook)

**What it covers:** Authelia identity and access gateway patterns; included for documenting authentication boundaries around self-hosted services.

**Why it is included:** It documents identity boundaries for self-hosted tools; this is important because internal dashboards and APIs need controlled access, not just network reachability.

### [caddy-cookbook](https://github.com/ZQM-Computing/caddy-cookbook)

**What it covers:** Caddy web server and reverse-proxy patterns; included for TLS termination, routing, and service exposure.

**Why it is included:** It covers ingress, TLS, and reverse-proxy configuration as reusable deployment infrastructure for services across the portfolio.

### [elasticsearch-cookbook](https://github.com/ZQM-Computing/elasticsearch-cookbook)

**What it covers:** Elasticsearch indexing and search patterns; included for text/search workloads and operational log or metadata discovery.

**Why it is included:** It adds full-text and document-oriented search for metadata, logs, and records that do not fit naturally into spatial SQL alone.

### [grafana-cookbook](https://github.com/ZQM-Computing/grafana-cookbook)

**What it covers:** Grafana dashboards and alerting patterns; included for operational visibility across services and data pipelines.

**Why it is included:** It provides operator-facing dashboards and alerting, translating service and pipeline telemetry into actionable operational visibility.

### [minio-cookbook](https://github.com/ZQM-Computing/minio-cookbook)

**What it covers:** S3-compatible object-storage patterns; included for managing raster, vector, imagery, and other data artifacts.

**Why it is included:** It covers S3-compatible object storage as a shared substrate for imagery, tiles, exports, and backup artifacts.

### [mosquitto-cookbook](https://github.com/ZQM-Computing/mosquitto-cookbook)

**What it covers:** MQTT broker patterns; included for lightweight telemetry and event collection from sensors or edge systems.

**Why it is included:** It adds a lightweight message-broker pattern for sensor and edge telemetry, extending the stack beyond pull-based APIs and batch files.

### [ollama-fleet-cookbook](https://github.com/ZQM-Computing/ollama-fleet-cookbook)

**What it covers:** Ollama model-serving and fleet operations patterns; included for local inference deployment, lifecycle management, and repeatable AI operations.

**Why it is included:** It covers the operations of locally hosted model endpoints and model lifecycle, keeping AI serving in the same self-hostable engineering portfolio.

### [portainer-cookbook](https://github.com/ZQM-Computing/portainer-cookbook)

**What it covers:** Container management patterns; included for operational administration of containerized services.

**Why it is included:** It provides a practical administration surface for containerized services, useful for routine operations without replacing version-controlled deployment definitions.

### [prometheus-cookbook](https://github.com/ZQM-Computing/prometheus-cookbook)

**What it covers:** Metrics collection and alerting patterns; included for measurable service health and capacity monitoring.

**Why it is included:** It establishes metrics collection and alert rules so service reliability can be measured rather than inferred from successful builds alone.

### [uptime-kuma-cookbook](https://github.com/ZQM-Computing/uptime-kuma-cookbook)

**What it covers:** Service availability monitoring patterns; included for simple endpoint checks and outage visibility.

**Why it is included:** It covers externally observable availability checks, complementing deeper metrics by showing whether user-facing endpoints respond.

### [vaultwarden-cookbook](https://github.com/ZQM-Computing/vaultwarden-cookbook)

**What it covers:** Vaultwarden self-hosted password-manager operations; included for documenting secure deployment and maintenance considerations.

**Why it is included:** It covers operational practices for a sensitive self-hosted credential service; its inclusion requires particular care around backups, access control, and updates.

## Documents, metadata & web archives

### [exiftool-cookbook](https://github.com/ZQM-Computing/exiftool-cookbook)

**What it covers:** EXIF and file-metadata inspection patterns; included for asset provenance, metadata QA, and forensic-style metadata extraction.

**Why it is included:** It adds metadata inspection at the file level, helping establish asset provenance and detect metadata issues before ingestion.

### [pdfplumber-cookbook](https://github.com/ZQM-Computing/pdfplumber-cookbook)

**What it covers:** PDF text and table extraction patterns; included for converting document-based reports into structured data.

**Why it is included:** It covers extraction of text and tables from report PDFs, an important bridge from document-based public records to structured analysis.

### [pymupdf-cookbook](https://github.com/ZQM-Computing/pymupdf-cookbook)

**What it covers:** PyMuPDF document parsing and rendering patterns; included for PDF text, page, image, and layout processing.

**Why it is included:** It covers deeper PDF page, image, layout, and rendering operations; it complements table-focused extraction with general document processing.

### [waybackpy-cookbook](https://github.com/ZQM-Computing/waybackpy-cookbook)

**What it covers:** Internet Archive Wayback Machine access patterns; included for historical webpage retrieval and source-change research.

**Why it is included:** It supports historical source checks and change research, helping analysts distinguish current pages from older versions and document provenance.

## Public-source collection, security & OSINT

### [amass-cookbook](https://github.com/ZQM-Computing/amass-cookbook)

**What it covers:** Attack-surface and DNS asset enumeration patterns; included for authorized external asset inventory and security assessment workflows.

**Why it is included:** It covers domain and attack-surface inventory for authorized assessments, adding a structured discovery capability to the defensive security collection.

### [blackbird-cookbook](https://github.com/ZQM-Computing/blackbird-cookbook)

**What it covers:** Public-account discovery patterns; included for lawful, public-source research with clear scope and privacy boundaries.

**Why it is included:** It documents public username search as a narrow OSINT technique, with an explicit need to distinguish a possible match from verified identity.

### [censys-cookbook](https://github.com/ZQM-Computing/censys-cookbook)

**What it covers:** Internet-exposed asset search patterns; included for authorized infrastructure discovery and exposure review.

**Why it is included:** It supports authorized asset-exposure research using indexed internet observations, complementing owner-controlled inventory with an external perspective.

### [certstream-cookbook](https://github.com/ZQM-Computing/certstream-cookbook)

**What it covers:** Certificate-transparency stream processing patterns; included for observing newly issued certificates and domain-related signals.

**Why it is included:** It covers event-driven certificate-transparency monitoring, enabling early awareness of certificate/domain signals without active probing.

### [dnsrecon-cookbook](https://github.com/ZQM-Computing/dnsrecon-cookbook)

**What it covers:** DNS enumeration and record-audit patterns; included for defensive DNS inventory and configuration review.

**Why it is included:** It adds DNS record and configuration enumeration for defensive inventory and troubleshooting, distinct from broader multi-source OSINT frameworks.

### [ghunt-cookbook](https://github.com/ZQM-Computing/ghunt-cookbook)

**What it covers:** Publicly exposed Google-account footprint research patterns; included for scoped OSINT learning with explicit privacy safeguards.

**Why it is included:** It covers a specialized public-source account-footprint tool; the rationale is research literacy and privacy-aware assessment, not intrusive personal profiling.

### [h8mail-cookbook](https://github.com/ZQM-Computing/h8mail-cookbook)

**What it covers:** Email exposure-checking patterns; included for defensive breach-exposure assessment and account-risk awareness.

**Why it is included:** It covers defensive email exposure checks so users can assess account risk; handling results requires minimizing retention of personal data.

### [holehe-cookbook](https://github.com/ZQM-Computing/holehe-cookbook)

**What it covers:** Public account-presence checking patterns; included for authorized account-footprint audits and privacy assessments.

**Why it is included:** It documents account-presence signals as weak evidence, helping audits explain uncertainty instead of treating service responses as proof of identity.

### [instaloader-cookbook](https://github.com/ZQM-Computing/instaloader-cookbook)

**What it covers:** Public Instagram content retrieval patterns; included for scoped public-source collection while respecting platform terms and privacy.

**Why it is included:** It covers retrieval of accessible Instagram content for permitted research and archiving, with platform rules and privacy limits as first-class constraints.

### [intelowl-cookbook](https://github.com/ZQM-Computing/intelowl-cookbook)

**What it covers:** Threat-intelligence enrichment platform patterns; included for repeatable enrichment of indicators during defensive investigations.

**Why it is included:** It adds repeatable multi-source indicator enrichment, helping defensive investigations correlate context instead of relying on a single lookup.

### [ipwhois-cookbook](https://github.com/ZQM-Computing/ipwhois-cookbook)

**What it covers:** IP registration and network metadata lookup patterns; included for basic network attribution and infrastructure context.

**Why it is included:** It provides registration and network allocation context for IP addresses, useful as a clue for triage but not as proof of a user's identity or precise location.

### [maigret-cookbook](https://github.com/ZQM-Computing/maigret-cookbook)

**What it covers:** Username footprint research patterns; included for authorized public-source identity exposure audits.

**Why it is included:** It covers cross-site username-footprint discovery, complementing narrower account checks while requiring careful false-positive handling.

### [misp-cookbook](https://github.com/ZQM-Computing/misp-cookbook)

**What it covers:** MISP threat-intelligence sharing patterns; included for structured indicators, enrichment, and defensive collaboration.

**Why it is included:** It provides structured threat-intelligence exchange and collaboration, turning isolated indicators into shareable defensive context.

### [nuclei-cookbook](https://github.com/ZQM-Computing/nuclei-cookbook)

**What it covers:** Template-driven vulnerability checking patterns; included for authorized security validation and repeatable defensive scanning.

**Why it is included:** It covers template-based validation against owned or explicitly authorized systems, with scope controls necessary to avoid unintended active testing.

### [phoneinfoga-cookbook](https://github.com/ZQM-Computing/phoneinfoga-cookbook)

**What it covers:** Phone-number OSINT research patterns; included for documenting safe, lawful public-source checks and privacy risks.

**Why it is included:** It documents phone-number-related public-source checks while highlighting that lookup signals can be incomplete and are sensitive personal data.

### [reconng-cookbook](https://github.com/ZQM-Computing/reconng-cookbook)

**What it covers:** Recon-ng framework workflows; included for structured, scope-controlled OSINT collection and repeatable investigations.

**Why it is included:** It gives investigators a modular workflow for scoped public-source collection, complementing focused single-purpose tools with repeatable case organization.

### [scrapy-cookbook](https://github.com/ZQM-Computing/scrapy-cookbook)

**What it covers:** Scrapy crawler and spider patterns; included for maintainable, rate-conscious web extraction and data collection.

**Why it is included:** It covers maintainable spider development for permitted data collection, including politeness, rate limits, provenance, and resilient parsing.

### [sherlock-cookbook](https://github.com/ZQM-Computing/sherlock-cookbook)

**What it covers:** Username search across public services; included for authorized digital-footprint audits and exposure awareness.

**Why it is included:** It documents public username searches as a lead-generation method, emphasizing that same-name hits are not identity verification.

### [shodan-cookbook](https://github.com/ZQM-Computing/shodan-cookbook)

**What it covers:** Shodan search and API patterns; included for defensive visibility into internet-facing services and assets.

**Why it is included:** It supports defensive search for exposed services and assets, helping owners understand public exposure without substituting for authorized validation.

### [snscrape-cookbook](https://github.com/ZQM-Computing/snscrape-cookbook)

**What it covers:** Public social-media data collection patterns; included for research-oriented collection where permitted by source terms and applicable law.

**Why it is included:** It covers source-specific public-content collection for permitted research, with data minimization and source terms constraining what should be collected.

### [spiderfoot-cookbook](https://github.com/ZQM-Computing/spiderfoot-cookbook)

**What it covers:** Automated OSINT correlation patterns; included for defensive asset discovery and investigation triage.

**Why it is included:** It adds broad OSINT automation and correlation for defensive triage, useful when analysts need a repeatable view across multiple public sources.

### [subfinder-cookbook](https://github.com/ZQM-Computing/subfinder-cookbook)

**What it covers:** Subdomain discovery patterns; included for authorized domain inventory and external attack-surface management.

**Why it is included:** It covers passive subdomain discovery as a low-impact input to authorized asset inventories and exposure-management workflows.

### [sublist3r-cookbook](https://github.com/ZQM-Computing/sublist3r-cookbook)

**What it covers:** Subdomain enumeration patterns; included as an additional reference for scoped domain discovery and cross-checking.

**Why it is included:** It provides an additional subdomain enumeration reference for comparing discovery methods and reconciling results within an approved scope.

### [theharvester-cookbook](https://github.com/ZQM-Computing/theharvester-cookbook)

**What it covers:** Public-source email, domain, and host collection patterns; included for authorized exposure assessment and OSINT fundamentals.

**Why it is included:** It covers public-source collection of domain, host, and contact signals for defensive exposure reviews, with relevance and confidence recorded rather than assumed.
