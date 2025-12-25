import { CardRender } from "@/components/common/CardRender";
import { Attributes } from "@/types/card";
import { Card, UniqueCard } from "@/types/character-guides";
import { SaveData } from "@/types/save-data";
import { useCallback, useMemo } from "react";

type Props = {
  recommendedSaveData: SaveData[];
  uniqueCards: UniqueCard[];
  commonCards: Card[];
  attribute?: Attributes;
};

export const RecommendedSaveData = ({ recommendedSaveData, uniqueCards, commonCards, attribute }: Props) => {
  const { commonMap, uniqueMap, epiphanyMap } = useMemo(() => {
    const common = new Map<string, Card>();
    const unique = new Map<string, UniqueCard>();
    const epiphanies = new Map<string, { epiphany: any; parent: UniqueCard }>();

    for (const c of commonCards) common.set(c.id, c);
    for (const u of uniqueCards) {
      unique.set(u.id, u);
      if (u.epiphanies) {
        for (const e of u.epiphanies) {
          epiphanies.set(e.id, { epiphany: e, parent: u });
        }
      }
    }

    return { commonMap: common, uniqueMap: unique, epiphanyMap: epiphanies };
  }, [commonCards, uniqueCards]);

  const generateSaveData = useCallback(
    (cards: string[]) => {
      return cards.map((cardId) => {
        const common = commonMap.get(cardId);
        if (common) {
          return { ...common, isBasic: true };
        }

        const epiphanyEntry = epiphanyMap.get(cardId);
        if (epiphanyEntry) {
          const { epiphany, parent } = epiphanyEntry;
          return {
            ...epiphany,
            name: parent.name,
            image: parent.image,
            rarity: parent.rarity,
            isEphiphany: true,
          };
        }

        const unique = uniqueMap.get(cardId);
        if (unique) {
          return unique;
        }

        return null;
      });
    },
    [commonMap, uniqueMap, epiphanyMap]
  );

  return (
    <section id="recommended-save-data" className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">2. Recommended Save Data</h2>

      <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
        These are example deck builds. You can adjust based on your playstyle and available cards.
      </p>

      <div className="space-y-12 sm:space-y-16">
        {recommendedSaveData.map((saveData) => {
          const cards = generateSaveData(saveData.cards);

          return (
            <div className="space-y-5" key={saveData.id}>
              <div className="text-center space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-purple-300">{saveData.name}</h3>
                {saveData.faintMemoryNote && (
                  <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold leading-tight whitespace-normal break-words max-w-full">
                    {saveData.faintMemoryNote}
                  </span>
                )}
              </div>

              {saveData.description && (
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-4">
                  {saveData.description}
                </p>
              )}

              {/* Deck Cards */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto justify-items-center">
                  {cards?.map((card, cardIndex) => {
                    if (!card) return null;
                    const key = `${(card as any).id ?? "unknown"}-${cardIndex}`;
                    return (
                      <CardRender
                        key={key}
                        card={card as any}
                        isPlaceholder={false}
                        attribute={attribute}
                        isEpiphany={(card as any).isEphiphany ? "spark" : "nospark"}
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
