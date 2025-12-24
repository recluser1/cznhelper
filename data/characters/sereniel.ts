// data/characters/sereniel.ts
import { Attributes } from "@/types/card";
import {
    Card,
    CardRarities,
    CardTier,
    CharacterData,
    MemoryFragmentSetRecommendation,
    UniqueCard,
    PartnersGuide,
} from "@/types/character-guides";
import { MemoryFragmentSet, MemoryFragmentMainStats, MemoryFragmentSubstats } from "@/types/memory-fragments";
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
        description: "100% damage\n2 Afterglow\nOn Ravage, move from\nGraveyard to hand",
        epiphanies: [
            {
                id: "Homing Laser I",
                tier: CardTier.S,
                cost: 1,
                type: "attack",
                description: "150% damage\nOn Ravage, Move to\nhand\nDestroy: Add 1 Hit(s)",
                reasoning: "",
            },
            {
                id: "Homing Laser II",
                tier: CardTier.Bad,
                cost: 0,
                type: "attack",
                description: "150% Damage\n3 Afterglow \nOn Ravage, Move to\nhand",
                reasoning: "",
            },
            {
                id: "Homing Laser III",
                tier: CardTier.Bad,
                cost: 1,
                type: "attack",
                description: "150% Damage\n2 Afterglow\nCreate 2 Homing Laser L\nin Discard Pile",
                reasoning: "",
            },
            {
                id: "Homing Laser IV",
                tier: CardTier.SPlus,
                cost: 1,
                type: "attack",
                description: "100% Damage\n1 Afterglow\nOn Ravage or at the\nstart of the turn, Move\nto hand",
                reasoning: "",
            },
            {
                id: "Homing Laser V",
                tier: CardTier.SPlus,
                cost: 0,
                type: "attack",
                description: "150% Damage\n2 Afterglow\nMove all Homing Laser L\nin Graveyard to hand",
                reasoning: "",
            },
        ],
        divineEpiphanies: [
            {
                name: "AP 1",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_vitor.png",
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
        id: "plasma-missile",
        name: "Plasma Missile",
        image: "/images/character/sereniel/unique1.webp",
        type: "attack",
        cost: 1,
        rarity: CardRarities.Rare,
        description: "120% Damage\n0.5 Tenacity Damage\nIf the taret was not\nRavaged, activate 1\nmore time",
        epiphanies: [
            {
                id: "Plasma Missile I",
                tier: CardTier.SPlus,
                cost: 1,
                type: "attack",
                description: "180% Damage\n1 Tenacity Damage\nIf the taret was not\nRavaged, activate 1\nmore time",
                reasoning: "",
            },
            {
                id: "Plasma Missile II",
                tier: CardTier.S,
                cost: 1,
                type: "attack",
                description: "180% Damage\n60% Damage Amount\nfor each decreased\nTenacity of the target\n(max 10)",
                reasoning: "",
            },
            {
                id: "Plasma Missile III",
                tier: CardTier.C,
                cost: 1,
                type: "attack",
                description: "",
                reasoning: "",
            },
            {
                id: "Plasma Missile IV",
                tier: CardTier.SPlus,
                cost: 1,
                type: "attack",
                description: "",
                reasoning: "",
            },
            {
                id: "Plasma Missile V",
                tier: CardTier.A,
                cost: 0,
                type: "upgrade",
                description: "",
                reasoning: "",
            },
        ],
        divineEpiphanies: [
            {
                name: "1 Morale, 1 Resolve",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_vitor.png",
                description: "",
            },
            {
                name: "Reduce the cost of this card by 1",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_vitor.png",
                description: "",
            },
        ],
    },
    {
        id: "shining-core",
        name: "Shining Core",
        image: "/images/character/sereniel/unique2.webp",
        type: "skill",
        cost: 1,
        rarity: CardRarities.Rare,
        description: "",
        epiphanies: [
            {
                id: "Shining Core I",
                tier: CardTier.C,
                cost: 0,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Shining Core II",
                tier: CardTier.SPlus,
                cost: 0,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Shining Core III",
                tier: CardTier.S,
                cost: 0,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Shining Core IV",
                tier: CardTier.A,
                cost: 0,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Shining Core V",
                tier: CardTier.Niche,
                cost: 0,
                type: "skill",
                description: "",
                reasoning: "",
            },
        ],
        divineEpiphanies: [
            {
                name: "Draw 1",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_secred.png",
                description: "",
            },
            {
                name: "1 AP",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_nihilum.png",
                description: "",
            },
        ],
    },
    {
        id: "cobalt-light",
        name: "Cobalt Light",
        image: "/images/character/sereniel/unique3.webp",
        type: "skill",
        cost: 1,
        rarity: CardRarities.Legendary,
        description: "",
        epiphanies: [
            {
                id: "Cobalt Light I",
                tier: CardTier.SPlus,
                cost: 1,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Cobalt Light II",
                tier: CardTier.B,
                cost: 1,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Cobalt Light III",
                tier: CardTier.S,
                cost: 1,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Cobalt Light IV",
                tier: CardTier.S,
                cost: 1,
                type: "skill",
                description: "",
                reasoning: "",
            },
            {
                id: "Cobalt Light V",
                tier: CardTier.SPlus,
                cost: 1,
                type: "upgrade",
                description: "",
                reasoning: "",
            },
        ],
        divineEpiphanies: [
            {
                name: "Reduce the cost of this card by 1",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_secred.png",
                description: "",
            },
            {
                name: "1 AP",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_nihilum.png",
                description: "",
            },
            {
                name: "1 Morale, 1 Resolve",
                reasoning: "",
                icon: "/images/card/icon_card_battle_expand_vitor.png",
                description: "",
            },
        ],
    },
    {
        id: "Pale Shooting Star",
        name: "Pale Shooting Star",
        image: "/images/character/sereniel/unique4.webp",
        type: "attack",
        cost: 1,
        rarity: CardRarities.Unique,
        description: "",
        epiphanies: []
    }
];

