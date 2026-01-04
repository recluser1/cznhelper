// lib/attribute-colors.ts
import { Attributes } from "@/types/card";

export const ATTRIBUTE_COLORS: Record<
  Attributes,
  {
    bg: string;
    border: string;
    text: string;
    hover: string;
    gradientFrom: string;
    gradientTo: string;
    accent: string;
    accentLight: string;
  }
> = {
  Passion: {
    bg: "bg-red-900/20",
    border: "border-red-500/50",
    text: "text-red-400",
    hover: "hover:bg-red-900/40",
    gradientFrom: "from-red-600",
    gradientTo: "to-pink-700",
    accent: "bg-red-600",
    accentLight: "bg-red-500/30",
  },
  Void: {
    bg: "bg-purple-900/20",
    border: "border-purple-500/50",
    text: "text-purple-400",
    hover: "hover:bg-purple-900/40",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-700",
    accent: "bg-purple-600",
    accentLight: "bg-purple-500/30",
  },
  Instinct: {
    bg: "bg-amber-900/20",
    border: "border-amber-500/50",
    text: "text-amber-400",
    hover: "hover:bg-amber-900/40",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-600",
    accent: "bg-amber-500",
    accentLight: "bg-amber-500/30",
  },
  Order: {
    bg: "bg-emerald-900/20",
    border: "border-emerald-500/50",
    text: "text-emerald-400",
    hover: "hover:bg-emerald-900/40",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-600",
    accent: "bg-emerald-500",
    accentLight: "bg-emerald-500/30",
  },
  Justice: {
    bg: "bg-cyan-900/20",
    border: "border-cyan-500/50",
    text: "text-cyan-400",
    hover: "hover:bg-cyan-900/40",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-blue-600",
    accent: "bg-cyan-500",
    accentLight: "bg-cyan-500/30",
  },
};
