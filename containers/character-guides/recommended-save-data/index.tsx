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

export const RecommendedSaveData = ({
  recommendedSaveData,
  uniqueCards,
  commonCards,
  attribute,
}: Props) => {
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
    <div className="space-y-8">
      <p className="text-base text-gray-400 text-center">
        These are optimal EXAMPLES ONLY. You can adjust based on your playstyle
        and available cards.
      </p>

      {/* Save Data Grid */}
      <div className="space-y-8 sm:space-y-12">
        {recommendedSaveData.map((saveData) => {
          const cards = generateSaveData(saveData.cards);

          return (
            <div className="space-y-5" key={saveData.id}>
              <div className="text-center space-y-3">
                <h3 className="text-lg sm:text-xl font-bold">
                  {saveData.name}
                </h3>
                {saveData.faintMemoryNote && (
                  <span
                    className="
                  inline-block px-4 py-1.5 rounded-full border border-gray-500 bg-gray-500
                  text-xs sm:text-sm font-bold 
                  leading-tight whitespace-normal break-words max-w-full"
                  >
                    {saveData.faintMemoryNote}
                  </span>
                )}
              </div>

              {saveData.description && (
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-4 whitespace-pre-line">
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
                      <div
                        key={key}
                        role="button"
                        tabIndex={0}
                        className="
                        hover:scale-100
                        group
                        relative
                        overflow-hidden
                        transition-all duration-300
                        rounded-xl
                        "
                        onMouseMove={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          e.currentTarget.style.setProperty(
                            "--mouse-x",
                            `${x}px`
                          );
                          e.currentTarget.style.setProperty(
                            "--mouse-y",
                            `${y}px`
                          );
                        }}
                      >
                        <CardRender
                          card={card as any}
                          isPlaceholder={false}
                          scaleOnHover={false}
                          attribute={attribute}
                          isEpiphany={
                            (card as any).isEphiphany ? "spark" : "nospark"
                          }
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 delay-75" />
                          <div
                            className="absolute inset-0 mix-blend-screen"
                            style={{
                              background:
                                "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.3) 0%, transparent 50%)",
                            }}
                          />
                          <div
                            className="absolute inset-0 mix-blend-screen opacity-90"
                            style={{
                              background:
                                "conic-gradient(from 0deg at var(--mouse-x, 50%) var(--mouse-y, 50%), #ff00de30, #00ffff30, #a8ff0030, #ffff0030, #00ff8830, #ff006630, #ff00de30)",
                              maskImage:
                                "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 15%, transparent 65%)",
                              WebkitMaskImage:
                                "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 15%, transparent 65%)",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