const recommendedSaveData: SaveData[] = [
    {
        id: "draw-focused-build",
        name: "High Draw Support",
        description: "Strike of Darkness IV and Resonating Darkness IV if running with Mei Lin.",
        faintMemoryNote: "140 Faint Memory Cost without Convert Method",
        cards: [
            "Strike of Darkness V",
            "Resonating Darkness I",
            "Snack Time II",
            "Snack Time II",
            "Snack Time II",
            "Snack Time II",
            "Dark Condensation I",
            "Predator's Blade",
        ],
    },
    {
        id: "void-focused-build",
        name: "Void Focused Build",
        description: "Snack Time II for Renoa, Snack Time V for Kayron",
        faintMemoryNote: "140 Faint Memory Cost without Convert Method",
        cards: [
            "Strike of Darkness V",
            "Resonating Darkness II",
            "Snack Time V",
            "Snack Time V",
            "Snack Time V",
            "Snack Time V",
            "Dark Condensation III",
            "Predator's Blade",
        ],
    },
];

const gearsData = {
    weapons: ["Tentacles of Chaos", "Crimson Sword", "Flashbang", "Over Cutter Shocker"],
    armors: ["Fragment of the Empty Void", "Rocket-Adorned Cape", "Brainwave-Blocking Helmet"],
    accessories: ["Clover of the Forest", "Sphere of Randomness", "Superconductive Protein", "Source of the Forbidden", "Water Drops of the Goddess", "Multifaceted Parallel Universe Nexus"],
};

const recommendedSources = ["Laboratory 0", "Swamp of Judgment"];

const memoryFragmentSets: MemoryFragmentSetRecommendation = {
    bestInSlot: [
        { id: "judgments-flames", description: "+50% Damage Amount to Instinct Cards used against Ravaged targets" },
        { id: "executioners-tool", description: "+25% Critical Damage" },
    ],
    alternative: [
        { id: "black-wing", description: "+12% Attack" },
        { id: "executioners-tool", description: "+25% Critical Damage" },
        { id: "cursed-corpse", description: "Increase damage dealth to targets inflicted with Agony by 10%" },
    ],
};

const partnersGuide: PartnersGuide[] = [
    {
        id: "peko",
        description: "",
        tier: CardTier.SPlus,
    },
    {
        id: "",
        description: "",
        tier: CardTier.A,
    },
    {
        id: "",
        description: "",
        tier: CardTier.B,
    },
    {
        id: "",
        description: "",
        tier: CardTier.B,
    },
    {
        id: "",
        description: "",
        tier: CardTier.S,
    },
];

export const serenielData: CharacterData = {
    attribute: Attributes.Instinct,
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
            stats: [MemoryFragmentSubstats.CriticalChance, MemoryFragmentSubstats.CriticalDamage]
        },
        {
            priority: 2,
            relation: "or",
            stats: [MemoryFragmentSubstats.AttackFlat, MemoryFragmentSubstats.Attack]
        },
    ],
    memoryFragmentSubstatsNote: "",
    partnersGuide: partnersGuide,
};