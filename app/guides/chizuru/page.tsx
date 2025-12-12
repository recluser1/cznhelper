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
import { describe } from "node:test"



export default function ChizuruGuidePage() {
  const [expandedEpiphany, setExpandedEpiphany] = useState<string | null>(null)
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(null)
  const [isCardEpiphanyModalOpen, setIsCardEpiphanyModalOpen] = useState(false)
  const [isTeamsModalOpen, setIsTeamsModalOpen] = useState(false)
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null)

  const sections = [
    { id: "overview", title: "1. Overview", level: 1 },
    { id: "card-epiphany", title: "2. Card Epiphany", level: 1 },
    { id: "karmic-flames", title: "2.1. Karmic Flames", level: 2 },
    { id: "tsukuyomi", title: "2.2. Tsukuyomi", level: 2 },
    { id: "bound-at-dusk", title: "2.3. Bound at Dusk", level: 2 },
    { id: "oni-hunt", title: "2.4. Oni Hunt", level: 2 },
    { id: "recommended-save-data", title: "3. Recommended Save Data", level: 1 },
    { id: "equipments", title: "3.1. Equipments", level: 2 },
    { id: "memory-fragments", title: "4. Memory Fragments", level: 1 },
    { id: "partners", title: "5. Partners", level: 1 },
    { id: "teams", title: "6. Teams", level: 1 },
  ]

  const uniqueCards = [
    {
      id: "karmic-flames",
      name: "Karmic Flames",
      image: "/images/character/chizuru/starter4.png",
      baseType: "attack",
      epiphanies: [
        {
          id: "Karmic Flames I",
          tier: "A",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
          reasoning: "Extra hit is good for Wil o Wisp Stacking if better options are not available.",
        },
        {
          id: "Karmic Flames II",
          tier: "S",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles:\nDecrease Cost of the\nnext card of this unit\nused by 1",
          reasoning: "Refunds itself (only on enemies with shackle already), but requires Draw support",
        },
        {
          id: "Karmic Flames III",
          tier: "B",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 216% Damage\n1 Cursed Shackles\nCursed Shackles:\nIncrease Damage\nAmount by 100%",
          reasoning: "Single Target Damage, really bad compared to other options.",
        },
        {
          id: "Karmic Flames IV",
          tier: "C",
          cost: 2,
          type: "skill",
          description: "[ Initiation ] 1 Cursed Shackles\nCreate 1 Shadow of the\nMoon",
          reasoning: "Expensive, but 5 wisps, is good with Bound At Dusk 5",
        },
        {
          id: "Karmic Flames V",
          tier: "S+",
          cost: 1,
          type: "skill",
          description: "[ Initiation / Exhaust] 1 Cursed Shackles\nWhen a target inflicted\nwith Cursed Shackles\nis defeated, create this\ncard",
          reasoning: "Best Karmic Flames option, Exhausts itself and it returns once you finish off the ST, but worse others for Multi/Spawn Mobs",
        },
      ],
    },
    {
      id: "tsukuyomi",
      name: "Tsukuyomi",
      image: "/images/character/chizuru/unique1.png",
      baseType: "skill",
      epiphanies: [
        {
          id: "Tsukuyomi I",
          tier: "S",
          cost: 0,
          type: "skill",
          description: "3 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used",
          reasoning: "Best source of Will-O'-Wisp, it is a direct upgrade of the base card",
        },
        {
          id: "Tsukuyomi II",
          tier: "A",
          cost: 0,
          type: "skill",
          description: "Add 1 Hit(s) to the next\nAttack Card of this unit\nused, 1 Will-O'-Wisp for\neach Hit",
          reasoning: "+1 Hit but much less Will-O'-Wisp generation",
        },
        {
          id: "Tsukuyomi III",
          tier: "S+",
          cost: 0,
          type: "skill",
          description:
            "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+\nused",
          reasoning: "+2 hit to moon, infinite stacking, with Rei or Orlea, its insane",
        },
        {
          id: "Tsukuyomi IV",
          tier: "C",
          cost: 0,
          type: "skill",
          description: "3 Will-O'-Wisp for each\nAttack Card of this unit\nin hand",
          reasoning: "Because it only works for Chizuru's Cards, it is not possible to get many stacks",
        },
        {
          id: "Tsukuyomi V",
          tier: "Situational",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Lead ] When an Attack Card\nof this unit is used, 2\nWill-O'-Wisp",
          reasoning: "Insanely good with Oni 4 and good if you have duped base Tsukuyomi",
        },
      ],
    },
    {
      id: "bound-at-dusk",
      name: "Bound At Dusk",
      image: "/images/character/chizuru/unique2.png",
      baseType: "upgrade",
      epiphanies: [
        {
          id: "Bound At Dusk I",
          tier: "S+",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost by 1\nuntil 2 random card(s)\nare used",
          reasoning: "Technically +2 AP but it's still RNG and can potentially break Conqueror set",
        },
        {
          id: "Bound At Dusk II",
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nWhen Shadow of the\nMoon+ is used, decrease\nCost of the next 1 card(s)\nused by 1",
          reasoning: "Good for spamming Shadow of the Moon+, needs draw supports and a bit of luck",
        },
        {
          id: "Bound At Dusk III",
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\ncard(s) of other\nCombatants",
          reasoning: "Good with allies that doesn't have 0 cost cards",
        },
        {
          id: "Bound At Dusk IV",
          tier: "C",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\nLead cards",
          reasoning: "Way too reliant on RNG to be a good option",
        },
        {
          id: "Bound At Dusk V",
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost of the\ncard with the highest\nCost by 2",
          reasoning: "Only synergizes with Karmic Flames IV for Chizuru herself, not a strong pick",
        },
      ],
    },
    {
      id: "oni-hunt",
      name: "Oni Hunt",
      image: "/images/character/chizuru/unique3.png",
      baseType: "attack",
      epiphanies: [
        {
          id: "Oni Hunt I",
          tier: "S+",
          cost: 1,
          type: "attack",
          description: "[ Haste ] 60% Damage x 4\n+40% Damage Amount\nto the next Bind card\nused",
          reasoning: "4 Will-O'-Wisp stacks on use, additive damage bonus synergy and increased SotM damage",
        },
        {
          id: "Oni Hunt II",
          tier: "A",
          cost: 1,
          type: "attack",
          description: "[ Haste ] 216% Damage\n+60% Damage Amount\nto the next Bind card\nused",
          reasoning: "Alternative to Oni Hunt I, however base Oni Hunt with Neutral epiphany is usually better",
        },
        {
          id: "Oni Hunt III",
          tier: "C",
          cost: 1,
          type: "attack",
          description: "[ Haste ] 72% Damage x 3\nIf there are no other\nAttack Cards in hand,\nadd 2 Hit(s)",
          reasoning: "Conditional +2 hits to base, no increase to SotM Damage, pretty bad pick",
        },
        {
          id: "Oni Hunt IV",
          tier: "S",
          cost: 1,
          type: "skill",
          description: "[ Haste ] Create 2 Moonslash\nApply Exhaust to those\ncards, decrease Cost\nby 1 until used",
          reasoning: "Can be used alongside Tsukuyomi V to spam Moonslash to generate Will-O'-Wisp",
        },
        {
          id: "Oni Hunt V",
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "[ Unique ] +40% Damage Amount\nto Shadow of the\nMoon+\nAt the start of the turn,\n3 Will-O'-Wisp",
          reasoning: "+40% Damage to SotM is not the best and 3 Will-O'-Wisp per turn isn't really that much",
        },
      ],
    },
  ]

  const recommendedSaveData1 = {
    "tsukuyomi-oni-mixed": {
      topRow: [
        { id: "card1", name: "Karmic Flames", image: "/images/character/chizuru/starter4.png", cost: 1, type: "skill", description: "[ Initiation / Exhaust] 1 Cursed Shackles\nWhen a target inflicted\nwith Cursed Shackles\nis defeated, create this\ncard" },
        { id: "card2", name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png", cost: 0, type: "skill", description: "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+\nused" },
        { id: "card3", name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png", cost: 0, type: "skill", description: "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+\nused" },
        { id: "card4", name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png", cost: 0, type: "skill", description: "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+\nused" },
        { id: "card5", name: "Placeholder", image: "/placeholder.svg", cost: 1, type: "skill", description: "" },
      ],
      bottomRow: [
        { id: "card6", name: "Bound At Dusk", image: "/images/character/chizuru/unique2.png", cost: 0, type: "upgrade", description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost by 1\nuntil 2 random card(s)\nare used" },
        { id: "card7", name: "Oni Hunt", image: "/images/character/chizuru/unique3.png", cost: 1, type: "attack", description: "[ Haste ] 60% Damage x 4\n+40% Damage Amount\nto the next Bind card\nused" },
        { id: "card8", name: "Oni Hunt", image: "/images/character/chizuru/unique3.png", cost: 1, type: "attack", description: "[ Haste ] 60% Damage x 4\n+40% Damage Amount\nto the next Bind card\nused" },
        { id: "card9", name: "Shadow of the Moon", image: "/images/character/chizuru/unique4.png", cost: 1, type: "attack", description: "[ Bind / Retain ] 72% Damage\n+20% Damage Amount\nfor each Bind stack" },
        { id: "card10", name: "Placeholder", image: "/placeholder.svg", cost: 0, type: "skill", description: "" },
      ],
    },
  }

  const recommendedSaveData2 = {
    "e2-moon-spam": {
      topRow: [
        { id: "card1", name: "Karmic Flames", image: "/images/character/chizuru/starter4.png", cost: 1, type: "skill", description: "[ Initiation / Exhaust] 1 Cursed Shackles\nWhen a target inflicted\nwith Cursed Shackles\nis defeated, create this\ncard" },
        { id: "card2", name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png", cost: 1, type: "upgrade", description: "[ Unique / Lead ] When an Attack Card\nof this unit is used, 2\nWill-O'-Wisp" },
        { id: "card3", name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png", cost: 0, type: "skill", description: "3 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used" },
        { id: "card4", name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png", cost: 0, type: "skill", description: "3 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used" },
        { id: "card5", name: "Placeholder", image: "/placeholder.svg", cost: 1, type: "skill", description: "" },
      ],
      bottomRow: [
        { id: "card6", name: "Tsukuyomi", image: "/images/character/chizuru/unique1.png", cost: 0, type: "skill", description: "3 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used" },
        { id: "card7", name: "Bound at Dusk", image: "/images/character/chizuru/unique2.png", cost: 1, type: "upgrade", description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nWhen Shadow of the\nMoon+ is used, decrease\nCost of the next 1 card(s)\nused by 1" },
        { id: "card8", name: "Oni Hunt", image: "/images/character/chizuru/unique3.png", cost: 1, type: "skill", description: "Create 2 Moonslash\nApply Exhaust to those\ncards, decrease Cost\nby 1 until used" },
        { id: "card9", name: "Shadow of the Moon", image: "/images/character/chizuru/unique4.png", cost: 1, type: "attack", description: "[ Bind / Retain ] 72% Damage\n+20% Damage Amount\nfor each Bind stack" },
        { id: "card10", name: "Placeholder", image: "/placeholder.svg", cost: 0, type: "skill", description: "" },
      ],
    },
  }

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
                Chizuru Guide
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
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/50">
                    <img src="/images/icon-ego-void.webp" alt="Void" className="w-5 h-5" />
                    <span className="text-purple-400 text-sm font-medium">Void</span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-500/20 border border-black-500/40">
                    <img src="/images/icon-job-psionic.webp" alt="Psionic" className="w-5 h-5" />
                    <span className="text-black-400 text-sm font-medium">Psionic</span>
                  </div>
                </div>

                <div className="rounded-sm bg-background/50 border border-border">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-purple-500/20 to-black/30 flex items-center justify-center warp">
                <img
                  src={`/images/characters/chizuru.webp`}
                  alt={`chizuru full artwork`}
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
                                {/* Void Border */}
                                <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                                  <img
                                    src="/images/card/void-border.png"
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
                                                className="text-center u font-medium text-sm underlineleading-snug m-0"
                                                style={{ color: "#e3b46c" }}
                                              >
                                                {bracketedText}
                                              </p>
                                            )}
                                            <p
                                                    className="text-white text-center text-sm leading-snug m-0 whitespace-pre-line"
                                                    dangerouslySetInnerHTML={{
                                                        __html: remainingText
                                                            .replace(
                                                                /(\d+%?)/g,
                                                                '<span style="color: #7ce2fb">$1</span>',
                                                            )
                                                            .replace(
                                                                /Shadow of the\s*Moon\+/gi,
                                                                '<span style="color: #C8FF2E; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                            ).replace(
                                                                /Moonslash/gi,
                                                                '<span style="color: #C8FF2E; text-decoration: underline; text-underline-offset: 2px">$&</span>',
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

                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto scrollbar-none">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-purple-400">
                            {cardData.name} - Epiphany Guide
                          </DialogTitle>
                          <DialogDescription className="text-[14px] text-white/70">
                            Detailed explanations for every Epiphany choice.
                            <br/>
                            Divine Epiphanies aren't covered here unless they give a major impact.
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
                                  {epiphany.id}
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
                    <h3 className="text-xl font-bold text-purple-300">Tsukuyomi & Oni Hunt Mixed Build</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [140 Faint Memory Cost without Convert Methods]
                    </span>
                  </div>

                  {/* 5 cards on top */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {recommendedSaveData1["tsukuyomi-oni-mixed"].topRow.map((card, index) => (
                      <div
                        key={card.id}
                        className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200"
                      >
                        {/* Void Border */}
                        <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                          <img
                            src="/images/card/void-border.png"
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Card Image */}
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                          {index === 4 || card.id === "card5" ? (
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <span className="text-sm text-muted-foreground font-semibold">Card 5</span>
                              <span className="text-xs text-muted-foreground/70">[Placeholder]</span>
                            </div>
                          ) : (
                            <>
                              <img
                                src={card.image || "/placeholder.svg"}
                                alt={card.name}
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
                                        {card.cost}
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
                                        {card.name}
                                      </h5>
                                      <div className="flex items-center gap-1">
                                        <img
                                          src={
                                            card.type === "attack"
                                              ? "/images/icon-category-card-attack.webp"
                                              : card.type === "skill"
                                                ? "/images/icon-category-card-skill.webp"
                                                : "/images/icon-category-card-upgrade.webp"
                                          }
                                          alt={card.type}
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
                                          {card.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Description Section */}
                                {card.description && (
                                  <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
                                    {(() => {
                                      const { bracketedText, remainingText } = parseDescription(card.description)
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
                                              __html: remainingText
                                                .replace(
                                                  /(\d+%?)/g,
                                                  '<span style="color: #7ce2fb">$1</span>',
                                                )
                                                .replace(
                                                  /Shadow of the\s*Moon\+/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ).replace(
                                                  /Moonslash/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ),
                                            }}
                                          />
                                        </>
                                      )
                                    })()}
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 5 cards on bottom */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {recommendedSaveData1["tsukuyomi-oni-mixed"].bottomRow.map((card, index) => (
                      <div
                        key={card.id}
                        className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200"
                      >
                        {/* Void Border */}
                        <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                          <img
                            src="/images/card/void-border.png"
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Card Image */}
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                          {index === 4 || card.id === "card10" ? (
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <span className="text-sm text-muted-foreground font-semibold">Card 10</span>
                              <span className="text-xs text-muted-foreground/70">[Placeholder]</span>
                            </div>
                          ) : (
                            <>
                              <img
                                src={card.image || "/placeholder.svg"}
                                alt={card.name}
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
                                        {card.cost}
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
                                        {card.name}
                                      </h5>
                                      <div className="flex items-center gap-1">
                                        <img
                                          src={
                                            card.type === "attack"
                                              ? "/images/icon-category-card-attack.webp"
                                              : card.type === "skill"
                                                ? "/images/icon-category-card-skill.webp"
                                                : "/images/icon-category-card-upgrade.webp"
                                          }
                                          alt={card.type}
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
                                          {card.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Description Section */}
                                {card.description && (
                                  <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
                                    {(() => {
                                      const { bracketedText, remainingText } = parseDescription(card.description)
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
                                              __html: remainingText
                                                .replace(
                                                  /(\d+%?)/g,
                                                  '<span style="color: #7ce2fb">$1</span>',
                                                )
                                                .replace(
                                                  /Shadow of the\s*Moon\+/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ).replace(
                                                  /Moonslash/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ),
                                            }}
                                          />
                                        </>
                                      )
                                    })()}
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dropdown  */}
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
                          Stack up for a huge Shadow of the Moon to Nuke the enemy
                          <br/>
                          Oni Hunt 2 or Oni Hunt 5 are also options for Orlea, just depends if you wanna spend buffs or not
                          <br/>
                          3 Tsukuyomi, 2 Oni Hunt is Optimal Ratio,
                          <br/>
                          2 Tsukuyomi, 3 Oni Hunt is also fine, 4 of one or the other is bad
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Build 2 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-300">E2 Shadow of the Moon+ Spam Build</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [140 Faint Memory Cost without Convert Methods]
                    </span>
                  </div>

                  {/* 5 cards on top */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {recommendedSaveData2["e2-moon-spam"].topRow.map((card, index) => (
                      <div
                        key={card.id}
                        className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200"
                      >
                        {/* Void Border */}
                        <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                          <img
                            src="/images/card/void-border.png"
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Card Image */}
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                          {index === 4 || card.id === "card5" ? (
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <span className="text-sm text-muted-foreground font-semibold">Card 5</span>
                              <span className="text-xs text-muted-foreground/70">[Placeholder]</span>
                            </div>
                          ) : (
                            <>
                              <img
                                src={card.image || "/placeholder.svg"}
                                alt={card.name}
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
                                        {card.cost}
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
                                        {card.name}
                                      </h5>
                                      <div className="flex items-center gap-1">
                                        <img
                                          src={
                                            card.type === "attack"
                                              ? "/images/icon-category-card-attack.webp"
                                              : card.type === "skill"
                                                ? "/images/icon-category-card-skill.webp"
                                                : "/images/icon-category-card-upgrade.webp"
                                          }
                                          alt={card.type}
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
                                          {card.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Description Section */}
                                {card.description && (
                                  <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
                                    {(() => {
                                      const { bracketedText, remainingText } = parseDescription(card.description)
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
                                              __html: remainingText
                                                .replace(
                                                  /(\d+%?)/g,
                                                  '<span style="color: #7ce2fb">$1</span>',
                                                )
                                                .replace(
                                                  /Shadow of the\s*Moon\+/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ).replace(
                                                  /Moonslash/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ),
                                            }}
                                          />
                                        </>
                                      )
                                    })()}
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 5 cards on bottom */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                    {recommendedSaveData2["e2-moon-spam"].bottomRow.map((card, index) => (
                      <div
                        key={card.id}
                        className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200"
                      >
                        {/* Void Border */}
                        <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                          <img
                            src="/images/card/void-border.png"
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Card Image */}
                        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                          {index === 4 || card.id === "card10" ? (
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <span className="text-sm text-muted-foreground font-semibold">Card 10</span>
                              <span className="text-xs text-muted-foreground/70">[Placeholder]</span>
                            </div>
                          ) : (
                            <>
                              <img
                                src={card.image || "/placeholder.svg"}
                                alt={card.name}
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
                                        {card.cost}
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
                                        {card.name}
                                      </h5>
                                      <div className="flex items-center gap-1">
                                        <img
                                          src={
                                            card.type === "attack"
                                              ? "/images/icon-category-card-attack.webp"
                                              : card.type === "skill"
                                                ? "/images/icon-category-card-skill.webp"
                                                : "/images/icon-category-card-upgrade.webp"
                                          }
                                          alt={card.type}
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
                                          {card.type}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Description Section */}
                                {card.description && (
                                  <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
                                    {(() => {
                                      const { bracketedText, remainingText } = parseDescription(card.description)
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
                                              __html: remainingText
                                                .replace(
                                                  /(\d+%?)/g,
                                                  '<span style="color: #7ce2fb">$1</span>',
                                                )
                                                .replace(
                                                  /Shadow of the\s*Moon\+/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ).replace(
                                                  /Moonslash/gi,
                                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',
                                                ),
                                            }}
                                          />
                                        </>
                                      )
                                    })()}
                                  </div>
                                )}
                              </div>
                            </>
                          )}
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
                        At E2, Tsukuyomi 1 + Tsukuyomi 5 on a Moon+ will refund itself, and then you can play 4 Moon+ in a row
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
                These are her best equipment options, only weapon is listed by priority, you usually can't equip them all at once.
                <br/>
                Only one unique item per character or they come from different Chaos Manifestations.
                <br/>
                Hover over the tooltip to see each item's source.
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
                        src="/images/gear/Intellect-Of-Discord.webp"
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
                            <img src="/images/gear/Tentacles-Of-Chaos.webp" alt="Tentacles of Chaos" className="w-16 h-16 object-contain relative z-10" />
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
                            <img src="/images/gear/Foggy-Crystal-Ball.webp" alt="Foggy Crystal Ball" className="w-16 h-16 object-contain relative z-10" />
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
                        <GearTooltip text={`Laboratory 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Mutant-Predator-Spike.webp" alt={`Mutant Predator Spike`} className="w-16 h-16 object-contain relative z-10" />
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

                      {/* 5th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/RFS-17.webp" alt="RFS-17" className="w-16 h-16 object-contain relative z-10" />
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

                      {/* 6th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Obsidian-Sword.webp" alt="Obsidian Sword" className="w-16 h-16 object-contain relative z-10" />
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

                      {/* 7th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Bone-Cutter.webp" alt={`Bone Cutter`} className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "rgb(51, 160, 243)" }}>
                            Bone Cutter
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When hitting a target under Weakened status, +<span className="text-[#FF8C00]">30</span>% Damage
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
                        src="/images/gear/Fragment-of-the-Empty-Void.webp"
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
                      Scroll to see more options.
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
                            <img src="/images/gear/Rocket-Adorned-Cape.webp" alt="Rocket-Adorned Cape" className="w-16 h-16 object-contain relative z-10" />
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
                            <img src="/images/gear/Shield-of-the-Watcher.webp" alt="Shield of the Watcher" className="w-16 h-16 object-contain relative z-10" />
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
                            <img src="/images/gear/Wings-of-Freedom.webp" alt="Wings of Freedom" className="w-16 h-16 object-contain relative z-10" />
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
                        src="/images/gear/Sphere-Of-Randomness.webp"
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
                      Scroll to see more options.
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
                            <img src="/images/gear/Superconductive-Protein.webp" alt="Superconductive Protein" className="w-16 h-16 object-contain relative z-10" />
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
                            <img src="/images/gear/Pulsating-Egg.webp" alt="Pulsating Egg" className="w-16 h-16 object-contain relative z-10" />
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
                        <GearTooltip text={`Seasonal Dellang Shop`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Emblem-of-an-Exceptional-Entity.webp" alt="Emblem of an Exceptional Entity" className="w-16 h-16 object-contain relative z-10" />
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
                            <img src="/images/gear/Amorphous-Cube.webp" alt="Amorphous Cube" className="w-16 h-16 object-contain relative z-10" />
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
                        why: "Best 2-Set bonus in general",
                      },
                      {
                        name: "Executioner's Tool",
                        effect: "+25% Critical Damage",
                        icon: "/images/sets/executioners-tool.webp",
                        why: "Best 2-Set bonus in general",
                      },
                      {
                        name: "Cursed Corpse",
                        effect: "Increases damage dealt to target inflicted with Agony by 10%",
                        icon: "/images/sets/cursed-corpse.webp",
                        why: "Optional damage boost if achievable, not required; substats are more important in general"
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
                        name: "Orb of Inhibition",
                        effect: "When Hitting 2 times with 1 Attack Card, +10% Damage Amount to <span style=\"color: #a78bfa\">Void</span> Cards for 1 turn (2 times per turn)",
                        icon: "/images/sets/orb-of-inhibition.webp",
                        why: "Weak and Conditional, but still better then Void set, because this set is Additve Generic."
                      },

                      {
                        name: "Executioner's Tool",
                        effect: "+25% Critical Damage",
                        icon: "/images/sets/executioners-tool.webp",
                        why: "Best 2 set bonus in general.",                      
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
                    <div className="text-3xl font-bold text-purple-400">V</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Desire</div>
                    <div className="py-2 px-4 rounded bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-300">
                      Void Damage
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">IV</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Ideal</div>
                    <div className="py-2 px-4 rounded bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-300">
                      Attack %
                    </div>
                  </div>
                </div>

                {/* Substat Priority */}
                <div className="mt-8 text-center justify-center text-[14px]">
                  {/* Priority Chain */}
                  <div className="flex items-center justify-center gap-4 md:gap-4 flex-wrap">
                    <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Critical Rate
                    </div>
                    <span className="text-2xl text-muted-foreground/40">=</span>
                    <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Critical Damage
                    </div>
                    <span className="text-2xl text-muted-foreground/40">›</span>
                    <div className="px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      Attack +
                    </div>
                    <span className="text-muted-foreground/60">›</span>
                    <div className="px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      Attack %
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mt-7.5 mx-auto text-center">
                    <p className="text-[14px] leading-relaxed text-muted-foreground">
                      <span className="text-muted-foreground">Prioritize Critical Rate and Critical Damage for ideal crit ratio. Then prioritize Flat Attack and Attack % for more damage.<br/>Void Damage% is preferred over Attack% for most cases.</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Partners */}
            <section id="partners" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">5. Partners</h2>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
                {`Click on the partners below to see more information.`}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  {
                    id: 1,
                    name: "Itsuku",
                    role: "S+",
                    image: "/images/partners/itsuku.webp",
                    description: "Signature Partner [BIS]\nPartner Skill can increase one turns damage by alot, fixed damage is largely irrelevant",
                  },
                  {
                    id: 2,
                    name: "Zatera",
                    role: "S",
                    image: "/images/partners/zatera.webp",
                    description: "Best F2P option as it provides a massive Attack boost.",
                  },
                  {
                    id: 3,
                    name: "Bria",
                    role: "A",
                    image: "/images/partners/bria.webp",
                    description: "Usable if you need Bria's Partner Skill Utility, otherwise bad.",
                  },
                  {
                    id: 4,
                    name: "Anteia",
                    role: "C",
                    image: "/images/partners/anteia.webp",
                    description: "Weaker at E0 than Zatera.",
                  },
                  {
                    id: 5,
                    name: "Eloise",
                    role: "Situational",
                    image: "/images/partners/eloise.webp",
                    description: "Chizuru doesn't have any Exhaust cards at base, so Eloise is not a good option.",
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
                          <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{partner.description}</p>
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
                Below are 2 example teams for Chizuru DPS
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team 1 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                        <h3 className="text-base font-semibold text-violet-400">Chizuru Hypercarry</h3>
                        </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">

                        {/* Chizuru */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/chizuruhalf.webp"
                            alt="Chizuru"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-psionic.webp" alt="Psionic" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Chizuru</p>
                          </div>
                        </div>

                        {/* Rei */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/reihalf.webp"
                            alt="Rei"
                            className="object-cover w-full h-full"
                          />
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

                        {/* Veronica */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-red-400/50 bg-card shadow-md group- transition-transform">
                          <img src="/images/characters/veronicahalf.webp" alt="Veronica" className="object-cover w-full h-full" />
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
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-medium">Rei Helps with Damage Buffs while Veronica helps with Draws</span>
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
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-purple-400">Team 1: Chizuru Hypercarry</DialogTitle>
                      <DialogDescription>Detailed team composition and synergy explanation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Why This Team Works</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This composition maximizes Chizuru's damage potential by providing the two things she needs most: <strong className="text-red-300">card draw</strong> and <strong className="text-purple-300">damage amplification</strong>. Chizuru's power comes from stacking Will-O'-Wisp (gained through hits) to empower her Shadow of the Moon attacks. Without proper support, she struggles to cycle through her deck and find key cards like Tsukuyomi and Shadow of the Moon.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Synergies</h3>
                          <div className="space-y-3 text-muted-foreground">
                            <div>
                              <strong className="text-purple-300">Rei + Chizuru:</strong> Rei provides damage buffs that multiply Chizuru's Shadow of the Moon damage. Both share Void Ego type, creating natural synergy. Rei's support is especially powerful with Tsukuyomi III (adds 2 hits to Shadow of the Moon), allowing for infinite stacking potential.
                            </div>
                            <div>
                              <strong className="text-red-300">Veronica</strong> +<strong className="text-purple-300"> Chizuru:</strong> Veronica's Repose (0 cost, Draw 2 other combatant's cards) solves Chizuru's card draw problem. This ensures Chizuru can consistently find her Tsukuyomi cards (which generate 3 Will-O'-Wisp per hit) and Shadow of the Moon cards to unleash her damage.
                            </div>
                            <div>
                              <strong className="text-purple-300">The Combo:</strong> Veronica draws cards → Chizuru finds Tsukuyomi → Chizuru uses attack cards to generate Will-O'-Wisp (3 per hit) → Rei's damage buffs amplify the damage → Chizuru uses Shadow of the Moon with massive Will-O'-Wisp stacks for devastating damage.
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Role Distribution</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                            <li><strong className="text-purple-300">Chizuru:</strong> Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon</li>
                            <li><strong className="text-purple-300">Rei:</strong> Support/Damage Buffer - amplifies Chizuru's damage through buffs</li>
                            <li><strong className="text-red-300">Veronica:</strong> Support/Draw Engine - provides card draw to keep Chizuru's combo going</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                {/* Team 2 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                        <h3 className="text-base font-semibold text-violet-400">Mono Void</h3>
                        </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">

                        {/* Chizuru */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/chizuruhalf.webp"
                            alt="Chizuru"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-psionic.webp" alt="Psionic" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Chizuru</p>
                          </div>
                        </div>

                        {/* Tressa */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/tressahalf.webp"
                            alt="Tressa"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-psionic.webp" alt="Psionic" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Tressa</p>
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
                        <span className="font-medium">Rei's role is the same, however Tressa here helps Chizuru by spamming attack cards to build up  Will-O'-Wisp stacks.</span>
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
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-purple-400">Team 2: Chizuru Hypercarry (Tressa Variant)</DialogTitle>
                      <DialogDescription>Detailed team composition and synergy explanation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Why This Team Works</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This variant replaces Veronica with Tressa, taking a different approach to Will-O'-Wisp generation. Instead of relying on card draw to find Chizuru's cards, Tressa <strong className="text-purple-300">spams attack cards</strong> that Chizuru can use with Tsukuyomi to generate Will-O'-Wisp stacks. All three characters share <strong className="text-purple-300">Void Ego type</strong>, creating strong synergy.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Synergies</h3>
                          <div className="space-y-3 text-muted-foreground">
                            <div>
                              <strong className="text-purple-300">Tressa + Chizuru:</strong> Tressa's ability to spam attack cards directly feeds Chizuru's Will-O'-Wisp generation. When Chizuru uses Tsukuyomi (3 Will-O'-Wisp per hit), Tressa's attack cards provide the hits needed to stack Will-O'-Wisp quickly without relying on card draw RNG.
                            </div>
                            <div>
                              <strong className="text-purple-300">Rei + Chizuru:</strong> Rei's role remains the same - providing damage buffs that amplify Chizuru's Shadow of the Moon attacks. The Void Ego synergy between all three characters enhances their effectiveness.
                            </div>
                            <div>
                              <strong className="text-purple-300">Triple Void Ego:</strong> Having all three characters share Void Ego type creates natural synergy and likely provides team-wide benefits. This makes the team more cohesive than mixed Ego type compositions.
                            </div>
                            <div>
                              <strong className="text-purple-300">The Combo:</strong> Tressa spams attack cards → Chizuru uses Tsukuyomi on those attacks → Generates 3 Will-O'-Wisp per hit → Rei's damage buffs amplify → Chizuru unleashes Shadow of the Moon with massive Will-O'-Wisp stacks.
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Role Distribution</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                            <li><strong className="text-purple-300">Chizuru:</strong> Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon</li>
                            <li><strong className="text-purple-300">Tressa:</strong> Support/Hit Generator - spams attack cards to help Chizuru build Will-O'-Wisp stacks</li>
                            <li><strong className="text-purple-300">Rei:</strong> Support/Damage Buffer - amplifies Chizuru's damage through buffs</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Comparison to Team 1</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This team trades Veronica's card draw for Tressa's direct attack card generation. It's more consistent for Will-O'-Wisp stacking but may struggle if you need to find specific Chizuru cards. The triple Void Ego synergy is stronger, but you lose Veronica's versatile draw utility.
                          </p>
                        </div>
                      </div>
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