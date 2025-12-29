// src/components/GearItem.tsx
import React from "react";
import { GearTooltip } from "@/components/GearTooltip";

type Rarity = "rare" | "legend" | "unique";

interface GearItemProps {
  name: string;
  rarity: Rarity;
  source: string[];
  atk?: string;
  def?: string;
  health?: string;
  imageName: string;
  effect: string;
}

const rarityColors: Record<Rarity, string> = {
  rare: "rgb(51, 160, 243)",
  unique: "rgb(163, 96, 255)",
  legend: "rgb(255, 150, 0)",
};

const rarityBg: Record<Rarity, string> = {
  rare: "/images/bg_equipment_rarity_rare.webp",
  legend: "/images/bg_equipment_rarity_legend.webp",
  unique: "/images/bg_equipment_rarity_unique.webp",
};

export function GearItem({
  name,
  rarity,
  source,
  atk,
  def,
  health,
  imageName,
  effect,
}: GearItemProps) {
  const coloredEffect = effect.replace(
    /(\d+%?)/g,
    '<span class="text-[#FF8C00]">$1</span>'
  );

  const bgSrc = rarityBg[rarity] || rarityBg.legend;
  const nameColor = rarityColors[rarity] || rarityColors.legend;

  return (
    <div className="relative flex items-start gap-6 p-6 rounded-xl bg-gray-800/40 border border-gray-700/60 hover:border-gray-400/100 transition-all duration-200 min-h-[240px] w-full">
      <div className="relative w-36 h-48 flex-shrink-0">
        <img
          src={bgSrc}
          alt={`${rarity} Rarity`}
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`/images/gear/${imageName}.webp`}
            alt={name}
            className="w-20 h-20 object-contain relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="absolute top-3 right-3">
        <GearTooltip sources={source} />
      </div>
      <div className="relative flex-1 min-w-0 flex flex-col">
        <h4 className="text-lg font-bold mb-2" style={{ color: nameColor }}>
          {name}
        </h4>

        {(atk || def || health) && (
          <div className="flex items-center gap-2 mb-3">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg bg-black/30 text-gray-200">
              <span className="text-sm font-medium">
                {atk ? "ATK" : def ? "DEF" : "Health"}
              </span>
              <span className="text-foreground font-bold text-sm">
                {atk || def || health}
              </span>
            </div>
          </div>
        )}

        <div className="flex-1 min-h-[80px]">
          <p className="text-sm text-gray-300 leading-relaxed break-words whitespace-pre-line">
            {effect.split(/(\d+%?)/g).map((part, i) =>
              /\d+%?/.test(part) ? (
                <span key={i} className="text-[#FF8C00]">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
