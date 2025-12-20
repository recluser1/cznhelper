const MemoryFragmentsPriorityChain = () => {
  return (
    <>
      <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-xs sm:text-sm font-semibold text-purple-300">
        Critical Rate
      </div>
      <span className="text-xl sm:text-2xl text-muted-foreground/40">=</span>
      <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-purple-500/20 border border-purple-500/50 text-xs sm:text-sm font-semibold text-purple-300">
        Critical Damage
      </div>
      <span className="text-xl sm:text-2xl text-muted-foreground/40">›</span>
      <div className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-muted/70 border border-border text-xs sm:text-sm text-muted-foreground">
        Attack +
      </div>
      <span className="text-muted-foreground/60 text-lg sm:text-xl">›</span>
      <div className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-muted/70 border border-border text-xs sm:text-sm text-muted-foreground">
        Attack %
      </div>
    </>
  );
};

const MemoryFragmentsMainStats = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-purple-400">IV</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
          Ideal
        </div>
        <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
          Critical Rate
        </div>
      </div>

      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-purple-400">V</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
          Desire
        </div>
        <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
          Void Damage
        </div>
      </div>

      <div className="text-center">
        <div className="text-2xl sm:text-3xl font-bold text-purple-400">IV</div>
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 sm:mb-2">
          Ideal
        </div>
        <div className="py-2 px-3 rounded bg-purple-500/10 border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300">
          Attack %
        </div>
      </div>
    </>
  );
};

export { MemoryFragmentsMainStats, MemoryFragmentsPriorityChain };
