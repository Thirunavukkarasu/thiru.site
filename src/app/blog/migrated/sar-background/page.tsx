import Link from "next/link";

export default function SarBackground() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-6">
        <Link href="/blog/migrated" className="text-blue-600 hover:underline">
          ← Back to migrated posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1>🔧 Little Background About SAR</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>June 29, 2014</time> • Originally published on old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2014.
            While the core concepts remain valid, modern system monitoring often
            uses more advanced tools. However, SAR remains a fundamental system
            administration tool available on most Linux systems.
          </p>
        </div>

        <p>
          By default, Linux and Unix machines store the SAR (System Activity
          Reporter) output for 9 days. It will be stored inside the{" "}
          <code>/var/log/sa/</code> directory.
        </p>

        <h2>SAR File Storage</h2>
        <p>Here's what you'll typically see in the SAR directory:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost ~]$ ls -ltr /var/log/sa/sa*|grep -v sar
-rw-r--r-- 1 root root 338928 Jan 13 23:50 /var/log/sa/sa13
-rw-r--r-- 1 root root 338928 Jan 14 23:50 /var/log/sa/sa14
-rw-r--r-- 1 root root 338928 Jan 15 23:50 /var/log/sa/sa15
-rw-r--r-- 1 root root 338928 Jan 16 23:50 /var/log/sa/sa16
-rw-r--r-- 1 root root 338928 Jan 17 23:50 /var/log/sa/sa17
-rw-r--r-- 1 root root 338928 Jan 18 23:50 /var/log/sa/sa18
-rw-r--r-- 1 root root 338928 Jan 19 23:50 /var/log/sa/sa19
-rw-r--r-- 1 root root 338928 Jan 20 23:50 /var/log/sa/sa20
-rw-r--r-- 1 root root  82560 Jan 21 05:40 /var/log/sa/sa21`}
        </pre>

        <p>
          We can extract the memory utilization, CPU, swap, and I/O from the
          stored SAR report by providing the specified SAR report file.
        </p>

        <h2>Memory Utilization Analysis</h2>
        <p>To analyze RAM memory utilization:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost ~]$ sar -r -f /var/log/sa/sa20
10:40:01 PM kbmemfree kbmemused %memused kbbuffers kbcached kbswpfree kbswpused %swpused kbswpcad
10:50:01 PM 28089004 6510764 18.82 468820 386136 32505732 108 0.00 0
11:00:01 PM 28087392 6512376 18.82 470460 386144 32505732 108 0.00 0
11:10:01 PM 28081460 6518308 18.84 472020 390504 32505732 108 0.00 0
11:20:01 PM 28079972 6519796 18.84 473672 390504 32505732 108 0.00 0
11:30:02 PM 28078236 6521532 18.85 475384 390512 32505732 108 0.00 0
11:40:01 PM 28076872 6522896 18.85 477040 390508 32505732 108 0.00 0
11:50:01 PM 28073836 6525932 18.86 478784 390560 32505732 108 0.00 0
Average: 13386344 21213424 61.31 227578 15170261 32505732 108 0.00`}
        </pre>

        <h3>Understanding Memory Output</h3>
        <ul>
          <li>
            <strong>kbmemfree:</strong> Available physical memory in KB
          </li>
          <li>
            <strong>kbmemused:</strong> Used physical memory in KB
          </li>
          <li>
            <strong>%memused:</strong> Percentage of memory used
          </li>
          <li>
            <strong>kbbuffers:</strong> Memory used by kernel buffers in KB
          </li>
          <li>
            <strong>kbcached:</strong> Memory used by page cache in KB
          </li>
          <li>
            <strong>kbswpfree:</strong> Available swap space in KB
          </li>
          <li>
            <strong>kbswpused:</strong> Used swap space in KB
          </li>
          <li>
            <strong>%swpused:</strong> Percentage of swap space used
          </li>
        </ul>

        <h2>CPU Utilization Analysis</h2>
        <p>To analyze CPU utilization:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost ~]$ sar -u -f /var/log/sa/sa20
