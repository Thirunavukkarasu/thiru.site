import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/navbar";
import { EnhancedAnalytics } from "@/components/analytics";
import { cn } from "@/lib/utils";
import "./globals.css";
import "./code-highlight.css";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: {
    default: "Thirunavukkarasu Muthusamy - Engineering Director & Architect",
    template: "%s | Thirunavukkarasu Muthusamy",
  },
  description:
    "Engineering Director & Architect at Kalvium with 13+ years of experience in engineering leadership, system architecture, and building scalable technology teams. Fullstack developer focused on developer experience and product development.",
  keywords: [
    "Thirunavukkarasu Muthusamy",
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
  authors: [
    {
      name: "Thirunavukkarasu Muthusamy",
      url: "https://thiru.site",
    },
  ],
  creator: "Thirunavukkarasu Muthusamy",
  publisher: "Thirunavukkarasu Muthusamy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thiru.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thiru.site",
    title: "Thirunavukkarasu Muthusamy - Engineering Director & Architect",
    description:
      "Engineering Director & Architect at Kalvium with 13+ years of experience in engineering leadership, system architecture, and building scalable technology teams.",
    siteName: "Thirunavukkarasu Muthusamy",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/3192747?v=4",
        width: 400,
        height: 400,
        alt: "Thirunavukkarasu Muthusamy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thirunavukkarasu Muthusamy - Engineering Director & Architect",
    description:
      "Engineering Director & Architect at Kalvium with 13+ years of experience in engineering leadership and system architecture.",
    images: ["https://avatars.githubusercontent.com/u/3192747?v=4"],
    creator: "@thirunavukkarasu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Thiru.site",
    "application-name": "Thiru.site",
    "format-detection": "telephone=no",
  },
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
        "h-full antialiased",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Navbar />
          <main className="mt-8">{children}</main>
        </div>
        <EnhancedAnalytics />
      </body>
    </html>
  );
}
