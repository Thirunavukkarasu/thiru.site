import Link from "next/link";

export default function ApacheWeblogicIntegration() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-6">
        <Link href="/blog/migrated" className="text-blue-600 hover:underline">
          ← Back to migrated posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1>
            🔗 Integrate Apache Web Server and Oracle Weblogic Application
            Server
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>January 19, 2014</time> • Originally published on
            old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2014.
            While the core concepts remain valid, modern deployments often use
            containerization (Docker) and cloud-native solutions. However, the
            principles of load balancing and reverse proxy configuration remain
            fundamental.
          </p>
        </div>

        <p>
          In this interesting post, we will discuss how to integrate Oracle
          WebLogic Application Server with Apache Web (HTTP) Server in a
          detailed manner.
        </p>

        <h2>What is the Main Use of Oracle WebLogic Web Server Plugins?</h2>
        <ol>
          <li>
            Oracle WebLogic Web Server Plug-Ins are plugins for popular Web
            Servers like Apache HTTP Server, iPlanet Web Server, Microsoft
            Internet Information Server (IIS).
          </li>
          <li>
            This plugin diverts the incoming HTTP(s) requests within the Web
            Server and reverse proxies the incoming requests across WebLogic
            Server Clusters.
          </li>
        </ol>

        <h2>Prerequisites</h2>
        <ol>
          <li>Download and Install Apache Web Server (2.2)</li>
          <li>Download and Install Oracle WebLogic Server 12c</li>
          <li>Download Oracle WebLogic Web Server Plugins</li>
          <li>
            Deploy some sample Web Applications to the application server
            cluster environments
          </li>
        </ol>

        <h2>Steps Involved</h2>

        <h3>Step 1: Download the Oracle WebLogic Web Server Plugin</h3>
        <p>
          Download the Oracle WebLogic Web Server plugin from the Oracle
          website.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <p>
            <strong>Download Link:</strong>
          </p>
          <a
            href="http://www.oracle.com/technetwork/middleware/ias/downloads/wls-plugins-096117.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            http://www.oracle.com/technetwork/middleware/ias/downloads/wls-plugins-096117.html
          </a>
        </div>

        <h3>Step 2: Extract the Plugin Archive</h3>
        <p>
          Unzip the plugin downloaded. This archived file has plugins for all
          platforms (Linux, Solaris, AIX, HP-UX, Windows). Select the desired
          platform based on your needs. I'm using Apache Web Server which is
          running on a Linux machine, so the following is the desired plugin I'm
          looking for:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`WLSPlugin12c-64bit-Apache2.2-Linux64-x86_64.zip`}
        </pre>

        <h3>Step 3: Extract Platform-Specific Plugin</h3>
        <p>
          Now unarchive the{" "}
          <code>WLSPlugin12c-64bit-Apache2.2-Linux64-x86_64.zip</code> file.
        </p>

        <h3>Step 4: Copy Plugin Files to Apache</h3>
        <p>
          Copy the <code>mod_wl.so</code> to the modules folder of the Apache
          web server.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`cp mod_wl.so /usr/local/apache2/modules/`}
        </pre>

        <h3>Step 5: Copy Oracle Libraries</h3>
        <p>
          Copy the <code>libclntsh.so</code> and <code>libnnz11.so</code> files
          to the lib folder of the Apache web server.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`cp libclntsh.so /usr/local/apache2/lib/
cp libnnz11.so /usr/local/apache2/lib/`}
        </pre>

        <h3>Step 6: Configure Apache Web Server</h3>
        <p>
          The plugin installation setup part is done. Now we need to proceed
          with the configuration part:
        </p>
        <ul>
          <li>
            Load the <code>mod_wl.so</code> module to the Apache Web Server
          </li>
          <li>Set all the required web server parameters</li>
          <li>Get the application servers IP Address and Port numbers</li>
        </ul>

        <p>
          Applications are deployed to the 3 managed servers mentioned above. So
          now specify that in the
          <code>WebLogicCluster</code> parameters list as{" "}
          <code>192.168.56.1:7001,192.168.56.1:4003</code> and
          <code>192.168.56.1:4005</code>. Use the same Context root (
          <code>/Monitoring_Application</code>) that we mentioned in
          application.xml deployment descriptors in the{" "}
          <code>&lt;Location&gt;</code> tag.
        </p>

        <h3>Step 7: Create Plugin Configuration File</h3>
        <p>
          Create a <code>mod_wl.conf</code> file with the following
          configuration:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`LoadModule weblogic_module modules/mod_wl.so

<Location /Monitoring_Application>
    SetHandler weblogic-handler
    WebLogicCluster 192.168.56.1:7001,192.168.56.1:4003,192.168.56.1:4005
    Debug ON
    WLLogFile /usr/local/apache2/logs/weblogic.log
</Location>

<Location /Monitoring_Application/*>
    SetHandler weblogic-handler
    WebLogicCluster 192.168.56.1:7001,192.168.56.1:4003,192.168.56.1:4005
    Debug ON
    WLLogFile /usr/local/apache2/logs/weblogic.log
</Location>`}
        </pre>

        <h3>Step 8: Include Plugin Configuration in Apache</h3>
        <p>
          Include the <code>mod_wl.conf</code> in the main Apache{" "}
          <code>httpd.conf</code> file.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Include WebLogic plugin configuration
