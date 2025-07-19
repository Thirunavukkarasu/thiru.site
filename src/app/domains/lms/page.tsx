import Link from "next/link";

export default function LMS() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <div className="mb-6">
        <Link href="/domains" className="text-blue-600 hover:underline">
          ← Back to domains
        </Link>
      </div>

      <h1>🏦 Loan Management Systems (LMS)</h1>

      <p className="text-lg">
        Built comprehensive loan aggregator management systems from scratch,
        handling the entire loan lifecycle from application to disbursement and
        collection. These systems process thousands of loan applications daily
        while maintaining strict regulatory compliance.
      </p>

      <div className="grid gap-8 mt-8">
        <section>
          <h2>System Architecture</h2>
          <p>
            Designed scalable microservices architecture to handle high-volume
            loan processing with real-time decisioning capabilities and robust
            audit trails.
          </p>
          <h3>Core Services:</h3>
          <ul>
            <li>
              <strong>Application Service</strong> - Handles loan applications
              and initial validation
            </li>
            <li>
              <strong>Underwriting Engine</strong> - Automated risk assessment
              and decisioning
            </li>
            <li>
              <strong>Document Service</strong> - Secure document storage and
              verification
            </li>
            <li>
              <strong>Payment Service</strong> - EMI calculations and payment
              processing
            </li>
            <li>
              <strong>Collection Service</strong> - Automated collection and
              recovery
            </li>
            <li>
              <strong>Reporting Service</strong> - Regulatory and business
              reporting
            </li>
          </ul>
        </section>

        <section>
          <h2>Key Features Built</h2>

          <h3>📋 Loan Application Processing</h3>
          <ul>
            <li>
              <strong>Multi-channel Application Capture</strong> - Web, mobile,
              and API-based applications
            </li>
            <li>
              <strong>Real-time Validation</strong> - Instant field validation
              and business rule checking
            </li>
            <li>
              <strong>Document Upload & Verification</strong> - OCR-based
              document processing
            </li>
            <li>
              <strong>Application Scoring</strong> - Initial credit scoring and
              risk assessment
            </li>
            <li>
              <strong>Status Tracking</strong> - Real-time application status
              updates
            </li>
          </ul>

          <h3>🎯 Automated Underwriting</h3>
          <ul>
            <li>
              <strong>Risk Assessment Engine</strong> - ML-based credit risk
              evaluation
            </li>
            <li>
              <strong>Policy Engine</strong> - Configurable business rules and
              policies
            </li>
            <li>
              <strong>Decision Matrix</strong> - Automated approval/rejection
              decisions
            </li>
            <li>
              <strong>Manual Review Queue</strong> - Cases requiring human
              intervention
            </li>
            <li>
              <strong>Decision Audit Trail</strong> - Complete decision history
              and reasoning
            </li>
          </ul>

          <h3>📄 Document Management</h3>
          <ul>
            <li>
              <strong>Secure Storage</strong> - Encrypted document storage with
              access controls
            </li>
            <li>
              <strong>Document Verification</strong> - Automated verification of
              income, identity, and address
            </li>
            <li>
              <strong>Digital Signatures</strong> - Legally compliant
              e-signature integration
            </li>
            <li>
              <strong>Document Templates</strong> - Dynamic document generation
            </li>
            <li>
              <strong>Compliance Tracking</strong> - Regulatory document
              retention policies
            </li>
          </ul>

          <h3>💰 Payment Processing</h3>
          <ul>
            <li>
              <strong>EMI Calculator</strong> - Dynamic EMI calculation with
              different schemes
            </li>
            <li>
              <strong>Payment Scheduling</strong> - Automated payment scheduling
              and reminders
            </li>
            <li>
              <strong>Multiple Payment Methods</strong> - NACH, UPI, card, and
              bank transfers
            </li>
            <li>
              <strong>Payment Reconciliation</strong> - Automated reconciliation
              with bank statements
            </li>
            <li>
              <strong>Late Fee Calculation</strong> - Automated late fee and
              penalty processing
            </li>
          </ul>

          <h3>🛡️ Risk Management</h3>
          <ul>
            <li>
              <strong>Fraud Detection</strong> - ML-based fraud detection
              algorithms
            </li>
            <li>
              <strong>Portfolio Monitoring</strong> - Real-time portfolio health
              monitoring
            </li>
            <li>
              <strong>Early Warning System</strong> - Proactive risk
              identification
            </li>
            <li>
              <strong>Collection Strategies</strong> - Automated collection
              workflows
            </li>
            <li>
              <strong>Regulatory Reporting</strong> - Automated regulatory
              compliance reports
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Challenges Solved</h2>

          <h3>🔒 Security & Compliance</h3>
          <ul>
            <li>
              <strong>Data Encryption</strong> - End-to-end encryption for
              sensitive financial data
            </li>
            <li>
              <strong>Access Controls</strong> - Role-based access with audit
              logging
            </li>
            <li>
              <strong>Regulatory Compliance</strong> - RBI, NBFC, and banking
              regulations
            </li>
            <li>
              <strong>Data Privacy</strong> - GDPR and local privacy law
              compliance
            </li>
            <li>
              <strong>Audit Trails</strong> - Complete audit trails for
              regulatory requirements
            </li>
          </ul>

          <h3>⚡ Performance & Scalability</h3>
          <ul>
            <li>
              <strong>High Volume Processing</strong> - Handle 10,000+
              applications daily
            </li>
            <li>
              <strong>Real-time Decisioning</strong> - Sub-second loan decision
              responses
            </li>
            <li>
              <strong>Database Optimization</strong> - Optimized queries for
              large datasets
            </li>
            <li>
              <strong>Caching Strategy</strong> - Multi-layer caching for
              performance
            </li>
            <li>
              <strong>Load Balancing</strong> - Horizontal scaling across
              multiple instances
            </li>
          </ul>

          <h3>🔗 Integration Complexity</h3>
          <ul>
            <li>
              <strong>Banking APIs</strong> - Integration with multiple banking
              systems
            </li>
            <li>
              <strong>Credit Bureaus</strong> - Real-time credit score fetching
            </li>
            <li>
              <strong>Payment Gateways</strong> - Multiple payment provider
              integrations
            </li>
            <li>
              <strong>Document Services</strong> - OCR and verification service
              integration
            </li>
            <li>
              <strong>Communication APIs</strong> - SMS, email, and push
              notification services
            </li>
          </ul>
        </section>

        <section>
          <h2>Business Impact</h2>
          <ul>
            <li>
              <strong>Reduced Processing Time</strong> - 80% reduction in loan
              processing time
            </li>
            <li>
              <strong>Improved Approval Rates</strong> - 25% increase in
              approval rates through better risk assessment
            </li>
            <li>
              <strong>Cost Reduction</strong> - 60% reduction in operational
              costs
            </li>
            <li>
              <strong>Compliance Automation</strong> - 100% automated regulatory
              reporting
            </li>
            <li>
              <strong>Customer Experience</strong> - Real-time status updates
              and faster disbursals
            </li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4>Backend</h4>
              <ul>
                <li>Java Spring Boot / Node.js</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Redis for caching</li>
                <li>Apache Kafka for messaging</li>
                <li>Elasticsearch for search</li>
              </ul>
            </div>
            <div>
              <h4>Frontend & Mobile</h4>
              <ul>
                <li>React.js / Angular</li>
                <li>React Native for mobile</li>
                <li>Progressive Web Apps</li>
                <li>Material-UI / Ant Design</li>
              </ul>
            </div>
            <div>
              <h4>Infrastructure</h4>
              <ul>
                <li>AWS / Azure cloud</li>
                <li>Docker containers</li>
                <li>Kubernetes orchestration</li>
                <li>CI/CD pipelines</li>
                <li>Monitoring & alerting</li>
              </ul>
            </div>
            <div>
              <h4>AI/ML</h4>
              <ul>
                <li>Python for ML models</li>
                <li>TensorFlow / PyTorch</li>
                <li>Credit scoring algorithms</li>
                <li>Fraud detection models</li>
                <li>Document OCR processing</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
