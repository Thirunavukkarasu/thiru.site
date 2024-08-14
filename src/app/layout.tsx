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
        "h-full antialiased light",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased flex h-full bg-zinc-50 dark:bg-black">
        <main className="flex w-full">
          {/* Use a fixed container to create a backdrop */}
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
            </div>
          </div>
          {/* Use a relative container to center the content */}
          <div className="relative flex w-full flex-col">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <Navbar />
                {children}
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
