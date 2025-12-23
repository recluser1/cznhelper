import { MemoryFragmentSubstatLabels } from "@/constants/character-guides";
import { MemoryFragmentSubstatPriorities } from "@/types/character-guides";
import React from "react";

type Props = {
  substatsPriorities?: MemoryFragmentSubstatPriorities[];
};
export const SubstatsPriorityRender = (props: Props) => {
  const { substatsPriorities } = props;
  if (!substatsPriorities || substatsPriorities.length === 0) {
    return null;
  }

  const sortedTiers = [...substatsPriorities].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {sortedTiers.map((tier, tierIndex) => (
        <React.Fragment key={tier.priority}>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {tier.stats.map((stat, statIndex) => (
              <React.Fragment key={stat}>
                {statIndex > 0 && (
                  <span className="text-gray-400">
                    {tier.relation === "equal" ? "=" : "or"}
                  </span>
                )}
                {tier.priority === 1 ? (
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-xs sm:text-sm font-semibold text-purple-300">
                    {
                      MemoryFragmentSubstatLabels.find(
                        (label) => label.value === stat
                      )?.label
                    }
                  </div>
                ) : (
                  <div className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-muted/70 border border-border text-xs sm:text-sm text-muted-foreground">
                    {
                      MemoryFragmentSubstatLabels.find(
                        (label) => label.value === stat
                      )?.label
                    }
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {tierIndex < sortedTiers.length - 1 && (
            <span className="text-gray-400">&gt;</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
