// data/characters/rei.ts
import { Attributes } from "@/types/card";
import {
  Card,
  CardRarities,
  CardTier,
  CharacterData,
  MemoryFragmentSetRecommendation,
  UniqueCard,
  PartnersGuide,
} from "@/types/character-guides";
import { MemoryFragmentSet, MemoryFragmentMainStats, MemoryFragmentSubstats } from "@/types/memory-fragments";
import { SaveData } from "@/types/save-data";

const commonCards: Card[] = [
  {
    id: "Dark Blade",
    name: "Dark Blade",
    image: "/images/character/rei/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "100% Damage\n15% Critical Rate",
  },
  {
    id: "Material Regeneration",
    name: "Material Regeneration",
    image: "/images/character/rei/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "Heal 100%",
  },
];
const uniqueCards: UniqueCard[] = [
  {
    id: "strike-of-darkness",
    name: "Strike of Darkness",
    image: "/images/character/rei/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Lead ] 100% Damage\nIncrease Damage\nAmount of Basic Attack\nCards by 100% for 1\nturn",
    epiphanies: [
      {
        id: "Strike of Darkness I",
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description:
          "[ Lead ] 150% Damage\nIncrease Damage\nAmount of Basic Attack\nCards by 150% for 1\nturn",
        reasoning: "Stronger boost than the IV epiphany but only lasts 1 turn. Great for setting up burst damage windows.",
      },
      {
        id: "Strike of Darkness II",
        tier: CardTier.Bad,
        cost: 1,
        type: "attack",
        description:
          "350% Damage\nDecrease Damage\nAmount by 20% for 1\nturn",
        reasoning: "The 20% damage penalty to ALL your damage isn't worth a slightly higher modifier on one attack. Avoid.",
      },
      {
        id: "Strike of Darkness III",
        tier: CardTier.Bad,
        cost: 1,
        type: "attack",
        description:
          "[ Lead ] 150% Damage\nDiscard all Basic Cards,\nadd 1 Hit for each",
        reasoning: "Strictly worse than V epiphany - costs 1 AP, no Retain, and minimal damage scaling. Just pick V instead.",
      },
      {
        id: "Strike of Darkness IV",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] Increase Damage\nAmount of Basic Attack\nCards by 80%",
        reasoning: "Permanent 80% damage boost to basic attacks. Core pick for Mei Lin and Chizuru Moonslash builds.",
      },
      {
        id: "Strike of Darkness V",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description:
          "[ Retain ] Activate all Basic Cards\nin hand",
        reasoning: "Free deck thinning with Retain. Can sit in hand or be fodder for discard/exhaust effects. Perfect for save data where you couldn't remove basics.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Best option for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "Only usable on Strike of Darkness IV",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "AP 1",
        reasoning: "Only usable on Strike of Darkness V",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "Draw 1",
        reasoning: "Only usable on Strike of Darkness V",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "resonating-darkness",
    name: "Resonating Darkness",
    image: "/images/character/rei/unique1.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Unique ] +40% Damage Amount\nof cards with Cost 1",
    epiphanies: [
      {
        id: "Resonating Darkness I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +60% Damage Amount\nof cards with Cost 1",
        reasoning: "Direct upgrade from base card with 20% more damage. Solid pick for 1-cost focused decks.",
      },
      {
        id: "Resonating Darkness II",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Damage Amount\nof Void Card",
        reasoning: "Same damage as base but buffs all Void cards. Best for Kayron and Renoa only, since other Void combatants still prefer the 1-cost option.",
      },
      {
        id: "Resonating Darkness III",
        tier: CardTier.C,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Shield gain,\nDamage Amount, and\nHealing of cards with\nCost 1",
        reasoning: "Same damage as base with shield/healing bonuses you don't need. Just take base or I instead.",
      },
      {
        id: "Resonating Darkness IV",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Damage Amount\nof cards with Cost 1 or\nless",
        reasoning: "Best for 0-cost builds like Mei Lin or Chizuru Moonslash.",
      },
      {
        id: "Resonating Darkness V",
        tier: CardTier.A,
        cost: 0,
        type: "skill",
        description:
          "[ Unique ] For 1 turn, +80%\nDamage Amount of\ncards with Cost 1",
        reasoning: "Highest damage boost but only 1 turn. Requires high draw support to set up and burst in the same turn.",
      },
    ],
    divineEpiphanies: [
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "Permanent +20% Additive Damage",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Best option for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "snack-time",
    name: "Snack Time",
    image: "/images/character/rei/unique2.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Exhaust ] Choose 1 card(s) in\nhand to Exhaust\nHeal 100%\nDraw 1",
    epiphanies: [
      {
        id: "Snack Time I",
        tier: CardTier.C,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust 2 ] Choose 1 card(s) in\nhand to Exhaust\nHeal 150%\nDraw 1",
        reasoning: "Base card with Exhaust 2, but forces you to exhaust something to draw.",
      },
      {
        id: "Snack Time II",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description:
          "[ Retain / Exhaust ] Heal 150%\nDraw 2",
        reasoning: "Best option - Draw 2 with Retain, only skip if you have excess draw or having too much unwanted cards.",
      },
      {
        id: "Snack Time III",
        tier: CardTier.S,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust ] Choose up to 2 card(s)\nin hand to Exhaust,\nthen Draw for each",
        reasoning: "Flexible deck thinning - exhaust 0-2 cards as needed. Better than II when you have lots of cards to exhaust.",
      },
      {
        id: "Snack Time IV",
        tier: CardTier.A,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust ] Choose up to 1 card(s)\nfrom Draw Pile to\nExhaust, then Draw for\neach.",
        reasoning: "Worse than II or III, but lets you choose specific cards from your draw pile before they become dead draws.",
      },
      {
        id: "Snack Time V",
        tier: CardTier.Niche,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust ] Choose 2 card(s) in\nhand to Exhaust\nChoose 1 Void Card(s)\nto Draw",
        reasoning: "Nets -1 card, thins by 3, but tutors Void cards. Can chain into itself. Only good in specific Void-heavy decks.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Draw 1",
        reasoning: "Excellent for maintaining card draw",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "Allow more plays per turn",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
    ],
  },
  {
    id: "dark-condensation",
    name: "Dark Condensation",
    image: "/images/character/rei/unique3.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Legendary,
    description: "Choose 1 Attack\nCard(s) in hand, +100%\nDamage Amount for 1\nturn",
    epiphanies: [
      {
        id: "Dark Condensation I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Attack\nCard(s) in hand, +150%\nDamage Amount for 1\nturn",
        reasoning: "Highest damage buff for 1-cost cards, only lasts 1 turn. Best for burst set up.",
      },
      {
        id: "Dark Condensation II",
        tier: CardTier.B,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 card(s) in\nhand, +100% Damage\nAmount, Shield gain\nand Healing for 1 turn",
        reasoning: "Trades damage for shield/healing buffs you don't need. Skip it.",
      },
      {
        id: "Dark Condensation III",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "For 1 turn, +50% \nDamage Amount of \nVoid Attack Cards",
        reasoning: "Buffs all Void attacks for the turn. Top pick for Void builds, though dupes only extend duration.",
      },
      {
        id: "Dark Condensation IV",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Attack \ncard(s), +100% \nDamage Amount until \nused",
        reasoning: "Flexible targeting across zones but lower multiplier.",
      },
      {
        id: "Dark Condensation V",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "Choose 1 Attack \nCard(s) in hand, +50% \nDamage Amount",
        reasoning: "Permanent but lowest multiplier and exhausts.",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Excellent for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "Basically turns the card into a 0-cost",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "Permanent +20% Additive Damage, it makes the Dark Condensation V stronger",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "Predator's Blade",
    name: "Predator's Blade",
    image: "/images/character/rei/unique4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Unique,
    description:
      "300% Damage\nFor 1 turn 4 Morale",
    epiphanies: []
  }
];
const recommendedSaveData: SaveData[] = [
  {
    id: "draw-focused-build",
    name: "High Draw Support",
    description: "Strike of Darkness IV and Resonating Darkness IV if running with Mei Lin.",
    faintMemoryNote: "140 Faint Memory Cost without Convert Method",
    cards: [
      "Strike of Darkness V",
      "Resonating Darkness I",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Snack Time II",
      "Dark Condensation I",
      "Predator's Blade",
    ],
  },
  {
    id: "void-focused-build",
    name: "Void Focused Build",
    description: "Snack Time II for Renoa, Snack Time V for Kayron",
    faintMemoryNote: "140 Faint Memory Cost without Convert Method",
    cards: [
      "Strike of Darkness V",
      "Resonating Darkness II",
      "Snack Time V",
      "Snack Time V",
      "Snack Time V",
      "Snack Time V",
      "Dark Condensation III",
      "Predator's Blade",
    ],
  },
];

const gearsData = {
  weapons: ["Tentacles of Chaos", "Crimson Sword", "Flashbang", "Over Cutter Shocker"],
  armors: ["Fragment of the Empty Void", "Rocket-Adorned Cape", "Brainwave-Blocking Helmet"],
  accessories: ["Clover of the Forest", "Sphere of Randomness", "Superconductive Protein", "Source of the Forbidden", "Water Drops of the Goddess", "Multifaceted Parallel Universe Nexus"],
};

const recommendedSources = ["Laboratory 0", "Swamp of Judgment"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "healers-journey",
      description: ""
    },
    {
      id: "tetras-authority",
      description: "",
    },
    {
      id: "seths-scarab",
      description: "",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "nyx",
    description: "Best option - discard up to 3 cards and draw that many +1.",
    tier: CardTier.SPlus,
  },
  {
    id: "arwen",
    description: "Best survivability option with consistent healing.",
    tier: CardTier.A,
  },
  {
    id: "alyssa",
    description: "Worse version of Arwen's healing.",
    tier: CardTier.B,
  },
  {
    id: "yvonne",
    description: "Worse than Alyssa.",
    tier: CardTier.B,
  },
  {
    id: "ritochka",
    description: "Gives 3 morale.",
    tier: CardTier.S,
  },
];

export const reiData: CharacterData = {
  attribute: Attributes.Void,
  commonCards: commonCards,
  uniqueCards: uniqueCards,
  recommendedSaveData: recommendedSaveData,
  gears: gearsData,
  recommendedSources: recommendedSources,
  memoryFragmentSets: memoryFragmentSets,
  memoryFragmentMainStats: [
    MemoryFragmentMainStats.Health,
    MemoryFragmentMainStats.Health,
    MemoryFragmentMainStats.EgoRecovery,
  ],
  memoryFragmentSubstatPriorities: [
    {
      priority: 1,
      relation: "equal",
      stats: [MemoryFragmentSubstats.EgoRecovery]
    },
    {
      priority: 2,
      relation: "or",
      stats: [MemoryFragmentSubstats.DefenseFlat, MemoryFragmentSubstats.Defense]
    },
    {
      priority: 3,
      relation: "equal",
      stats: [MemoryFragmentSubstats.HealthFlat, MemoryFragmentSubstats.Health]
    }
  ],
  memoryFragmentSubstatsNote: "Just prioritize Ego Recovery, DEF and HP is not that important.",
  partnersGuide: partnersGuide,
};
