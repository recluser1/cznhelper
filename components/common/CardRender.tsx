// common/CardRender.tsx
import { Attributes } from "@/types/card";
import { Card, CardRarities } from "@/types/character-guides";

type CardProps = {
  card: Card;
  isPlaceholder?: boolean;
  scaleOnHover?: boolean;
  attribute?: Attributes;
  isEpiphany?: "spark" | "nospark";
  onClick?: (id: string) => void;
  size?: "large" | "small";
};

export const CardRender = (props: CardProps) => {
  const {
    card,
    isPlaceholder = false,
    scaleOnHover = false,
    onClick,
    isEpiphany,
    attribute,
    size = "large",
  } = props;

  const isSmall = size === "small";

  const costSize = isSmall
    ? "text-4xl sm:text-4xl md:text-6xl lg:text-3xl xl:text-3xl"
    : "text-4xl sm:text-4xl md:text-6xl lg:text-3xl xl:text-6xl";

  const nameSize = isSmall
    ? "text-base sm:text-sm md:text-xl lg:text-base xl:text-sm"
    : "text-base sm:text-lg md:text-xl lg:text-base xl:text-xl";

  const typeSize = isSmall
    ? "text-base sm:text-sm md:text-lg lg:text-sm xl:text-base"
    : "text-sm sm:text-sm md:text-lg lg:text-sm xl:text-base";
  const descSize = isSmall
    ? "text-xs sm:text-xs md:text-sm lg:text-base xl:text-xs"
    : "text-xs sm:text-xs md:text-sm lg:text-xs xl:text-base";

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

  function getRarityColor(cardRarity: CardRarities): string {
    if (cardRarity === CardRarities.Legendary) {
      return "#FFD700";
    } else if (cardRarity === CardRarities.Unique) {
      return "#E9A1FC";
    } else if (cardRarity === CardRarities.Common) {
      return "#FFFFFF";
    } else {
      return "#6FB0FC"; // Default for Rare
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
      className={`relative overflow-hidden rounded-xl shadow-xl`}
    >
      {/* Attribute Border */}
      <div className="absolute inset-0 w-6 z-10 left-0 scale-103">
        <img
          src={`/images/card/${attribute ?? "void"}-border.png`}
          alt={`${attribute} Border`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-lg shadow-lg">
        {isPlaceholder ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-sm text-gray-400 font-semibold">No Card</span>
            <span className="text-xs text-gray-500/70">[Empty Slot]</span>
          </div>
        ) : (
          <>
            <img
              src={card.image || "/placeholder.svg"}
              alt={card.name}
              className="w-full h-full object-cover scale-105"
            />

            <div className="absolute inset-0 flex flex-col">
              {/* Top Section */}
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none z-0" />
              <div className="p-4 pt-4 pl-3">
                <div className="flex items-start gap-2 relative">
                  {/* Rarity Image */}
                  <div
                    className="absolute left-0 top-0 z-10"
                    style={{ transform: "translateX(-19px)" }}
                  >
                    <img
                      src={getRarityStripImage(card.rarity)}
                      alt="Rarity Label"
                      className="h-12 sm:h-16 object-cover"
                    />
                  </div>
                  {/* Cost */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center ml-4 relative z-20 mb-1">
                    <span
                      className={`${costSize} font-bold`}
                      style={{
                        color: "#FFFFFF",
                        WebkitTextStroke: "1px #294297ff",
                        textShadow: `
                          0 0 2px #5B91FB,
                          0 0 4px #5B91FB,
                          0 0 6px #5B91FB,
                          0 0 8px #5B91FB
                        `,
                      }}
                    >
                      {card.cost}
                    </span>
                    <div
                      className="w-full h-0.5 "
                      style={{
                        backgroundColor: "#ffffffff",
                        boxShadow: `
                          0 0 2px #5B91FB,
                          0 0 4px #5B91FB,
                          0 0 6px #5B91FB,
                          0 0 8px #5B91FB
                        `,
                      }}
                    />
                  </div>
                  <div className="flex-0 pt-2">
                    {/* Background Image */}
                    <div className="w-full h-full overflow-hidden">
                      {/* Title Background Stripe - FIXED ALIGNMENT */}
                      <div className="absolute inset-x-0 top-0 h-12 z-0 pointer-events-none">
                        <img
                          src={getRarityBackgroundImage(card.rarity)}
                          alt=""
                          className="h-full w-full object-left object-contain scale-125"
                          style={{
                            transform: isSmall
                              ? "translateY(-9%)"
                              : "translateY(-5%)",
                          }}
                        />
                      </div>
                      {/* Card Name */}
                      <div
                        className={`relative z-10 ${
                          isSmall ? "pl-1 pt-0.5" : "pl-2 pt-0"
                        }`}
                      >
                        <h5
                          className={`font-bold leading-tight drop-shadow-lg overflow-hidden text-ellipsis whitespace-nowrap ${nameSize}`}
                          style={{
                            color: getRarityColor(card.rarity),
                            textShadow: `
                              -0.6px -0.6px 0 #000,
                              0.6px -0.6px 0 #000,
                              -0.6px 0.6px 0 #000,
                              0.6px 0.6px 0 #000
                            `,
                          }}
                        >
                          {card.name}
                        </h5>
                      </div>
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
                        className={`text-white font-medium capitalize drop-shadow ${typeSize}`}
                        style={{
                          fontSize: isSmall
                            ? "0.75rem"
                            : "clamp(0.7rem, 2vw, 0.9rem)",
                          padding: "0px 0px",
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
              <div
                className={`absolute inset-x-0 bottom-0 pointer-events-none z-0 ${
                  isSmall ? "h-44" : "h-48"
                } bg-gradient-to-t from-black/85 via-black/70 to-transparent`}
              />
              {/* Description Section */}
              {card.description && (
                <div className="mt-auto relative z-20 py-8 flex flex-col items-center justify-center gap-2">
                  {/* Card Frame Spark */}
                  {![CardRarities.Common, CardRarities.Unique].includes(
                    card.rarity
                  ) && (
                    <img
                      src={
                        isEpiphany === "spark"
                          ? "/images/card/card_frame_spark.png"
                          : "/images/card/card_frame_spark_dis.png"
                      }
                      alt=""
                      className="w-1/2 -mb-1 drop-shadow-2xl"
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
                            className="text-center font-semibold text-xs sm:text-sm leading-snug -mb-1"
                            style={{ color: "#dda95cff" }}
                          >
                            {bracketedText}
                          </p>
                        )}
                        <p
                          className={`text-white text-center leading-snug -mb-4 whitespace-pre-line ${descSize}`}
                          dangerouslySetInnerHTML={{
                            __html: remainingText.replace(
                              /(\d+%?)/g,
                              '<span style="color: #7ce2fb; font-weight: bold;">$1</span>'
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
