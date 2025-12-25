// app/about/layout.tsx
'use client'

import { Banner } from "@/components/Banner"
import ScrollToTop from "@/components/ScrollToTop"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Banner 
        title="ABOUT"
        subtitle="Learn more about CZN Helper"
      />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}