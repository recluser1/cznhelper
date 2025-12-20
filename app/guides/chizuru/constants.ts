import type { RecommendedDecks } from "@/@types";

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

const characterItems = { 
  WEAPONS: [
    "Intellect of Discord",
    "Tentacles of Chaos",
    "Foggy Crystal Ball",
    "Mutant Predator Spike",
    "Dagger That Tricked the Shadow",
    "RFS-17",
    "Bone Cutter",
    "Obsidian Sword",
  ],
  ARMORS: [
    "Wings of Freedom",
    "Fairy King's Crown",
    "Shield of the Watcher",
    "Fragment of the Empty Void",
    "Rocket-Adorned Cape",
  ],
  ACCESORIES: [
    "Emblem of an Exceptional Entity",
    "Eye of the Eyeless",
    "Clover of the Forest",
    "Verdant Shackles",
    "Dimensional Cube",
    "Nerve Hacking Module",
    "Amorphous Cube",
  ],
}

const partners = [
  {
    id: 1,
    name: "Itsuku",
    role: "S+",
    image: "/images/partners/itsuku.webp",
    description:
      "BiS partner\n Her Partner skill greatly boosts damage for one turn.\nThe fixed damage is irrelevant.",
  },
  {
    id: 2,
    name: "Zatera",
    role: "S",
    image: "/images/partners/zatera.webp",
    description:
      "Best F2P option\n Provides a strong damage boost and works well as a replacement if you don't have her signature partner.",
  },
  {
    id: 3,
    name: "Bria",
    role: "A",
    image: "/images/partners/bria.webp",
    description:
      "Only worth using if you specifically need her Partner Skill utility. Otherwise, her damage contribution is poor.",
  },
  {
    id: 4,
    name: "Anteia",
    role: "C",
    image: "/images/partners/anteia.webp",
    description:
      "At Ego 0, she is weaker than Zatera and offers little value for Chizuru.",
  },
  {
    id: 5,
    name: "Eloise",
    role: "Bad",
    image: "/images/partners/eloise.webp",
    description:
      "Not usable with Chizuru. Her Partner Skill requires Exhaust cards, which Chizuru does not have.",
  },
];

const bisCardSets = [
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
    why: "Provides the best 2-set bonus for critical damage builds",
  },
  {
    name: "Cursed Corpse",
    effect:
      "Increases damage dealt to target inflicted with Agony by 10%",
    icon: "/images/sets/cursed-corpse.webp",
    why: "Optional damage boost if achievable, but not required. Substats are generally more important than this set bonus",
  },
]

const secondaryCardSets = [
  {
    name: "Orb of Inhibition",
    effect:
      "When Hitting 2 times with 1 Attack Card, +10% Damage Amount to Void Cards for 1 turn (2 times per turn)",
    icon: "/images/sets/orb-of-inhibition.webp",
    why: "Weak and conditional, but still better than the Void set because this set bonus is additive and generic",
  },
  {
    name: "Executioner's Tool",
    effect: "+25% Critical Damage",
    icon: "/images/sets/executioners-tool.webp",
    why: "Provides the best 2-set bonus for critical damage builds",
  },
]

export {
  characterItems,
  partners,
  recommendedDecks,
  bisCardSets,
  secondaryCardSets
};
