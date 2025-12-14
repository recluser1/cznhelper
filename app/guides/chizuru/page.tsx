"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ChevronDown } from "lucide-react"
import ExpandableSetCard from "@/components/ui/ExpandableSetCard"
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

export default function ChizuruGuidePage() {
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(null)
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null)
  const [selectedCardForEpiphanies, setSelectedCardForEpiphanies] = useState<typeof uniqueCards[0] | null>(null)

  const sections = [
    { id: "overview", title: "1. Overview", level: 1 },
    { id: "card-epiphany", title: "2. Base Cards", level: 1 },
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
      baseDescription: "[ Initiation ] 120% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
      epiphanies: [
        {
          id: "Karmic Flames I",
          tier: "A",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
          reasoning: "Solid option for Will-O'-Wisp stacking. The extra hit helps generate more stacks, but other epiphanies offer better utility or damage scaling.",
        },
        {
          id: "Karmic Flames II",
          tier: "S",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles:\nDecrease Cost of the\nnext card of this unit\nused by 1",
          reasoning: "Excellent cost efficiency. Refunds itself when used on already-shackled enemies, creating a 0-cost cycle. Requires consistent card draw support to maximize value.",
        },
        {
          id: "Karmic Flames III",
          tier: "B",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 216% Damage\n1 Cursed Shackles\nCursed Shackles:\nIncrease Damage\nAmount by 100%",
          reasoning: "Higher single-target damage, but lacks the multi-hit or utility of other options. The damage boost is decent but doesn't scale as well as Will-O'-Wisp stacking strategies.",
        },
        {
          id: "Karmic Flames IV",
          tier: "C",
          cost: 2,
          type: "skill",
          description: "[ Initiation ] 1 Cursed Shackles\nCreate 1 Shadow of the\nMoon",
          reasoning: "Expensive at 2 cost, but generates 5 Will-O'-Wisp when used with Shadow of the Moon. Synergizes well with Bound At Dusk V for cost reduction, but generally too costly for most builds.",
        },
        {
          id: "Karmic Flames V",
          tier: "S+",
          cost: 1,
          type: "skill",
          description: "[ Initiation / Exhaust] 1 Cursed Shackles\nWhen a target inflicted\nwith Cursed Shackles\nis defeated, create this\ncard",
          reasoning: "Best Karmic Flames epiphany. Self-exhausts but returns when you defeat a shackled enemy, creating infinite value in single-target scenarios. Less effective against multi-enemy or spawn-heavy encounters.",
        },
      ],
      divineEpiphanies: [
        {
          name: "-1 Cost",
          description: "Decrease Cost by 1",
          reasoning: "Excellent for cost efficiency, especially when combined with Karmic Flames II for a 0-cost cycle.",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
        },
        {
          name: "+1 Draw",
          description: "Draw 1 card",
          reasoning: "Great for maintaining card draw and cycling through your deck more efficiently.",
          icon: "/images/card/icon_card_battle_expand_secred.png",
        },
        {
          name: "+1 AP",
          description: "Gain 1 AP",
          reasoning: "Provides additional action points, allowing for more plays per turn.",
          icon: "/images/card/icon_card_battle_expand_nihilum.png",
        },
      ],
    },
    {
      id: "tsukuyomi",
      name: "Tsukuyomi",
      image: "/images/character/chizuru/unique1.png",
      baseType: "skill",
      baseDescription: "2 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used",
      epiphanies: [
        {
          id: "Tsukuyomi I",
          tier: "S",
          cost: 0,
          type: "skill",
          description: "3 Will-O'-Wisp for each\nHit of the next Attack\nCard of this unit used",
          reasoning: "Direct upgrade from base card, providing 50% more Will-O'-Wisp per hit. The most reliable and consistent source of Will-O'-Wisp generation for Chizuru's damage scaling.",
        },
        {
          id: "Tsukuyomi II",
          tier: "A",
          cost: 0,
          type: "skill",
          description: "Add 1 Hit(s) to the next\nAttack Card of this unit\nused, 1 Will-O'-Wisp for\neach Hit",
          reasoning: "Adds an extra hit which can be valuable for multi-hit cards, but generates significantly less Will-O'-Wisp compared to Tsukuyomi I. Good for hit-based synergies but weaker for Will-O'-Wisp stacking.",
        },
        {
          id: "Tsukuyomi III",
          tier: "S+",
          cost: 0,
          type: "skill",
          description:
            "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+\nused",
          reasoning: "Incredibly powerful for Shadow of the Moon builds. The +2 hits stack infinitely and synergize exceptionally well with Rei's damage buffs or Orlea's support. Enables massive burst damage potential.",
        },
        {
          id: "Tsukuyomi IV",
          tier: "C",
          cost: 0,
          type: "skill",
          description: "3 Will-O'-Wisp for each\nAttack Card of this unit\nin hand",
          reasoning: "Limited by Chizuru's hand size and only counts her own attack cards. In practice, you rarely have enough Chizuru attack cards in hand to generate meaningful stacks compared to other epiphanies.",
        },
        {
          id: "Tsukuyomi V",
          tier: "Situational",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Lead ] When an Attack Card\nof this unit is used, 2\nWill-O'-Wisp",
          reasoning: "Excellent with Oni Hunt IV (creates Moonslash cards) for passive Will-O'-Wisp generation. Also strong if you have duplicate base Tsukuyomi cards. Requires specific team compositions to maximize value.",
        },
      ],
      divineEpiphanies: [
        {
          name: "+1 Draw",
          description: "Draw 1 card",
          reasoning: "Excellent for maintaining card draw, especially important for 0-cost cards like Tsukuyomi.",
          icon: "/images/card/icon_card_battle_expand_secred.png",
        },
        {
          name: "+1 AP",
          description: "Gain 1 AP",
          reasoning: "Provides additional action points, allowing for more plays per turn.",
          icon: "/images/card/icon_card_battle_expand_nihilum.png",
        },
      ],
    },
    {
      id: "bound-at-dusk",
      name: "Bound At Dusk",
      image: "/images/character/chizuru/unique2.png",
      baseType: "upgrade",
      baseDescription: "[ Initiation / Unique ]\nAt the start of the turn,\ngain Inhibit\nDecrease Cost by 1 until\n1 random card(s) of other\nCombatants are used",
      epiphanies: [
        {
          id: "Bound At Dusk I",
          tier: "S+",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost by 1\nuntil 2 random card(s)\nare used",
          reasoning: "Provides +2 effective AP per turn through cost reduction. The RNG element can be managed, but be cautious as it may interfere with Conqueror set bonuses if you're relying on specific cost thresholds.",
        },
        {
          id: "Bound At Dusk II",
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nWhen Shadow of the\nMoon+ is used, decrease\nCost of the next 1 card(s)\nused by 1",
          reasoning: "Excellent for Shadow of the Moon+ spam builds. Enables chaining multiple Shadow of the Moon+ cards when combined with proper draw support. Requires consistent card draw to maximize effectiveness.",
        },
        {
          id: "Bound At Dusk III",
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\ncard(s) of other\nCombatants",
          reasoning: "Strong team support option. Best used with allies who have impactful non-zero-cost cards. Provides additional actions and can enable powerful combos with support characters.",
        },
        {
          id: "Bound At Dusk IV",
          tier: "C",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\nLead cards",
          reasoning: "Too RNG-dependent to be reliable. Requires both having Lead cards in hand and the random activation hitting useful cards. Generally inconsistent compared to other options.",
        },
        {
          id: "Bound At Dusk V",
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost of the\ncard with the highest\nCost by 2",
          reasoning: "Limited synergy - primarily works with Karmic Flames IV (2 cost) for Chizuru herself. The -2 cost reduction is significant but too narrow in application to be a strong general pick.",
        },
      ],
      divineEpiphanies: [
        {
          name: "-1 Cost",
          description: "Decrease Cost by 1",
          reasoning: "Excellent for cost efficiency, making Bound At Dusk even more valuable for cost reduction strategies.",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
        },
        {
          name: "+1 Draw",
          description: "Draw 1 card",
          reasoning: "Great for maintaining card draw and ensuring you have cards to use with the cost reduction.",
          icon: "/images/card/icon_card_battle_expand_secred.png",
        },
      ],
    },
    {
      id: "oni-hunt",
      name: "Oni Hunt",
      image: "/images/character/chizuru/unique3.png",
      baseType: "attack",
      baseDescription: "[ Haste ] 72% Damage x 3\n+30% Damage Amount\nto the next Bind card\nused",
      epiphanies: [
        {
          id: "Oni Hunt I",
          tier: "S+",
          cost: 1,
          type: "attack",
          description: "[ Haste ] 60% Damage x 4\n+40% Damage Amount\nto the next Bind card\nused",
          reasoning: "Best Oni Hunt epiphany. Generates 4 Will-O'-Wisp on use (via 4 hits with Tsukuyomi), provides strong damage bonus to Shadow of the Moon, and has excellent synergy with Will-O'-Wisp stacking builds.",
        },
        {
          id: "Oni Hunt II",
          tier: "A",
          cost: 1,
          type: "attack",
          description: "[ Haste ] 216% Damage\n+60% Damage Amount\nto the next Bind card\nused",
          reasoning: "Higher single-hit damage and better damage bonus than Oni Hunt I, but loses the multi-hit Will-O'-Wisp generation. Base Oni Hunt with Neutral epiphany often provides better value for Will-O'-Wisp stacking.",
        },
        {
          id: "Oni Hunt III",
          tier: "C",
          cost: 1,
          type: "attack",
          description: "[ Haste ] 72% Damage x 3\nIf there are no other\nAttack Cards in hand,\nadd 2 Hit(s)",
          reasoning: "Conditional +2 hits requires an empty attack card hand, which is difficult to maintain. Doesn't increase Shadow of the Moon damage bonus and lacks the consistency of other options.",
        },
        {
          id: "Oni Hunt IV",
          tier: "S",
          cost: 1,
          type: "skill",
          description: "[ Haste ] Create 2 Moonslash\nApply Exhaust to those\ncards, decrease Cost\nby 1 until used",
          reasoning: "Excellent synergy with Tsukuyomi V for passive Will-O'-Wisp generation. Creates 0-cost Moonslash cards that can be spammed to build Will-O'-Wisp stacks efficiently.",
        },
        {
          id: "Oni Hunt V",
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "[ Unique ] +40% Damage Amount\nto Shadow of the\nMoon+\nAt the start of the turn,\n3 Will-O'-Wisp",
          reasoning: "The +40% damage bonus to Shadow of the Moon+ is decent but not exceptional. The 3 Will-O'-Wisp per turn is passive but relatively small compared to active generation methods. Solid but not optimal.",
        },
      ],
      divineEpiphanies: [
        {
          name: "-1 Cost",
          description: "Decrease Cost by 1",
          reasoning: "Excellent for cost efficiency, making Oni Hunt even more spammable for Will-O'-Wisp generation.",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
        },
        {
          name: "+1 Draw",
          description: "Draw 1 card",
          reasoning: "Helps maintain card draw and cycle through your deck more efficiently.",
          icon: "/images/card/icon_card_battle_expand_secred.png",
        }
      ],
    },
  ]

  const commonCards: Record<string, any> = {
    "Shadow of the Moon": {
      id: "shadow-of-the-moon",
      name: "Shadow of the Moon",
      image: "/images/character/chizuru/unique4.png",
      cost: 1,
      type: "attack",
      description: "[ Bind / Retain ] 72% Damage\n+20% Damage Amount\nfor each Bind stack",
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
        name: baseCard.name,
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
    "tsukuyomi-oni-mixed": [
      { ref: "Karmic Flames V", count: 1 },
      { ref: "Tsukuyomi III", count: 3 },
      { ref: "Bound At Dusk I", count: 1 },
      { ref: "Oni Hunt I", count: 2 },
      { ref: "Shadow of the Moon", count: 1 },
    ],
    "e2-moon-spam": [
      { ref: "Karmic Flames V", count: 1 },
      { ref: "Tsukuyomi V", count: 1 },
      { ref: "Tsukuyomi I", count: 3 },
      { ref: "Bound At Dusk II", count: 1 },
      { ref: "Oni Hunt IV", count: 1 },
      { ref: "Shadow of the Moon", count: 1 },
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

  // Helper function to get rarity color based on card name
  function getRarityColor(cardName: string): string {
    if (cardName?.includes("Oni Hunt")) {
      return "#FFD700"; // Legend - Gold
    } else if (cardName?.includes("Shadow of the Moon")) {
      return "#E9A1FC"; // Unique - Purple
    } else {
      return "#6FB0FC"; // Rare - Blue
    }
  }

  // Helper function to get rarity background image based on card name
  function getRarityBackgroundImage(cardName: string): string {
    if (cardName?.includes("Oni Hunt")) {
      return "/images/card/card_title_rarity_legend.png";
    } else if (cardName?.includes("Shadow of the Moon")) {
      return "/images/card/card_title_rarity_unique.png";
    } else {
      return "/images/card/card_title_rarity_rare.png";
    }
  }

  function CardDisplay({ card }: { card: any }) {
    const isPlaceholder = card.name === "Placeholder";

    // Don't render placeholder boxes
    if (isPlaceholder) {
      return null;
    }

    return (
      <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200">
        {/* Void Border */}
        <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
          <img src="/images/card/void-border.png" alt="" className="h-full w-full object-cover" />
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
              className="w-full h-full object-cover scale-108"
            />
            <div className="absolute inset-0 flex flex-col">
              {/* Top Section: Cost + Name + Type */}
              <div className="p-2 pt-1.5 pl-3">
                <div className="flex items-start gap-1.5 relative">
                  {/* Rarity Image */}
                  <div className="absolute left-0 top-0 z-20 flex items-center" style={{ transform: 'translateX(-18px)' }}>
                    <img
                      src={
                        card.name?.includes("Oni Hunt")
                          ? "/images/card/card_rarity_legend.png"
                          : card.name?.includes("Shadow of the Moon")
                            ? "/images/card/card_rarity_unique.png"
                            : "/images/card/card_rarity_rare.png"
                      }
                      alt=""
                      className="h-12 sm:h-14 object-contain"
                    />
                  </div>
                  {/* Cost */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                    <span
                      className="font-bold text-4xl scale-x-80"
                      style={{
                        color: "#FFFFFF",
                        WebkitTextStroke: "1.3px #2D4CAE",
                        textShadow: `
                        0 0 2px #5B91FB,
                        0 0 4px #5B91FB,
                        0 0 6px #5B91FB,
                        0 0 8px #5B91FB,
                        0 0 12px #5B91FB,
                        0 0 16px #5B91FB,
                        -1px -1px 0 #5B91FB,
                         1px -1px 0 #5B91FB,
                        -1px  1px 0 #5B91FB,
                         1px  1px 0 #5B91FB,
                        -2px -2px 4px rgba(91, 145, 251, 0.8),
                         2px -2px 4px rgba(91, 145, 251, 0.8),
                        -2px  2px 4px rgba(91, 145, 251, 0.8),
                         2px  2px 4px rgba(91, 145, 251, 0.8)
                      `,
                      }}
                    >
                      {card.cost}
                    </span>
                    <div
                      className="w-full h-0.5 mt-0.5 scale-x-75"
                      style={{
                        backgroundColor: "#B6C4F9",
                        boxShadow: `
                          0 0 2px #5B91FB,
                          0 0 4px #5B91FB,
                          0 0 6px #5B91FB,
                          0 0 8px rgba(91, 145, 251, 0.6),
                          inset 0 1px 0 rgba(255, 255, 255, 0.3)
                        `,
                      }}
                    />
                  </div>
                  {/* Name and Type */}
                  <div className="flex-1 pt-0.5 min-w-0">
                    <div className="relative inline-block">
                      {/* Background Image - can be positioned separately */}
                      <div
                        className="absolute"
                        style={{
                          backgroundImage: `url(${getRarityBackgroundImage(card.name)})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "left center",
                          backgroundSize: "100%",
                          top: 10,
                          left: -50,
                          right: 0,
                          bottom: 0,
                          height: "50%",
                          width: "350%",
                        }}
                      />
                      {/* Text */}
                      <h5
                        className="relative font-bold leading-tight drop-shadow-lg"
                        style={{
                          color: getRarityColor(card.name),
                          fontSize: "clamp(0.70rem, 2.5vw, 1.25rem)",
                          padding: "5px 0px",
                          textShadow: `
                        -1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px  1px 0 #000,
                         1px  1px 0 #000
                      `,
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                          maxWidth: "100%",
                          whiteSpace: "wrap",
                          overflow: "visible",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {card.name}
                      </h5>
                    </div>
                      <div className="flex items-center gap-1 -mt-1.5">
                        <img
                          src={
                            card.type === "attack"
                              ? "/images/icon-category-card-attack.webp"
                              : card.type === "skill"
                              ? "/images/icon-category-card-skill.webp"
                              : "/images/icon-category-card-upgrade.webp"
                          }
                          alt={card.type}
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        <span
                          className="text-white/100 text-[14px] font-large capitalize drop-shadow "
                          style={{
                            padding: "0px 0px",
                            fontSize: "clamp(0.65rem, 2vw, 0.875rem)",
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
                    {/* Card Frame Spark */}
                    <img
                      src="/images/card/card_frame_spark.png"
                      alt=""
                      className="w-1/2 mb-0 drop-shadow-2xl"
                    />
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
            <section id="overview" className="hidden lg:block rounded-lg border border-border bg-card p-8 scroll-mt-6">
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

            {/* 2. Base Cards */}
            <section id="card-epiphany" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
            <h2 className="text-2xl font-bold mb-6 text-purple-400">2. Base Cards</h2>
              <p className="text-muted-foreground mb-6">
              S+ (Best), S (Excellent), A (Strong), B (Average), C (Low Impact), Situational (Niche-use only).
              <br />
              Click a base card to view its epiphanies.
              </p>

              {/* Base Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {uniqueCards.map((cardData) => {
                  // Use first epiphany's cost and type, or fallback to baseType
                  const baseCost = cardData.epiphanies[0]?.cost ?? 0
                  const baseType = cardData.epiphanies[0]?.type ?? cardData.baseType
                  
                  return (
                    <Dialog 
                      key={cardData.id} 
                      open={selectedCardForEpiphanies?.id === cardData.id} 
                      onOpenChange={(open) => {
                        if (open) {
                          setSelectedCardForEpiphanies(cardData)
                        } else {
                          setSelectedCardForEpiphanies(null)
                        }
                      }}
                    >
                      <DialogTrigger asChild>
                        <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200 cursor-pointer">
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
                              <div className="p-2 pt-1.5 pl-3">
                                <div className="flex items-start gap-1.5 relative">
                                  {/* Rarity Image */}
                                  <div className="absolute left-0 top-0 z-20 flex items-center" style={{ transform: 'translateX(-18px)' }}>
                                    <img
                                      src={
                                        cardData.name === "Oni Hunt"
                                          ? "/images/card/card_rarity_legend.png"
                                          : cardData.name === "Shadow of the Moon"
                                            ? "/images/card/card_rarity_unique.png"
                                            : "/images/card/card_rarity_rare.png"
                                      }
                                      alt=""
                                      className="h-12 sm:h-14 object-contain"
                                    />
                                  </div>
                                  {/* Cost */}
                                  <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                                    <span
                                      className="font-bold text-4xl scale-x-80"
                                      style={{
                                        color: "#FFFFFF",
                                        WebkitTextStroke: "1.3px #2D4CAE",
                                        textShadow: `
                                        0 0 2px #5B91FB,
                                        0 0 4px #5B91FB,
                                        0 0 6px #5B91FB,
                                        0 0 8px #5B91FB,
                                        0 0 12px #5B91FB,
                                        0 0 16px #5B91FB,
                                        -1px -1px 0 #5B91FB,
                                         1px -1px 0 #5B91FB,
                                        -1px  1px 0 #5B91FB,
                                         1px  1px 0 #5B91FB,
                                        -2px -2px 4px rgba(91, 145, 251, 0.8),
                                         2px -2px 4px rgba(91, 145, 251, 0.8),
                                        -2px  2px 4px rgba(91, 145, 251, 0.8),
                                         2px  2px 4px rgba(91, 145, 251, 0.8)
                                      `,
                                      }}
                                    >
                                      {baseCost}
                                    </span>
                                    <div
                                      className="w-full h-0.5 mt-0.5 scale-x-75"
                                      style={{
                                        backgroundColor: "#B6C4F9",
                                        boxShadow: `
                                          0 0 2px #5B91FB,
                                          0 0 4px #5B91FB,
                                          0 0 6px #5B91FB,
                                          0 0 8px rgba(91, 145, 251, 0.6),
                                          inset 0 1px 0 rgba(255, 255, 255, 0.3)
                                        `,
                                      }}
                                    />
                                  </div>

                                  {/* Name and Type */}
                                  <div className="flex-1 pt-0.5">
                                    <div className="relative inline-block">
                                      {/* Background Image - can be positioned separately */}
                                      <div
                                        className="absolute"
                                        style={{
                                          backgroundImage: `url(${getRarityBackgroundImage(cardData.name)})`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundPosition: "left center",
                                          backgroundSize: "100%",
                                          top: 10,
                                          left: -50,
                                          right: 0,
                                          bottom: 0,
                                          height: "50%",
                                          width: "350%",
                                        }}
                                      />
                                      {/* Text */}
                                      <h5
                                        className="relative font-bold text-[20px] leading-tight drop-shadow-lg"
                                        style={{
                                          color: getRarityColor(cardData.name),
                                          padding: "3px 4px",
                                          textShadow: `
                                        -1px -1px 0 #000,
                                         1px -1px 0 #000,
                                        -1px  1px 0 #000,
                                         1px  1px 0 #000
                                      `,
                                          transform: "scaleX(1)",
                                          transformOrigin: "left",
                                          maxWidth: "180%",
                                          whiteSpace: "nowrap",
                                          overflow: "hidden",
                                        }}
                                      >
                                        {cardData.name}
                                      </h5>
                                    </div>
                                    <div className="flex items-center gap-1 -mt-2.5">
                                      <img
                                        src={
                                          baseType === "attack"
                                            ? "/images/icon-category-card-attack.webp"
                                            : baseType === "skill"
                                              ? "/images/icon-category-card-skill.webp"
                                              : "/images/icon-category-card-upgrade.webp"
                                        }
                                        alt={baseType}
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
                                        {baseType}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Description Section */}
                              {cardData.baseDescription && (
                                <div className="mt-auto p-2.5 pl-3 py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
                                  {/* Card Frame Spark Disabled */}
                                  <img
                                    src="/images/card/card_frame_spark_dis.png"
                                    alt=""
                                    className="w-1/2 mb-0 drop-shadow-2xl"
                                  />
                                  {(() => {
                                    const { bracketedText, remainingText } = parseDescription(cardData.baseDescription)
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
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="!w-[95vw] !max-w-6xl max-h-[90vh] overflow-y-auto scrollbar-none p-3 sm:p-4 md:p-6 m-2 sm:m-4">
                        <DialogHeader>
                          <DialogTitle className="text-xl sm:text-2xl text-purple-400">
                            {cardData.name} - Epiphanies
                          </DialogTitle>
                        </DialogHeader>
                        
                        {/* Epiphanies Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-4 sm:mt-6">
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div key={index} className="flex flex-col gap-2 sm:gap-3">
                              {/* Card Display */}
                              <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/50 transition-all duration-200 w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] mx-auto">
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
                                  <div className="absolute inset-0 flex flex-col justify-end">
                                    {/* Top Section */}
                                    <div className="p-2 pt-1.5 pl-3">
                                      <div className="flex items-start gap-1.5 relative">
                                        {/* Rarity Image */}
                                        <div className="absolute left-0 top-0 z-20 flex items-center" style={{ transform: 'translateX(-18px)' }}>
                                          <img
                                            src={
                                              cardData.name === "Oni Hunt"
                                                ? "/images/card/card_rarity_legend.png"
                                                : cardData.name === "Shadow of the Moon"
                                                  ? "/images/card/card_rarity_unique.png"
                                                  : "/images/card/card_rarity_rare.png"
                                            }
                                            alt=""
                                            className="h-12 sm:h-14 object-contain"
                                          />
                                        </div>
                                        {/* Cost */}
                                        <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                                          <span
                                            className="font-bold text-3xl sm:text-4xl scale-x-80"
                                            style={{
                                              color: "#FFFFFF",
                                              WebkitTextStroke: "1.3px #2D4CAE",
                                              textShadow: `
                                              0 0 2px #5B91FB,
                                              0 0 4px #5B91FB,
                                              0 0 6px #5B91FB,
                                              0 0 8px #5B91FB,
                                              0 0 12px #5B91FB,
                                              0 0 16px #5B91FB,
                                              -1px -1px 0 #5B91FB,
                                               1px -1px 0 #5B91FB,
                                              -1px  1px 0 #5B91FB,
                                               1px  1px 0 #5B91FB,
                                              -2px -2px 4px rgba(91, 145, 251, 0.8),
                                               2px -2px 4px rgba(91, 145, 251, 0.8),
                                              -2px  2px 4px rgba(91, 145, 251, 0.8),
                                               2px  2px 4px rgba(91, 145, 251, 0.8)
                                            `,
                                            }}
                                          >
                                            {epiphany.cost}
                                          </span>
                                          <div
                                            className="w-full h-0.5 mt-0.5 scale-x-75"
                                            style={{
                                              backgroundColor: "#B6C4F9",
                                              boxShadow: `
                                                0 0 2px #5B91FB,
                                                0 0 4px #5B91FB,
                                                0 0 6px #5B91FB,
                                                0 0 8px rgba(91, 145, 251, 0.6),
                                                inset 0 1px 0 rgba(255, 255, 255, 0.3)
                                              `,
                                            }}
                                          />
                                        </div>

                                        {/* Name and Type */}
                                        <div className="flex-1 pt-0.5">
                                          <div className="relative inline-block">
                                            {/* Background Image - can be positioned separately */}
                                            <div
                                              className="absolute"
                                              style={{
                                                backgroundImage: `url(${getRarityBackgroundImage(cardData.name)})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "left center",
                                                backgroundSize: "100%",
                                                top: 10,
                                                left: -50,
                                                right: 0,
                                                bottom: 0,
                                                height: "50%",
                                                width: "350%",
                                              }}
                                            />
                                            {/* Text */}
                                            <h5
                                              className="relative font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-tight drop-shadow-lg"
                                              style={{
                                                color: getRarityColor(cardData.name),
                                                padding: "2px 4px",
                                                textShadow: `
                                              -1px -1px 0 #000,
                                               1px -1px 0 #000,
                                              -1px  1px 0 #000,
                                               1px  1px 0 #000
                                            `,
                                                transform: "scaleX(1)",
                                                transformOrigin: "left",
                                                maxWidth: "180%",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                              }}
                                            >
                                              {cardData.name}
                                            </h5>
                                          </div>
                                          <div className="flex items-center gap-1 -mt-2.5">
                                            <img
                                              src={
                                                epiphany.type === "attack"
                                                  ? "/images/icon-category-card-attack.webp"
                                                  : epiphany.type === "skill"
                                                    ? "/images/icon-category-card-skill.webp"
                                                    : "/images/icon-category-card-upgrade.webp"
                                              }
                                              alt={epiphany.type}
                                              className="w-4 h-4 sm:w-5 sm:h-5"
                                            />
                                            <span
                                              className="text-white/100 text-[12px] sm:text-[13px] md:text-[14px] font-large capitalize drop-shadow "
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

                                    <div className="mt-auto p-2 sm:p-2.5 pl-2 sm:pl-3 py-3 sm:py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-0">
                                      {/* Card Frame Spark */}
                                      <img
                                        src="/images/card/card_frame_spark.png"
                                        alt=""
                                        className="w-1/2 mb-0 drop-shadow-2xl"
                                      />
                                      {(() => {
                                        const { bracketedText, remainingText } = parseDescription(epiphany.description)
                                        return (
                                          <>
                                            {bracketedText && (
                                              <p
                                                className="text-center font-medium text-xs sm:text-sm leading-snug m-0"
                                                style={{ color: "#e3b46c" }}
                                              >
                                                {bracketedText}
                                              </p>
                                            )}
                                            <p
                                                    className="text-white text-center text-xs sm:text-sm leading-snug m-0 whitespace-pre-line"
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

                        {/* Epiphany Explanations */}
                        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                          <h3 className="text-lg sm:text-xl font-bold text-purple-300">Epiphany Explanations</h3>
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div key={index} className="p-3 sm:p-4 rounded-lg bg-background/50 border border-border">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${getTierColor(epiphany.tier)}`}
                                >
                                  {epiphany.tier} Tier
                                </span>
                                <span className="text-xs sm:text-sm font-semibold text-foreground">
                                  {epiphany.id}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{epiphany.reasoning}</p>
                            </div>
                          ))}
                        </div>

                        {/* Divine Epiphanies */}
                        {cardData.divineEpiphanies && cardData.divineEpiphanies.length > 0 && (
                          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                            <h3 className="text-lg sm:text-xl font-bold text-purple-300">Divine Epiphanies</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                              Good Divine Epiphanies that this card can roll:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                              {cardData.divineEpiphanies.map((divineEpiphany: any, index: number) => (
                                <div key={index} className="p-3 sm:p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/40">
                                  <div className="flex items-center gap-2 mb-2">
                                    {divineEpiphany.icon && (
                                      <img
                                        src={divineEpiphany.icon}
                                        alt={divineEpiphany.name || "Divine Epiphany"}
                                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
                                      />
                                    )}
                                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-purple-500/30 text-purple-200 border border-purple-400/50">
                                      Divine
                                    </span>
                                    {divineEpiphany.name && (
                                      <span className="text-xs sm:text-sm font-semibold text-purple-200">
                                        {divineEpiphany.name}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                    {divineEpiphany.description}
                                  </p>
                                  {divineEpiphany.reasoning && (
                                    <p className="text-xs text-purple-300/80 mt-2 italic leading-relaxed">
                                      {divineEpiphany.reasoning}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  )
                })}
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
                      [140 Faint Memory Cost without Convert Method]
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This build focuses on stacking Will-O'-Wisp to unleash a massive Shadow of the Moon for devastating damage.
                    <br />
                    <br />
                    <strong>Card Ratios:</strong> The optimal ratio is 3 Tsukuyomi and 2 Oni Hunt. A 2:3 ratio is also viable, but avoid using 4 of one type as it reduces synergy.
                    <br />
                    <br />
                    <strong>Orlea Options:</strong> Oni Hunt II or Oni Hunt V can be used for Orlea depending on whether you want to spend buffs or not.
                  </p>

                  {(() => {
                    const { topRow, bottomRow } = generateDeckRows("tsukuyomi-oni-mixed");
                    return (
                      <>
                        {/* Top Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
                          {topRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
                          {bottomRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>

                {/* Build 2 */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-purple-300">E2 Shadow of the Moon+ Spam Build</h3>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-sm font-bold">
                      [140 Faint Memory Cost without Convert Methods]
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    At Ego 2, using Tsukuyomi I and Tsukuyomi V on Shadow of the Moon+ will refund the cost, allowing you to chain 4 Shadow of the Moon+ cards consecutively for massive burst damage.
                  </p>

                  {(() => {
                    const { topRow, bottomRow } = generateDeckRows("e2-moon-spam");
                    return (
                      <>
                        {/* Top Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
                          {topRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto justify-items-center">
                          {bottomRow.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </section>

            {/* 3.1. Equipments */}
            <section id="equipments" className="rounded-lg border border-border bg-card p-8 scroll-mt-6">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">3.1. Equipments</h2>
              <p className="text-muted-foreground mb-6">
                These are Chizuru's best equipment options, listed by priority. Only weapons are fully prioritized here, as you typically cannot equip all items simultaneously. Note that only one unique item can be equipped per character, unless they come from different Chaos Manifestations. Hover over the tooltip icon to see each item's source location.
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

                {/* Accessory Category */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h3 className="text-lg font-bold text-purple-300">Accessory</h3>
                  </div>

                {/* Best in Slot Accessory */}
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

                {/* Show More Accessory Modal */}
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
                      Alternative Accessory
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
                        why: "Provides the best 2-set bonus for general damage output",
                      },
                      {
                        name: "Executioner's Tool",
                        effect: "+25% Critical Damage",
                        icon: "/images/sets/executioners-tool.webp",
                        why: "Offers the best 2-set bonus for critical damage builds",
                      },
                      {
                        name: "Cursed Corpse",
                        effect: "Increases damage dealt to target inflicted with Agony by 10%",
                        icon: "/images/sets/cursed-corpse.webp",
                        why: "Optional damage boost if achievable, but not required. Substats are generally more important than this set bonus."
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
                        why: "Weak and conditional, but still better than the Void set because this set bonus is additive and generic."
                      },

                      {
                        name: "Executioner's Tool",
                        effect: "+25% Critical Damage",
                        icon: "/images/sets/executioners-tool.webp",
                        why: "Provides the best 2-set bonus for general damage output.",                      
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
                      Prioritize Critical Rate and Critical Damage equally to achieve an ideal critical ratio. After that, prioritize Flat Attack and Attack % for additional damage scaling. Void Damage % is generally preferred over Attack % for most cases, as it provides more specialized damage amplification for Void-type attacks.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Partners */}
            <section id="partners" className="rounded-lg border border-border bg-card p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">5. Partners</h2>
              <p className="text-muted-foreground mb-6">
                Click on any partner below to view detailed information about their synergy with Chizuru.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  {
                    id: 1,
                    name: "Itsuku",
                    role: "S+",
                    image: "/images/partners/itsuku.webp",
                    description: "Best in Slot - Signature Partner\n\nItsuku's Partner Skill significantly amplifies damage for one turn, making her the optimal choice for maximizing Chizuru's burst potential. The fixed damage component is largely negligible compared to the massive damage multiplier provided.",
                  },
                  {
                    id: 2,
                    name: "Zatera",
                    role: "S",
                    image: "/images/partners/zatera.webp",
                    description: "Best Free-to-Play Option\n\nZatera provides a substantial Attack boost, making her an excellent alternative to Itsuku for players who don't have access to signature partners. Her consistent damage amplification synergizes well with Chizuru's playstyle.",
                  },
                  {
                    id: 3,
                    name: "Bria",
                    role: "A",
                    image: "/images/partners/bria.webp",
                    description: "Situational Utility Partner\n\nBria can be useful when her Partner Skill's utility effects are specifically needed for certain encounters. However, she offers less damage amplification compared to higher-tier options, making her a niche choice.",
                  },
                  {
                    id: 4,
                    name: "Anteia",
                    role: "C",
                    image: "/images/partners/anteia.webp",
                    description: "Suboptimal Choice\n\nAt Ego 0, Anteia provides less value than Zatera. Her damage output and utility don't match the benefits offered by higher-tier partners, making her a weaker option for Chizuru's builds.",
                  },
                  {
                    id: 5,
                    name: "Eloise",
                    role: "Situational",
                    image: "/images/partners/eloise.webp",
                    description: "Poor Synergy\n\nEloise's Partner Skill synergizes with Exhaust mechanics, but Chizuru's base deck doesn't include any Exhaust cards. This makes Eloise ineffective for Chizuru, as her primary mechanic cannot be utilized.",
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
                        <div className="relative aspect-[9/16] hover:scale-108 rounded-lg overflow-hidden border-2 border-border hover:border-purple-400 bg-card transition-all">
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
              <p className="text-muted-foreground mb-6">
                Below are two example team compositions optimized for Chizuru as the primary damage dealer. Click on any team to view detailed synergy explanations and role breakdowns.
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
                        <span className="font-medium">Rei provides damage buffs while Veronica enables card draw</span>
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
                      <DialogDescription>Optimal team composition focusing on card draw and damage amplification</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Team Overview</h3>
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
                              <strong className="text-red-300">Veronica + Chizuru:</strong> Veronica's Repose (0 cost, Draw 2 other combatant's cards) solves Chizuru's card draw problem. This ensures Chizuru can consistently find her Tsukuyomi cards (which generate 3 Will-O'-Wisp per hit) and Shadow of the Moon cards to unleash her damage.
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
                        <span className="font-medium">Rei provides damage buffs while Tressa generates attack cards for Will-O'-Wisp stacking</span>
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
                      <DialogTitle className="text-2xl text-purple-400">Team 2: Mono Void</DialogTitle>
                      <DialogDescription>Mono Void composition focusing on direct Will-O'-Wisp generation</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">Team Overview</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This variant replaces Veronica with Tressa, taking a different approach to Will-O'-Wisp generation. Instead of relying on card draw to find Chizuru's cards, Tressa <strong className="text-purple-300">generates attack cards</strong> that Chizuru can use with Tsukuyomi to generate Will-O'-Wisp stacks. All three characters share <strong className="text-purple-300">Void Ego type</strong>, creating strong synergy and team-wide benefits.
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
                              <strong className="text-purple-300">Triple Void Ego Synergy:</strong> Having all three characters share Void Ego type creates natural synergy and provides team-wide benefits. This makes the team more cohesive than mixed Ego type compositions, enhancing overall effectiveness.
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
                          <h3 className="text-lg font-semibold text-foreground mb-2">Team Comparison</h3>
                          <p className="text-muted-foreground leading-relaxed">
                            This team trades Veronica's card draw for Tressa's direct attack card generation. It's more consistent for Will-O'-Wisp stacking but may struggle if you need to find specific Chizuru cards. The triple Void Ego synergy provides stronger team-wide benefits, but you lose Veronica's versatile draw utility. Choose this team when you want more reliable Will-O'-Wisp generation and stronger Ego type synergy.
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