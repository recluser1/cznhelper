// components/ExpandableSetCard.tsx
import { MemoryFragmentSet } from "@/types/memory-fragments";
import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  set: MemoryFragmentSet;
  description?: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function ExpandableSetCard({
  set,
  description,
  isExpanded,
  onToggle,
}: Props) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onToggle}
        className="w-full text-left group transition-all duration-300"
      >
        <div className="rounded-lg overflow-hidden border-2 border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
          <div className="flex items-center gap-5 p-5">
            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-border/50">
              <img
                src={set.icon}
                alt={set.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground text-lg">{set.name}</h3>
                <div className="ml-3 transition-transform group-hover:rotate-180">
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-purple-400" />
                  )}
                </div>
              </div>
              <p 
                className="text-sm text-muted-foreground mt-1"
                dangerouslySetInnerHTML={{ __html: set.effect }}
              />
            </div>
          </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-1 pb-1">
          <p className="text-m text-muted-foreground/90 leading-relaxed border-l-4 border-purple-400/50 pl-4 py-1 bg-card/50 rounded-r-md">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
