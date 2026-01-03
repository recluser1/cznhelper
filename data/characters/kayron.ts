// data/characters/kayron.ts
import { Attributes } from "@/types/card";
import { CharacterClass, CharacterRole } from "@/types/character";
import {
  Card,
  CardRarities,
  CardTier,
  CharacterData,
  MemoryFragmentSetRecommendation,
  UniqueCard,
  PartnersGuide,
} from "@/types/character-guides";
import {
  MemoryFragmentSet,
  MemoryFragmentMainStats,
  MemoryFragmentSubstats,
} from "@/types/memory-fragments";
import { SaveData } from "@/types/save-data";

const commonCards: Card[] = [
  {
    id: "Elimination",
    name: "Elimination",
    image: "/images/character/kayron/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "150% Damage\nCreate 1 Futility\nCard(s)",
  },
  {
    id: "Sphere",
    name: "Sphere",
    image: "/images/character/kayron/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "echo-of-futility",
    name: "Echo of Futility",
    image: "/images/character/kayron/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "240% Damage\nCreate 2 Futility\nCard(s)",
    epiphanies: [
      {
        id: "Echo of Futility I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "attack",
        description: "360% Damage\nCreate 3 Futility\nCard(s)",
        reasoning: "Fast ramping, good base damage for burst build",
      },
      {
        id: "Echo of Futility II",
        tier: CardTier.C,
        cost: 1,
        type: "attack",
        description:
          "240% Damage\nCreate 2 Futility\nCard(s)\n+20% Damage Amount\nfor each Exhausted\nFutility",
        reasoning: "Bad scaling, not comparable to 0cost epi, need 12+ fulity EXHAUSTED to beat Echo1",
      },
      {
        id: "Echo of Futility III",
        tier: CardTier.A,
        cost: 1,
        type: "attack",
        description:
          "240% Damage\nCreate 2 Futility\nCard(s)\nApply Ephemeral on\nthat card",
        reasoning: "Ap friendly, not excell in burst or lose scaling power",
      },
      {
        id: "Echo of Futility IV",
        tier: CardTier.Bad,
        cost: "X",
        type: "attack",
        description:
          "50% Damage\n+150% Damage\nAmount for each X\nCreate X+1 Futility\nCard(s)",
        reasoning: "Bad value scale with ap ratio",
      },
      {
        id: "Echo of Futility V",
        tier: CardTier.SPlus,
        cost: 0,
        type: "attack",
        description:
          "30% Damage\nCreate 2 Futility\nCard(s)\n+30% Damage Amount\nfor each Futility\ncreated during this\nbattle",
        reasoning: "Easy scaling and good damage, ap efficient",
      },
    ],
    divineEpiphanies: [
      {
        name: "2 Vulnerable to the target",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "Increase Damage by 30%",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_diallos.png",
        description: "",
      },
    ],
  },
  {
    id: "brand-of-annihilation",
    name: "Brand of Annihilation",
    image: "/images/character/kayron/unique1.png",
    type: "attack",
    cost: 3,
    rarity: CardRarities.Rare,
    description:
      "300% Damage to all\nenemies\nWhen a card is\nExhausted,\ndecrease Cost of this\ncard by 1 for 1 turn.",
    epiphanies: [
      {
        id: "Brand of Annihilation I",
        tier: CardTier.S,
        cost: 3,
        type: "attack",
        description:
          "450% Damage to all enemies\nWhen a card is\nExhausted,\ndecrease Cost of this\ncard by 1 for 1 turn",
        reasoning: "Good if no 7ap, can use first ramping/rotation without e1",
      },
      {
        id: "Brand of Annihilation II",
        tier: CardTier.S,
        cost: 3,
        type: "attack",
        description:
          "300% Damage x 2 to a\nrandom enemy\nWhen a card is\nExhausted,\ndecrease Cost of this\ncard by 1 for 1 turn",
        reasoning: "Really good damage for st fight, usually boss",
      },
      {
        id: "Brand of Annihilation III",
        tier: CardTier.SPlus,
        cost: 7,
        type: "attack",
        description:
          "500% Damage to all\nenemies\nDecrease Cost for each\nExhausted Futility",
        reasoning: "Brand become 0 for entire battle after ramping, high base, easy to use",
      },
      {
        id: "Brand of Annihilation IV",
        tier: CardTier.Niche,
        cost: 1,
        type: "attack",
        description:
          "200% Damage to all\nenemies\n+40% Damage Amount\nfor each card\nExhausted this turn",
        reasoning: "Only good for 1 turn burst, damage only higher if exhaust more than 8-10 CARD*, still cost 1ap and damage reset after round",
      },
      {
        id: "Brand of Annihilation V",
        tier: CardTier.C,
        cost: 2,
        type: "attack",
        description:
          "300% Damage to all\nenemies\nIf any card was\nExhausted this turn, 3\nAgony to all enemies",
        reasoning: "Ew",
      },
    ],
    divineEpiphanies: [
      {
        name: "2 Vulnerable to the target",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "Increase Damage by 30%",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "black-hole",
    name: "Black Hole",
    image: "/images/character/kayron/unique2.png",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Rare,
    description:
      "240% Damage\n+40% Damage Amount\nfor each Exhausted\nFutility",
    epiphanies: [
      {
        id: "Black Hole I",
        tier: CardTier.C,
        cost: 2,
        type: "attack",
        description: "360% Damage\nActivate 2 Futility\nCard(s) from hand",
        reasoning: "Ap save to spend fulity, not worth droping his scaling power",
      },
      {
        id: "Black Hole II",
        tier: CardTier.SPlus,
        cost: 2,
        type: "attack",
        description:
          "360% Damage\n+60% Damage Amount\nfor each Exhausted\nFutility",
        reasoning: "Good scaling",
      },
      {
        id: "Black Hole III",
        tier: CardTier.C,
        cost: 2,
        type: "attack",
        description:
          "60% Damage to a\nrandom enemy\nAdd 1 Hit for each\nExhausted Futility (max\n5 times)",
        reasoning: "When usable",
      },
      {
        id: "Black Hole IV",
        tier: CardTier.B,
        cost: 2,
        type: "attack",
        description:
          "300% Damage\nAdd 1 Hit for each 5\nExhausted Futility (max\n2 times)",
        reasoning: "Only higher damage on 5 and 10-12 fulity exhaust, Not worth droping his scaling power",
      },
      {
        id: "Black Hole V",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "When Futility is\nExhausted, 100% Fixed\nDamage to a random\nenemy",
        reasoning: "If u didnt get scaling Bh, damage is a bit worse than scaling asume u can get value of every fulity, otherwise suck. Fixed damge => no scale from other source",
      },
    ],
    divineEpiphanies: [
      {
        name: "Increase Damage by 30%",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "2 Vulnerable to the target",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "oath-of-vanity",
    name: "Oath of Vanity",
    image: "/images/character/kayron/unique3.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "[ Unique ] When Futility is\ncreated, change those cards into a 1-cost\nAttack Card with 80%\nDamage and Heal\neffects",
    epiphanies: [
      {
        id: "Oath of Vanity I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When Futility is\ncreated, change those\ncards into a 1-cost\nAttack Card with 120%\nDamage and Heal\neffects",
        reasoning:
          "Damage and sustain, worth for long extended fight",
      },
      {
        id: "Oath of Vanity II",
        tier: CardTier.S,
        cost: 0,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] When Futility is\ncreated, change those\ncards into a 1-cost\nAttack Card with 80%\nDamage and Heal\neffects",
        reasoning: "Mainly for initiation, losing value in long term compare to Oath of Vanity I and Oath of Vanity III, good if no e3",
      },
      {
        id: "Oath of Vanity III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When creating Futility,\nit changes to an Attack\nCard with 180%\nDamage, Cost 1",
        reasoning: "Really big damage, worth for long extended fight",
      },
      {
        id: "Oath of Vanity IV",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description:
          "[ Exhaust / Retain ] Exhaust all Futility\nStatus Ailments, and\nCurse Cards in hand\nDraw for each",
        reasoning: "Give u access to the whole deck and ramping every card for first few turn, for burst damage playstyle",
      },
      {
        id: "Oath of Vanity V",
        tier: CardTier.Bad,
        cost: 0,
        type: "upgrade",
        description:
          "When 3 Futility Cards\nare Exhausted, 2 Agony\nto all enemies",
        reasoning: "Why",
      },
    ],
    divineEpiphanies: [
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
        description: "",
      },
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
      {
        name: "1 AP",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_circen.png",
        description: "",
      },
      {
        name: "Draw 1",
        reasoning: "",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "Echoes of True Abyss",
    name: "Echoes of True Abyss",
    image: "/images/character/kayron/unique4.png",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Unique,
    description:
      "240% Damage\nCreate 3 Futility Cards\n+40% Damage Amount\nfor each",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "Standard",
    shortDescription: "Balanced build for most encounters",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Echo of Futility V",
      "Echo of Futility V",
      "Echo of Futility V",
      "Echo of Futility V",
      "Brand of Annihilation III",
      "Black Hole II",
      "Oath of Vanity III",
      "Echoes of True Abyss",
    ],
  },
  {
    id: "deck-2",
    name: "Burst",
    shortDescription: "High burst damage",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Echo of Futility I",
      "Brand of Annihilation III",
      "Brand of Annihilation III",
      "Brand of Annihilation III",
      "Black Hole II",
      "Oath of Vanity IV",
      "Oath of Vanity IV",
      "Echoes of True Abyss",
    ],
  },
  {
    id: "deck-3",
    name: "One Turn Kill",
    shortDescription: "Niche OTK Build",
    description: ``,
    faintMemoryNote: "140 Faint Memory Cost",
    cards: [
      "Echo of Futility I",
      "Brand of Annihilation IV",
      "Brand of Annihilation IV",
      "Brand of Annihilation IV",
      "Black Hole II",
      "Oath of Vanity IV",
      "Oath of Vanity IV",
      "Echoes of True Abyss",
    ],
  },
];

const gearsData = {
  weapons: [
    "Mutant Predator Spike",
    "Foggy Crystal Ball",
    "Intellect of Discord",
    "Unexploded Plasma Bomb",
    "Obsidian Sword",
    "Tentacles of Chaos",
    "RFS-17",
  ],
  armors: [
    "Wings of Freedom",
    "Fragment of the Empty Void",
    "Rocket-Adorned Cape",
  ],
  accessories: [
    "Nerve Hacking Module",
    "Emblem of an Exceptional Entity",
    "Dimensional Cube",
    "Eye of Gluttony",
    "Amorphous Cube",
    "Flower of Dead Souls",
  ],
};

const recommendedSources = ["Laboratory 0", "City of Mist"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "offering-of-the-void",
      description:
        "Generally higher raw damage than 2/2/2. Black Wing + Executioner's 2/2 becomes viable at high card multiplier scaling.",
    },
    {
      id: "executioners-tool",
      description: "Standard Critical Damage build with high crit scaling.",
    },
  ],
  alternative: [
    {
      id: "black-wing",
      description: "Standard Attack set for raw damage scaling.",
    },
    {
      id: "executioners-tool",
      description: "Standard Critical Damage build with high crit scaling.",
    },
    {
      id: "cursed-corpse",
      description:
        "Alternative that can outperform with consistent Agony uptime.",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "bria",
    description: `[ Best in Slot / Signature ] 
    Provides massive multiplicative damage scaling and strong utility. 
    Her Ego Skill grants 25% additive card damage on first Futility generation, plus 10% multiplicative damage per card generated (up to 3x). 
    Essential for maximizing Kayron's damage potential in extended fights.
    `,
    tier: CardTier.SPlus,
  },
  {
    id: "eloise",
    description: `Strong multiplicative damage boost: 20% passive card damage plus 24% multiplicative for 1 turn after exhausting cards. 
    Excellent synergy with Kayron's Exhaust-heavy playstyle.
    `,
    tier: CardTier.SPlus,
  },
  {
    id: "zatera",
    description: `Solid F2P option providing 16% ATK—a rare stat that scales well. 
    However, Kayron benefits more from multiplicative card damage (which scales his innate ramping effects).
    `,
    tier: CardTier.S,
  },
  // {
  //   id: "eloise",
  //   description: `Single copy loses significant damage potential compared to higher investments.
  //   Still provides decent multiplicative scaling but falls behind other options.
  //   `,
  //   tier: CardTier.A,
  // },
  {
    id: "anteia",
    description: `Nyx would be a better choice`,
    tier: CardTier.Bad,
  },
];

export const kayronData: CharacterData = {
  attribute: Attributes.Void,
  job: CharacterClass.Psionic,
  role: CharacterRole.MainDPS,
  // bannerUrl: "",
  // avatarUrl: "",

  overview: `
  Kayron's expensive cards generate or consume Futility—a 1-cost Status Ailment that exhausts with no base effect. 
  His Oath of Vanity Epiphanies define his Futility-centered playstyle.
  Gameplan: Upgrade Futility via Oath of Vanity to enable his kit, then reduce card costs through Epiphanies, Exhausts, and team synergy to maximize damage output.
  `.trim(),

  strengths: [
    "Strong at just Manifest Ego 1",
    "Versatile DPS",
    "High ST and AoE damage",
    "Can solo DPS/Sustain Chaos",
    "Fast Basin/Simulation clear",
  ],

  weaknesses: [
    "Requires Manifest Ego 1",
    "Reliant on Bria for optimal damage and QoL",
    "Very AP-reliant",
    "Hard to play",
    "Annoying to farm Save Data",
  ],

  commonCards: commonCards,
  uniqueCards: uniqueCards,
  recommendedSaveData: recommendedSaveData,
  gears: gearsData,
  recommendedSources: recommendedSources,
  memoryFragmentSets: memoryFragmentSets,
  memoryFragmentMainStats: [
    MemoryFragmentMainStats.CriticalChance,
    MemoryFragmentMainStats.VoidDamage,
    MemoryFragmentMainStats.Attack,
  ],
  memoryFragmentSubstatPriorities: [
    {
      priority: 1,
      relation: "equal",
      stats: [
        MemoryFragmentSubstats.CriticalChance,
        MemoryFragmentSubstats.CriticalDamage,
      ],
    },
    {
      priority: 2,
      relation: "or",
      stats: [MemoryFragmentSubstats.AttackFlat, MemoryFragmentSubstats.Attack],
    },
  ],
  memoryFragmentSubstatsNote: "",
  partnersGuide: partnersGuide,
};
