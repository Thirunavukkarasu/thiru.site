"use client";

import Image from "next/image";
import { useState } from "react";

export default function ExperiencePage() {
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

  const companies = [
    {
      name: "Kalvium",
      logo: "https://kalvium.com/favicon.ico", // You can replace with actual logo URL
      initials: "K",
      period: "2023 - Present",
      role: "Engineering Director & Architect",
      description:
        "Leading engineering strategy and architectural decisions for innovative education technology platform. Responsible for scaling engineering operations, technical architecture, and product development.",
    },
    {
      name: "Freelance",
      logo: null,
      initials: "F",
      period: "2020 - 2023",
      role: "Engineering Director & Architect",
      description:
        "Provided strategic engineering leadership and architectural guidance to multiple organizations. Led technical teams and delivered scalable solutions across various domains.",
    },
    {
      name: "Byju's",
      logo: "https://byjus.com/favicon.ico", // You can replace with actual logo URL
      initials: "B",
      period: "2017 - 2020",
      role: "Engineering Director & Architect",
      description:
        "Led technical architecture and engineering teams for edtech platform. Responsible for scaling systems to handle millions of users and driving innovation in educational technology.",
    },
    {
      name: "Previous Roles",
      logo: null,
      initials: "PR",
      period: "2010 - 2017",
      role: "Senior Engineering Positions",
      description:
        "Progressive experience in software engineering, system architecture, and team leadership across multiple technology companies.",
    },
  ];

  const handleLogoError = (companyName: string) => {
    setLogoErrors((prev) => ({ ...prev, [companyName]: true }));
  };

  return (
    <div className="prose">
      <p>
        I'm an Engineering Director & Architect with over 13 years of experience
        in building and scaling technology teams. Currently leading engineering
        strategy and architectural decisions at Kalvium, an innovative education
        technology company.
      </p>

      <p>
        My journey in technology began with a passion for solving complex
        problems and has evolved into a career focused on engineering
        leadership, system architecture, and team development. I've had the
        privilege of working with diverse teams and technologies across multiple
        domains.
      </p>

      <p>
        I believe in the power of technology to transform industries and improve
        lives. My approach combines technical expertise with strong leadership
        skills to deliver innovative solutions that drive business value and
        user impact.
      </p>

      <h2>Experience</h2>

      <div className="space-y-8">
        {companies.map((company, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                {company.logo && !logoErrors[company.name] ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={48}
                    height={48}
                    className="rounded-lg object-cover"
                    onError={() => handleLogoError(company.name)}
                    unoptimized
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-sm font-semibold">
                    {company.initials}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <p className="mt-0 mb-1 font-semibold">{company.name}</p>
                <p className="mt-0">
                  <strong>{company.role}</strong> • {company.period}
                </p>
              </div>
            </div>
            <div className="ml-16">
              <p className="mt-0">{company.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Skills</h2>

      <h3>Leadership</h3>
      <p>
        Team Management, Technical Strategy, Product Development, Engineering
        Operations, Mentoring, Cross-functional Collaboration, Project
        Management
      </p>

      <h3>Architecture</h3>
      <p>
        System Design, Microservices, Cloud Architecture, Scalability,
        Performance Optimization, Security, API Design
      </p>

      <h3>Technologies</h3>
      <p>
        JavaScript/TypeScript, React, Node.js, Java, Python, AWS, Docker,
        Kubernetes, PostgreSQL, MongoDB, Redis
      </p>

      <h3>Processes</h3>
      <p>
        Agile/Scrum, CI/CD, DevOps, Code Review, Testing Strategies,
        Documentation, Git Workflows
      </p>

      <h2>Certifications</h2>
      <ul>
        <li>Leadership skills</li>
        <li>JavaScript algorithms and data structures</li>
        <li>Problem Solving</li>
        <li>System Design</li>
        <li>Cloud Architecture</li>
      </ul>

      <h2>Connect</h2>

      <p>
        You can find me on{" "}
        <a
          href="https://in.linkedin.com/in/thirunavukkarasu-m"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        ,{" "}
        <a
          href="https://github.com/thirunavukkarasu"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        , and{" "}
        <a
          href="https://twitter.com/thirunavukkarasu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        .
      </p>
    </div>
  );
}
