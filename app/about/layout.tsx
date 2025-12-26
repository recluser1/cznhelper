// app/about/layout.tsx
import { Banner } from "@/components/Banner"
import ScrollToTop from "@/components/ScrollToTop"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about CZN Helper',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />

      <Banner
        title="About"
        backgroundImage="/images/header1.jpg"
      />

      <main className="relative z-10 -mt-32">
        <div className="container mx-auto px-4 pb-12">
          {children}
        </div>
      </main>
    </div>
  )
}
