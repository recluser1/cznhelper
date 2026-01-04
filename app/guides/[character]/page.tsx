// app/guides/[character]/page.tsx
"use client";

import { notFound, useParams } from "next/navigation";
import { createContext, useEffect, useMemo, useState } from "react";
import { Star, Zap, Shield } from "lucide-react";
import { BaseCard } from "@/containers/character-guides/base-cards/BaseCard";
import { EquipmentSection } from "@/containers/character-guides/equipments";
import { MemoryFragmentsSection } from "@/containers/character-guides/memory-fragments";
import { PartnersSection } from "@/containers/character-guides/partners";
import { RecommendedSaveData } from "@/containers/character-guides/recommended-save-data";
import { ATTRIBUTE_COLORS, AttributeColorsType } from "@/lib/attribute-colors";

import type { CharacterData } from "@/types/character-guides";

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

export const ThemeContext = createContext<AttributeColorsType | undefined>(
  ATTRIBUTE_COLORS.Passion
);

function useCharacterLoader(slug: string | null) {
  const [data, setData] = useState<CharacterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug || !characters.includes(slug)) {
      notFound();
      return;
    }

    let mounted = true;

    const load = async () => {
      setLoading(true);
      try {
        const module = await import(`@/data/characters/${slug}`);
        const maybeData =
          module?.default ?? module?.[`${slug}Data`] ?? module?.[slug];
        if (!maybeData) throw new Error("No data");
        if (mounted) setData(maybeData as CharacterData);
      } catch (err) {
        console.error(err);
        if (mounted) setError("Failed to load data");
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

function formatCharacterName(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function CharacterGuidePage() {
  const params = useParams();
  const characterSlug = params?.character as string;
  const {
    data: characterData,
    loading,
    error,
  } = useCharacterLoader(characterSlug);

  const colors = useMemo(() => {
    if (!characterData?.attribute) return;
    const attr = ATTRIBUTE_COLORS[characterData.attribute];
    return {
      bg: attr.bg,
      border: attr.border,
      text: attr.text,
      textGradient: attr.textGradient,
      hover: attr.hover,
      gradientFrom: attr.gradientFrom,
      gradientTo: attr.gradientTo,
      accent: attr.accent,
      accentLight: attr.accentLight,
      shadow: attr.shadow,
    };
  }, [characterData?.attribute]);

  const [activeSection, setActiveSection] = useState("overview");

  const characterName = useMemo(
    () => formatCharacterName(characterSlug),
    [characterSlug]
  );
  const attribute = characterData?.attribute;
  const characterClass = characterData?.job;
  const role = characterData?.role;

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Loading {characterName}...
      </div>
    );

  if (error || !characterData)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Character not found.
      </div>
    );

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "card", label: "Card Epiphany" },
    { id: "savedata", label: "Save Data" },
    { id: "memory", label: "Memory Fragment" },
    { id: "partner", label: "Partner" },
    { id: "ego", label: "Manifest Ego" },
    { id: "credits", label: "Credits" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-8">
            {/* Character Header Card */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/70 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Portrait */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                    <img
                      src={`/images/characters/${characterSlug}portrait.webp`}
                      alt={`${characterName} portrait`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
                    {characterName.toUpperCase()}
                  </h1>

                  <div className="flex justify-center md:justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="text-gray-500 mb-1">Attribute</div>
                      <div className={`font-semibold ${colors?.text}`}>
                        {attribute
                          ? attribute.charAt(0).toUpperCase() +
                            attribute.slice(1)
                          : "Unknown"}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Class</div>
                      <div className="text-gray-200 font-medium">
                        {characterClass || "—"}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Role</div>
                      <div className="text-gray-200 font-medium">
                        {role || "—"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Text */}
            <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-6 md:p-8">
              <h3 className={`text-xl font-bold mb-4 ${colors?.text}`}>
                Overview
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {characterData.overview || "Detailed guide coming soon..."}
              </p>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-6 md:p-8">
                <h4 className="flex items-center gap-3 text-xl font-bold text-emerald-400 mb-5">
                  <Zap className="w-6 h-6" />
                  Strengths
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {(characterData.strengths || ["TBA", "TBA", "TBA"]).map(
                    (s, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{s}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-6 md:p-8">
                <h4 className="flex items-center gap-3 text-xl font-bold text-rose-400 mb-5">
                  <Shield className="w-6 h-6" />
                  Weaknesses
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {(characterData.weaknesses || ["TBA", "TBA", "TBA"]).map(
                    (w, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-rose-400 mt-1">•</span>
                        <span>{w}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        );

      case "card":
        return (
          <BaseCard
            uniqueCards={characterData.uniqueCards || []}
            attribute={characterData.attribute}
          />
        );

      case "savedata":
        return (
          <div className="space-y-10">
            <RecommendedSaveData
              recommendedSaveData={characterData.recommendedSaveData || []}
              uniqueCards={characterData.uniqueCards || []}
              commonCards={characterData.commonCards || []}
              attribute={characterData.attribute}
            />
            {characterData.gears && (
              <EquipmentSection
                gears={characterData.gears}
                recommendedSources={characterData.recommendedSources}
              />
            )}
          </div>
        );

      case "memory":
        return characterData?.memoryFragmentSets ? (
          <MemoryFragmentsSection
            bestInSlot={characterData.memoryFragmentSets.bestInSlot}
            alternative={characterData.memoryFragmentSets.alternative}
            memoryFragmentMainStats={characterData.memoryFragmentMainStats}
            memoryFragmentSubstatsNote={
              characterData.memoryFragmentSubstatsNote
            }
            memoryFragmentSubstatsPriorities={
              characterData.memoryFragmentSubstatPriorities
            }
          />
        ) : (
          <div className="text-center py-12 text-gray-500">
            Memory Fragment guide coming soon...
          </div>
        );

      case "partner":
        return characterData?.partnersGuide ? (
          <PartnersSection partnersGuide={characterData.partnersGuide} />
        ) : (
          <div className="text-center py-12 text-gray-500">
            Partner guide coming soon...
          </div>
        );

      case "ego":
        return (
          <div className="text-center py-12 text-gray-500">
            Manifest Ego guide coming soon...
          </div>
        );
      case "credits":
        return (
          <div className="space-y-8">
            {characterData.externalResources && (
              <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  External Resources
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {characterData.externalResources.map((res, i) => (
                    <li key={i}>
                      {res.url ? (
                        <a
                          href={res.url}
                          target="_blank"
                          className="text-sky-400 hover:underline"
                        >
                          {res.label}
                        </a>
                      ) : (
                        <span className="text-gray-200">{res.label}</span>
                      )}
                      {res.note && (
                        <div className="text-sm text-gray-500">{res.note}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {characterData.credits && (
              <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-6">
                <h3 className="text-xl font-bold text-gray-200 mb-4">
                  Credits
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {characterData.credits.map((c, i) => (
                    <li key={i}>
                      <span className="font-semibold text-gray-100">
                        {c.link ? (
                          <a
                            href={c.link}
                            target="_blank"
                            className="hover:underline"
                          >
                            {c.name}
                          </a>
                        ) : (
                          c.name
                        )}
                      </span>
                      <span className="text-gray-500"> — {c.contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-100 -mt-25">
      <ThemeContext.Provider value={colors}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-500">
            <a href="/guides" className="hover:text-gray-300 transition-colors">
              Guides
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-400">{characterName}</span>
          </div>

          {/* Page Title */}
          <h1
            className={`text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r ${colors?.textGradient} via-white bg-clip-text text-transparent`}
          >
            {characterName.toUpperCase()}
          </h1>

          {/* Tabs */}
          <div className="mb-10">
            {/* Mobile Dropdown */}
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="md:hidden w-full bg-gray-900/70 border border-gray-800 rounded-xl px-5 py-4 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>

            {/* Desktop Tabs */}
            <div className="hidden md:flex gap-1 border-b border-gray-800">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`
                  px-6 py-4 font-medium transition-all duration-200
                  ${
                    activeSection === tab.id
                      ? `${colors?.text} border-b-2 ${colors?.border}`
                      : "text-gray-500 hover:text-gray-300"
                  }
                `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-in fade-in duration-500">
            {renderContent()}
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}
