import Link from "next/link";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/date";
import { getBlogPosts } from "../db/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Engineering Leadership & Technical Insights",
  description:
    "Thoughts, ideas, and projects on engineering leadership, team building, system architecture, and technical development. Including migrated posts from 2014 covering Java, Node.js, and system administration.",
  keywords: [
    "Engineering Leadership",
    "Technical Blog",
    "System Architecture",
    "Team Building",
    "Developer Experience",
    "Java Programming",
    "Node.js Development",
    "System Administration",
    "Automation Scripts",
    "WebLogic Administration",
    "Maven Build Automation",
    "HighCharts Dashboard",
    "PhantomJS Automation",
    "SAR System Monitoring",
  ],
  openGraph: {
    title: "Blog - Engineering Leadership & Technical Insights",
    description:
      "Thoughts, ideas, and projects on engineering leadership, team building, system architecture, and technical development.",
    url: "https://thiru.site/blog",
    siteName: "Thirunavukkarasu Muthusamy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog - Engineering Leadership & Technical Insights",
    description:
      "Thoughts, ideas, and projects on engineering leadership, team building, system architecture, and technical development.",
  },
  alternates: {
    canonical: "https://thiru.site/blog",
  },
};

export default async function BlogPage() {
  let allPosts = getBlogPosts();
  const posts = allPosts.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="prose">
      <p>A collection of thoughts, ideas, and projects.</p>

      <h2>Recent Posts</h2>

      <ul className="simple-list">
        {posts?.map((post: any, idx: any) => (
          <li key={idx}>
            <a href={`/blog/${post.slug}`}>{post.metadata.title}</a>
            <span className="text-muted-foreground ml-2">
              {formatDate(post.metadata.publishedAt)}
            </span>
          </li>
        ))}
      </ul>

      <h2>Migrated from Old Blog (2014)</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Technical posts from my old blog covering Java, Node.js, system
        administration, and automation.
      </p>

      <ul className="simple-list">
        <li>
          <a href="/blog/migrated/non-access-modifiers-java">
            🏗️ Non-Access Modifiers in Java
          </a>
          <span className="text-muted-foreground ml-2">June 29, 2014</span>
        </li>
        <li>
          <a href="/blog/migrated/host-website-nodejs">
            🚀 How to Host Website Using Node.js
          </a>
          <span className="text-muted-foreground ml-2">June 29, 2014</span>
        </li>
        <li>
          <a href="/blog/migrated/phantomjs-screenshot-automation">
            📸 PhantomJS Screenshot Automation
          </a>
          <span className="text-muted-foreground ml-2">June 29, 2014</span>
        </li>
        <li>
          <a href="/blog/migrated/ksar-monthly-report">
            📊 KSAR Monthly Report Automation
          </a>
          <span className="text-muted-foreground ml-2">June 29, 2014</span>
        </li>
        <li>
          <a href="/blog/migrated/sar-background">
            🔧 Little Background About SAR
          </a>
          <span className="text-muted-foreground ml-2">June 29, 2014</span>
        </li>
        <li>
          <a href="/blog/migrated/highcharts-dashboard">
            📊 HighCharts Dashboard Development
          </a>
          <span className="text-muted-foreground ml-2">June 29, 2014</span>
        </li>
        <li>
          <a href="/blog/migrated/apache-weblogic-integration">
            🔗 Apache WebLogic Integration
          </a>
          <span className="text-muted-foreground ml-2">January 19, 2014</span>
        </li>
        <li>
          <a href="/blog/migrated/maven-hudson-build">
            ⚙️ Maven Hudson Build Jobs
          </a>
          <span className="text-muted-foreground ml-2">December 20, 2013</span>
        </li>
        <li>
          <a href="/blog/migrated/maven-ear-file">📦 Maven EAR File Creation</a>
          <span className="text-muted-foreground ml-2">December 20, 2013</span>
        </li>
      </ul>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-sm">
          <Link href="/blog/migrated" className="text-blue-600 hover:underline">
            View detailed overview of migrated posts →
          </Link>
        </p>
      </div>

      <h2>🔬 Lab</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Experimental features, side projects, and creative experiments. A
        playground for trying new ideas.
      </p>

      <ul className="simple-list">
        <li>
          <a href="/experiments/books">📚 Reading Journey</a>
          <span className="text-muted-foreground ml-2">
            Track reading goals and progress
          </span>
        </li>
        <li>
          <a href="/experiments">🎨 More Experiments</a>
          <span className="text-muted-foreground ml-2">
            View all experimental features
          </span>
        </li>
      </ul>
    </div>
  );
}
