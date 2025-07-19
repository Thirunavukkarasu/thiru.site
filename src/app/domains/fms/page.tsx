import Link from "next/link";

export default function FMS() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <div className="mb-6">
        <Link href="/domains" className="text-blue-600 hover:underline">
          ← Back to domains
        </Link>
      </div>

      <h1>💰 Finance Management Systems (FMS)</h1>

      <p className="text-lg">
        Built financial management systems that handle accounting, budgeting,
        and financial reporting for complex business operations. These systems
        ensure compliance with accounting standards while providing real-time
        financial insights and automated reporting.
      </p>

      <div className="grid gap-8 mt-8">
        <section>
          <h2>System Architecture</h2>
          <p>
            Designed secure, compliant financial systems with real-time
            processing capabilities, multi-entity support, and comprehensive
            audit trails for regulatory compliance.
          </p>
          <h3>Core Services:</h3>
          <ul>
            <li>
              <strong>General Ledger</strong> - Chart of accounts and journal
              entry management
            </li>
            <li>
              <strong>Accounts Payable</strong> - Vendor management and payment
              processing
            </li>
            <li>
              <strong>Accounts Receivable</strong> - Customer invoicing and
              collection
            </li>
            <li>
              <strong>Budgeting & Forecasting</strong> - Financial planning and
              variance analysis
            </li>
            <li>
              <strong>Financial Reporting</strong> - Automated report generation
            </li>
            <li>
              <strong>Compliance & Audit</strong> - Regulatory reporting and
              audit trails
            </li>
          </ul>
        </section>

        <section>
          <h2>Key Features Built</h2>

          <h3>📊 General Ledger</h3>
          <ul>
            <li>
              <strong>Chart of Accounts</strong> - Flexible account structure
              management
            </li>
            <li>
              <strong>Journal Entries</strong> - Automated and manual journal
              entry processing
            </li>
            <li>
              <strong>Period Management</strong> - Fiscal period and year-end
              processing
            </li>
            <li>
              <strong>Multi-Currency</strong> - Multi-currency transaction
              support
            </li>
            <li>
              <strong>Consolidation</strong> - Multi-entity financial
              consolidation
            </li>
          </ul>

          <h3>💳 Accounts Payable</h3>
          <ul>
            <li>
              <strong>Vendor Management</strong> - Vendor master data and
              relationship management
            </li>
            <li>
              <strong>Invoice Processing</strong> - Automated invoice capture
              and approval
            </li>
            <li>
              <strong>Payment Processing</strong> - Automated payment scheduling
              and execution
            </li>
            <li>
              <strong>Expense Management</strong> - Employee expense tracking
              and reimbursement
            </li>
            <li>
              <strong>Purchase Order Integration</strong> - PO-based invoice
              matching
            </li>
          </ul>

          <h3>📈 Accounts Receivable</h3>
          <ul>
            <li>
              <strong>Customer Management</strong> - Customer master data and
              credit management
            </li>
            <li>
              <strong>Invoice Generation</strong> - Automated invoice creation
              and delivery
            </li>
            <li>
              <strong>Payment Processing</strong> - Multiple payment method
              support
            </li>
            <li>
              <strong>Collection Management</strong> - Automated collection
              workflows
            </li>
            <li>
              <strong>Credit Management</strong> - Credit limit and risk
              assessment
            </li>
          </ul>

          <h3>📋 Budgeting & Forecasting</h3>
          <ul>
            <li>
              <strong>Budget Planning</strong> - Multi-dimensional budget
              planning
            </li>
            <li>
              <strong>Forecasting Models</strong> - AI-powered financial
              forecasting
            </li>
            <li>
              <strong>Variance Analysis</strong> - Budget vs. actual analysis
            </li>
            <li>
              <strong>Scenario Planning</strong> - What-if scenario modeling
            </li>
            <li>
              <strong>Rolling Forecasts</strong> - Continuous forecast updates
            </li>
          </ul>

          <h3>📄 Financial Reporting</h3>
          <ul>
            <li>
              <strong>P&L Statements</strong> - Automated profit and loss
              reporting
            </li>
            <li>
              <strong>Balance Sheets</strong> - Real-time balance sheet
              generation
            </li>
            <li>
              <strong>Cash Flow Statements</strong> - Operating, investing, and
              financing cash flows
            </li>
            <li>
              <strong>Management Reports</strong> - Custom management dashboards
            </li>
            <li>
              <strong>Regulatory Reports</strong> - Automated regulatory
              compliance reporting
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Challenges Solved</h2>

          <h3>🔒 Security & Compliance</h3>
          <ul>
            <li>
              <strong>Data Encryption</strong> - End-to-end encryption for
              financial data
            </li>
            <li>
              <strong>Access Controls</strong> - Role-based access with
              segregation of duties
            </li>
            <li>
              <strong>Audit Trails</strong> - Complete audit trails for all
              transactions
            </li>
            <li>
              <strong>Regulatory Compliance</strong> - GAAP, IFRS, and local
              accounting standards
            </li>
            <li>
              <strong>Data Retention</strong> - Automated data retention and
              archival
            </li>
          </ul>

          <h3>⚡ Performance & Scalability</h3>
          <ul>
            <li>
              <strong>High Volume Processing</strong> - Handle millions of
              transactions
            </li>
            <li>
              <strong>Real-Time Processing</strong> - Real-time financial data
              updates
            </li>
            <li>
              <strong>Database Optimization</strong> - Optimized for financial
              queries
            </li>
            <li>
              <strong>Multi-Tenant Architecture</strong> - Support for multiple
              organizations
            </li>
            <li>
              <strong>Disaster Recovery</strong> - Robust backup and recovery
              systems
            </li>
          </ul>

          <h3>🔗 Integration Complexity</h3>
          <ul>
            <li>
              <strong>Banking Integration</strong> - Real-time bank account
              reconciliation
            </li>
            <li>
              <strong>ERP Integration</strong> - Integration with enterprise
              resource planning
            </li>
            <li>
              <strong>Payment Gateways</strong> - Multiple payment provider
              integration
            </li>
            <li>
              <strong>Tax Systems</strong> - Automated tax calculation and
              filing
            </li>
            <li>
              <strong>Regulatory Systems</strong> - Integration with regulatory
              reporting systems
            </li>
          </ul>
        </section>

        <section>
          <h2>Business Impact</h2>
          <ul>
            <li>
              <strong>Processing Efficiency</strong> - 80% reduction in manual
              processing time
            </li>
            <li>
              <strong>Accuracy Improvement</strong> - 99.9% accuracy in
              financial reporting
            </li>
            <li>
              <strong>Compliance Automation</strong> - 100% automated regulatory
              reporting
            </li>
            <li>
              <strong>Cost Reduction</strong> - 60% reduction in accounting
              operational costs
            </li>
            <li>
              <strong>Real-Time Insights</strong> - Real-time financial
              visibility for decision making
            </li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4>Backend</h4>
              <ul>
                <li>Java Spring Boot / .NET</li>
                <li>PostgreSQL / SQL Server</li>
                <li>Redis for caching</li>
                <li>Apache Kafka for messaging</li>
                <li>Elasticsearch for search</li>
              </ul>
            </div>
            <div>
              <h4>Frontend</h4>
              <ul>
                <li>React.js / Angular</li>
                <li>TypeScript</li>
                <li>Financial dashboards</li>
                <li>Progressive Web Apps</li>
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
              <h4>Integrations</h4>
              <ul>
                <li>Banking APIs</li>
                <li>Payment gateways</li>
                <li>Tax calculation services</li>
                <li>ERP systems</li>
                <li>Regulatory reporting systems</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
