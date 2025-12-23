import { Attributes } from "./card";

export enum CharacterJob {
  Striker = "striker",
  Vanguard = "vanguard",
  Hunter = "hunter",
  Ranger = "ranger",
  Psionic = "psionic",
  Controller = "controller",
}

export interface Character {
  id: string;
  name: string;
  job: CharacterJob;
  attribute: Attributes;
  rairty?: number;
}
