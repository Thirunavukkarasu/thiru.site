import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Thirunavukkarasu",
    template: "%s | Thirunavukkarasu",
  },
  description: "Developer, Engineering Leader, and Dad.",
  keywords: [
    "Thirunavukkarasu",
    "Full Stack Developer",
    "Engineering Leader",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
  ],
  authors: [
    {
      name: "thirunavukkarasu",
      url: "https://thiru.site",
    },
  ],
  creator: "thirunavukkarasu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-6 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-4 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
