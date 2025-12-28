// data/characters/sereniel.ts
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
    id: "Pulse Fire",
    name: "Pulse Fire",
    image: "/images/character/sereniel/starter1.webp",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "100% Damage",
  },
  {
    id: "Magnetic Field",
    name: "Magnetic Field",
    image: "/images/character/sereniel/starter3.webp",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield",
  },
];

const uniqueCards: UniqueCard[] = [
  {
    id: "homing-laser",
    name: "Homing Laser",
    image: "/images/character/sereniel/starter4.webp",
    type: "attack",
    cost: 0,
    rarity: CardRarities.Rare,
    description:
      "100% damage\n2 Afterglow\nOn Ravage, move from\nGraveyard to hand",
    epiphanies: [
      {
        id: "Homing Laser I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "150% damage\nOn Ravage, Move to\nhand\nDestroy: Add 1 Hit(s)",
        reasoning: "",
      },
      {
        id: "Homing Laser II",
        tier: CardTier.WIP,
        cost: 0,
        type: "attack",
        description: "150% Damage\n3 Afterglow \nOn Ravage, Move to\nhand",
        reasoning: "",
      },
      {
        id: "Homing Laser III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "150% Damage\n2 Afterglow\nCreate 2 Homing Laser\nL in Discard Pile",
        reasoning: "",
      },
      {
        id: "Homing Laser IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "100% Damage\n1 Afterglow\nOn Ravage or at the\nstart of the turn, Move\nto hand",
        reasoning: "",
      },
      {
        id: "Homing Laser V",
        tier: CardTier.WIP,
        cost: 0,
        type: "attack",
        description:
          "150% Damage\n2 Afterglow\nMove all Homing Laser L\nin Graveyard to hand",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "plasma-missile",
    name: "Plasma Missile",
    image: "/images/character/sereniel/unique1.webp",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "120% Damage\n0.5 Tenacity Damage\nIf the taret was not\nRavaged, activate 1\nmore time",
    epiphanies: [
      {
        id: "Plasma Missile I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "180% Damage\n1 Tenacity Damage\nIf the taret was not\nRavaged, activate 1\nmore time",
        reasoning: "",
      },
      {
        id: "Plasma Missile II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "180% Damage\n60% Damage Amount\nfor each decreased\nTenacity of the target\n(max 10)",
        reasoning: "",
      },
      {
        id: "Plasma Missile III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "120% Damage\n2 Instinct Weakness\n60% Damage Amount\nto Homing Laser for 1\nturn(s)",
        reasoning: "",
      },
      {
        id: "Plasma Missile IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description: "120% Damage\nCreate 3 Homing Laser\nL in Draw Pile",
        reasoning: "",
      },
      {
        id: "Plasma Missile V",
        tier: CardTier.WIP,
        cost: 0,
        type: "upgrade",
        description:
          "[ Unique ] At the end of the turn, 50%\nDamage to a random\nenemy\n+30% Damage Amount for\neach Homing Laser Moved\nto hand for 1 turn(s)",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "shining-core",
    name: "Shining Core",
    image: "/images/character/sereniel/unique2.webp",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "Create 2 Homing Laser\nL",
    epiphanies: [
      {
        id: "Shining Core I",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description: "Create 3 Homing Laser\nL",
        reasoning: "",
      },
      {
        id: "Shining Core II",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "Create 3 Homing Laser\nL, increase Exhaust of\nthose cards by 2",
        reasoning: "",
      },
      {
        id: "Shining Core III",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 2 Homing Laser\nL\nOn Ravage, create\n2 Homing Laser L",
        reasoning: "",
      },
      {
        id: "Shining Core IV",
        tier: CardTier.WIP,
        cost: "X",
        type: "skill",
        description: "Create X+1 Homing\nLaser L\nApply Haste to  those\ncards",
        reasoning: "",
      },
      {
        id: "Shining Core V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "Select and create\n1 Homing Laser with\ntheir own distinct\nEpiphanies",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "cobalt-light",
    name: "Cobalt Light",
    image: "/images/character/sereniel/unique3.webp",
    type: "attack",
    cost: 3,
    rarity: CardRarities.Legendary,
    description:
      "120% Damage x 4 to\n random enemies\n1 Tenacity Damage for\n each Hit",
    epiphanies: [
      {
        id: "Cobalt Light I",
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "180% Damage x 4 to\n random enemies\n1 Tenacity Damage for\n each Hit\nRavage: Decrease Cost\nby 1",
        reasoning: "",
      },
      {
        id: "Cobalt Light II",
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "[ Retain ] 120% Damage x 4 to\n random enemies\n1 Tenacity Damage for\n each Hit\nRetain: Add 1 Hit until use\n(max 5 times)",
        reasoning: "",
      },
      {
        id: "Cobalt Light III",
        tier: CardTier.WIP,
        cost: 2,
        type: "attack",
        description:
          "120% Damage x 4 to\n random enemies\nCreate 1 Homing Laser\nL for each target Hit",
        reasoning: "",
      },
      {
        id: "Cobalt Light IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "120% Damage to\n random enemies\nAdd 1 Hit for\neach Homing Laser in\nhand",
        reasoning: "",
      },
      {
        id: "Cobalt Light V",
        tier: CardTier.WIP,
        cost: 3,
        type: "attack",
        description:
          "[ Weakness Attack ] 120% Damage x 4\nRavage: Activate 1\nmore time",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "Pale Shooting Star",
    name: "Pale Shooting Star",
    image: "/images/character/sereniel/unique4.webp",
    type: "attack",
    cost: 2,
    rarity: CardRarities.Unique,
    description: "",
    epiphanies: [],
  },
];

const recommendedSaveData: SaveData[] = [
  {
    id: "standard-1",
    name: "Standard 1",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost without Convert Method",
    cards: [],
  },
  {
    id: "standard-2",
    name: "Standard 2",
    description: "",
    faintMemoryNote: "140 Faint Memory Cost without Convert Method",
    cards: [],
  },
];

const gearsData = {
  weapons: [],
  armors: [],
  accessories: [],
};

const recommendedSources = ["Laboratory 0"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    {
      id: "judgments-flames",
      description:
        "+50% Damage Amount to Instinct Cards used against Ravaged targets",
    },
    { id: "executioners-tool", description: "+25% Critical Damage" },
  ],
  alternative: [
    { id: "black-wing", description: "+12% Attack" },
    { id: "executioners-tool", description: "+25% Critical Damage" },
    {
      id: "cursed-corpse",
      description:
        "Increase damage dealth to targets inflicted with Agony by 10%",
    },
  ],
};

const partnersGuide: PartnersGuide[] = [
  {
    id: "peko",
    description: "",
    tier: CardTier.SPlus,
  },
  {
    id: "yuri",
    description: "",
    tier: CardTier.S,
  },
  {
    id: "serithea",
    description: "",
    tier: CardTier.A,
  },
];

export const serenielData: CharacterData = {
  attribute: Attributes.Instinct,
  job: CharacterClass.Hunter,
  role: CharacterRole.MainDPS,
  // bannerUrl: "/images/guides/sereniel/banner.webp",
  // avatarUrl: "/images/guides/sereniel/avatar.webp",

  overview: `
  
  `.trim(),
  strengths: [""],

  weaknesses: [""],

  commonCards: commonCards,
  uniqueCards: uniqueCards,
  recommendedSaveData: recommendedSaveData,
  gears: gearsData,
  recommendedSources: recommendedSources,
  memoryFragmentSets: memoryFragmentSets,
  memoryFragmentMainStats: [
    MemoryFragmentMainStats.CriticalChance,
    MemoryFragmentMainStats.InstinctDamage,
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
