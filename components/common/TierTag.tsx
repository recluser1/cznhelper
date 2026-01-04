import { CardTier } from "@/types/character-guides";

export const TierTag = ({ tier }: { tier: CardTier }) => {
  const getTierColor = (tier: CardTier) => {
    switch (tier) {
      case CardTier.SPlus:
        return `
          bg-black/85
          text-pink-400
          font-black text-xs tracking-widest
          border border-pink-500/70
          shadow-xl shadow-pink-500/35
          ring-1 ring-pink-500/50
          ring-offset-1 ring-offset-pink-900/30
          relative overflow-hidden
        `;

      case CardTier.S:
        return `
          bg-black/80
          text-orange-400
          font-extrabold text-xs tracking-wider
          border border-orange-500/60
          shadow-lg shadow-orange-500/25
          ring-1 ring-orange-500/35
        `;

      case CardTier.A:
        return `
          bg-black/75
          text-purple-300
          font-bold text-xs tracking-wide
          border border-purple-500/50
          shadow-md shadow-purple-500/20
          ring-1 ring-purple-500/25
        `;

      case CardTier.B:
        return `
          bg-black/65
          text-cyan-300
          font-semibold text-xs
          border border-cyan-600/40
          shadow shadow-cyan-500/10
        `;

      case CardTier.C:
        return `
          bg-black/55
          text-emerald-400
          font-medium text-xs
          border border-emerald-700/35
        `;

      case CardTier.Niche:
        return `
          bg-slate-900/80
          text-teal-300
          font-medium text-xs tracking-wide
          border border-teal-700/40
          ring-1 ring-teal-700/25
        `;

      case CardTier.Bad:
        return `
          bg-gray-950/90
          text-red-400
          font-medium text-xs
          border border-red-700/60
          shadow shadow-red-900/20
        `;

      case CardTier.WIP:
        return `
          bg-black/60
          text-amber-300
          font-medium text-xs
          border border-amber-600/45
          shadow shadow-amber-500/10
        `;

      default:
        return `
          bg-gray-900/70
          text-gray-500
          border border-gray-800/50
          text-xs
        `;
    }
  };

  return (
    <div className="flex justify-center">
      <span
        className={`
          px-3 py-1 rounded-full
          text-xs font-bold tracking-wide
          ${getTierColor(tier)}
        `}
      >
        {tier} Tier
      </span>
    </div>
  );
};
