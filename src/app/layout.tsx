import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <div className="mb-10 border-b"></div>
        <div className="mx-auto min-h-screen max-w-5xl">{children}</div>
      </body>
    </html>
  );
}
