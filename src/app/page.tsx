import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SocialLinks from "./social-links";

export const metadata: Metadata = {
  title: "Thirunavukkarasu Muthusamy - Engineering Director & Architect",
  description:
    "Engineering Director & Architect at Kalvium with 13+ years of experience in engineering leadership, system architecture, and building scalable technology teams. Fullstack developer focused on developer experience and product development.",
  keywords: [
    "Engineering Director",
    "Engineering Architect",
    "Kalvium",
    "Engineering Leadership",
    "System Architecture",
    "Fullstack Developer",
    "Developer Experience",
    "Team Building",
    "Product Development",
    "Technology Leadership",
    "Software Architecture",
    "Engineering Management",
    "Technical Leadership",
    "B2B Products",
    "EdTech",
    "Formzillion",
  ],
  openGraph: {
    title: "Thirunavukkarasu Muthusamy - Engineering Director & Architect",
    description:
      "Engineering Director & Architect at Kalvium with 13+ years of experience in engineering leadership, system architecture, and building scalable technology teams.",
    url: "https://thiru.site",
    siteName: "Thirunavukkarasu Muthusamy",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/3192747?v=4",
        width: 400,
        height: 400,
        alt: "Thirunavukkarasu Muthusamy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thirunavukkarasu Muthusamy - Engineering Director & Architect",
    description:
      "Engineering Director & Architect at Kalvium with 13+ years of experience in engineering leadership and system architecture.",
    images: ["https://avatars.githubusercontent.com/u/3192747?v=4"],
    creator: "@thirunavukkarasu",
  },
  alternates: {
    canonical: "https://thiru.site",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thirunavukkarasu Muthusamy",
    jobTitle: "Engineering Director & Architect",
    worksFor: {
      "@type": "Organization",
      name: "Kalvium",
    },
    description:
      "Engineering Director & Architect at Kalvium with 13+ years of experience in engineering leadership, system architecture, and building scalable technology teams.",
    url: "https://thiru.site",
    image: "https://avatars.githubusercontent.com/u/3192747?v=4",
    sameAs: [
      "https://github.com/Thirunavukkarasu",
      "https://linkedin.com/in/thirunavukkarasu",
    ],
    knowsAbout: [
      "Engineering Leadership",
      "System Architecture",
      "Fullstack Development",
      "Developer Experience",
      "Team Building",
      "Product Development",
      "B2B Products",
      "EdTech",
      "Java",
      "Node.js",
      "System Administration",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Engineering Director",
      description:
        "Leading engineering teams and scaling technology operations",
    },
  };

  return (
    <div className="prose">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="text-center mb-8">
        <Image
          src="https://avatars.githubusercontent.com/u/3192747?v=4"
          alt="Thirunavukkarasu Muthusamy"
          width={80}
          height={80}
          className="rounded-full mx-auto"
          priority
        />
        <SocialLinks />
      </div>

      <p>
        Hi there! I'm a fullstack developer who's spent the last 13+ years
        building products and scaling technology teams. I actively code and
        focus on setting up codebases and developer experience for my
        engineering team. I write about engineering leadership, team building,
        and the occasional tech rabbit hole I fall into.
      </p>

      <p>
        <a href="/about">Learn more about my background →</a>
      </p>

      <h2>Some things I've worked on</h2>

      <ul>
        <li>Building B2B products that solve real business problems</li>
        <li>Leading engineering teams and scaling technology operations</li>
        <li>Mentoring developers and building strong engineering cultures</li>
        <li>Architecting systems that handle complex business logic</li>
        <li>Contributing to edtech platforms that impact student learning</li>
        <li>Setting up developer experience and codebase infrastructure</li>
        <li>Delivering quality products under tight deadlines</li>
        <li>Creating scalable solutions for growing businesses</li>
        <li>
          Building open-source products like{" "}
          <a href="https://formzillion.com/" target="_blank" rel="noopener">
            Formzillion
          </a>{" "}
          that launched successfully on Product Hunt
        </li>
      </ul>

      <h2>Things I believe</h2>

      <h4>⚙️ developer experience drives user experience</h4>
      <ul>
        <li>
          developer experience is vital for building shipping fast engineering
          teams
        </li>
        <li>
          outdated technology stack is harmful for engineering teams to ship
          fast
        </li>
        <li>
          without fixing developer experience, fixing anything else doesn't
          matter
        </li>
        <li>great developer experience enables great user experience</li>
      </ul>

      <h4>🚀 shipping fast beats the best strategy</h4>
      <ul>
        <li>
          speed is a <em>superpower</em>
        </li>
        <li>create a bias toward shipping</li>
        <li>
          {" "}
          <a
            href="https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819"
            target="_blank"
            rel="noopener"
          >
            small teams
          </a>{" "}
          ship faster
        </li>
        <li>
          landings &gt; launches (i.e. product adoption &gt; shipping code)
        </li>
        <li>listen, build, ship, tell the customer, then repeat forever</li>
      </ul>

      <h4>⚡ quality over scale</h4>
      <ul>
        <li>building amazing products for fewer users is just as valuable</li>
        <li>user impact drives technical decisions</li>
        <li>
          technical debt is a{" "}
          <a
            href="https://martinfowler.com/articles/is-quality-worth-cost.html"
            target="_blank"
            rel="noopener"
          >
            business decision
          </a>
        </li>
        <li>technical excellence enables business success</li>
      </ul>

      <h4>🎯 simplicity beats complexity</h4>
      <ul>
        <li>don't complicate architecture just to learn new tech</li>
        <li>microservices aren't always the answer</li>
        <li>
          monorepos solve real problems for{" "}
          <a
            href="https://nx.dev/concepts/more-concepts/why-monorepos"
            target="_blank"
            rel="noopener"
          >
            lean teams
          </a>
        </li>
        <li>premature optimization is evil</li>
        <li>don't busy yourself with being busy</li>
      </ul>

      <h4>👥 great teams build great products</h4>
      <ul>
        <li>
          the quality of your team directly impacts the quality of your output
        </li>
        <li>leadership is about enabling others</li>
        <li>
          diversity creates{" "}
          <a
            href="https://www.mckinsey.com/featured-insights/diversity-and-inclusion/diversity-wins-how-inclusion-matters"
            target="_blank"
            rel="noopener"
          >
            better solutions
          </a>
        </li>
        <li>mentorship creates lasting impact</li>
        <li>
          code reviews are about{" "}
          <a
            href="https://google.github.io/eng-practices/review/"
            target="_blank"
            rel="noopener"
          >
            learning
          </a>
          , not gatekeeping
        </li>
      </ul>

      <h4>💬 communication is the job</h4>
      <ul>
        <li>
          clear communication bridges the gap between technical and business
          needs
        </li>
        <li>
          clear writing is{" "}
          <a
            href="https://www.paulgraham.com/writing44.html"
            target="_blank"
            rel="noopener"
          >
            clear thinking
          </a>
        </li>
        <li>leaders step up to provide clarity when absent</li>
        <li>documentation creates clarity</li>
      </ul>

      <h4>📚 continuous learning is non-negotiable</h4>
      <ul>
        <li>technology evolves rapidly, and staying current is essential</li>
        <li>education is the best form of developer marketing</li>
        <li>
          be{" "}
          <a
            href="https://medium.com/@ameet/strong-opinions-weakly-held-a-framework-for-thinking-6530d417e364"
            target="_blank"
            rel="noopener"
          >
            ruthlessly truth-seeking
          </a>
        </li>
      </ul>

      <h4>📝 documentation is code</h4>
      <ul>
        <li>if it's not documented, it doesn't exist</li>
        <li>
          testing is about{" "}
          <a
            href="https://kentcdodds.com/blog/testing-implementation-details"
            target="_blank"
            rel="noopener"
          >
            confidence
          </a>
          , not coverage
        </li>
      </ul>

      <h2>Recent Posts</h2>

      <ul className="simple-list">
        <li>
          <a href="/blog/how-to-implement-team-collobration-in-sass-application">
            How to Implement Team Collaboration in SaaS Applications
          </a>
        </li>
        <li>
          <a href="/blog/how-to-load-env-in-monorepos">
            How to Load Environment Variables in Monorepos
          </a>
        </li>
      </ul>

      <p>
        <a href="/blog">View all posts →</a>
      </p>
    </div>
  );
}