05:40:01 AM CPU %user %nice %system %iowait %steal %idle
05:50:02 AM all 80.62 0.00 1.67 0.12 0.00 17.59
06:00:02 AM all 81.22 0.00 1.70 0.09 0.00 17.00
06:10:01 AM all 81.39 0.00 1.69 0.10 0.00 16.82
06:20:02 AM all 81.59 0.00 1.72 0.12 0.00 16.58
06:30:01 AM all 80.31 0.00 1.71 0.09 0.00 17.90
06:40:01 AM all 80.88 0.00 1.82 0.11 0.00 17.19
06:50:01 AM all 81.05 0.00 1.87 0.05 0.00 17.04
07:00:01 AM all 80.31 0.00 2.07 0.03 0.00 17.58
07:10:01 AM all 80.80 0.00 2.30 0.11 0.00 16.79
07:20:01 AM all 79.90 0.00 2.27 0.08 0.00 17.74
07:30:01 AM all 79.97 0.00 2.33 0.06 0.00 17.64
07:40:02 AM all 80.84 0.00 2.59 0.06 0.00 16.52
07:50:01 AM all 79.75 0.00 2.42 0.05 0.00 17.79
08:00:01 AM all 81.13 0.00 2.21 0.10 0.00 16.56
08:10:02 AM all 81.71 0.00 1.74 0.08 0.00 16.46`}
        </pre>

        <h3>Understanding CPU Output</h3>
        <ul>
          <li>
            <strong>%user:</strong> Percentage of CPU time spent in user mode
          </li>
          <li>
            <strong>%nice:</strong> Percentage of CPU time spent in user mode
            with nice priority
          </li>
          <li>
            <strong>%system:</strong> Percentage of CPU time spent in kernel
            mode
          </li>
          <li>
            <strong>%iowait:</strong> Percentage of CPU time spent waiting for
            I/O
          </li>
          <li>
            <strong>%steal:</strong> Percentage of CPU time stolen by hypervisor
            (in virtual environments)
          </li>
          <li>
            <strong>%idle:</strong> Percentage of CPU time spent idle
          </li>
        </ul>

        <h2>I/O Statistics Analysis</h2>
        <p>To analyze disk I/O statistics:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost ~]$ sar -b -f /var/log/sa/sa20
10:40:01 PM tps rtps wtps bread/s bwrtn/s
10:50:01 PM 0.00 0.00 0.00 0.00 0.00
11:00:01 PM 0.00 0.00 0.00 0.00 0.00
11:10:01 PM 0.00 0.00 0.00 0.00 0.00
11:20:01 PM 0.00 0.00 0.00 0.00 0.00
11:30:02 PM 0.00 0.00 0.00 0.00 0.00
11:40:01 PM 0.00 0.00 0.00 0.00 0.00
11:50:01 PM 0.00 0.00 0.00 0.00 0.00`}
        </pre>

        <h3>Understanding I/O Output</h3>
        <ul>
          <li>
            <strong>tps:</strong> Total transfers per second
          </li>
          <li>
            <strong>rtps:</strong> Read transfers per second
          </li>
          <li>
            <strong>wtps:</strong> Write transfers per second
          </li>
          <li>
            <strong>bread/s:</strong> Blocks read per second
          </li>
          <li>
            <strong>bwrtn/s:</strong> Blocks written per second
          </li>
        </ul>

        <h2>Network Statistics Analysis</h2>
        <p>To analyze network interface statistics:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost ~]$ sar -n DEV -f /var/log/sa/sa20
