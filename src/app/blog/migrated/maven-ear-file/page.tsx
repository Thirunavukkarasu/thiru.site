import Link from "next/link";

export default function MavenEarFile() {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="mb-6">
        <Link href="/blog/migrated" className="text-blue-600 hover:underline">
          ← Back to migrated posts
        </Link>
      </div>

      <article>
        <header className="mb-8">
          <h1>📦 How to Create EAR File Using Maven?</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <time>December 20, 2013</time> • Originally published on
            old blog
          </div>
        </header>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            <strong>Note:</strong> This post was originally published in 2013.
            While Maven remains a fundamental build tool, modern Java
            development often uses Gradle or cloud-native approaches. However,
            the principles of multi-module project management remain relevant.
          </p>
        </div>

        <p>
          It's much easier to create and understand the creation process of JAR,
          WAR using Maven build tool. But creation of Enterprise application is
          a bit confusing and yet a bit interesting too with the use of the
          "Reactor" plugin!
        </p>

        <p>
          Just hang on with us for a while to know how to create EAR file using
          Maven build management tool.
        </p>

        <h2>Implementation Part</h2>

        <h3>Step 1: Project Structure</h3>
        <p>
          Consider the following scenario; in my cricket project, I have
          developed three different types of Applications:
        </p>
        <ul>
          <li>
            <strong>myearproject-dhoni-web</strong> – We need to bundle this as
            a separate WAR file using its own pom.xml
          </li>
          <li>
            <strong>myearproject-dravid-web</strong> – We need to bundle this as
            a separate WAR file using its own pom.xml
          </li>
          <li>
            <strong>myearproject-sachin-web</strong> – We need to bundle this as
            a separate WAR file using its own pom.xml
          </li>
        </ul>

        <h3>Step 2: Generate WAR Files</h3>
        <p>
          Once this WAR files generation is completed for all 3 modules, finally
          we need to put it all together and generate an EAR file. Refer to the
          following diagram for reference.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
          <p>
            <strong>Project Structure:</strong>
          </p>
          <pre className="text-sm">
            {`myearproject/
├── pom.xml (parent)
├── myearproject-ear/
│   └── pom.xml (EAR module)
├── myearproject-dhoni-web/
│   └── pom.xml (WAR module)
├── myearproject-dravid-web/
│   └── pom.xml (WAR module)
└── myearproject-sachin-web/
    └── pom.xml (WAR module)`}
          </pre>
        </div>

        <h3>Step 3: Project Aggregation</h3>
        <p>
          Here we have a separate pom.xml file for individual projects which
          would perform WAR file generation. And finally, we need to create a
          special project called "multi-module project" in Maven terms. It will
          not create any JAR or WAR artifacts, it just aggregates all other
          projects as "Modules".
        </p>

        <h2>Multi-Module Project POM File</h2>
        <p>Parent POM file that aggregates all modules:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.mycompany</groupId>
  <artifactId>myearproject</artifactId>
  <packaging>pom</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>myearproject Maven Enterprise Application</name>
  <url>http://maven.apache.org</url>
  <modules>
    <module>myearproject-ear</module>
    <module>myearproject-sachin-web</module>
    <module>myearproject-dravid-web</module>
    <module>myearproject-dhoni-web</module>
  </modules>
</project>`}
        </pre>

        <h2>Module I: myearproject-dhoni-web</h2>
        <p>WAR module for Dhoni web application:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <artifactId>myearproject</artifactId>
        <groupId>com.mycompany</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <groupId>com.mycompany</groupId>
    <artifactId>myearproject-dhoni-web</artifactId>
    <packaging>war</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>myearproject-dhoni-web</name>
    <url>http://maven.apache.org</url>
    <dependencies>
        <dependency>
            <groupId>javax</groupId>
            <artifactId>javaee-web-api</artifactId>
            <version>6.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>`}
        </pre>

        <h2>Module II: myearproject-dravid-web</h2>
        <p>WAR module for Dravid web application:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <artifactId>myearproject</artifactId>
        <groupId>com.mycompany</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <groupId>com.mycompany</groupId>
    <artifactId>myearproject-dravid-web</artifactId>
    <packaging>war</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>myearproject-dravid-web</name>
    <url>http://maven.apache.org</url>
    <dependencies>
        <dependency>
            <groupId>javax</groupId>
            <artifactId>javaee-web-api</artifactId>
            <version>6.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>`}
        </pre>

        <h2>Module III: myearproject-sachin-web</h2>
        <p>WAR module for Sachin web application:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <artifactId>myearproject</artifactId>
        <groupId>com.mycompany</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <groupId>com.mycompany</groupId>
    <artifactId>myearproject-sachin-web</artifactId>
    <packaging>war</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>myearproject-sachin-web</name>
    <url>http://maven.apache.org</url>
    <dependencies>
        <dependency>
            <groupId>javax</groupId>
            <artifactId>javaee-web-api</artifactId>
            <version>6.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>`}
        </pre>

        <h2>Module IV: myearproject-ear</h2>
        <p>EAR module that packages all WAR files:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <artifactId>myearproject</artifactId>
        <groupId>com.mycompany</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <groupId>com.mycompany</groupId>
    <artifactId>myearproject-ear</artifactId>
    <packaging>ear</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>myearproject-ear</name>
    <url>http://maven.apache.org</url>
    
    <dependencies>
        <!-- WAR dependencies -->
        <dependency>
            <groupId>com.mycompany</groupId>
            <artifactId>myearproject-dhoni-web</artifactId>
            <version>1.0-SNAPSHOT</version>
            <type>war</type>
        </dependency>
        <dependency>
            <groupId>com.mycompany</groupId>
            <artifactId>myearproject-dravid-web</artifactId>
            <version>1.0-SNAPSHOT</version>
            <type>war</type>
        </dependency>
        <dependency>
            <groupId>com.mycompany</groupId>
            <artifactId>myearproject-sachin-web</artifactId>
            <version>1.0-SNAPSHOT</version>
            <type>war</type>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-ear-plugin</artifactId>
                <version>3.2.0</version>
                <configuration>
                    <finalName>myearproject</finalName>
                    <applicationName>myearproject</applicationName>
                    <initializeInOrder>true</initializeInOrder>
                    <archive>
                        <manifest>
                            <addClasspath>true</addClasspath>
                        </manifest>
                    </archive>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>`}
        </pre>

        <h2>Application.xml Configuration</h2>
        <p>
          Create the application.xml file in the EAR module's
          src/main/application/META-INF/ directory:
        </p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<application xmlns="http://java.sun.com/xml/ns/javaee" 
             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
             xsi:schemaLocation="http://java.sun.com/xml/ns/javaee 
             http://java.sun.com/xml/ns/javaee/application_6.xsd"
             version="6">
    <display-name>myearproject</display-name>
    <description>My Enterprise Application</description>
    
    <!-- Web modules -->
    <module>
        <web>
            <web-uri>myearproject-dhoni-web-1.0-SNAPSHOT.war</web-uri>
            <context-root>/dhoni</context-root>
        </web>
    </module>
    
    <module>
        <web>
            <web-uri>myearproject-dravid-web-1.0-SNAPSHOT.war</web-uri>
            <context-root>/dravid</context-root>
        </web>
    </module>
    
    <module>
        <web>
            <web-uri>myearproject-sachin-web-1.0-SNAPSHOT.war</web-uri>
            <context-root>/sachin</context-root>
        </web>
    </module>
</application>`}
        </pre>

        <h2>Build Commands</h2>
        <p>Commands to build the entire project:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# Build all modules