Include conf/mod_wl.conf`}
        </pre>

        <h3>Step 9: Restart Apache Web Server</h3>
        <p>
          In order for the changes to take effect, restart the Apache web
          server.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`/usr/local/apache2/bin/apachectl restart`}
        </pre>

        <h3>Step 10: Test the Integration</h3>
        <p>
          Access the web application deployed to Oracle WebLogic Application
          Server using the Apache Web Server.
        </p>

        <ul>
          <li>
            <strong>Using Application Server's IP_Address:Port</strong>
          </li>
          <li>
            <strong>Through Apache Web Server IP_Address:Port</strong>
          </li>
        </ul>

        <p>
          Now the incoming HTTP(s) requests within the Apache Web Server are
          reverse proxied across WebLogic Server Clusters{" "}
          <code>192.168.56.1:7001</code>, <code>192.168.56.1:4003</code> &{" "}
          <code>192.168.56.1:4005</code>
          automatically by the web server.
        </p>

        <h2>Complete Configuration Example</h2>
        <p>Here's a complete example of the Apache configuration:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Apache httpd.conf
ServerRoot "/usr/local/apache2"
Listen 80

LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
LoadModule dir_module modules/mod_dir.so
LoadModule mime_module modules/mod_mime.so
LoadModule weblogic_module modules/mod_wl.so

ServerName localhost
DocumentRoot "/usr/local/apache2/htdocs"

<Directory />
    AllowOverride none
    Require all denied
</Directory>

<Directory "/usr/local/apache2/htdocs">
    Options Indexes FollowSymLinks
    AllowOverride None
    Require all granted
</Directory>

# Include WebLogic plugin configuration
Include conf/mod_wl.conf

ErrorLog "logs/error_log"
LogLevel warn

<IfModule log_config_module>
    LogFormat "%h %l %u %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
    LogFormat "%h %l %u %t \"%r\" %>s %b" common
    CustomLog "logs/access_log" combined
</IfModule>`}
        </pre>

        <h2>Advanced Configuration Options</h2>
        <p>Additional configuration options for the WebLogic plugin:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<Location /Monitoring_Application>
    SetHandler weblogic-handler
    WebLogicCluster 192.168.56.1:7001,192.168.56.1:4003,192.168.56.1:4005
    
    # Connection timeout (in seconds)
    ConnectTimeoutSecs 10
    
    # Read timeout (in seconds)
    ReadTimeoutSecs 60
    
    # Keep alive timeout (in seconds)
    KeepAliveSecs 60
    
    # Maximum number of connections
    MaxConnections 100
    
    # Debug level (OFF, ON, ERR, EMERG, ALERT, CRIT, ERR, WARN, NOTICE, INFO, DEBUG)
    Debug ON
    
    # Log file location
    WLLogFile /usr/local/apache2/logs/weblogic.log
    
    # SSL configuration (if using HTTPS)
    # WLProxySSL ON
    # WLProxySSLPassThrough ON
