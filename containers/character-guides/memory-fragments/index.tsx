import {
  MemoryFragmentMainStats,
  MemoryFragmentSet,
  RecommendingFragmentSet,
} from "@/types/memory-fragments";
import { useMemo, useState } from "react";
import { MemoryFragmentSetsData } from "@/data/memory-fragments";
import ExpandableSetCard from "@/components/ui/ExpandableSetCard";
import { MemoryFragmentMainStatLabels } from "@/constants/character-guides";
import { SubstatsPriorityRender } from "./SubstatsPriorityRender";
import { MemoryFragmentSubstatPriorities } from "@/types/character-guides";

type Props = {
  bestInSlot?: RecommendingFragmentSet[];
  alternative?: RecommendingFragmentSet[];
  memoryFragmentMainStats?: MemoryFragmentMainStats[];
  memoryFragmentSubstatsNote?: string;
  memoryFragmentSubstatsPriorities?: MemoryFragmentSubstatPriorities[];
};

export const MemoryFragmentsSection = ({
  bestInSlot,
  alternative,
  memoryFragmentMainStats,
  memoryFragmentSubstatsNote,
  memoryFragmentSubstatsPriorities,
}: Props) => {
  const [expandedMemorySet, setExpandedMemorySet] = useState<string | null>(
    null
  );

  const setsMap = useMemo<Record<string, MemoryFragmentSet>>(() => {
    return Object.fromEntries(
      MemoryFragmentSetsData.map((s) => [s.id, s])
    ) as Record<string, MemoryFragmentSet>;
  }, []);

  const { bestInSlotSets, alternativeSets } = useMemo(() => {
    const best =
      bestInSlot
        ?.map((ms) => {
          const set = setsMap[ms.id];
          return set ? { set, note: ms.description } : null;
        })
        .filter(Boolean) ?? [];

    const alt =
      alternative
        ?.map((ms) => {
          const set = setsMap[ms.id];
          return set ? { set, note: ms.description } : null;
        })
        .filter(Boolean) ?? [];

    return {
      bestInSlotSets: best as { set: MemoryFragmentSet; note?: string }[],
      alternativeSets: alt as { set: MemoryFragmentSet; note?: string }[],
    };
  }, [bestInSlot, alternative, setsMap]);

  const getMainStatLabel = (index: number) =>
    MemoryFragmentMainStatLabels.find(
      (s) => s.value === memoryFragmentMainStats?.[index]
    )?.label ?? "N/A";

  return (
    <section
      id="memory-fragments"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-purple-400 text-center">
        3. Memory Fragments
      </h2>

      <div className="space-y-8 sm:space-y-12">
        {/* BEST IN SLOT */}
        <div>
          <div className="text-center mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-sm">
              Best in Slot
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {bestInSlotSets.map(({ set, note }) => (
              <ExpandableSetCard
                key={`${set.id}-best`}
                set={set}
                description={note}
                isExpanded={expandedMemorySet === `${set.id}-best`}
                onToggle={() =>
                  setExpandedMemorySet(
                    expandedMemorySet === `${set.id}-best` ? null : `${set.id}-best`
                  )
                }
              />
            ))}
          </div>
        </div>

        {/* ALTERNATIVE */}
        <div>
          <div className="text-center mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              Alternative
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {alternativeSets.map(({ set, note }) => (
              <ExpandableSetCard
                key={`${set.id}-alt`}
                set={set}
                description={note}
                isExpanded={expandedMemorySet === `${set.id}-alt`}
                onToggle={() =>
                  setExpandedMemorySet(
                    expandedMemorySet === `${set.id}-alt` ? null : `${set.id}-alt`
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
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">IV</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Ideal</div>
            <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
              {getMainStatLabel(0)}
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">V</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Desire</div>
            <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
              {getMainStatLabel(1)}
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-purple-400">IV</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">Ideal</div>
            <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
              {getMainStatLabel(2)}
            </div>
          </div>
        </div>

        {/* Substat Priority */}
        <div className="mt-8 text-center">
          <SubstatsPriorityRender substatsPriorities={memoryFragmentSubstatsPriorities} />

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
