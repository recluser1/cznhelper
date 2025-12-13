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
    { id: "source-of-water", title: "2.1. Source of Water", level: 2 },
    { id: "blessing-of-waves", title: "2.2. Blessing of Waves", level: 2 },
    { id: "tactical-analysis", title: "2.3. Tactical Analysis", level: 2 },
    { id: "whirpool", title: "2.4. Whirpool", level: 2 },
    { id: "recommended-save-data", title: "3. Recommended Save Data", level: 1 },
    { id: "equipments", title: "3.1. Equipments", level: 2 },
    { id: "memory-fragments", title: "4. Memory Fragments", level: 1 },
    { id: "partners", title: "5. Partners", level: 1 },
    { id: "teams", title: "6. Teams", level: 1 },
  ]

  const uniqueCards = [
    {
      id: "source-of-water",
      name: "Source of Water",
      image: "/images/character/mika/starter4.png",
      baseType: "skill",
      epiphanies: [
        {
          id: "Source of Water I",
          tier: "S",
          cost: 0,
          type: "skill",
          description: "Heal 150%\nGain 1 AP\n1 Wave",
          reasoning: "Upgraded base card with Wave – stacks to 3 for bonus AP",
        },
        {
          id: "Source of Water II",
          tier: "S+",
          cost: 1,
          type: "skill",
          description: "Heal 150%\nGain 2 AP\nWhen Recovering, decrease Cost by 1 for 1 turn",
          reasoning: "Massive 2 AP + heal for 1-cost; cost refund on Recovering enables conditional 0-cost.",
        },
        {
          id: "Source of Water III",
          tier: "A",
          cost: 0,
          type: "skill",
          description: "[Retain]\nHeal 150%\nGain 1 AP\nIncrease Heal Amount of the next card used by 50%",
          reasoning: "Retain allows holding for better timing. Synergizes with healing-focused builds.",
        },
        {
          id: "Source of Water IV",
          tier: "Situational",
          cost: 0,
          type: "skill",
          description: "Heal 150%\nGain 1 AP\nDecrease Stress of allies by 2",
          reasoning: "Stress reduction utility makes this valuable for longer fights.",
        },
        {
          id: "Source of Water V",
          tier: "Situational",
          cost: 0,
          type: "skill",
          description: "[Exhaust]\nHeal 100%\nGain 3 AP",
          reasoning: "Generates massive AP at exhaust cost. Good for Haru or Kayron for explosive single-turn damage.",
        },
      ],
    },
    {
      id: "blessing-of-waves",
      name: "Blessing of Waves",
      image: "/images/character/mika/unique1.png",
      baseType: "skill",
      epiphanies: [
        {
          id: "Blessing of Waves I",
          tier: "S+",
          cost: 1,
          type: "skill",
          description: "[Retain]\nHeal 150%\nIncrease Heal Amount by\n30% for each AP\nGain Shield equal to Heal\nAmount overflow",
          reasoning: "Shield generation from overflow healing provides excellent defensive utility and synergizes with high AP builds.",
        },
        {
          id: "Blessing of Waves II",
          tier: "S",
          cost: 1,
          type: "skill",
          description: "[Retain]\nHeal 150%\nIncrease Heal Amount by\n30% for each AP\n1 Wave",
          reasoning: "Generates 1 Wave while maintaining strong healing scaling with AP. Wave stacks convert to AP when reaching 3 stacks.",
        },
        {
          id: "Blessing of Waves III",
          tier: "C",
          cost: 1,
          type: "skill",
          description: "[Retain]\nHeal 150%\nIncrease Heal Amount of the\nnext card used by 20% for\neach AP",
          reasoning: "Transfers healing bonus to next card instead of current heal, useful for setup turns.",
        },
        {
          id: "Blessing of Waves IV",
          tier: "A",
          cost: 1,
          type: "skill",
          description: "[Retain]\nHeal 150%\nDamage to random enemies\nequal to Healing",
          reasoning: "Converts healing into damage, providing offensive utility while maintaining defensive value.",
        },
        {
          id: "Blessing of Waves V",
          tier: "Situational",
          cost: 0,
          type: "skill",
          description: "[Finale]\nHeal 50%\nHeal Amount +50% for each\nAP used this turn",
          reasoning: "Poor choice compared to other Blessing of Waves epiphanies. The scaling requires high AP investment and doesn't provide immediate value.",
        },
      ],
    },
    {
      id: "tactical-analysis",
      name: "Tactical Analysis",
      image: "/images/character/mika/unique2.png",
      baseType: "skill",
      epiphanies: [
        {
          id: "Tactical Analysis I",
          tier: "S+",
          cost: 0,
          type: "skill",
          description: "Heal 50%\n1 Wave\nFor 2 turns, +50% Healing",
          reasoning: "Upgrades with healing + extended healing bonus duration. Ideal for prolonged battles; heals directly generate more daggers for Tressa.",
        },
        {
          id: "Tactical Analysis II",
          tier: "A",
          cost: 0,
          type: "skill",
          description: "2 Wave\nFor 1 turn, +50% Healing",
          reasoning: "Generates 2 Wave, accelerating AP generation through Wave conversion. Maintains healing bonus for sustain.",
        },
        {
          id: "Tactical Analysis III",
          tier: "A",
          cost: 0,
          type: "skill",
          description: "2 Wave\nFor 1 turn, +100% own Healing",
          reasoning: "Generates 2 Wave, accelerating AP generation through Wave conversion. Maintains healing bonus for sustain..",
        },
        {
          id: "Tactical Analysis IV",
          tier: "C",
          cost: 0,
          type: "skill",
          description: "When own card is used, 1 Wave for 1 turn",
          reasoning: "Very poor. Passive Wave generation requires multiple card plays to accumulate effectively, making it inefficient compared to other Tactical Analysis options.",
        },
        {
          id: "Tactical Analysis V",
          tier: "S+",
          cost: 0,
          type: "upgrade",
          description: "2 Wave\n+50% Healing",
          reasoning: "Permanent upgrade that generates 2 Wave on card use and provides healing bonus. Excellent value as an upgrade.",
        },
      ],
    },
    {
      id: "whirlpool",
      name: "Whirlpool",
      image: "/images/character/mika/unique3.png",
      baseType: "attack",
      epiphanies: [
        {
          id: "Whirlpool I",
          tier: "C",
          cost: 2,
          type: "attack",
          description: "200% Damage to all enemies\nHeal 100% for each target hit",
          reasoning: "Poor for DPS. Mika cannot effectively deal damage, and this epiphany only provides healing which doesn't contribute to damage output.",
        },
        {
          id: "Whirlpool II",
          tier: "S+",
          cost: 1,
          type: "attack",
          description: "200% Damage to all enemies\n1 Wave for each target hit",
          reasoning: "Good whirlpool epiphany. Cost reduction to 1 and Wave generation per target hit makes this valuable. Multiple targets can quickly build Wave stacks that convert to AP, enabling better card plays.",
        },
        {
          id: "Whirlpool III",
          tier: "C",
          cost: 2,
          type: "attack",
          description: "200% Damage to all enemies\nIncrease Heal Amount of the next card used by 20% for each target hit",
          reasoning: "Poor for DPS. Only provides healing bonuses which don't help with damage output. Mika's damage is too weak to make this worthwhile.",
        },
        {
          id: "Whirlpool IV",
          tier: "C",
          cost: 4,
          type: "attack",
          description: "300% Damage to all enemies\nIf Recovered, decrease Cost by 1 until used",
          reasoning: "High base cost + conditional reduction yields negligible output. Niche value in Cassius/Tressa decks to contribute toward 0-cost card.",
        },
        {
          id: "Whirlpool V",
          tier: "C",
          cost: 2,
          type: "attack",
          description: "Heal 100%\n100% (200%) Damage to all enemies\nIncrease Damage Amount equal to Heal Amount of this card",
          reasoning: "Poor for DPS. Even with damage scaling based on heal amount, Mika's base damage is too weak to make this effective. The healing doesn't translate to meaningful damage output.",
        },
      ],
    },
  ]

  const commonCards: Record<string, any> = {
    "Water Barrier": {
      id: "water-barrier",
      name: "Water Barrier",
      image: "/images/character/mika/starter2.png",
      cost: 1,
      type: "skill",
      description: "Heal 120%",
    },
    "Deluge": {
      id: "deluge",
      name: "Deluge",
      image: "/images/character/mika/unique4.png",
      cost: 1,
      type: "upgrade",
      description: "[Unique / Initiation]\n1 Wave\nAt the start of the turn, 1 Wave",
    },
  };

  function getEpiphanyFromRef(ref: string, cardsArray = uniqueCards) {
    const match = ref.match(/(.*)\s+(I|II|III|IV|V)$/i);
    let baseRef: string;
    let roman: string | undefined;
    
    if (match) {
      baseRef = match[1].trim().toLowerCase();
      roman = match[2].toUpperCase();
    } else {
      baseRef = ref.trim().toLowerCase();
    }
  
    const baseCard = cardsArray.find(
      c => c.id === baseRef || c.name.toLowerCase() === baseRef.replace(/\s+/g, ' ')
    );
  
    const romanToIndex: Record<string, number> = { I: 0, II: 1, III: 2, IV: 3, V: 4 };
    
    if (baseCard) {
      let epiphany;
      if (roman && romanToIndex[roman] !== undefined) {
        epiphany = baseCard.epiphanies[romanToIndex[roman]];
      }
      epiphany = epiphany || baseCard.epiphanies[0]; // safe fallback
    
      return {
        id: `epiphany-${ref.replace(/\s+/g, '-')}`,
        name: epiphany.id,
        image: baseCard.image,
        cost: epiphany.cost,
        type: epiphany.type || baseCard.baseType,
        description: epiphany.description,
      };
    }
  
    const commonKey = Object.keys(commonCards).find(
      key => key.toLowerCase() === ref.toLowerCase()
    );
    if (commonKey) {
      const card = commonCards[commonKey];
      return {
        id: card.id,
        name: card.name,
        image: card.image,
        cost: card.cost,
        type: card.type,
        description: card.description,
      };
    }
  }

  // Define the type for a single deck entry
  type DeckEntry = {
    ref: string;
    count?: number;
    cardsArray?: typeof uniqueCards;
  };

  // Define the type for recommendedDecks
  type RecommendedDecks = {
    [key: string]: DeckEntry[];
  };

  // Type your recommendedDecks object
  const recommendedDecks: RecommendedDecks = {
    "standard-battery-mika": [
      { ref: "Water Barrier", count: 1 },
      { ref: "Source of Water II", count: 4 },
      { ref: "Blessing of Waves II", count: 1 },
      { ref: "Tactical Analysis V", count: 1 },
      { ref: "Deluge", count: 1 },
    ],
    "all-heal-mika": [
      { ref: "Water Barrier", count: 2 },
      { ref: "Source of Water II", count: 3 },
      { ref: "Blessing of Waves II", count: 1 },
      { ref: "Tactical Analysis I", count: 1 },
      { ref: "Deluge", count: 1 },
    ],
  };

  function generateDeckRows(deckKey: keyof typeof recommendedDecks): { topRow: any[]; bottomRow: any[] } {
    const spec = recommendedDecks[deckKey] || [];
    const deck: any[] = [];           // This will hold only the real cards
    let globalIndex = 0;

    // Add all real cards (with unique IDs)
    spec.forEach((entry) => {
      const { ref, count = 1, cardsArray = uniqueCards } = entry;
      const baseCard = getEpiphanyFromRef(ref, cardsArray);

      if (!baseCard) {
        console.warn(`Card not found: ${ref}`);
        return;
      }

      for (let i = 0; i < count; i++) {
        deck.push({
          ...baseCard,
          id: `${baseCard.id}-${globalIndex++}`,
        });
      }
    });

    // Build top row → exactly 4 cards + 1 empty on the right
    const topRow: any[] = [];
    for (let i = 0; i < 4; i++) {
      topRow.push(deck[i] || createPlaceholder(`top-${i}`));
    }
    topRow.push(createPlaceholder("top-right-empty")); // Always empty

    // Build bottom row → next 4 cards + 1 empty on the right
    const bottomRow: any[] = [];
    for (let i = 0; i < 4; i++) {
      const card = deck[4 + i];
      bottomRow.push(card || createPlaceholder(`bottom-${i}`));
    }
    bottomRow.push(createPlaceholder("bottom-right-empty")); // Always empty

    return { topRow, bottomRow };
  }

  // Helper function to avoid repeating placeholder object
  function createPlaceholder(idSuffix: string) {
    return {
      id: `placeholder-${idSuffix}`,
      name: "Placeholder",
      image: "/placeholder.svg",
      cost: 0,
      type: "skill",
      description: "",
    };
  }

  function CardDisplay({ card }: { card: any }) {
    const isPlaceholder = card.name === "Placeholder";

    return (
      <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200">
        {/* Justice Border */}
        <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
          <img src="/images/card/justice-border.png" alt="" className="h-full w-full object-cover" />
        </div>

        <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
          {isPlaceholder ? (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className="text-sm text-muted-foreground font-semibold">Placeholder</span>
              <span className="text-xs text-muted-foreground/70">[Empty Slot]</span>
            </div>
          ) : (
            <>
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.name}
                className="w-full h-full object-cover scale-125"
              />
              <div className="absolute inset-0 flex flex-col">
                {/* Top Section: Cost + Name + Type */}
                <div className="p-2 pt-1.5 pl-5">
                  <div className="flex items-start gap-1.5">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center">
                      <span
                        className="text-white font-bold text-5xl scale-x-80"
                        style={{
                          WebkitTextStroke: "1px rgba(0, 0, 0, 0.38)",
                          textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`,
                        }}
                      >
                        {card.cost}
                      </span>
                      <div className="w-full h-0.5 bg-white mt-0.5 scale-x-80" style={{ backgroundColor: "#ffffff", WebkitBoxShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000` }} />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h5
                        className="text-white font-bold text-[20px] leading-tight drop-shadow-lg"
                        style={{
                          textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000`,
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
                        <span className="text-white/100 text-[14px] font-large capitalize drop-shadow" style={{ textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000` }}>
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
    );
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
  
      case "6/5":
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
  
      case "5/5":
        return `
          bg-black/80
          text-orange-400
          font-bold text-xs tracking-wider
          border border-orange-500/60
          shadow-lg shadow-orange-500/25
          ring-1 ring-orange-500/30
          ring-offset-1 ring-offset-orange-900/20
        `
  
      case "4/5":
        return `
          bg-black/70
          text-purple-300
          font-bold text-xs tracking-wide
          border border-purple-500/50
          shadow-md shadow-purple-500/20
          ring-1 ring-purple-500/20
        `
  
      case "2/5":
        return `
          bg-black/50
          text-red-400
          font-medium text-xs
          border border-red-700/30
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
                Mika Guide
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
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/50">
                    <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-5 h-5" />
                    <span className="text-blue-400 text-sm font-medium">Justice</span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-500/20 border border-black-500/40">
                    <img src="/images/icon-job-controller.webp" alt="Controller" className="w-5 h-5" />
                    <span className="text-black-400 text-sm font-medium">Controller</span>
                  </div>
                </div>

                <div className="rounded-sm bg-background/50 border border-border">
                <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-500/20 to-black/30 flex items-center justify-center warp">
                <img
                  src={`/images/characters/mika.webp`}
                  alt={`mika full artwork`}
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
                                {/* Justice Border */}
                                <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                                  <img
                                    src="/images/card/justice-border.png"
                                    alt=""
                                    className="h-full w-full object-cover"
                                  />
                                </div>

                                {/* Card Image */}
                                <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                                  <img
                                    src={cardData.image || "/placeholder.svg"}
                                    alt={cardData.name}
                                    className="w-full h-full object-cover scale-125"
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
                    <h3 className="text-xl font-bold text-purple-300">Standard Battery Mika</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [90 Faint Memory Cost without Convert Methods]
                    </span>
                  </div>

                  {(() => {
                    const { topRow, bottomRow } = generateDeckRows("standard-battery-mika");
                    return (
                      <>
                        {/* Top Row */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                          {topRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                          {bottomRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>
                      </>
                    );
                  })()}

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
                          Standard AP Battery Mika
                          <br />
                          Use up Deluge & Tactical upgrades to exhaust them
                          <br />
                          Keep Blessing in hand till you need it
                          <br />
                          Have fun getting +7 AP from Sources
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                {/* Build 2 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-300">Tressa Dagger Generator</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [60 Faint Memory Cost without Convert Methods]
                    </span>
                  </div>

                  {(() => {
                    const { topRow, bottomRow } = generateDeckRows("all-heal-mika");
                    return (
                      <>
                        {/* Top Row */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                          {topRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-7xl mx-auto">
                          {bottomRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>
                      </>
                    );
                  })()}

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
                          8 Heals on Mika, means 8/16/24/32 Daggers just from Mika
                          <br />
                          Lots of room for Neutrals
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
                        <GearTooltip text={`C6 Lab 0
                      C4 Swamp of Judgement`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_unique.webp"
                            alt="Unique Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Tentacles-of-Chaos.webp" alt="Tentacles of Chaos" className="w-16 h-16 object-contain relative z-10" />
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
                            +<span className="text-[#FF8C00]">8</span>% Atk to all Allies (Including Self)<br/>
                            Upon enemy Defeat, -<span className="text-[#FF8C00]">2</span> Stress to the Combatant<br/> with the highest Stress. If Sub Dps Luke this has more Value
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

                      {/* 2rd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`C6 Lab 0
                      C4 Swamp of Judgement`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Crimson-Sword.webp" alt="Crimson Sword" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#FF9600" }}>
                            Crimson Sword
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When dealing Damage with a targeting Attack Card, <span className="text-[#FF8C00]">3</span> Agony (<span className="text-[#FF8C00]">1</span> per turn)
                          </p>
                        </div>
                      </div>

                      {/* 3th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`C6 Lab 0
                      C4 Swamp of Judgement`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Flashbang.webp" alt="Flashbang" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#33A0F3" }}>
                            Flashbang
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            At the start of battle, apply <span className="text-[#FF8C00]">3</span> Weaken to a random enemy<br/>Bone Cutter Enabler
                          </p>
                        </div>
                      </div>

                      {/* 4th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`C6 Lab 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Overcurrent-Shock-Unit.webp" alt="Over Current Shocker" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#33A0F3" }}>
                            Over Current Shocker
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Attack</span>
                            <span className="text-white font-semibold">+82</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When Owner Draws by ability, <span className="text-[#FF8C00]">50</span>% Fixed Damage to random enemy
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
                  <GearTooltip text={`C6 Lab 0`} />

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
                      At the start of battle, Discard up to <span className="text-[#FF8C00]">3</span>, Draw equal number of discards<br/>Stackable among members, Separate discard steps
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
                        <GearTooltip text={`C6 Lab 0`} />
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
                            At the start of battle, Draw <span className="text-[#FF8C00]">1</span> and gain <span className="text-[#FF8C00]">1</span> Damage Reduction
                          </p>
                        </div>
                      </div>

                      {/* 3rd Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`C6 Lab 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Brainwave-Blocking-Helmet.webp" alt="Brainwave Blocking Helmet" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#33A0F3" }}>
                            Brainwave Blocking Helmet
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Defense</span>
                            <span className="text-white font-semibold">+31</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            When you Draw by an ability, +<span className="text-[#FF8C00]">40</span>% Fixed Shield
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
                  <GearTooltip text={`C6 Lab 0
                      C4 Swamp of Judgement`} />

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
                      +<span className="text-[#FF8C00]">10</span>% HP<br/>
                      Start of battle, Draw <span className="text-[#FF8C00]">1</span> and <span className="text-[#FF8C00]">1</span> AP
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
                        <GearTooltip text={`C6 Lab 0`} />
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
                        <GearTooltip text={`C6 Lab 0`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Source-of-the-Forbidden.webp" alt="Source of the Forbidden" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#FF9600" }}>
                            Source of the Forbidden
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                           When hit, inflict <span className="text-[#FF8C00]">1</span> random debuff Vuln/Weaken/Impair to enemy<br/>(<span className="text-[#FF8C00]">3</span> times per turn)<br/>Vuln is really good, Weaken is ok, Impair usually useless, RNG Value
                          </p>
                        </div>
                      </div>

                      {/* 4th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`C6 Lab 0
                      C4 Swamp of Judgement`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Water-Drops-Of-The-Goddess.webp" alt="Water Drops of the Goddess" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#FF9600" }}>
                            Water Drops of the Goddess
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                           At the start of battle, <span className="text-[#FF8C00]">1</span> Storage (Saves <span className="text-[#FF8C00]">1</span> AP between turns)
                          </p>
                        </div>
                      </div>

                      {/* 5th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`C4 Swamp of Judgement`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_legend.webp"
                            alt="Legend Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Clover-of-the-Forest.webp" alt="Clover of the Forest" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#FF9600" }}>
                            Clover of the Forest
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                           When Recover via card, +<span className="text-[#FF8C00]">10</span>% ally Attack for <span className="text-[#FF8C00]">1</span> turn (Max <span className="text-[#FF8C00]">1</span> stack)
                          </p>
                        </div>
                      </div>

                      {/* 6th Option */}
                      <div className="relative flex items-start gap-2 p-2 rounded-lg bg-gray-800/30 border border-gray-700/40">
                        <GearTooltip text={`C6 Lab 0
                      C4 Swamp of Judgement`} />
                        <div className="relative w-21 h-32 flex-shrink-1">
                          <img
                            src="/images/bg_equipment_rarity_rare.webp"
                            alt="Rare Rarity"
                            className="w-full h-full object-contain"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img src="/images/gear/Multifaceted-Parallel-Universe-Nexus.webp" alt="Multifaceted Parallel Universe Nexus" className="w-16 h-16 object-contain relative z-10" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold mb-1" style={{ color: "#33A0F3" }}>
                            Multifaceted Parallel Universe Nexus or "Lead Prism"
                          </h4>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/20 text-sm text-gray-300 mb-2">
                            <span>Health</span>
                            <span className="text-white font-semibold">+83</span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                           At the start of turn, activate <span className="text-[#FF8C00]">1</span> random self Lead card in hand<br/>Enables many good neutral cards
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

              {/* Memory Fragment Sets */}
              <div className="space-y-12">
                <div>
                  <div className="text-center mb-6">
                    <span className="px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm">
                      Recommended Set
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      {
                        name: "Tetra",
                        effect: "Tetra's Authority Set",
                        icon: "/images/sets/tetras-authority.webp",
                        why: "+12% Defense helps with Healing capabilities",
                      },
                      {
                        name: "Healers",
                        effect: "Healer's Journey Set",
                        icon: "/images/sets/healers-journey.webp",
                        why: "+12% Health increases total HP pool which means more survivability, otherwise useless",
                      },
                      {
                        name: "Scrab",
                        effect: "Seth's Scarab Set",
                        icon: "/images/sets/seths-scarab.webp",
                        why: "Flex 2-Set slot, use whatever has the best substats"
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
              </div>

              {/* Main Stats + Substat Priority */}
              <div className="mt-6 space-y-6">
                {/* Main Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">IV</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Ideal</div>
                    <div className="py-2 px-4 rounded bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-300">
                      HP %
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">V</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Desire</div>
                    <div className="py-2 px-4 rounded bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-300">
                      HP %
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">IV</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Ideal</div>
                    <div className="py-2 px-4 rounded bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-300">
                      Ego Recovery
                    </div>
                  </div>
                </div>

                {/* Substat Priority */}
                <div className="mt-8 text-center justify-center text-[14px]">
                  {/* Priority Chain */}
                  <div className="flex items-center justify-center gap-4 md:gap-4 flex-wrap">
                    <div className="px-6 py-3 rounded-full bg-pink-500/20 border-2 border-pink-500/70 font-bold text-pink-300 shadow-lg shadow-pink-500/20">
                      Ego Recovery
                    </div>
                    <span className="text-2xl text-muted-foreground/40">›</span>
                    <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Defense %
                    </div>
                    <span className="text-2xl text-muted-foreground/40">=</span>
                    <div className="px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50 font-semibold text-purple-300">
                      Defense +
                    </div>
                    <span className="text-2xl text-muted-foreground/40">›</span>
                    <div className="px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      HP %
                    </div>
                    <span className="text-muted-foreground/60">or</span>
                    <div className="px-3 py-1 rounded-full bg-muted/70 border border-border text-muted-foreground">
                      HP +
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mt-7.5 mx-auto text-center">
                    <p className="text-[14px] leading-relaxed text-muted-foreground">
                      <span className="text-muted-foreground">
                        
                        </span>
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  {
                    id: 1,
                    name: "Nyx",
                    role: "S+",
                    image: "/images/partners/nyx.webp",
                    description: "Best in class, just for the Ego Skill, Everything else is Extra",
                  },
                  {
                    id: 2,
                    name: "Arwen",
                    role: "S",
                    image: "/images/partners/arwen.webp",
                    description: "Very good passive, free damage reduction",
                  },
                  {
                    id: 3,
                    name: "Alyssa",
                    role: "A",
                    image: "/images/partners/alyssa.webp",
                    description: "Niche if you want the +1 Moral on Partner Skill",
                  },
                  {
                    id: 4,
                    name: "Yvonne",
                    role: "C",
                    image: "/images/partners/yvonne.webp",
                    description: "Bad",
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
                          {partner.role.includes("/") ? partner.role : `${partner.role} Tier`}
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
                Below are 2 example teams for Mika Support
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team 1 */}
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer hover:scale-105 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                        <h3 className="text-base font-semibold text-violet-400">Haru Khalipe</h3>
                        </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">

                        {/* Haru */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-blue-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/haruhalf.webp"
                            alt="Haru"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-striker.webp" alt="Striker" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Haru</p>
                          </div>
                        </div>

                        {/* Khalipe */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-orange-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/khalipehalf.webp"
                            alt="Khalipe"
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-vanguard.webp" alt="Vanguard" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-instinct.webp" alt="Instinct" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Khalipe</p>
                          </div>
                        </div>

                        {/* Mika */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-blue-400/50 bg-card shadow-md group- transition-transform">
                          <img src="/images/characters/mikahalf.webp" alt="Mika" className="object-cover w-full h-full" />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Mika</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-medium">Mika generates AP for Haru and Khalipe</span>
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
                      <DialogTitle className="text-2xl text-purple-400">Team 1: AP Funnel Team</DialogTitle>
                      <DialogDescription>Detailed team composition and synergy explanation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Why This Team Works</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This composition focuses on Mika's core strength: <strong className="text-blue-300">AP generation</strong>. Both Haru and Khalipe are extremely AP-hungry characters who need constant Action Points to function effectively. Mika's ability to generate and funnel AP to her allies makes her the perfect support for these two DPS characters who would otherwise struggle with AP management.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Synergies</h3>
                          <div className="space-y-3 text-muted-foreground">
                            <div>
                              <strong className="text-blue-300">Mika + Haru:</strong> Haru requires significant AP to use her powerful abilities effectively. Mika's AP generation ensures Haru can consistently use her high-cost cards and maintain her damage output throughout the battle.
                            </div>
                            <div>
                              <strong className="text-orange-300">Mika + Khalipe:</strong> Khalipe is also very AP-hungry, needing AP to maintain her defensive capabilities and offensive pressure. Mika's AP funneling allows Khalipe to use her abilities more frequently, maximizing her effectiveness as both a tank and damage dealer.
                            </div>
                            <div>
                              <strong className="text-blue-300">The Strategy:</strong> Mika generates AP through her abilities → Funnels AP to both Haru and Khalipe → Both DPS characters can use their high-cost, high-impact cards more frequently → Team maintains consistent pressure and damage output throughout the battle.
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Role Distribution</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                            <li><strong className="text-blue-300">Haru:</strong> Main DPS - AP-hungry striker who benefits greatly from Mika's AP generation</li>
                            <li><strong className="text-orange-300">Khalipe:</strong> DPS/Tank - AP-hungry vanguard who needs AP to maintain effectiveness</li>
                            <li><strong className="text-blue-300">Mika:</strong> Support/AP Generator - funnels AP to both Haru and Khalipe to keep them online</li>
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
                        <h3 className="text-base font-semibold text-violet-400">Kayron Hypercarry</h3>
                        </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">

                        {/* Kayron */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md group- transition-transform">
                          <img
                            src="/images/characters/kayronhalf.webp"
                            alt="Kayron"
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
                            <p className="text-sm font-semibold text-white text-center">Kayron</p>
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

                        {/* Mika */}
                        <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-blue-400/50 bg-card shadow-md group- transition-transform">
                          <img src="/images/characters/mikahalf.webp" alt="Mika" className="object-cover w-full h-full" />
                          <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                            </div>
                            <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                              <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-full h-full" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                            <p className="text-sm font-semibold text-white text-center">Mika</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="font-medium">Rei buffs Kayron and Mika generates the necessary AP for the team</span>
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
                      <DialogTitle className="text-2xl text-purple-400">Team 2: Kayron Hypercarry</DialogTitle>
                      <DialogDescription>Detailed team composition and synergy explanation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Why This Team Works</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This composition focuses on maximizing Kayron's damage output through <strong className="text-purple-300">damage buffs</strong> from Rei and <strong className="text-blue-300">AP generation</strong> from Mika. Kayron is extremely AP-hungry and requires constant Action Points to maintain his damage output. Rei provides the damage amplification Kayron needs, while Mika ensures he has the AP to use his powerful abilities consistently.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Synergies</h3>
                          <div className="space-y-3 text-muted-foreground">
                            <div>
                              <strong className="text-purple-300">Rei + Kayron:</strong> Rei provides damage buffs that significantly amplify Kayron's damage output. Both share Void Ego type, creating natural synergy. Rei's buffs multiply Kayron's already high damage potential, making him a devastating DPS threat.
                            </div>
                            <div>
                              <strong className="text-blue-300">Mika + Kayron:</strong> Kayron is very AP-hungry and needs constant Action Points to function effectively. Mika's AP generation and funneling ensures Kayron can consistently use his high-cost, high-impact cards throughout the battle, maintaining his damage output.
                            </div>
                            <div>
                              <strong className="text-purple-300">Void Ego Synergy:</strong> Both Kayron and Rei share Void Ego type, which provides team-wide benefits and enhances their effectiveness together.
                            </div>
                            <div>
                              <strong className="text-purple-300">The Strategy:</strong> Rei buffs Kayron's damage → Mika generates and funnels AP to Kayron → Kayron uses his powerful abilities more frequently → Combined with Rei's buffs, Kayron deals massive damage consistently throughout the battle.
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Role Distribution</h3>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                            <li><strong className="text-purple-300">Kayron:</strong> Main DPS - AP-hungry psionic who deals massive damage when properly supported</li>
                            <li><strong className="text-purple-300">Rei:</strong> Support/Damage Buffer - amplifies Kayron's damage through buffs</li>
                            <li><strong className="text-blue-300">Mika:</strong> Support/AP Generator - funnels AP to Kayron to keep him active and dealing damage</li>
                          </ul>
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