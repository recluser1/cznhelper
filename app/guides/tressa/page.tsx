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
import { GearTooltip } from "@/components/GearTooltip"; // adjust the path if needed



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
    { id: "pendant-of-resolution", title: "2.4. Pendant of Resolution", level: 2 },
    { id: "sir-kowalski", title: "2.3. Sir Kowalski", level: 2 },
    { id: "recommended-save-data", title: "3. Recommended Save Data", level: 1 },
    { id: "equipments", title: "3.1. Equipments", level: 2 },
    { id: "memory-fragments", title: "4. Memory Fragments", level: 1 },
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
          tier: "S",
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
          tier: "A",
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
          tier: "A",
          cost: 0,
          type: "upgrade",
          description:
            "[ Unique ] When another combatant uses Skill Card, 1 Reload \nIf 3 are used, at the start of the next turn, create 1 Micro Ballista card(s)",
          reasoning: "[Placeholder]",
        },
        {
          tier: "B",
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
        return `
          bg-black/80
          text-pink-400
          font-black text-xs tracking-widest
          border border-pink-500/60
          shadow-lg shadow-pink-500/30
          ring-1 ring-pink-500/40
          ring-offset-1 ring-offset-pink-900/20
          relative overflow-hidden
        `
  
      case "S":
        return `
          bg-black/80
          text-orange-400
          font-bold text-xs tracking-wider
          border border-orange-500/60
          shadow-lg shadow-orange-500/25
          ring-1 ring-orange-500/30
          ring-offset-1 ring-offset-orange-900/20
        `
  
      case "A":
        return `
          bg-black/70
          text-purple-300
          font-bold text-xs tracking-wide
          border border-purple-500/50
          shadow-md shadow-purple-500/20
          ring-1 ring-purple-500/20
        `
  
      case "B":
        return `
          bg-black/60
          text-cyan-300
          font-semibold text-xs
          border border-cyan-600/40
          shadow shadow-cyan-500/10
        `
  
      case "C":
        return `
          bg-black/50
          text-emerald-400
          font-medium text-xs
          border border-emerald-700/30
        `
  
      case "Situational":
      case "Niche":
        return `
          bg-gray-900/80
          text-gray-400
          font-medium text-xs
          border border-gray-700/50
        `
  
      default:
        return "bg-gray-900/70 text-gray-600 border border-gray-800/50 text-xs"
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
            <section id="overview" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
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
            <section id="card-epiphany" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">2. Card Epiphany</h2>
              <p className="text-muted-foreground mb-6">
              S+ (Best), S (Excellent), A (Strong), B (Average), C (Low Impact), Situational (Niche-use only).
              <br />
              Click a Epiphany group for explanation.
              </p>

              <div className="space-y-12">
                {uniqueCards.map((cardData) => (
                  <div key={cardData.id} id={cardData.id} className="scroll-mt-6">
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
                                    className="w-full h-full object-cover scale-108"
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
                            Detailed explanations for each epiphany
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
            <section id="recommended-save-data" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">3. Recommended Save Data</h2>
              <p className="text-muted-foreground mb-6">
                These are examples - you can change based on your playstyle.
              </p>

              <div className="space-y-12">
                {/* Build 1 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-300">Draw Engine</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [XXX]
                    </span>
                  </div>

                  {/* 5 cards on top */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {[1, 2, 3, 4, 5,].map((i) => (
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

                  {/* Dropdown */}
                  <Collapsible>
                    <CollapsibleTrigger className="w-full px-4 py-2.5 rounded-lg bg-background/50 border border-border hover:bg-background/70 transition-colors flex items-center justify-between group">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                        Save Data Explanation
                      </span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <div className="p-4 rounded-lg bg-background/50 border border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Explanation will be added here
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Build 2 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-300">Mei Lin</h3>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-bold">
                      [XXX Points]
                    </span>
                  </div>

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

                  <Collapsible>
                    <CollapsibleTrigger className="w-full px-4 py-2.5 rounded-lg bg-background/50 border border-border hover:bg-background/70 transition-colors flex items-center justify-between group">
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                        Save Data Explanation
                      </span>
                      <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform group-data-[state=open]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-3">
                      <div className="p-4 rounded-lg bg-background/50 border border-border">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Explanation will be added here
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            {/* 3.1. Equipments */}
            <section id="equipments" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">3.1. Equipments</h2>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
                These are her best equipment options, listed by priority, you usually can’t equip them all at once.
                <br/>
                Only one unique item per character or they come from different Chaos Manifestations.
                <br/>
                Hover over the tooltip to see each item’s source.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Weapon Category */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-lg font-bold text-orange-300">Weapon</h3>
                  </div>

                {/* Best in Slot Weapon */}
                <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                  <GearTooltip text={`Cthulu Monster`} />

                  <div className="relative w-21 h-32 flex-shrink-1">
                    <img
                      src="/images/bg_equipment_rarity_unique.webp"
                      alt="Unique Rarity"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/images/gear/intellect.webp"
                        alt="Intellect of Discord"
                        className="w-16 h-16 object-contain relative z-10"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
                      Intellect of Discord
                    </h4>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                      <span>Attack</span>
                      <span className="text-white font-semibold">+82</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      +<span className="text-[#FF8C00]">18</span>% Attack<br/>
                      On Ravage, decrease Stress of allies by <span className="text-[#FF8C00]">1</span>
                    </p>
                  </div>
                </div>

                {/* Show More Weapons Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                  <div className="flex justify-center w-full">
                    <button
                      className="flex items-center justify-center gap-2 text-xs w-40
                                rounded-lg overflow-hidden border border-border bg-card 
                                hover:border-purple-400 transition-all duration-300 
                                hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 py-1 mt-3"
                    >
                      Show More
                      <ChevronDown className="h-3 w-3"/>
                    </button>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl w-full bg-gray-900 p-6 rounded-lg overflow-y-auto max-h-[80vh] scrollbar-none">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold">
                      Alternative Weapon
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-300">
                      Scroll to see more options, listed by priority.
                    </DialogDescription>
                  </DialogHeader>

                    <div className="space-y-4 mt-4">


                      {/* 2nd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Cthulu Monster`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_unique.webp"
                            alt="Unique Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/tentacles.webp" alt="Tentacles of Chaos" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
                            Tentacles of Chaos
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            +<span className="text-[#FF8C00]">8</span>% ally Attack<br/>
                            Upon enemy Defeat, -<span className="text-[#FF8C00]">2</span> Stress to the Combatant<br/> with the highest Stress
                          </p>
                        </div>
                      </div>

                      {/* 3rd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`City of Mist
                      Laboratory 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_unique.webp"
                            alt="Unique Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/foggy.webp" alt="Foggy Crystal Ball" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
                            Foggy Crystal Ball
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Increase Damage Amount of Attack Cards with a
                            <br />
                            Cost of <span className="text-[#FF8C00]">0</span> by <span className="text-[#FF8C00]">40</span>%
                          </p>
                        </div>
                      </div>

                      {/* 4th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Seasonal Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/dopamine.webp" alt={`W-52 "Dopamine Injector"`} className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            W-52 "Dopamine Injector"
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When Drawing by an ability, increase Damage Amount by <span className="text-[#FF8C00]">20</span>%
                            for <span className="text-[#FF8C00]">1</span> turn (<span className="text-[#FF8C00]">2</span> times per turn)
                          </p>
                        </div>
                      </div>

                      {/* 5th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Laboratory 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/mutant.webp" alt={`Mutant Predator Spike`} className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            Mutant Predator Spike
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When there are <span className="text-[#FF8C00]">4</span> or more cards in hand<br/>increase Damage Amount by <span className="text-[#FF8C00]">30</span>%
                          </p>
                        </div>
                      </div>

                      {/* 6th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/second.webp" alt="Second Method" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            Second Method
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Extra Attack damage +<span className="text-[#FF8C00]">35</span>%
                          </p>
                        </div>
                      </div>

                      {/* 7th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/rfs.webp" alt="RFS-17" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            RFS-17
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            +<span className="text-[#FF8C00]">10</span>% Critical Chance of Attack Cards with cost <span className="text-[#FF8C00]">0</span>
                          </p>
                        </div>
                      </div>

                      {/* 8th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/obsidian.webp" alt="Obsidian Sword" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(51, 160, 243)" }}>
                            Obsidian Sword
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            Increase damage amount by <span className="text-[#FF8C00]">12</span>%
                          </p>
                        </div>
                      </div>


                    
                    </div>
                    
                  </DialogContent>
                </Dialog>
                </div>

                {/* Armor Category */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-lg font-bold text-blue-300">Armor</h3>
                  </div>

                {/* Best in Slot Armor */}
                <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                  <GearTooltip text={`City of Mist
                    Laboratory 0`} />

                  <div className="relative w-21 h-32 flex-shrink-1">
                    <img
                      src="/images/bg_equipment_rarity_unique.webp"
                      alt="Unique Rarity"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/images/gear/fragment.webp"
                        alt="Fragment of the Empty Void"
                        className="w-16 h-16 object-contain relative z-10"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
                      Fragment of the Empty Void
                    </h4>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                      <span>Defense</span>
                      <span className="text-white font-semibold">+31</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      At the start of battle, Discard up to <span className="text-[#FF8C00]">3</span> cards, Draw equal to the number
                    </p>
                  </div>
                </div>

                {/* Show More Armor Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                  <div className="flex justify-center w-full">
                    <button
                      className="flex items-center justify-center gap-2 text-xs w-40
                                rounded-lg overflow-hidden border border-border bg-card 
                                hover:border-purple-400 transition-all duration-300 
                                hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 py-1 mt-3"
                    >
                      Show More
                      <ChevronDown className="h-3 w-3"/>
                    </button>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl w-full bg-gray-900 p-6 rounded-lg overflow-y-auto max-h-[80vh] scrollbar-none">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold">
                      Alternative Armor
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-300">
                      Scroll to see more options, listed by priority.
                    </DialogDescription>
                  </DialogHeader>

                    <div className="space-y-4 mt-4">

                      {/* 2nd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Laboratory 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/rocket.webp" alt="Rocket-Adorned Cape" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            Rocket-Adorned Cape
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Defense</span>
                            <span className="text-white font-semibold">+31</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            At the start of the battle,<br/> <span className="text-[#FF8C00]">1</span> Damage Reduction and Draw <span className="text-[#FF8C00]">1</span>
                          </p>
                        </div>
                      </div>

                      {/* 3rd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                      <GearTooltip text={`The Blue Pot
                          City of Mist
                          Laboratory 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/shield.webp" alt="Shield of the Watcher" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            Shield of the Watcher
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Defense</span>
                            <span className="text-white font-semibold">+31</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When taking Damage, <span className="text-[#FF8C00]">1</span> Mark on the attacker
                          </p>
                        </div>
                      </div>

                      {/* 4th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Laboratory 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/wings.webp" alt="Wings of Freedom" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            Wings of Freedom
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Defense</span>
                            <span className="text-white font-semibold">+31</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                           When hit, increase Damage Amount <span className="text-[#FF8C00]">10</span>% <br/>(can stack up to <span className="text-[#FF8C00]">3</span> times)
                          </p>
                        </div>
                      </div>

                      {/* 5th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                       <GearTooltip text={`Seasonal Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/brainwave.webp" alt="Brainwave-Blocking Helmet" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(51, 160, 243)" }}>
                            Brainwave-Blocking Helmet
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Defense</span>
                            <span className="text-white font-semibold">+31</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When Drawing by an ability, <span className="text-[#FF8C00]">40</span>% Fixed Shield
                          </p>
                        </div>
                      </div>

                    </div>
                  </DialogContent>
                </Dialog>
                </div>


                {/* Acessory Category */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-lg font-bold text-purple-300">Acessory</h3>
                  </div>

                {/* Best in Slot Acessory */}
                <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                  <GearTooltip text={`Cthulu Monster`} />

                  <div className="relative w-21 h-32 flex-shrink-1">
                    <img
                      src="/images/bg_equipment_rarity_unique.webp"
                      alt="Unique Rarity"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/images/gear/sphere.webp"
                        alt="Sphere of Randomness"
                        className="w-16 h-16 object-contain relative z-10"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
                      Sphere of Randomness
                    </h4>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                      <span>Health</span>
                      <span className="text-white font-semibold">+83</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      +<span className="text-[#FF8C00]">10</span>% max HP <br/>
                      At the start of battle, +<span className="text-[#FF8C00]">1</span> AP, Draw <span className="text-[#FF8C00]">1</span>
                    </p>
                  </div>
                </div>

                {/* Show More Acessory Modal */}
                <Dialog>
                  <DialogTrigger asChild>
                  <div className="flex justify-center w-full">
                    <button
                      className="flex items-center justify-center gap-2 text-xs w-40
                                rounded-lg overflow-hidden border border-border bg-card 
                                hover:border-purple-400 transition-all duration-300 
                                hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 py-1 mt-3"
                    >
                      Show More
                      <ChevronDown className="h-3 w-3"/>
                    </button>
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl w-full bg-gray-900 p-6 rounded-lg overflow-y-auto max-h-[80vh] scrollbar-none">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold">
                      Alternative Acessory
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-300">
                      Scroll to see more options, listed by priority.
                    </DialogDescription>
                  </DialogHeader>

                    <div className="space-y-4 mt-4">

                      {/* 2nd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Seasonal Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/superconduct.webp" alt="Superconductive Protein" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                            Superconductive Protein
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                           At the start of the battle, change the cost of <span className="text-[#FF8C00]">1</span> card in your hand to <span className="text-[#FF8C00]">0</span> for <span className="text-[#FF8C00]">1</span> turn
                          </p>
                        </div>
                      </div>

                      {/* 3rd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Twin Star's Shadow`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_unique.webp"
                            alt="Unique Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/pulsating.webp" alt="Pulsating Egg" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
                           Pulsating Egg
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                           +<span className="text-[#FF8C00]">15</span>% Attack, +<span className="text-[#FF8C00]">10</span>% Max HP
                          </p>
                        </div>
                      </div>

                      {/* 4th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Swamp of Judgment`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_unique.webp"
                            alt="Unique Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/verdant.webp" alt="Verdant Shackles" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(163, 96, 255)" }}>
                          Verdant Shackles
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                          +<span className="text-[#FF8C00]">12</span>% Attack, +<span className="text-[#FF8C00]">12</span>% Defense
                          </p>
                        </div>
                      </div>

                      {/* 5th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Seasonal Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/emblem.webp" alt="Emblem of an Exceptional Entity" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(255, 150, 0)" }}>
                          Emblem of an Exceptional Entity
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                          +<span className="text-[#FF8C00]">30</span>% Damage Amount<br/>
                          Stress received becomes <span className="text-[#FF8C00]">0</span> (<span className="text-[#FF8C00]">1</span> for each battle)
                          </p>
                        </div>
                      </div>

                      {/* 5th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                       <GearTooltip text={`Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/cube.webp" alt="Amorphous Cube" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(51, 160, 243)" }}>
                            Amorphous Cube
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            At the start of battle, +<span className="text-[#FF8C00]">25</span>% Damage
                          </p>
                        </div>
                      </div>


                    </div>
                   </DialogContent>
                  </Dialog>
                </div>
              </div>
            </section>


            {/* 4. Memory Fragments */}
            <section id="memory-fragments" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">4. Memory Fragments</h2>

              {/* BEST IN SLOT */}
              <div className="space-y-12">
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
                        why: "Due to Veronica's Reload mechanic, the Passion set's 20% bonus is effectively outperformed by the consistent +12% Attack provided by Black Wing or +25% Critical Damage from Executioner's Tool. While Passion is a viable option, using 2/2 set offers better overall performance for her."
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
              <div className="mt-6 space-y-6">
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
                <div className="mt-8 text-center justify-center text-[14px]">
                  {/* Priority Chain */}
                  <div className="flex items-center justify-center gap-4 md:gap-4 flex-wrap">
                    <div className="px-6 py-3 rounded-full bg-pink-500/20 border-2 border-pink-500/70 font-bold text-pink-300 shadow-lg shadow-pink-500/20">
                      Extra Damage
                    </div>
                    <span className="text-2xl text-muted-foreground/40">›</span>
                    <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Critical Rate
                    </div>
                    <span className="text-2xl text-muted-foreground/40">=</span>
                    <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Critical Damage
                    </div>
                    <span className="text-2xl text-muted-foreground/40">›</span>
                    <div className="px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      Attack %
                    </div>
                    <span className="text-muted-foreground/60">or</span>
                    <div className="px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      Attack +
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mt-7.5 mx-auto text-center">
                    <p className="text-[12px] leading-relaxed text-muted-foreground">
                      <strong className="text-muted-foreground">Text will be added here</strong>
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
                    role: "S+",
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
                    role: "",
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
                      <div className="flex flex-col items-center gap-4 cursor-pointer">
                        {/* Tier Badge outside the card */}
                        <span className={`px-3 py-1.5 rounded-full text-sm font-bold ${getTierColor(partner.role)}`}>
                          {partner.role} Tier
                        </span>
              
                        {/* Card Image */}
                        <div className="relative aspect-[9/16] hover:scale-105 rounded-lg overflow-hidden border-2 border-border hover:border-purple-400 bg-card transition-all">
                          <img
                            src={partner.image || "/placeholder.svg"}
                            alt={partner.name}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-2 pt-6">
                            <p className="text-[18px] py-2 font-semibold text-white text-center">{partner.name}</p>
                          </div>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team 1 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <h3 className="text-base font-semibold text-[#ff7a7a]">Mei Lin Hypercarry</h3>
                        </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">

                        {/* Veronica */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/veronicahalf.webp"
                            alt="Veronica"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Veronica</p>
                          </div>
                        </div>

                        {/* Mei Lin */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/meilinhalf.webp"
                            alt="Mei Lin"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-striker.webp" alt="Striker" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Mei Lin</p>
                          </div>
                        </div>

                        {/* Rei */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
                          <img src="/images/characters/reihalf.webp" alt="Rei" className="object-cover w-full h-full" />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Rei</p>
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
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <h3 className="text-base font-semibold text-[#ff7a7a]">Veronica DPS</h3>
                        </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">

                        {/* Veronica */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/veronicahalf.webp"
                            alt="Veronica"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Veronica</p>
                          </div>
                        </div>

                        {/* Owen */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/owenhalf.webp"
                            alt="Owen"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-striker.webp" alt="Striker" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Owen</p>
                          </div>
                        </div>

                        {/* Rei */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
                          <img src="/images/characters/reihalf.webp" alt="Rei" className="object-cover w-full h-full" />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Rei</p>
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
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}