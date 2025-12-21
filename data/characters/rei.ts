import {
  Card,
  CardRarities,
  CardTier,
  CharacterData,
  MemoryFragmentSetRecommendation,
  UniqueCard,
} from "@/types/character-guides";
import { MemoryFragmentMainStats } from "@/types/memory-fragments";
import { SaveData } from "@/types/save-data";

const commonCards: Card[] = [
  {
    id: "Dark Blade",
    name: "Dark Blade",
    image: "/images/character/rei/starter1.png",
    cost: 1,
    type: "attack",
    rarity: CardRarities.Common,
    description: "100% Damage",
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
        reasoning: "",
      },
      {
        id: "Strike of Darkness II",
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description: "350% Damage\nDecrease Damage\nAmount by 20% for 1\nturn",
        reasoning: "",
      },
      {
        id: "Strike of Darkness III",
        tier: CardTier.S,
        cost: 1,
        type: "attack",
        description:
          "[ Lead ] 150% Damage\nDiscard all Basic Cards,\nadd 1 Hit for each",
        reasoning: "",
      },
      {
        id: "Strike of Darkness IV",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] Increase Damage\nAmount of Basic Attack\nCards by 80%",
        reasoning: "",
      },
      {
        id: "Strike of Darkness V",
        tier: CardTier.S,
        cost: 0,
        type: "skill",
        description: "[ Retain ] Activate all Basic Cards\nin hand",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Excellent for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "Permanent +20% additive damage",
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
    description: "[ Unique ] +40% Damage Amount\nof cards with Cost 1",
    epiphanies: [
      {
        id: "Resonating Darkness I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description: "[ Unique ] +60% Damage Amount\nof cards with Cost 1",
        reasoning: "",
      },
      {
        id: "Resonating Darkness II",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description: "[ Unique ] +40% Damage Amount\nof Void Card",
        reasoning: "",
      },
      {
        id: "Resonating Darkness III",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Shield gain,\nDamage Amount, and\nHealing of cards with\nCost 1",
        reasoning: "",
      },
      {
        id: "Resonating Darkness IV",
        tier: CardTier.C,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] +40% Damage Amount\nof cards with Cost 1 or\nless",
        reasoning: "",
      },
      {
        id: "Resonating Darkness V",
        tier: CardTier.C,
        cost: 0,
        type: "skill",
        description:
          "[ Unique ] For 1 turn, +80%\nDamage Amount of\ncards with Cost 1",
        reasoning: "",
      },
    ],
    divineEpiphanies: [
      {
        name: "Reduce the cost of this card by 1",
        reasoning: "Excellent for cost efficiency",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
      {
        name: "1 Morale, 1 Resolve",
        reasoning: "Permanent +20% additive damage",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "snack-time",
    name: "Snack Time",
    image: "/images/character/rei/unique2.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Exhaust ] Choose 1 card(s) in\nhand to Exhaust\nHeal 100%\nDraw 1",
    epiphanies: [
      {
        id: "Snack Time I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Exhaust 2 ] Choose 1 card(s) in\nhand to Exhaust\nHeal 150%\nDraw 1",
        reasoning: "",
      },
      {
        id: "Snack Time II",
        tier: CardTier.C,
        cost: 1,
        type: "upgrade",
        description: "[ Retain / Exhaust ] Heal 150%\nDraw 2",
        reasoning: "",
      },
      {
        id: "Snack Time III",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description:
          "[ Exhaust ] Choose up to 2 card(s)\nin hand to Exhaust,\nthen Draw for each",
        reasoning: "",
      },
      {
        id: "Snack Time IV",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "[ Exhaust ] Choose up to 1 card(s)\nfrom Draw Pile to\nExhaust, then Draw for\neach.",
        reasoning: "",
      },
      {
        id: "Snack Time V",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description:
          "[ Exhaust ] Choose 2 card(s) in\nhand to Exhaust\nChoose 1 Void Card(s)\nto Draw",
        reasoning: "",
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
    description:
      "Choose 1 Attack\nCard(s) in hand, +100%\nDamage Amount for 1\nturn",
    epiphanies: [
      {
        id: "Dark Condensation I",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Attack\nCard(s) in hand, +150%\nDamage Amount for 1\nturn",
        reasoning: "",
      },
      {
        id: "Dark Condensation II",
        tier: CardTier.B,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 card(s) in\nhand, +100% Damage\nAmount, Shield gain\nand Healing for 1 turn",
        reasoning: "",
      },
      {
        id: "Dark Condensation III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "skill",
        description: "For 1 turn, +50% \nDamage Amount of \nVoid Attack Cards",
        reasoning: "",
      },
      {
        id: "Dark Condensation IV",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Attack \ncard(s), +100% \nDamage Amount until \nused",
        reasoning: "",
      },
      {
        id: "Dark Condensation V",
        tier: CardTier.C,
        cost: 1,
        type: "upgrade",
        description: "Choose 1 Attack \nCard(s) in hand, +50% \nDamage Amount",
        reasoning: "",
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
];
const recommendedSaveData: SaveData[] = [
  {
    id: "veronica-recommended-deck-1",
    name: "Draw focused build",
    description: "Nom nom nom",
    faintMemoryNote: "160 Faint Memory Cost without Convert Method",
    cards: [
      "Dark Blade",
      "Strike of Darkness I",
      "Resonating Darkness I",
      "Snack Time IV",
      "Snack Time IV",
      "Snack Time IV",
      "Snack Time IV",
      "Dark Condensation I",
    ],
  },
];

const gearsData = {
  weapons: ["Second Method", "Obsidian Sword", "Mutant Predator Spike"],
  armors: ["Shield of the Watcher"],
  accessories: [],
};
const memoryFragmentSets: MemoryFragmentSetRecommendation = {
  bestInSlot: [
    { id: "black-wing", description: "Provides a solid Attack boost" },
    {
      id: "executioners-tool",
      description: "Provides the best 2-set bonus for critical damage builds",
    },
  ],
  alternative: [
    { id: "offering-of-the-void", description: "IDK im dum" },
    {
      id: "executioners-tool",
      description: "Provides the best 2-set bonus for critical damage builds",
    },
  ],
};
export const reiData: CharacterData = {
  commonCards: commonCards,
  uniqueCards: uniqueCards,
  recommendedSaveData: recommendedSaveData,
  gears: gearsData,
  memoryFragmentSets: memoryFragmentSets,
  memoryFragmentMainStats: [
    MemoryFragmentMainStats.CriticalRate,
    MemoryFragmentMainStats.VoidDamage,
    MemoryFragmentMainStats.Attack,
  ],
  memoryFragmentSubstatsNote: `IDK WHY ASK ME`,
};
