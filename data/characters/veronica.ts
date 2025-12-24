import { Attributes } from "@/types/card";
import {
  CardRarities,
  CharacterData,
  MemoryFragmentSetRecommendation,
  MemoryFragmentSubstatPriorities,
  PartnersGuide,
  UniqueCard,
} from "@/types/character-guides";
import { CardTier } from "@/types/character-guides";
import {
  MemoryFragmentMainStats,
  MemoryFragmentSubstats,
} from "@/types/memory-fragments";
import { SaveData } from "@/types/save-data";

const uniqueCards: UniqueCard[] = [
  {
    id: "firing-preparation",
    name: "Firing Preparation",
    image: "/images/character/veronica/starter4.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description:
      "[ Unique / Initiation ] Create 1 Ballista card(s).\nAt the start of the turn,\ncreate 1 Ballista card(s)",
    epiphanies: [
      {
        id: "Firing Preparation I",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Ballista card(s).\nAt the start of the turn,\ncreate 1 Ballista card(s),\nwith a 50% chance to additionally create 1 more",
        reasoning:
          "Probably the highest raw damage potential, but it suffers from heavy RNG making it inconsistent, it lacks AoE but strong on bosses",
      },
      {
        id: "Firing Preparation II",
        tier: CardTier.Niche,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Piercing Ballista.\nAt the start of the turn, \ncreate 1 Piercing Ballista card(s)",
        reasoning:
          "Lowest damage among the Ballista epiphanies if enemy has no shield, but strong against shielded foes like Judas because of the piercing damage",
      },
      {
        id: "Firing Preparation III",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Enhanced Ballista.\nAt the start of the turn, \ncreate 1 Enhanced Ballista card(s)",
        reasoning:
          "Nothing special, it have lower damage potential than other epiphanies, however the 30% Critical Chance makes damage more consistent",
      },
      {
        id: "Firing Preparation IV",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Giant Ballista. \nAt the start of the turn, \ncreate 1 Giant Ballista \ncard(s)",
        reasoning:
          "Best overall; lower single-target damage but AoE is so strong it doesn't matter, mitigates targeting RNG without E2—always pick if unsure",
      },
      {
        id: "Firing Preparation V",
        tier: CardTier.S,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique / Initiation ] Create 1 Shelling Ballista. \nAt the start of the turn, \ncreate 1 Shelling Ballista \ncard(s)",
        reasoning:
          "Best for Veronica DPS; it makes Kowalski and Morale additive buffs stronger, her E2 makes it consistent and even stronger",
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
        reasoning: "Permanent 20% additive buff",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
        description: "",
      },
    ],
  },
  {
    id: "repose",
    name: "Repose",
    image: "/images/character/veronica/unique1.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "120% Shield \nDraw 2 card(s) from\nother combatant",
    epiphanies: [
      {
        id: "Repose I",
        tier: CardTier.SPlus,
        cost: 0,
        type: "skill",
        description: "Draw 2 other \n Combatant's card(s)",
        reasoning:
          "Arguably the best Repose option, 0 cost free 2 draw and it gets even stronger with a Divine Epiphany that adds +1 draw or +1 AP",
      },
      {
        id: "Repose II",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description:
          "180% Shield \nDraw 2 other \nCombatant's card(s) \nIf that card is a Skill Card, \n1 Reload",
        reasoning:
          "A weaker version of Repose III, it still has value since you draw and MIGHT get Reload, but the effect is much lower impact overall, and the other Repose options outperform it",
      },
      {
        id: "Repose III",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "180% Shield \nDraw 2 other \nCombatant's card(s) \nDecrease Cost of 1 of those cards by 1 for 1 turn",
        reasoning:
          "Second best pick, a bit less consistent since it can break some builds. Divine upgrade that makes this 0 cost it might becomes the best option",
      },
      {
        id: "Repose IV",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "180% Shield \n1 Reload equal to \nnumber of other \nCombatant's skill card(s) \nin hand",
        reasoning:
          "Reload is already covered by the pendant of resolution card, so there's no real reason to pick this",
      },
      {
        id: "Repose V",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "180% Shield \nDiscard all other \nCombatant's card(s) in hand \n1 Reload equal to that number",
        reasoning:
          "Worst choice. Hand discard is too punishing and the Reload payoff doesn't justify it",
      },
    ],
    divineEpiphanies: [
      {
        name: "+1 Draw",
        description: "Draw 1 card",
        reasoning:
          "Arguably the best Divine Epiphany for Repose I, making it even stronger with additional draw.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
      },
      {
        name: "+1 AP",
        description: "Gain 1 AP",
        reasoning:
          "Excellent for Repose I, providing additional action points to maximize value from the 0-cost draw.",
        icon: "/images/card/icon_card_battle_expand_nihilum.png",
      },
      {
        name: "-1 Cost",
        description: "Decrease Cost by 1",
        reasoning:
          "Great for Repose III, making it 0-cost and potentially the best option.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
      },
    ],
  },
  {
    id: "pendant-of-resolution",
    name: "Pendant of Resolution",
    image: "/images/character/veronica/unique2.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Rare,
    description: "When another\ncombatant uses Skill\nCard, 1 Reload",
    epiphanies: [
      {
        id: "Pendant of Resolution I",
        tier: CardTier.SPlus,
        cost: 1,
        type: "upgrade",
        description: "When using a Skill Card,\n 1 Reload",
        reasoning:
          "Best overall option, it is just a direct upgrade of the base card, nothing special",
      },
      {
        id: "Pendant of Resolution II",
        tier: CardTier.C,
        cost: 1,
        type: "upgrade",
        description:
          "[ Unique ] When another combatant uses Skill Card, 1 Reload \nIf 3 are used, at the start of the next turn, create 1 Micro Ballista card(s)",
        reasoning:
          "Gives some Reload from other Skill Cards, but the Micro Ballista is worthless, not a strong pick compared to other Pendants",
      },
      {
        id: "Pendant of Resolution III",
        tier: CardTier.A,
        cost: 1,
        type: "skill",
        description:
          "[Exhaust 2] For 1 turn(s), when a \ncard is used, \n1 Reload",
        reasoning:
          "Decent option, provides consistent Reload but not particularly strong",
      },
      {
        id: "Pendant of Resolution IV",
        tier: CardTier.A,
        cost: 1,
        type: "upgrade",
        description:
          "When another combatant uses Skill Card, 1 Reload \n50% Chance to gain additional 1 Reload",
        reasoning:
          "Unreliable due to RNG, but otherwise a straightforward base card upgrade that can provide extra Reload",
      },
      {
        id: "Pendant of Resolution V",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description: "[ Retain / Retrieve 4 ] Reload 2",
        reasoning:
          "Best Pendant if paired with a -1 cost Divine Epiphany; otherwise it's a bit expensive. Excellent for Mei Lin, as it provides 8 Passion stacks",
      },
    ],
    divineEpiphanies: [
      {
        name: "-1 Cost",
        description: "Decrease Cost by 1",
        reasoning:
          "Best Divine Epiphany for Pendant of Resolution V, making it 0-cost and excellent for Mei Lin builds.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
      },
    ],
  },
  {
    id: "sir-kowalski",
    name: "Sir Kowalski",
    image: "/images/character/veronica/unique3.png",
    type: "skill",
    cost: 1,
    rarity: CardRarities.Legendary,
    description:
      "Choose 1 Ballista card\nin hand, +100%\nDamage amount until\nactivated \nDraw 1",
    epiphanies: [
      {
        id: "Sir Kowalski I",
        tier: CardTier.S,
        cost: 1,
        type: "skill",
        description:
          "Choose 1 Ballista card in hand, +150% Damage amount until activated. \nDraw 2",
        reasoning:
          "Good option, draws 2 and boosts Ballista damage; with -1 cost Divine Epiphany it get more value",
      },
      {
        id: "Sir Kowalski II",
        tier: CardTier.B,
        cost: 1,
        type: "skill",
        description:
          "Draw 1 \nIncrease Damage Amount of Ballista by 30% for 1 turn",
        reasoning:
          "Decent but not great, grants 1 draw but the 30% multiplicative Ballista boost is less valuable since Veronica already has a lot of multiplicative damage",
      },
      {
        id: "Sir Kowalski III",
        tier: CardTier.SPlus,
        cost: 1,
        type: "skill",
        description: "Draw 2 \nWhen drawing a Skill card, create 1 Ballista",
        reasoning:
          "Basically a Repose, drawing Skill cards creates Ballista, and a -1 cost Divine Epiphany makes it even stronger",
      },
      {
        id: "Sir Kowalski IV",
        tier: CardTier.Niche,
        cost: 1,
        type: "skill",
        description:
          "+250% Damage Amount of 1 random Ballista card in hand, \nExhaust after activation",
        reasoning:
          "Best option for Veronica DPS, provides the highest damage boost, triggers mid-turn and counts as a normal targetting attack, activating Passion Weakness if the enemy has it",
      },
      {
        id: "Sir Kowalski V",
        tier: CardTier.C,
        cost: 1,
        type: "skill",
        description:
          "Select and Exhaust 1 Ballista in hand \nCreate 2 Ballista, decrease Damage Amount of those cards by 25% until activated",
        reasoning:
          "Honestly questionable, it exhausts a Ballista but doesn't trigger it like the IV option, making it more useless",
      },
    ],
    divineEpiphanies: [
      {
        name: "-1 Cost",
        description: "Decrease Cost by 1",
        reasoning:
          "Excellent for Sir Kowalski I and III, making them 0-cost and significantly increasing their value.",
        icon: "/images/card/icon_card_battle_expand_vitor.png",
      },
      {
        name: "+1 Draw",
        description: "Draw 1 card",
        reasoning:
          "Great for maintaining card draw and cycling through your deck more efficiently.",
        icon: "/images/card/icon_card_battle_expand_secred.png",
      },
    ],
  },
  {
    id: "Bombardment Prep",
    name: "Bombardment Prep",
    image: "/images/character/veronica/unique4.png",
    type: "upgrade",
    cost: 1,
    rarity: CardRarities.Unique,
    description: "[Unique]\n Increase max stack of\n Reload by 1\n 1 Reload",
  },
];
const recommendedVeronicaSaveData: SaveData[] = [
  {
    id: "veronica-recommended-deck-1",
    name: "Draw focused build",
    description:
      "POT OF GREED ALLOWS ME TO DRAW TWO MORE CARDS. I WILL START MY TURN BY PLAYING POT OF GREED WHICH ALLOWS ME TO DRAW TWO MORE CARDS. I WILL PLAY THE MAGIC CARD, POT OF GREED, WHICH ALLOWS ME TO DRAW TWO NEW CARDS. I WILL START MY TURN BY PLAYING POT OF GREED, WHICH ALLOWS ME TO DRAW TWO NE.....",
    faintMemoryNote: "160 Faint Memory Cost without Convert Method",
    cards: [
      "Firing Preparation IV",
      "Repose I",
      "Repose I",
      "Repose I",
      "Repose I",
      "Pendant of Resolution I",
      "Sir Kowalski III",
      "Bombardment Prep",
    ],
  },
  {
    id: "veronica-recommended-deck-2",
    name: "Draw focused build",
    description:
      "POT OF GREED ALLOWS ME TO DRAW TWO MORE CARDS. I WILL START MY TURN BY PLAYING POT OF GREED WHICH ALLOWS ME TO DRAW TWO MORE CARDS. I WILL PLAY THE MAGIC CARD, POT OF GREED, WHICH ALLOWS ME TO DRAW TWO NEW CARDS. I WILL START MY TURN BY PLAYING POT OF GREED, WHICH ALLOWS ME TO DRAW TWO NE.....",
    faintMemoryNote: "160 Faint Memory Cost without Convert Method",
    cards: [
      "Firing Preparation IV",
      "Repose I",
      "Repose I",
      "Repose I",
      "Repose I",
      "Pendant of Resolution I",
      "Sir Kowalski III",
      "Bombardment Prep",
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
    { id: "spark-of-passion", description: "IDK im dum" },
    {
      id: "executioners-tool",
      description: "Provides the best 2-set bonus for critical damage builds",
    },
  ],
};

const memoryFragmentSubstatPriorities: MemoryFragmentSubstatPriorities[] = [
  {
    priority: 1,
    relation: "equal",
    stats: [
      MemoryFragmentSubstats.CriticalChance,
      MemoryFragmentSubstats.CriticalDamage,
      MemoryFragmentSubstats.ExtraDamage,
    ],
  },
  {
    priority: 2,
    relation: "or",
    stats: [MemoryFragmentSubstats.AttackFlat, MemoryFragmentSubstats.Attack],
  },
];

const partnersGuide: PartnersGuide[] = [
  {
    id: "marin",
    description: "IDK 5* Yuck",
    tier: CardTier.SPlus,
  },
  {
    id: "yuri",
    description: "16% Attack buff is OP",
    tier: CardTier.S,
  },
  {
    id: "rosaria",
    description: "IDK add it yourself",
    tier: CardTier.S,
  },
];
export const veronicaData: CharacterData = {
  attribute: Attributes.Passion,
  uniqueCards: uniqueCards,
  recommendedSaveData: recommendedVeronicaSaveData,
  gears: gearsData,
  memoryFragmentSets: memoryFragmentSets,
  memoryFragmentMainStats: [
    MemoryFragmentMainStats.CriticalChance,
    MemoryFragmentMainStats.PassionDamage,
    MemoryFragmentMainStats.Attack,
  ],
  memoryFragmentSubstatsNote: `Prioritize Critical Chance and Critical Damage equally to achieve an
              ideal critical ratio After that, prioritize Flat Attack and
              Attack % for additional damage scaling Void Damage is
              generally preferred over Attack for most cases testsssss`,
  memoryFragmentSubstatPriorities: memoryFragmentSubstatPriorities,
  partnersGuide: partnersGuide,
};
