import { CardTier, GuideSections, Section } from "@/types/character-guides";
import {
  MemoryFragmentMainStats,
  MemoryFragmentSubstats,
} from "@/types/memory-fragments";

export const defaultSections: Section[] = [
  { id: GuideSections.BaseCards, title: "1. Base Cards", level: 1 },
  { id: GuideSections.RecommendedSaveData, title: "2. Recommended Save Data", level: 1 },
  { id: GuideSections.Equipments, title: "2.1 Equipments", level: 2 },
  { id: GuideSections.MemoryFragments, title: "3. Memory Fragments", level: 1 },
  { id: GuideSections.Partners, title: "4. Partners", level: 1 },
  { id: GuideSections.Teams, title: "5. Teams WIP", level: 1 },
  { id: GuideSections.Credits, title: "6. Credits WIP", level: 1 },
];

export const CardTiersLabels = [
  {
    value: CardTier.SPlus,
    label: "S+ Tier",
  },
  { value: CardTier.S, label: "S Tier" },
  { value: CardTier.A, label: "A Tier" },
  { value: CardTier.B, label: "B Tier" },
  { value: CardTier.C, label: "C Tier" },
  { value: CardTier.Niche, label: "Niche Tier" },
  { value: CardTier.Bad, label: "Bad Tier" },
];

export const MemoryFragmentMainStatLabels = [
  { value: MemoryFragmentMainStats.Any, label: "N/A" },
  { value: MemoryFragmentMainStats.Attack, label: "Attack %" },
  { value: MemoryFragmentMainStats.Defense, label: "Defense %" },
  { value: MemoryFragmentMainStats.Health, label: "Health %" },
  { value: MemoryFragmentMainStats.EgoRecovery, label: "Ego Recovery" },
  { value: MemoryFragmentMainStats.CriticalChance, label: "Critical Chance %" },
  { value: MemoryFragmentMainStats.CriticalDamage, label: "Critical Damage %" },
  { value: MemoryFragmentMainStats.PassionDamage, label: "Passion Damage %" },
  { value: MemoryFragmentMainStats.JusticeDamage, label: "Justice Damage %" },
  { value: MemoryFragmentMainStats.OrderDamage, label: "Order Damage %" },
  { value: MemoryFragmentMainStats.VoidDamage, label: "Void Damage %" },
  { value: MemoryFragmentMainStats.InstinctDamage, label: "Instinct Damage %" },
];
export const MemoryFragmentSubstatLabels = [
  { value: MemoryFragmentSubstats.Attack, label: "Attack %" },
  { value: MemoryFragmentSubstats.Defense, label: "Defense %" },
  { value: MemoryFragmentSubstats.Health, label: "Health %" },
  { value: MemoryFragmentSubstats.AttackFlat, label: "Attack +" },
  { value: MemoryFragmentSubstats.DefenseFlat, label: "Defense +" },
  { value: MemoryFragmentSubstats.HealthFlat, label: "Health +" },
  { value: MemoryFragmentSubstats.CriticalChance, label: "Critical Chance %" },
  { value: MemoryFragmentSubstats.CriticalDamage, label: "Critical Damage %" },
  { value: MemoryFragmentSubstats.EgoRecovery, label: "Ego Recovery" },
  { value: MemoryFragmentSubstats.ExtraDamage, label: "Extra Damage" },
  { value: MemoryFragmentSubstats.DamageOverTime, label: "Damage over Time" },
];
