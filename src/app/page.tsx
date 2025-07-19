import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

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

      <h3>🚀 shipping fast beats the best strategy</h3>
      <ul>
        <li>
          <strong>Speed is a superpower</strong> - Move quickly and iterate
          based on real feedback.
        </li>
        <li>
          <strong>Create a bias toward shipping</strong> - Get things out there
          and iterate based on real feedback.
        </li>
        <li>
          <strong>Small teams ship faster</strong> - Complexity grows
          exponentially with team size.{" "}
          <a
            href="https://www.amazon.com/Team-Topologies-Organizing-Business-Technology/dp/1942788819"
            target="_blank"
            rel="noopener"
          >
            Team topologies
          </a>
        </li>
        <li>
          <strong>Landings &gt; launches</strong> - Product adoption matters
          more than shipping code.
        </li>
        <li>
          <strong>
            Listen, build, ship, tell the customer, then repeat forever
          </strong>{" "}
          - The continuous feedback loop.
        </li>
      </ul>

      <h3>⚡ quality over scale</h3>
      <ul>
        <li>
          <strong>
            Building amazing products for fewer users is just as valuable
          </strong>{" "}
          - Impact isn't measured by user count alone.
        </li>
        <li>
          <strong>User impact drives technical decisions</strong> - Technology
          should serve users, not the other way around.
        </li>
        <li>
          <strong>Technical debt is a business decision</strong> - Sometimes
          shipping fast is more valuable than perfect code.{" "}
          <a
            href="https://martinfowler.com/articles/is-quality-worth-cost.html"
            target="_blank"
            rel="noopener"
          >
            Is quality worth the cost?
          </a>
        </li>
        <li>
          <strong>Technical excellence enables business success</strong> - Solid
          architecture and clean code are investments that pay dividends.
        </li>
      </ul>

      <h3>🎯 simplicity beats complexity</h3>
      <ul>
        <li>
          <strong>Don't complicate architecture just to learn new tech</strong>{" "}
          - Start simple, add complexity when you have real problems.{" "}
          <a
            href="https://www.youtube.com/watch?v=rI8tNMsozo0"
            target="_blank"
            rel="noopener"
          >
            Simple made easy
          </a>
        </li>
        <li>
          <strong>Microservices aren't always the answer</strong> - Start with a
          monolith, split when you have real problems.{" "}
          <a
            href="https://martinfowler.com/articles/microservices.html"
            target="_blank"
            rel="noopener"
          >
            Microservices guide
          </a>
        </li>
        <li>
          <strong>Monorepos solve real problems for lean teams</strong> - Shared
          tooling, consistent standards, easier refactoring.{" "}
          <a
            href="https://nx.dev/concepts/more-concepts/why-monorepos"
            target="_blank"
            rel="noopener"
          >
            Why monorepos
          </a>
        </li>
        <li>
          <strong>Premature optimization is still evil</strong> - Build for
          today's needs, not tomorrow's assumptions.
        </li>
        <li>
          <strong>Don't busy yourself with being busy</strong> - More
          repositories doesn't mean better engineering.
        </li>
      </ul>

      <h3>👥 great teams build great products</h3>
      <ul>
        <li>
          <strong>
            The quality of your team directly impacts the quality of your output
          </strong>{" "}
          - Invest in people, not just technology.
        </li>
        <li>
          <strong>Leadership is about enabling others</strong> - The best
          leaders create environments where their teams can thrive.
        </li>
        <li>
          <strong>Diversity in teams leads to better solutions</strong> -
          Different perspectives create more robust and innovative outcomes.{" "}
          <a
            href="https://www.mckinsey.com/featured-insights/diversity-and-inclusion/diversity-wins-how-inclusion-matters"
            target="_blank"
            rel="noopener"
          >
            Diversity wins
          </a>
        </li>
        <li>
          <strong>Mentorship creates lasting impact</strong> - Investing in
          others' growth creates a stronger engineering community.
        </li>
        <li>
          <strong>Code reviews are about learning, not gatekeeping</strong> -
          Use them to share knowledge and improve together.{" "}
          <a
            href="https://google.github.io/eng-practices/review/"
            target="_blank"
            rel="noopener"
          >
            Google's code review guide
          </a>
        </li>
      </ul>

      <h3>💬 communication is the job</h3>
      <ul>
        <li>
          <strong>
            Clear communication bridges the gap between technical and business
            needs
          </strong>{" "}
          - It's as important as coding.
        </li>
        <li>
          <strong>Clear writing is clear thinking</strong> - If you can't
          explain it simply, you don't understand it well enough.{" "}
          <a
            href="https://www.paulgraham.com/writing44.html"
            target="_blank"
            rel="noopener"
          >
            Writing and speaking
          </a>
        </li>
        <li>
          <strong>Leaders step up to provide clarity when absent</strong> - Take
          ownership of communication gaps.
        </li>
        <li>
          <strong>
            Be the person taking notes, even if it's just for yourself
          </strong>{" "}
          - Documentation creates clarity.
        </li>
      </ul>

      <h3>📚 continuous learning is non-negotiable</h3>
      <ul>
        <li>
          <strong>
            Technology evolves rapidly, and staying current is essential
          </strong>{" "}
          - Never stop learning.
        </li>
        <li>
          <strong>Education is the best form of developer marketing</strong> -
          Share knowledge, build trust.
        </li>
        <li>
          <strong>Be ruthlessly truth-seeking</strong> - Have strong opinions,
          loosely held.{" "}
          <a
            href="https://medium.com/@ameet/strong-opinions-weakly-held-a-framework-for-thinking-6530d417e364"
            target="_blank"
            rel="noopener"
          >
            Strong opinions, weakly held
          </a>
        </li>
      </ul>

      <h3>⚙️ developer experience drives user experience</h3>
      <ul>
        <li>
          <strong>
            Developer experience is vital for building shipping fast engineering
            teams
          </strong>{" "}
          - Without fixing developer experience, you can never fix user
          experience.
        </li>
        <li>
          <strong>
            Outdated technology stack is harmful for engineering teams to ship
            fast
          </strong>{" "}
          - Modern tools enable speed and productivity.
        </li>
        <li>
          <strong>
            Without fixing developer experience, fixing anything else doesn't
            matter
          </strong>{" "}
          - DX is the foundation that enables everything else.
        </li>
        <li>
          <strong>
            Great developer experience enables great user experience
          </strong>{" "}
          - Happy developers build better products.
        </li>
      </ul>

      <h3>📝 documentation is code</h3>
      <ul>
        <li>
          <strong>If it's not documented, it doesn't exist</strong> -
          Documentation is as important as the code itself.{" "}
          <a
            href="https://www.divio.com/blog/documentation/"
            target="_blank"
            rel="noopener"
          >
            Documentation system
          </a>
        </li>
        <li>
          <strong>Testing is about confidence, not coverage</strong> - Focus on
          testing the right things, not hitting numbers.{" "}
          <a
            href="https://kentcdodds.com/blog/testing-implementation-details"
            target="_blank"
            rel="noopener"
          >
            Testing implementation details
          </a>
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
