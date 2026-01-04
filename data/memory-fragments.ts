// data/memory-fragment-sets.ts
import { MemoryFragmentSet } from "@/types/memory-fragments";

// prettier-ignore
export const MemoryFragmentSetsData: readonly MemoryFragmentSet[] = [
  {
    id: "black-wing",
    name: "Black Wing",
    icon: "/images/sets/black-wing.webp",
    effect: "+12% Attack",
  },
  {
    id: "bullet-of-order",
    name: "Bullet of Order",
    icon: "/images/sets/bullet-of-order.webp",
    effect: "When an Attack Card is used, increased Damage Amount of Order Cards by 10% for 1 turn (2 times per turn)",
  },
  {
    id: "conquerors-aspect",
    name: "Conqueror's Aspect",
    icon: "/images/sets/conquerors-aspect.webp",
    effect: "+35% Critical Damage of 1-cost cards",
  },
  {
    id: "cursed-corpse",
    name: "Cursed Corpse",
    icon: "/images/sets/cursed-corpse.webp",
    effect: "Increase damage dealt to targets inflicted with Agony by 10%",
  },
  {
    id: "executioners-tool",
    name: "Executioner's Tool",
    icon: "/images/sets/executioners-tool.webp",
    effect: "+25% Critical Damage",
  },
  {
    id: "healers-journey",
    name: "Healer's Journey",
    icon: "/images/sets/healers-journey.webp",
    effect: "+12% Max HP",
  },
  {
    id: "instinctual-growth",
    name: "Instinctual Growth",
    icon: "/images/sets/instinctual-growth.webp",
    effect: "When there are 4 or more cards in hand, increase Damage Amount of Instinct Cards by 20%",
  },
  {
    id: "judgments-flames",
    name: "Judgment's Flames",
    icon: "/images/sets/judgments-flames.webp",
    effect: "+50% Damage Amount to Instinct Cards used against Ravaged targets",
  },
  {
    id: "line-of-justice",
    name: "Line of Justice",
    icon: "/images/sets/line-of-justice.webp",
    effect: "+20% Critical Chance of cards that cost 2 or more",
  },
  {
    id: "offering-of-the-void",
    name: "Offering of the Void",
    icon: "/images/sets/offering-of-the-void.webp",
    effect: "When a card is exhausted, increase Damage Amount of Void Cards by 20% for 1 turn (1 time per turn)",
  },
  {
    id: "orb-of-inhibition",
    name: "Orb of Inhibition",
    icon: "/images/sets/orb-of-inhibition.webp",
    effect: "When hitting 2 times with 1 Attack Card, +10% Damage Amount to Void Cards for 1 turn (2 times per turn)",
  },
  {
    id: "seths-scarab",
    name: "Seth's Scarab",
    icon: "/images/sets/seths-scarab.webp",
    effect: "Increase the damage, Shield, and Healing of Basic Cards by 20%",
  },
  {
    id: "spark-of-passion",
    name: "Spark of Passion",
    icon: "/images/sets/spark-of-passion.webp",
    effect: "When an Upgrade Card is used, increase Damage Amount of the next 5 Passion Cards used by 20%",
  },
  {
    id: "tetras-authority",
    name: "Tetra's Authority",
    icon: "/images/sets/tetras-authority.webp",
    effect: "+12% Defense",
  },
];
