// data/characters/chizuru.ts
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
    id: "Moonslash",
    name: "Moonslash",
    image: "/images/character/chizuru/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "60% Damage x 2",
  },
  {
    id: "Spiritflame's Ward",
    name: "Spiritflame's Ward",
    image: "/images/character/chizuru/starter3.png",
    cost: 1,
    type: "skill",
    rarity: CardRarities.Common,
    description: "100% Shield",
  },
]

const uniqueCards: UniqueCard[] = [
  {
    id: "karmic-flames",
    name: "Karmic Flames",
    image: "/images/character/chizuru/starter4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Initiation ] 100% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
    epiphanies: [
      {
        id: "Karmic Flames I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 150% Damage\n1 Cursed Shackles\nCursed Shackles: Add 1 Hit",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Karmic Flames II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 150% Damage\n1 Cursed Shackles\nCursed Shackles: Decrease Cost of the next card of this unit used by 1",
        reasoning: "",
      },
      {
        id: "Karmic Flames III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Initiation ] 180% Damage\n1 Cursed Shackles\nCursed Shackles: Increase Damage Amount by 100%",
        reasoning: "",
      },
      {
        id: "Karmic Flames IV",
        tier: CardTier.WIP,
        cost: 2,
        type: "skill",
        description:
          "[ Initiation ] 1 Cursed Shackles\nCreate 1 Shadow of the Moon",
        reasoning: "",
      },
      {
        id: "Karmic Flames V",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Initiation / Exhaust ] 1 Cursed Shackles\nWhen a target inflicted with Cursed Shackles is defeated, create this card",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Excellent for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "tsukuyomi",
    name: "Tsukuyomi",
    image: "/images/character/chizuru/unique1.png",
    type: "skill",
    cost: 0,
    rarity: CardRarities.Rare,
    description:
      "2 Will-O'-Wisp for each Hit\nof the next Attack Card\nof this unit used",
    epiphanies: [
      {
        id: "Tsukuyomi I",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "3 Will-O'-Wisp for each Hit\nof the next Attack Card\nof this unit used",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Tsukuyomi II",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Add 1 Hit(s) to the next\nAttack Card of this unit\nused, 1 Will-O'-Wisp for\neach Hit",
        reasoning: "",
      },
      {
        id: "Tsukuyomi III",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "Add 2 Hit(s) to the next\nShadow of the Moon,\nShadow of the Moon+ used",
        reasoning: "",
      },
      {
        id: "Tsukuyomi IV",
        tier: CardTier.WIP,
        cost: 0,
        type: "skill",
        description:
          "3 Will-O'-Wisp for each\nAttack Card of this unit\nin hand",
        reasoning: "",
      },
      {
        id: "Tsukuyomi V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Lead ] When an\nAttack Card of this unit\nis used, 2 Will-O'-Wisp",
        reasoning: "",
      },
    ],
    divineEpiphanies: [],
  },
  {
    id: "bound-at-dusk",
    name: "Bound At Dusk",
    image: "/images/character/chizuru/unique2.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Initiation / Unique ] At the start of the turn, gain\nInhibit\nDecrease Cost of 1 random\ncard(s) of other Combatants\nby 1 until used",
    epiphanies: [
      {
        id: "Bound At Dusk I",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain\nInhibit\nDecrease Cost of 2 random\ncard(s) of other Combatants\nby 1 until used",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Bound At Dusk II",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain\nInhibit\nWhen Shadow of the\nMoon+ is used, decrease\nCost of the\nnext 1 card(s) by 1 until\nused",
        reasoning: "",
      },
      {
        id: "Bound At Dusk III",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain\nInhibit\nActivate 2 random\ncard(s) of other\nCombatants",
        reasoning: "",
      },
      {
        id: "Bound At Dusk IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain\nInhibit\nActivate 2 random\nLead card(s)",
        reasoning: "",
      },
      {
        id: "Bound At Dusk V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Initiation / Unique ] At the start of the turn, gain\nInhibit\nDecrease Cost of\n1 card(s) with the\nhighest Cost by 2 until\nused",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Excellent for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "oni-hunt",
    name: "Oni Hunt",
    image: "/images/character/chizuru/unique3.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "[ Haste ] 60% Damage x 3\n+30% Damage Amount to\nthe next Bind card used",
    epiphanies: [
      {
        id: "Oni Hunt I",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 50% Damage x 4\n+40% Damage Amount to\nthe next Bind card used",
        reasoning:
          "[ For All Epiphanies ] To Be Determined by the Community, for the Community.\nMake sure to reach out to us on Discord: _zyla or lilyium.box to help us build this website for everyone to take advantage of!",
      },
      {
        id: "Oni Hunt II",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 180% Damage\n+60% Damage Amount to\nthe next Bind card used",
        reasoning: "",
      },
      {
        id: "Oni Hunt III",
        tier: CardTier.WIP,
        cost: 1,
        type: "attack",
        description:
          "[ Haste ] 60% Damage x 3\nIf there are no other\nAttack Cards in hand,\nadd 2 Hit(s)",
        reasoning: "",
      },
      {
        id: "Oni Hunt IV",
        tier: CardTier.WIP,
        cost: 1,
        type: "skill",
        description:
          "[ Haste ] Create 2 Moonslash\nApply Exhaust to those\ncards, decrease Cost\nby 1 until used",
        reasoning: "",
      },
      {
        id: "Oni Hunt V",
        tier: CardTier.WIP,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Damage Amount\nto Shadow of the\nMoon+\nAt the start of the turn,\n3 Will-O'-Wisp",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Excellent for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_secred.png",
        description: "",
      },
    ],
  },
  {
    id: "Shadow of the Moon",
    name: "Shadow of the Moon",
    image: "/images/character/chizuru/unique4.png",
    type: "attack",
    cost: 1,
    rarity: CardRarities.Unique,
    description:
      "[ Bind 1 / Retain ] 50% Damage\n20% Damage Amount\nfor each Bind stack",
    epiphanies: [],
  },
]

const recommendedSaveData: SaveData[] = [
  {
    id: "hybrid",
    name: "Hybrid",
    description:
      "This deck is able to stack Moon+ hits all the while being able to stack up to Bind 3/5, its very strong.\nOptimal Tsukuyomi : Oni Hunt ratio is 3:2, 2:3 is also fine however 4 of one or the other is just bad.",
    faintMemoryNote: "140 Faint Memory Cost without Convert Method(s)",
    cards: [
      "Karmic Flames V",
      "Tsukuyomi III",
      "Tsukuyomi III",
      "Tsukuyomi III",
      "Bound At Dusk I",
      "Oni Hunt I",
      "Oni Hunt I",
      "Shadow of the Moon",
    ],
  },
  {
    id: "moonslash",
    name: "Moonslash Spam",
    description:
      "Lower DPS ceiling and higher AP Cost per turn compared to the deck above but still a fun to play build.",
    faintMemoryNote: "90 Faint Memory Cost without Convert Method(s)",
    cards: [
      "Moonslash",
      "Karmic Flames II",
      "Tsukuyomi V",
      "Oni Hunt V",
      "Oni Hunt V",
      "Oni Hunt V",
      "Oni Hunt V",
      "Shadow of the Moon",
    ],
  },
]

const gearsData = {
  weapons: [
    "Intellect of Discord",
    "Tentacles of Chaos",
    "Foggy Crystal Ball",
    "Mutant Predator Spike",
    "RFS-17",
    "Bone Cutter",
    "Obsidian Sword",
  ],
  armors: [
    "Fragment of the Empty Void",
    "Wings of Freedom",
    "Shield of the Watcher",
    "Rocket-Adorned Cape",
  ],
  accessories: [
    "Emblem of an Exceptional Entity",
    "Amorphous Cube",
    "Nerve Hacking Module",
    "Eye of the Eyeless",
    "Dimensional Cube",
  ],
}

const recommendedSources = ["Laboratory 0"]

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
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
  alternative: [
    {
      id: "conquerors-aspect",
      description:
        "If using Bound At Dusk III, Conqueror set does not break and its value is kept applied.",
    },
    {
      id: "executioners-tool",
      description: "Best 2 piece set to along with Conqueror's Aspect.",
    },
  ],
}

const partnersGuide: PartnersGuide[] = [
  {
    id: "itsuku",
    description:
      "[ Best in Slot / Signature Partner ] Ego Skill helps increase one turn damage by a lot.",
    tier: CardTier.SPlus,
  },
  {
    id: "zatera",
    description: "Best Free To Play option, massive Attack stat stick.",
    tier: CardTier.S,
  },
  {
    id: "bria",
    description:
      "If you need to use Bria's Ego Skill go ahead, otherwise she is a bad parter for Chizuru overall.",
    tier: CardTier.A,
  },
  {
    id: "anteia",
    description: "Weaker than Zatera at E0, you shouldn't use her.",
    tier: CardTier.Bad,
  },
  {
    id: "eloise",
    description: "Same as Anteia, but can be used for funny Weaken spamming.",
    tier: CardTier.Bad,
  },
]

export const chizuruData: CharacterData = {
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
