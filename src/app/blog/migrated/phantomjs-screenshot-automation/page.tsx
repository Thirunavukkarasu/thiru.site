import Link from "next/link";

export default function PhantomjsScreenshotAutomation() {
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
            📸 Automation – Take Snapshot of Live Webpage Periodically Using
            PhantomJS
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>June 29, 2014</time> • Originally published on old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2014.
            While the core concepts remain valid, PhantomJS has been largely
            superseded by Puppeteer and Playwright for modern web automation.
            The principles and approach discussed here are still relevant.
          </p>
        </div>

        <h2>Requirement</h2>
        <p>
          I have developed a monitoring dashboard application which displays
          backlog trends of various application components, something like
          below. I want to take a snapshot of this live monitoring dashboard
          webpage every 30 minutes and send it as an inline attachment to a
          specific set of email addresses.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <p>
            <strong>Observare Dashboard</strong>
          </p>
          <p>Please visit the following link for the live demo:</p>
          <a
            href="http://anjuwedssrini.com/Demos/HighCharts-Demo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            http://anjuwedssrini.com/Demos/HighCharts-Demo/
          </a>
        </div>

        <h2>Steps Involved</h2>

        <h3>Step 1: Download PhantomJS</h3>
        <p>
          First, download the PhantomJS plugin from the following link and
          extract it inside the desired folder.
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-1.9.7-linux-x86_64.tar.bz2`}
        </pre>

        <h3>Step 2: Create the PhantomJS Script</h3>
        <p>Put the following code inside a JavaScript file:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost bin]$ cat observare.js
var page = require('webpage').create();
page.open('http://anjuwedssrini.com/Demos/HighCharts-Demo/', function() {
    page.viewportSize = { width: 1200, height: 768 };
    window.setTimeout(function () {
        page.render('/optionalphantom/bin/observare.jpg');
        phantom.exit();
    }, 1000);
});`}
        </pre>

        <h3>Step 3: Execute the Script</h3>
        <p>
          Execute the JavaScript code using the PhantomJS executable available
          inside the extracted binary:
        </p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[thiru@localhost bin]$ /optional/phantom/bin/phantomjs observare.js`}
        </pre>

        <p>
          Now we're done with the image generation, but how do we attach the
          generated image as an inline attachment? Is it easy?
        </p>

        <h2>How to Send Image as an Inline Attachment Using Sendmail</h2>
        <p>
          Linux sendmail command has some exceptional features to do all these
          things.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`/usr/sbin/sendmail -t <<EOT
TO: industryvertical@gmail.com
FROM: Thirunavukkarasu.Muthusamy@gmail.com
SUBJECT: Observer – Dashboard Report
MIME-Version: 1.0
Content-Type: multipart/related;boundary="XYZ"

--XYZ
Content-Type: text/html; charset=ISO-8859-15
Content-Transfer-Encoding: 7bit

<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-15">
</head>
<body bgcolor="#ffffff" text="#000000">
<img src="cid:part1.0609040" alt="">
</body>
</html>

--XYZ
Content-Type: image/jpeg;name="observare.jpg"
Content-Transfer-Encoding: base64
Content-ID: <part1.0609040>
Content-Disposition: inline; filename="observare.jpg"

$(base64 /optional/images/observare.jpg)

--XYZ--
EOT`}
        </pre>

        <h2>Complete Script</h2>
        <p>
          Now we're done with the image generation using PhantomJS and image
          encoding, inline attachment using sendmail utility. By putting it all
          together, we get the following script:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`#!/bin/bash
#Program Name: Report_generation.sh
#Purpose: Report Generation

