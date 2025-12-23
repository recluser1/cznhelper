import { Attributes } from "@/types/card";
import { Card, CardRarities } from "@/types/character-guides";
import { useMemo } from "react";

type CardProps = {
  card: Card;
  isPlaceholder?: boolean;
  scaleOnHover?: boolean;
  attribute?: Attributes;
  isEpiphany?: "spark" | "nospark";
  onClick?: (id: string) => void;
};
export const CardRender = (props: CardProps) => {
  const {
    card,
    isPlaceholder = false,
    scaleOnHover = false,
    onClick,
    isEpiphany,
    attribute,
  } = props;
  // Helper function to get rarity background image based on card name
  function getRarityStripImage(cardRarity: CardRarities): string {
    switch (cardRarity) {
      case CardRarities.Legendary:
        return "/images/card/card_rarity_legend.png";
      case CardRarities.Unique:
        return "/images/card/card_rarity_unique.png";
      case CardRarities.Rare:
        return "/images/card/card_rarity_rare.png";
      case CardRarities.Common:
        return "/images/card/card_rarity_common.png";
      default:
        return "";
    }
  }

  // Helper function to get rarity color based on card name
  function getRarityColor(cardRarity: CardRarities): string {
    if (cardRarity === CardRarities.Legendary) {
      return "#FFD700"; // Legend - Gold
    } else if (cardRarity === CardRarities.Unique) {
      return "#E9A1FC"; // Unique - Purple
    } else if (cardRarity === CardRarities.Common) {
      return "#FFFFFF"; // Common - Gray
    } else {
      return "#6FB0FC"; // Rare - Blue
    }
  }

  const parseDescription = (desc: string) => {
    const bracketMatch = desc.match(/\[([^\]]+)\]/);
    if (bracketMatch) {
      const bracketedText = bracketMatch[0];
      const remainingText = desc.replace(bracketMatch[0], "").trim();
      return { bracketedText, remainingText };
    }
    return { bracketedText: null, remainingText: desc };
  };

  // Helper function to get rarity background image based on card name
  function getRarityBackgroundImage(cardRarity: CardRarities): string {
    switch (cardRarity) {
      case CardRarities.Legendary:
        return "/images/card/card_title_rarity_legend.png";
      case CardRarities.Unique:
        return "/images/card/card_title_rarity_unique.png";
      case CardRarities.Rare:
        return "/images/card/card_title_rarity_rare.png";
      case CardRarities.Common:
        return "/images/card/card_title_rarity_common.png";
      default:
        return "";
    }
  }

  return (
    <div
      onClick={() => onClick?.(card.id)}
      className={`relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/100 transition-all duration-200 max-w-[280px] mx-auto ${
        scaleOnHover ? "hover:scale-103" : ""
      }`}
    >
      {/* Attribute Border */}
      <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
        <img
          src={`/images/card/${attribute ?? "void"}-border.png`}
          alt={`${attribute} Border`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
        {isPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-sm text-muted-foreground font-semibold">
              Placeholder
            </span>
            <span className="text-xs text-muted-foreground/70">
              [Empty Slot]
            </span>
          </div>
        ) : (
          <>
            <img
              src={card.image || "/placeholder.svg"}
              alt={card.name}
              className="w-full h-full object-cover scale-108"
            />

            <div className="absolute inset-0 flex flex-col">
              {/* Top Section: Cost + Name + Type */}
              <div className="p-2 pt-1.5 pl-3">
                <div className="flex items-start gap-1.5 relative">
                  {/* Rarity Image */}
                  <div
                    className="absolute left-0 top-0 z-20 flex items-center"
                    style={{ transform: "translateX(-18px)" }}
                  >
                    <img
                      src={getRarityStripImage(card.rarity)}
                      alt=""
                      className="h-11 sm:h-13 object-contain"
                    />
                  </div>

                  {/* Cost */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                    <span
                      className="font-bold text-3xl sm:text-4xl md:text-2xl lg:text-4xl"
                      style={{
                        color: "#FFFFFF",
                        WebkitTextStroke: "1.3px #2D4CAE",
                        textShadow: `
                        0 0 2px #5B91FB,
                        0 0 4px #5B91FB,
                        0 0 6px #5B91FB,
                        0 0 8px #5B91FB,
                        0 0 12px #5B91FB,
                        0 0 16px #5B91FB,
                        -1px -1px 0 #5B91FB,
                         1px -1px 0 #5B91FB,
                        -1px  1px 0 #5B91FB,
                         1px  1px 0 #5B91FB,
                        -2px -2px 4px rgba(91, 145, 251, 0.8),
                         2px -2px 4px rgba(91, 145, 251, 0.8),
                        -2px  2px 4px rgba(91, 145, 251, 0.8),
                         2px  2px 4px rgba(91, 145, 251, 0.8)
                      `,
                      }}
                    >
                      {card.cost}
                    </span>
                    <div
                      className="w-full h-0.5 mt-0.5"
                      style={{
                        backgroundColor: "#B6C4F9",
                        boxShadow: `
                          0 0 2px #5B91FB,
                          0 0 4px #5B91FB,
                          0 0 6px #5B91FB,
                          0 0 8px rgba(91, 145, 251, 0.6),
                          inset 0 1px 0 rgba(255, 255, 255, 0.3)
                        `,
                      }}
                    />
                  </div>

                  {/* Name and Type */}
                  <div className="flex-1 pt-0.5 min-w-0">
                    <div className="relative w-full">
                      {/* Background Image - can be positioned separately */}
                      <div
                        className="absolute"
                        style={{
                          backgroundImage: `url(${getRarityBackgroundImage(
                            card.rarity
                          )})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "left center",
                          backgroundSize: "contain",
                          left: -30,
                          right: 0,
                          top: 8,
                          bottom: 0,
                          height: "45%",
                          width: "700%",
                        }}
                      />

                      {/* Card Name */}
                      <h5
                        className="relative font-bold leading-tight drop-shadow-lg overflow-hidden text-ellipsis whitespace-nowrap"
                        style={{
                          color: getRarityColor(card.rarity),
                          fontSize: "clamp(0.8rem, 2.8vw, 1.1rem)",
                          padding: "4px 6px",
                          textShadow: `
                        -1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px  1px 0 #000,
                         1px  1px 0 #000
                      `,
                          transform: "scaleX(1)",
                          transformOrigin: "left",
                          maxWidth: "100%",
                        }}
                      >
                        {card.name}
                      </h5>
                    </div>

                    {/* Type Icon + Text */}
                    <div
                      className="flex items-center gap-1 -mt-1"
                      style={{
                        padding: "4px 6px",
                      }}
                    >
                      <img
                        src={
                          card.type === "attack"
                            ? "/images/icon-category-card-attack.webp"
                            : card.type === "skill"
                            ? "/images/icon-category-card-skill.webp"
                            : "/images/icon-category-card-upgrade.webp"
                        }
                        alt={card.type}
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      />
                      <span
                        className="text-white text-xs sm-text-sm font-medium capitalize drop-shadow"
                        style={{
                          padding: "0px 0px",
                          fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
                          textShadow: `
                        -1px -1px 0 #000,
                         1px -1px 0 #000,
                        -1px  1px 0 #000,
                         1px  1px 0 #000
                      `,
                        }}
                      >
                        {card.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Section */}
              {card.description && (
                <div className="mt-auto py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-1">
                  {/* Card Frame Spark */}
                  {![CardRarities.Common, CardRarities.Unique].includes(card.rarity) && (
                    <img
                      src={
                        isEpiphany === "spark"
                          ? "/images/card/card_frame_spark.png"
                          : "/images/card/card_frame_spark_dis.png"
                      }
                      alt=""
                      className="w-1/2 mb-0 drop-shadow-2xl"
                    />
                  )}
                  {(() => {
                    const { bracketedText, remainingText } = parseDescription(
                      card.description
                    );
                    return (
                      <>
                        {bracketedText && (
                          <p
                            className="text-center font-medium text-xs sm:text-base leading-snug m-0"
                            style={{ color: "#e3b46c" }}
                          >
                            {bracketedText}
                          </p>
                        )}
                        <p
                          className="text-white text-center text-xs sm:text-sm leading-snug m-0 whitespace-pre-line px-2"
                          dangerouslySetInnerHTML={{
                            __html: remainingText
                              .replace(
                                /(\d+%?)/g,
                                '<span style="color: #7ce2fb">$1</span>'
                              )
                              .replace(
                                /Shadow of the\s*Moon\+/gi,
                                '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'
                              )
                              .replace(
                                /Moonslash/gi,
                                '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'
                              ),
                          }}
                        />
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
