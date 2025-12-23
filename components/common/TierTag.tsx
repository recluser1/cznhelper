import { CardTier } from "@/types/character-guides";

export const TierTag = ({ tier }: { tier: CardTier }) => {
  const getTierColor = (tier: CardTier) => {
    switch (tier) {
      case CardTier.SPlus:
        return `
          bg-black/80
          text-pink-400
          font-black text-xs tracking-widest
          border border-pink-500/60
          shadow-lg shadow-pink-500/30
          ring-1 ring-pink-500/40
          ring-offset-1 ring-offset-pink-900/20
          relative overflow-hidden
        `;

      case CardTier.S:
        return `
          bg-black/80
          text-orange-400
          font-bold text-xs tracking-wider
          border border-orange-500/60
          shadow-lg shadow-orange-500/25
          ring-1 ring-orange-500/30
          ring-offset-1 ring-offset-orange-900/20
        `;

      case CardTier.A:
        return `
          bg-black/70
          text-purple-300
          font-bold text-xs tracking-wide
          border border-purple-500/50
          shadow-md shadow-purple-500/20
          ring-1 ring-purple-500/20
        `;

      case CardTier.B:
        return `
          bg-black/60
          text-cyan-300
          font-semibold text-xs
          border border-cyan-600/40
          shadow shadow-cyan-500/10
        `;

      case CardTier.C:
        return `
          bg-black/50
          text-emerald-400
          font-medium text-xs
          border border-emerald-700/30
        `;
      case CardTier.Niche:
        return `
          bg-gray-900/80
          text-gray-400
          font-medium text-xs
          border border-gray-700/50
        `;

      case CardTier.Bad:
        return `
          bg-gray-900/90
          text-red-400
          font-medium text-xs
          border border-red-700/50
        `;

      default:
        return `bg-gray-900/70 
        text-gray-600 
        border border-gray-800/50 
        text-xs
        `;
    }
  };

  return (
    <div className="flex justify-center">
      <span
        className={`
                      px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                      ${getTierColor(tier)}`}
      >
        {tier} Tier
      </span>
    </div>
  );
};
