import { UniqueCard } from "@/types/character-guides";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMemo, useState } from "react";
import { TierTag } from "@/components/common/TierTag";
import { CardRender } from "@/components/common/CardRender";
import { Attributes } from "@/types/card";

type Props = {
  uniqueCards: UniqueCard[];
  attribute?: Attributes;
};

export const BaseCard = ({ uniqueCards, attribute }: Props) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const cardsWithEpiphanies = useMemo(
    () =>
      uniqueCards.filter(
        (c) => Array.isArray(c.epiphanies) && c.epiphanies.length > 0
      ),
    [uniqueCards]
  );

  if (cardsWithEpiphanies.length === 0) {
    return (
      <div className="text-center text-gray-500 py-12">
        No epiphany data available yet.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <p className="text-base text-gray-400 text-center">
        Click a Base Card to view the Tier List
      </p>
      {/* Base Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
        {cardsWithEpiphanies.map((cardData) => (
          <Dialog
            key={cardData.id}
            open={selectedCardId === cardData.id}
            onOpenChange={(open) =>
              setSelectedCardId(open ? cardData.id : null)
            }
          >
            <DialogTrigger asChild>
              <div
                role="button"
                tabIndex={0}
                className="
                hover:scale-103
                group
                relative
                overflow-hidden
                cursor-pointer
                transition-all duration-300
                focus:ring-2
                focus:ring-sky-400/50
                rounded-lg
                border border-white/10
                hover:border-white/30
                "
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.removeProperty("--mouse-x");
                  e.currentTarget.style.removeProperty("--mouse-y");
                }}
              >
                <CardRender
                  card={cardData}
                  scaleOnHover={false}
                  attribute={attribute}
                  isEpiphany="nospark"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 delay-75" />
                  <div
                    className="absolute inset-0 mix-blend-screen"
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.3) 0%, transparent 50%)",
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
            </DialogTrigger>

            <DialogContent className="!w-[95vw] !max-w-6xl max-h-[90vh] overflow-y-auto scrollbar-none bg-gray-900/95 border border-gray-800 rounded-xl">
              <DialogHeader className="bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                  {cardData.name} - Epiphanies
                </DialogTitle>
              </DialogHeader>
              {/* Epiphanies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 sm:p-6">
                {cardData.epiphanies!.map((epiphany) => (
                  <div key={epiphany.id} className="flex flex-col gap-3">
                    <TierTag tier={epiphany.tier} />
                    <div
                      className="
                      group
                      relative
                      overflow-hidden
                      rounded-lg
                      cursor-pointer
                      transition-all duration-500
                      border border-white/10
                      hover:border-white/30
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
                      onMouseLeave={(e) => {
                        e.currentTarget.style.removeProperty("--mouse-x");
                        e.currentTarget.style.removeProperty("--mouse-y");
                      }}
                    >
                      <CardRender
                        card={{
                          ...epiphany,
                          name: cardData.name,
                          image: cardData.image,
                          rarity: cardData.rarity,
                        }}
                        attribute={attribute}
                        isEpiphany="spark"
                        size="small"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/12 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 delay-75" />
                        <div
                          className="absolute inset-0 mix-blend-screen"
                          style={{
                            background:
                              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.35) 0%, transparent 50%)",
                          }}
                        />
                        <div
                          className="absolute inset-0 mix-blend-screen opacity-90"
                          style={{
                            background:
                              "conic-gradient(from 0deg at var(--mouse-x, 50%) var(--mouse-y, 50%), #ff00de40, #00ffff40, #a8ff0040, #ffff0040, #00ff8840, #ff006640, #ff00de40)",
                            maskImage:
                              "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 20%, transparent 70%)",
                            WebkitMaskImage:
                              "radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 20%, transparent 70%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Epiphany Explanations */}
              <div className="mt-6 space-y-4 px-4 sm:px-6 pb-6">
                <h3 className="text-lg font-bold text-purple-300">
                  Epiphanies Tier Explanation
                </h3>
                {cardData.epiphanies!.map((epiphany) => (
                  <div
                    key={epiphany.id}
                    className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <TierTag tier={epiphany.tier} />
                      <span className="font-semibold text-foreground">
                        {epiphany.id}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {epiphany.reasoning || "No reasoning provided yet."}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divine Epiphanies */}
              {cardData.divineEpiphanies &&
                cardData.divineEpiphanies.length > 0 && (
                  <div className="mt-6 space-y-4 px-4 sm:px-6 pb-6">
                    <h3 className="text-lg font-bold text-purple-300">
                      Divine Epiphanies
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Good Divine Epiphanies that this card can roll
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cardData.divineEpiphanies.map((divine) => (
                        <div
                          key={divine.name || divine.icon}
                          className="p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/40"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            {divine.icon && (
                              <img
                                src={divine.icon}
                                alt={divine.name ?? "Divine Epiphany"}
                                className="w-10 h-10 object-contain"
                              />
                            )}
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/30 text-purple-200 border border-purple-400/50">
                              Divine
                            </span>
                          </div>
                          {divine.name && (
                            <h4 className="font-semibold text-purple-200 mb-2">
                              {divine.name}
                            </h4>
                          )}
                          {divine.reasoning && (
                            <p className="text-sm text-purple-300/80 leading-relaxed">
                              {divine.reasoning}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};
