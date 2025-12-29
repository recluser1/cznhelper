// app/layout.tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cznhelper.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "CZN Helper",
    template: "%s | CZN Helper",
  },
  description: "CZN Helper is a Community-Driven hub for Chaos Zero Nightmare.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    siteName: "CZN Helper",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/icon.png",
        width: 300,
        height: 300,
        alt: "CZN Helper",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased bg-[#0f0f16]`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
