// data/characters/kayron.ts
import { Attributes } from "@/types/card"
import {
  Card,
  CardRarities,
  CardTier,
  CharacterData,
  MemoryFragmentSetRecommendation,
  UniqueCard,
  PartnersGuide,
} from "@/types/character-guides"
import {
  MemoryFragmentSet,
  MemoryFragmentMainStats,
  MemoryFragmentSubstats,
} from "@/types/memory-fragments"
import { SaveData } from "@/types/save-data"

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
]

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
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "360% Damage\nCreate 3 Futility\nCard(s)",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Echo of Futility II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "240% Damage\nCreate 2 Futility\nCard(s)\n+20% Damage Amount\nfor each Exhausted\nFutility",
        reasoning: "",
      },
      {
        id: "Echo of Futility III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "240% Damage\nCreate 2 Futility\nCard(s)\nApply Ephemeral on\nthat card",
        reasoning: "",
      },
      {
        id: "Echo of Futility IV",
        tier: CardTier.WIP,
        cost: "X",
        type: "attack",
        description:
          "50% Damage\n+150% Damage\nAmount for each X\nCreate X+1 Futility\nCard(s)",
        reasoning: "",
      },
      {
        id: "Echo of Futility V",
        tier: CardTier.WIP,
        cost: 0,
        type: "attack",
        description:
          "30% Damage\nCreate 2 Futility\nCard(s)\n+30% Damage Amount\nfor each Futility\ncreated during this\nbattle",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
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
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "450% Damage to all enemies\nWhen a card is\nExhausted,\ndecrease Cost of this\ncard by 1 for 1 turn",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Brand of Annihilation II",
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "300% Damage x 2 to a\nrandom enemy\nWhen a card is\nExhausted,\ndecrease Cost of this\ncard by 1 for 1 turn",
        reasoning: "",
      },
      {
        id: "Brand of Annihilation III",
        tier: CardTier.WIP,
        cost: 7,
        type: "attack",
        description:
          "500% Damage to all\nenemies\nDecrease Cost for each\nExhausted Futility",
        reasoning: "",
      },
      {
        id: "Brand of Annihilation IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "200% Damage to all\nenemies\n+40% Damage Amount\nfor each card\nExhausted this turn",
        reasoning: "",
      },
      {
        id: "Brand of Annihilation V",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "300% Damage to all\nenemies\nIf any card was\nExhausted this turn, 3\nAgony to all enemies",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Increase this card's Damage by 30%.",
        reasoning: "Self explanatory, even more damage.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
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
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description: "360% Damage\nActivate 2 Futility\nCard(s) from hand",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Black Hole II",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "360% Damage\n+60% Damage Amount\nfor each Exhausted\nFutility",
        reasoning: "",
      },
      {
        id: "Black Hole III",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "60% Damage to a\nrandom enemy\nAdd 1 Hit for each\nExhausted Futility (max\n5 times)",
        reasoning: "",
      },
      {
        id: "Black Hole IV",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "300% Damage\nAdd 1 Hit for each 5\nExhausted Futility (max\n2 times)",
        reasoning: "",
      },
      {
        id: "Black Hole V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "When Futility is\nExhausted, 100% Fixed\nDamage to a random\nenemy",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Increase this card's Damage by 30%.",
        reasoning: "Self explanatory, even more damage.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
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
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When Futility is\ncreated, change those\ncards into a 1-cost\nAttack Card with 120%\nDamage and Heal\neffects",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Oath of Vanity II",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] When Futility is\ncreated, change those\ncards into a 1-cost\nAttack Card with 80%\nDamage and Heal\neffects",
        reasoning: "",
      },
      {
        id: "Oath of Vanity III",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When creating Futility,\nit changes to an Attack\nCard with 180%\nDamage, Cost 1",
        reasoning: "",
      },
      {
        id: "Oath of Vanity IV",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description:
          "[ Exhaust / Retain ] Exhaust all Futility\nStatus Ailments, and\nCurse Cards in hand\nDraw for each",
        reasoning: "",
      },
      {
        id: "Oath of Vanity V",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description:
          "When 3 Futility Cards\nare Exhausted, 2 Agony\nto all enemies",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
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
]

const recommendedSaveData: SaveData[] = [
  {
    id: "deck-1",
    name: "deck-1",
    description: "",
    faintMemoryNote:
      "Make sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
    cards: [],
  },
  {
    id: "deck-2",
    name: "deck-2",
    description: "",
    faintMemoryNote: "X Faint Memory Cost without Convert Method(s)",
    cards: [],
  },
]

const gearsData = {
  weapons: [
    "Intellect of Discord",
    "Tentacles of Chaos",
    "Foggy Crystal Ball",
    "Mutant Predator Spike",
    "W-52 Dopamine Injector",
    "RFS-17",
    "Unexploded Plasma Bomb",
    "Over Current Shocker",
    "Crimson Sword",
    "Flashbang",
  ],
  armors: [
    "Fragment of the Empty Void",
    "Wings of Freedom",
    "Rocket-Adorned Cape",
    "Psionic Combat Suit",
    "Brainwave-Blocking Helmet",
  ],
  accessories: [
    "Emblem of an Exceptional Entity",
    "Amorphous Cube",
    "Nerve Hacking Module",
    "Dimensional Cube",
    "Sphere of Randomness",
    "Superconductive Protein",
    "Source of the Forbidden",
    "Multifaceted Parallel Universe Nexus",
    "Water Drops of the Goddess",
  ],
}

const recommendedSources = ["Laboratory 0"]

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "offering-of-the-void",
      description:
        "Ever so slightly worse than the 2-2-2 Option, but its completely fine to use this 4 piece set.",
    },
    {
      id: "executioners-tool",
      description:
        "If Crit Rate is reliably high, having more Crit Damage results in more damage.",
    },
  ],
  alternative: [
    {
      id: "black-wing",
      description:
        "Attack is a powerhouse of a stat in the game, and considering how bad 4 piece sets are designed, Attack wins over easily.",
    },
    {
      id: "executioners-tool",
      description:
        "If Crit Rate is reliably high, having more Crit Damage results in more damage.",
    },
    {
      id: "cursed-corpse",
      description:
        "If Agony uptime is near 100%, you get free damage bonus, which makes this set better than other options.",
    },
  ],
}

const partnersGuide: PartnersGuide[] = [
  {
    id: "bria",
    description:
      "[ Best in Slot / Signature Partner ] Unlocks an entirely new playstyle for Kayron and is the best and strongest Partner for Kayron.",
    tier: CardTier.SPlus,
  },
  {
    id: "zatera",
    description: "Best Free To Play option, massive Attack stat stick.",
    tier: CardTier.S,
  },
  {
    id: "itsuku",
    description:
      "Worse than Zatera but provides a little more burst with her Ego Skill.",
    tier: CardTier.A,
  },
  {
    id: "eloise",
    description:
      "Decent damage increase, viable if you want/need to spam Weaken.",
    tier: CardTier.A,
  },
  {
    id: "anteia",
    description: "Just don't.",
    tier: CardTier.Bad,
  },
]

export const kayronData: CharacterData = {
  attribute: Attributes.Void,
  job: "Psionic",
  role: "Main DPS",
  // bannerUrl: "https://blog.emptyblue.it/uploads/3572fe7b-b2fd-4887-ab3f-59bf74f9f420_sereniel_past.webp",
  // avatarUrl: "/images/characters/sereniel/avatar.webp",

  overview: `
TBA
  `.trim(),
  strengths: ["TBA"],

  weaknesses: ["TBA"],

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
}
