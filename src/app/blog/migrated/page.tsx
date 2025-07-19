import Link from "next/link";

export default function MigratedBlog() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <div className="mb-6">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to blog
        </Link>
      </div>

      <h1>Migrated from Old Blog</h1>
      <p className="text-lg">
        These posts were originally published on my old technical blog from
        2014. I've migrated them here to preserve the content and share the
        knowledge.
      </p>

      <div className="grid gap-6 mt-8">
        <article className="border-l-4 border-blue-500 pl-6">
          <h2>🏗️ Non-Access Modifiers in Java</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            June 30, 2014
          </p>
          <p>
            A comprehensive guide to non-access modifiers in Java, including
            static, final, abstract, synchronized, and transient modifiers with
            detailed explanations and examples.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/non-access-modifiers-java"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-green-500 pl-6">
          <h2>🚀 How to Host Website Using Node.js</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            June 29, 2014
          </p>
          <p>
            Step-by-step guide to creating a web server using Node.js, including
            server setup, static file serving, and hosting a complete web
            application.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/host-website-nodejs"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-orange-500 pl-6">
          <h2>📸 Automation - Take Snapshot of Live Webpage Using PhantomJS</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            June 29, 2014
          </p>
          <p>
            Complete automation solution for taking periodic screenshots of live
            webpages using PhantomJS and sending them as email attachments with
            sendmail.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/phantomjs-screenshot-automation"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-purple-500 pl-6">
          <h2>📊 Automation - Monthly SAR Report Using KSAR</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            June 29, 2014
          </p>
          <p>
            Automated system monitoring using KSAR to generate graphical SAR
            reports in PDF format for analyzing CPU, memory, and I/O utilization
            trends.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/ksar-monthly-report"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-red-500 pl-6">
          <h2>🔧 Little Background About SAR</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            June 29, 2014
          </p>
          <p>
            Understanding System Activity Reporter (SAR) in Linux, including
            data storage, memory utilization analysis, and CPU performance
            monitoring.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/sar-background"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-indigo-500 pl-6">
          <h2>📊 HighCharts Dashboard Development</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            June 29, 2014
          </p>
          <p>
            Create interactive monitoring dashboards using HighCharts jQuery
            plugin with Bootstrap for responsive design and JSON data
            integration.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/highcharts-dashboard"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-teal-500 pl-6">
          <h2>🔗 Apache WebLogic Integration</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            January 19, 2014
          </p>
          <p>
            Integrate Apache Web Server with Oracle WebLogic Application Server
            for load balancing, reverse proxy, and SSL termination capabilities.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/apache-weblogic-integration"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-pink-500 pl-6">
          <h2>⚙️ Maven Hudson Build Jobs</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            December 20, 2013
          </p>
          <p>
            Create Maven build jobs with Hudson CI server for automated WAR file
            generation, including source code management and post-build actions.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/maven-hudson-build"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>

        <article className="border-l-4 border-yellow-500 pl-6">
          <h2>📦 Maven EAR File Creation</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            December 20, 2013
          </p>
          <p>
            Build Enterprise Application Archive (EAR) files using Maven
            multi-module projects with WAR file aggregation and deployment
            configuration.
          </p>
          <div className="mt-4">
            <Link
              href="/blog/migrated/maven-ear-file"
              className="text-blue-600 hover:underline"
            >
              Read post →
            </Link>
          </div>
        </article>
      </div>

      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3>About the Original Blog</h3>
        <p>
          <strong>my old blog</strong> was my technical blog from 2014 where I
          shared insights about Java development, web technologies, system
          administration, and automation scripts. The blog covered topics like:
        </p>
        <ul>
          <li>Java programming and WebLogic server administration</li>
          <li>Node.js web development and hosting</li>
          <li>Linux system monitoring and automation</li>
          <li>Database administration and PL/SQL</li>
          <li>Continuous integration with Hudson/Jenkins</li>
        </ul>
        <p className="mt-4">
          <a
            href="https://industryvertical.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View original blog →
          </a>
        </p>
      </div>
    </div>
  );
}
