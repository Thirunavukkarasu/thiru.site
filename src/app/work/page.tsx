import React, { Fragment } from "react";

const data = [
  {
    title: "Mantys - FP&A SaaS Tool",
    description: "VP of Engineering",
    link: "https://mantys.io",
    content: {
      summary:
        "Mantys is a modern FP&A SaaS application that helps finance teams manage their budgets, forecasts, and actuals. I lead the engineering team and work closely with the product team to build and maintain the application.",
      technologies:
        "React, Next.js, Tailwind CSS, Node.js, Express, PostgreSQL, Prisma, and AWS",
    },
  },
  {
    title: " BYJU'S - The Learning App",
    description: "Director of Engineering",
    link: "https://byjus.com",
    content: {
      summary:
        "BYJU'S is the largest EdTech company in the world. I lead the engineering team that builds the core learning platform that serves millions of students across the globe.",
      technologies:
        "React, Next.js, Tailwind CSS, Node.js, Express, PostgreSQL, Prisma, and AWS",
    },
  },
];

export default function page() {
  return (
    <>
      <h1 className="text-3xl">my work</h1>
      {data.map((item, index) => (
        <Fragment key={index}>
          <div className="mb-4 border-0 shadow-none m-0">
            <div className="flex flex-col space-y-1.5 py-6">
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                <a href={item.link}>{item.title}</a>
              </h3>
              <div className="text-sm text-muted-foreground">
                {item.description}
              </div>
            </div>
            <div className="py-6 pt-0 space-y-4">
              <p>{item.content.summary}</p>
              <p className="space-x-2 text-gray-600">
                <span>Technologies:</span>
                <span>{item.content.technologies}</span>
              </p>
            </div>
          </div>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </Fragment>
      ))}
    </>
  );
}
