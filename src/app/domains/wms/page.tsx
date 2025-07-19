import Link from "next/link";

export default function WMS() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <div className="mb-6">
        <Link href="/domains" className="text-blue-600 hover:underline">
          ← Back to domains
        </Link>
      </div>

      <h1>🏭 Warehouse Management Systems (WMS)</h1>

      <p className="text-lg">
        Built warehouse management systems that optimize storage, picking, and
        shipping operations for maximum efficiency and accuracy. These systems
        handle complex warehouse operations with real-time inventory tracking
        and mobile-first design for warehouse workers.
      </p>

      <div className="grid gap-8 mt-8">
        <section>
          <h2>System Architecture</h2>
          <p>
            Designed distributed microservices architecture optimized for
            warehouse operations with real-time location tracking, mobile device
            integration, and IoT sensor connectivity.
          </p>
          <h3>Core Services:</h3>
          <ul>
            <li>
              <strong>Location Service</strong> - Bin management and space
              optimization
            </li>
            <li>
              <strong>Picking Service</strong> - Route optimization and picking
              workflows
            </li>
            <li>
              <strong>Receiving Service</strong> - Inbound processing and
              quality control
            </li>
            <li>
              <strong>Shipping Service</strong> - Outbound processing and
              carrier integration
            </li>
            <li>
              <strong>Equipment Service</strong> - Forklift and equipment
              tracking
            </li>
            <li>
              <strong>Analytics Service</strong> - Performance metrics and KPI
              tracking
            </li>
          </ul>
        </section>

        <section>
          <h2>Key Features Built</h2>

          <h3>📍 Storage Optimization</h3>
          <ul>
            <li>
              <strong>Dynamic Bin Allocation</strong> - AI-powered storage
              location assignment
            </li>
            <li>
              <strong>Space Utilization</strong> - Real-time space utilization
              tracking
            </li>
            <li>
              <strong>Zone Management</strong> - Temperature-controlled and
              special handling zones
            </li>
            <li>
              <strong>Slotting Optimization</strong> - Optimal product placement
              based on velocity
            </li>
            <li>
              <strong>Capacity Planning</strong> - Predictive capacity planning
              and expansion
            </li>
          </ul>

          <h3>📦 Picking & Packing</h3>
          <ul>
            <li>
              <strong>Route Optimization</strong> - AI-optimized picking routes
              for efficiency
            </li>
            <li>
              <strong>Batch Picking</strong> - Multi-order batch picking
              workflows
            </li>
            <li>
              <strong>Wave Planning</strong> - Intelligent wave planning for
              peak efficiency
            </li>
            <li>
              <strong>Quality Control</strong> - Built-in quality checks during
              picking
            </li>
            <li>
              <strong>Packing Optimization</strong> - Optimal packaging and
              material selection
            </li>
          </ul>

          <h3>🔍 Quality Control</h3>
          <ul>
            <li>
              <strong>Inspection Workflows</strong> - Configurable quality
              inspection processes
            </li>
            <li>
              <strong>Defect Tracking</strong> - Real-time defect reporting and
              tracking
            </li>
            <li>
              <strong>Hold Management</strong> - Quarantine and hold management
              for quality issues
            </li>
            <li>
              <strong>Compliance Tracking</strong> - Regulatory compliance and
              certification tracking
            </li>
            <li>
              <strong>Quality Analytics</strong> - Quality metrics and trend
              analysis
            </li>
          </ul>

          <h3>🚛 Equipment Management</h3>
          <ul>
            <li>
              <strong>Forklift Tracking</strong> - Real-time forklift location
              and status
            </li>
            <li>
              <strong>Equipment Maintenance</strong> - Preventive maintenance
              scheduling
            </li>
            <li>
              <strong>Operator Management</strong> - Operator assignment and
              performance tracking
            </li>
            <li>
              <strong>Safety Monitoring</strong> - Safety compliance and
              incident tracking
            </li>
            <li>
              <strong>Equipment Analytics</strong> - Equipment utilization and
              efficiency metrics
            </li>
          </ul>

          <h3>📊 Performance Analytics</h3>
          <ul>
            <li>
              <strong>Real-Time Dashboards</strong> - Live warehouse performance
              dashboards
            </li>
            <li>
              <strong>Worker Productivity</strong> - Individual and team
              productivity metrics
            </li>
            <li>
              <strong>Order Fulfillment</strong> - Order accuracy and
              fulfillment time tracking
            </li>
            <li>
              <strong>Inventory Accuracy</strong> - Cycle counting and accuracy
              reporting
            </li>
            <li>
              <strong>Cost Analytics</strong> - Operational cost tracking and
              optimization
            </li>
          </ul>
        </section>

        <section>
          <h2>Technical Challenges Solved</h2>

          <h3>📱 Mobile-First Design</h3>
          <ul>
            <li>
              <strong>Offline Capability</strong> - Mobile apps work offline
              with sync when online
            </li>
            <li>
              <strong>Barcode Scanning</strong> - High-speed barcode and QR code
              scanning
            </li>
            <li>
              <strong>Voice Picking</strong> - Voice-directed picking for
              hands-free operation
            </li>
            <li>
              <strong>Rugged Device Support</strong> - Support for industrial
              rugged devices
            </li>
            <li>
              <strong>Cross-Platform</strong> - Works on iOS, Android, and
              Windows devices
            </li>
          </ul>

          <h3>🔗 IoT Integration</h3>
          <ul>
            <li>
              <strong>RFID Integration</strong> - RFID tag reading and tracking
            </li>
            <li>
              <strong>Sensor Networks</strong> - Temperature, humidity, and
              environmental sensors
            </li>
            <li>
              <strong>Automation Integration</strong> - Integration with
              automated storage systems
            </li>
            <li>
              <strong>Real-Time Tracking</strong> - Real-time location tracking
              with GPS and beacons
            </li>
            <li>
              <strong>Predictive Maintenance</strong> - IoT-based predictive
              maintenance
            </li>
          </ul>

          <h3>⚡ Performance & Scalability</h3>
          <ul>
            <li>
              <strong>High Volume Processing</strong> - Handle 50,000+
              transactions daily
            </li>
            <li>
              <strong>Real-Time Updates</strong> - Sub-second inventory and
              location updates
            </li>
            <li>
              <strong>Multi-Warehouse</strong> - Support for multiple warehouse
              locations
            </li>
            <li>
              <strong>Peak Season Handling</strong> - Auto-scaling for seasonal
              demand spikes
            </li>
            <li>
              <strong>Disaster Recovery</strong> - Robust backup and recovery
              systems
            </li>
          </ul>
        </section>

        <section>
          <h2>Business Impact</h2>
          <ul>
            <li>
              <strong>Picking Efficiency</strong> - 40% improvement in picking
              productivity
            </li>
            <li>
              <strong>Order Accuracy</strong> - 99.9% order accuracy rate
            </li>
            <li>
              <strong>Space Utilization</strong> - 25% improvement in warehouse
              space utilization
            </li>
            <li>
              <strong>Labor Cost Reduction</strong> - 30% reduction in labor
              costs
            </li>
            <li>
              <strong>Customer Satisfaction</strong> - 50% improvement in order
              fulfillment speed
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
              <h4>Mobile & Frontend</h4>
              <ul>
                <li>React Native / Flutter</li>
                <li>Progressive Web Apps</li>
                <li>WebRTC for real-time communication</li>
                <li>WebSocket for live updates</li>
              </ul>
            </div>
            <div>
              <h4>IoT & Hardware</h4>
              <ul>
                <li>RFID readers and tags</li>
                <li>Barcode scanners</li>
                <li>IoT sensors and beacons</li>
                <li>Voice picking devices</li>
                <li>Rugged mobile devices</li>
              </ul>
            </div>
            <div>
              <h4>Infrastructure</h4>
              <ul>
                <li>AWS / Azure cloud</li>
                <li>Edge computing for IoT</li>
                <li>Docker containers</li>
                <li>Kubernetes orchestration</li>
                <li>Monitoring with Prometheus</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
