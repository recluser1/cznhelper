import type { ReactElement } from "react";

import { useState } from "react";

import ExpandableSetCard from "@/components/ui/ExpandableSetCard";

type CardSet = {
  name: string;
  effect: string;
  icon: string;
  why: string;
};

const MemoryFragments = ({
  bisCardSets,
  secondaryCardSets,
  mainStats,
  priorityChain,
  explanation,
}: {
  bisCardSets: Array<CardSet>;
  secondaryCardSets?: Array<CardSet>;
  mainStats: ReactElement;
  priorityChain: ReactElement;
  explanation: ReactElement;
}) => {
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(
    null
  );

  const handleToggle = (tier: "bis" | "secondary", setName: string) => () => {
    const memorySet = `${setName}${tier}`;
    setExpandedMemorySet((prevState) =>
      prevState === memorySet ? null : memorySet
    );
  };

  return (
    <section
      id="memory-fragments"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">
        4. Memory Fragments
      </h2>
      <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto"></p>

      {/* BEST IN SLOT */}
      <div className="space-y-8 sm:space-y-12">
        <div>
          <div className="text-center mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm">
              Best in Slot
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {bisCardSets.map((set) => (
              <ExpandableSetCard
                key={set.name + "bis"}
                set={set}
                tier="bis"
                isExpanded={expandedMemorySet === set.name + "bis"}
                onToggle={handleToggle("bis", set.name)}
              />
            ))}
          </div>
        </div>

        {/* SECONDARY */}
        {secondaryCardSets?.length ? (
          <div>
            <div className="text-center mb-4 sm:mb-6">
              <span className="inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                Alternative
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {secondaryCardSets.map((set) => (
                <ExpandableSetCard
                  key={set.name + "secondary"}
                  set={set}
                  tier="secondary"
                  isExpanded={expandedMemorySet === set.name + "secondary"}
                  onToggle={handleToggle("secondary", set.name)}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* Main Stats + Substat Priority */}
      <div className="mt-8 sm:mt-10 space-y-8">
        {/* Main Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {mainStats}
        </div>

        {/* Substat Priority */}
        <div className="mt-8 text-center">
          {/* Priority Chain */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {priorityChain}
          </div>

          {/* Explanation */}
          <div className="mt-6 mx-auto max-w-3xl">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-center px-4">
              {explanation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MemoryFragments };
