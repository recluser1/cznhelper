// data/characters/renoa.ts
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
    id: "Annihilation Shot",
    name: "Annihilation Shot",
    image: "/images/character/renoa/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "150% Damage\nCreate 1 Futility\nCard(s)",
  },
  {
    id: "Black Veil",
    name: "Black Veil",
    image: "/images/character/renoa/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield",
  },
]

const uniqueCards: UniqueCard[] = [
  {
    id: "echo-of-sorrow",
    name: "Echo of Sorrow",
    image: "/images/character/renoa/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "140% Damage\nCreate 1 Dirge Bullet\nCard(s)",
    epiphanies: [
      {
        id: "Echo of Sorrow I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "140% Damage\nCreate 2 Dirge Bullet\nCard(s)",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Echo of Sorrow II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "140% Damage\nCreate 1 Dirge Bullet\nCard(s), Create 2\nCard(s) in Discard Pile",
        reasoning: "",
      },
      {
        id: "Echo of Sorrow III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "140% Damage\nCreate 2 Dirge Bullet\nCard(s), Discard\n2 Dirge Bullet Card(s)\nfrom Draw Pile",
        reasoning: "",
      },
      {
        id: "Echo of Sorrow IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description: "Create 3 Dirge Bullet\nCard(s)",
        reasoning: "",
      },
      {
        id: "Echo of Sorrow V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation ] Create 1 Dirge Bullet\nCard(s)\nAt the start of the turn,\ncreate 1 Dirge Bullet\nCard(s)",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "instant-judgment",
    name: "Instant Judgment",
    image: "/images/character/renoa/unique1.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "180% Damage\nIf Dirge Bullet is in\nhand, discard 1 and\n+100% Damage\nAmount",
    epiphanies: [
      {
        id: "Instant Judgment I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "270% Damage\nIf Dirge Bullet is in\nhand, discard 1 card\nand +150% Damage\nAmount",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Instant Judgment II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "220% Damage\nIf Dirge Bullet is in Draw\nPile, discard 1 card and\n+120% Damage\nAmount",
        reasoning: "",
      },
      {
        id: "Instant Judgment III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "220% Damage\nIf Dirge Bullet is in\nGraveyard, Exhaust 1\nand add 1 Hit(s)",
        reasoning: "",
      },
      {
        id: "Instant Judgment IV",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "180% Damage\nWhen moved to\nDiscard Pile, 250%\nExtra Attack to a\nrandom enemy",
        reasoning: "",
      },
      {
        id: "Instant Judgment V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "At the end of the turn,\n200% Extra Attack to\nthe enemy with lowest\nHP",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "ballad-of-pitch-black",
    name: "Ballad of Pitch Black",
    image: "/images/character/renoa/unique2.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "50% Damage x 3\n+20% Damage Amount\nfor each Dirge Bullet in\nhand",
    epiphanies: [
      {
        id: "Ballad of Pitch Black I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "75% Damage x 3\n+30% Damage Amount\nfor each Dirge Bullet in\nhand",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Ballad of Pitch Black II",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "Move up to 3 Dirge\nBullet Card(s) from\nDraw Pile and\nGraveyard to hand",
        reasoning: "",
      },
      {
        id: "Ballad of Pitch Black III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "50% Damage x 3\n1 Mark to the target for\neach Dirge Bullet in\nhand",
        reasoning: "",
      },
      {
        id: "Ballad of Pitch Black IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "50% Damage x 3\nIncrease Damage\nAmount of Dirge\nBullet's Extra Attack by\n100% for 1 turn",
        reasoning: "",
      },
      {
        id: "Ballad of Pitch Black V",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "50% Damage x 3\nExhaust all Dirge\nBullet in the Graveyard,\nincrease Damage\nAmount by 50% for\neach",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "flower-of-devoured-fate",
    name: "Flower of Devoured Fate",
    image: "/images/character/renoa/unique3.png",
    type: "skill",
    cost: 0,
    rarity: CardRarities.Legendary,
    description:
      "Discard up to 2 Card(s)\nfrom hand\nCreate Dirge Bullet for\neach",
    epiphanies: [
      {
        id: "Flower of Devoured Fate I",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Discard up to 3 Card(s)\nfrom hand\nCreate Dirge Bullet for\neach",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Flower of Devoured Fate II",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Exhaust ] Discard all other\nCombatants cards from\nhand\nCreate 2 Dirge Bullet\nfor each",
        reasoning: "",
      },
      {
        id: "Flower of Devoured Fate III",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Discard up to 2 Card(s)\nfrom hand\nFor each Discarded\nCard with Cost 1, +40%\nDamage Amount of\nnext card",
        reasoning: "",
      },
      {
        id: "Flower of Devoured Fate IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "Draw 2\nIf Dirge Bullet is in\nhand, Draw 1 additional\ncard(s)",
        reasoning: "",
      },
      {
        id: "Flower of Devoured Fate V",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description: "Grant Retrieve to all\nDirge Bullet in hand",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "Last-Ditch Assault",
    name: "Last-Ditch Assault",
    image: "/images/character/renoa/unique4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Unique,
    description:
      "150% Damage (+0%)\nDiscard all Dirge Bullet,\n+50% Damage Amount for\neach",
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
    "Mutant Predator Spike",
    "Dagger That Tricked the Shadow",
    "Sword Reflected in the Lake",
  ],
  armors: [
    "Fragment of the Empty Void",
    "Wings of Freedom",
    "Rocket-Adorned Cape",
    "Fairy King's Crown",
  ],
  accessories: [
    "Dimensional Cube",
    "Emblem of an Exceptional Entity",
    "Amorphous Cube",
    "Nerve Hacking Module",
    "Superconductive Protein",
    "Source of the Forbidden",
  ],
}

const recommendedSources = ["Laboratory 0", "Swamp of Judgment"]

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "conquerors-aspect",
      description:
        "THE Best fragment set for Renoa and nothing ever comes close to the power of Conqueror's Aspect.",
    },
    {
      id: "executioners-tool",
      description: "Boosts bullet's critical damage even more.",
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
    id: "yuri",
    description:
      "Massive damage bonus that happens to have 2 draw on top of it, perfect Renoa partner and also very F2P friendly.",
    tier: CardTier.SPlus,
  },
  {
    id: "peko",
    description:
      "Slightly behind Yuri, could be better if you run a Ravage support.",
    tier: CardTier.A,
  },
  {
    id: "serithea",
    description: "Outclassed by Yuri",
    tier: CardTier.B,
  },
  {
    id: "akad",
    description: "Good for bursting but overall loses to Yuri's Draw 2.",
    tier: CardTier.B,
  },
  {
    id: "kiara",
    description:
      "[ (NOT) Best in Slot / Signature Partner ] Activation Condition is unreliable and the damage boost is not that great.",
    tier: CardTier.C,
  },
]

export const renoaData: CharacterData = {
  attribute: Attributes.Void,
  job: "Hunter",
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
      stats: [
        MemoryFragmentSubstats.ExtraDamage,
        MemoryFragmentSubstats.AttackFlat,
        MemoryFragmentSubstats.Attack,
      ],
    },
  ],
  memoryFragmentSubstatsNote: "",
  partnersGuide: partnersGuide,
}
