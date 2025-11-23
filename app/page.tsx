import { RunTracker } from "@/components/run-tracker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {"CZN Save Data Helper"}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">Track your progress through the ongoing nightmare</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">
                Made by <span className="text-purple-400 font-semibold text-chart-3">lilyium.box</span>
              </p>
              <p className="text-xs text-muted-foreground/70">Thanks to Sproot &amp; Zyla for testing</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tracker" className="space-y-6">
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

          <TabsContent value="helper" className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Faint Memory Calculation Rules</h2>
                <p className="text-base text-muted-foreground">
                  Understanding how points are calculated in Chaos Zero Nightmare
                </p>
              </div>

              <div className="space-y-8">
                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-400">Tier System</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Each tier has a point cap that determines how many Faint Memories can be recorded:
                  </p>
                  <ul className="text-base text-muted-foreground space-y-1 ml-4">
                    <li>Tier 1-14: 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160</li>
                    <li className="text-cyan-400">Nightmare Mode: Adds +10 to the cap (e.g., Tier 3 becomes 60)</li>
                  </ul>
                </section>

                <div className="h-px bg-border" />

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-400">Card Acquisition</h3>
                  <ul className="text-base text-muted-foreground space-y-2">
                    <li>
                      <span className="text-cyan-400 font-semibold">Neutral Cards:</span> 20 points
                    </li>
                    <li>
                      <span className="text-red-400 font-semibold">Monster Cards:</span> 80 points
                    </li>
                    <li>
                      <span className="text-purple-400 font-semibold">Forbidden Cards:</span> 20 points
                    </li>
                  </ul>
                </section>

                <div className="h-px bg-border" />

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-400">Epiphanies</h3>
                  <ul className="text-base text-muted-foreground space-y-2">
                    <li>
                      <span className="text-foreground font-semibold">Normal Epiphany:</span> +10 points (FREE on
                      Starter/Unique cards)
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">Divine Epiphany:</span> +20 points (applies to all
                      card types including Unique cards)
                    </li>
                    <li className="text-sm text-muted-foreground/70 italic ml-4">
                      Note: Normal and Divine Epiphanies cannot be applied simultaneously
                    </li>
                  </ul>
                </section>

                <div className="h-px bg-border" />

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-400">Card Removal</h3>
                  <ul className="text-base text-muted-foreground space-y-2">
                    <li>
                      <span className="text-foreground font-semibold">Neutral Cards:</span> 1st removal = 0 points, then
                      10, 30, 50, and 70+ from 5th onward
                    </li>
                    <li>
                      <span className="text-foreground font-semibold">Starter/Unique Cards:</span> Same progression + 20
                      point tax per removal
                    </li>
                    <li className="text-sm text-muted-foreground/70 italic ml-4">
                      Example: Removing 2nd Starter card = 10 (progression) + 20 (tax) = 30 points
                    </li>
                  </ul>
                </section>

                <div className="h-px bg-border" />

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-400">Card Duplication</h3>
                  <ul className="text-base text-muted-foreground space-y-2">
                    <li>
                      <span className="text-foreground font-semibold">Cost:</span> 1st = 0 points, then 10, 30, 50, and
                      70+ from 5th onward
                    </li>
                    <li className="text-sm text-muted-foreground/70 italic">
                      If the original card has Divine Epiphany or other modifiers, the duplicate inherits the same cost
                    </li>
                  </ul>
                </section>

                <div className="h-px bg-border" />

                <section className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-400">Card Conversion</h3>
                  <ul className="text-base text-muted-foreground space-y-2">
                    <li>
                      <span className="text-foreground font-semibold">Converting to Neutral:</span> 10 points
                      (conversion) + 20 points (new neutral acquisition) = 30 total
                    </li>
                    <li className="text-sm text-muted-foreground/70 italic">
                      If the converted neutral is removed, subtract 20 points (the acquisition cost)
                    </li>
                    <li className="text-sm text-muted-foreground/70 italic ml-4">
                      Example: Convert Starter → Neutral (30) → Remove it = 10 final points
                    </li>
                    <li className="text-sm text-muted-foreground/70 italic">
                      The conversion record persists even if the card is removed
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
