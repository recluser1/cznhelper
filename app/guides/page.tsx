"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Search, X, Home, AlertTriangle } from "lucide-react"

const jobTypes = [
  {
    id: "striker",
    name: "Striker",
    icon: "/images/icon-job-striker.webp",
  },
  {
    id: "vanguard",
    name: "Vanguard",
    icon: "/images/icon-job-vanguard.webp",
  },
  {
    id: "ranger",
    name: "Ranger",
    icon: "/images/icon-job-ranger.webp",
  },
  {
    id: "hunter",
    name: "Hunter",
    icon: "/images/icon-job-hunter.webp",
  },
  {
    id: "psionic",
    name: "Psionic",
    icon: "/images/icon-job-psionic.webp",
  },
  {
    id: "controller",
    name: "Controller",
    icon: "/images/icon-job-controller.webp",
  },
]

const factionTypes = [
  {
    id: "void",
    name: "Void",
    icon: "/images/icon-ego-void.webp",
    color: "bg-purple-500/20 border-purple-500/50 text-purple-400 hover:bg-purple-500/30",
    iconBg: "bg-black/70",
  },
  {
    id: "instinct",
    name: "Instinct",
    icon: "/images/icon-ego-instinct.webp",
    color: "bg-orange-500/20 border-orange-500/50 text-orange-400 hover:bg-orange-500/30",
    iconBg: "bg-black/70",
  },
  {
    id: "passion",
    name: "Passion",
    icon: "/images/icon-ego-passion.webp",
    color: "bg-red-500/20 border-red-500/50 text-red-400 hover:bg-red-500/30",
    iconBg: "bg-black/70",
  },
  {
    id: "justice",
    name: "Justice",
    icon: "/images/icon-ego-justice.webp",
    color: "bg-blue-500/20 border-blue-500/50 text-blue-400 hover:bg-blue-500/30",
    iconBg: "bg-black/70",
  },
  {
    id: "order",
    name: "Order",
    icon: "/images/icon-ego-order.webp",
    color: "bg-green-500/20 border-green-500/50 text-green-400 hover:bg-green-500/30",
    iconBg: "bg-black/70",
  },
]

const characters = [
  { id: "amir", name: "Amir", job: "vanguard", faction: "order", rarity: 4 },
  { id: "beryl", name: "Beryl", job: "ranger", faction: "justice", rarity: 4 },
  { id: "cassius", name: "Cassius", job: "controller", faction: "instinct", rarity: 4 },
  { id: "chizuru", name: "Chizuru", job: "psionic", faction: "void", rarity: 5 },
  { id: "haru", name: "Haru", job: "striker", faction: "justice", rarity: 5 },
  { id: "hugo", name: "Hugo", job: "ranger", faction: "order", rarity: 5 },
  { id: "kayron", name: "Kayron", job: "psionic", faction: "void", rarity: 5 },
  { id: "khalipe", name: "Khalipe", job: "vanguard", faction: "instinct", rarity: 5 },
  { id: "lucas", name: "Lucas", job: "hunter", faction: "passion", rarity: 4 },
  { id: "luke", name: "Luke", job: "hunter", faction: "order", rarity: 5 },
  { id: "magna", name: "Magna", job: "vanguard", faction: "justice", rarity: 5 },
  { id: "maribell", name: "Maribell", job: "vanguard", faction: "passion", rarity: 4 },
  { id: "meilin", name: "Mei Lin", job: "striker", faction: "passion", rarity: 5 },
  { id: "mika", name: "Mika", job: "controller", faction: "justice", rarity: 4 },
  { id: "nia", name: "Nia", job: "controller", faction: "instinct", rarity: 4 },
  { id: "orlea", name: "Orlea", job: "controller", faction: "instinct", rarity: 5 },
  { id: "owen", name: "Owen", job: "striker", faction: "passion", rarity: 4 },
  { id: "rei", name: "Rei", job: "controller", faction: "void", rarity: 4 },
  { id: "renoa", name: "Renoa", job: "hunter", faction: "void", rarity: 5 },
  { id: "rin", name: "Rin", job: "striker", faction: "void", rarity: 5 },
  { id: "selena", name: "Selena", job: "ranger", faction: "passion", rarity: 4 },
  { id: "tressa", name: "Tressa", job: "psionic", faction: "void", rarity: 4 },
  { id: "veronica", name: "Veronica", job: "ranger", faction: "passion", rarity: 5 },
  { id: "yuki", name: "Yuki", job: "striker", faction: "order", rarity: 5 },
]

