import { RunTracker } from "@/components/run-tracker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Home } from "lucide-react"

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                CZN Save Data Helper
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">Track your progress through the ongoing nightmare</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
              <div className="text-left sm:text-right">
                <p className="text-xs text-muted-foreground">
                  Made by <span className="text-purple-400 font-semibold">lilyium.box</span>
                </p>
                <p className="text-xs text-muted-foreground/70">Thanks to Sproot & Zyla for testing</p>
              </div>
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-400/30 bg-purple-400/10 hover:bg-purple-400/20 transition-colors w-full sm:w-auto justify-center sm:justify-start"
              >
                <Home className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <Tabs defaultValue="tracker" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-card border border-border">
            <TabsTrigger
              value="tracker"
              className="data-[state=active]:bg-purple-400/20 data-[state=active]:text-purple-400"
            >
              Run Tracker
            </TabsTrigger>
            <TabsTrigger
              value="helper"
              className="data-[state=active]:bg-purple-400/20 data-[state=active]:text-purple-400"
            >
              Helper
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tracker" className="space-y-6">
            <RunTracker />
          </TabsContent>

          <TabsContent value="helper" className="space-y-4 sm:space-y-6">
            <div className="rounded-lg border border-border bg-card p-4 sm:p-6 space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-400">Point System Guide</h2>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  Understanding the math behind deck building and Faint Memory calculations
                </p>
              </div>

              {/* Card Base Values */}
              <section className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Card Base Values</h3>
                <div className="grid gap-3">
                  <div className="flex items-center justify-between p-3 rounded-md bg-background border border-border">
                    <span className="text-sm font-medium">Neutral Cards</span>
                    <span className="text-sm font-mono text-purple-400">+20 points</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md bg-background border border-border">
                    <span className="text-sm font-medium">Monster Cards</span>
                    <span className="text-sm font-mono text-purple-400">+80 points</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md bg-background border border-border">
                    <span className="text-sm font-medium">Forbidden Cards</span>
                    <span className="text-sm font-mono text-purple-400">+20 points</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-md bg-background border border-border">
                    <span className="text-sm font-medium">Starter Cards</span>
                    <span className="text-sm font-mono text-muted-foreground">0 points</span>
                  </div>
                </div>
              </section>

              {/* Epiphany Bonuses */}
              <section className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Epiphany Bonuses</h3>
                <div className="grid gap-3">
                  <div className="p-4 rounded-md bg-background border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-cyan-400">Divine Epiphany</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>
                        • Neutral cards: <span className="text-purple-400 font-mono">+30 points</span>
                      </li>
                      <li>
                        • Other card types: <span className="text-purple-400 font-mono">+20 points</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-md bg-background border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-blue-400">Normal Epiphany</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>
                        • All cards except starters: <span className="text-purple-400 font-mono">+10 points</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Card Removal Costs */}
              <section className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Card Removal Costs</h3>
                <div className="space-y-3">
                  <div className="p-3 sm:p-4 rounded-md bg-background border border-border">
                    <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Scaling Cost by Removal Count:</p>
                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2 text-center">
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">1st</div>
                        <div className="text-sm font-mono text-purple-400">0</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">2nd</div>
                        <div className="text-sm font-mono text-purple-400">10</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">3rd</div>
                        <div className="text-sm font-mono text-purple-400">30</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">4th</div>
                        <div className="text-sm font-mono text-purple-400">50</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">5th+</div>
                        <div className="text-sm font-mono text-purple-400">70</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-background border border-border space-y-2">
                    <p className="text-sm font-medium">Additional Modifiers:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>
                        • Starting card tax: <span className="text-red-400 font-mono">+20 points</span>
                      </li>
                      <li>• Subtracts the card's total point value (base + epiphanies)</li>
                    </ul>
                  </div>
                  <div className="p-3 rounded-md bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-purple-400">
                      <span className="font-semibold">Formula:</span> Scaling Cost + Starter Tax - Card Point Value
                    </p>
                  </div>
                </div>
              </section>

              {/* Card Duplication Costs */}
              <section className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Card Duplication Costs</h3>
                <div className="space-y-3">
                  <div className="p-3 sm:p-4 rounded-md bg-background border border-border">
                    <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-3">Scaling Cost by Duplication Count:</p>
                    <div className="grid grid-cols-5 gap-1.5 sm:gap-2 text-center">
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">1st</div>
                        <div className="text-sm font-mono text-purple-400">0</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">2nd</div>
                        <div className="text-sm font-mono text-purple-400">10</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">3rd</div>
                        <div className="text-sm font-mono text-purple-400">30</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">4th</div>
                        <div className="text-sm font-mono text-purple-400">50</div>
                      </div>
                      <div className="p-2 rounded bg-card border border-border">
                        <div className="text-xs text-muted-foreground">5th+</div>
                        <div className="text-sm font-mono text-purple-400">70</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-md bg-purple-500/10 border border-purple-500/20">
                    <p className="text-xs text-purple-400">
                      <span className="font-semibold">Formula:</span> Scaling Cost + Card Point Value
                    </p>
                  </div>
                </div>
              </section>

              {/* Card Conversion Costs */}
              <section className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Card Conversion Costs</h3>
                <div className="space-y-3">
                  <div className="p-4 rounded-md bg-background border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Base Conversion Cost</span>
                      <span className="text-sm font-mono text-purple-400">10 points</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-md bg-background border border-border space-y-2">
                    <p className="text-sm font-medium mb-2">Additional Costs:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>
                        • Starter card: <span className="text-purple-400 font-mono">+20 points</span>
                      </li>
                      <li>
                        • Divine Epiphany (neutral): <span className="text-purple-400 font-mono">+30 points</span>
                      </li>
                      <li>
                        • Divine Epiphany (other): <span className="text-purple-400 font-mono">+20 points</span>
                      </li>
                      <li>
                        • Normal Epiphany (non-starter): <span className="text-purple-400 font-mono">+10 points</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Faint Memory Tier Caps */}
              <section className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">Faint Memory Tier Caps</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Maximum point limits for each Faint Memory tier level</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { tier: 1, cap: 30 },
                    { tier: 2, cap: 40 },
                    { tier: 3, cap: 50 },
                    { tier: 4, cap: 60 },
                    { tier: 5, cap: 70 },
                    { tier: 6, cap: 80 },
                    { tier: 7, cap: 90 },
                    { tier: 8, cap: 100 },
                    { tier: 9, cap: 110 },
                    { tier: 10, cap: 120 },
                    { tier: 11, cap: 130 },
                    { tier: 12, cap: 140 },
                    { tier: 13, cap: 150 },
                    { tier: 14, cap: 160 },
                  ].map(({ tier, cap }) => (
                    <div
                      key={tier}
                      className="flex items-center justify-between p-3 rounded-md bg-background border border-border"
                    >
                      <span className="text-sm font-medium text-muted-foreground">Tier {tier}</span>
                      <span className="text-sm font-mono text-purple-400">{cap}pts</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
