import { CardRender } from "@/components/common/CardRender";
import { Attributes } from "@/types/card";
import { Card, CardRarities, UniqueCard } from "@/types/character-guides";
import { SaveData } from "@/types/save-data";
import { useCallback } from "react";

type Props = {
  recommendedSaveData: SaveData[];
  uniqueCards: UniqueCard[];
  commonCards: Card[];
  attribute?: Attributes;
};
export const RecommendedSaveData = (props: Props) => {
  const { recommendedSaveData, uniqueCards, commonCards, attribute } = props;

  const generateSaveData = useCallback(
    (cards: string[]) => {
      return cards.map((cardId) => {
        let findingCard = commonCards.find((card) => card.id === cardId);
        //Search in unique cards epiphanies
        uniqueCards.map((card) => {
          if (card.epiphanies) {
            const foundEpiphany = card.epiphanies.find(
              (epiphany) => epiphany.id === cardId
            );
            if (foundEpiphany) {
              findingCard = {
                ...foundEpiphany,
                name: card.name,
                image: card.image,
                rarity: card.rarity,
                isEphiphany: true,
              };
            }
          }
        });
        //search in unique cards themselves
        if (!findingCard) {
          const foundUniqueCard = uniqueCards.find(
            (card) => card.id === cardId
          );
          if (foundUniqueCard) {
            findingCard = foundUniqueCard;
          }
        }
        //search in common cards
        if (!findingCard && commonCards.find((card) => card.id === cardId)) {
          const foundBasicCard = commonCards.find((card) => card.id === cardId);
          if (foundBasicCard) {
            findingCard = {
              ...foundBasicCard,
              isBasic: true,
            };
          }
        }
        return findingCard;
      });
    },
    [uniqueCards, commonCards]
  );

  return (
    <section
      id="recommended-save-data"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">
        3. Recommended Save Data
      </h2>
      <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
        These are example deck builds. You can adjust based on your playstyle
        and available cards.
      </p>

      <div className="space-y-12 sm:space-y-16">
        {recommendedSaveData.map((saveData, index) => {
          const cards = generateSaveData(saveData.cards);

          return (
            <div className="space-y-5" key={saveData.id || index}>
              <div className="text-center space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-purple-300">
                  {saveData.name}
                </h3>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold leading-tight whitespace-normal break-words max-w-full">
                  {saveData.faintMemoryNote}
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-4">
                {saveData.description}
              </p>
              {/* Deck Cards */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto justify-items-center">
                  {cards?.map((card, cardIndex) => {
                    if (!card) {
                      return null;
                    }
                    console.log("cards", cards);
                    return (
                      <CardRender
                        key={cardIndex}
                        card={card}
                        isPlaceholder={!Boolean(card)}
                        attribute={attribute}
                        isEpiphany={card.isEphiphany ? "spark" : "nospark"}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
