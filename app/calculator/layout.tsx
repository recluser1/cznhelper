// app/calculator/layout.tsx
'use client'
import { Banner } from "@/components/Banner"
import ScrollToTop from "@/components/ScrollToTop"

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Banner 
        title="RUN TRACKER"
        subtitle="Track your progress and calculate Faint Memory points"
      />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  )
}