import { UniqueCard } from "@/types/character-guides";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { TierTag } from "@/components/common/TierTag";
import { CardRender } from "@/components/common/CardRender";
import { Attributes } from "@/types/card";

type Props = {
  uniqueCards: UniqueCard[];
  attribute?: Attributes;
};

export const BaseCard = (props: Props) => {
  const { uniqueCards, attribute } = props;
  const [selectedCardForEpiphanies, setSelectedCardForEpiphanies] =
    useState<UniqueCard | null>(null);

  return (
    <section
      id="base-cards"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">
        1. Base Cards
      </h2>
      <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
        Click a Base Card to view the Epiphanies Tier List
      </p>

      {/* Base Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
        {uniqueCards.map((cardData) => {
          if (!cardData.epiphanies || cardData.epiphanies.length === 0) {
            return null; // Skip cards without epiphanies
          }
          return (
            <Dialog
              key={cardData.id ?? cardData.name}
              open={selectedCardForEpiphanies?.id === cardData.id}
              onOpenChange={(open) => {
                if (open) setSelectedCardForEpiphanies(cardData);
                else setSelectedCardForEpiphanies(null);
              }}
            >
              <DialogTrigger asChild>
                {/* Tile - matches Partner tile sizing and interaction */}
                <CardRender card={cardData} onClick={() => {setSelectedCardForEpiphanies(cardData)}} scaleOnHover attribute={attribute} isEpiphany="nospark"/>
              </DialogTrigger>

              <DialogContent className="!w-[95vw] !max-w-6xl max-h-[90vh] overflow-y-auto scrollbar-none bg-gray-900/95 border border-gray-800 rounded-xl ">
                <DialogHeader className="bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                    {cardData.name} - Epiphanies
                  </DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                  {cardData?.epiphanies?.map((epiphany, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 sm:gap-3 w-full max-w-[280px] mx-auto"
                    >
                      <TierTag tier={epiphany.tier} />

                      {/* Epiphany Card */}
                      <CardRender
                        card={{
                          ...epiphany,
                          name: cardData.name,
                          image: cardData.image,
                          rarity: cardData.rarity,
                        }}
                        attribute={attribute}
                        isEpiphany={'spark'}
                      />
                    </div>
                  ))}
                </div>

                {/* Epiphany Explanations */}
                <div className="mt-6 space-y-3 sm:space-y-4">
                  <h3 className="text-lg font-bold text-purple-300">
                    Epiphanies Tier
                  </h3>
                  {cardData?.epiphanies?.map((epiphany, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-background/50 border border-border"
                    >
                      <div className="flex flex-row items-center sm:flex-row gap-2 mb-2">
                        <TierTag tier={epiphany.tier} />
                        <span className="text-sm sm:text-base font-semibold text-foreground">
                          {epiphany.id}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {epiphany.reasoning}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Divine Epiphanies */}
                {cardData.divineEpiphanies &&
                  cardData.divineEpiphanies.length > 0 && (
                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-bold text-purple-300">
                        Divine Epiphanies
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Good Divine Epiphanies that this card can roll
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {cardData.divineEpiphanies.map(
                          (divineEpiphany: any, index: number) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/40"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                {divineEpiphany.icon && (
                                  <img
                                    src={divineEpiphany.icon}
                                    alt={
                                      divineEpiphany.name || "Divine Epiphany"
                                    }
                                    className="w-8 h-8 object-contain flex-shrink-0"
                                  />
                                )}
                                <span className="px-2 py-1 rounded-full text-xs font-bold bg-purple-500/30 text-purple-200 border border-purple-400/50">
                                  Divine
                                </span>
                                {divineEpiphany.name && (
                                  <span className="text-sm font-semibold text-purple-200">
                                    {divineEpiphany.name}
                                  </span>
                                )}
                              </div>
                              {divineEpiphany.reasoning && (
                                <p className="text-sm sm:text-base text-purple-300/80 mt-2 leading-relaxed">
                                  {divineEpiphany.reasoning}
                                </p>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </section>
  );
};
