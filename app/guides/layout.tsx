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
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Banner 
        title="Character Guides"
        subtitle="Characters"
      />
      <main className="flex">
        <div className="container max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}