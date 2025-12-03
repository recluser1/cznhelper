"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ChevronDown } from "lucide-react"
import ExpandableSetCard from "@/components/ui/ExpandableSetCard"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react"

export default function VeronicaGuidePage() {
  const [expandedEpiphany, setExpandedEpiphany] = useState<string | null>(null)
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(null)
  const [isCardEpiphanyModalOpen, setIsCardEpiphanyModalOpen] = useState(false)
  const [isTeamsModalOpen, setIsTeamsModalOpen] = useState(false)
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null)

  const sections = [
    { id: "overview", title: "1. Overview", level: 1 },
    { id: "card-epiphany", title: "2. Card Epiphany", level: 1 },
    { id: "firing-preparation", title: "2.1. Firing Preparation", level: 2 },
    { id: "repose", title: "2.2. Repose", level: 2 },
    { id: "sir-kowalski", title: "2.3. Sir Kowalski", level: 2 },
    { id: "pendant-of-resolution", title: "2.4. Pendant of Resolution", level: 2 },
    { id: "recommended-save-data", title: "3. Recommended Save Data", level: 1 },
    { id: "memory-fragments", title: "4. Memory Fragments", level: 1 },
    { id: "main-stats", title: "4.1. Main", level: 2 },
    { id: "sub-stats", title: "4.2. Sub", level: 2 },
    { id: "partners", title: "5. Partners", level: 1 },
    { id: "teams", title: "6. Teams", level: 1 },
  ]

  const uniqueCards = [
    {
      id: "firing-preparation",
      name: "Firing Preparation",
      image: "/images/character/veronica/starter4.png",
      baseType: "upgrade",
      epiphanies: [
        {
          tier: "A+",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Initiation ] Create 1 Ballista card(s).\nAt the start of the turn,\ncreate 1 Ballista card(s),\nwith a 50% chance to additionally create 1 more",
          reasoning:
            "[Placeholder reasoning text]",
        },
        {
          tier: "Situational",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Initiation ] Create 1 Piercing Ballista.\nAt the start of the turn, \ncreate 1 Piercing Ballista card(s)",
          reasoning: "[Placeholder reasoning text]",
        },
        {
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Initiation ] Create 1 Enhanced Ballista.\nAt the start of the turn, \ncreate 1 Enhanced Ballista card(s)",
          reasoning: "[Placeholder reasoning text]",
        },
        {
          tier: "S+",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Initiation ] Create 1 Giant Ballista. \nAt the start of the turn, \ncreate 1 Giant Ballista \ncard(s)",
          reasoning: "[Placeholder reasoning text]",
        },
        {
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Initiation ] Create 1 Shelling Ballista. \nAt the start of the turn, \ncreate 1 Shelling Ballista \ncard(s)",
          reasoning: "[Placeholder reasoning text]",
        },
      ],
    },
    {
      id: "repose",
      name: "Repose",
      image: "/images/character/veronica/unique1.png",
      baseType: "skill",
      epiphanies: [
        {
          tier: "S+",
          cost: 0,
          type: "skill",
          description: "Draw 2 other \n Combatant's card(s)",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A+",
          cost: 1,
          type: "skill",
          description: "150% Shield \nDraw 2 other \nCombatant's card(s) \nIf that card is a Skill Card, \n1 Reload",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S",
          cost: 1,
          type: "skill",
          description:
            "150% Shield \nDraw 2 other \nCombatant's card(s) \nDecrease Cost of 1 of those cards by 1 for 1 turn",
          reasoning: "[Placeholder]",
        },
        {
          tier: "B",
          cost: 1,
          type: "skill",
          description: "150% Shield \n1 Reload equal to \nnumber of other \nCombatant's skill card(s) \nin hand",
          reasoning: "[Placeholder]",
        },
        {
          tier: "C",
          cost: 1,
          type: "skill",
          description: "150% Shield \nDiscard all other \nCombatant's card(s) in hand \n1 Reload equal to that number",
          reasoning: "[Placeholder]",
        },
      ],
    },
    {
      id: "pendant-of-resolution",
      name: "Pendant of Resolution",
      image: "/images/character/veronica/unique2.png",
      baseType: "upgrade",
      epiphanies: [
        {
          tier: "S+",
          cost: 1,
          type: "upgrade",
          description: "When using a Skill Card,\n 1 Reload",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A+",
          cost: 0,
          type: "upgrade",
          description:
            "[ Unique ] When another combatant uses Skill Card, 1 Reload \nIf 3 are used, at the start of the next turn, create 1 Micro Ballista card(s)",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A",
          cost: 1,
          type: "skill",
          description: "[Exhaust 2] For 1 turn(s), when a \ncard is used, \n1 Reload",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "When another combatant uses Skill Card, 1 Reload \n50% Chance to gain additional 1 Reload",
          reasoning: "[Placeholder]",
        },
        {
          tier: "Situational",
          cost: 1,
          type: "skill",
          description: "[ Retain / Retrieve 4 ] Reload 2",
          reasoning: "[Placeholder]",
        },
      ],
    },
    {
      id: "sir-kowalski",
      name: "Sir Kowalski",
      image: "/images/character/veronica/unique3.png",
      baseType: "skill",
      epiphanies: [
        {
          tier: "S",
          cost: 1,
          type: "skill",
          description: "Choose 1 Ballista card in hand, +150% Damage amount until activated. \nDraw 2",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A",
          cost: 1,
          type: "skill",
          description: "Draw 1 \nIncrease Damage Amount of Ballista by 30% for 1 turn",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S+",
          cost: 1,
          type: "skill",
          description: "Draw 2 \nWhen drawing a Skill card, create 1 Ballista",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S",
          cost: 1,
          type: "skill",
          description: "+250% Damage Amount of 1 random Ballista card in hand, \nExhaust after activation",
          reasoning: "[Placeholder]",
        },
        {
          tier: "C",
          cost: 1,
          type: "skill",
          description: "Select and Exhaust 1 Ballista in hand \nCreate 2 Ballista, decrease Damage Amount of those cards by 25% until activated",
          reasoning: "[Placeholder]",
        },
      ],
    },
  ]

  const parseDescription = (desc: string) => {
    const bracketMatch = desc.match(/\[([^\]]+)\]/)
    if (bracketMatch) {
      const bracketedText = bracketMatch[0]
      const remainingText = desc.replace(bracketMatch[0], "").trim()
      return { bracketedText, remainingText }
    }
    return { bracketedText: null, remainingText: desc }
  }

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "S+":
        return "bg-gray-950 text-pink-300 border-pink-500/80 shadow-2xl shadow-pink-500/60 ring-4 ring-pink-500/40 font-bold"
      case "S":
        return "bg-gray-950 text-orange-300 border-orange-500/70 shadow-xl shadow-orange-500/50 ring-4 ring-orange-500/30 font-bold"
      case "A+":
        return "bg-gray-950 text-purple-300 border-purple-500/70 shadow-lg shadow-purple-500/40 ring-2 ring-purple-500/30 font-semibold"
      case "A":
        return "bg-gray-950 text-indigo-300 border-indigo-500/60 shadow-md shadow-indigo-500/30 ring-2 ring-indigo-500/20 font-semibold"
      case "B":
        return "bg-gray-950 text-cyan-300 border-cyan-500/50 shadow shadow-cyan-500/20 ring-1 ring-cyan-500/20"
      case "C":
        return "bg-gray-950 text-emerald-400 border-emerald-600/40 shadow-sm shadow-emerald-600/10"
      case "Situational":
        return "bg-gray-950 text-gray-500 border-gray-700/50"
      default:
        return "bg-gray-950 text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Veronica Guide
              </h1>
            </div>
            <Link
              href="/guides"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Characters</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-4 rounded-lg border border-border bg-card p-4">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-1.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`text-sm text-muted-foreground hover:text-purple-400 transition-colors block py-1 ${
                        section.level === 2 ? "pl-4" : ""
                      }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* 1. Overview */}
            <section id="overview" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">1. Overview</h2>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/50">
                    <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-5 h-5" />
                    <span className="text-red-400 text-sm font-medium">Passion</span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40">
                    <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-5 h-5" />
                    <span className="text-purple-400 text-sm font-medium">Ranger</span>
                  </div>
                </div>

                <div className="rounded-sm bg-background/50 border border-border">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-red-500/20 to-black/30 flex items-center justify-center warp">
                <img
                  src={`/images/characters/veronica.webp`}
                  alt={`veronica full artwork`}
                  className="w-full h-full object-contain"
                />
              </div>
                </div>
              </div>
            </section>

            {/* 2. Card Epiphany */}
            <section id="card-epiphany" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">2. Card Epiphany</h2>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
              {`S+ (Top Tier); S (Best); A+ (Very Strong); A (Strong); B (Weak); C (Very Weak); Situational (Niche).
              Click on any card group to view detailed explanations.`}
              </p>

              <div className="space-y-12">
                {uniqueCards.map((cardData) => (
                  <div key={cardData.id} id={cardData.id} className="scroll-mt-24">
                    <h3 className="text-xl font-bold mb-6 text-purple-300">{cardData.name}</h3>

                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 cursor-pointer p-4 rounded-xl border-2 border-dashed border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-500/5 transition-all duration-200">
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div key={index} className="flex flex-col gap-3">
                              {/* Tier Badge */}
                              <div className="flex justify-center">
                                <span
                                  className={`px-4 py-1.5 rounded-full text-sm font-bold ${getTierColor(epiphany.tier)}`}
                                >
                                  {epiphany.tier} Tier
                                </span>
                              </div>

                              {/* Card Display */}
                              <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200 max-w-[250px] mx-auto">
                                {/* Passion Border */}
                                <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                                  <img
                                    src="/images/card/passion-border.png"
                                    alt=""
                                    className="h-full w-full object-cover"
                                  />
                                </div>

                                {/* Card Image */}
                                <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                                  <img
                                    src={cardData.image || "/placeholder.svg"}
                                    alt={cardData.name}
                                    className="w-full h-full object-cover scale-107"
                                  />

                                  {/* Card Info Overlay */}
                                  <div className="absolute inset-0 flex flex-col">
                                    {/* Top Section */}
                                    <div className="p-2 pt-1.5 pl-5">
                                      <div className="flex items-start gap-1.5">
                                        {/* Cost */}
                                        <div className="flex-shrink-0 flex flex-col items-center justify-center">
                                          <span
                                            className="text-white font-bold text-5xl scale-x-80"
                                            style={{
                                              WebkitTextStroke: "1px rgba(0, 0, 0, 0.38)",
                                              textShadow: `
                                              -1px -1px 0 #000,
                                               1px -1px 0 #000,
                                              -1px  1px 0 #000,
                                               1px  1px 0 #000
                                            `,
                                            }}
                                          >
                                            {epiphany.cost}
                                          </span>
                                          <div
                                            className="w-full h-0.5 bg-white mt-0.5 scale-x-80"
                                            style={{
                                              backgroundColor: "#ffffff",
                                              WebkitBoxShadow: `
                                              -1px -1px 0 #000,
                                               1px -1px 0 #000,
                                              -1px  1px 0 #000,
                                               1px  1px 0 #000
                                              `,
                                            }}
                                          />
                                        </div>

                                        {/* Name and Type */}
                                        <div className="flex-1 pt-0.5">
                                          <h5
                                            className="text-white font-bold text-[20px] leading-tight drop-shadow-lg"
                                            style={{
                                              textShadow: `
                                              -1px -1px 0 #000,
                                               1px -1px 0 #000,
                                              -1px  1px 0 #000,
                                               1px  1px 0 #000
                                            `,
                                              transform: "scaleX(0.65)",
                                              transformOrigin: "left",
                                              maxWidth: "180%",
                                              whiteSpace: "nowrap",
                                              overflow: "hidden",
                                            }}
                                          >
                                            {cardData.name}
                                          </h5>
                                          <div className="flex items-center gap-1">
                                            <img
                                              src={
                                                epiphany.type === "attack"
                                                  ? "/images/icon-category-card-attack.webp"
                                                  : epiphany.type === "skill"
                                                    ? "/images/icon-category-card-skill.webp"
                                                    : "/images/icon-category-card-upgrade.webp"
                                              }
                                              alt={epiphany.type}
                                              className="w-5 h-5"
                                            />
                                            <span
                                              className="text-white/100 text-[14px] font-large capitalize drop-shadow "
                                              style={{
                                                textShadow: `
                                              -1px -1px 0 #000,
                                               1px -1px 0 #000,
                                              -1px  1px 0 #000,
                                               1px  1px 0 #000
                                            `,
                                              }}
                                            >
                                              {epiphany.type}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
                                      {(() => {
                                        const { bracketedText, remainingText } = parseDescription(epiphany.description)
                                        return (
                                          <>
                                            {bracketedText && (
                                              <p
                                                className="text-center font-medium text-sm leading-snug m-0"
                                                style={{ color: "#e3b46c" }}
                                              >
                                                {bracketedText}
                                              </p>
                                            )}
                                            <p
                                              className="text-white text-center text-sm leading-snug m-0 whitespace-pre-line"
                                              dangerouslySetInnerHTML={{
                                                __html: remainingText.replace(
                                                  /(\d+%?)/g,
                                                  '<span style="color: #7ce2fb">$1</span>',
                                                ),
                                              }}
                                            />
                                          </>
                                        )
                                      })()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-purple-400">
                            {cardData.name} - Epiphany Guide
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            Detailed explanations for each epiphany variant
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6 mt-4">
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div key={index} className="p-4 rounded-lg bg-background/50 border border-border">
                              <div className="flex items-center gap-3 mb-3">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold ${getTierColor(epiphany.tier)}`}
                                >
                                  {epiphany.tier} Tier
                                </span>
                                <span className="text-sm font-semibold text-foreground">
                                  Cost: {epiphany.cost} | Type: <span className="capitalize">{epiphany.type}</span>
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{epiphany.reasoning}</p>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Recommended Save Data */}
            <section id="recommended-save-data" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">3. Recommended Save Data</h2>
              <p className="text-muted-foreground mb-6">
                Recommended deck builds to start with. These are examples - you can customize based on your playstyle.
              </p>

              <div className="space-y-12">
                {/* Build 1: High Draw Build */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-300">High Draw Build</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [XXX Points]
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Removed:</strong> 3 Starter Basic Cards
                  </p>

                  {/* 5 cards on top */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="relative rounded-lg overflow-hidden border-2 border-dashed border-red-500/50 bg-red-900/20"
                      >
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                          <span className="text-sm text-red-400 font-semibold">Card {i}</span>
                          <span className="text-xs text-red-400/70">[Placeholder]</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 5 cards on bottom */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {[6, 7, 8, 9, 10].map((i) => (
                      <div
                        key={i}
                        className="relative rounded-lg overflow-hidden border-2 border-dashed border-red-500/50 bg-red-900/20"
                      >
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                          <span className="text-sm text-red-400 font-semibold">Card {i}</span>
                          <span className="text-xs text-red-400/70">[Placeholder]</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Strategy dropdown */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full px-4 py-2.5 rounded-lg bg-background/50 border border-border hover:bg-background/70 transition-colors flex items-center justify-between group">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                        Build Strategy & Explanation
                      </span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <div className="p-4 rounded-lg bg-background/50 border border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          [Placeholder: Explanation why this build works, when to use it, key combos, playstyle tips,
                          etc.]
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Build 2: Burst Damage Build */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-300">Burst Damage Build</h3>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-bold">
                      [XXX Points]
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Removed:</strong> 3 Starter Basic Cards
                  </p>

                  {/* 5 cards on top */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {/* Placeholder cards matching the High Draw Build style */}
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="relative rounded-lg overflow-hidden border-2 border-dashed border-red-500/50 bg-red-900/20"
                      >
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                          <span className="text-sm text-red-400 font-semibold">Card {i}</span>
                          <span className="text-xs text-red-400/70">[Placeholder]</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 5 cards on bottom */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {[6, 7, 8, 9, 10].map((i) => (
                      <div
                        key={i}
                        className="relative rounded-lg overflow-hidden border-2 border-dashed border-red-500/50 bg-red-900/20"
                      >
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                          <span className="text-sm text-red-400 font-semibold">Card {i}</span>
                          <span className="text-xs text-red-400/70">[Placeholder]</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Collapsible>
                    <CollapsibleTrigger className="w-full px-4 py-2.5 rounded-lg bg-background/50 border border-border hover:bg-background/70 transition-colors flex items-center justify-between group">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                        Build Strategy & Explanation
                      </span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <div className="p-4 rounded-lg bg-background/50 border border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          [Placeholder: Build explanation]
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            {/* 4. Memory Fragments */}
            <section id="memory-fragments" className="rounded-xl border border-border bg-card p-6 md:p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-8 text-purple-400 text-center">Memory Fragments</h2>

              {/* Added state for expanded memory sets */}
              <div className="space-y-12">
                {/* BEST IN SLOT */}
                <div>
                  <div className="text-center mb-6">
                    <span className="px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm">
                      Best in Slot
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      {
                        name: "Black Wing",
                        effect: "+12% Attack",
                        icon: "/images/sets/black-wing.webp",
                        why: "Why?",
                      },
                      {
                        name: "Executioner's Tool",
                        effect: "+25% Critical Damage",
                        icon: "/images/sets/executioners-tool.webp",
                        why: "Why?",
                      },
                      {
                        name: "Cursed Corpse",
                        effect: "Increases damage dealt to target inflicted with Agony by 10%",
                        icon: "/images/sets/cursed-corpse.webp",
                        why: "Prioritize Cursed Corpse when Agony debuff is reliably applied. Otherwise, slot any Memory Fragment piece purely for its substats"
                      },
                    ].map((set) => (
                      <ExpandableSetCard
                        key={set.name + "bis"}
                        set={set}
                        tier="bis"
                        isExpanded={expandedMemorySet === set.name + "bis"}
                        onToggle={() => setExpandedMemorySet(expandedMemorySet === set.name + "bis" ? null : set.name + "bis")}
                      />
                    ))}
                  </div>
                </div>

                {/* SECONDARY */}
                <div>
                  <div className="text-center mb-6">
                    <span className="px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                      Secondary
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      {
                        name: "Spark of Passion",
                        effect:
                          "When Upgrade Cards are used, increase Damage Amount of the next 5 Passion Cards used by 20%",
                        icon: "/images/sets/spark-of-passion.webp",
                        why: "Due to Veronica's Reload mechanic, the Passion set's 20% bonus is effectively outperformed by the consistent +12% Attack provided by Black Wing. While Passion is a viable option, Black Wing offers better overall performance for her."
                      },

                      {
                        name: "Black Wing",
                        effect: "+12% Attack",
                        icon: "/images/sets/black-wing.webp",
                        why: "Why?",                      
                      },
                    ].map((set) => (
                      <ExpandableSetCard
                        key={set.name + "secondary"}
                        set={set}
                        tier="secondary"
                        isExpanded={expandedMemorySet === set.name + "secondary"}
                        onToggle={() => setExpandedMemorySet(expandedMemorySet === set.name + "secondary" ? null : set.name + "secondary")}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Stats + Substat Priority */}
              <div className="mt-8 space-y-7">
                {/* Main Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">IV</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Ideal</div>
                    <div className="py-2 px-4 rounded bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-300">
                      Critical Rate
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400">V</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Desire</div>
                    <div className="py-2 px-4 rounded bg-red-500/10 border border-red-500/30 text-sm font-medium text-red-300">
                      Passion Damage
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">VI</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Imagination</div>
                    <div className="py-2 px-4 rounded bg-cyan-500/10 border border-cyan-500/30 text-sm font-medium text-cyan-300">
                      Attack %
                    </div>
                  </div>
                </div>

                {/* Substat Priority */}
                <div className="mt-10 text-center justify-center text-[12px]">
                  {/* Priority Chain */}
                  <div className="flex items-center justify-center gap-4 md:gap-4 flex-wrap">
                    <div className="px-6 py-3 rounded-full bg-pink-500/20 border-2 border-pink-500/70 font-bold text-pink-300 shadow-lg shadow-pink-500/20">
                      Extra Damage
                    </div>
                    <span className="text-3xl font-light text-muted-foreground/40 select-none">›</span>
                    <div className="px-5 py-2.5 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Critical Rate
                    </div>
                    <span className="text-3xl font-light text-muted-foreground/40 select-none">›</span>
                    <div className="px-5 py-2.5 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Critical Damage
                    </div>
                    <span className="text-2xl text-muted-foreground/40">›</span>
                    <div className="px-5 py-2 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      Attack %
                    </div>
                    <span className="text-muted-foreground/60 mx-2">or</span>
                    <div className="px-5 py-2 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      Attack +
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mt-7.5 mx-auto text-center">
                    <p className="text-[12px] leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">bleh blah blah</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Partners */}
            <section id="partners" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">5. Partners</h2>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
                {`Placeholder`}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  {
                    id: 1,
                    name: "Daisy",
                    role: "C",
                    image: "/images/partners/partner1.png",
                    description: "Placeholder partner explanation",
                    synergy: "Placeholder synergy details",
                  },
                  {
                    id: 2,
                    name: "Nakia",
                    role: "S",
                    image: "/images/partners/partner2.png",
                    description: "Placeholder partner explanation",
                    synergy: "Placeholder synergy details",
                  },
                  {
                    id: 3,
                    name: "Marin",
                    role: "B",
                    image: "/images/partners/partner3.png",
                    description: "Placeholder partner explanation",
                    synergy: "Placeholder synergy details",
                  },
                  {
                    id: 4,
                    name: "Rosaria",
                    role: "S+",
                    image: "/images/partners/partner4.png",
                    description: "Placeholder partner explanation",
                    synergy: "Placeholder synergy details",
                  },
                  {
                    id: 5,
                    name: "Solia",
                    role: "A",
                    image: "/images/partners/partner5.png",
                    description: "Placeholder partner explanation",
                    synergy: "Placeholder synergy details",
                  },
                  {
                    id: 6,
                    name: "Tina",
                    role: "?",
                    image: "/images/partners/partner6.png",
                    description: "Placeholder partner explanation",
                    synergy: "Placeholder synergy details",
                  },
                ].map((partner) => (
                  <Dialog
                    key={partner.id}
                    open={selectedPartner === partner.id}
                    onOpenChange={(open) => setSelectedPartner(open ? partner.id : null)}
                  >
                    <DialogTrigger asChild>
                      <div className="relative aspect-[9/16] hover:scale-105 rounded-lg overflow-hidden border-2 border-border hover:border-purple-400 bg-card cursor-pointer transition-all ">
                        <img
                          src={partner.image || "/placeholder.svg"}
                          alt={partner.name}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2 pt-6">
                          <p className="text-[18px] font-semibold text-white text-center">{partner.name}</p>
                          <p className="text-[24px] text-purple-300 text-center px-5">{partner.role}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-purple-400 text-center">{partner.name}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div className="flex justify-center">
                          <img
                            src={partner.image || "/placeholder.svg"}
                            alt={partner.name}
                            className="w-48 h-auto rounded-lg border-2 border-purple-500/50"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Why Use This Partner?</h3>
                          <p className="text-muted-foreground leading-relaxed">{partner.description}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Synergy Details</h3>
                          <p className="text-muted-foreground leading-relaxed">{partner.synergy}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </section>

            {/* 6. Teams */}
            <section id="teams" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">6. Teams</h2>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
                Placeholder
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Team 1 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
                        <h3 className="text-base font-semibold text-purple-400">Passion Weakness</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {/* Veronica */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-purple-500/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/veronicahalf.webp"
                            alt="Veronica"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Veronica</p>
                          </div>
                        </div>

                        {/* Mei Lin */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-500/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/meilinhalf.webp"
                            alt="Mei Lin"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-striker.webp" alt="Striker" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Mei Lin</p>
                          </div>
                        </div>

                        {/* Rei */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-500/50 bg-card shadow-md group- transition-transform">
                          <img src="/images/characters/reihalf.webp" alt="Rei" className="object-cover w-full h-full" />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Rei</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-medium">[Placeholder Name]</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-purple-400">Team 1: [Placeholder Name]</DialogTitle>
                      <DialogDescription>Detailed team composition and synergy explanation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        [Placeholder explanation for Team 1 - why this composition works, synergies between characters,
                        role distribution (DPS/Support/Control), strengths and weaknesses, ideal use cases and game
                        modes]
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Team 2 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent p-4 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <h3 className="text-base font-semibold text-blue-400">Team 2</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {/* Veronica */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-purple-500/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/veronicahalf.webp"
                            alt="Veronica"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Veronica</p>
                          </div>
                        </div>

                        {/* Haru */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-blue-500/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/haruhalf.webp"
                            alt="Haru"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Haru</p>
                          </div>
                        </div>

                        {/* Orlea */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-pink-500/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/orleahalf.webp"
                            alt="Orlea"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-vanguard.webp" alt="Vanguard" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-instinct.webp" alt="Instinct" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Orlea</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-medium">[Placeholder Name]</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-blue-400">Team 2: [Placeholder Name]</DialogTitle>
                      <DialogDescription>Detailed team composition and synergy explanation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        [Placeholder explanation for Team 2 - why this composition works, synergies between characters,
                        role distribution (DPS/Support/Control), strengths and weaknesses, ideal use cases and game
                        modes]
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Team 3 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent p-4 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                        <h3 className="text-base font-semibold text-cyan-400">Team 3</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {/* Veronica */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-purple-500/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/veronicahalf.webp"
                            alt="Veronica"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Veronica</p>
                          </div>
                        </div>

                        {/* Rin */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-blue-500/50 bg-card shadow-md group- transition-transform">
                          <img src="/images/characters/rinhalf.webp" alt="Rin" className="object-cover w-full h-full" />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Rin</p>
                          </div>
                        </div>

                        {/* Owen */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-gray-500/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/owenhalf.webp"
                            alt="Owen"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                            </div>
                            <div className="w-6 h-6 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-order.webp" alt="Order" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-[10px] font-semibold text-white text-center">Owen</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-medium">[Placeholder Name]</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-cyan-400">Team 3: [Placeholder Name]</DialogTitle>
                      <DialogDescription>Detailed team composition and synergy explanation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        [Placeholder explanation for Team 3 - why this composition works, synergies between characters,
                        role distribution (DPS/Support/Control), strengths and weaknesses, ideal use cases and game
                        modes]
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}