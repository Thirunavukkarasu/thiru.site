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

      <h2>🚀 Experience</h2>

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

      <h2>⚡ Skills</h2>

      <h3>👥 Leadership</h3>
      <p>
        Team Management, Technical Strategy, Product Development, Engineering
        Operations, Mentoring, Cross-functional Collaboration, Project
        Management
      </p>

      <h3>🏗️ Architecture</h3>
      <p>
        System Design, Microservices, Cloud Architecture, Scalability,
        Performance Optimization, Security, API Design
      </p>

      <h3>💻 Technologies</h3>
      <p>
        JavaScript/TypeScript, React, Node.js, Java, Python, AWS, Docker,
        Kubernetes, PostgreSQL, MongoDB, Redis
      </p>

      <h3>🔄 Processes</h3>
      <p>
        Agile/Scrum, CI/CD, DevOps, Code Review, Testing Strategies,
        Documentation, Git Workflows
      </p>

      <h2>🏆 Certifications</h2>
      <ul>
        <li>Leadership skills</li>
        <li>JavaScript algorithms and data structures</li>
        <li>Problem Solving</li>
        <li>System Design</li>
        <li>Cloud Architecture</li>
      </ul>

      <h2>🔗 Connect</h2>

      <div className="flex space-x-4 items-center">
        <a
          href="https://in.linkedin.com/in/thirunavukkarasu-m"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/thirunavukkarasu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>

        <a
          href="https://twitter.com/thirunavukkarasu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          <span>Twitter</span>
        </a>
      </div>
    </div>
  );
}
