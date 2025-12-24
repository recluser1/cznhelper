"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  CharacterData,
  Section,
  GuideSections,
} from "@/types/character-guides";
import { BaseCard } from "@/containers/character-guides/base-cards/BaseCard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { defaultSections } from "@/constants/character-guides";
import { RecommendedSaveData } from "@/containers/character-guides/recommended-save-data";
import { EquipmentSection } from "@/containers/character-guides/equipments";
import { MemoryFragmentsSection } from "@/containers/character-guides/memory-fragments";
import { PartnersSection } from "@/containers/character-guides/partners";

const characters = [
  "rin",
  "meilin",
  "yuki",
  "sereniel",
  "haru",
  "owen",
  "khalipe",
  "magna",
  "amir",
  "maribell",
  "veronica",
  "hugo",
  "selena",
  "beryl",
  "luke",
  "renoa",
  "lucas",
  "kayron",
  "tressa",
  "chizuru",
  "orlea",
  "mika",
  "nia",
  "cassius",
  "rei",
];

export default function CharacterGuidePage() {
  const params = useParams();
  const character = params.character as string;

  const [characterData, setCharacterData] = useState<CharacterData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!characters.includes(character)) {
      notFound();
    }

    // Dynamically import character data
    const loadData = async () => {
      try {
        const module = await import(`@/data/characters/${character}`);
        const data = module[`${character}Data`] as CharacterData;
        setCharacterData(data);
      } catch (error) {
        console.error(`Failed to load data for character: ${character}`, error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [character]);

  const characterName = character
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {characterName} Guide
              </h1>
            </div>
            <Link
              href="/guides"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Characters</span>
            </Link>
          </div>
        </div>
      </header>

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
                <BaseCard uniqueCards={characterData?.uniqueCards || []} attribute={characterData?.attribute} />
                {/* Recommended Save Data */}
                <RecommendedSaveData
                  recommendedSaveData={characterData?.recommendedSaveData || []}
                  uniqueCards={characterData?.uniqueCards || []}
                  commonCards={characterData?.commonCards || []}
                  attribute={characterData?.attribute}
                />
                {/* Equipments */}
                {characterData?.gears && (
                  <EquipmentSection
                    gears={characterData.gears}
                    recommendedSources={characterData.recommendedSources}
                  />
                )}
                {/* Memory Fragments */}
                {characterData?.memoryFragmentSets && (
                  <MemoryFragmentsSection
                    bestInSlot={characterData.memoryFragmentSets?.bestInSlot}
                    alternative={characterData.memoryFragmentSets?.alternative}
                    memoryFragmentMainStats={
                      characterData.memoryFragmentMainStats
                    }
                    memoryFragmentSubstatsNote={
                      characterData.memoryFragmentSubstatsNote
                    }
                    memoryFragmentSubstatsPriorities={
                      characterData.memoryFragmentSubstatPriorities
                    }
                  />
                )}
                {/* Partners */}
                {characterData?.partnersGuide && (
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
