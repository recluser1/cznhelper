import type { ReactElement } from 'react';

const Overview = ({ types, artwork }: { types: ReactElement, artwork: ReactElement }) => {
  return (
    <section
      id="overview"
      className="hidden lg:block rounded-lg border border-border bg-card p-8 scroll-mt-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400">
        1. Overview {/* This can probably be moved outside of this component in case order/title ever needs to change */}
      </h2>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3 mb-4">
          {types}
        </div>

        <div className="rounded-sm bg-background/50 border border-border">
          {artwork}
        </div>
      </div>
    </section>
  );
};

export { Overview };
