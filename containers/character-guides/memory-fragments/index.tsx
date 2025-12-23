import {
  MemoryFragmentMainStats,
  MemoryFragmentSet,
  recommendingFragmentSet,
} from "@/types/memory-fragments";
import { useMemo, useState } from "react";
import { MemoryFragmentSetData } from "@/data/memory-fragments";
import ExpandableSetCard from "@/components/ui/ExpandableSetCard";
import { MemoryFragmentMainStatLabels } from "@/constants/character-guides";
import { SubstatsPriorityRender } from "./SubstatsPriorityRender";
import { MemoryFragmentSubstatPriorities } from "@/types/character-guides";
type Props = {
  bestInSlot?: recommendingFragmentSet[];
  alternative?: recommendingFragmentSet[];
  memoryFragmentMainStats?: MemoryFragmentMainStats[];
  memoryFragmentSubstatsNote?: string;
  memoryFragmentSubstatsPriorities?: MemoryFragmentSubstatPriorities[];
};
export const MemoryFragmentsSection = (props: Props) => {
  const {
    bestInSlot,
    alternative,
    memoryFragmentMainStats,
    memoryFragmentSubstatsNote,
    memoryFragmentSubstatsPriorities,
  } = props;
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(
    null
  );

  const { bestInSlotSets, alternativeSets } = useMemo(() => {
    return {
      bestInSlotSets: MemoryFragmentSetData.filter((set) =>
        bestInSlot?.some((ms) => ms.id === set.id)
      ),
      alternativeSets: MemoryFragmentSetData.filter((set) =>
        alternative?.some((ms) => ms.id === set.id)
      ),
    };
  }, [bestInSlot, alternative]);

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
            {bestInSlotSets.map((set) => (
              <ExpandableSetCard
                key={set.name + "bis"}
                set={set}
                description={
                  bestInSlot?.find((ms) => ms.id === set.id)?.description
                }
                isExpanded={expandedMemorySet === set.name + "bis"}
                onToggle={() =>
                  setExpandedMemorySet(
                    expandedMemorySet === set.name + "bis"
                      ? null
                      : set.name + "bis"
                  )
                }
              />
            ))}
          </div>
        </div>

        {/* SECONDARY */}
        <div>
          <div className="text-center mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              Alternative
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {alternativeSets.map((set) => (
              <ExpandableSetCard
                key={set.name + "secondary"}
                set={set}
                description={
                  alternative?.find((ms) => ms.id === set.id)?.description
                }
                isExpanded={expandedMemorySet === set.name + "secondary"}
                onToggle={() =>
                  setExpandedMemorySet(
                    expandedMemorySet === set.name + "secondary"
                      ? null
                      : set.name + "secondary"
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Stats + Substat Priority */}
      <div className="mt-8 sm:mt-10 space-y-8">
        {/* Main Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">
              IV
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
              Ideal
            </div>
            <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
              {MemoryFragmentMainStatLabels.find(
                (stat) => stat.value === memoryFragmentMainStats?.[0]
              )?.label || "N/A"}
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">
              V
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
              Desire
            </div>
            <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
              {MemoryFragmentMainStatLabels.find(
                (stat) => stat.value === memoryFragmentMainStats?.[1]
              )?.label || "N/A"}
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">
              IV
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
              Ideal
            </div>
            <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
              {MemoryFragmentMainStatLabels.find(
                (stat) => stat.value === memoryFragmentMainStats?.[2]
              )?.label || "N/A"}
            </div>
          </div>
        </div>

        {/* Substat Priority */}
        <div className="mt-8 text-center">
          {/* Priority Chain */}
          <SubstatsPriorityRender substatsPriorities={memoryFragmentSubstatsPriorities} />

          {/* Explanation */}
          <div className="mt-6 mx-auto max-w-3xl">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground text-center px-4">
              {memoryFragmentSubstatsNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
