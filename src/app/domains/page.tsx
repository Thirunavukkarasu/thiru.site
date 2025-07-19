import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Domains - Enterprise Systems & Architecture",
  description:
    "Explore the business domains I've worked in over 13+ years: Loan Management Systems (LMS), Order Management Systems (OMS), Warehouse Management Systems (WMS), Sales OS & Marketing OS, Finance Management Systems (FMS), and Data Engineering & Headless BI.",
  keywords: [
    "Loan Management Systems",
    "LMS",
    "Order Management Systems",
    "OMS",
    "Warehouse Management Systems",
    "WMS",
    "Sales OS",
    "Marketing OS",
    "Finance Management Systems",
    "FMS",
    "Data Engineering",
    "Headless BI",
    "Enterprise Systems",
    "Business Architecture",
    "System Design",
    "Multi-domain Experience",
    "B2B Systems",
    "E-commerce Systems",
    "Financial Systems",
    "Data Pipelines",
  ],
  openGraph: {
    title: "Business Domains - Enterprise Systems & Architecture",
    description:
      "Explore the business domains I've worked in over 13+ years: Loan Management Systems, Order Management Systems, Warehouse Management Systems, Sales OS & Marketing OS, Finance Management Systems, and Data Engineering & Headless BI.",
    url: "https://thiru.site/domains",
    siteName: "Thirunavukkarasu Muthusamy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Business Domains - Enterprise Systems & Architecture",
    description:
      "Explore the business domains I've worked in over 13+ years: Loan Management Systems, Order Management Systems, Warehouse Management Systems, Sales OS & Marketing OS, Finance Management Systems, and Data Engineering & Headless BI.",
  },
  alternates: {
    canonical: "https://thiru.site/domains",
  },
};

export default function Domains() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <div className="my-8 p-4 bg-black text-green-400 font-mono text-sm border border-gray-600 rounded">
        <div className="mb-2">
          <span className="text-yellow-400">$</span> whoami
        </div>
        <div className="mb-2 text-green-300">🚀 fullstack developer</div>
        <div className="mb-2">
          <span className="text-yellow-400">$</span> cat /systems/status
        </div>
        <div className="mb-2 text-green-300">
          SYSTEMS THAT DON'T BREAK WHEN YOU NEED THEM MOST 💪
        </div>
        <div className="mb-2">
          <span className="text-yellow-400">$</span> cat /philosophy/engineering
        </div>
        <div className="mb-2 text-green-300">
          "Over engineering is easy, under engineering is easy, engineering is
          hard" 💡
        </div>
        <div className="mb-2">
          <span className="text-yellow-400">$</span> ls /tech-stack/
        </div>
        <div className="text-green-300">
          MERN PERN Java-Spring AWS Docker GitHub
        </div>
      </div>

      <div className="grid gap-6 mt-8">
        <section>
          <h2>🏦 Loan Management Systems (LMS)</h2>
          <p>
            Built comprehensive loan management systems handling the entire
            lifecycle from application to collection with automated underwriting
            and risk assessment. Built with MERN stack and Java & Spring.
          </p>
          <div className="mt-4">
            <Link href="/domains/lms" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </section>

        <section>
          <h2>📦 Order Management Systems (OMS)</h2>
          <p>
            Designed end-to-end order management systems for multi-channel
            processing, inventory management, and fulfillment across e-commerce
            and B2B channels. Built with MERN stack and Java & Spring.
          </p>
          <div className="mt-4">
            <Link href="/domains/oms" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </section>

        <section>
          <h2>🏭 Warehouse Management Systems (WMS)</h2>
          <p>
            Built warehouse systems optimizing storage, picking, and shipping
            operations with mobile-first design and IoT integration for maximum
            efficiency. Built with PERN stack.
          </p>
          <div className="mt-4">
            <Link href="/domains/wms" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </section>

        <section>
          <h2>📈 Sales OS & Marketing OS</h2>
          <p>
            Developed marketing and sales operating systems for customer
            acquisition, lead management, and revenue operations with AI-powered
            insights. Built with MERN stack and Java & Spring.
          </p>
          <div className="mt-4">
            <Link href="/domains/sos" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </section>

        <section>
          <h2>💰 Finance Management Systems (FMS)</h2>
          <p>
            Built financial systems handling accounting, budgeting, and
            reporting with compliance, security, and multi-currency support.
            Built with PERN stack.
          </p>
          <div className="mt-4">
            <Link href="/domains/fms" className="text-blue-600 hover:underline">
              Learn more →
            </Link>
          </div>
        </section>

        <section>
          <h2>📊 Data Engineering & Headless BI (Mantys)</h2>
          <p>
            Scaled data pipelines and built headless BI infrastructure using
            modern data stack (Fivetran, DBT, DLThub, Cube.dev) for real-time
            analytics. Built with PERN stack.
          </p>
          <div className="mt-4">
            <Link
              href="/domains/data-engineering"
              className="text-blue-600 hover:underline"
            >
              Learn more →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
