// components/ExpandableSetCard.tsx
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type Set = {
  name: string;
  effect: string;
  icon: string;
  why: string;
};

type Props = {
  set: Set;
  tier: "bis" | "secondary";
};

export default function ExpandableSetCard({ set }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Clickable Card */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left group transition-all duration-300"
      >
        <div className="rounded-lg overflow-hidden border-2 border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
          <div className="flex items-center gap-5 p-5">
            {/* Icon */}
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-border/50">
              <img
                src={set.icon}
                alt={set.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground text-lg">{set.name}</h3>
                <div className="ml-3 transition-transform group-hover:rotate-180">
                  {isOpen ? (
                    <ChevronUp className="w-6 h-6 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-purple-400" />
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{set.effect}</p>
            </div>
          </div>
        </div>
      </button>

      {/* Expandable Explanation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-1 pb-1">
          <p className="text-m text-muted-foreground/90 leading-relaxed border-l-4 border-purple-400/50 pl-4 py-1 bg-card/50 rounded-r-md">
            {set.why}
          </p>
        </div>
      </div>
    </div>
  );
}
