import { Attributes } from "./card";
import {
  MemoryFragmentMainStats,
  MemoryFragmentSet,
  MemoryFragmentSubstats,
  recommendingFragmentSet,
} from "./memory-fragments";
import { SaveData } from "./save-data";

export interface Epiphany {
  id: string;
  tier: CardTier;
  cost: number;
  type: string;
  description?: string;
  reasoning?: string;
}

export interface DivineEpiphany {
  name: string;
  description: string;
  reasoning: string;
  icon: string;
}

export interface UniqueCard extends Card {
  epiphanies?: Epiphany[];
  divineEpiphanies?: DivineEpiphany[];
}
export enum CardRarities {
  Common = "common",
  Rare = "rare",
  Unique = "unique",
  Legendary = "legendary",
}

export interface Card {
  id: string;
  name: string;
  image: string;
  type: string;
  cost: number | "X";
  rarity: CardRarities;
  description?: string;
  isEphiphany?: boolean;
  isBasic?: boolean;
}
export type MemoryFragmentSetRecommendation = {
  bestInSlot: recommendingFragmentSet[];
  alternative?: recommendingFragmentSet[];
};
export interface MemoryFragmentSubstatPriorities {
  priority: number;
  relation: 'equal' | 'or';
  stats: MemoryFragmentSubstats[];
}
export interface CharacterData {
  attribute: Attributes;
  commonCards?: Card[];
  uniqueCards: UniqueCard[];
  recommendedSaveData?: SaveData[];
  gears?: {
    weapons: string[];
    armors: string[];
    accessories: string[];
  };
  memoryFragmentSets?: MemoryFragmentSetRecommendation;
  memoryFragmentMainStats?: MemoryFragmentMainStats[];
  memoryFragmentSubstatsNote?: string;
  memoryFragmentSubstatPriorities?: MemoryFragmentSubstatPriorities[];
  // Add other character data as needed (overview, partners, etc.)
}

export enum GuideSections {
  Infographic = "infographic",
  CharacterOverview = "character-overview",
  Profile = "profile",
  Cards = "cards",
  Potentials = "potentials",
  ManifestEgos = "manifest-egos",
  SaveData = "save-data",
  MemoryFragments = "memory-fragments",
  MemoryStats = "memory-stats",
  MemorySets = "memory-sets",
  Partners = "partners",
  Teams = "teams",
  Credits = "credits",
}

export type Section = {
  id: GuideSections;
  title: string;
  level: number;
};

export enum CardTier {
  SPlus = "S+",
  S = "S",
  A = "A",
  B = "B",
  C = "C",
  Niche = "Niche",
  Bad = "Bad",
}
