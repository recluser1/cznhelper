import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const characters = [
  "rin",
  "mei-lin",
  "yuki",
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
  "orlea",
  "mika",
  "nia",
  "cassius",
  "rei",
]

const guideContent = {
  rin: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  amir: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  beryl: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  cassius: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  haru: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  khalipe: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  hugo: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  magnus: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  luke: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  maribell: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  mika: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  meiLin: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  lucas: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
  magna: {
    sections: [
      { id: "overview", title: "Character Overview" },
      { id: "skills", title: "Skills & Abilities" },
      { id: "playstyle", title: "Playstyle" },
      { id: "talents", title: "Talents" },
      { id: "constellations", title: "Constellations" },
      { id: "artifacts", title: "Artifacts" },
      { id: "er-requirements", title: "ER Requirements" },
      { id: "artifact-stats", title: "Artifact Stats" },
      { id: "artifact-sets", title: "Artifact Sets" },
      { id: "weapons", title: "Weapons" },
      { id: "teams", title: "Teams" },
      { id: "credits", title: "Credits" },
    ],
  },
}

export default async function CharacterGuidePage({
  params,
}: {
  params: Promise<{ character: string }>
}) {
  const { character } = await params

  if (!characters.includes(character)) {
    notFound()
  }

  const characterName = character
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const sections = guideContent[character as keyof typeof guideContent]?.sections || []

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-balance bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {characterName} Guide
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">Optimal builds and strategies</p>
            </div>
            <Link
              href="/guides"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-4"
            >
              ← Back to Characters
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Sticky Table of Contents */}
          {sections.length > 0 && (
            <aside className="hidden lg:block w-64 shrink-0">
              <nav className="sticky top-4 rounded-lg border border-border bg-card p-4">
                <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-muted-foreground hover:text-purple-400 transition-colors block py-1"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}

          {/* Main Content */}
          <div className="flex-1">
            <div className="rounded-lg border border-border bg-card overflow-hidden">
              {/* Full Character Artwork */}
              <div className="relative w-full h-[500px] bg-gradient-to-br from-purple-900/20 to-black/40 flex items-center justify-center">
                <Image
                  src={`/images/characters/${character.replace(/-/g, "")}.webp`}
                  alt={characterName}
                  width={400}
                  height={500}
                  className="object-contain"
                />
              </div>

              {/* Guide Content Sections */}
              <div className="p-8 space-y-8">
                {sections.length > 0 ? (
                  sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-24">
                      <h2 className="text-2xl font-bold mb-4 text-purple-400">{section.title}</h2>
                      <p className="text-muted-foreground">
                        Content for {section.title.toLowerCase()} will be added here.
                      </p>
                    </section>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-12">
                    Guide content for <span className="text-purple-400 font-semibold">{characterName}</span> will be
                    added here.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return characters.map((character) => ({
    character,
  }))
}
