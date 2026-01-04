import { CardRender } from "@/components/common/CardRender";
import { Attributes } from "@/types/card";
import { Card, UniqueCard } from "@/types/character-guides";
import { SaveData } from "@/types/save-data";
import { useCallback, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

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
      return cards
        .map((cardId) => {
          const common = commonMap.get(cardId);
          if (common) return { ...common, isBasic: true };

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
          if (unique) return unique;

          return null;
        })
        .filter(Boolean);
    },
    [commonMap, uniqueMap, epiphanyMap]
  );

  const selectedBuild = recommendedSaveData.find((b) => b.id === openDialogId);
  const dialogCards = selectedBuild
    ? generateSaveData(selectedBuild.cards)
    : [];

  return (
    <div className="space-y-10 py-8">
      <div className="text-center px-4">
        <p className="text-lg text-gray-300 leading-relaxed">
          These are optimal examples only
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Adjust based on your playstyle and available cards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {recommendedSaveData.map((saveData) => {
          const shortDesc = (saveData as any).shortDescription || "";

          return (
            <button
              key={saveData.id}
              onClick={() => setOpenDialogId(saveData.id)}
              className="
                relative overflow-hidden rounded-2xl border border-gray-800
                bg-gradient-to-br from-gray-900/50 to-gray-950/70
                p-6 text-left backdrop-blur-sm
                transition-all duration-300 ease-out
                hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-900/20
                hover:-translate-y-1 group
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-cyan-600/10" />
              </div>

              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-gray-100 tracking-tight">
                  {saveData.name}
                </h3>

                {shortDesc && (
                  <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                    {shortDesc}
                  </p>
                )}

                {saveData.faintMemoryNote && (
                  <div
                    className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider
                    bg-gray-800/80 border border-gray-700 text-gray-300"
                  >
                    {saveData.faintMemoryNote}
                  </div>
                )}
              </div>
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </button>
          );
        })}
      </div>
      <Dialog open={!!openDialogId} onOpenChange={() => setOpenDialogId(null)}>
        <DialogContent
          className="
          !w-[60vw] !max-w-7xl max-h-[80vh] overflow-y-auto
          bg-gray-950/95 backdrop-blur-xl border border-gray-800
          rounded-2xl p-0
        "
        >
          {selectedBuild && (
            <>
              <DialogHeader className="px-8 pt-8 pb-6 border-b border-gray-800">
                <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-gray-100">
                  {selectedBuild.name} Build
                </DialogTitle>

                {selectedBuild.faintMemoryNote && (
                  <div className="text-center mt-4">
                    <span
                      className="
                      inline-block px-4 py-2 rounded-xl text-sm font-semibold uppercase tracking-wider
                      bg-gray-800/60 border border-gray-700 text-gray-300
                    "
                    >
                      {selectedBuild.faintMemoryNote}
                    </span>
                  </div>
                )}
              </DialogHeader>

              <div className="px-8 py-6 space-y-6">
                {selectedBuild.description && (
                  <p className="text-center text-gray-300 text-base leading-relaxed whitespace-pre-line">
                    {selectedBuild.description}
                  </p>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {dialogCards.map((card, index) => {
                    const key = `${(card as any).id ?? "unknown"}-${index}`;
                    return (
                      <div
                        key={key}
                        className="group relative"
                        onMouseMove={(e) => {
                          if (window.matchMedia("(hover: hover)").matches) {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
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
                          }
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
                          size="large"
                        />

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-cyan-500/20" />
                          <div
                            className="absolute inset-0 mix-blend-screen"
                            style={{
                              background:
                                "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168, 85, 247, 0.3) 0%, transparent 60%)",
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
