import Link from "next/link"
import { BookOpen, Calculator, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {"CZN Helper"}
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Track your progress through the ongoing nightmare</p>
            </div>
            <div className="text-left sm:text-right w-full sm:w-auto">
              <p className="text-xs text-muted-foreground">
                Made by <span className="text-purple-400 font-semibold text-chart-3">lilyium.box</span>
              </p>
              <p className="text-xs text-muted-foreground/70">Thanks to Sproot &amp; Zyla for testing</p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12 flex items-center justify-center">
        <div className="w-full max-w-4xl space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Choose Your Tool</h2>
            <p className="text-muted-foreground text-base sm:text-lg">Select what you need help with</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Calculator Card */}
            <Link
              href="/calculator"
              className="group relative rounded-lg border-2 border-border bg-card p-6 sm:p-8 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
            >
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-400/20 flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold">Save Data Calculator</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Track your runs and calculate Faint Memory points for tier progression
                  </p>
                </div>
              </div>
            </Link>

            {/* Character Guides Card */}
            <Link
              href="/guides"
              className="group relative rounded-lg border-2 border-border bg-card p-6 sm:p-8 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-400/30 transition-colors">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold">Character Guides</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Browse character builds, strategies, and detailed information</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/50">
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-medium text-yellow-400">Work in Progress</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
