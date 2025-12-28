// app/guides/[character]/layout.tsx
import ScrollToTop from "@/components/ScrollToTop";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Guide",
  description: "",
};

export default function CharacterGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 -mt-12">{children}</div>
      </main>
    </div>
  );
}
