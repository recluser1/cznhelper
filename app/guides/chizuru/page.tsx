"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ChevronDown } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState, useMemo } from 'react'; //
import { GearTooltip } from "@/components/GearTooltip";
import ExpandableSetCard from "@/components/ui/ExpandableSetCard"
import { weapons, armors, accessories, GearData } from "@/data/gear";
import { GearItem } from "@/components/GearItem";


export default function ChizuruGuidePage() {
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(null)
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null)
  const [selectedCardForEpiphanies, setSelectedCardForEpiphanies] = useState<typeof uniqueCards[0] | null>(null)




  const sections = [
    { id: "overview", title: "1. Overview", level: 1 },
    { id: "base-cards", title: "2. Base Cards", level: 1 },
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
          tier: "B",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
          reasoning: "The extra hit helps generate more Will-O'-Wisp stacks, but other epiphanies offer better utility or damage scaling.",
        },
        {
          id: "Karmic Flames II",
          tier: "A",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles:\nDecrease Cost of the\nnext card of this unit\nused by 1",
          reasoning: "Good cost efficiency, refunds itself when used on already-shackled enemies. Requires consistent card draw support.",
        },
        {
          id: "Karmic Flames III",
          tier: "C",
          cost: 1,
          type: "attack",
          description: "[ Initiation ] 216% Damage\n1 Cursed Shackles\nCursed Shackles:\nIncrease Damage\nAmount by 100%",
          reasoning: "Lacks the multi-hit or utility of other options, the damage boost is decent but doesn't scale as well as Will-O'-Wisp or Oni Hunt IV focused builds.",
        },
        {
          id: "Karmic Flames IV",
          tier: "Bad",
          cost: 2,
          type: "skill",
          description: "[ Initiation ] 1 Cursed Shackles\nCreate 1 Shadow of the\nMoon",
          reasoning: "Expensive at 2 cost, but synergizes well with Bound At Dusk V for cost reduction, but generally too expensive.",
        },
        {
          id: "Karmic Flames V",
          tier: "S+",
          cost: 1,
          type: "skill",
          description: "[ Initiation / Exhaust ] 1 Cursed Shackles\nWhen a target inflicted\nwith Cursed Shackles\nis defeated, create this\ncard",
          reasoning: "Best Karmic Flames epiphany, self-exhausts but returns when you defeat a shackled enemy, creating infinite value. Less effective against multiple enemies.",
        },
      ],
      divineEpiphanies: [
        {
          name: "Reduce the cost of this card by 1",
          description: "Decrease Cost by 1",
          reasoning: "Excellent for cost efficiency, especially when combined with Karmic Flames II for a 0-cost cycle.",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
        },
        {
          name: "Draw 1",
          description: "Draw 1 card",
          reasoning: "Great for maintaining card draw and cycling through your deck more efficiently.",
          icon: "/images/card/icon_card_battle_expand_secred.png",
        },
        {
          name: "1 AP",
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
          reasoning: "Direct upgrade from base card, providing 50% more Will-O'-Wisp per hit, the most reliable and consistent source of Will-O'-Wisp generation for Chizuru.",
        },
        {
          id: "Tsukuyomi II",
          tier: "A",
          cost: 0,
          type: "skill",
          description: "Add 1 Hit(s) to the next\nAttack Card of this unit\nused, 1 Will-O'-Wisp for\neach Hit",
          reasoning: "Adds an extra hit which can be valuable, but generates significantly less Will-O'-Wisp compared to Tsukuyomi I.",
        },
        {
          id: "Tsukuyomi III",
          tier: "S+",
          cost: 0,
          type: "skill",
          description: "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+\nused",
          reasoning: "Best option for Shadow of the Moon builds, the +2 hits stack infinitely and synergize well with Rei and Orlea damage amplification, enabling massive burst damage potential.",
        },
        {
          id: "Tsukuyomi IV",
          tier: "C",
          cost: 0,
          type: "skill",
          description: "3 Will-O'-Wisp for each\nAttack Card of this unit\nin hand",
          reasoning: "Limited by Chizuru's hand size and only counts her own attack cards, in practice, you rarely have enough Chizuru attack cards in hand to generate meaningful stacks compared to other epiphanies.",
        },
        {
          id: "Tsukuyomi V",
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Unique / Lead ] When an Attack Card\nof this unit is used, 2\nWill-O'-Wisp",
          reasoning: "Excellent with Oni Hunt IV for passive Will-O'-Wisp generation, also strong if you have duplicated base Tsukuyomi.",
        },
      ],
      divineEpiphanies: [
        {
          name: "Draw 1",
          description: "Draw 1 card",
          reasoning: "Excellent for maintaining card draw, especially important for 0-cost cards like Tsukuyomi.",
          icon: "/images/card/icon_card_battle_expand_secred.png",
        },
        {
          name: "1 AP",
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
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost by 1\nuntil 2 random card(s)\nare used",
          reasoning: "Provides +2 effective AP per turn through cost reduction, but be cautious as it may interfere with Conqueror set bonuses.",
        },
        {
          id: "Bound At Dusk II",
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nWhen Shadow of the\nMoon+ is used, decrease\nCost of the next 1 card(s)\nused by 1",
          reasoning: "Best for Shadow of the Moon+ spam builds, enables chaining multiple Shadow of the Moon+ cards when combined with proper draw support.",
        },
        {
          id: "Bound At Dusk III",
          tier: "S",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\ncard(s) of other\nCombatants",
          reasoning: "Strong team support option, best used with characters like Hugo.",
        },
        {
          id: "Bound At Dusk IV",
          tier: "Bad",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nActivate 2 random\nLead cards",
          reasoning: "Too RNG-dependent to be reliable, requires both having Lead cards in hand and the random activation hitting useful cards.",
        },
        {
          id: "Bound At Dusk V",
          tier: "C",
          cost: 1,
          type: "upgrade",
          description: "[ Initiation / Unique ] At the start of the turn,\ngain Inhibit\nDecrease Cost of the\ncard with the highest\nCost by 2",
          reasoning: "Limited synergy - primarily works with Karmic Flames IV for Chizuru herself.",
        },
      ],
      divineEpiphanies: [
        {
          name: "Reduce the cost of this card by 1",
          description: "Decrease Cost by 1",
          reasoning: "Excellent for cost efficiency, making Bound At Dusk even more valuable.",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
        },
        {
          name: "Draw 1",
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
          reasoning: "Potentially the best Oni Hunt epiphany, as it generates 4 Will-O'-Wisp on use. Provides strong damage bonus to Shadow of the Moon.",
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
          reasoning: "Conditional +2 hits requires an empty attack card hand, which is difficult to maintain, doesn't increase Shadow of the Moon damage bonus and lacks the consistency of other options.",
        },
        {
          id: "Oni Hunt IV",
          tier: "S+",
          cost: 1,
          type: "skill",
          description: "[ Haste ] Create 2 Moonslash\nApply Exhaust to those\ncards, decrease Cost\nby 1 until used",
          reasoning: "Best option for Moonslash-focused builds. Requires basic potentials, but delivers the highest damage potential otherwise",
        },
        {
          id: "Oni Hunt V",
          tier: "B",
          cost: 1,
          type: "upgrade",
          description: "[ Unique ] +40% Damage Amount\nto Shadow of the\nMoon+\nAt the start of the turn,\n3 Will-O'-Wisp",
          reasoning: "The +40% damage bonus to Shadow of the Moon+ is decent but not exceptional. The 3 Will-O'-Wisp per turn is passive but relatively small compared to other options.",
        },
      ],
      divineEpiphanies: [
        {
          name: "Reduce the cost of this card by 1",
          description: "Decrease Cost by 1",
          reasoning: "Excellent for cost efficiency, making Oni Hunt even more spammable for Will-O'-Wisp generation.",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
        },
        {
          name: "Draw 1",
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
    "Moonslash": {
      id: "moonslash",
      name: "Moonslash",
      image: "/images/character/chizuru/starter1.png",
      cost: 1,
      type: "attack",
      description: "150% Damage x 2",
    }
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
    "oni4-basic": [
      { ref: "Moonslash", count: 1 },
      { ref: "Karmic Flames V", count: 1 },
      { ref: "Tsukuyomi V", count: 1 },
      { ref: "Oni Hunt IV", count: 4 },
      { ref: "Shadow of the Moon", count: 1 },
    ],
  };

  function generateDeckRows(deckKey: keyof typeof recommendedDecks): { topRow: any[]; bottomRow: any[]; deck: any[] } {
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

    return { topRow, bottomRow, deck };
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
      <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/100 transition-all duration-200 max-w-[280px] mx-auto">
        {/* Void Border */}
        <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
          <img src="/images/card/void-border.png" alt="Void Border" className="h-full w-full object-cover" />
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
                        className="h-11 sm:h-13 object-contain"
                      />
                    </div>

                    {/* Cost */}
                    <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                      <span
                        className="font-bold text-3xl sm:text-4xl md:text-2xl lg:text-4xl"
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
                        className="w-full h-0.5 mt-0.5"
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
                      <div className="relative w-full">
                        {/* Background Image - can be positioned separately */}
                        <div
                          className="absolute"
                          style={{
                            backgroundImage: `url(${getRarityBackgroundImage(card.name)})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left center",
                            backgroundSize: "contain",
                            left: -50,
                            right: 0,
                            top: 7,
                            bottom: 0,
                            height: "70%",
                            width: "700%",
                          }}
                        />

                        {/* Card Name */}
                        <h5
                          className="relative font-bold leading-tight drop-shadow-lg overflow-hidden text-ellipsis whitespace-nowrap"
                          style={{
                            color: getRarityColor(card.name),
                            fontSize: "clamp(0.8rem, 2.8vw, 1.1rem)",
                            padding: "4px 6px",
                            textShadow: `
                        -1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px  1px 0 #000,
                         1px  1px 0 #000
                      `,
                            transform: "scaleX(1)",
                            transformOrigin: "left",
                            maxWidth: "100%",
                          }}
                        >
                          {card.name}
                        </h5>
                      </div>

                      {/* Type Icon + Text */}
                      <div className="flex items-center gap-1 -mt-1"
                        style={{
                          padding: "4px 6px",
                        }}
                      >
                        <img
                          src={
                            card.type === "attack"
                              ? "/images/icon-category-card-attack.webp"
                              : card.type === "skill"
                                ? "/images/icon-category-card-skill.webp"
                                : "/images/icon-category-card-upgrade.webp"
                          }
                          alt={card.type}
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        />
                        <span
                          className="text-white text-xs sm-text-sm font-medium capitalize drop-shadow"
                          style={{
                            padding: "0px 0px",
                            fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
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
                  <div className="mt-auto py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-1">
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
                              className="text-center font-medium text-xs sm:text-base leading-snug m-0"
                              style={{ color: "#e3b46c" }}>
                              {bracketedText}
                            </p>
                          )}
                          <p
                            className="text-white text-center text-xs sm:text-sm leading-snug m-0 whitespace-pre-line px-2"
                            dangerouslySetInnerHTML={{
                              __html: remainingText
                                .replace(
                                  /(\d+%?)/g,
                                  '<span style="color: #7ce2fb">$1</span>',)
                                .replace(
                                  /Shadow of the\s*Moon\+/gi,
                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',)
                                .replace(
                                  /Moonslash/gi,
                                  '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>',),
                            }}
                          />
                        </>
                      );
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
      case "Niche":
        return `
          bg-gray-900/80
          text-gray-400
          font-medium text-xs
          border border-gray-700/50
        `

      case "Bad":
        return `
          bg-gray-900/90
          text-red-400
          font-medium text-xs
          border border-red-700/50
        `

      default:
        return `bg-gray-900/70 
        text-gray-600 
        border border-gray-800/50 
        text-xs
        `
    }
  }


  const chizuruWeapons = [
    weapons.find(g => g.name === "Intellect of Discord"),
    weapons.find(g => g.name === "Tentacles of Chaos"),
    weapons.find(g => g.name === "Foggy Crystal Ball"),
    weapons.find(g => g.name === "Mutant Predator Spike"),
    weapons.find(g => g.name === "Dagger That Tricked the Shadow"),
    weapons.find(g => g.name === "RFS-17"),
    weapons.find(g => g.name === "Bone Cutter"),
    weapons.find(g => g.name === "Obsidian Sword"),
  ].filter(Boolean) as GearData[];

  const chizuruArmors = [
    armors.find(g => g.name === "Wings of Freedom"),
    armors.find(g => g.name === "Fairy King's Crown"),
    armors.find(g => g.name === "Shield of the Watcher"),
    armors.find(g => g.name === "Fragment of the Empty Void"),
    armors.find(g => g.name === "Rocket-Adorned Cape"),
  ].filter(Boolean) as GearData[];

  const chizuruAccessories = [
    accessories.find(g => g.name === "Emblem of an Exceptional Entity"),
    accessories.find(g => g.name === "Eye of the Eyeless"),
    accessories.find(g => g.name === "Clover of the Forest"),
    accessories.find(g => g.name === "Verdant Shackles"),
    accessories.find(g => g.name === "Dimensional Cube"),
    accessories.find(g => g.name === "Nerve Hacking Module"),
    accessories.find(g => g.name === "Amorphous Cube"),
  ].filter(Boolean) as GearData[];

  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const toggleSource = (source: string) => {
    setSelectedSources(prev =>
      prev.includes(source)
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };

  const filteredWeapons = useMemo(() => {
    if (selectedSources.length === 0) {
      return chizuruWeapons;
    }

    return chizuruWeapons.filter(gear => {
      if (Array.isArray(gear.source) && gear.source.includes('Other')) {
        return true;
      }

      if (Array.isArray(gear.source)) {
        return gear.source.some(src => selectedSources.includes(src));
      }

      return false;
    });
  }, [selectedSources, chizuruWeapons]);

  const filteredArmors = useMemo(() => {
    if (selectedSources.length === 0) {
      return chizuruArmors;
    }

    return chizuruArmors.filter(gear => {
      if (Array.isArray(gear.source) && gear.source.includes('Other')) {
        return true;
      }

      if (Array.isArray(gear.source)) {
        return gear.source.some(src => selectedSources.includes(src));
      }

      return false;
    });
  }, [selectedSources, chizuruArmors]);

  const filteredAccessories = useMemo(() => {
    if (selectedSources.length === 0) {
      return chizuruAccessories;
    }

    return chizuruAccessories.filter(gear => {
      if (Array.isArray(gear.source) && gear.source.includes('Other')) {
        return true;
      }

      if (Array.isArray(gear.source)) {
        return gear.source.some(src => selectedSources.includes(src));
      }

      return false;
    });
  }, [selectedSources, chizuruAccessories]);

  // Only show filters relevant to Chizuru
  const uniqueSources = ['Swamp of Judgment', 'Laboratory 0'];

  const sourceDisplay: Record<string, string> = {
    'Swamp of Judgment': 'Swamp of Judgment',
    'Laboratory 0': 'Laboratory 0',
  };


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
                      className={`text-sm text-muted-foreground hover:text-purple-400 transition-colors block py-1 ${section.level === 2 ? "pl-4" : ""
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
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">1. Overview</h2>
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
            <section id="base-cards" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">2. Base Cards</h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
                Click a Base Card to view the Epiphanies Tier List
              </p>

              {/* Base Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
                {uniqueCards.map((cardData) => {
                  const baseCost = cardData.epiphanies[0]?.cost ?? 0;
                  const baseType = cardData.epiphanies[0]?.type ?? cardData.baseType;

                  return (
                    <Dialog
                      key={cardData.id ?? cardData.name}
                      open={selectedCardForEpiphanies?.id === cardData.id}
                      onOpenChange={(open) => {
                        if (open) setSelectedCardForEpiphanies(cardData);
                        else setSelectedCardForEpiphanies(null);
                      }}
                    >
                      <DialogTrigger asChild>
                        {/* Tile - matches Partner tile sizing and interaction */}
                        <div className="group cursor-pointer rounded-xl transition-all duration-300 hover:scale-103 hover:shadow-lg hover:shadow-purple-400/20 w-full max-w-full sm:max-w-[280px]">
                          <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/100 transition-all duration-200 cursor-pointer">
                            {/* Void Border */}
                            <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                              <img src="/images/card/void-border.png" alt="" className="h-full w-full object-cover" />
                            </div>

                            <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                              <img
                                src={cardData.image || "/placeholder.svg"}
                                alt={cardData.name}
                                className="w-full h-full object-cover scale-108" />
                            </div>

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
                                      className="h-11 sm:h-13 object-contain"
                                    />
                                  </div>

                                  {/* Cost */}
                                  <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                                    <span
                                      className="font-bold text-2xl sm:text-4xl"
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
                                      className="w-full h-0.5 mt-0.5"
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
                                    <div className="relative w-full">
                                      {/* Rarity Background - matches reference exactly */}
                                      <div
                                        className="absolute"
                                        style={{
                                          backgroundImage: `url(${getRarityBackgroundImage(cardData.name)})`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundPosition: "left center",
                                          backgroundSize: "contain",
                                          left: -50,
                                          right: 0,
                                          top: 7,
                                          bottom: 0,
                                          height: "70%",
                                          width: "700%",
                                        }}
                                      />

                                      {/* Card Name */}
                                      <h5
                                        className="relative font-bold leading-tight drop-shadow-lg overflow-hidden text-ellipsis whitespace-nowrap"
                                        style={{
                                          color: getRarityColor(cardData.name),
                                          fontSize: "clamp(1.1rem, 2.8vw, 1.1rem)",
                                          padding: "4px 6px",
                                          textShadow: `
                                            -1px -1px 0 #000,
                                             1px -1px 0 #000,
                                            -1px  1px 0 #000,
                                             1px  1px 0 #000
                                          `,
                                          maxWidth: "100%",
                                        }}
                                      >
                                        {cardData.name}
                                      </h5>
                                    </div>

                                    {/* Type Icon + Text */}
                                    <div className="flex items-center gap-1 -mt-1" style={{ padding: "4px 6px" }}>
                                      <img
                                        src={
                                          baseType === "attack"
                                            ? "/images/icon-category-card-attack.webp"
                                            : baseType === "skill"
                                              ? "/images/icon-category-card-skill.webp"
                                              : "/images/icon-category-card-upgrade.webp"
                                        }
                                        alt={baseType}
                                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                      />
                                      <span
                                        className="text-white text-xs sm:text-sm font-medium capitalize drop-shadow"
                                        style={{
                                          fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
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

                              {/* Description Section - base card (disabled spark) */}
                              {cardData.baseDescription && (
                                <div className="mt-auto py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-1">
                                  <img
                                    src="/images/card/card_frame_spark_dis.png"
                                    alt=""
                                    className="w-1/2 mb-0 drop-shadow-2xl"
                                  />
                                  {(() => {
                                    const { bracketedText, remainingText } = parseDescription(cardData.baseDescription);
                                    return (
                                      <>
                                        {bracketedText && (
                                          <p
                                            className="text-center font-medium text-xs sm:text-base leading-snug m-0"
                                            style={{ color: "#e3b46c" }}>
                                            {bracketedText}
                                          </p>
                                        )}
                                        <p
                                          className="text-white text-center text-xs sm:text-base leading-snug m-0 whitespace-pre-line px-2"
                                          dangerouslySetInnerHTML={{
                                            __html: remainingText
                                              .replace(/(\d+%?)/g, '<span style="color: #7ce2fb">$1</span>')
                                              .replace(/Shadow of the\s*Moon\+/gi, '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>')
                                              .replace(/Moonslash/gi, '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'),
                                          }}
                                        />
                                      </>
                                    );
                                  })()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="!w-[95vw] !max-w-6xl max-h-[90vh] overflow-y-auto scrollbar-none bg-gray-900/95 border border-gray-800 rounded-xl ">
                        <DialogHeader className="bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                          <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                            {cardData.name} - Epiphanies
                          </DialogTitle>
                        </DialogHeader>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div key={index} className="flex flex-col gap-2 sm:gap-3 w-full max-w-[280px] mx-auto">
                              <div className="flex justify-center">
                                <span
                                  className={`
                      px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                      ${getTierColor(epiphany.tier)}`}>
                                  {epiphany.tier} Tier
                                </span>
                              </div>

                              {/* Epiphany Card */}
                              <div className="relative rounded-lg overflow-hidden border-1 border-border hover:border-purple-400/100 transition-all duration-200">
                                {/* Void Border */}
                                <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                                  <img src="/images/card/void-border.png" alt="" className="h-full w-full object-cover" />
                                </div>

                                <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                                  <img
                                    src={cardData.image || "/placeholder.svg"}
                                    alt={cardData.name}
                                    className="w-full h-full object-cover scale-108"
                                  />

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
                                            className="h-11 sm:h-11 object-contain"
                                          />
                                        </div>

                                        {/* Cost */}
                                        <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                                          <span
                                            className="font-bold text-2xl sm:text-3xl"
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
                                            className="w-full h-0.5 mt-0.5"
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
                                          <div className="relative w-full">
                                            <div
                                              className="absolute"
                                              style={{
                                                backgroundImage: `url(${getRarityBackgroundImage(cardData.name)})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "left center",
                                                backgroundSize: "contain",
                                                left: -50,
                                                right: 0,
                                                top: 7,
                                                bottom: 0,
                                                height: "70%",
                                                width: "700%",
                                              }}
                                            />

                                            <h5
                                              className="relative font-bold leading-tight drop-shadow-lg overflow-hidden text-ellipsis whitespace-nowrap"
                                              style={{
                                                color: getRarityColor(cardData.name),
                                                fontSize: "clamp(0.9rem, 2.8vw, 0.9rem)",
                                                padding: "4px 6px",
                                                textShadow: `
                                        -1px -1px 0 #000,
                                         1px -1px 0 #000,
                                        -1px  1px 0 #000,
                                         1px  1px 0 #000
                                      `,
                                                maxWidth: "100%",
                                              }}
                                            >
                                              {cardData.name}
                                            </h5>
                                          </div>

                                          <div className="flex items-center gap-1 -mt-1" style={{ padding: "4px 6px" }}>
                                            <img
                                              src={
                                                epiphany.type === "attack"
                                                  ? "/images/icon-category-card-attack.webp"
                                                  : epiphany.type === "skill"
                                                    ? "/images/icon-category-card-skill.webp"
                                                    : "/images/icon-category-card-upgrade.webp"
                                              }
                                              alt={epiphany.type}
                                              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                            />
                                            <span
                                              className="text-white text-xs sm:text-sm font-medium capitalize drop-shadow"
                                              style={{
                                                fontSize: "clamp(0.8rem, 2vw, 0.8rem)",
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

                                    {/* Description Section - epiphany (active spark) */}
                                    <div className="mt-auto py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-1">
                                      <img
                                        src="/images/card/card_frame_spark.png"
                                        alt=""
                                        className="w-1/3 mb-0 drop-shadow-2xl"
                                      />
                                      {(() => {
                                        const { bracketedText, remainingText } = parseDescription(epiphany.description);
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
                                                  .replace(/(\d+%?)/g, '<span style="color: #7ce2fb">$1</span>')
                                                  .replace(/Shadow of the\s*Moon\+/gi, '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>')
                                                  .replace(/Moonslash/gi, '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'),
                                              }}
                                            />
                                          </>
                                        );
                                      })()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Epiphany Explanations */}
                        <div className="mt-6 space-y-3 sm:space-y-4">
                          <h3 className="text-lg font-bold text-purple-300">Epiphanies Tier</h3>
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div key={index} className="p-3 rounded-lg bg-background/50 border border-border">
                              <div className="flex flex-row items-center sm:flex-row gap-2 mb-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${getTierColor(epiphany.tier)}`}
                                >
                                  {epiphany.tier} Tier
                                </span>
                                <span className="text-sm sm:text-base font-semibold text-foreground">
                                  {epiphany.id}
                                </span>
                              </div>
                              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{epiphany.reasoning}</p>
                            </div>
                          ))}
                        </div>

                        {/* Divine Epiphanies */}
                        {cardData.divineEpiphanies && cardData.divineEpiphanies.length > 0 && (
                          <div className="mt-6 space-y-4">
                            <h3 className="text-lg font-bold text-purple-300">Divine Epiphanies</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Good Divine Epiphanies that this card can roll
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                              {cardData.divineEpiphanies.map((divineEpiphany: any, index: number) => (
                                <div key={index} className="p-3 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/40">
                                  <div className="flex items-center gap-2 mb-2">
                                    {divineEpiphany.icon && (
                                      <img
                                        src={divineEpiphany.icon}
                                        alt={divineEpiphany.name || "Divine Epiphany"}
                                        className="w-8 h-8 object-contain flex-shrink-0"
                                      />
                                    )}
                                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-purple-500/30 text-purple-200 border border-purple-400/50">
                                      Divine
                                    </span>
                                    {divineEpiphany.name && (
                                      <span className="text-sm font-semibold text-purple-200">
                                        {divineEpiphany.name}
                                      </span>
                                    )}
                                  </div>
                                  {divineEpiphany.reasoning && (
                                    <p className="text-sm sm:text-base text-purple-300/80 mt-2 leading-relaxed">
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
                  );
                })}
              </div>
            </section>

            {/* 3. Recommended Save Data */}
            <section id="recommended-save-data" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">3. Recommended Save Data</h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
                These are example deck builds. You can adjust based on your playstyle and available cards.
              </p>

              <div className="space-y-12 sm:space-y-16">
                {/* Build 1 */}
                <div className="space-y-5">
                  <div className="text-center space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-purple-300">Tsukuyomi & Oni Hunt Mixed Build</h3>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold leading-tight whitespace-normal break-words max-w-full">
                      [140 Faint Memory Cost without Convert Method]
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-4">
                    Optimal Ratio is 3 Tsukuyomi and 2 Oni Hunt<br />
                    2:3 Oni Hunt is also fine, 4 of one or the other is bad<br />
                    Oni Hunt II or Oni Hunt V are also an option with <strong>Orlea</strong>
                  </p>

                  {(() => {
                    const { topRow, bottomRow, deck } = generateDeckRows("tsukuyomi-oni-mixed");
                    return (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto justify-items-center">
                          {deck.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Build 2 */}
                <div className="space-y-5">
                  <div className="text-center space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-purple-300">Moonslash Spam</h3>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold leading-tight whitespace-normal break-words max-w-full">
                      [140 Faint Memory Cost without Convert Method]
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-4">
                    Focuses on spamming low-cost Oni Hunt cards to generate Will-O'-Wisp quickly and trigger Moonslash frequently.
                  </p>

                  {(() => {
                    const { topRow, bottomRow, deck } = generateDeckRows("oni4-basic");
                    return (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto justify-items-center">
                          {deck.map((card, index) => (
                            <CardDisplay key={card.id || index} card={card} />
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </section>

            {/* 3.1. Equipments */}
            <section id="equipments" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">3.1. Equipments</h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
                Note that only one unique item can be equipped per character
                <br />
                <strong>Select a Chaos Manifestation from the dropdown below to view its specific loot pool</strong>
              </p>

              {/* Dropdown */}
              <div className="mb-12 flex flex-col items-center">
                <span className="text-purple-300 text-xl font-medium mb-2 tracking-wide">
                  Chaos Manifestation
                </span>
                <div className="flex justify-center w-full">
                  <div className="relative w-55 mt-2 hover:scale-105 transition-all duration-300">
                    <select
                      value={selectedSources.length === 0 ? 'all' : selectedSources[0] || 'all'}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === 'all') setSelectedSources([]);
                        else setSelectedSources([value]);
                      }}
                      className="
                        appearance-none w-full text-sm font-medium
                        rounded-xl border border-border bg-card
                        py-3 px-4 pr-10 text-center
                        hover:border-purple-400
                        focus:outline-none
                      "
                    >
                      <option value="all">Show All</option>
                      <option value="Laboratory 0">Laboratory 0</option>
                      <option value="Swamp of Judgment">Swamp of Judgment</option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Weapon */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-300 text-center">Weapon</h3>
                  {filteredWeapons.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">No weapons match selected sources.</p>
                  ) : (
                    <>
                      {filteredWeapons[0] && <GearItem {...filteredWeapons[0]} />}
                      {filteredWeapons.length > 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex justify-center w-full">
                              <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">                                Show More
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>
                          </DialogTrigger>

                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-visible bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                            {/* Header with LOWER z-index than tooltip */}
                            <DialogHeader className="sticky top-0 z-0 shrink-0 bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12 pointer-events-none">
                              <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-purple-300 pointer-events-auto">
                                Alternative Weapon
                              </DialogTitle>
                            </DialogHeader>

                            {/* Scrollable content */}
                            <div className="relative z-20 flex-1 min-h-0 overflow-y-auto px-6 pb-6 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                              <div className="space-y-4">
                                {filteredWeapons.slice(1).map((gear, index) => (
                                  <GearItem key={index} {...gear} />
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </>
                  )}
                </div>

                {/* Armor */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-300 text-center">Armor</h3>
                  {filteredArmors.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">No armors match selected sources.</p>
                  ) : (
                    <>
                      {filteredArmors[0] && <GearItem {...filteredArmors[0]} />}
                      {filteredArmors.length > 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex justify-center w-full">
                              <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">
                                Show More
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>
                          </DialogTrigger>

                          {/* Dialog with sticky header + no scrollbar */}
                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                            <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                              <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                                Alternative Armor
                              </DialogTitle>
                            </DialogHeader>
                            <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                              <div className="space-y-4">
                                {filteredArmors.slice(1).map((gear, index) => (
                                  <GearItem key={index} {...gear} />
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </>
                  )}
                </div>

                {/* Accessory */}
                <div className="space-y-4 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-purple-300 text-center">Accessory</h3>
                  {filteredAccessories.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">No accessories match selected sources.</p>
                  ) : (
                    <>
                      {filteredAccessories[0] && <GearItem {...filteredAccessories[0]} />}
                      {filteredAccessories.length > 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex justify-center w-full">
                              <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">                                Show More
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>
                          </DialogTrigger>

                          {/* Dialog with sticky header + no scrollbar */}
                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                            <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                              <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                                Alternative Accessory
                              </DialogTitle>
                            </DialogHeader>
                            <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                              <div className="space-y-4">
                                {filteredAccessories.slice(1).map((gear, index) => (
                                  <GearItem key={index} {...gear} />
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* 4. Memory Fragments */}
            <section id="memory-fragments" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">4. Memory Fragments</h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">

              </p>

              {/* BEST IN SLOT */}
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <div className="text-center mb-4 sm:mb-6">
                    <span className="inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm">
                      Best in Slot
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {[
                      {
                        id: "black-wing",
                        name: "Black Wing",
                        effect: "+12% Attack",
                        icon: "/images/sets/black-wing.webp",
                        why: "Provides the best 2-set bonus for general damage output",
                      },
                      {
                        id: "executioners-tool",
                        name: "Executioner's Tool",
                        effect: "+25% Critical Damage",
                        icon: "/images/sets/executioners-tool.webp",
                        why: "Provides the best 2-set bonus for critical damage builds",
                      },
                      {
                        id: "cursed-corpse",
                        name: "Cursed Corpse",
                        effect: "Increases damage dealt to target inflicted with Agony by 10%",
                        icon: "/images/sets/cursed-corpse.webp",
                        why: "Optional damage boost if achievable, but not required. Substats are generally more important than this set bonus"
                      },
                    ].map((set) => (
                      <ExpandableSetCard
                        key={set.name + "bis"}
                        set={set}
                        isExpanded={expandedMemorySet === set.name + "bis"}
                        onToggle={() => setExpandedMemorySet(expandedMemorySet === set.name + "bis" ? null : set.name + "bis")}
                      />
                    ))}
                  </div>
                </div>

                {/* SECONDARY */}
                <div>
                  <div className="text-center mb-4 sm:mb-6">
                    <span className="inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                      Alternative
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {[
                      {
                        name: "Orb of Inhibition",
                        effect: "When Hitting 2 times with 1 Attack Card, +10% Damage Amount to Void Cards for 1 turn (2 times per turn)",
                        icon: "/images/sets/orb-of-inhibition.webp",
                        why: "Weak and conditional, but still better than the Void set because this set bonus is additive and generic"
                      },
                      {
                        name: "Executioner's Tool",
                        effect: "+25% Critical Damage",
                        icon: "/images/sets/executioners-tool.webp",
                        why: "Provides the best 2-set bonus for critical damage builds",
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
              <div className="mt-8 sm:mt-10 space-y-8">
                {/* Main Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400">IV</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Ideal</div>
                    <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
                      Critical Rate
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400">V</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Desire</div>
                    <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
                      Void Damage
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-purple-400">IV</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Ideal</div>
                    <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
                      Attack %
                    </div>
                  </div>
                </div>

                {/* Substat Priority */}
                <div className="mt-8 text-center">
                  {/* Priority Chain */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-xs sm:text-sm font-semibold text-purple-300">
                      Critical Rate
                    </div>
                    <span className="text-xl sm:text-2xl text-muted-foreground/40">=</span>
                    <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-xs sm:text-sm font-semibold text-purple-300">
                      Critical Damage
                    </div>
                    <span className="text-xl sm:text-2xl text-muted-foreground/40">›</span>
                    <div className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-muted/70 border border-border text-xs sm:text-sm text-muted-foreground">
                      Attack +
                    </div>
                    <span className="text-muted-foreground/60 text-lg sm:text-xl">›</span>
                    <div className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-muted/70 border border-border text-xs sm:text-sm text-muted-foreground">
                      Attack %
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="mt-6 mx-auto max-w-3xl">
                    <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-center px-4">
                      Prioritize Critical Rate and Critical Damage equally to achieve an ideal critical ratio <br /> After that, prioritize Flat Attack and Attack % for additional damage scaling <br /> Void Damage is generally preferred over Attack for most cases
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Partners */}
            <section id="partners" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">5. Partners</h2>
              <p className="text-muted-foreground mb-6 text-xs sm:text-sm md:text-base text-center px-4">
                Click on any partner below to view detailed information about their synergy with Chizuru
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {[
                  {
                    id: 1,
                    name: "Itsuku",
                    role: "S+",
                    image: "/images/partners/itsuku.webp",
                    description: "BiS partner\n Her Partner skill greatly boosts damage for one turn.\nThe fixed damage is irrelevant.",
                  },
                  {
                    id: 2,
                    name: "Zatera",
                    role: "S",
                    image: "/images/partners/zatera.webp",
                    description: "Best F2P option\n Provides a strong damage boost and works well as a replacement if you don't have her signature partner.",
                  },
                  {
                    id: 3,
                    name: "Bria",
                    role: "A",
                    image: "/images/partners/bria.webp",
                    description: "Only worth using if you specifically need her Partner Skill utility. Otherwise, her damage contribution is poor.",
                  },
                  {
                    id: 4,
                    name: "Anteia",
                    role: "C",
                    image: "/images/partners/anteia.webp",
                    description: "At Ego 0, she is weaker than Zatera and offers little value for Chizuru.",
                  },
                  {
                    id: 5,
                    name: "Eloise",
                    role: "Bad",
                    image: "/images/partners/eloise.webp",
                    description: "Not usable with Chizuru. Her Partner Skill requires Exhaust cards, which Chizuru does not have.",
                  },
                ].map((partner) => (
                  <div key={partner.id} className="flex flex-col items-center gap-3">
                    {/* Tier Badge */}
                    <span className={`px-2.5 py-1.5 rounded-full text-xs sm:text-sm font-bold ${getTierColor(partner.role)}`}>
                      {partner.role} Tier
                    </span>

                    <Dialog
                      open={selectedPartner === partner.id}
                      onOpenChange={(open) => setSelectedPartner(open ? partner.id : null)}
                    >
                      <DialogTrigger asChild>
                        <div className="relative aspect-[9/16] w-full max-w-[180px] rounded-lg overflow-hidden border-2 border-border hover:border-purple-400 bg-card transition-all duration-300 hover:scale-103 hover:shadow-lg hover:shadow-purple-400/20 cursor-pointer">
                          <img
                            src={partner.image || "/placeholder.svg"}
                            alt={partner.name}
                            className="object-cover w-full h-full"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-8">
                            <p className="text-sm sm:text-base font-semibold text-white text-center drop-shadow-lg">
                              {partner.name}
                            </p>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="max-w-xl sm:max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto bg-gray-900/95 border border-gray-800 p-4 sm:p-6 rounded-xl">
                        <DialogHeader className="text-center pb-4">
                          <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                            {partner.name}
                          </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-5">
                          <div className="flex justify-center">
                            <img
                              src={partner.image || "/placeholder.svg"}
                              alt={partner.name}
                              className="w-40 sm:w-48 h-auto rounded-lg border-4 border-purple-500/50 shadow-2xl"
                            />
                          </div>

                          <div className="text-center">
                            <span className={`inline-block px-4 py-2 rounded-full text-base sm:text-lg font-bold ${getTierColor(partner.role)}`}>
                              {partner.role} Tier
                            </span>
                          </div>

                          <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700/60">
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line text-center">
                              {partner.description}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Teams */}
            <section id="teams" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400 text-center">6. Teams</h2>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base text-center px-4">
                Below are two example team compositions optimized for Chizuru as the primary damage dealer.
                <br />
                Click on any team to view detailed synergy explanations and role breakdowns.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    id: 1,
                    title: "Chizuru Hypercarry",
                    subtitle: "Rei provides damage buffs while Veronica enables card draw",
                    members: [
                      { name: "Chizuru", job: "psionic", ego: "void", image: "/images/characters/chizuruhalf.webp" },
                      { name: "Rei", job: "controller", ego: "void", image: "/images/characters/reihalf.webp" },
                      { name: "Veronica", job: "ranger", ego: "passion", image: "/images/characters/veronicahalf.webp" },
                    ],
                    overview: "This composition maximizes Chizuru's damage potential by providing the two things she needs most: card draw and damage amplification. Chizuru's power comes from stacking Will-O'-Wisp (gained through hits) to empower her Shadow of the Moon attacks. Without proper support, she struggles to cycle through her deck and find key cards like Tsukuyomi and Shadow of the Moon.",
                    synergies: [
                      { highlight: "Rei + Chizuru", text: "Rei provides damage buffs that multiply Chizuru's Shadow of the Moon damage. Both share Void Ego type, creating natural synergy. Rei's support is especially powerful with Tsukuyomi III (adds 2 hits to Shadow of the Moon), allowing for infinite stacking potential." },
                      { highlight: "Veronica + Chizuru", text: "Veronica's Repose (0 cost, Draw 2 other combatant's cards) solves Chizuru's card draw problem. This ensures Chizuru can consistently find her Tsukuyomi cards (which generate 3 Will-O'-Wisp per hit) and Shadow of the Moon cards to unleash her damage." },
                      { highlight: "The Combo", text: "Veronica draws cards → Chizuru finds Tsukuyomi → Chizuru uses attack cards to generate Will-O'-Wisp (3 per hit) → Rei's damage buffs amplify the damage → Chizuru uses Shadow of the Moon with massive Will-O'-Wisp stacks for devastating damage." },
                    ],
                    roles: [
                      "Chizuru: Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon",
                      "Rei: Support/Damage Buffer - amplifies Chizuru's damage through buffs",
                      "Veronica: Support/Draw Engine - provides card draw to keep Chizuru's combo going",
                    ],
                  },
                  {
                    id: 2,
                    title: "Mono Void",
                    subtitle: "Rei provides damage buffs while Tressa generates attack cards for Will-O'-Wisp stacking",
                    members: [
                      { name: "Chizuru", job: "psionic", ego: "void", image: "/images/characters/chizuruhalf.webp" },
                      { name: "Tressa", job: "psionic", ego: "void", image: "/images/characters/tressahalf.webp" },
                      { name: "Rei", job: "controller", ego: "void", image: "/images/characters/reihalf.webp" },
                    ],
                    overview: "This variant replaces Veronica with Tressa, taking a different approach to Will-O'-Wisp generation. Instead of relying on card draw to find Chizuru's cards, Tressa generates attack cards that Chizuru can use with Tsukuyomi to generate Will-O'-Wisp stacks. All three characters share Void Ego type, creating strong synergy and team-wide benefits.",
                    synergies: [
                      { highlight: "Tressa + Chizuru", text: "Tressa's ability to spam attack cards directly feeds Chizuru's Will-O'-Wisp generation. When Chizuru uses Tsukuyomi (3 Will-O'-Wisp per hit), Tressa's attack cards provide the hits needed to stack Will-O'-Wisp quickly without relying on card draw RNG." },
                      { highlight: "Rei + Chizuru", text: "Rei's role remains the same - providing damage buffs that amplify Chizuru's Shadow of the Moon attacks. The Void Ego synergy between all three characters enhances their effectiveness." },
                      { highlight: "Triple Void Ego Synergy", text: "Having all three characters share Void Ego type creates natural synergy and provides team-wide benefits. This makes the team more cohesive than mixed Ego type compositions, enhancing overall effectiveness." },
                      { highlight: "The Combo", text: "Tressa spams attack cards → Chizuru uses Tsukuyomi on those attacks → Generates 3 Will-O'-Wisp per hit → Rei's damage buffs amplify → Chizuru unleashes Shadow of the Moon with massive Will-O'-Wisp stacks." },
                    ],
                    roles: [
                      "Chizuru: Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon",
                      "Tressa: Support/Hit Generator - spams attack cards to help Chizuru build Will-O'-Wisp stacks",
                      "Rei: Support/Damage Buffer - amplifies Chizuru's damage through buffs",
                    ],
                    comparison: "This team trades Veronica's card draw for Tressa's direct attack card generation. It's more consistent for Will-O'-Wisp stacking but may struggle if you need to find specific Chizuru cards. The triple Void Ego synergy provides stronger team-wide benefits, but you lose Veronica's versatile draw utility. Choose this team when you want more reliable Will-O'-Wisp generation and stronger Ego type synergy.",
                  },

                ].map((team) => (
                  <Dialog key={team.id}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-103">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                          <h3 className="text-base sm:text-lg font-semibold text-violet-400">{team.title}</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-3">
                          {team.members.map((member) => (
                            <div key={member.name} className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md">
                              <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                              <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                                <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                                  <img src={`/images/icon-job-${member.job}.webp`} alt={member.job} className="w-full h-full" />
                                </div>
                                <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                                  <img src={`/images/icon-ego-${member.ego}.webp`} alt={member.ego} className="w-full h-full" />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                                <p className="text-xs sm:text-sm font-semibold text-white text-center">{member.name}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="font-medium">{team.subtitle}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </DialogTrigger>

                    {/* Dialog with sticky header + no scrollbar */}
                    <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                      <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                          {team.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                        <div className="space-y-6">
                          <div className="grid grid-cols-3 gap-3">
                            {team.members.map((member) => (
                              <div key={member.name} className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-2xl">
                                <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                                  <p className="text-base font-bold text-white text-center">{member.name}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-5 text-sm sm:text-base">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">Team Overview</h3>
                              <p className="text-muted-foreground leading-relaxed">{team.overview}</p>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">Synergies</h3>
                              <div className="space-y-3 text-muted-foreground">
                                {team.synergies.map((syn, i) => (
                                  <div key={i}>
                                    <strong className="text-purple-300">{syn.highlight}:</strong> {syn.text}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">Role Distribution</h3>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                                {team.roles.map((role, i) => (
                                  <li key={i}><strong className="text-purple-300">{role.split(":")[0]}:</strong>{role.split(":")[1]}</li>
                                ))}
                              </ul>
                            </div>

                            {team.comparison && (
                              <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">Team Comparison</h3>
                                <p className="text-muted-foreground leading-relaxed">{team.comparison}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  )
}