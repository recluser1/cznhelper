// app/guides/[character]/page.tsx
"use client";

import { notFound, useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Star, Zap, Shield } from "lucide-react";
import { BaseCard } from "@/containers/character-guides/base-cards/BaseCard";
import { EquipmentSection } from "@/containers/character-guides/equipments";
import { MemoryFragmentsSection } from "@/containers/character-guides/memory-fragments";
import { PartnersSection } from "@/containers/character-guides/partners";
import { RecommendedSaveData } from "@/containers/character-guides/recommended-save-data";

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
      <div className="flex items-center justify-center min-h-screen text-gray-400 px-4">
        Loading {characterName}...
      </div>
    );
  if (error || !characterData)
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 px-4">
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
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Character Header */}
            <div className="bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-pink-500/10 rounded-lg p-4 sm:p-6 border border-sky-400/30">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg bg-gradient-to-br from-sky-400/20 to-purple-500/20 border border-sky-300/40 flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-sky-300/60">
                      {characterName.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {characterName.toUpperCase()}
                  </h3>
                  <div className="flex gap-0.5 mt-2 justify-center sm:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-sky-300 text-sky-300"
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-sm mt-4">
                    <div>
                      <div className="text-gray-400 mb-1">Attribute Type</div>
                      <div className="text-sky-300 font-medium">
                        {attribute
                          ? attribute.charAt(0).toUpperCase() +
                            attribute.slice(1).toLowerCase()
                          : "None"}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Class</div>
                      <div className="text-gray-200">
                        {characterClass ?? "None"}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Role</div>
                      <div className="text-gray-200">{role ?? "None"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overview Text */}
            <div className="bg-slate-800/40 rounded-lg p-4 sm:p-6 border border-slate-700/50">
              <h4 className="text-base sm:text-lg mb-3 text-sky-300">
                Overview
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-line">
                {characterData?.overview || "Detailed guide coming soon..."}
              </p>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Strengths */}
              <div className="bg-slate-800/40 rounded-lg p-4 sm:p-5 border border-slate-700/50">
                <h5 className="flex items-center gap-2 mb-3 sm:mb-4 text-emerald-400 text-base sm:text-lg">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Strengths
                </h5>
                <ul className="space-y-2 sm:space-y-2.5 text-sm text-gray-400">
                  {(characterData?.strengths || ["TBA", "TBA", "TBA"]).map(
                    (s, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{s}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-slate-800/40 rounded-lg p-4 sm:p-5 border border-slate-700/50">
                <h5 className="flex items-center gap-2 mb-3 sm:mb-4 text-rose-400 text-base sm:text-lg">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                  Weaknesses
                </h5>
                <ul className="space-y-2 sm:space-y-2.5 text-sm text-gray-400">
                  {(characterData?.weaknesses || ["TBA", "TBA", "TBA"]).map(
                    (w, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-rose-400 mt-0.5">•</span>
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
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-sky-300">Card Epiphany</h3>
            <BaseCard
              uniqueCards={characterData?.uniqueCards || []}
              attribute={characterData?.attribute || "None"}
            />
          </div>
        );

      case "savedata":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-sky-300">Save Data</h3>
            <div className="bg-slate-800/40 rounded-lg p-6 sm:p-8 border border-slate-700/50 text-center">
              <p className="text-gray-500">Save Data guide coming soon...</p>
              <p className="text-sm text-gray-600 mt-2">
                This section will contain detailed information about Recommended
                Save Data and Equipment for {characterName}.
              </p>
            </div>
            {/* <RecommendedSaveData
              recommendedSaveData={characterData?.recommendedSaveData || []}
              uniqueCards={characterData?.uniqueCards || []}
              commonCards={characterData?.commonCards || []}
              attribute={characterData?.attribute || "Instinct"}
            />
            {characterData?.gears && (
              <EquipmentSection
                gears={characterData?.gears}
                recommendedSources={characterData?.recommendedSources}
              />
            )} */}
          </div>
        );

      case "memory":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-sky-300">
              Memory Fragment
            </h3>
            <div className="bg-slate-800/40 rounded-lg p-6 sm:p-8 border border-slate-700/50 text-center">
              <p className="text-gray-500">
                Memory Fragment guide coming soon...
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This section will contain detailed information about which
                Memory Fragments to use on {characterName}.
              </p>
            </div>
            {/* {characterData?.memoryFragmentSets && (
              <MemoryFragmentsSection
                bestInSlot={characterData.memoryFragmentSets?.bestInSlot}
                alternative={characterData.memoryFragmentSets?.alternative}
                memoryFragmentMainStats={characterData.memoryFragmentMainStats}
                memoryFragmentSubstatsNote={
                  characterData.memoryFragmentSubstatsNote
                }
                memoryFragmentSubstatsPriorities={
                  characterData.memoryFragmentSubstatPriorities
                }
              />
            )} */}
          </div>
        );

      case "partner":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-sky-300">Partner</h3>
            <div className="bg-slate-800/40 rounded-lg p-6 sm:p-8 border border-slate-700/50 text-center">
              <p className="text-gray-500">Partner guide coming soon...</p>
              <p className="text-sm text-gray-600 mt-2">
                This section will contain detailed information about optimal
                partners for {characterName}.
              </p>
            </div>
            {/* {characterData?.partnersGuide && (
              <PartnersSection partnersGuide={characterData.partnersGuide} />
            )} */}
          </div>
        );

      case "ego":
        return (
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl text-sky-300">Manifest Ego</h3>
            <div className="bg-slate-800/40 rounded-lg p-6 sm:p-8 border border-slate-700/50 text-center">
              <p className="text-gray-500">Manifest Ego guide coming soon...</p>
              <p className="text-sm text-gray-600 mt-2">
                This section will contain detailed information about Manifest
                Egos for {characterName}.
              </p>
            </div>
            {/* {characterData?.manifestEgoGuide && (
              <ManifestEgoSection manifestEgoGuide={characterData.manifestEgoGuide} />
            )} */}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-100 -mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumb */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2 text-xs sm:text-sm text-gray-500">
          <a href="/guides" className="hover:text-sky-300 transition-colors">
            Guides
          </a>
          <span>/</span>
          <span className="text-gray-400 truncate">{characterName}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-bold">
          {characterName.toUpperCase()}
        </h2>

        {/* Tabs - Dropdown on mobile, tabs on desktop */}
        <div className="mb-4 sm:mb-6">
          {/* Mobile Dropdown */}
          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
              className="w-full bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-3 text-gray-200 font-medium focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400"
            >
              {tabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block border-b border-slate-800">
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-6 py-3 transition-colors whitespace-nowrap border-b-2 font-medium ${
                    activeSection === tab.id
                      ? "border-sky-400 text-sky-300"
                      : "border-transparent text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-6 sm:mb-8">{renderContent()}</div>
      </div>
    </div>
  );
}
