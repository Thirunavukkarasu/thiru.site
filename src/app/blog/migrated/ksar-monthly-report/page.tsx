import Link from "next/link";

export default function KsarMonthlyReport() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-6">
        <Link href="/blog/migrated" className="text-blue-600 hover:underline">
          ← Back to migrated posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1>📊 Automation – Monthly SAR Report Using KSAR</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>June 29, 2014</time> • Originally published on
            old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2014.
            While the core concepts remain valid, modern system monitoring often
            uses cloud-based solutions and automated dashboards. The principles
            of system performance analysis and reporting remain relevant.
          </p>
        </div>

        <p>
          Currently, in most organizations, people use Oracle Enterprise Manager
          (OEM) to analyze and monitor the CPU, memory, and I/O utilization of
          Linux machines in pictorial representation. But think of a situation
          where you have no such tools to analyze the trends of memory, CPU, and
          I/O. That is the moment when KSAR is going to be very handy.
        </p>

        <p>
          Do you know that interesting trick? Now with the graphical SAR tool
          called KSAR, it's easy to automate report generation by just following
          the below steps.
        </p>

        <h2>Step 1: Generate System Activity Report</h2>
        <p>
          At the end of 23:59 minutes, generate the system activity report and
          redirect it to a text file.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost kSar-5.0.6]$ LC_ALL=C sar -A -f /var/log/sa/sa13 > sar13.txt`}
        </pre>

        <h2>Step 2: Generate PDF Report Using KSAR</h2>
        <p>
          Just download KSAR from the following site and unzip it to some
          directory. Now you can go ahead and execute the following command to
          generate the SAR report in PDF format.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <p>
            <strong>Download KSAR:</strong>
          </p>
          <a
            href="http://sourceforge.net/projects/ksar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            http://sourceforge.net/projects/ksar/
          </a>
        </div>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost kSar-5.0.6]$ java -jar kSar.jar -input sar13.txt -outputPDF sar13.pdf
time to parse: 1022ms number of line: 4357 line/msec: 4.0`}
        </pre>

        <h2>Automation Script</h2>
        <p>
          Here's a complete automation script to generate monthly SAR reports:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`#!/bin/bash
# Program Name: monthly_sar_report.sh
# Purpose: Generate monthly SAR report using KSAR

# Configuration
KSAR_PATH="/opt/ksar"
SAR_LOG_DIR="/var/log/sa"
OUTPUT_DIR="/opt/reports/sar"
EMAIL_RECIPIENTS="admin@company.com,manager@company.com"

# Create output directory if it doesn't exist
mkdir -p $OUTPUT_DIR

# Get yesterday's date
YESTERDAY=$(date -d "yesterday" +%d)
MONTH=$(date -d "yesterday" +%m)
YEAR=$(date -d "yesterday" +%Y)

# Generate SAR report
echo "Generating SAR report for $YESTERDAY..."
LC_ALL=C sar -A -f $SAR_LOG_DIR/sa$YESTERDAY > $OUTPUT_DIR/sar$YESTERDAY.txt

# Check if SAR file was generated successfully
if [ ! -f $OUTPUT_DIR/sar$YESTERDAY.txt ]; then
    echo "Error: SAR report generation failed"
    exit 1
fi

# Generate PDF using KSAR
echo "Generating PDF report..."
java -jar $KSAR_PATH/kSar.jar -input $OUTPUT_DIR/sar$YESTERDAY.txt -outputPDF $OUTPUT_DIR/sar_report_$YEAR-$MONTH.pdf

# Check if PDF was generated successfully
if [ ! -f $OUTPUT_DIR/sar_report_$YEAR-$MONTH.pdf ]; then
    echo "Error: PDF generation failed"
    exit 1
fi

echo "Report generated successfully: $OUTPUT_DIR/sar_report_$YEAR-$MONTH.pdf"

# Send email with attachment
echo "Sending email report..."
echo "Monthly SAR Report - $YEAR-$MONTH" | mail -s "Monthly SAR Report - $YEAR-$MONTH" -a $OUTPUT_DIR/sar_report_$YEAR-$MONTH.pdf $EMAIL_RECIPIENTS

echo "Monthly SAR report process completed successfully"`}
        </pre>

        <h2>Advanced Automation with Multiple Reports</h2>
        <p>
          For more comprehensive reporting, you can generate multiple types of
          reports:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`#!/bin/bash
# Advanced SAR reporting script

# Configuration
KSAR_PATH="/opt/ksar"
SAR_LOG_DIR="/var/log/sa"
OUTPUT_DIR="/opt/reports/sar"
REPORT_DATE=$(date -d "yesterday" +%d)