10:40:01 PM IFACE rxpck/s txpck/s rxkB/s txkB/s rxcmp/s txcmp/s rxmcst/s
10:50:01 PM eth0 0.00 0.00 0.00 0.00 0.00 0.00 0.00
11:00:01 PM eth0 0.00 0.00 0.00 0.00 0.00 0.00 0.00
11:10:01 PM eth0 0.00 0.00 0.00 0.00 0.00 0.00 0.00`}
        </pre>

        <h3>Understanding Network Output</h3>
        <ul>
          <li>
            <strong>IFACE:</strong> Network interface name
          </li>
          <li>
            <strong>rxpck/s:</strong> Packets received per second
          </li>
          <li>
            <strong>txpck/s:</strong> Packets transmitted per second
          </li>
          <li>
            <strong>rxkB/s:</strong> Kilobytes received per second
          </li>
          <li>
            <strong>txkB/s:</strong> Kilobytes transmitted per second
          </li>
          <li>
            <strong>rxcmp/s:</strong> Compressed packets received per second
          </li>
          <li>
            <strong>txcmp/s:</strong> Compressed packets transmitted per second
          </li>
          <li>
            <strong>rxmcst/s:</strong> Multicast packets received per second
          </li>
        </ul>

        <h2>Common SAR Command Options</h2>
        <p>Here are some useful SAR command options:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# CPU utilization
sar -u [interval] [count]

# Memory utilization
sar -r [interval] [count]

# I/O statistics
sar -b [interval] [count]

# Network statistics
sar -n DEV [interval] [count]

# Load average
sar -q [interval] [count]

# Process statistics
sar -w [interval] [count]

# All statistics
sar -A [interval] [count]

# Read from file
sar -f /var/log/sa/sa[day]`}
        </pre>

        <h2>Real-time Monitoring</h2>
        <p>To monitor system activity in real-time:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Monitor CPU every 5 seconds, 10 times
sar -u 5 10

# Monitor memory every 10 seconds, 6 times
sar -r 10 6

# Monitor all statistics every 30 seconds, 4 times
sar -A 30 4`}
        </pre>

        <h2>SAR Configuration</h2>
        <p>
          The SAR data collection is typically configured in{" "}
          <code>/etc/cron.d/sysstat</code>:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Run system activity accounting tool every 10 minutes
*/10 * * * * root /usr/lib/sa/sa1 1 1

# Generate a daily summary of process accounting at 23:53
53 23 * * * root /usr/lib/sa/sa2 -A`}
        </pre>

        <h2>Benefits of SAR</h2>
        <ul>
          <li>
            <strong>Built-in Tool:</strong> Available on most Linux
            distributions by default
          </li>
          <li>
            <strong>Historical Data:</strong> Provides historical system
            performance data
          </li>
          <li>
            <strong>Low Overhead:</strong> Minimal impact on system performance
          </li>
          <li>
            <strong>Comprehensive:</strong> Covers CPU, memory, I/O, and network
            statistics
          </li>
          <li>
            <strong>Automated Collection:</strong> Runs automatically via cron
            jobs
          </li>
          <li>
            <strong>Text-based:</strong> Easy to parse and analyze
            programmatically
          </li>
        </ul>

        <h2>Limitations of SAR</h2>
        <ul>
          <li>
            <strong>Limited Retention:</strong> Only keeps data for 9 days by
            default
          </li>
          <li>
            <strong>Basic Visualization:</strong> No built-in graphical
            interface
          </li>
          <li>
            <strong>Fixed Intervals:</strong> Data collection intervals are
            predetermined
          </li>
          <li>
            <strong>System-level Only:</strong> Doesn't provide
            application-level metrics
          </li>
          <li>
            <strong>No Alerting:</strong> No built-in alerting capabilities
          </li>
        </ul>

        <h2>Modern Alternatives</h2>
        <p>
          While SAR is still useful, modern alternatives provide more features:
        </p>
        <ul>
          <li>
            <strong>Prometheus:</strong> Time-series database with powerful
            querying
          </li>
          <li>
            <strong>Grafana:</strong> Advanced visualization and dashboarding
          </li>
          <li>
            <strong>Datadog:</strong> Cloud-based monitoring with AI-powered
            insights
          </li>
          <li>
            <strong>New Relic:</strong> Application performance monitoring
          </li>
          <li>
            <strong>Nagios:</strong> Infrastructure monitoring with alerting
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              SAR is a fundamental system monitoring tool available on most
              Linux systems
            </li>
            <li>
              It provides comprehensive system performance data with minimal
              overhead
            </li>
            <li>
              Historical data helps identify performance trends and capacity
              planning
            </li>
            <li>
              SAR data can be combined with visualization tools for better
              insights
            </li>
            <li>
              Understanding SAR output is essential for system administration
            </li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog in 2014.
            SAR remains a fundamental tool for system administrators, providing
            valuable insights into system performance and resource utilization.
          </p>
        </footer>
      </article>
    </div>
  );
}
