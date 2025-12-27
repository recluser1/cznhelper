'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Search, X, AlertTriangle, CheckSquare, Square } from 'lucide-react'

const jobTypes = [
  {
    id: 'controller',
    name: 'Controller',
    icon: '/images/icon-job-controller.webp',
  },
  { id: 'hunter', name: 'Hunter', icon: '/images/icon-job-hunter.webp' },
  { id: 'psionic', name: 'Psionic', icon: '/images/icon-job-psionic.webp' },
  { id: 'ranger', name: 'Ranger', icon: '/images/icon-job-ranger.webp' },
  { id: 'striker', name: 'Striker', icon: '/images/icon-job-striker.webp' },
  { id: 'vanguard', name: 'Vanguard', icon: '/images/icon-job-vanguard.webp' },
]

const elementTypes = [
  {
    id: 'void',
    name: 'Void',
    icon: '/images/icon-ego-void.webp',
    color: 'bg-purple-500/20 border-purple-500/60 text-purple-400',
    glow: 'shadow-purple-500/30',
  },
  {
    id: 'instinct',
    name: 'Instinct',
    icon: '/images/icon-ego-instinct.webp',
    color: 'bg-orange-500/20 border-orange-500/60 text-orange-400',
    glow: 'shadow-orange-500/30',
  },
  {
    id: 'passion',
    name: 'Passion',
    icon: '/images/icon-ego-passion.webp',
    color: 'bg-red-500/20 border-red-500/60 text-red-400',
    glow: 'shadow-red-500/30',
  },
  {
    id: 'justice',
    name: 'Justice',
    icon: '/images/icon-ego-justice.webp',
    color: 'bg-blue-500/20 border-blue-500/60 text-blue-400',
    glow: 'shadow-blue-500/30',
  },
  {
    id: 'order',
    name: 'Order',
    icon: '/images/icon-ego-order.webp',
    color: 'bg-green-500/20 border-green-500/60 text-green-400',
    glow: 'shadow-green-500/30',
  },
]

const characters = [
  {
    id: 'amir',
    name: 'Amir',
    job: 'vanguard',
    element: 'order',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'beryl',
    name: 'Beryl',
    job: 'ranger',
    element: 'justice',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'cassius',
    name: 'Cassius',
    job: 'controller',
    element: 'instinct',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'chizuru',
    name: 'Chizuru',
    job: 'psionic',
    element: 'void',
    rarity: 5,
    hasGuide: true,
  },
  {
    id: 'haru',
    name: 'Haru',
    job: 'striker',
    element: 'justice',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'hugo',
    name: 'Hugo',
    job: 'ranger',
    element: 'order',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'kayron',
    name: 'Kayron',
    job: 'psionic',
    element: 'void',
    rarity: 5,
    hasGuide: true,
  },
  {
    id: 'khalipe',
    name: 'Khalipe',
    job: 'vanguard',
    element: 'instinct',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'lucas',
    name: 'Lucas',
    job: 'hunter',
    element: 'passion',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'luke',
    name: 'Luke',
    job: 'hunter',
    element: 'order',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'magna',
    name: 'Magna',
    job: 'vanguard',
    element: 'justice',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'maribell',
    name: 'Maribell',
    job: 'vanguard',
    element: 'passion',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'meilin',
    name: 'Mei Lin',
    job: 'striker',
    element: 'passion',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'mika',
    name: 'Mika',
    job: 'controller',
    element: 'justice',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'nia',
    name: 'Nia',
    job: 'controller',
    element: 'instinct',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'orlea',
    name: 'Orlea',
    job: 'controller',
    element: 'instinct',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'owen',
    name: 'Owen',
    job: 'striker',
    element: 'passion',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'rei',
    name: 'Rei',
    job: 'controller',
    element: 'void',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'renoa',
    name: 'Renoa',
    job: 'hunter',
    element: 'void',
    rarity: 5,
    hasGuide: true,
  },
  {
    id: 'rin',
    name: 'Rin',
    job: 'striker',
    element: 'void',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'selena',
    name: 'Selena',
    job: 'ranger',
    element: 'passion',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'sereniel',
    name: 'Sereniel',
    job: 'hunter',
    element: 'instinct',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'tressa',
    name: 'Tressa',
    job: 'psionic',
    element: 'void',
    rarity: 4,
    hasGuide: false,
  },
  {
    id: 'veronica',
    name: 'Veronica',
    job: 'ranger',
    element: 'passion',
    rarity: 5,
    hasGuide: false,
  },
  {
    id: 'yuki',
    name: 'Yuki',
    job: 'striker',
    element: 'order',
    rarity: 5,
    hasGuide: false,
  },
]