export hour=\`date -u +%H\`

function takesnap()
{
    echo "Inside Take Snap function!!"
    /optional/phantom/bin/phantomjs observare.js
}

function sendmail()
{
    /usr/sbin/sendmail -t <<EOT
TO: industryvertical@gmail.com
FROM: Thirunavukkarasu.Muthusamy@gmail.com
SUBJECT: Observer – Dashboard Report
MIME-Version: 1.0
Content-Type: multipart/related;boundary="XYZ"

--XYZ
Content-Type: text/html; charset=ISO-8859-15
Content-Transfer-Encoding: 7bit

<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=ISO-8859-15">
</head>
<body bgcolor="#ffffff" text="#000000">
<img src="cid:part1.0609040" alt="">
</body>
</html>

--XYZ
Content-Type: image/jpeg;name="observare.jpg"
Content-Transfer-Encoding: base64
Content-ID: <part1.0609040>
Content-Disposition: inline; filename="observare.jpg"

$(base64 /optional/images/observare.jpg)

--XYZ--
EOT
}

# Main execution
takesnap
sendmail

echo "Report generation completed at $(date)"`}
        </pre>

        <h2>Automation Setup</h2>
        <p>To run this script every 30 minutes, add it to your crontab:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Edit crontab
crontab -e

# Add this line to run every 30 minutes
*/30 * * * * /path/to/Report_generation.sh`}
        </pre>

        <h2>How It Works</h2>
        <ol>
          <li>
            <strong>PhantomJS Script:</strong> Opens the webpage and waits for
            it to load completely
          </li>
          <li>
            <strong>Viewport Setting:</strong> Sets the browser viewport to
            1200x768 for consistent screenshots
          </li>
          <li>
            <strong>Timeout:</strong> Waits 1 second for any dynamic content to
            load
          </li>
          <li>
            <strong>Rendering:</strong> Captures the webpage as a JPEG image
          </li>
          <li>
            <strong>Email Composition:</strong> Creates a multipart email with
            HTML and inline image
          </li>
          <li>
            <strong>Base64 Encoding:</strong> Converts the image to base64 for
            email attachment
          </li>
          <li>
            <strong>Sendmail:</strong> Sends the email with the inline image
          </li>
        </ol>

        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Automated Screenshots:</strong> Captures live webpages
            without manual intervention
          </li>
          <li>
            <strong>Inline Images:</strong> Images appear directly in the email
            body, not as attachments
          </li>
          <li>
            <strong>Customizable Timing:</strong> Can be scheduled to run at any
            interval
          </li>
          <li>
            <strong>Multiple Recipients:</strong> Can send to multiple email
            addresses
          </li>
          <li>
            <strong>Error Handling:</strong> Includes basic error checking and
            logging
          </li>
        </ul>

        <h2>Potential Enhancements</h2>
        <ul>
          <li>
            <strong>Error Handling:</strong> Add checks for PhantomJS execution
            and email sending
          </li>
          <li>
            <strong>Logging:</strong> Implement proper logging for debugging and
            monitoring
          </li>
          <li>
            <strong>Image Optimization:</strong> Compress images before sending
            to reduce email size
          </li>
          <li>
            <strong>Multiple URLs:</strong> Extend to capture multiple
            dashboards in one email
          </li>
          <li>
            <strong>Conditional Sending:</strong> Only send emails when certain
            conditions are met
          </li>
        </ul>

        <h2>Modern Alternatives</h2>
        <p>While PhantomJS is still functional, modern alternatives include:</p>
        <ul>
          <li>
            <strong>Puppeteer:</strong> Google's headless Chrome automation tool
          </li>
          <li>
            <strong>Playwright:</strong> Microsoft's cross-browser automation
            framework
          </li>
          <li>
            <strong>Selenium:</strong> WebDriver-based automation for multiple
            browsers
          </li>
          <li>
            <strong>Cloud Services:</strong> Services like BrowserStack for
            cloud-based screenshots
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              PhantomJS provides a powerful way to automate webpage screenshots
            </li>
            <li>
              Linux sendmail can handle complex email formatting with inline
              images
            </li>
            <li>Combining tools creates powerful automation solutions</li>
            <li>Cron jobs enable scheduled execution of automation scripts</li>
            <li>Base64 encoding is essential for inline email attachments</li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog in 2014.
            While PhantomJS has been largely superseded by modern tools, the
            principles of web automation and email integration remain relevant
            today.
          </p>
        </footer>
      </article>
    </div>
  );
}
