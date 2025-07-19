import Link from "next/link";

export default function OMS() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <div className="mb-6">
        <Link href="/domains" className="text-blue-600 hover:underline">
          ← Back to domains
        </Link>
      </div>

      <h1>📦 Order Management Systems (OMS)</h1>

      <p className="text-lg">
        Designed and implemented end-to-end order management systems that handle
        order processing, inventory management, and fulfillment across multiple
        channels. These systems process orders from e-commerce, retail, and B2B
        channels with real-time inventory synchronization.
      </p>

      <div className="grid gap-8 mt-8">
        <section>
          <h2>System Architecture</h2>
          <p>
            Built event-driven microservices architecture to handle high-volume
            order processing with real-time inventory updates and multi-channel
            order orchestration.
          </p>
          <h3>Core Services:</h3>
          <ul>
            <li>
              <strong>Order Service</strong> - Handles order creation,
              validation, and lifecycle management
            </li>
            <li>
              <strong>Inventory Service</strong> - Real-time inventory tracking
              and allocation
            </li>
            <li>
              <strong>Fulfillment Service</strong> - Warehouse and shipping
              coordination
            </li>
            <li>
              <strong>Customer Service</strong> - Order tracking and customer
              communication
            </li>
            <li>
              <strong>Payment Service</strong> - Payment processing and refund
              handling
            </li>
            <li>
              <strong>Analytics Service</strong> - Order analytics and business
              intelligence
            </li>
          </ul>
        </section>

        <section>
          <h2>Key Features Built</h2>

          <h3>🛒 Multi-Channel Order Processing</h3>
          <ul>
            <li>
              <strong>E-commerce Integration</strong> - Shopify, WooCommerce,
              Magento connectors
            </li>
            <li>
              <strong>Marketplace Integration</strong> - Amazon, eBay, Walmart
              marketplace APIs
            </li>
            <li>
              <strong>B2B Portal</strong> - Custom B2B ordering portal with bulk
              ordering
            </li>
            <li>
              <strong>Mobile App Integration</strong> - Native mobile app order
              processing
            </li>
            <li>
              <strong>API-First Design</strong> - RESTful APIs for third-party
              integrations
            </li>
          </ul>

          <h3>📊 Real-Time Inventory Management</h3>
          <ul>
            <li>
              <strong>Multi-Warehouse Support</strong> - Distributed inventory
              across multiple locations
            </li>
            <li>
              <strong>Real-Time Sync</strong> - Sub-second inventory updates
              across all channels
            </li>
            <li>
              <strong>Inventory Allocation</strong> - Smart allocation based on
              location and availability
            </li>
            <li>
              <strong>Safety Stock Management</strong> - Automated reorder point
              calculations
            </li>
            <li>
              <strong>Inventory Forecasting</strong> - ML-based demand
              forecasting
            </li>
          </ul>

          <h3>🚚 Fulfillment & Shipping</h3>
          <ul>
            <li>
              <strong>Warehouse Management</strong> - Picking, packing, and
              shipping workflows
            </li>
            <li>
              <strong>Carrier Integration</strong> - FedEx, UPS, DHL, and local
              carriers
            </li>
            <li>
              <strong>Shipping Optimization</strong> - Best carrier and service
              selection
            </li>
            <li>
              <strong>Tracking Integration</strong> - Real-time shipment
              tracking
            </li>
            <li>
              <strong>Returns Management</strong> - Automated return processing
              and refunds
            </li>
          </ul>

          <h3>💳 Payment Processing</h3>
          <ul>
            <li>
              <strong>Multi-Payment Methods</strong> - Credit cards, digital
              wallets, bank transfers
            </li>
            <li>
              <strong>Payment Gateway Integration</strong> - Stripe, PayPal,
              Square integration
            </li>
            <li>
              <strong>Fraud Detection</strong> - Real-time fraud screening
            </li>
            <li>
              <strong>Refund Processing</strong> - Automated refund workflows
            </li>
            <li>
              <strong>Payment Reconciliation</strong> - Automated payment
              reconciliation
            </li>
          </ul>

          <h3>📈 Order Analytics</h3>
          <ul>
            <li>
              <strong>Real-Time Dashboards</strong> - Live order and inventory
              dashboards
            </li>
            <li>
              <strong>Performance Metrics</strong> - Order fulfillment time,
              accuracy rates
            </li>
            <li>
              <strong>Customer Analytics</strong> - Order patterns and customer
              behavior
            </li>
            <li>
              <strong>Revenue Analytics</strong> - Sales performance and trends
            </li>
            <li>
              <strong>Predictive Analytics</strong> - Demand forecasting and
              inventory optimization
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Challenges Solved</h2>

          <h3>⚡ Performance & Scalability</h3>
          <ul>
            <li>
              <strong>High Volume Processing</strong> - Handle 100,000+ orders
              daily
            </li>
            <li>
              <strong>Real-Time Inventory</strong> - Sub-second inventory
              updates
            </li>
            <li>
              <strong>Database Optimization</strong> - Read replicas and query
              optimization
            </li>
            <li>
              <strong>Caching Strategy</strong> - Multi-layer caching for
              performance
            </li>
            <li>
              <strong>Auto-scaling</strong> - Cloud-native auto-scaling based on
              load
            </li>
          </ul>

          <h3>🔄 Data Consistency</h3>
          <ul>
            <li>
              <strong>Event Sourcing</strong> - Event-driven architecture for
              data consistency
            </li>
            <li>
              <strong>Saga Pattern</strong> - Distributed transaction management
            </li>
            <li>
              <strong>Eventual Consistency</strong> - Handling eventual
              consistency in distributed systems
            </li>
            <li>
              <strong>Conflict Resolution</strong> - Resolving inventory
              conflicts across channels
            </li>
            <li>
              <strong>Data Synchronization</strong> - Real-time sync across
              multiple systems
            </li>
          </ul>

          <h3>🔗 Integration Complexity</h3>
          <ul>
            <li>
              <strong>API Management</strong> - Centralized API gateway for all
              integrations
            </li>
            <li>
              <strong>Webhook System</strong> - Real-time notifications to
              external systems
            </li>
            <li>
              <strong>Data Transformation</strong> - ETL processes for data
              standardization
            </li>
            <li>
              <strong>Error Handling</strong> - Robust error handling and retry
              mechanisms
            </li>
            <li>
              <strong>Monitoring</strong> - Comprehensive integration monitoring
            </li>
          </ul>
        </section>

        <section>
          <h2>Business Impact</h2>
          <ul>
            <li>
              <strong>Order Processing Speed</strong> - 90% reduction in order
              processing time
            </li>
            <li>
              <strong>Inventory Accuracy</strong> - 99.9% inventory accuracy
              across channels
            </li>
            <li>
              <strong>Customer Satisfaction</strong> - 40% improvement in
              customer satisfaction scores
            </li>
            <li>
              <strong>Operational Efficiency</strong> - 70% reduction in manual
              order processing
            </li>
            <li>
              <strong>Revenue Growth</strong> - 25% increase in order volume
              through better inventory management
            </li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4>Backend</h4>
              <ul>
                <li>Node.js / Python Django</li>
                <li>PostgreSQL / MongoDB</li>
                <li>Redis for caching</li>
                <li>Apache Kafka for messaging</li>
                <li>Elasticsearch for search</li>
              </ul>
            </div>
            <div>
              <h4>Frontend</h4>
              <ul>
                <li>React.js / Vue.js</li>
                <li>TypeScript</li>
                <li>Progressive Web Apps</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4>Infrastructure</h4>
              <ul>
                <li>AWS / Google Cloud</li>
                <li>Docker containers</li>
                <li>Kubernetes orchestration</li>
                <li>CI/CD with GitHub Actions</li>
                <li>Monitoring with DataDog</li>
              </ul>
            </div>
            <div>
              <h4>Integrations</h4>
              <ul>
                <li>Shopify / WooCommerce APIs</li>
                <li>Amazon / eBay APIs</li>
                <li>Stripe / PayPal APIs</li>
                <li>FedEx / UPS APIs</li>
                <li>Webhook systems</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