export default function CharacterGuidesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [selectedFaction, setSelectedFaction] = useState<string | null>(null)
  const [selectedRarity, setSelectedRarity] = useState<number | null>(null)

  const filteredCharacters = characters.filter((char) => {
    const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesJob = !selectedJob || char.job === selectedJob
    const matchesFaction = !selectedFaction || char.faction === selectedFaction
    const matchesRarity = !selectedRarity || char.rarity === selectedRarity
    return matchesSearch && matchesJob && matchesFaction && matchesRarity
  })

  console.log("[v0] Total characters:", characters.length)
  console.log("[v0] Filtered characters:", filteredCharacters.length)
  console.log(
    "[v0] Tressa in filtered?",
    filteredCharacters.find((c) => c.id === "tressa"),
  )
  console.log(
    "[v0] Yuki in filtered?",
    filteredCharacters.find((c) => c.id === "yuki"),
  )

  const handleJobFilter = (jobId: string) => {
    setSelectedJob(selectedJob === jobId ? null : jobId)
  }

  const handleFactionFilter = (factionId: string) => {
    setSelectedFaction(selectedFaction === factionId ? null : factionId)
  }

  const handleRarityFilter = (rarity: number) => {
    setSelectedRarity(selectedRarity === rarity ? null : rarity)
  }

  const handleReset = () => {
    setSearchQuery("")
    setSelectedJob(null)
    setSelectedFaction(null)
    setSelectedRarity(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Character Guides
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="text-left sm:text-right">
                <p className="text-xs text-muted-foreground">
                  Made by <span className="text-purple-400 font-semibold">lilyium.box</span>
                </p>
                <p className="text-xs text-muted-foreground/70">Thanks to Sproot for the resources & Zyla for helping in development</p>
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
        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 p-3 sm:p-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-yellow-400 mb-1">Work in Progress</h3>
                <p className="text-xs sm:text-sm text-yellow-400/90">
                  Character guides are currently being developed. Some information may be incomplete or subject to
                  change.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="relative flex-1 w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-card border-border"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button
              variant="outline"
              onClick={handleReset}
              className="gap-2 text-red-400 hover:text-red-300 border-red-400/50 hover:bg-red-400/10 bg-transparent"
            >
              <X className="h-4 w-4" />
              Reset
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={selectedRarity === 5 ? "default" : "outline"}
              size="sm"
              onClick={() => handleRarityFilter(5)}
              className={`gap-0.5 transition-all ${
                selectedRarity === 5
                  ? "bg-orange-500/20 text-orange-400 border-orange-400/50 hover:bg-orange-500/30"
                  : "bg-card hover:bg-card/80"
              }`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-orange-400">
                  ★
                </span>
              ))}
            </Button>
            <Button
              variant={selectedRarity === 4 ? "default" : "outline"}
              size="sm"
              onClick={() => handleRarityFilter(4)}
              className={`gap-0.5 transition-all ${
                selectedRarity === 4
                  ? "bg-orange-500/20 text-orange-400 border-orange-400/50 hover:bg-orange-500/30"
                  : "bg-card hover:bg-card/80"
              }`}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="text-orange-400">
                  ★
                </span>
              ))}
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {factionTypes.map((faction) => (
              <Button
                key={faction.id}
                variant={selectedFaction === faction.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleFactionFilter(faction.id)}
                className={`gap-2 transition-all ${
                  selectedFaction === faction.id ? faction.color : "bg-card hover:bg-card/80"
                }`}
              >
                <img src={faction.icon || "/placeholder.svg"} alt={faction.name} width={20} height={20} />
                {faction.name}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {jobTypes.map((job) => (
              <Button
                key={job.id}
                variant={selectedJob === job.id ? "default" : "outline"}
                size="sm"
                onClick={() => handleJobFilter(job.id)}
                className={`gap-2 ${
                  selectedJob === job.id
                    ? "bg-purple-400/20 text-purple-400 border-purple-400/50 hover:bg-purple-400/30"
                    : "bg-card hover:bg-card/80"
                }`}
              >
                <img src={job.icon || "/placeholder.svg"} alt={job.name} width={20} height={20} />
                {job.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {filteredCharacters.map((character) => {
              const job = jobTypes.find((j) => j.id === character.job)
              const faction = factionTypes.find((f) => f.id === character.faction)

              const imagePath = `/images/characters/${character.id}half.webp`
              console.log(`[v0] Rendering ${character.name} with image:`, imagePath)

              return (
                <Link
                  key={character.id}
                  href={`/guides/${character.id}`}
                  className="group relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20"
                >
                  <div className="absolute inset-0">
                    <img
                      src={imagePath || "/placeholder.svg"}
                      alt={character.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        console.error(`[v0] Failed to load image for ${character.name}:`, imagePath)
                      }}
                    />
                  </div>

                  <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 flex flex-col gap-0.5 sm:gap-1">
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-1 sm:p-1.5">
                      {job && <img src={job.icon || "/placeholder.svg"} alt={job.name} width={20} height={20} className="sm:w-6 sm:h-6" />}
                    </div>
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-1 sm:p-1.5">
                      {faction && (
                        <img src={faction.icon || "/placeholder.svg"} alt={faction.name} width={20} height={20} className="sm:w-6 sm:h-6" />
                      )}
                    </div>
                  </div>

                  <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 flex gap-0.5">
                    {Array.from({ length: character.rarity }).map((_, i) => (
                      <div key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-orange-400 text-xs sm:text-sm">
                        ★
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-2 sm:p-3 pt-6 sm:pt-8">
                    <h3 className="text-sm sm:text-base font-semibold text-white text-center text-balance">{character.name}</h3>
                  </div>

                  <div className="absolute inset-0 bg-purple-400/0 group-hover:bg-purple-400/10 transition-colors duration-300" />
                </Link>
              )
            })}
          </div>

          {filteredCharacters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No characters found</p>
              <Button variant="ghost" onClick={handleReset} className="mt-4 text-purple-400 hover:text-purple-300">
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
