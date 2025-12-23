import { Attributes } from "@/types/card";
import { CardRarities, CharacterData } from "@/types/character-guides";
import { CardTier } from "@/types/character-guides";

export const meilinData: CharacterData = {
  attribute: Attributes.Passion,
  uniqueCards: [
    {
      id: "flame-dragon-jewel",
      name: "Flame Dragon Jewel",
      image: "/images/character/mei-lin/starter4.png",
      type: "upgrade",
      cost: 1,
      rarity: CardRarities.Rare,
      description: `[Unique / Initiation] Increases Damage Amount \n of Attack Cards of this unit by 20%\nWhen an attack is used, 1 Passion Weakness to the target`,
      epiphanies: [
        {
          id: "Flame Dragon Jewel I",
          tier: CardTier.S,
          cost: 1,
          type: "upgrade",
          description: `[Unique / Initiation] Increases Damage Amount \n of Attack Cards of this unit by 30%\nWhen an attack is used, 1 Passion Weakness to the target`,
          reasoning: "Need Update!!!",
        },
      ],
      divineEpiphanies: [
        {
          name: "Reduce the cost of this card by 1",
          reasoning: "Excellent for cost efficiency",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
          description: "",
        },
        {
          name: "1 Morale, 1 Resolve",
          reasoning: "Permanent 20% additive buff",
          icon: "/images/card/icon_card_battle_expand_vitor.png",
          description: "",
        },
      ],
    },
  ],
};
