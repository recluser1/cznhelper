import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function VeronicaGuidePage() {
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
          description: "[Unique/Initiation] Create 1 Ballista card(s). At the start of the turn, create 1 Ballista card(s), with a 50% chance to additionally create 1 more ",
          reasoning: "[Placeholder]",
        },
        {
          tier: "Niche",
          cost: 1,
          type: "upgrade",
          description: "[Unique/Initiation] Create 1 Piercing Ballista card(s). At the start of the turn, create 1 Piercing Ballista card(s)",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A+",
          cost: 1,
          type: "upgrade",
          description: "[Unique/Initiation] Create 1 Enhanced Ballista card(s). At the start of the turn, create 1 Enhanced Ballista card(s)",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S+",
          cost: 1,
          type: "upgrade",
          description: "[Unique/Initiation] Create 1 Giant Ballista card(s). At the start of the turn, create 1 Giant Ballista card(s)",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[Unique/Initiation] Create 1 Shelling Ballista card(s). At the start of the turn, create 1 Shelling Ballista card(s)",
          reasoning: "[Placeholder]",
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
          description: "Draw 2 other Combatant's card(s)",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S",
          cost: 0,
          type: "skill",
          description: "Gain 80% Shield. Draw 2 card(s) from other combatant",
          reasoning: "[Placeholder]",
        },
        {
          tier: "B",
          cost: 1,
          type: "skill",
          description: "Gain 120% Shield. Draw 1 card(s) from other combatant",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A",
          cost: 1,
          type: "skill",
          description: "Gain 100% Shield. Draw 3 card(s) from other combatant",
          reasoning: "[Placeholder]",
        },
        {
          tier: "Niche",
          cost: 2,
          type: "skill",
          description: "Gain 150% Shield. Draw 3 card(s) from other combatant. Gain 1 Reload",
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
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "When another combatant uses Skill Card, gain 1 Reload",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S",
          cost: 0,
          type: "upgrade",
          description: "When another combatant uses Skill Card, gain 1 Reload",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A",
          cost: 1,
          type: "upgrade",
          description: "When another combatant uses Skill Card, gain 1 Reload. Draw 1",
          reasoning: "[Placeholder]",
        },
        {
          tier: "Niche",
          cost: 1,
          type: "upgrade",
          description: "When any combatant uses Attack Card, gain 1 Reload",
          reasoning: "[Placeholder]",
        },
        {
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "At the start of turn, gain 1 Reload",
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
          tier: "A",
          cost: 1,
          type: "skill",
          description: "Choose 1 Ballista card in hand, +100% Damage amount until activated. Draw 1",
          reasoning: "[Placeholder]",
        },
        {
          tier: "S",
          cost: 0,
          type: "skill",
          description: "Choose 1 Ballista card in hand, +80% Damage amount until activated. Draw 1",
          reasoning: "[Placeholder]",
        },
        {
          tier: "B",
          cost: 1,
          type: "skill",
          description: "Choose 1 Ballista card in hand, +150% Damage amount until activated",
          reasoning: "[Placeholder]",
        },
        {
          tier: "A",
          cost: 1,
          type: "skill",
          description: "Choose 1 Ballista card in hand, +100% Damage amount until activated. Draw 2",
          reasoning: "[Placeholder]",
        },
        {
          tier: "Niche",
          cost: 2,
          type: "skill",
          description: "Choose 2 Ballista cards in hand, +120% Damage amount until activated. Draw 2",
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
        // Radiant, eye-catching top tier: fiery gradient
        return "bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 text-black"
      case "S":
        // Premium golden vibe
        return "bg-gradient-to-r from-yellow-400 via-amber-500 to-rose-400 text-black"
      case "A+":
        // Energetic, strong: neon blue-cyan
        return "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-white"
      case "A":
        // Cool, solid high tier
        return "bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-400 text-white"
      case "B":
        // Balanced, mid-tier: green-teal calm gradient
        return "bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 text-white"
      case "C":
        // Low-tier but noticeable: muted red-orange
        return "bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 text-white"
      case "Niche":
        // Unique / situational: subtle grayscale with contrast
        return "bg-gradient-to-r from-gray-700 via-gray-500 to-gray-400 text-white"
      default:
        return "bg-gray-600 text-white"
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
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
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

                <div className="p-4 rounded-lg bg-background/50 border border-border">
                  <h3 className="text-lg font-semibold mb-2 text-purple-300">Role: [Placeholder]</h3>
                  <p className="text-muted-foreground leading-relaxed">
                   [Placeholder]
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Card Epiphany */}
            <section id="card-epiphany" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">2. Card Epiphany</h2>
              <p className="text-muted-foreground mb-6">
              Ratings are: S+ (Top Tier), S (Best), A+ (Very Strong), A (Strong), B (Situational), Niche (Specific builds only).
              </p>

              <div className="space-y-12">
                {uniqueCards.map((cardData) => (
                  <div key={cardData.id} id={cardData.id} className="scroll-mt-24">
                    <h3 className="text-xl font-bold mb-6 text-purple-300">{cardData.name}</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                          <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-500/50 transition-all duration-200 max-w-[250px] mx-auto">
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
                                        className="text-white font-bold text-5xl scale-x-75"
                                        style={{
                                          textShadow:
                                            "0 0 40px rgba(255, 255, 255, 0.8), 0 0 20px rgba(150, 196, 255, 0.5), 0 2px 8px rgba(0,0,0,0.9)",
                                          filter: "drop-shadow(0 0 8px rgba(68, 65, 65, 0.6), 0.6))",
                                        }}
                                      >
                                        {epiphany.cost}
                                      </span>
                                      <div
                                        className="w-full h-0.5 bg-white mt-0.5 scale-x-75"
                                        style={{ boxShadow: "0 0 1px rgba(1, 90, 255, 0.9)" }}
                                      />
                                    </div>

                                    {/* Name and Type */}
                                    <div className="flex-1 pt-0.5"
                                      style={{
                                        backgroundImage: `
                                        linear-gradient(to bottom, rgba(0,0,0,0.7), transparent),
                                        linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.9) 50%, transparent)
                                        `,
                                      }}
                                      >
                                      <h5
                                        className="text-white font-bold text-[24px] leading-tight drop-shadow-lg"
                                        style={{
                                          textShadow: "0 2px 4px rgba(0, 0, 0, 0.9)",
                                          transform: "scaleX(0.55)",
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
                                        <span className="text-white/95 text-[18px] font-medium capitalize drop-shadow">
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
                                          className="text-white text-center text-sm leading-snug m-0"
                                          dangerouslySetInnerHTML={{
                                            __html: remainingText.replace(/(\d+%?)/g, '<span style="color: #7ce2fb">$1</span>'),
                                          }}
                                        />
                                      </>
                                    )
                                  })()}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Reasoning */}
                          <div className="p-3 rounded-lg bg-background/50 border border-border">
                            <p className="text-sm text-muted-foreground leading-relaxed">{epiphany.reasoning}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Recommended Save Data */}
            <section id="recommended-save-data" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">3. Recommended Save Data</h2>
              <p className="text-muted-foreground mb-6">
                Visual examples of Save Data.
              </p>

              <div className="space-y-8">
                {/* Build 1: Example Deck with 4x Repose */}
                <div className="p-6 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-purple-300">High Draw Build</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [XXX Points]
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong className="text-white">Removed:</strong> 3 Starter Basic Cards
                  </p>

                  {/* Visual Deck Display */}
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
                    {/* Firing Preparation (Starter 4) */}
                    <div className="relative aspect-[2/3] rounded-md overflow-hidden border border-white/20 bg-card">
                      <img
                        src="/images/character/veronica/starter4.png"
                        alt="Firing Preparation"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Repose x4 */}
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="relative aspect-[2/3] rounded-md overflow-hidden border border-white/20 bg-card"
                      >
                        <img
                          src="/images/character/veronica/unique1.png"
                          alt="Repose"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}

                    {/* Pendant of Resolution */}
                    <div className="relative aspect-[2/3] rounded-md overflow-hidden border border-white/20 bg-card">
                      <img
                        src="/images/character/veronica/unique2.png"
                        alt="Pendant of Resolution"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Sir Kowalski */}
                    <div className="relative aspect-[2/3] rounded-md overflow-hidden border border-white/20 bg-card">
                      <img
                        src="/images/character/veronica/unique3.png"
                        alt="Sir Kowalski"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Bombardment Prep */}
                    <div className="relative aspect-[2/3] rounded-md overflow-hidden border border-white/20 bg-card">
                      <img
                        src="/images/character/veronica/unique4.png"
                        alt="Bombardment Prep"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    {/* Neutral Card Placeholders */}
                    <div className="relative aspect-[2/3] rounded-md overflow-hidden border-2 border-dashed border-purple-500/50 bg-purple-900/20 flex items-center justify-center">
                      <span className="text-xs text-purple-400 font-semibold">Neutral</span>
                    </div>
                    <div className="relative aspect-[2/3] rounded-md overflow-hidden border-2 border-dashed border-purple-500/50 bg-purple-900/20 flex items-center justify-center">
                      <span className="text-xs text-purple-400 font-semibold">Neutral</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    [Placeholder: Explanation why this build works and when to use it]
                  </p>
                </div>

                {/* Build 2: Placeholder for another deck */}
                <div className="p-6 rounded-lg bg-background/50 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-purple-300">Burst Damage Build</h3>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-bold">
                      [XXX Points]
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    [Placeholder: Cards to remove and deck composition]
                  </p>

                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-2">
                    {/* Placeholder cards - add actual card images here */}
                    <div className="relative aspect-[2/3] rounded-md overflow-hidden border-2 border-dashed border-purple-500/50 bg-purple-900/20 flex items-center justify-center">
                      <span className="text-xs text-purple-400 font-semibold">Card</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">[Placeholder: Build explanation]</p>
                </div>
              </div>
            </section>

            {/* 4. Memory Fragments - Reworked SECTION */}
            <section id="memory-fragments" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">4. Memory Fragments</h2>

              {/* Recommended Sets */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Recommended Sets</h3>

                {/* Best in Slot */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded text-sm font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      BEST IN SLOT
                    </span>
                  </div>
                  <div className="space-y-4">
                    {/* Black Wing */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border">
                      <div className="w-14 h-14 rounded-lg bg-muted/50 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-muted-foreground">?</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Black Wing</h4>
                        <p className="text-sm text-muted-foreground mb-2">2 Set: +12% Attack</p>
                        <p className="text-xs text-muted-foreground/80">[Explanation placeholder]</p>
                      </div>
                    </div>

                    {/* Executioner's Tool */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border">
                      <div className="w-14 h-14 rounded-lg bg-muted/50 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-muted-foreground">?</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Executioner's Tool</h4>
                        <p className="text-sm text-muted-foreground mb-2">2 Set: +25% Critical Damage</p>
                        <p className="text-xs text-muted-foreground/80">[Explanation placeholder]</p>
                      </div>
                    </div>

                    {/* Seth's Scarab */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border">
                      <div className="w-14 h-14 rounded-lg bg-muted/50 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-muted-foreground">?</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Seth's Scarab</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {"2 Set: Increase the damage, Shield and Healing of Basic Cards by 20%"}
                        </p>
                        <p className="text-xs text-muted-foreground/80">[Explanation placeholder] </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Option */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded text-sm font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      SECONDARY
                    </span>
                  </div>
                  <div className="space-y-4">
                    {/* Alternative Set 1 */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border">
                      <div className="w-14 h-14 rounded-lg bg-muted/50 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-muted-foreground">?</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Spark of Passion</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {
                            "4 Set: When Upgrade Cards are used, increase Damage Amount of the next 5 Passion Cards used by 20%"
                          }{" "}
                        </p>
                        <p className="text-xs text-muted-foreground/80">[Explanation placeholder]</p>
                      </div>
                    </div>

                    {/* Alternative Set 2 */}
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border">
                      <div className="w-14 h-14 rounded-lg bg-muted/50 flex-shrink-0 flex items-center justify-center">
                        <span className="text-xl font-bold text-muted-foreground">?</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">Black Wing</h4>
                        <p className="text-sm text-muted-foreground mb-2">2 Set: +12% Attack</p>
                        <p className="text-xs text-muted-foreground/80">[Explanation placeholder]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.1 Main Stats */}
              <div id="main-stats" className="mb-8 scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4 text-foreground">4.1. Main</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Recommended main stats for Memory Fragment slots IV, V, and VI.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Slot IV - Ideal */}
                  <div className="p-5 rounded-lg bg-background/50 border border-border">
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-purple-400">IV</span>
                        <span className="text-sm font-medium text-muted-foreground">Ideal</span>
                      </div>
                      <div className="h-px bg-border" />
                    </div>
                    <div className="p-3 rounded bg-purple-500/10 border border-purple-500/30">
                      <span className="text-sm font-semibold text-purple-300">[Placeholder]</span>
                    </div>
                  </div>

                  {/* Slot V - Desire */}
                  <div className="p-5 rounded-lg bg-background/50 border border-border">
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-red-400">V</span>
                        <span className="text-sm font-medium text-muted-foreground">Desire</span>
                      </div>
                      <div className="h-px bg-border" />
                    </div>
                    <div className="p-3 rounded bg-red-500/10 border border-red-500/30">
                      <span className="text-sm font-semibold text-red-300">[Placeholder]</span>
                    </div>
                  </div>

                  {/* Slot VI - Imagination */}
                  <div className="p-5 rounded-lg bg-background/50 border border-border">
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-cyan-400">VI</span>
                        <span className="text-sm font-medium text-muted-foreground">Imagination</span>
                      </div>
                      <div className="h-px bg-border" />
                    </div>
                    <div className="p-3 rounded bg-cyan-500/10 border border-cyan-500/30">
                      <span className="text-sm font-semibold text-cyan-300">[Placeholder]</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.2 Sub Stats */}
              <div id="sub-stats" className="scroll-mt-24">
                <h3 className="text-xl font-semibold mb-4 text-foreground">4.2. Sub</h3>
                <p className="text-sm text-muted-foreground mb-4">Substat priority for all Memory Fragments.</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-amber-500/20 to-transparent border-l-4 border-l-amber-500">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/30 border border-amber-500/50">
                      <span className="text-sm font-bold text-amber-300">1</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">[Placeholder]</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-500/15 to-transparent border-l-4 border-l-purple-500/70">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/40">
                      <span className="text-sm font-bold text-purple-300">2</span>
                    </div>
                    <span className="text-sm text-muted-foreground">[Placeholder]</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-l-cyan-500/50">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/15 border border-cyan-500/30">
                      <span className="text-sm font-bold text-cyan-300">3</span>
                    </div>
                    <span className="text-sm text-muted-foreground">[Placeholder]</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Partners */}
            <section id="partners" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">5. Partners</h2>
              <p className="text-muted-foreground mb-6">
               [Placeholder]
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-background/50 border border-border hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-2xl font-bold">?</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">[Placeholder]</h3>
                      <p className="text-sm text-muted-foreground">[Placeholder]</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    [Placeholder]
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-background/50 border border-border hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                      <span className="text-2xl font-bold">?</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">[Placeholder]</h3>
                      <p className="text-sm text-muted-foreground">[Placeholder]</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                   [Placeholder]
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-background/50 border border-border hover:border-purple-500/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-2xl font-bold">?</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">[Placeholder]</h3>
                      <p className="text-sm text-muted-foreground">[Placeholder]</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    [Placeholder]
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Teams */}
            <section id="teams" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">6. Teams</h2>

              <p className="text-muted-foreground mb-6 text-sm">
                These are examples of 3 popular and strong team compositions. You don't need to stick with these options
                - feel free to experiment and build teams that match your playstyle and available characters.
              </p>

              <div className="space-y-6">
                {/* Team 1 */}
                <div className="p-5 rounded-lg bg-background/50 border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">[Placeholder]</h3>
                  <div className="grid grid-cols-3 gap-3 max-w-md">
                    {/* Veronica */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-red-500/50 bg-card group">
                      <img
                        src="/images/characters/veronicahalf.webp"
                        alt="Veronica"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Veronica</p>
                      </div>
                    </div>

                    {/* Mei Lin */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-red-500/50 bg-card group">
                      <img
                        src="/images/characters/meilinhalf.webp"
                        alt="Mei Lin"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-striker.webp" alt="Striker" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Mei Lin</p>
                      </div>
                    </div>

                    {/* Rei */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-red-500/50 bg-card group">
                      <img src="/images/characters/reihalf.webp" alt="Rei" className="object-cover w-full h-full" />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-void.webp" alt="Void" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Rei</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    [Placeholder]
                  </p>
                </div>

                {/* Team 2 */}
                <div className="p-5 rounded-lg bg-background/50 border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">[Placeholder]</h3>
                  <div className="grid grid-cols-3 gap-3 max-w-md">
                    {/* Veronica */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-border bg-card group">
                      <img
                        src="/images/characters/veronicahalf.webp"
                        alt="Veronica"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Veronica</p>
                      </div>
                    </div>

                    {/* Haru */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-blue-500/50 bg-card group">
                      <img src="/images/characters/haruhalf.webp" alt="Haru" className="object-cover w-full h-full" />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Haru</p>
                      </div>
                    </div>

                    {/* Orlea */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-purple-500/50 bg-card group">
                      <img src="/images/characters/orleahalf.webp" alt="Orlea" className="object-cover w-full h-full" />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-vanguard.webp" alt="Vanguard" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-instinct.webp" alt="Instinct" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Orlea</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                  [Placeholder]
                  </p>
                </div>

                {/* Team 3 */}
                <div className="p-5 rounded-lg bg-background/50 border border-border">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">[Placeholder]</h3>
                  <div className="grid grid-cols-3 gap-3 max-w-md">
                    {/* Veronica */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-border bg-card group">
                      <img
                        src="/images/characters/veronicahalf.webp"
                        alt="Veronica"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-passion.webp" alt="Passion" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Veronica</p>
                      </div>
                    </div>

                    {/* Rin */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-blue-500/50 bg-card group">
                      <img src="/images/characters/rinhalf.webp" alt="Rin" className="object-cover w-full h-full" />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-ranger.webp" alt="Ranger" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-justice.webp" alt="Justice" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Rin</p>
                      </div>
                    </div>

                    {/* Owen */}
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-gray-500/50 bg-card group">
                      <img src="/images/characters/owenhalf.webp" alt="Owen" className="object-cover w-full h-full" />
                      <div className="absolute top-1.5 left-1.5 flex flex-col gap-1">
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-job-controller.webp" alt="Controller" className="w-full h-full" />
                        </div>
                        <div className="w-8 h-8 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                          <img src="/images/icon-ego-order.webp" alt="Order" className="w-full h-full" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-1.5 pt-4">
                        <p className="text-xs font-semibold text-white text-center">Owen</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                  [Placeholder]
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