export default function CharacterGuidesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [selectedElement, setSelectedElement] = useState<string | null>(null)
  const [selectedRarity, setSelectedRarity] = useState<number | null>(null)
  const [onlyWithGuide, setOnlyWithGuide] = useState(false)

  const filteredCharacters = characters.filter((char) => {
    const matchesSearch = char.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesJob = !selectedJob || char.job === selectedJob
    const matchesElement = !selectedElement || char.element === selectedElement
    const matchesRarity = !selectedRarity || char.rarity === selectedRarity
    const matchesGuide = !onlyWithGuide || char.hasGuide

    return (
      matchesSearch &&
      matchesJob &&
      matchesElement &&
      matchesRarity &&
      matchesGuide
    )
  })

  const handleJobFilter = (jobId: string) => {
    setSelectedJob(selectedJob === jobId ? null : jobId)
  }

  const handleElementFilter = (elementId: string) => {
    setSelectedElement(selectedElement === elementId ? null : elementId)
  }

  const handleRarityFilter = (rarity: number) => {
    setSelectedRarity(selectedRarity === rarity ? null : rarity)
  }

  const handleReset = () => {
    setSearchQuery('')
    setSelectedJob(null)
    setSelectedElement(null)
    setSelectedRarity(null)
    setOnlyWithGuide(false)
  }
  const hasActiveFilters =
    searchQuery !== '' ||
    selectedJob !== null ||
    selectedElement !== null ||
    selectedRarity !== null ||
    onlyWithGuide

  return (
    <div className="min-h-screen">
      <main className="container mx-auto py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Filters Section */}
          <div className="space-y-3 sm:space-y-4">
            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center">
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search characters..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 sm:pl-10 h-9 sm:h-10 w-62 sm:w-62 text-sm sm:text-base bg-card/80 border border-border/50 focus:border-purple-500/50 transition-all outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute -translate-x-6 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4 sm:h-4 sm:w-4" />
                  </button>
                )}
              </div>

              {/* Right */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleReset()}
                  className={`
                    gap-1.5 sm:gap-2 transition-all text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10 sm:mr-160
                    ${
                      hasActiveFilters
                        ? 'bg-purple-500/20 border-purple-500/60 text-purple-400 shadow-md shadow-purple-500/20'
                        : 'bg-card/80 border-border/50 text-muted-foreground hover:bg-card hover:translate-y-[-2px]'
                    }`}
                >
                  <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="xs:inline">Reset Filter</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOnlyWithGuide((v) => !v)}
                  className={`
                    gap-1.5 sm:gap-2 transition-all text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10 sm:ml-60
                    ${
                      onlyWithGuide
                        ? 'bg-purple-500/20 border-purple-500/60 text-purple-400 shadow-md shadow-purple-500/20'
                        : 'bg-card/80 border-border/50 text-muted-foreground hover:bg-card hover:translate-y-[-2px]'
                    }`}
                >
                  {onlyWithGuide ? (
                    <CheckSquare className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  ) : (
                    <Square className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  )}
                  <span className="xs:inline">Guide Available</span>
                </Button>
              </div>
            </div>

            {/* Main Filters */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {/* Rarity Filter */}
              <div className="flex items-center gap-3 sm:gap-4">
                {[5, 4].map((rarity) => {
                  const isFiveStar = rarity === 5
                  const isActive = selectedRarity === rarity

                  const activeClasses = isFiveStar
                    ? 'bg-purple-500/20 border-purple-500/60 text-purple-400 shadow-md shadow-purple-500/20'
                    : 'bg-orange-500/20 border-orange-500/60 text-orange-400 shadow-md shadow-orange-500/20'

                  return (
                    <Button
                      key={rarity}
                      variant="outline"
                      size="sm"
                      onClick={() => handleRarityFilter(rarity)}
                      className={`
                      group relative px-4 sm:px-6 py-2 sm:py-2.5  transition-all duration-200
                      ${
                        isActive
                          ? `${activeClasses} scale-105`
                          : 'bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card hover:border-current/40 hover:translate-y-[-2px]'
                      }
                      `}
                    >
                      {/* Number + Star */}
                      <span className="flex items-center gap-1 sm:gap-1.5 font-medium">
                        {/* Number */}
                        <span
                          className={`
                         text-xs sm:text-base transition-colors duration-200
                         ${
                           isActive
                             ? isFiveStar
                               ? 'text-purple-300'
                               : 'text-orange-300'
                             : 'text-foreground'
                         }
                         group-hover:text-white
                        `}
                        >
                          {rarity}
                        </span>
                        {/* Star */}
                        <span
                          className={`text-base sm:text-base transition-colors duration-200
                         ${
                           isActive
                             ? isFiveStar
                               ? 'text-purple-300'
                               : 'text-orange-300'
                             : 'text-foreground'
                         }
                         group-hover:text-white`}
                        >
                          <span className="inline sm:hidden">
                            {isFiveStar ? '★' : '★'}
                          </span>
                          <span className="hidden sm:inline">
                            {isFiveStar ? '★★★★★' : '★★★★'}
                          </span>
                        </span>
                      </span>
                    </Button>
                  )
                })}
              </div>

              {/* Element Filter */}
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {elementTypes.map((element) => (
                    <Button
                      key={element.id}
                      variant="outline"
                      size="sm"
                      onClick={() => handleElementFilter(element.id)}
                      className={`
                        gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200
                        ${
                          selectedElement === element.id
                            ? `
                        ${element.color}
                        shadow-md ${element.glow}
                        scale-105
                      `
                            : `
                        bg-card/80 backdrop-blur-sm border-border/50
                        hover:translate-y-[-2px]
                        hover:text-white
                        hover:shadow-md hover:${element.glow}
                      `
                        }`}
                    >
                      <img
                        src={element.icon || '/placeholder.svg'}
                        alt={element.name}
                        width={32}
                        height={32}
                        className="sm:w-7 sm:h-7 rounded-sm"
                      />
                      <span className="hidden sm:inline text-sm font-medium">
                        {element.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Job Filter */}
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="flex flex-wrap gap-1.5 sm:gap-4">
                  {jobTypes.map((job) => (
                    <Button
                      key={job.id}
                      variant="outline"
                      size="sm"
                      onClick={() => handleJobFilter(job.id)}
                      className={`
                        gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2  transition-all duration-200 ${
                          selectedJob === job.id
                            ? 'bg-purple-500/20 border-purple-500/60 text-purple-400 shadow-md shadow-purple-500/20 scale-105'
                            : 'bg-card/80 backdrop-blur-sm border-border/50 hover:border-purple-500/40 hover:bg-purple-500/5 hover:translate-y-[-2px]'
                        }`}
                    >
                      <img
                        src={job.icon || '/placeholder.svg'}
                        alt={job.name}
                        width={26}
                        height={26}
                        className="sm:w-7 sm:h-7"
                      />
                      <span className="hidden sm:inline text-sm font-medium">
                        {job.name}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Character Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
            {filteredCharacters.map((character) => {
              const job = jobTypes.find((j) => j.id === character.job)
              const element = elementTypes.find(
                (e) => e.id === character.element
              )
              const imagePath = `/images/characters/${character.id}half.webp`
              const isDisabled = !character.hasGuide && !onlyWithGuide
              return (
                <Link
                  key={character.id}
                  href={character.hasGuide ? `/guides/${character.id}` : '#'}
                  className={`
                    group block rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300
                    ${
                      isDisabled
                        ? 'opacity-40 grayscale cursor-not-allowed pointer-events-none'
                        : 'bg-card/80 backdrop-blur-sm border border-border/50 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1'
                    }`}
                >
                  <div className="relative aspect-[3/4]">
                    <img
                      src={imagePath || '/placeholder.svg'}
                      alt={character.name}
                      className="object-cover w-full h-full"
                    />
                    {isDisabled && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <span className="text-xs font-semibold tracking-wide text-white/80">
                          No Guide
                        </span>
                      </div>
                    )}

                    {/* Icons */}
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 flex flex-col gap-1.5 sm:gap-2">
                      {job && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center p-1 sm:p-1.5">
                          <img
                            src={job.icon}
                            alt={job.name}
                            className="w-full h-full"
                          />
                        </div>
                      )}
                      {element && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center p-1 sm:p-1.5">
                          <img
                            src={element.icon}
                            alt={element.name}
                            className="w-full h-full"
                          />
                        </div>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                      {/* Readability Gradient */}
                      <div
                        className="
                        absolute inset-x-0 bottom-0
                        pointer-events-none
                        transition-all duration-100 ease-out
                        bg-gradient-to-t from-black/80 via-black/40 to-transparent
                        h-24 sm:h-32 group-hover:h-48 sm:group-hover:h-64
                      "
                      />

                      {/* Text block */}
                      <div
                        className="
                        absolute inset-x-0 bottom-0 p-2 sm:p-3 md:p-4
                        transition-all duration-50 ease-out
                        group-hover:bottom-2 sm:group-hover:bottom-4
                      "
                      >
                        {/* Name */}
                        <h3 className="font-semibold text-white text-balance text-base sm:text-base">
                          {character.name}
                        </h3>

                        {/* Job + Rarity */}
                        <div className="mt-0.5 sm:mt-1 flex justify-between items-center">
                          <span
                            className={`text-xs sm:text-xs font-bold drop-shadow-2xl ${
                              character.rarity === 5
                                ? 'text-purple-300'
                                : 'text-orange-300'
                            }`}
                          >
                            {character.job.charAt(0).toUpperCase() +
                              character.job.slice(1)}
                          </span>
                          <span
                            className={`text-xs sm:text-xs font-bold drop-shadow-2xl ${
                              character.rarity === 5
                                ? 'text-purple-300'
                                : 'text-orange-300'
                            }`}
                          >
                            {character.rarity}
                            <span className="ml-0.5 sm:ml-1 align-middle">
                              ★
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Gradient Line */}
                      <div
                        className={`
                        absolute inset-x-0 bottom-0 transition-all duration-50 ease-out
                         ${
                           character.rarity === 5
                             ? 'bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500'
                             : 'bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500'
                         }
                        h-0.5 sm:h-1 group-hover:h-4 sm:group-hover:h-5
                        `}
                      />

                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center h-4 sm:h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-50">
                        <span className="text-black font-sm text-xs sm:text-sm md:text-base">
                          Read Guide
                        </span>
                      </div>
                    </div>
                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                      <div
                        className="
                      absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent translate-y-full 
                      group-hover:translate-y-0 transition-transform duration-1000"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full 
                      group-hover:translate-x-full transition-transform duration-1200 delay-75"
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Empty State */}
          {filteredCharacters.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <p className="text-base sm:text-xl text-muted-foreground mb-4 sm:mb-6">
                No characters found matching your filters
              </p>
              <Button
                variant="outline"
                onClick={handleReset}
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 text-sm sm:text-base"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
