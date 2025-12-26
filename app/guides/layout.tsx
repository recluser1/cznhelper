// app/guides/layout.tsx
'use client'
import { Banner } from "@/components/Banner"
import ScrollToTop from "@/components/ScrollToTop"

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />

      <Banner title="Character Guides">
        <p className="mt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide drop-shadow-2xl">
          Character Guides
        </p>
      </Banner>

      <main className="flex relative z-10 -mt-28">
        <div className="container max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}