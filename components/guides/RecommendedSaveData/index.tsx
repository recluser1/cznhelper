import type { RecommendedDecks } from "@/@types";

import { DeckRow } from "./components/DeckRow";

const RecommendedSaveData = ({
  recommendedDecks,
}: {
  recommendedDecks: RecommendedDecks;
}) => {
  return (
    <section
      id="recommended-save-data"
      className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">
        3. Recommended Save Data
      </h2>
      <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
        These are example deck builds. You can adjust based on your playstyle
        and available cards.
      </p>

      <div className="space-y-12 sm:space-y-16">
        {/* Build 1 */}
        <div className="space-y-5">
          <div className="text-center space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-purple-300">
              Tsukuyomi & Oni Hunt Mixed Build
            </h3>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold leading-tight whitespace-normal break-words max-w-full">
              [140 Faint Memory Cost without Convert Method]
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-4">
            Optimal Ratio is 3 Tsukuyomi and 2 Oni Hunt
            <br />
            2:3 Oni Hunt is also fine, 4 of one or the other is bad
            <br />
            Oni Hunt II or Oni Hunt V are also an option with{" "}
            <strong>Orlea</strong>
          </p>

          <DeckRow
            recommendedDecks={recommendedDecks}
            deckKey="tsukuyomi-oni-mixed"
          />
        </div>

        {/* Build 2 */}
        <div className="space-y-5">
          <div className="text-center space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-purple-300">
              Moonslash Spam
            </h3>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-400 text-xs sm:text-sm font-bold leading-tight whitespace-normal break-words max-w-full">
              [140 Faint Memory Cost without Convert Method]
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto px-4">
            Focuses on spamming low-cost Oni Hunt cards to generate Will-O'-Wisp
            quickly and trigger Moonslash frequently.
          </p>

          <DeckRow recommendedDecks={recommendedDecks} deckKey="oni4-basic" />
        </div>
      </div>
    </section>
  );
};

export { RecommendedSaveData };