# Function to generate specific SAR reports
generate_cpu_report() {
    echo "Generating CPU utilization report..."
    sar -u -f $SAR_LOG_DIR/sa$REPORT_DATE > $OUTPUT_DIR/cpu_$REPORT_DATE.txt
    java -jar $KSAR_PATH/kSar.jar -input $OUTPUT_DIR/cpu_$REPORT_DATE.txt -outputPDF $OUTPUT_DIR/cpu_report_$REPORT_DATE.pdf
}

generate_memory_report() {
    echo "Generating memory utilization report..."
    sar -r -f $SAR_LOG_DIR/sa$REPORT_DATE > $OUTPUT_DIR/memory_$REPORT_DATE.txt
    java -jar $KSAR_PATH/kSar.jar -input $OUTPUT_DIR/memory_$REPORT_DATE.txt -outputPDF $OUTPUT_DIR/memory_report_$REPORT_DATE.pdf
}

generate_io_report() {
    echo "Generating I/O utilization report..."
    sar -b -f $SAR_LOG_DIR/sa$REPORT_DATE > $OUTPUT_DIR/io_$REPORT_DATE.txt
    java -jar $KSAR_PATH/kSar.jar -input $OUTPUT_DIR/io_$REPORT_DATE.txt -outputPDF $OUTPUT_DIR/io_report_$REPORT_DATE.pdf
}

# Generate all reports
generate_cpu_report
generate_memory_report
generate_io_report

echo "All reports generated successfully"`}
        </pre>

        <h2>Setting Up Cron Job</h2>
        <p>To automate the report generation, add it to your crontab:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Edit crontab
crontab -e

# Add this line to run daily at 1:00 AM
0 1 * * * /opt/scripts/monthly_sar_report.sh

# Or run monthly on the 1st of each month at 2:00 AM
0 2 1 * * /opt/scripts/monthly_sar_report.sh`}
        </pre>

        <h2>What KSAR Provides</h2>
        <p>KSAR generates comprehensive graphical reports including:</p>
        <ul>
          <li>
            <strong>CPU Utilization:</strong> User, system, idle, and wait
            percentages over time
          </li>
          <li>
            <strong>Memory Usage:</strong> Physical memory, swap usage, and
            buffer/cache statistics
          </li>
          <li>
            <strong>I/O Performance:</strong> Disk read/write operations and
            transfer rates
          </li>
          <li>
            <strong>Network Statistics:</strong> Network interface utilization
            and packet statistics
          </li>
          <li>
            <strong>Process Statistics:</strong> Process creation and context
            switching rates
          </li>
          <li>
            <strong>Load Average:</strong> System load over different time
            intervals
          </li>
        </ul>

        <h2>Benefits of Automated SAR Reporting</h2>
        <ul>
          <li>
            <strong>Historical Analysis:</strong> Track system performance
            trends over time
          </li>
          <li>
            <strong>Capacity Planning:</strong> Identify when systems need
            upgrades or optimization
          </li>
          <li>
            <strong>Performance Troubleshooting:</strong> Correlate issues with
            system metrics
          </li>
          <li>
            <strong>Compliance:</strong> Maintain records for audit and
            compliance requirements
          </li>
          <li>
            <strong>Proactive Monitoring:</strong> Identify potential issues
            before they become problems
          </li>
        </ul>

        <h2>Modern Alternatives</h2>
        <p>While KSAR is still useful, modern alternatives include:</p>
        <ul>
          <li>
            <strong>Prometheus + Grafana:</strong> Real-time monitoring and
            alerting
          </li>
          <li>
            <strong>Datadog:</strong> Cloud-based monitoring and analytics
          </li>
          <li>
            <strong>New Relic:</strong> Application performance monitoring
          </li>
          <li>
            <strong>Nagios:</strong> Infrastructure monitoring and alerting
          </li>
          <li>
            <strong>Zabbix:</strong> Enterprise-grade monitoring solution
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            <strong>Regular Cleanup:</strong> Archive old reports and clean up
            temporary files
          </li>
          <li>
            <strong>Error Handling:</strong> Implement proper error checking and
            logging
          </li>
          <li>
            <strong>Storage Management:</strong> Monitor disk space usage for
            report storage
          </li>
          <li>
            <strong>Email Configuration:</strong> Ensure proper email server
            configuration
          </li>
          <li>
            <strong>Security:</strong> Secure access to reports containing
            sensitive system information
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              KSAR provides graphical analysis of SAR data without expensive
              tools
            </li>
            <li>Automation eliminates manual report generation tasks</li>
            <li>
              Historical system performance data is valuable for capacity
              planning
            </li>
            <li>
              Regular reporting helps identify performance trends and issues
            </li>
            <li>
              Combining SAR data with visualization tools creates powerful
              insights
            </li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog
            old blog in 2014. While modern monitoring tools have
            evolved, the principles of system performance analysis and automated
            reporting remain fundamental to system administration.
          </p>
        </footer>
      </article>
    </div>
  );
}
