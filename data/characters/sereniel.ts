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
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description:
          "150% damage\nOn Ravage, Move to\nhand\nDestroy: Add 1 Hit(s)",
        reasoning: "Highest damage epi, extra hit benefit from various buff, in exchange for no afterglow and hard ravage with it own",
      },
      {
        id: "Homing Laser II",
        tier: CardTier.A,
        cost: 0,
        type: "attack",
        description: "150% Damage\n3 Afterglow \nOn Ravage, Move to\nhand",
        reasoning: "Just a small upgrade from base card, back up option if u miss other good epi, 2-3 afterglow on a laser is more than enough ",
      },
      {
        id: "Homing Laser III",
        tier: CardTier.C,
        cost: 1,
        type: "attack",
        description:
          "150% Damage\n2 Afterglow\nCreate 2 Homing Laser\nL in Discard Pile",
        reasoning: "Cost 1 ap, doesnt move to hand when ravage and can easily clog ur deck",
      },
      {
        id: "Homing Laser IV",
        tier: CardTier.SPlus,
        cost: 0,
        type: "attack",
        description:
          "100% Damage\n1 Afterglow\nOn Ravage or at the\nstart of the turn, Move\nto hand",
        reasoning: "Equal to 1 draw, gurentee laser to break everyturn making sereniel deck really thin and easy to play",
      },
      {
        id: "Homing Laser V",
        tier: CardTier.C,
        cost: 0,
        type: "attack",
        description:
          "150% Damage\n2 Afterglow\nMove all Homing Laser L\nin Graveyard to hand",
        reasoning: "Also doesnt move to hand when ravage, too niche and inconsistent",
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
        tier: CardTier.B,
        cost: 1,
        type: "attack",
        description:
          "180% Damage\n1 Tenacity Damage\nIf the taret was not\nRavaged, activate 1\nmore time",
        reasoning: "An upgrade from the base, she dont have hard time ravage anyone at the moment",
      },
      {
        id: "Plasma Missile II",
        tier: CardTier.B,
        cost: 1,
        type: "attack",
        description:
          "180% Damage\n60% Damage Amount\nfor each decreased\nTenacity of the target\n(max 10)",
        reasoning: "It just damage",
      },
      {
        id: "Plasma Missile III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "attack",
        description:
          "120% Damage\n2 Instinct Weakness\n60% Damage Amount\nto Homing Laser for 1\nturn(s)",
        reasoning: "Instinct weakness is really op, 25% multi for 2 turn up time and easy to ravage anyone, also extra 60% damage buff making it really valuable when recycle laser multiple time in a turn",
      },
      {
        id: "Plasma Missile IV",
        tier: CardTier.Bad,
        cost: 1,
        type: "attack",
        description: "120% Damage\nCreate 3 Homing Laser\nL in Draw Pile",
        reasoning: "Cloging your draw pile, harder time to draw important card",
      },
      {
        id: "Plasma Missile V",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] At the end of the turn, 50%\nDamage to a random\nenemy\n+30% Damage Amount for\neach Homing Laser Moved\nto hand for 1 turn(s)",
        reasoning: "A backup option, upgrade card make sereniel deck really thin",
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
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description: "Create 3 Homing Laser\nL",
        reasoning: "1 ap and not an upgrade card, not worth picking over the other epi",
      },
      {
        id: "Shining Core II",
        tier: CardTier.B,
        cost: 1,
        type: "skill",
        description:
          "Create 2 Homing Laser\nL, increase Exhaust of\nthose cards by 2",
        reasoning: "Not worth picking over other epi",
      },
      {
        id: "Shining Core III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 2 Homing Laser\nL\nOn Ravage, create\n2 Homing Laser L",
        reasoning: "The bis epi on shining core, is a upgrade so thiner deck, generate the most Homing Laser L, sometime can be hard to exhaust the laser before reshuffle due to hand size making laser not move to hand",
      },
      {
        id: "Shining Core IV",
        tier: CardTier.B,
        cost: "X",
        type: "skill",
        description: "Create X+1 Homing\nLaser L\nApply Haste to  those\ncards",
        reasoning: "Its X",
      },
      {
        id: "Shining Core V",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "Select and create\n1 Homing Laser with\ntheir own distinct\nEpiphanies",
        reasoning: "Backup option if not Shining Core III, easier time manage hand size and not cloging, drawback is lower laser generate and making her ego useless. Only pick this voluntary if 4 Homing Laser copy unless you know what you're doing",
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
        tier: CardTier.A,
        cost: 3,
        type: "attack",
        description:
          "180% Damage x 4 to\n random enemies\n1 Tenacity Damage for\n each Hit\nRavage: Decrease Cost\nby 1",
        reasoning: "Higher base damage than other cobalt, fall back option, cost 0 after serveral use but still 3 ap at the begining",
      },
      {
        id: "Cobalt Light II",
        tier: CardTier.Bad,
        cost: 3,
        type: "attack",
        description:
          "[ Retain ] 120% Damage x 4 to\n random enemies\n1 Tenacity Damage for\n each Hit\nRetain: Add 1 Hit until use\n(max 5 times)",
        reasoning: "Always avoid picking this, retain make your hand size thiner and need 3ap to remove it from hand",
      },
      {
        id: "Cobalt Light III",
        tier: CardTier.C,
        cost: 2,
        type: "attack",
        description:
          "120% Damage x 4 to\n random enemies\nCreate 1 Homing Laser\nL for each target Hit",
        reasoning: "Only generate per target hit, making it unreliable and really low damage cobalt",
      },
      {
        id: "Cobalt Light IV",
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description:
          "120% Damage to\n random enemies\nAdd 1 Hit for\neach Homing Laser in\nhand",
        reasoning: "Cheap, high hit count, easy to enable high hit count with her laser mechanic, draw back is low tenacity damage",
      },
      {
        id: "Cobalt Light V",
        tier: CardTier.A,
        cost: 3,
        type: "attack",
        description:
          "[ Weakness Attack ] 120% Damage x 4\nRavage: Activate 1\nmore time",
        reasoning: "High damage cobalt, still cost 3, weakness attack is wtv because instinct weakness, one of the fall back option if miss the good epi",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: " ShootPaleing Star",
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
    description: "Really thin deck. Can trade 1 laser copy for another pale if u can afford the cost, caution to Shining Core III if you go 4 laser, can easily clog ur hand and graveyard",
    faintMemoryNote: "140 Faint Memory Cost without Convert Method",
    cards: [
      "Homing Laser IV",
      "Homing Laser IV",
      "Homing Laser IV",
      "Homing Laser IV",
      "Plasma Missile III",
      "Cobalt Light IV",
      "Shining Core III",
      "ShootPaleing Star",
    ],
  },
  {
    id: "standard-2",
    name: "Standard 2",
    description: "Can trade 1 laser copy for another pale if u can afford the cost (prefer Shining Core III if so), shining core V for 3after glow laser or anything base on the scenerio, shining core III is still really good",
    faintMemoryNote: "140 Faint Memory Cost without Convert Method",
    cards: [
      "Homing Laser I",
      "Homing Laser I",
      "Homing Laser I",
      "Homing Laser I",
      "Plasma Missile III",
      "Cobalt Light IV",
      "Shining Core V",
      "ShootPaleing Star",
    ],
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
    description: `[ Best in Slot / Signature ]
    Provide massive stat for sereniel
    Extra 25% crit chance make her almost gurentee crit every hit while her passive also has good damage buff against ravaged enemies
    `,
    tier: CardTier.SPlus,
  },
  {
    id: "yuri",
    description: "Cheap option, draw 2 is op, passive provide damage buff and atk% which is also really good",
    tier: CardTier.S,
  },
  {
    id: "serithea",
    description: "Decent stat buff, should have pick nyx",
    tier: CardTier.A,
  },
];

export const serenielData: CharacterData = {
  attribute: Attributes.Instinct,
  job: CharacterClass.Hunter,
  role: CharacterRole.MainDPS,
  // bannerUrl: "",
  // avatarUrl: "",

  overview: `
  Sereniel is a hyper carry dps that rely on her tenacity ravage mechanic with Homing Laser is her main source of damage
  Her playstyle rely on ravage to cycle her 0 cost homing laser multiple time in a turn, also provide extra ap when ravagemake her deck really cheap
  `.trim(),
  strengths: [
    "Low risk high reward",
    "Easy to play",
    "Top-tier st damage",
    "Ap friendly",
    "Really thin deck with the right epiphany",
  ],

  weaknesses: [
    "Rely on mobs with tenacity bar",
    "Is a seasonal limited combatant",
  ],

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
