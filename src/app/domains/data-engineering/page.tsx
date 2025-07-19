import Link from "next/link";

export default function DataEngineering() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <div className="mb-6">
        <Link href="/domains" className="text-blue-600 hover:underline">
          ← Back to domains
        </Link>
      </div>

      <h1>📊 Data Engineering & Headless BI Infrastructure</h1>

      <p className="text-lg">
        Scaled data engineering pipelines and built headless BI infrastructure
        using modern data stack technologies for real-time analytics and
        insights. Created comprehensive data platforms that enable self-service
        analytics and data-driven decision making.
      </p>

      <div className="grid gap-8 mt-8">
        <section>
          <h2>System Architecture</h2>
          <p>
            Built modern data stack architecture using cloud-native technologies
            with ELT approach, real-time processing capabilities, and API-first
            design for headless BI.
          </p>
          <h3>Core Components:</h3>
          <ul>
            <li>
              <strong>Data Ingestion</strong> - Multi-source data collection and
              validation
            </li>
            <li>
              <strong>Data Lake</strong> - Centralized data storage with DLThub
            </li>
            <li>
              <strong>Data Transformation</strong> - SQL-based transformations
              with DBT
            </li>
            <li>
              <strong>Metrics Layer</strong> - Semantic layer with Cube.dev
            </li>
            <li>
              <strong>API Layer</strong> - RESTful APIs for data consumption
            </li>
            <li>
              <strong>Monitoring</strong> - Data quality and pipeline health
              monitoring
            </li>
          </ul>
        </section>

        <section>
          <h2>Key Technologies Used</h2>

          <h3>🔄 ELT Pipeline</h3>
          <ul>
            <li>
              <strong>Fivetran</strong> - Automated data extraction and loading
            </li>
            <li>
              <strong>Airbyte</strong> - Open-source data integration platform
            </li>
            <li>
              <strong>Custom Connectors</strong> - Custom data connectors for
              proprietary systems
            </li>
            <li>
              <strong>Real-time Streaming</strong> - Kafka-based real-time data
              streaming
            </li>
            <li>
              <strong>Batch Processing</strong> - Scheduled batch data
              processing
            </li>
          </ul>

          <h3>🏗️ Data Transformation</h3>
          <ul>
            <li>
              <strong>DBT (Data Build Tool)</strong> - SQL-based data
              transformation
            </li>
            <li>
              <strong>Data Modeling</strong> - Dimensional modeling and data
              marts
            </li>
            <li>
              <strong>Data Quality</strong> - Automated data quality testing
            </li>
            <li>
              <strong>Documentation</strong> - Automated data lineage and
              documentation
            </li>
            <li>
              <strong>Version Control</strong> - Git-based version control for
              data models
            </li>
          </ul>

          <h3>🏞️ Data Lake</h3>
          <ul>
            <li>
              <strong>DLThub</strong> - Data lakehouse architecture
            </li>
            <li>
              <strong>Delta Lake</strong> - ACID transactions on data lakes
            </li>
            <li>
              <strong>Data Governance</strong> - Data catalog and metadata
              management
            </li>
            <li>
              <strong>Data Partitioning</strong> - Optimized data partitioning
              strategies
            </li>
            <li>
              <strong>Data Retention</strong> - Automated data lifecycle
              management
            </li>
          </ul>

          <h3>📊 Metrics Store</h3>
          <ul>
            <li>
              <strong>Cube.dev</strong> - Semantic layer and metrics store
            </li>
            <li>
              <strong>Metric Definitions</strong> - Centralized metric
              definitions
            </li>
            <li>
              <strong>API-First Design</strong> - RESTful APIs for data
              consumption
            </li>
            <li>
              <strong>Caching</strong> - Intelligent caching for performance
            </li>
            <li>
              <strong>Security</strong> - Row-level security and access controls
            </li>
          </ul>
        </section>

        <section>
          <h2>Key Features Built</h2>

          <h3>📥 Data Ingestion</h3>
          <ul>
            <li>
              <strong>Multi-Source Integration</strong> - 50+ data source
              integrations
            </li>
            <li>
              <strong>Real-time Streaming</strong> - Sub-second data latency
            </li>
            <li>
              <strong>Data Validation</strong> - Automated data quality checks
            </li>
            <li>
              <strong>Error Handling</strong> - Robust error handling and retry
              mechanisms
            </li>
            <li>
              <strong>Monitoring</strong> - Real-time pipeline monitoring and
              alerting
            </li>
          </ul>

          <h3>🔄 Data Processing</h3>
          <ul>
            <li>
              <strong>ETL/ELT Pipelines</strong> - Automated data processing
              workflows
            </li>
            <li>
              <strong>Data Transformation</strong> - Complex business logic
              implementation
            </li>
            <li>
              <strong>Data Aggregation</strong> - Multi-level data aggregation
            </li>
            <li>
              <strong>Data Enrichment</strong> - Third-party data enrichment
            </li>
            <li>
              <strong>Data Deduplication</strong> - Automated duplicate
              detection and removal
            </li>
          </ul>

          <h3>📊 Analytics & BI</h3>
          <ul>
            <li>
              <strong>Self-Service Analytics</strong> - User-friendly analytics
              interface
            </li>
            <li>
              <strong>Custom Dashboards</strong> - Interactive dashboards and
              visualizations
            </li>
            <li>
              <strong>Ad-hoc Queries</strong> - SQL-based ad-hoc query
              capabilities
            </li>
            <li>
              <strong>Report Automation</strong> - Automated report generation
              and distribution
            </li>
            <li>
              <strong>Mobile Analytics</strong> - Mobile-optimized analytics
              interface
            </li>
          </ul>

          <h3>🔍 Data Discovery</h3>
          <ul>
            <li>
              <strong>Data Catalog</strong> - Comprehensive data catalog and
              search
            </li>
            <li>
              <strong>Data Lineage</strong> - End-to-end data lineage tracking
            </li>
            <li>
              <strong>Data Profiling</strong> - Automated data profiling and
              statistics
            </li>
            <li>
              <strong>Data Dictionary</strong> - Business glossary and data
              definitions
            </li>
            <li>
              <strong>Data Governance</strong> - Data governance and compliance
              management
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Challenges Solved</h2>

          <h3>⚡ Performance & Scalability</h3>
          <ul>
            <li>
              <strong>High Volume Processing</strong> - Handle terabytes of data
              daily
            </li>
            <li>
              <strong>Real-time Processing</strong> - Sub-second data processing
              latency
            </li>
            <li>
              <strong>Query Optimization</strong> - Optimized query performance
              for complex analytics
            </li>
            <li>
              <strong>Auto-scaling</strong> - Cloud-native auto-scaling based on
              demand
            </li>
            <li>
              <strong>Cost Optimization</strong> - Data processing cost
              optimization
            </li>
          </ul>

          <h3>🔒 Data Security & Privacy</h3>
          <ul>
            <li>
              <strong>Data Encryption</strong> - End-to-end data encryption
            </li>
            <li>
              <strong>Access Controls</strong> - Role-based access controls
            </li>
            <li>
              <strong>Data Masking</strong> - Sensitive data masking and
              anonymization
            </li>
            <li>
              <strong>Compliance</strong> - GDPR, CCPA, and industry compliance
            </li>
            <li>
              <strong>Audit Trails</strong> - Complete data access audit trails
            </li>
          </ul>

          <h3>🔄 Data Quality & Reliability</h3>
          <ul>
            <li>
              <strong>Data Quality Monitoring</strong> - Automated data quality
              checks
            </li>
            <li>
              <strong>Data Lineage</strong> - End-to-end data lineage tracking
            </li>
            <li>
              <strong>Error Handling</strong> - Robust error handling and
              recovery
            </li>
            <li>
              <strong>Data Validation</strong> - Automated data validation rules
            </li>
            <li>
              <strong>Monitoring & Alerting</strong> - Comprehensive monitoring
              and alerting
            </li>
          </ul>
        </section>

        <section>
          <h2>Business Impact</h2>
          <ul>
            <li>
              <strong>Data Processing Speed</strong> - 90% reduction in data
              processing time
            </li>
            <li>
              <strong>Analytics Accessibility</strong> - 10x increase in
              self-service analytics usage
            </li>
            <li>
              <strong>Data Quality</strong> - 99.9% data accuracy and
              reliability
            </li>
            <li>
              <strong>Cost Reduction</strong> - 70% reduction in data
              infrastructure costs
            </li>
            <li>
              <strong>Decision Making</strong> - Real-time insights for faster
              decision making
            </li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4>Data Stack</h4>
              <ul>
                <li>Fivetran / Airbyte</li>
                <li>DBT (Data Build Tool)</li>
                <li>DLThub / Delta Lake</li>
                <li>Cube.dev</li>
                <li>Apache Kafka</li>
              </ul>
            </div>
            <div>
              <h4>Infrastructure</h4>
              <ul>
                <li>AWS / Google Cloud</li>
                <li>Docker containers</li>
                <li>Kubernetes orchestration</li>
                <li>Apache Airflow</li>
                <li>Monitoring with DataDog</li>
              </ul>
            </div>
            <div>
              <h4>Databases</h4>
              <ul>
                <li>PostgreSQL / Snowflake</li>
                <li>MongoDB / Cassandra</li>
                <li>Redis for caching</li>
                <li>Elasticsearch</li>
                <li>ClickHouse</li>
              </ul>
            </div>
            <div>
              <h4>Analytics</h4>
              <ul>
                <li>Tableau / Power BI</li>
                <li>Grafana dashboards</li>
                <li>Jupyter notebooks</li>
                <li>Python / R analytics</li>
                <li>Custom BI applications</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
