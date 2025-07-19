import Link from "next/link";

export default function HostWebsiteNodejs() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-6">
        <Link href="/blog/migrated" className="text-blue-600 hover:underline">
          ← Back to migrated posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1>🚀 How to Host Website Using Node.js</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>June 29, 2014</time> • Originally published on
            old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2014.
            While the core concepts remain valid, some examples may use older
            Node.js syntax. Modern Node.js development often uses frameworks
            like Express.js and deployment platforms like Vercel, Netlify, or
            cloud providers.
          </p>
        </div>

        <p>
          Node.js has revolutionized web development by allowing developers to
          use JavaScript on both the client and server side. In this guide, I'll
          show you how to create a simple web server using Node.js and host your
          website.
        </p>

        <h2>Prerequisites</h2>
        <ul>
          <li>Node.js installed on your system</li>
          <li>Basic knowledge of JavaScript</li>
          <li>A text editor (VS Code, Sublime Text, etc.)</li>
        </ul>

        <h2>Step 1: Create Your Project Structure</h2>
        <p>First, create a new directory for your project and initialize it:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`mkdir my-website
cd my-website
npm init -y`}
        </pre>

        <h2>Step 2: Create the Basic Server</h2>
        <p>
          Create a file named <code>server.js</code> with the following content:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    
    if (filePath === './') {
        filePath = './index.html';
    }
    
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(\`Server running at http://localhost:\${PORT}/\`);
});`}
        </pre>

        <h2>Step 3: Create Your HTML File</h2>
        <p>
          Create an <code>index.html</code> file in your project directory:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Node.js Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .header {
            background-color: #f4f4f4;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Welcome to My Node.js Website</h1>
        <p>This website is hosted using Node.js!</p>
    </div>
    
    <div class="content">
        <h2>About This Site</h2>
        <p>This is a simple website created and hosted using Node.js. The server handles:</p>
        <ul>
            <li>Static file serving</li>
            <li>Content-Type detection</li>
            <li>Error handling</li>
            <li>Basic routing</li>
        </ul>
        
        <h2>Features</h2>
        <ul>
            <li>Lightweight and fast</li>
            <li>Easy to customize</li>
            <li>Cross-platform compatibility</li>
            <li>No external dependencies</li>
        </ul>
    </div>
</body>
</html>`}
        </pre>

        <h2>Step 4: Run Your Server</h2>
        <p>Start your server by running:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`node server.js`}
        </pre>

        <p>
          Your website will be available at <code>http://localhost:3000</code>
        </p>

        <h2>Step 5: Adding More Features</h2>
        <p>Let's enhance the server with some additional features:</p>

        <h3>Enhanced Server with Logging</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Simple logging middleware
function logRequest(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(\`[\${timestamp}] \${req.method} \${req.url}\`);
    next();
}

const server = http.createServer((req, res) => {
    // Log the request
    logRequest(req, res, () => {});
    
    let filePath = '.' + req.url;
    
    if (filePath === './') {
        filePath = './index.html';
    }
    
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.ico':
            contentType = 'image/x-icon';
            break;
    }
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Page Not Found</h1><p>The requested page could not be found.</p>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1><p>Something went wrong on the server.</p>');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(\`🚀 Server running at http://localhost:\${PORT}/\`);
    console.log(\`📁 Serving files from: \${__dirname}\`);
});`}
        </pre>

        <h2>Step 6: Adding API Endpoints</h2>
        <p>You can also add simple API endpoints to your server:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    
    // API endpoints
    if (url === '/api/status' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'OK',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        }));
        return;
    }
    
    if (url === '/api/hello' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            message: 'Hello from Node.js!',
            timestamp: new Date().toISOString()
        }));
        return;
    }
    
    // Handle POST requests
    if (url === '/api/echo' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: 'Echo response',
                data: body,
                timestamp: new Date().toISOString()
            }));
        });
        return;
    }
    
    // Serve static files (existing code...)
    let filePath = '.' + url;
    
    if (filePath === './') {
        filePath = './index.html';
    }
    
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Page Not Found</h1>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 - Internal Server Error</h1>');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(\`🚀 Server running at http://localhost:\${PORT}/\`);
    console.log(\`📡 API endpoints available:\`);
    console.log(\`   GET  /api/status - Server status\`);
    console.log(\`   GET  /api/hello  - Hello message\`);
    console.log(\`   POST /api/echo   - Echo POST data\`);
});`}
        </pre>

        <h2>Step 7: Production Deployment</h2>
        <p>For production deployment, consider these options:</p>

        <h3>Using PM2 (Process Manager)</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Install PM2 globally
npm install -g pm2

# Start your application
pm2 start server.js --name "my-website"

# Monitor your application
pm2 monit

# View logs
pm2 logs

# Restart application
pm2 restart my-website

# Stop application
pm2 stop my-website`}
        </pre>

        <h3>Using Environment Variables</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`// Create a .env file
PORT=3000
NODE_ENV=production

// Install dotenv
npm install dotenv

// Update server.js
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(\`Environment: \${NODE_ENV}\`);
console.log(\`Port: \${PORT}\`);`}
        </pre>

        <h2>Step 8: Package.json Configuration</h2>
        <p>
          Update your <code>package.json</code> with scripts:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`{
  "name": "my-website",
  "version": "1.0.0",
  "description": "A simple Node.js website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": ["nodejs", "website", "server"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "dotenv": "^16.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}`}
        </pre>

        <h2>Best Practices</h2>
        <ul>
          <li>
            <strong>Use environment variables</strong> for configuration
          </li>
          <li>
            <strong>Implement proper error handling</strong> for production
          </li>
          <li>
            <strong>Add logging</strong> for debugging and monitoring
          </li>
          <li>
            <strong>Use a process manager</strong> like PM2 for production
          </li>
          <li>
            <strong>Implement security headers</strong> and input validation
          </li>
          <li>
            <strong>Use HTTPS</strong> in production
          </li>
        </ul>

        <h2>Common Issues and Solutions</h2>
        <ul>
          <li>
            <strong>Port already in use:</strong> Change the PORT environment
            variable
          </li>
          <li>
            <strong>File not found errors:</strong> Check file paths and
            permissions
          </li>
          <li>
            <strong>Memory leaks:</strong> Use proper cleanup in event listeners
          </li>
          <li>
            <strong>Performance issues:</strong> Implement caching and
            compression
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>Node.js provides a simple way to create web servers</li>
            <li>
              Static file serving is straightforward with the built-in modules
            </li>
            <li>You can easily add API endpoints to your server</li>
            <li>Use process managers like PM2 for production deployment</li>
            <li>Environment variables help with configuration management</li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog
            old blog in 2014. While the core concepts remain valid,
            modern Node.js development often uses frameworks like Express.js for
            more complex applications.
          </p>
        </footer>
      </article>
    </div>
  );
}
