import Link from "next/link";

export default function MavenHudsonBuild() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-6">
        <Link href="/blog/migrated" className="text-blue-600 hover:underline">
          ← Back to migrated posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1>⚙️ How to Create a Maven Build Job with Hudson?</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>December 20, 2013</time> • Originally published on
            old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2013.
            Hudson has been largely superseded by Jenkins, but the principles of
            CI/CD and Maven integration remain fundamental. Modern CI/CD
            platforms include GitHub Actions, GitLab CI, and cloud-based
            solutions.
          </p>
        </div>

        <p>
          In this article, we will see how to create a simple Maven build job
          that would create a WAR file with the help of a Continuous Integration
          (CI) server.
        </p>

        <h2>Step 1: Create New Job</h2>
        <p>
          To build a Maven 2/3 project (Legacy), Hudson takes advantage of your
          POM files and drastically reduces the configuration.
        </p>

        <ol>
          <li>Click on "New Job" in the Hudson dashboard</li>
          <li>Enter a job name (e.g., "MyMavenProject")</li>
          <li>Select "Build a maven2/3 project"</li>
          <li>Click "OK"</li>
        </ol>

        <h2>Step 2: Configure Source Code Management</h2>
        <p>
          In the Source Code Management section, select your "SCM". In my case,
          it's "Apache Subversion". Select it and specify the "Repository URL".
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`Repository URL: https://svn.example.com/trunk/myproject
Credentials: username/password (if required)`}
        </pre>

        <p>
          If your repository has some credentials set to checkout the code,
          update them.
        </p>

        <h2>Step 3: Configure Build Settings</h2>
        <p>
          Under the build section, in the Root POM field, specify the pom file
          name.
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`Root POM: pom.xml
Goals and options: clean install`}
        </pre>

        <h2>Step 4: Save and Build</h2>
        <p>
          Do you believe that we have done with the Maven build configuration
          setup in Hudson? The truth is, it's completed. Save the project. In
          the Hudson main Dashboard page, you will be able to view all the
          projects created.
        </p>

        <h2>Step 5: Execute the Build</h2>
        <p>
          Once everything is done, just click the "Build now" button in the left
          pane of the Hudson console for action.
        </p>

        <h2>Step 6: Monitor Build Output</h2>
        <p>Just now open up the console to check the output.</p>

        <h2>Complete Configuration Example</h2>
        <p>Here's a complete example of a Maven job configuration:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`Job Name: MyMavenProject
Job Type: Build a maven2/3 project

Source Code Management:
  - Type: Subversion
  - Repository URL: https://svn.example.com/trunk/myproject
  - Credentials: username/password

Build Triggers:
  - Poll SCM: H/15 * * * * (every 15 minutes)
  - Build after other projects are built

Build:
  - Root POM: pom.xml
  - Goals and options: clean install -DskipTests
  - Use private Maven repository: true

