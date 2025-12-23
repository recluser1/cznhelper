import { CardTier, GuideSections, Section } from "@/types/character-guides";
import {
  MemoryFragmentMainStats,
  MemoryFragmentSubstats,
} from "@/types/memory-fragments";

export const defaultSections: Section[] = [
  { id: GuideSections.Infographic, title: "1. Infographic", level: 1 },
  {
    id: GuideSections.CharacterOverview,
    title: "2. Character Overview",
    level: 1,
  },
  { id: GuideSections.Profile, title: "2.1. Profile", level: 2 },
  { id: GuideSections.Cards, title: "2.2. Cards", level: 2 },
  { id: GuideSections.Potentials, title: "2.3. Potentials", level: 2 },
  { id: GuideSections.ManifestEgos, title: "2.4. Manifest Ego", level: 2 },
  { id: GuideSections.SaveData, title: "3. Save Data", level: 1 },
  { id: GuideSections.MemoryFragments, title: "4. Memory Fragments", level: 1 },
  { id: GuideSections.MemoryStats, title: "4.1. Memory Stats", level: 2 },
  { id: GuideSections.MemorySets, title: "4.2. Memory Sets", level: 2 },
  { id: GuideSections.Partners, title: "5. Partners", level: 1 },
  { id: GuideSections.Teams, title: "6. Teams", level: 1 },
  { id: GuideSections.Credits, title: "7. Credits", level: 1 },
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