</Location>`}
        </pre>

        <h2>Load Balancing Configuration</h2>
        <p>For better load balancing, you can configure multiple clusters:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Primary cluster
<Location /Monitoring_Application>
    SetHandler weblogic-handler
    WebLogicCluster 192.168.56.1:7001,192.168.56.1:4003,192.168.56.1:4005
    Debug ON
    WLLogFile /usr/local/apache2/logs/weblogic.log
</Location>

# Backup cluster
<Location /Monitoring_Application/backup>
    SetHandler weblogic-handler
    WebLogicCluster 192.168.56.2:7001,192.168.56.2:4003,192.168.56.2:4005
    Debug ON
    WLLogFile /usr/local/apache2/logs/weblogic_backup.log
</Location>`}
        </pre>

        <h2>SSL Configuration</h2>
        <p>To enable SSL termination at Apache:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`LoadModule ssl_module modules/mod_ssl.so

<VirtualHost *:443>
    ServerName your-domain.com
    DocumentRoot "/usr/local/apache2/htdocs"
    
    SSLEngine on
    SSLCertificateFile /path/to/certificate.crt
    SSLCertificateKeyFile /path/to/private.key
    
    <Location /Monitoring_Application>
        SetHandler weblogic-handler
        WebLogicCluster 192.168.56.1:7001,192.168.56.1:4003,192.168.56.1:4005
        WLProxySSL ON
        WLProxySSLPassThrough ON
        Debug ON
        WLLogFile /usr/local/apache2/logs/weblogic_ssl.log
    </Location>
</VirtualHost>`}
        </pre>

        <h2>Monitoring and Troubleshooting</h2>
        <p>Key files and commands for monitoring:</p>

        <ul>
          <li>
            <strong>Apache Error Log:</strong>{" "}
            <code>/usr/local/apache2/logs/error_log</code>
          </li>
          <li>
            <strong>WebLogic Plugin Log:</strong>{" "}
            <code>/usr/local/apache2/logs/weblogic.log</code>
          </li>
          <li>
            <strong>Apache Access Log:</strong>{" "}
            <code>/usr/local/apache2/logs/access_log</code>
          </li>
          <li>
            <strong>Test Configuration:</strong>{" "}
            <code>apachectl configtest</code>
          </li>
          <li>
            <strong>Check Module Loading:</strong>{" "}
            <code>apachectl -M | grep weblogic</code>
          </li>
        </ul>

        <h2>Benefits of Apache-WebLogic Integration</h2>
        <ul>
          <li>
            <strong>Load Balancing:</strong> Distributes requests across
            multiple WebLogic instances
          </li>
          <li>
            <strong>SSL Termination:</strong> Handle SSL at Apache level for
            better performance
          </li>
          <li>
            <strong>Static Content Serving:</strong> Serve static files directly
            from Apache
          </li>
          <li>
            <strong>Security:</strong> Additional security layer and access
            control
          </li>
          <li>
            <strong>Monitoring:</strong> Centralized logging and monitoring
          </li>
          <li>
            <strong>High Availability:</strong> Failover capabilities across
            multiple servers
          </li>
        </ul>

        <h2>Modern Alternatives</h2>
        <p>While this approach is still valid, modern alternatives include:</p>
        <ul>
          <li>
            <strong>Docker Containers:</strong> Containerized deployments with
            Docker
          </li>
          <li>
            <strong>Kubernetes:</strong> Container orchestration with built-in
            load balancing
          </li>
          <li>
            <strong>Cloud Load Balancers:</strong> AWS ALB, Azure Application
            Gateway, GCP Load Balancer
          </li>
          <li>
            <strong>NGINX:</strong> Modern web server with better performance
          </li>
          <li>
            <strong>Traefik:</strong> Cloud-native reverse proxy and load
            balancer
          </li>
          <li>
            <strong>Istio:</strong> Service mesh for microservices
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            <strong>Health Checks:</strong> Implement health check endpoints
          </li>
          <li>
            <strong>Connection Pooling:</strong> Configure appropriate
            connection pool sizes
          </li>
          <li>
            <strong>Timeout Configuration:</strong> Set appropriate timeout
            values
          </li>
          <li>
            <strong>Logging:</strong> Enable detailed logging for
            troubleshooting
          </li>
          <li>
            <strong>Security:</strong> Use HTTPS and implement proper security
            headers
          </li>
          <li>
            <strong>Monitoring:</strong> Set up monitoring and alerting
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              Apache-WebLogic integration provides load balancing and reverse
              proxy capabilities
            </li>
            <li>
              Proper plugin configuration is essential for successful
              integration
            </li>
            <li>SSL termination at Apache level improves performance</li>
            <li>Monitoring and logging are crucial for troubleshooting</li>
            <li>Modern alternatives offer more flexibility and scalability</li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog
            old blog in 2014. While deployment patterns have evolved,
            the principles of load balancing and reverse proxy configuration
            remain fundamental to enterprise architecture.
          </p>
        </footer>
      </article>
    </div>
  );
}
