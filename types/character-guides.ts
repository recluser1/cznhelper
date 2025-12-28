// types/character-guides.ts

import { Attributes } from "./card";
import { Character } from "./character";
import { SaveData } from "./save-data";
import {
  MemoryFragmentMainStats,
  MemoryFragmentSet,
  MemoryFragmentSubstats,
  RecommendingFragmentSet,
} from "./memory-fragments";

export enum CardRarities {
  Common = "common",
  Rare = "rare",
  Unique = "unique",
  Legendary = "legendary",
}

export enum CardTier {
  SPlus = "S+",
  S = "S",
  A = "A",
  B = "B",
  C = "C",
  Niche = "Niche",
  Bad = "Bad",
  WIP = "WIP",
}

export enum GuideSections {
  BaseCards = "base-cards",
  RecommendedSaveData = "recommended-save-data",
  Equipments = "equipments",
  MemoryFragments = "memory-fragments",
  Partners = "partners",
  Teams = "teams",
  Credits = "credits",
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

export interface Epiphany {
  id: string;
  tier: CardTier;
  cost: number | "X";
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

export type MemoryFragmentSetRecommendation = {
  bestInSlot: RecommendingFragmentSet[];
  alternative?: RecommendingFragmentSet[];
};

export interface MemoryFragmentSubstatPriorities {
  priority: number;
  relation: "equal" | "or";
  stats: MemoryFragmentSubstats[];
}

export interface PartnersGuide {
  id: string;
  description: string;
  tier: CardTier;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  characters: Character[];
}

export interface CharacterData {
  attribute: Attributes;
  job?: string;
  role?: string;

  // bannerUrl?: string;
  // avatarUrl?: string;

  overview?: string;
  strengths?: string[];
  weaknesses?: string[];

  commonCards?: Card[];
  uniqueCards: UniqueCard[];

  recommendedSaveData?: SaveData[];

  gears?: {
    weapons: string[];
    armors: string[];
    accessories: string[];
  };

  recommendedSources?: string[];

  memoryFragmentSets?: MemoryFragmentSetRecommendation;
  memoryFragmentMainStats?: MemoryFragmentMainStats[];
  memoryFragmentSubstatsNote?: string;
  memoryFragmentSubstatPriorities?: MemoryFragmentSubstatPriorities[];

  partnersGuide?: PartnersGuide[];

  // team?: Team[];
  // teamGuideDescription?: string;
  // I will add team guide later
}

export type Section = {
  id: GuideSections;
  title: string;
  level: number;
};
