// types/memory-fragments.ts

export type MemoryFragmentSet = {
  id: string;
  name: string;
  icon: string;
  effect: string;
};

export type RecommendingFragmentSet = {
  id: string;
  description?: string;
};

export enum MemoryFragmentMainStats {
  Any = "any",

  Attack = "%attack",
  Defense = "%defense",
  Health = "%hp",

  CriticalChance = "critical_chance",
  CriticalDamage = "critical_damage",
  EgoRecovery = "ego_recovery",

  VoidDamage = "void_damage",
  PassionDamage = "passion_damage",
  OrderDamage = "order_damage",
  InstinctDamage = "instinct_damage",
  JusticeDamage = "justice_damage",
}

export enum MemoryFragmentSubstats {
  Attack = "%attack",
  Defense = "%defense",
  Health = "%hp",

  AttackFlat = "flat_attack",
  DefenseFlat = "flat_defense",
  HealthFlat = "flat_hp",

  CriticalChance = "critical_chance",
  CriticalDamage = "critical_damage",

  EgoRecovery = "ego_recovery",
  ExtraDamage = "extra_damage",
  DamageOverTime = "damage_over_time",
}