mvn clean install

# Build only the EAR module
mvn clean install -pl myearproject-ear

# Build with specific profile
mvn clean install -Pproduction

# Build with debug information
mvn clean install -X`}
        </pre>

        <h2>Advanced EAR Configuration</h2>
        <p>Enhanced EAR plugin configuration with additional options:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-ear-plugin</artifactId>
    <version>3.2.0</version>
    <configuration>
        <finalName>myearproject</finalName>
        <applicationName>myearproject</applicationName>
        <initializeInOrder>true</initializeInOrder>
        <archive>
            <manifest>
                <addClasspath>true</addClasspath>
                <classpathPrefix>lib/</classpathPrefix>
            </manifest>
        </archive>
        
        <!-- Web module configuration -->
        <webModule>
            <groupId>com.mycompany</groupId>
            <artifactId>myearproject-dhoni-web</artifactId>
            <contextRoot>/dhoni</contextRoot>
        </webModule>
        <webModule>
            <groupId>com.mycompany</groupId>
            <artifactId>myearproject-dravid-web</artifactId>
            <contextRoot>/dravid</contextRoot>
        </webModule>
        <webModule>
            <groupId>com.mycompany</groupId>
            <artifactId>myearproject-sachin-web</artifactId>
            <contextRoot>/sachin</contextRoot>
        </webModule>
        
        <!-- Security configuration -->
        <security>
            <securityRole>
                <roleName>admin</roleName>
                <principalName>admin</principalName>
            </securityRole>
        </security>
    </configuration>
</plugin>`}
        </pre>

        <h2>Multi-Module Project Best Practices</h2>
        <ul>
          <li>
            <strong>Parent POM:</strong> Define common properties and
            dependencies in parent POM
          </li>
          <li>
            <strong>Version Management:</strong> Use dependency management for
            consistent versions
          </li>
          <li>
            <strong>Module Order:</strong> Ensure proper build order with
            dependencies
          </li>
          <li>
            <strong>Profiles:</strong> Use Maven profiles for different
            environments
          </li>
          <li>
            <strong>Testing:</strong> Include integration tests for EAR
            deployment
          </li>
          <li>
            <strong>Documentation:</strong> Document module dependencies and
            relationships
          </li>
        </ul>

        <h2>Parent POM with Dependency Management</h2>
        <p>Enhanced parent POM with dependency management:</p>

        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" 
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.mycompany</groupId>
  <artifactId>myearproject</artifactId>
  <packaging>pom</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>myearproject Maven Enterprise Application</name>
  <url>http://maven.apache.org</url>
  
  <properties>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <javaee.version>6.0</javaee.version>
    <maven-ear-plugin.version>3.2.0</maven-ear-plugin.version>
  </properties>
  
  <modules>
    <module>myearproject-ear</module>
    <module>myearproject-sachin-web</module>
    <module>myearproject-dravid-web</module>
    <module>myearproject-dhoni-web</module>
  </modules>
  
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>javax</groupId>
        <artifactId>javaee-web-api</artifactId>
        <version>\${javaee.version}</version>
        <scope>provided</scope>
      </dependency>
      <dependency>
        <groupId>com.mycompany</groupId>
        <artifactId>myearproject-dhoni-web</artifactId>
        <version>\${project.version}</version>
        <type>war</type>
      </dependency>
      <dependency>
        <groupId>com.mycompany</groupId>
        <artifactId>myearproject-dravid-web</artifactId>
        <version>\${project.version}</version>
        <type>war</type>
      </dependency>
      <dependency>
        <groupId>com.mycompany</groupId>
        <artifactId>myearproject-sachin-web</artifactId>
        <version>\${project.version}</version>
        <type>war</type>
      </dependency>
    </dependencies>
  </dependencyManagement>
  
  <build>
    <pluginManagement>
      <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-ear-plugin</artifactId>
          <version>\${maven-ear-plugin.version}</version>
        </plugin>
      </plugins>
    </pluginManagement>
  </build>
