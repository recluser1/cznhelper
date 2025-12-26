// components/Home.tsx

import Link from "next/link";
import { BookOpen, Calculator, AlertTriangle } from "lucide-react";
import { Banner } from "@/components/Banner";

export function HomePage() {
  return (
    <>
      <Banner
        title="CZN HELPER"
        subtitle="CZN Helper"
      />

      {/* Cards section - gentle overlap */}
      <main className="relative -mt-12 md:-mt-16 lg:-mt-20 z-10">
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-lg text-muted-foreground">
                Select what you need help with
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Save Data Calculator */}
              <Link
                href="/calculator"
                className="group block bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/60 hover:bg-card hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Calculator className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Save Data Calculator</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Track runs and calculate Faint Memory points for tier progression
                  </p>
                </div>
              </Link>

              {/* Character Guides */}
              <Link
                href="/guides"
                className="group block bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:border-cyan-500/60 hover:bg-card hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <BookOpen className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Character Guides</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Browse builds, strategies, and detailed character information
                  </p>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs text-yellow-300">Work in Progress</span>
                  </div>
                </div>
              </Link>

              {/* Damage Calculator - WIP (disabled style) */}
              <div className="block bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-6 cursor-not-allowed opacity-75">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-orange-500/5 flex items-center justify-center">
                    <Calculator className="w-7 h-7 text-orange-400/60" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground/70">Damage Calculator</h3>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    Calculate damage, synergies, and optimal team compositions
                  </p>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/5 border border-yellow-500/20">
                    <AlertTriangle className="w-4 h-4 text-yellow-400/60" />
                    <span className="text-xs text-yellow-300/80">Work in Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}