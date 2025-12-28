// types/character.ts

import { Attributes } from "./card";

export enum CharacterClass {
  Striker = "Striker",
  Vanguard = "Vanguard",
  Hunter = "Hunter",
  Ranger = "Ranger",
  Psionic = "Psionic",
  Controller = "Controller",
}

export enum CharacterRole {
  MainDPS = "Main DPS",
  SubDPS = "Sub DPS",
  Support = "Support",
}

export interface Character {
  id: string;
  name: string;
  job: CharacterClass;
  attribute: Attributes;
  rarity?: number;
  role?: CharacterRole;
}