</project>`}
        </pre>

        <h2>Deployment Configuration</h2>
        <p>
          Example deployment configuration for different application servers:
        </p>

        <h3>WebLogic Deployment</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# WebLogic deployment command
java weblogic.Deployer -adminurl t3://localhost:7001 -username weblogic -password weblogic123 -deploy -name myearproject -source myearproject-ear/target/myearproject.ear`}
        </pre>

        <h3>JBoss Deployment</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
          {`# JBoss deployment command
cp myearproject-ear/target/myearproject.ear /opt/jboss/standalone/deployments/`}
        </pre>

        <h2>Modern Alternatives</h2>
        <p>
          While Maven EAR projects are still valid, modern alternatives include:
        </p>
        <ul>
          <li>
            <strong>Microservices:</strong> Deploy individual WAR files as
            separate services
          </li>
          <li>
            <strong>Docker Containers:</strong> Containerize each web
            application
          </li>
          <li>
            <strong>Kubernetes:</strong> Orchestrate microservices with
            Kubernetes
          </li>
          <li>
            <strong>Spring Boot:</strong> Use embedded containers instead of EAR
            deployment
          </li>
          <li>
            <strong>Cloud Platforms:</strong> Deploy to cloud platforms like
            AWS, Azure, GCP
          </li>
          <li>
            <strong>Gradle:</strong> Use Gradle for more flexible build
            configuration
          </li>
        </ul>

        <h2>Troubleshooting</h2>
        <p>Common issues and solutions:</p>
        <ul>
          <li>
            <strong>Classpath Issues:</strong> Ensure proper classpath
            configuration in application.xml
          </li>
          <li>
            <strong>Version Conflicts:</strong> Use dependency management to
            resolve conflicts
          </li>
          <li>
            <strong>Build Order:</strong> Verify module dependencies and build
            order
          </li>
          <li>
            <strong>Deployment Failures:</strong> Check application server logs
            for deployment errors
          </li>
          <li>
            <strong>Context Root Conflicts:</strong> Ensure unique context roots
            for web modules
          </li>
        </ul>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
          <h3>Key Takeaways</h3>
          <ul>
            <li>
              Maven multi-module projects enable complex enterprise application
              packaging
            </li>
            <li>
              EAR files provide a way to deploy multiple web applications as a
              single unit
            </li>
            <li>
              Proper dependency management is essential for successful builds
            </li>
            <li>
              Application.xml configuration defines the deployment structure
            </li>
            <li>Modern alternatives offer more flexibility and scalability</li>
          </ul>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            This post was originally published on my old technical blog
            old blog in 2013. While enterprise application packaging has
            evolved, the principles of multi-module project management remain
            fundamental to complex Java applications.
          </p>
        </footer>
      </article>
    </div>
  );
}
