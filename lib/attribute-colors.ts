// lib/attribute-colors.ts
import { Attributes } from "@/types/card";

export type AttributeColorsType = {
  bg: string;
  border: string;
  text: string;
  textGradient: string;
  hover: string;
  gradientFrom: string;
  gradientTo: string;
  accent: string;
  accentLight: string;
  shadow: string;
};
export const ATTRIBUTE_COLORS: Record<Attributes, AttributeColorsType> = {
  Passion: {
    bg: "bg-red-900/20",
    border: "border-red-500/50",
    text: "text-red-400",
    textGradient: "from-red-500 to-red-800",
    hover: "hover:bg-red-900/40",
    gradientFrom: "from-red-500/20",
    gradientTo: "to-red-800/20",
    accent: "bg-red-600",
    accentLight: "bg-red-500/30",
    shadow: "shadow-red-900/30",
  },
  Void: {
    bg: "bg-purple-900/20",
    border: "border-purple-500/50",
    text: "text-purple-400",
    textGradient: "from-purple-500 to-purple-800",
    hover: "hover:bg-purple-900/40",
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-purple-800/20",
    accent: "bg-purple-600",
    accentLight: "bg-purple-500/30",
    shadow: "shadow-purple-900/30",
  },
  Instinct: {
    bg: "bg-amber-900/20",
    border: "border-amber-500/50",
    text: "text-amber-400",
    textGradient: "from-amber-500 to-amber-800",
    hover: "hover:bg-amber-900/40",
    gradientFrom: "from-amber-500/20",
    gradientTo: "to-amber-800/20",
    accent: "bg-amber-500",
    accentLight: "bg-amber-500/30",
    shadow: "shadow-amber-900/30",
  },
  Order: {
    bg: "bg-emerald-900/20",
    border: "border-emerald-500/50",
    text: "text-emerald-400",
    textGradient: "from-emerald-500 to-emerald-800",

    hover: "hover:bg-emerald-900/40",
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-emerald-800/20",
    accent: "bg-emerald-500",
    accentLight: "bg-emerald-500/30",
    shadow: "shadow-emerald-900/30",
  },
  Justice: {
    bg: "bg-cyan-900/20",
    border: "border-cyan-500/50",
    text: "text-cyan-400",
    textGradient: "from-cyan-500 to-cyan-800",
    hover: "hover:bg-cyan-900/40",
    gradientFrom: "from-cyan-500/20",
    gradientTo: "to-cyan-800/20",
    accent: "bg-cyan-500",
    accentLight: "bg-cyan-500/30",
    shadow: "shadow-cyan-900/30",
  },
};
