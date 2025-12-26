// app/guides/layout.tsx
import { Banner } from "@/components/Banner"
import ScrollToTop from "@/components/ScrollToTop"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Character Guides',
  description: 'Find detailed Epiphany guides and Save Data for Chaos Zero Nightmare',
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />

      <Banner title="Character Guides">
        <div className="-mt-22 -sm:mt-20 -md:mt-18 -lg:mt-16 max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-2 sm:gap-3 rounded-xl border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-md px-3 sm:px-4 md:px-5 py-3 sm:py-4 text-left">
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mt-0.5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 4h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.29 3.86l-8.3 14.38A1 1 0 002.83 20h18.34a1 1 0 00.86-1.76L13.71 3.86a1 1 0 00-1.72 0z" />
            </svg>

            <div className="text-xs sm:text-sm md:text-base text-yellow-100 leading-relaxed">
              <strong className="font-semibold text-yellow-300">Work in progress.</strong>{" "}
              Character guides are still in development and may be incomplete,
              inaccurate, or subject to change.
            </div>
          </div>
        </div>
      </Banner>


      <main className="flex relative z-10 -mt-24 sm:-mt-24 md:-mt-28 lg:-mt-32">
        <div className="container mx-auto px-4 sm:px-6">
          {children}
        </div>
      </main>
    </div>
  )
}