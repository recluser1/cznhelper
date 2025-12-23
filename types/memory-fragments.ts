export type MemoryFragmentSet = {
  id: string;
  name: string;
  icon: string;
  effect: string;
};

export type recommendingFragmentSet = {
  id: string;
  description?: string;
};

export enum MemoryFragmentMainStats {
  Any = "any",
  CriticalChance = "critical_chance",
  CriticalDamage = "critical_damage",
  Attack = "%attack",
  Defense = "%defense",
  Health = "%hp",
  EgoRecovery = "ego_recovery",
  VoidDamage = "void_damage",
  PassionDamage = "passion_damage",
  OrderDamage = "order_damage",
  InstinctDamage = "instinct_damage",
  JusticeDamage = "justice_damage",
}

export enum MemoryFragmentSubstats {
  CriticalChance = "critical_chance",
  CriticalDamage = "critical_damage",
  AttackFlat = "flat_attack",
  DefenseFlat = "flat_defense",
  HealthFlat = "flat_hp",
  DamageOverTime = "damage_over_time",
  EgoRecovery = "ego_recovery",
  Attack = "%attack",
  Defense = "%defense",
  Health = "%hp",
  ExtraDamage = "extra_damage",
}
