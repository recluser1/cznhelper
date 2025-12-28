// types/character.ts

import { Attributes } from "./card";

export enum CharacterJob {
  Striker = "Striker",
  Vanguard = "Vanguard",
  Hunter = "Hunter",
  Ranger = "Ranger",
  Psionic = "Psionic",
  Controller = "Controller",
}

export interface Character {
  id: string;
  name: string;
  job: CharacterJob;
  attribute: Attributes;
  rarity?: number;
}
