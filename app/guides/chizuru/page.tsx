"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ChevronDown } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { weapons, armors, accessories, GearData } from "@/data/gear";
import { GearItem } from "@/components/GearItem";

import {
  RecommendedSaveData,
  Partners,
  Overview,
  MemoryFragments,
} from "@/components/guides";

import { sections, uniqueCards } from "../common/constants";
import {
  getRarityBackgroundImage,
  getRarityColor,
  getTierColor,
  parseDescription,
} from "../common/helpers";
import {
  bisCardSets,
  partners,
  recommendedDecks,
  secondaryCardSets,
} from "./constants";
import {
  MemoryFragmentsMainStats,
  MemoryFragmentsPriorityChain,
} from "./components/MemoryFragments";
import { CharacterArtwork, CharacterTypes } from "./components/Overview";

export default function ChizuruGuidePage() {
  const [selectedCardForEpiphanies, setSelectedCardForEpiphanies] = useState<
    (typeof uniqueCards)[0] | null
  >(null);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const chizuruWeapons = [
    weapons.find((g) => g.name === "Intellect of Discord"),
    weapons.find((g) => g.name === "Tentacles of Chaos"),
    weapons.find((g) => g.name === "Foggy Crystal Ball"),
    weapons.find((g) => g.name === "Mutant Predator Spike"),
    weapons.find((g) => g.name === "Dagger That Tricked the Shadow"),
    weapons.find((g) => g.name === "RFS-17"),
    weapons.find((g) => g.name === "Bone Cutter"),
    weapons.find((g) => g.name === "Obsidian Sword"),
  ].filter(Boolean) as GearData[];

  const chizuruArmors = [
    armors.find((g) => g.name === "Wings of Freedom"),
    armors.find((g) => g.name === "Fairy King's Crown"),
    armors.find((g) => g.name === "Shield of the Watcher"),
    armors.find((g) => g.name === "Fragment of the Empty Void"),
    armors.find((g) => g.name === "Rocket-Adorned Cape"),
  ].filter(Boolean) as GearData[];

  const chizuruAccessories = [
    accessories.find((g) => g.name === "Emblem of an Exceptional Entity"),
    accessories.find((g) => g.name === "Eye of the Eyeless"),
    accessories.find((g) => g.name === "Clover of the Forest"),
    accessories.find((g) => g.name === "Verdant Shackles"),
    accessories.find((g) => g.name === "Dimensional Cube"),
    accessories.find((g) => g.name === "Nerve Hacking Module"),
    accessories.find((g) => g.name === "Amorphous Cube"),
  ].filter(Boolean) as GearData[];

  const toggleSource = (source: string) => {
    setSelectedSources((prev) =>
      prev.includes(source)
        ? prev.filter((s) => s !== source)
        : [...prev, source]
    );
  };

  const filteredWeapons = useMemo(() => {
    if (selectedSources.length === 0) {
      return chizuruWeapons;
    }

    return chizuruWeapons.filter((gear) => {
      if (Array.isArray(gear.source) && gear.source.includes("Other")) {
        return true;
      }

      if (Array.isArray(gear.source)) {
        return gear.source.some((src) => selectedSources.includes(src));
      }

      return false;
    });
  }, [selectedSources, chizuruWeapons]);

  const filteredArmors = useMemo(() => {
    if (selectedSources.length === 0) {
      return chizuruArmors;
    }

    return chizuruArmors.filter((gear) => {
      if (Array.isArray(gear.source) && gear.source.includes("Other")) {
        return true;
      }

      if (Array.isArray(gear.source)) {
        return gear.source.some((src) => selectedSources.includes(src));
      }

      return false;
    });
  }, [selectedSources, chizuruArmors]);

  const filteredAccessories = useMemo(() => {
    if (selectedSources.length === 0) {
      return chizuruAccessories;
    }

    return chizuruAccessories.filter((gear) => {
      if (Array.isArray(gear.source) && gear.source.includes("Other")) {
        return true;
      }

      if (Array.isArray(gear.source)) {
        return gear.source.some((src) => selectedSources.includes(src));
      }

      return false;
    });
  }, [selectedSources, chizuruAccessories]);

  // Only show filters relevant to Chizuru
  const uniqueSources = ["Swamp of Judgment", "Laboratory 0"];

  const sourceDisplay: Record<string, string> = {
    "Swamp of Judgment": "Swamp of Judgment",
    "Laboratory 0": "Laboratory 0",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Chizuru Guide
              </h1>
            </div>
            <Link
              href="/guides"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Characters</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block w-64 shrink-0">
            <nav className="sticky top-4 rounded-lg border border-border bg-card p-4">
              <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
              <ul className="space-y-1.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`text-sm text-muted-foreground hover:text-purple-400 transition-colors block py-1 ${
                        section.level === 2 ? "pl-4" : ""
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
          <div className="flex-1 space-y-8">
            {/* 1. Overview */}
            <Overview
              artwork={<CharacterArtwork />}
              types={<CharacterTypes />}
            />

            {/* 2. Base Cards */}
            <section
              id="base-cards"
              className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">
                2. Base Cards
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
                Click a Base Card to view the Epiphanies Tier List
              </p>

              {/* Base Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 justify-items-center">
                {uniqueCards.map((cardData) => {
                  const baseCost = cardData.epiphanies[0]?.cost ?? 0;
                  const baseType =
                    cardData.epiphanies[0]?.type ?? cardData.baseType;

                  return (
                    <Dialog
                      key={cardData.id ?? cardData.name}
                      open={selectedCardForEpiphanies?.id === cardData.id}
                      onOpenChange={(open) => {
                        if (open) setSelectedCardForEpiphanies(cardData);
                        else setSelectedCardForEpiphanies(null);
                      }}
                    >
                      <DialogTrigger asChild>
                        {/* Tile - matches Partner tile sizing and interaction */}
                        <div className="group cursor-pointer rounded-xl transition-all duration-300 hover:scale-103 hover:shadow-lg hover:shadow-purple-400/20 w-full max-w-full sm:max-w-[280px]">
                          <div className="relative rounded-lg overflow-hidden border-2 border-border hover:border-purple-400/100 transition-all duration-200 cursor-pointer">
                            {/* Void Border */}
                            <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                              <img
                                src="/images/card/void-border.png"
                                alt=""
                                className="h-full w-full object-cover"
                              />
                            </div>

                            <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                              <img
                                src={cardData.image || "/placeholder.svg"}
                                alt={cardData.name}
                                className="w-full h-full object-cover scale-108"
                              />
                            </div>

                            <div className="absolute inset-0 flex flex-col">
                              {/* Top Section */}
                              <div className="p-2 pt-1.5 pl-3">
                                <div className="flex items-start gap-1.5 relative">
                                  {/* Rarity Image */}
                                  <div
                                    className="absolute left-0 top-0 z-20 flex items-center"
                                    style={{ transform: "translateX(-18px)" }}
                                  >
                                    <img
                                      src={
                                        cardData.name === "Oni Hunt"
                                          ? "/images/card/card_rarity_legend.png"
                                          : cardData.name ===
                                            "Shadow of the Moon"
                                          ? "/images/card/card_rarity_unique.png"
                                          : "/images/card/card_rarity_rare.png"
                                      }
                                      alt=""
                                      className="h-11 sm:h-13 object-contain"
                                    />
                                  </div>

                                  {/* Cost */}
                                  <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                                    <span
                                      className="font-bold text-2xl sm:text-4xl"
                                      style={{
                                        color: "#FFFFFF",
                                        WebkitTextStroke: "1.3px #2D4CAE",
                                        textShadow: `
                                          0 0 2px #5B91FB,
                                          0 0 4px #5B91FB,
                                          0 0 6px #5B91FB,
                                          0 0 8px #5B91FB,
                                          0 0 12px #5B91FB,
                                          0 0 16px #5B91FB,
                                          -1px -1px 0 #5B91FB,
                                           1px -1px 0 #5B91FB,
                                          -1px  1px 0 #5B91FB,
                                           1px  1px 0 #5B91FB,
                                          -2px -2px 4px rgba(91, 145, 251, 0.8),
                                           2px -2px 4px rgba(91, 145, 251, 0.8),
                                          -2px  2px 4px rgba(91, 145, 251, 0.8),
                                           2px  2px 4px rgba(91, 145, 251, 0.8)
                                        `,
                                      }}
                                    >
                                      {baseCost}
                                    </span>
                                    <div
                                      className="w-full h-0.5 mt-0.5"
                                      style={{
                                        backgroundColor: "#B6C4F9",
                                        boxShadow: `
                                          0 0 2px #5B91FB,
                                          0 0 4px #5B91FB,
                                          0 0 6px #5B91FB,
                                          0 0 8px rgba(91, 145, 251, 0.6),
                                          inset 0 1px 0 rgba(255, 255, 255, 0.3)
                                        `,
                                      }}
                                    />
                                  </div>

                                  {/* Name and Type */}
                                  <div className="flex-1 pt-0.5 min-w-0">
                                    <div className="relative w-full">
                                      {/* Rarity Background - matches reference exactly */}
                                      <div
                                        className="absolute"
                                        style={{
                                          backgroundImage: `url(${getRarityBackgroundImage(
                                            cardData.name
                                          )})`,
                                          backgroundRepeat: "no-repeat",
                                          backgroundPosition: "left center",
                                          backgroundSize: "contain",
                                          left: -50,
                                          right: 0,
                                          top: 7,
                                          bottom: 0,
                                          height: "70%",
                                          width: "700%",
                                        }}
                                      />

                                      {/* Card Name */}
                                      <h5
                                        className="relative font-bold leading-tight drop-shadow-lg overflow-hidden text-ellipsis whitespace-nowrap"
                                        style={{
                                          color: getRarityColor(cardData.name),
                                          fontSize:
                                            "clamp(1.1rem, 2.8vw, 1.1rem)",
                                          padding: "4px 6px",
                                          textShadow: `
                                            -1px -1px 0 #000,
                                             1px -1px 0 #000,
                                            -1px  1px 0 #000,
                                             1px  1px 0 #000
                                          `,
                                          maxWidth: "100%",
                                        }}
                                      >
                                        {cardData.name}
                                      </h5>
                                    </div>

                                    {/* Type Icon + Text */}
                                    <div
                                      className="flex items-center gap-1 -mt-1"
                                      style={{ padding: "4px 6px" }}
                                    >
                                      <img
                                        src={
                                          baseType === "attack"
                                            ? "/images/icon-category-card-attack.webp"
                                            : baseType === "skill"
                                            ? "/images/icon-category-card-skill.webp"
                                            : "/images/icon-category-card-upgrade.webp"
                                        }
                                        alt={baseType}
                                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                      />
                                      <span
                                        className="text-white text-xs sm:text-sm font-medium capitalize drop-shadow"
                                        style={{
                                          fontSize:
                                            "clamp(0.7rem, 2vw, 0.9rem)",
                                          textShadow: `
                                            -1px -1px 0 #000,
                                             1px -1px 0 #000,
                                            -1px  1px 0 #000,
                                             1px  1px 0 #000
                                          `,
                                        }}
                                      >
                                        {baseType}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Description Section - base card (disabled spark) */}
                              {cardData.baseDescription && (
                                <div className="mt-auto py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-1">
                                  <img
                                    src="/images/card/card_frame_spark_dis.png"
                                    alt=""
                                    className="w-1/2 mb-0 drop-shadow-2xl"
                                  />
                                  {(() => {
                                    const { bracketedText, remainingText } =
                                      parseDescription(
                                        cardData.baseDescription
                                      );
                                    return (
                                      <>
                                        {bracketedText && (
                                          <p
                                            className="text-center font-medium text-xs sm:text-base leading-snug m-0"
                                            style={{ color: "#e3b46c" }}
                                          >
                                            {bracketedText}
                                          </p>
                                        )}
                                        <p
                                          className="text-white text-center text-xs sm:text-base leading-snug m-0 whitespace-pre-line px-2"
                                          dangerouslySetInnerHTML={{
                                            __html: remainingText
                                              .replace(
                                                /(\d+%?)/g,
                                                '<span style="color: #7ce2fb">$1</span>'
                                              )
                                              .replace(
                                                /Shadow of the\s*Moon\+/gi,
                                                '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'
                                              )
                                              .replace(
                                                /Moonslash/gi,
                                                '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'
                                              ),
                                          }}
                                        />
                                      </>
                                    );
                                  })()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent className="!w-[95vw] !max-w-6xl max-h-[90vh] overflow-y-auto scrollbar-none bg-gray-900/95 border border-gray-800 rounded-xl ">
                        <DialogHeader className="bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                          <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                            {cardData.name} - Epiphanies
                          </DialogTitle>
                        </DialogHeader>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div
                              key={index}
                              className="flex flex-col gap-2 sm:gap-3 w-full max-w-[280px] mx-auto"
                            >
                              <div className="flex justify-center">
                                <span
                                  className={`
                      px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                      ${getTierColor(epiphany.tier)}`}
                                >
                                  {epiphany.tier} Tier
                                </span>
                              </div>

                              {/* Epiphany Card */}
                              <div className="relative rounded-lg overflow-hidden border-1 border-border hover:border-purple-400/100 transition-all duration-200">
                                {/* Void Border */}
                                <div className="absolute left-0 -top-0.5 -bottom-0.5 w-3 z-10">
                                  <img
                                    src="/images/card/void-border.png"
                                    alt=""
                                    className="h-full w-full object-cover"
                                  />
                                </div>

                                <div className="relative aspect-[2/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden rounded-md">
                                  <img
                                    src={cardData.image || "/placeholder.svg"}
                                    alt={cardData.name}
                                    className="w-full h-full object-cover scale-108"
                                  />

                                  <div className="absolute inset-0 flex flex-col">
                                    {/* Top Section */}
                                    <div className="p-2 pt-1.5 pl-3">
                                      <div className="flex items-start gap-1.5 relative">
                                        {/* Rarity Image */}
                                        <div
                                          className="absolute left-0 top-0 z-20 flex items-center"
                                          style={{
                                            transform: "translateX(-18px)",
                                          }}
                                        >
                                          <img
                                            src={
                                              cardData.name === "Oni Hunt"
                                                ? "/images/card/card_rarity_legend.png"
                                                : cardData.name ===
                                                  "Shadow of the Moon"
                                                ? "/images/card/card_rarity_unique.png"
                                                : "/images/card/card_rarity_rare.png"
                                            }
                                            alt=""
                                            className="h-11 sm:h-11 object-contain"
                                          />
                                        </div>

                                        {/* Cost */}
                                        <div className="flex-shrink-0 flex flex-col items-center justify-center ml-3 relative z-30">
                                          <span
                                            className="font-bold text-2xl sm:text-3xl"
                                            style={{
                                              color: "#FFFFFF",
                                              WebkitTextStroke: "1.3px #2D4CAE",
                                              textShadow: `
                                      0 0 2px #5B91FB,
                                      0 0 4px #5B91FB,
                                      0 0 6px #5B91FB,
                                      0 0 8px #5B91FB,
                                      0 0 12px #5B91FB,
                                      0 0 16px #5B91FB,
                                      -1px -1px 0 #5B91FB,
                                       1px -1px 0 #5B91FB,
                                      -1px  1px 0 #5B91FB,
                                       1px  1px 0 #5B91FB,
                                      -2px -2px 4px rgba(91, 145, 251, 0.8),
                                       2px -2px 4px rgba(91, 145, 251, 0.8),
                                      -2px  2px 4px rgba(91, 145, 251, 0.8),
                                       2px  2px 4px rgba(91, 145, 251, 0.8)
                                    `,
                                            }}
                                          >
                                            {epiphany.cost}
                                          </span>
                                          <div
                                            className="w-full h-0.5 mt-0.5"
                                            style={{
                                              backgroundColor: "#B6C4F9",
                                              boxShadow: `
                                      0 0 2px #5B91FB,
                                      0 0 4px #5B91FB,
                                      0 0 6px #5B91FB,
                                      0 0 8px rgba(91, 145, 251, 0.6),
                                      inset 0 1px 0 rgba(255, 255, 255, 0.3)
                                    `,
                                            }}
                                          />
                                        </div>

                                        {/* Name and Type */}
                                        <div className="flex-1 pt-0.5 min-w-0">
                                          <div className="relative w-full">
                                            <div
                                              className="absolute"
                                              style={{
                                                backgroundImage: `url(${getRarityBackgroundImage(
                                                  cardData.name
                                                )})`,
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition:
                                                  "left center",
                                                backgroundSize: "contain",
                                                left: -50,
                                                right: 0,
                                                top: 7,
                                                bottom: 0,
                                                height: "70%",
                                                width: "700%",
                                              }}
                                            />

                                            <h5
                                              className="relative font-bold leading-tight drop-shadow-lg overflow-hidden text-ellipsis whitespace-nowrap"
                                              style={{
                                                color: getRarityColor(
                                                  cardData.name
                                                ),
                                                fontSize:
                                                  "clamp(0.9rem, 2.8vw, 0.9rem)",
                                                padding: "4px 6px",
                                                textShadow: `
                                        -1px -1px 0 #000,
                                         1px -1px 0 #000,
                                        -1px  1px 0 #000,
                                         1px  1px 0 #000
                                      `,
                                                maxWidth: "100%",
                                              }}
                                            >
                                              {cardData.name}
                                            </h5>
                                          </div>

                                          <div
                                            className="flex items-center gap-1 -mt-1"
                                            style={{ padding: "4px 6px" }}
                                          >
                                            <img
                                              src={
                                                epiphany.type === "attack"
                                                  ? "/images/icon-category-card-attack.webp"
                                                  : epiphany.type === "skill"
                                                  ? "/images/icon-category-card-skill.webp"
                                                  : "/images/icon-category-card-upgrade.webp"
                                              }
                                              alt={epiphany.type}
                                              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                            />
                                            <span
                                              className="text-white text-xs sm:text-sm font-medium capitalize drop-shadow"
                                              style={{
                                                fontSize:
                                                  "clamp(0.8rem, 2vw, 0.8rem)",
                                                textShadow: `
                                        -1px -1px 0 #000,
                                         1px -1px 0 #000,
                                        -1px  1px 0 #000,
                                         1px  1px 0 #000
                                      `,
                                              }}
                                            >
                                              {epiphany.type}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Description Section - epiphany (active spark) */}
                                    <div className="mt-auto py-5 bg-gradient-to-t from-black/95 via-black/90 to-transparent flex flex-col items-center justify-center gap-1">
                                      <img
                                        src="/images/card/card_frame_spark.png"
                                        alt=""
                                        className="w-1/3 mb-0 drop-shadow-2xl"
                                      />
                                      {(() => {
                                        const { bracketedText, remainingText } =
                                          parseDescription(
                                            epiphany.description
                                          );
                                        return (
                                          <>
                                            {bracketedText && (
                                              <p
                                                className="text-center font-medium text-xs sm:text-sm leading-snug m-0"
                                                style={{ color: "#e3b46c" }}
                                              >
                                                {bracketedText}
                                              </p>
                                            )}
                                            <p
                                              className="text-white text-center text-xs sm:text-sm leading-snug m-0 whitespace-pre-line"
                                              dangerouslySetInnerHTML={{
                                                __html: remainingText
                                                  .replace(
                                                    /(\d+%?)/g,
                                                    '<span style="color: #7ce2fb">$1</span>'
                                                  )
                                                  .replace(
                                                    /Shadow of the\s*Moon\+/gi,
                                                    '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'
                                                  )
                                                  .replace(
                                                    /Moonslash/gi,
                                                    '<span style="color: #7ce2fb; text-decoration: underline; text-underline-offset: 2px">$&</span>'
                                                  ),
                                              }}
                                            />
                                          </>
                                        );
                                      })()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Epiphany Explanations */}
                        <div className="mt-6 space-y-3 sm:space-y-4">
                          <h3 className="text-lg font-bold text-purple-300">
                            Epiphanies Tier
                          </h3>
                          {cardData.epiphanies.map((epiphany, index) => (
                            <div
                              key={index}
                              className="p-3 rounded-lg bg-background/50 border border-border"
                            >
                              <div className="flex flex-row items-center sm:flex-row gap-2 mb-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-bold w-fit ${getTierColor(
                                    epiphany.tier
                                  )}`}
                                >
                                  {epiphany.tier} Tier
                                </span>
                                <span className="text-sm sm:text-base font-semibold text-foreground">
                                  {epiphany.id}
                                </span>
                              </div>
                              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {epiphany.reasoning}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Divine Epiphanies */}
                        {cardData.divineEpiphanies &&
                          cardData.divineEpiphanies.length > 0 && (
                            <div className="mt-6 space-y-4">
                              <h3 className="text-lg font-bold text-purple-300">
                                Divine Epiphanies
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4">
                                Good Divine Epiphanies that this card can roll
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {cardData.divineEpiphanies.map(
                                  (divineEpiphany: any, index: number) => (
                                    <div
                                      key={index}
                                      className="p-3 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/40"
                                    >
                                      <div className="flex items-center gap-2 mb-2">
                                        {divineEpiphany.icon && (
                                          <img
                                            src={divineEpiphany.icon}
                                            alt={
                                              divineEpiphany.name ||
                                              "Divine Epiphany"
                                            }
                                            className="w-8 h-8 object-contain flex-shrink-0"
                                          />
                                        )}
                                        <span className="px-2 py-1 rounded-full text-xs font-bold bg-purple-500/30 text-purple-200 border border-purple-400/50">
                                          Divine
                                        </span>
                                        {divineEpiphany.name && (
                                          <span className="text-sm font-semibold text-purple-200">
                                            {divineEpiphany.name}
                                          </span>
                                        )}
                                      </div>
                                      {divineEpiphany.reasoning && (
                                        <p className="text-sm sm:text-base text-purple-300/80 mt-2 leading-relaxed">
                                          {divineEpiphany.reasoning}
                                        </p>
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </section>

            {/* 3. Recommended Save Data */}
            <RecommendedSaveData recommendedDecks={recommendedDecks} />

            {/* 3.1. Equipments */}
            <section
              id="equipments"
              className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-6"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-400 text-center">
                3.1. Equipments
              </h2>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-center px-4 max-w-3xl mx-auto">
                Note that only one unique item can be equipped per character
                <br />
                <strong>
                  Select a Chaos Manifestation from the dropdown below to view
                  its specific loot pool
                </strong>
              </p>

              {/* Dropdown */}
              <div className="mb-12 flex flex-col items-center">
                <span className="text-purple-300 text-xl font-medium mb-2 tracking-wide">
                  Chaos Manifestation
                </span>
                <div className="flex justify-center w-full">
                  <div className="relative w-55 mt-2 hover:scale-105 transition-all duration-300">
                    <select
                      value={
                        selectedSources.length === 0
                          ? "all"
                          : selectedSources[0] || "all"
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        if (value === "all") setSelectedSources([]);
                        else setSelectedSources([value]);
                      }}
                      className="
                        appearance-none w-full text-sm font-medium
                        rounded-xl border border-border bg-card
                        py-3 px-4 pr-10 text-center
                        hover:border-purple-400
                        focus:outline-none
                      "
                    >
                      <option value="all">Show All</option>
                      <option value="Laboratory 0">Laboratory 0</option>
                      <option value="Swamp of Judgment">
                        Swamp of Judgment
                      </option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Weapon */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-300 text-center">
                    Weapon
                  </h3>
                  {filteredWeapons.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">
                      No weapons match selected sources.
                    </p>
                  ) : (
                    <>
                      {filteredWeapons[0] && (
                        <GearItem {...filteredWeapons[0]} />
                      )}
                      {filteredWeapons.length > 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex justify-center w-full">
                              <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">
                                {" "}
                                Show More
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>
                          </DialogTrigger>

                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-visible bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                            {/* Header with LOWER z-index than tooltip */}
                            <DialogHeader className="sticky top-0 z-0 shrink-0 bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12 pointer-events-none">
                              <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-purple-300 pointer-events-auto">
                                Alternative Weapon
                              </DialogTitle>
                            </DialogHeader>

                            {/* Scrollable content */}
                            <div className="relative z-20 flex-1 min-h-0 overflow-y-auto px-6 pb-6 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                              <div className="space-y-4">
                                {filteredWeapons.slice(1).map((gear, index) => (
                                  <GearItem key={index} {...gear} />
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </>
                  )}
                </div>

                {/* Armor */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-purple-300 text-center">
                    Armor
                  </h3>
                  {filteredArmors.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">
                      No armors match selected sources.
                    </p>
                  ) : (
                    <>
                      {filteredArmors[0] && <GearItem {...filteredArmors[0]} />}
                      {filteredArmors.length > 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex justify-center w-full">
                              <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">
                                Show More
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>
                          </DialogTrigger>

                          {/* Dialog with sticky header + no scrollbar */}
                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                            <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                              <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                                Alternative Armor
                              </DialogTitle>
                            </DialogHeader>
                            <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                              <div className="space-y-4">
                                {filteredArmors.slice(1).map((gear, index) => (
                                  <GearItem key={index} {...gear} />
                                ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </>
                  )}
                </div>

                {/* Accessory */}
                <div className="space-y-4 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-purple-300 text-center">
                    Accessory
                  </h3>
                  {filteredAccessories.length === 0 ? (
                    <p className="text-center text-gray-400 py-8">
                      No accessories match selected sources.
                    </p>
                  ) : (
                    <>
                      {filteredAccessories[0] && (
                        <GearItem {...filteredAccessories[0]} />
                      )}
                      {filteredAccessories.length > 1 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="flex justify-center w-full">
                              <button className="flex items-center justify-center gap-2 text-sm w-40 rounded-lg border border-border bg-card hover:border-purple-400 transition-all duration-300 hover:scale-103 py-1 mt-2">
                                {" "}
                                Show More
                                <ChevronDown className="h-4 w-4" />
                              </button>
                            </div>
                          </DialogTrigger>

                          {/* Dialog with sticky header + no scrollbar */}
                          <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                            <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                              <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                                Alternative Accessory
                              </DialogTitle>
                            </DialogHeader>
                            <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                              <div className="space-y-4">
                                {filteredAccessories
                                  .slice(1)
                                  .map((gear, index) => (
                                    <GearItem key={index} {...gear} />
                                  ))}
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </>
                  )}
                </div>
              </div>
            </section>

            {/* 4. Memory Fragments */}
            <MemoryFragments
              bisCardSets={bisCardSets}
              secondaryCardSets={secondaryCardSets}
              mainStats={<MemoryFragmentsMainStats />}
              priorityChain={<MemoryFragmentsPriorityChain />}
              explanation={
                <>
                  Prioritize Critical Rate and Critical Damage equally to
                  achieve an ideal critical ratio <br /> After that, prioritize
                  Flat Attack and Attack % for additional damage scaling <br />
                  Void Damage is generally preferred over Attack for most cases
                </>
              }
            />

            {/* 5. Partners */}
            <Partners partners={partners} />

            {/* 6. Teams */}
            <section
              id="teams"
              className="rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8 scroll-mt-24"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400 text-center">
                6. Teams
              </h2>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base text-center px-4">
                Below are two example team compositions optimized for Chizuru as
                the primary damage dealer.
                <br />
                Click on any team to view detailed synergy explanations and role
                breakdowns.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    id: 1,
                    title: "Chizuru Hypercarry",
                    subtitle:
                      "Rei provides damage buffs while Veronica enables card draw",
                    members: [
                      {
                        name: "Chizuru",
                        job: "psionic",
                        ego: "void",
                        image: "/images/characters/chizuruhalf.webp",
                      },
                      {
                        name: "Rei",
                        job: "controller",
                        ego: "void",
                        image: "/images/characters/reihalf.webp",
                      },
                      {
                        name: "Veronica",
                        job: "ranger",
                        ego: "passion",
                        image: "/images/characters/veronicahalf.webp",
                      },
                    ],
                    overview:
                      "This composition maximizes Chizuru's damage potential by providing the two things she needs most: card draw and damage amplification. Chizuru's power comes from stacking Will-O'-Wisp (gained through hits) to empower her Shadow of the Moon attacks. Without proper support, she struggles to cycle through her deck and find key cards like Tsukuyomi and Shadow of the Moon.",
                    synergies: [
                      {
                        highlight: "Rei + Chizuru",
                        text: "Rei provides damage buffs that multiply Chizuru's Shadow of the Moon damage. Both share Void Ego type, creating natural synergy. Rei's support is especially powerful with Tsukuyomi III (adds 2 hits to Shadow of the Moon), allowing for infinite stacking potential.",
                      },
                      {
                        highlight: "Veronica + Chizuru",
                        text: "Veronica's Repose (0 cost, Draw 2 other combatant's cards) solves Chizuru's card draw problem. This ensures Chizuru can consistently find her Tsukuyomi cards (which generate 3 Will-O'-Wisp per hit) and Shadow of the Moon cards to unleash her damage.",
                      },
                      {
                        highlight: "The Combo",
                        text: "Veronica draws cards → Chizuru finds Tsukuyomi → Chizuru uses attack cards to generate Will-O'-Wisp (3 per hit) → Rei's damage buffs amplify the damage → Chizuru uses Shadow of the Moon with massive Will-O'-Wisp stacks for devastating damage.",
                      },
                    ],
                    roles: [
                      "Chizuru: Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon",
                      "Rei: Support/Damage Buffer - amplifies Chizuru's damage through buffs",
                      "Veronica: Support/Draw Engine - provides card draw to keep Chizuru's combo going",
                    ],
                  },
                  {
                    id: 2,
                    title: "Mono Void",
                    subtitle:
                      "Rei provides damage buffs while Tressa generates attack cards for Will-O'-Wisp stacking",
                    members: [
                      {
                        name: "Chizuru",
                        job: "psionic",
                        ego: "void",
                        image: "/images/characters/chizuruhalf.webp",
                      },
                      {
                        name: "Tressa",
                        job: "psionic",
                        ego: "void",
                        image: "/images/characters/tressahalf.webp",
                      },
                      {
                        name: "Rei",
                        job: "controller",
                        ego: "void",
                        image: "/images/characters/reihalf.webp",
                      },
                    ],
                    overview:
                      "This variant replaces Veronica with Tressa, taking a different approach to Will-O'-Wisp generation. Instead of relying on card draw to find Chizuru's cards, Tressa generates attack cards that Chizuru can use with Tsukuyomi to generate Will-O'-Wisp stacks. All three characters share Void Ego type, creating strong synergy and team-wide benefits.",
                    synergies: [
                      {
                        highlight: "Tressa + Chizuru",
                        text: "Tressa's ability to spam attack cards directly feeds Chizuru's Will-O'-Wisp generation. When Chizuru uses Tsukuyomi (3 Will-O'-Wisp per hit), Tressa's attack cards provide the hits needed to stack Will-O'-Wisp quickly without relying on card draw RNG.",
                      },
                      {
                        highlight: "Rei + Chizuru",
                        text: "Rei's role remains the same - providing damage buffs that amplify Chizuru's Shadow of the Moon attacks. The Void Ego synergy between all three characters enhances their effectiveness.",
                      },
                      {
                        highlight: "Triple Void Ego Synergy",
                        text: "Having all three characters share Void Ego type creates natural synergy and provides team-wide benefits. This makes the team more cohesive than mixed Ego type compositions, enhancing overall effectiveness.",
                      },
                      {
                        highlight: "The Combo",
                        text: "Tressa spams attack cards → Chizuru uses Tsukuyomi on those attacks → Generates 3 Will-O'-Wisp per hit → Rei's damage buffs amplify → Chizuru unleashes Shadow of the Moon with massive Will-O'-Wisp stacks.",
                      },
                    ],
                    roles: [
                      "Chizuru: Main DPS - generates Will-O'-Wisp and deals massive damage with Shadow of the Moon",
                      "Tressa: Support/Hit Generator - spams attack cards to help Chizuru build Will-O'-Wisp stacks",
                      "Rei: Support/Damage Buffer - amplifies Chizuru's damage through buffs",
                    ],
                    comparison:
                      "This team trades Veronica's card draw for Tressa's direct attack card generation. It's more consistent for Will-O'-Wisp stacking but may struggle if you need to find specific Chizuru cards. The triple Void Ego synergy provides stronger team-wide benefits, but you lose Veronica's versatile draw utility. Choose this team when you want more reliable Will-O'-Wisp generation and stronger Ego type synergy.",
                  },
                ].map((team) => (
                  <Dialog key={team.id}>
                    <DialogTrigger asChild>
                      <div className="group cursor-pointer rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent p-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-103">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                          <h3 className="text-base sm:text-lg font-semibold text-violet-400">
                            {team.title}
                          </h3>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mb-3">
                          {team.members.map((member) => (
                            <div
                              key={member.name}
                              className="relative aspect-[2/3] rounded-lg overflow-hidden border border-violet-400/50 bg-card shadow-md"
                            >
                              <img
                                src={member.image}
                                alt={member.name}
                                className="object-cover w-full h-full"
                              />
                              <div className="absolute top-1 left-1 flex flex-col gap-0.5">
                                <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                                  <img
                                    src={`/images/icon-job-${member.job}.webp`}
                                    alt={member.job}
                                    className="w-full h-full"
                                  />
                                </div>
                                <div className="w-8 h-8 rounded bg-black/80 backdrop-blur-sm border border-white/20 flex items-center justify-center p-0.5">
                                  <img
                                    src={`/images/icon-ego-${member.ego}.webp`}
                                    alt={member.ego}
                                    className="w-full h-full"
                                  />
                                </div>
                              </div>
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-1 py-1.5">
                                <p className="text-xs sm:text-sm font-semibold text-white text-center">
                                  {member.name}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="font-medium">{team.subtitle}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </DialogTrigger>

                    {/* Dialog with sticky header + no scrollbar */}
                    <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-hidden bg-gray-900/95 border border-gray-800 rounded-xl flex flex-col p-0">
                      <DialogHeader className="sticky bg-gray-900 border-b border-gray-800 px-6 py-4 pr-12">
                        <DialogTitle className="text-xl sm:text-2xl font-bold text-purple-300">
                          {team.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="overflow-y-auto px-6 pb-6 pt-4 flex-1 scrollbar-none">
                        <div className="space-y-6">
                          <div className="grid grid-cols-3 gap-3">
                            {team.members.map((member) => (
                              <div
                                key={member.name}
                                className="relative aspect-[2/3] rounded-lg overflow-hidden border-2 border-purple-500/50 shadow-2xl"
                              >
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                                  <p className="text-base font-bold text-white text-center">
                                    {member.name}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-5 text-sm sm:text-base">
                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                Team Overview
                              </h3>
                              <p className="text-muted-foreground leading-relaxed">
                                {team.overview}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                Synergies
                              </h3>
                              <div className="space-y-3 text-muted-foreground">
                                {team.synergies.map((syn, i) => (
                                  <div key={i}>
                                    <strong className="text-purple-300">
                                      {syn.highlight}:
                                    </strong>{" "}
                                    {syn.text}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-foreground mb-2">
                                Role Distribution
                              </h3>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                                {team.roles.map((role, i) => (
                                  <li key={i}>
                                    <strong className="text-purple-300">
                                      {role.split(":")[0]}:
                                    </strong>
                                    {role.split(":")[1]}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {team.comparison && (
                              <div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                  Team Comparison
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                  {team.comparison}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
