// app/guides/[character]/page.tsx
"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import type { CharacterData } from "@/types/character-guides";

import { defaultSections } from "@/constants/character-guides";

import { BaseCard } from "@/containers/character-guides/base-cards/BaseCard";
import { EquipmentSection } from "@/containers/character-guides/equipments";
import { MemoryFragmentsSection } from "@/containers/character-guides/memory-fragments";
import { PartnersSection } from "@/containers/character-guides/partners";
import { RecommendedSaveData } from "@/containers/character-guides/recommended-save-data";

/* ---------- allowed characters list (inline for now) ---------- */
const characters = [
  "rin", "meilin", "yuki", "sereniel", "haru",
  "owen", "khalipe", "magna", "amir", "maribell",
  "veronica", "hugo", "selena", "beryl", "luke",
  "renoa", "lucas", "kayron", "tressa", "chizuru",
  "orlea", "mika", "nia", "cassius", "rei",
];

/* ---------- small UI bits ---------- */
function Loading({ name }: { name: string }) {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="animate-pulse text-gray-400">Loading {name} data...</div>
    </div>
  );
}

function ErrorMessage({ children }: { children: React.ReactNode }) {
  return <div className="text-center py-12 text-gray-400">{children}</div>;
}

/* ---------- loader hook ---------- */
function useCharacterLoader(slug: string | null) {
  const [data, setData] = useState<CharacterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    if (!characters.includes(slug)) {
      // Let Next handle the 404 route
      notFound();
      return;
    }

    let mounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const module = await import(`@/data/characters/${slug}`);

        // Support a few export shapes
        const maybeData =
          module?.default ?? module?.[`${slug}Data`] ?? module?.[slug] ?? null;

        if (!maybeData) throw new Error("No exported character data found");

        if (mounted) setData(maybeData as CharacterData);
      } catch (err) {
        console.error(`Failed to load data for character: ${slug}`, err);
        if (mounted) setError("Failed to load character data. Please try again later.");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [slug]);

  return { data, loading, error };
}

/* ---------- helper ---------- */
function formatCharacterName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ---------- page component ---------- */
export default function CharacterGuidePage() {
  const params = useParams();
  const character = (params?.character as string) ?? null;

  const { data: characterData, loading, error } = useCharacterLoader(character);

  const characterName = useMemo(
    () => (character ? formatCharacterName(character) : "Character"),
    [character]
  );

  if (loading) return <Loading name={characterName} />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!characterData) return <ErrorMessage>Character not found.</ErrorMessage>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6">
        <h1 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {characterName} Guide
        </h1>
      </div>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-4 rounded-lg border border-border bg-card p-4">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-1.5">
                {defaultSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`text-sm text-muted-foreground hover:text-purple-400 transition-colors block py-1 ${section.level === 2 ? "pl-4" : ""
                        }`}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              {/* Full Character Artwork */}
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-purple-900/20 to-black/40 flex items-center justify-center">
                <img
                  src={`/images/characters/${character}.webp`}
                  alt={`${characterName} full artwork`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Guide Content Sections */}
              <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
                {/* Base Cards */}
                <BaseCard
                  uniqueCards={characterData.uniqueCards || []}
                  attribute={characterData.attribute}
                />

                {/* Recommended Save Data */}
                <RecommendedSaveData
                  recommendedSaveData={characterData.recommendedSaveData || []}
                  uniqueCards={characterData.uniqueCards || []}
                  commonCards={characterData.commonCards || []}
                  attribute={characterData.attribute}
                />

                {/* Equipments */}
                {characterData.gears && (
                  <EquipmentSection
                    gears={characterData.gears}
                    recommendedSources={characterData.recommendedSources}
                  />
                )}

                {/* Memory Fragments */}
                {characterData.memoryFragmentSets && (
                  <MemoryFragmentsSection
                    bestInSlot={characterData.memoryFragmentSets?.bestInSlot}
                    alternative={characterData.memoryFragmentSets?.alternative}
                    memoryFragmentMainStats={characterData.memoryFragmentMainStats}
                    memoryFragmentSubstatsNote={characterData.memoryFragmentSubstatsNote}
                    memoryFragmentSubstatsPriorities={characterData.memoryFragmentSubstatPriorities}
                  />
                )}

                {/* Partners */}
                {characterData.partnersGuide && (
                  <PartnersSection partnersGuide={characterData.partnersGuide} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
