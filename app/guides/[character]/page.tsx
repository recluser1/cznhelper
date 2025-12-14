import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const characters = [
  "rin",
  "meilin",
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
  "chizuru",
  "orlea",
  "mika",
  "nia",
  "cassius",
  "rei",
]

const defaultSections = [
  { id: "infographic", title: "1. Infographic", level: 1 },
  { id: "character-overview", title: "2. Character Overview", level: 1 },
  { id: "profile", title: "2.1. Profile", level: 2 },
  { id: "cards", title: "2.2. Cards", level: 2 },
  { id: "potentials", title: "2.3. Potentials", level: 2 },
  { id: "manifest-egos", title: "2.4. Manifest Ego", level: 2 },
  { id: "save-data", title: "3. Save Data", level: 1 },
  { id: "memory-fragments", title: "4. Memory Fragments", level: 1 },
  { id: "memory-stats", title: "4.1. Memory Stats", level: 2 },
  { id: "memory-sets", title: "4.2. Memory Sets", level: 2 },
  { id: "partners", title: "5. Partners", level: 1 },
  { id: "teams", title: "6. Teams", level: 1 },
  { id: "credits", title: "7. Credits", level: 1 },
]

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
                {defaultSections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2 className={`font-bold mb-3 sm:mb-4 text-purple-400 ${section.level === 1 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
                      {section.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Content for {section.title.replace(/^\d+(\.\d+)?\.?\s*/, "").toLowerCase()} will be added here.
                    </p>
                  </section>
                ))}
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