Post-build Actions:
  - Archive the artifacts: **/*.war
  - Build other projects
  - Email notification`}
        </pre>

        <h2>Advanced Maven Configuration</h2>
        <p>
          For more complex Maven builds, you can configure additional options:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`Goals and options: 
clean install -DskipTests -Dmaven.test.skip=true -Pproduction

Maven version: Maven 3.6.3
JDK: JDK 1.8

Build Environment:
  - Add timestamps to the Console Output
  - Use secret text(s) or file(s)
  - Abort the build if it's stuck

Pre Steps:
  - Execute shell: echo "Starting build at $(date)"
  - Execute Windows batch command
  - Invoke Ant
  - Invoke Gradle script

Post Steps:
  - Execute shell: echo "Build completed at $(date)"
  - Execute Windows batch command
  - Invoke Ant
  - Invoke Gradle script`}
        </pre>

        <h2>Maven Goals and Options</h2>
        <p>Common Maven goals and options for different build scenarios:</p>

        <ul>
          <li>
            <strong>Clean Build:</strong> <code>clean install</code>
          </li>
          <li>
            <strong>Skip Tests:</strong> <code>clean install -DskipTests</code>
          </li>
          <li>
            <strong>Production Profile:</strong>{" "}
            <code>clean install -Pproduction</code>
          </li>
          <li>
            <strong>Debug Mode:</strong> <code>clean install -X</code>
          </li>
          <li>
            <strong>Offline Mode:</strong> <code>clean install -o</code>
          </li>
          <li>
            <strong>Parallel Build:</strong> <code>clean install -T 4</code>
          </li>
        </ul>

        <h2>Build Triggers</h2>
        <p>Different ways to trigger Maven builds:</p>

        <ul>
          <li>
            <strong>Poll SCM:</strong> Check for changes in source code
            repository
          </li>
          <li>
            <strong>Build Periodically:</strong> Schedule builds at specific
            intervals
          </li>
          <li>
            <strong>Build after other projects are built:</strong> Trigger after
            dependent projects
          </li>
          <li>
            <strong>Trigger builds remotely:</strong> Allow external triggers
            via URL
          </li>
          <li>
            <strong>GitHub hook trigger:</strong> Trigger on GitHub push events
          </li>
        </ul>

        <h2>Post-Build Actions</h2>
        <p>Actions to perform after a successful build:</p>

        <ul>
          <li>
            <strong>Archive the artifacts:</strong> Store build outputs (WAR,
            JAR files)
          </li>
          <li>
            <strong>Build other projects:</strong> Trigger downstream projects
          </li>
          <li>
            <strong>Email notification:</strong> Send build results via email
          </li>
          <li>
            <strong>Publish JUnit test result report:</strong> Display test
            results
          </li>
          <li>
            <strong>Publish Cobertura Coverage Report:</strong> Show code
            coverage
          </li>
          <li>
            <strong>Deploy to container:</strong> Deploy to Tomcat, JBoss, etc.
          </li>
        </ul>

        <h2>Maven POM Configuration</h2>
        <p>Example of a Maven POM file for web application:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <groupId>com.example</groupId>
    <artifactId>my-webapp</artifactId>
    <packaging>war</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>My Web Application</name>
    
    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    
    <dependencies>
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <finalName>\${project.artifactId}</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.3.2</version>
                <configuration>
                    <failOnMissingWebXml>false</failOnMissingWebXml>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.0.0-M5</version>
            </plugin>
        </plugins>
    </build>
</project>`}
        </pre>

        <h2>Build Scripts</h2>
        <p>Example shell scripts for pre and post-build actions:</p>

        <h3>Pre-Build Script</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`#!/bin/bash
# Pre-build script
echo "Starting Maven build at $(date)"
echo "Java version: $(java -version)"
echo "Maven version: $(mvn -version)"

# Clean workspace
rm -rf target/
rm -rf *.war

# Set environment variables
export MAVEN_OPTS="-Xmx2048m -XX:MaxPermSize=512m"

echo "Pre-build setup completed"`}
        </pre>

        <h3>Post-Build Script</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`#!/bin/bash
# Post-build script
echo "Build completed at $(date)"

# Copy artifacts to deployment directory
if [ -f "target/*.war" ]; then
    cp target/*.war /opt/deployments/
    echo "WAR file copied to deployment directory"
fi

# Send notification
echo "Build status: $BUILD_STATUS"
if [ "$BUILD_STATUS" = "SUCCESS" ]; then
    echo "Build successful - ready for deployment"
else
    echo "Build failed - check logs for details"
fi`}
        </pre>

        <h2>Modern Alternatives to Hudson</h2>
        <p>
          While Hudson is still functional, modern CI/CD alternatives include:
        </p>
        <ul>
          <li>
            <strong>Jenkins:</strong> Fork of Hudson with active development
          </li>
          <li>
            <strong>GitHub Actions:</strong> Native CI/CD for GitHub
            repositories
          </li>
          <li>
            <strong>GitLab CI:</strong> Integrated CI/CD for GitLab
          </li>
          <li>
            <strong>Azure DevOps:</strong> Microsoft's CI/CD platform
          </li>
          <li>
            <strong>CircleCI:</strong> Cloud-based CI/CD platform
          </li>
          <li>
            <strong>Travis CI:</strong> Hosted CI service
          </li>
          <li>
            <strong>Bamboo:</strong> Atlassian's CI/CD tool
          </li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>
            <strong>Use Maven Wrapper:</strong> Include Maven wrapper for
            consistent builds
          </li>
          <li>
            <strong>Cache Dependencies:</strong> Configure Maven dependency
            caching
          </li>
          <li>
            <strong>Parallel Execution:</strong> Use Maven parallel builds for
            faster execution
          </li>
          <li>
            <strong>Artifact Management:</strong> Use artifact repositories
            (Nexus, Artifactory)
          </li>
          <li>
            <strong>Build Optimization:</strong> Skip unnecessary phases and
            tests when appropriate
          </li>
          <li>
            <strong>Monitoring:</strong> Set up build monitoring and alerting
          </li>
        </ul>

        <h2>Troubleshooting</h2>
        <p>Common issues and solutions:</p>
        <ul>
          <li>
            <strong>Memory Issues:</strong> Increase MAVEN_OPTS heap size
          </li>
          <li>
            <strong>Network Timeouts:</strong> Configure Maven timeout settings
          </li>
          <li>
            <strong>Dependency Issues:</strong> Clear local Maven repository
            cache
          </li>
          <li>
            <strong>Permission Issues:</strong> Ensure proper file permissions
          </li>
          <li>
            <strong>JDK Version Mismatch:</strong> Verify Java version
            compatibility
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              Hudson/Jenkins provides powerful CI/CD capabilities for Maven
              projects
            </li>
            <li>
              Proper Maven configuration is essential for successful builds
            </li>
            <li>
              Build triggers and post-build actions automate the deployment
              pipeline
            </li>
            <li>
              Modern CI/CD platforms offer more features and better integration
            </li>
            <li>
              Best practices ensure reliable and efficient build processes
            </li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog
            old blog in 2013. While CI/CD tools have evolved
            significantly, the principles of automated builds and continuous
            integration remain fundamental to modern software development.
          </p>
        </footer>
      </article>
    </div>
  );
}
