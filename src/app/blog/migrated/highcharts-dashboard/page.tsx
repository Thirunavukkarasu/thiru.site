import Link from "next/link";

export default function HighchartsDashboard() {
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
            📊 Graphical Report Generation Using High Charts JS Plugin –
            Monitoring Dashboard
          </h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>June 29, 2014</time> • Originally published on old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2014.
            While HighCharts remains a powerful charting library, modern
            alternatives include Chart.js, D3.js, and cloud-based solutions. The
            principles of dashboard development and data visualization remain
            relevant.
          </p>
        </div>

        <p>
          For the past few months, I have been working on developing a Dashboard
          application which displays various backlog trends of our application.
          I was desperately looking for some open source graphical tools which
          would help us convert tabular or JSON data to graphical format.
        </p>

        <p>
          Initially, I just gave a try with Google Visualization API, but over
          time it seemed to be very painful to work with. During that phase, I
          got to know about the "High Charts" jQuery plugin.
        </p>

        <h2>Technologies Used</h2>
        <ol>
          <li>
            <strong>Twitter Bootstrap</strong> – CSS framework
          </li>
          <li>
            <strong>Highcharts</strong> – jQuery Plugin
          </li>
          <li>
            <strong>jQuery</strong> – JavaScript framework
          </li>
        </ol>

        <h2>Demo</h2>
        <p>
          Use the below link to see the demo of the "Observare – Monitoring
          Dashboard". I've pasted a snapshot of it below.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <p>
            <strong>Observare Dashboard Demo:</strong>
          </p>
          <a
            href="http://anjuwedssrini.com/Demos/HighCharts-Demo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            http://anjuwedssrini.com/Demos/HighCharts-Demo/
          </a>
        </div>

        <h2>Download</h2>
        <p>
          The source code of this Highcharts-Demo can be downloaded from GitHub.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <p>
            <strong>GitHub Repository:</strong>
          </p>
          <a
            href="https://github.com/Thirunavukkarasu/HighCharts-Demo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://github.com/Thirunavukkarasu/HighCharts-Demo
          </a>
        </div>

        <h2>Explanation</h2>

        <h3>Step 1: Create Container Divs</h3>
        <p>
          First, create as many divs as you want (equivalent to the number of
          charts) inside the parent container. Specify a unique ID for each div
          element, as we need to refer to it from JavaScript later on.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<div class="container-fluid">   
    <div class="row">   
        <div class="container-fluid">   
            <div class="row">   
                <div class="col-md-4" id="container1">   
                </div>   
                <div class="col-md-4" id="container2">   
                </div>   
                <div class="col-md-4" id="container3">   
                </div>   
            </div>   
            <div class="row">   
                <div class="col-md-4" id="container4">   
                </div>   
                <div class="col-md-4" id="container5">   
                </div>   
                <div class="col-md-4" id="container6">   
                </div>   
            </div>   
        </div>   
    </div>   
</div>`}
        </pre>

        <h3>Step 2: Consume JSON Data</h3>
        <p>
          Consume the JSON using jQuery's <code>$.getJSON()</code> function as
          follows. Inside the options, you have to specify the rendering part of
          the chart using the <code>renderTo</code> function. You can refer to
          the following Stack Overflow question for better reference.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <p>
            <strong>Stack Overflow Reference:</strong>
          </p>
          <a
            href="http://stackoverflow.com/questions/20442147/how-to-convert-html-table-to-chart/20468101#20468101"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            How to convert HTML table to chart
          </a>
        </div>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`$(document).ready(function() {   
    drawChart1();   
});

function drawChart1()   
{   
    var options = {
        chart: {
            renderTo: 'container1',
            type: 'area'
        },
        credits: {
            enabled: false
        },
        series: [{ }],
        title: {
            text: 'Backlog-Trend-1'
        },
        xAxis: {
            title: {
                text: 'Hour'
            }
        }
    };   
    
    $.getJSON('json/Chart1.json', function(data) {   
        options.series = data;   
        var chart = new Highcharts.Chart(options);   
    });   
}`}
        </pre>

        <h2>Complete Implementation Example</h2>
        <p>Here's a complete example showing how to create multiple charts:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<!DOCTYPE html>
<html>
<head>
    <title>Observare Dashboard</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="js/jquery.min.js"></script>
    <script src="js/highcharts.js"></script>
</head>
<body>
    <div class="container-fluid">   
        <div class="row">   
            <div class="col-md-4" id="container1"></div>   
            <div class="col-md-4" id="container2"></div>   
            <div class="col-md-4" id="container3"></div>   
        </div>   
        <div class="row">   
            <div class="col-md-4" id="container4"></div>   
            <div class="col-md-4" id="container5"></div>   
            <div class="col-md-4" id="container6"></div>   
        </div>   
    </div>

    <script>
        $(document).ready(function() {   
            drawChart1();   
            drawChart2();   
            drawChart3();   
        });

        function drawChart1() {   
            var options = {
                chart: {
                    renderTo: 'container1',
                    type: 'area'
                },
                credits: {
                    enabled: false
                },
                series: [{ }],
                title: {
                    text: 'Backlog-Trend-1'
                },
                xAxis: {
                    title: {
                        text: 'Hour'
                    }
                }
            };   
            
            $.getJSON('json/Chart1.json', function(data) {   
                options.series = data;   
                var chart = new Highcharts.Chart(options);   
            });   
        }

        function drawChart2() {   
            var options = {
                chart: {
                    renderTo: 'container2',
                    type: 'line'
                },
                credits: {
                    enabled: false
                },
                series: [{ }],
                title: {
                    text: 'Backlog-Trend-2'
                },
                xAxis: {
                    title: {
                        text: 'Day'
                    }
                }
            };   
            
            $.getJSON('json/Chart2.json', function(data) {   
                options.series = data;   
                var chart = new Highcharts.Chart(options);   
            });   
        }
    </script>
</body>
</html>`}
        </pre>

        <h2>JSON Data Structure</h2>
        <p>Example of the JSON data structure for the charts:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`[
    {
        "name": "Backlog Items",
        "data": [
            [0, 10],
            [1, 15],
            [2, 12],
            [3, 18],
            [4, 20],
            [5, 16],
            [6, 14],
            [7, 22],
            [8, 19],
            [9, 25],
            [10, 21],
            [11, 17]
        ]
    },
    {
        "name": "Resolved Items",
        "data": [
            [0, 8],
            [1, 12],
            [2, 10],
            [3, 15],
            [4, 18],
            [5, 14],
            [6, 12],
            [7, 20],
            [8, 17],
            [9, 23],
            [10, 19],
            [11, 15]
        ]
    }
]`}
        </pre>

        <h2>Key Features of HighCharts</h2>
        <ul>
          <li>
            <strong>Interactive Charts:</strong> Zoom, pan, and drill-down
            capabilities
          </li>
          <li>
            <strong>Multiple Chart Types:</strong> Line, area, bar, pie,
            scatter, and more
          </li>
          <li>
            <strong>Responsive Design:</strong> Charts adapt to different screen
            sizes
          </li>
          <li>
            <strong>Export Options:</strong> Export charts as PNG, JPEG, PDF, or
            SVG
          </li>
          <li>
            <strong>Animation:</strong> Smooth animations and transitions
          </li>
          <li>
            <strong>Accessibility:</strong> Screen reader support and keyboard
            navigation
          </li>
        </ul>

        <h2>Dashboard Best Practices</h2>
        <ul>
          <li>
            <strong>Consistent Design:</strong> Use consistent colors and
            styling across all charts
          </li>
          <li>
            <strong>Clear Labels:</strong> Provide clear titles and axis labels
          </li>
          <li>
            <strong>Responsive Layout:</strong> Use Bootstrap grid system for
            responsive design
          </li>
          <li>
            <strong>Performance:</strong> Load data asynchronously to avoid
            blocking the UI
          </li>
          <li>
            <strong>Error Handling:</strong> Handle cases where JSON data fails
            to load
          </li>
          <li>
            <strong>Loading States:</strong> Show loading indicators while data
            is being fetched
          </li>
        </ul>

        <h2>Modern Alternatives</h2>
        <p>While HighCharts is still powerful, modern alternatives include:</p>
        <ul>
          <li>
            <strong>Chart.js:</strong> Lightweight, responsive charting library
          </li>
          <li>
            <strong>D3.js:</strong> Powerful data visualization library for
            custom charts
          </li>
          <li>
            <strong>Recharts:</strong> React-based charting library
          </li>
          <li>
            <strong>Apache ECharts:</strong> Feature-rich charting library
          </li>
          <li>
            <strong>Plotly.js:</strong> Scientific and technical charting
          </li>
          <li>
            <strong>Cloud Solutions:</strong> Tableau, Power BI, or Google Data
            Studio
          </li>
        </ul>

        <h2>Enhanced Implementation</h2>
        <p>
          Here's an enhanced version with error handling and loading states:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`function drawChart(containerId, jsonUrl, chartTitle, xAxisTitle) {   
    var options = {
        chart: {
            renderTo: containerId,
            type: 'area',
            height: 300
        },
        credits: {
            enabled: false
        },
        loading: {
            hideDuration: 1000,
            showDuration: 1000
        },
        series: [{ }],
        title: {
            text: chartTitle
        },
        xAxis: {
            title: {
                text: xAxisTitle
            }
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        }
    };   
    
    // Show loading state
    $('#' + containerId).html('<div class="text-center"><i class="fa fa-spinner fa-spin"></i> Loading...</div>');
    
    $.getJSON(jsonUrl, function(data) {   
        options.series = data;   
        var chart = new Highcharts.Chart(options);   
    }).fail(function(jqXHR, textStatus, errorThrown) {
        $('#' + containerId).html('<div class="alert alert-danger">Failed to load chart data</div>');
        console.error('Chart loading failed:', textStatus, errorThrown);
    });   
}`}
        </pre>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              HighCharts provides powerful, interactive charting capabilities
            </li>
            <li>
              Bootstrap integration creates responsive, mobile-friendly
              dashboards
            </li>
            <li>JSON data consumption enables dynamic chart generation</li>
            <li>
              Proper container management is essential for multiple charts
            </li>
            <li>Error handling and loading states improve user experience</li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog in 2014.
            While charting libraries have evolved, the principles of dashboard
            development and data visualization remain fundamental to modern web
            applications.
          </p>
        </footer>
      </article>
    </div>
  );
}
