"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, HelpCircle, RotateCcw, X, Undo, AlertTriangle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

/**
 * Inline CHARACTER_CARDS with images (option 2).
 * Keep images in /public/images/character/<key>/
 * e.g. /public/images/character/amir/starter1.png, unique1.png, portrait.png
 */

// helper type for entries
type CardEntry = { name: string; image?: string }

const CHARACTER_CARDS: Record<string, { portrait?: string; starter: CardEntry[]; unique: CardEntry[] }> = {
  rei: {
    portrait: "/images/character/rei/portrait.png",
    starter: [
      { name: "Dark Blade", image: "/images/character/rei/starter1.png" },
      { name: "Dark Blade", image: "/images/character/rei/starter2.png" },
      { name: "Material Regeneration", image: "/images/character/rei/starter3.png" },
      { name: "Strike of Darkness", image: "/images/character/rei/starter4.png" },
    ],
    unique: [
      { name: "Resonating Darkness", image: "/images/character/rei/unique1.png" },
      { name: "Snack Time", image: "/images/character/rei/unique2.png" },
      { name: "Dark Condensation", image: "/images/character/rei/unique3.png" },
      { name: "Predator's Blade", image: "/images/character/rei/unique4.png" },
    ],
  },
  owen: {
    portrait: "/images/character/owen/portrait.png",
    starter: [
      { name: "Downward Cut", image: "/images/character/owen/starter1.png" },
      { name: "Downward Cut", image: "/images/character/owen/starter2.png" },
      { name: "Weapon Block", image: "/images/character/owen/starter3.png" },
      { name: "Wind Charge", image: "/images/character/owen/starter4.png" },
    ],
    unique: [
      { name: "Wind Slash", image: "/images/character/owen/unique1.png" },
      { name: "Break Armor", image: "/images/character/owen/unique2.png" },
      { name: "Wind Riding", image: "/images/character/owen/unique3.png" },
      { name: "Gale Strike", image: "/images/character/owen/unique4.png" },
    ],
  },
  cassius: {
    portrait: "/images/character/cassius/portrait.png",
    starter: [
      { name: "Cards", image: "/images/character/cassius/starter1.png" },
      { name: "Wild Card", image: "/images/character/cassius/starter2.png" },
      { name: "Mana Field", image: "/images/character/cassius/starter3.png" },
      { name: "Pop Eyed Popper", image: "/images/character/cassius/starter4.png" },
    ],
    unique: [
      { name: "Devil Dice", image: "/images/character/cassius/unique1.png" },
      { name: "Shuffle", image: "/images/character/cassius/unique2.png" },
      { name: "Dice Trick", image: "/images/character/cassius/unique3.png" },
      { name: "Joker", image: "/images/character/cassius/unique4.png" },
    ],
  },
  beryl: {
    portrait: "/images/character/beryl/portrait.png",
    starter: [
      { name: "Launcher", image: "/images/character/beryl/starter1.png" },
      { name: "Charged Launcher", image: "/images/character/beryl/starter2.png" },
      { name: "Barrier", image: "/images/character/beryl/starter3.png" },
      { name: "Opening Found", image: "/images/character/beryl/starter4.png" },
    ],
    unique: [
      { name: "Charged Shot", image: "/images/character/beryl/unique1.png" },
      { name: "Guilty Pleasure", image: "/images/character/beryl/unique2.png" },
      { name: "Unlimited Firepower", image: "/images/character/beryl/unique3.png" },
      { name: "Heavy Weapon Specialist", image: "/images/character/beryl/unique4.png" },
    ],
  },
  mika: {
    portrait: "/images/character/mika/portrait.png",
    starter: [
      { name: "Water Arrow", image: "/images/character/mika/starter1.png" },
      { name: "Water Barrier", image: "/images/character/mika/starter2.png" },
      { name: "Water Barrier", image: "/images/character/mika/starter3.png" },
      { name: "Source of Water", image: "/images/character/mika/starter4.png" },
    ],
    unique: [
      { name: "Blessing of Waves", image: "/images/character/mika/unique1.png" },
      { name: "Tactical Analysis", image: "/images/character/mika/unique2.png" },
      { name: "Whirpool", image: "/images/character/mika/unique3.png" },
      { name: "Deluge", image: "/images/character/mika/unique4.png" },
    ],
  },
  maribell: {
    portrait: "/images/character/maribell/portrait.png",
    starter: [
      { name: "Shelter Kick", image: "/images/character/maribell/starter1.png" },
      { name: "Shelter Defense", image: "/images/character/maribell/starter2.png" },
      { name: "Shelter Hold", image: "/images/character/maribell/starter3.png" },
      { name: "Resolute Blitz", image: "/images/character/maribell/starter4.png" },
    ],
    unique: [
      { name: "Maribell Shelter MK.II", image: "/images/character/maribell/unique1.png" },
      { name: "Wolve's Dome", image: "/images/character/maribell/unique2.png" },
      { name: "Oh... I See.", image: "/images/character/maribell/unique3.png" },
      { name: "Shelter Strike", image: "/images/character/maribell/unique4.png" },
    ],
  },
  lucas: {
    portrait: "/images/character/lucas/portrait.png",
    starter: [
      { name: "Machine Gun", image: "/images/character/lucas/starter1.png" },
      { name: "Machine Gun", image: "/images/character/lucas/starter2.png" },
      { name: "Shielding Incendiary Bomb", image: "/images/character/lucas/starter3.png" },
      { name: "Extended Magazine", image: "/images/character/lucas/starter4.png" },
    ],
    unique: [
      { name: "S.S.S", image: "/images/character/lucas/unique1.png" },
      { name: "Flame Thrower", image: "/images/character/lucas/unique2.png" },
      { name: "Flashbang", image: "/images/character/lucas/unique3.png" },
      { name: "R.P.G-7", image: "/images/character/lucas/unique4.png" },
    ],
  },
  amir: {
    portrait: "/images/character/amir/portrait.png",
    starter: [
      { name: "Rapier", image: "/images/character/amir/starter1.png" },
      { name: "Rapier", image: "/images/character/amir/starter2.png" },
      { name: "Steel Barrier", image: "/images/character/amir/starter3.png" },
      { name: "Hovering Metal", image: "/images/character/amir/starter4.png" },
    ],
    unique: [
      { name: "Metal Pierce", image: "/images/character/amir/unique1.png" },
      { name: "Metal Extraction", image: "/images/character/amir/unique2.png" },
      { name: "Full Metal Hurricane", image: "/images/character/amir/unique3.png" },
      { name: "Iron Skin", image: "/images/character/amir/unique4.png" },
    ],
  },
  tressa: {
    portrait: "/images/character/tressa/portrait.png",
    starter: [
      { name: "Dagger Throw", image: "/images/character/tressa/starter1.png" },
      { name: "Dagger Throw", image: "/images/character/tressa/starter2.png" },
      { name: "Touch of Darkness", image: "/images/character/tressa/starter3.png" },
      { name: "Unseathe Dagger", image: "/images/character/tressa/starter4.png" },
    ],
    unique: [
      { name: "Curse", image: "/images/character/tressa/unique1.png" },
      { name: "Shadow Reload", image: "/images/character/tressa/unique2.png" },
      { name: "Vital Attack", image: "/images/character/tressa/unique3.png" },
      { name: "Cursed Gouge", image: "/images/character/tressa/unique4.png" },
    ],
  },
  selena: {
    portrait: "/images/character/selena/portrait.png",
    starter: [
      { name: "Engagament Fire", image: "/images/character/selena/starter1.png" },
      { name: "Engagament Fire", image: "/images/character/selena/starter2.png" },
      { name: "Emergency Shielding", image: "/images/character/selena/starter3.png" },
      { name: "High-Power Scope", image: "/images/character/selena/starter4.png" },
    ],
    unique: [
      { name: "Target Spotted", image: "/images/character/selena/unique1.png" },
      { name: "Drone Bombing", image: "/images/character/selena/unique2.png" },
      { name: "Tactical Maneuver", image: "/images/character/selena/unique3.png" },
      { name: "Sniper's Domain", image: "/images/character/selena/unique4.png" },
    ],
  },
  nia: {
    portrait: "/images/character/nia/portrait.png",
    starter: [
      { name: "Stroke", image: "/images/character/nia/starter1.png" },
      { name: "AMP Therapy", image: "/images/character/nia/starter2.png" },
      { name: "AMP Therapy", image: "/images/character/nia/starter3.png" },
      { name: "G Chord", image: "/images/character/nia/starter4.png" },
    ],
    unique: [
      { name: "Mute Accent", image: "/images/character/nia/unique1.png" },
      { name: "Soul Rip", image: "/images/character/nia/unique2.png" },
      { name: "Adagio", image: "/images/character/nia/unique3.png" },
      { name: "Nia's Curiosity", image: "/images/character/nia/unique4.png" },
    ],
  },
  kayron: {
    portrait: "/images/character/kayron/portrait.png",
    starter: [
      { name: "Elimination", image: "/images/character/kayron/starter1.png" },
      { name: "Elimination", image: "/images/character/kayron/starter2.png" },
      { name: "Sphere", image: "/images/character/kayron/starter3.png" },
      { name: "Echo of Futility", image: "/images/character/kayron/starter4.png" },
    ],
    unique: [
      { name: "Brand of Annihilation", image: "/images/character/kayron/unique1.png" },
      { name: "Black Hole", image: "/images/character/kayron/unique2.png" },
      { name: "Oath of Vanity", image: "/images/character/kayron/unique3.png" },
      { name: "Echoes of True Abyss", image: "/images/character/kayron/unique4.png" },
    ],
  },
  haru: {
    portrait: "/images/character/haru/portrait.png",
    starter: [
      { name: "Anchor", image: "/images/character/haru/starter1.png" },
      { name: "Power Anchor", image: "/images/character/haru/starter2.png" },
      { name: "Anchor Drop", image: "/images/character/haru/starter3.png" },
      { name: "Anchor Shot", image: "/images/character/haru/starter4.png" },
    ],
    unique: [
      { name: "Anchor Pointer", image: "/images/character/haru/unique1.png" },
      { name: "Power Charge", image: "/images/character/haru/unique2.png" },
      { name: "Charged Energy", image: "/images/character/haru/unique3.png" },
      { name: "Lift Anchor", image: "/images/character/haru/unique4.png" },
    ],
  },
  yuki: {
    portrait: "/images/character/yuki/portrait.png",
    starter: [
      { name: "Longsword Slash", image: "/images/character/yuki/starter1.png" },
      { name: "Rapid Slash", image: "/images/character/yuki/starter2.png" },
      { name: "Flowing Parry", image: "/images/character/yuki/starter3.png" },
      { name: "Prepare to Subdue", image: "/images/character/yuki/starter4.png" },
    ],
    unique: [
      { name: "Flash Slash", image: "/images/character/yuki/unique1.png" },
      { name: "Trickery Strike", image: "/images/character/yuki/unique2.png" },
      { name: "Freezing Blade", image: "/images/character/yuki/unique3.png" },
      { name: "Iceberg Cleave", image: "/images/character/yuki/unique4.png" },
    ],
  },
  hugo: {
    portrait: "/images/character/hugo/portrait.png",
    starter: [
      { name: "Throw Dagger", image: "/images/character/hugo/starter1.png" },
      { name: "Throw Dagger", image: "/images/character/hugo/starter2.png" },
      { name: "Defense System", image: "/images/character/hugo/starter3.png" },
      { name: "Hunting Instincts", image: "/images/character/hugo/starter4.png" },
    ],
    unique: [
      { name: "Fan of Daggers", image: "/images/character/hugo/unique1.png" },
      { name: "Quick Fix", image: "/images/character/hugo/unique2.png" },
      { name: "Dingo Howling", image: "/images/character/hugo/unique3.png" },
      { name: "Fixer's Approach", image: "/images/character/hugo/unique4.png" },
    ],
  },
  renoa: {
    portrait: "/images/character/renoa/portrait.png",
    starter: [
      { name: "Annihilation Shot", image: "/images/character/renoa/starter1.png" },
      { name: "Annihilation Shot", image: "/images/character/renoa/starter2.png" },
      { name: "Black Veil", image: "/images/character/renoa/starter3.png" },
      { name: "Echo of Sorrow", image: "/images/character/renoa/starter4.png" },
    ],
    unique: [
      { name: "Instant Judgement", image: "/images/character/renoa/unique1.png" },
      { name: "Ballad of Pitch Black", image: "/images/character/renoa/unique2.png" },
      { name: "Flower of Devoured Fate", image: "/images/character/renoa/unique3.png" },
      { name: "Last-Ditch Assault", image: "/images/character/renoa/unique4.png" },
    ],
  },
  veronica: {
    portrait: "/images/character/veronica/portrait.png",
    starter: [
      { name: "Rapid Fire", image: "/images/character/veronica/starter1.png" },
      { name: "Rapid Fire", image: "/images/character/veronica/starter2.png" },
      { name: "Illusion of Golden Daffodils", image: "/images/character/veronica/starter3.png" },
      { name: "Firing Preparation", image: "/images/character/veronica/starter4.png" },
    ],
    unique: [
      { name: "Repose", image: "/images/character/veronica/unique1.png" },
      { name: "Pendant of Resolution", image: "/images/character/veronica/unique2.png" },
      { name: "Sir Kowalski", image: "/images/character/veronica/unique3.png" },
      { name: "Bombardment Prep", image: "/images/character/veronica/unique4.png" },
    ],
  },
  "mei-lin": {
    portrait: "/images/character/mei-lin/portrait.png",
    starter: [
      { name: "Strike", image: "/images/character/mei-lin/starter1.png" },
      { name: "Strike", image: "/images/character/mei-lin/starter2.png" },
      { name: "Flame Dragon Guardian", image: "/images/character/mei-lin/starter3.png" },
      { name: "Flame Dragon Jewel", image: "/images/character/mei-lin/starter4.png" },
    ],
    unique: [
      { name: "Rising Dragon Spire", image: "/images/character/mei-lin/unique1.png" },
      { name: "Unity of Attack and Defense", image: "/images/character/mei-lin/unique2.png" },
      { name: "Spirit of the Aroma", image: "/images/character/mei-lin/unique3.png" },
      { name: "Flame Dragon's Sovereighty", image: "/images/character/mei-lin/unique4.png" },
    ],
  },
  orlea: {
    portrait: "/images/character/orlea/portrait.png",
    starter: [
      { name: "Attack, My Minions", image: "/images/character/orlea/starter1.png" },
      { name: "Attack, My Minions", image: "/images/character/orlea/starter2.png" },
      { name: "Heaven's Healing", image: "/images/character/orlea/starter3.png" },
      { name: "Sacred Censer", image: "/images/character/orlea/starter4.png" },
    ],
    unique: [
      { name: "Growth Acceleration", image: "/images/character/orlea/unique1.png" },
      { name: "Annoying", image: "/images/character/orlea/unique2.png" },
      { name: "Growing Creature", image: "/images/character/orlea/unique3.png" },
      { name: "Will of Light", image: "/images/character/orlea/unique4.png" },
    ],
  },
  rin: {
    portrait: "/images/character/rin/portrait.png",
    starter: [
      { name: "Dark Mist Sword: First Form", image: "/images/character/rin/starter1.png" },
      { name: "Dark Mist Sword: Third Form", image: "/images/character/rin/starter2.png" },
      { name: "Protection", image: "/images/character/rin/starter3.png" },
      { name: "Drawing Slash", image: "/images/character/rin/starter4.png" },
    ],
    unique: [
      { name: "Dark Mist Secret Art: Destruction", image: "/images/character/rin/unique1.png" },
      { name: "Dark Mist Secret Art: Annihilation", image: "/images/character/rin/unique2.png" },
      { name: "Dark Mist Inner Art", image: "/images/character/rin/unique3.png" },
      { name: "Dark Mist Secret Art: Black Dance", image: "/images/character/rin/unique4.png" },
    ],
  },
  magna: {
    portrait: "/images/character/magna/portrait.png",
    starter: [
      { name: "Frozen Fist", image: "/images/character/magna/starter1.png" },
      { name: "Frost Shield", image: "/images/character/magna/starter3.png" },
      { name: "Frost Shield", image: "/images/character/magna/starter3.png" },
      { name: "Ice Fragment", image: "/images/character/magna/starter4.png" },
    ],
    unique: [
      { name: "Glacial Iron Fist", image: "/images/character/magna/unique1.png" },
      { name: "Ice Wall", image: "/images/character/magna/unique2.png" },
      { name: "Frost Charge", image: "/images/character/magna/unique3.png" },
      { name: "Storm of Bitter Cold", image: "/images/character/magna/unique4.png" },
    ],
  },
  khalipe: {
    portrait: "/images/character/khalipe/portrait.png",
    starter: [
      { name: "Lashing", image: "/images/character/khalipe/starter1.png" },
      { name: "Upward Slash", image: "/images/character/khalipe/starter2.png" },
      { name: "Tyr's Vow", image: "/images/character/khalipe/starter3.png" },
      { name: "Vulture Ejection", image: "/images/character/khalipe/starter4.png" },
    ],
    unique: [
      { name: "Greatsword Aquila", image: "/images/character/khalipe/unique1.png" },
      { name: "Overpower", image: "/images/character/khalipe/unique2.png" },
      { name: "Rally", image: "/images/character/khalipe/unique3.png" },
      { name: "Absolute Protection", image: "/images/character/khalipe/unique4.png" },
    ],
  },
  luke: {
    portrait: "/images/character/luke/portrait.png",
    starter: [
      { name: "Single Shot", image: "/images/character/luke/starter1.png" },
      { name: "Single Shot", image: "/images/character/luke/starter2.png" },
      { name: "Shadow Concealment", image: "/images/character/luke/starter3.png" },
      { name: "Rapid Fire", image: "/images/character/luke/starter4.png" },
    ],
    unique: [
      { name: "Stealth Reload", image: "/images/character/luke/unique1.png" },
      { name: "Seize the Opportunity", image: "/images/character/luke/unique2.png" },
      { name: "Dance of the Demon", image: "/images/character/luke/unique3.png" },
      { name: "Finisher Round", image: "/images/character/luke/unique4.png" },
    ],
  },
  // Duplicate entries for renoa, veronica, mei-lin, orlea, rin, magna, khalipe, luke were removed as they were redundant.
  // Assuming the first instance is the correct one.
}

// default images for generic cards
const DEFAULT_CARD_IMAGES: Record<"neutral" | "monster" | "forbidden" | "starter" | "placeholder", string> = {
  neutral: "/images/card/neutral.png",
  monster: "/images/card/monster.png",
  forbidden: "/images/card/forbidden.png",
  starter: "/images/card/starter.png",
  placeholder: "/images/card/placeholder.png",
}

const TIER_LIMITS: Record<number, number> = {
  1: 30,
  2: 40,
  3: 50,
  4: 60,
  5: 70,
  6: 80,
  7: 90,
  8: 100,
  9: 110,
  10: 120,
  11: 130,
  12: 140,
  13: 150,
  14: 160,
}

type CardType = "neutral" | "monster" | "forbidden" | "starter"

type DeckCard = {
  id: string
  name: string
  image?: string
  cardType: CardType
  isStartingCard: boolean
  hasNormalEpiphany: boolean
  hasDivineEpiphany: boolean
  isRemoved: boolean
  wasConverted: boolean
  removalCost?: number
  isMutantSample?: boolean // Added to differentiate mutant samples
  isDuplicated?: boolean
}

type Action = {
  type: "epiphany" | "divine" | "duplicate" | "convert" | "remove" | "add" | "restore" | "mutant" // Added 'mutant' action type
  cardId: string
  previousState?: DeckCard
  previousDeck?: DeckCard[]
  previousPoints?: number
  previousRemovalCount?: number
  previousDuplicationCount?: number
  previousConversionCount?: number
}

const formatCharacterName = (key: string) =>
  key
    .split(/[-_ ]+/)
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ""))
    .join(" ")

export function RunTracker() {
  const [character, setCharacter] = useState("none") // Set default character to "none" instead of empty string
  const [tier, setTier] = useState(1)
  const [nightmareMode, setNightmareMode] = useState(false)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [showAddCard, setShowAddCard] = useState(false)
  const [removalCount, setRemovalCount] = useState(0)
  const [duplicationCount, setDuplicationCount] = useState(0)
  const [conversionCount, setConversionCount] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  const [actionHistory, setActionHistory] = useState<Action[]>([])
  const [deck, setDeck] = useState<DeckCard[]>([])

  useEffect(() => {
    const savedState = sessionStorage.getItem("czn-run-tracker")
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState)
        setCharacter(parsed.character || "none")
        setTier(parsed.tier || 1)
        setNightmareMode(parsed.isNightmare || false)
        setDeck(parsed.deck || [])
        setActionHistory(parsed.actionHistory || [])
        setRemovalCount(parsed.removalCount || 0)
        setDuplicationCount(parsed.duplicationCount || 0)
        setConversionCount(parsed.conversionCount || 0)
      } catch (error) {
        console.error("Failed to parse saved state:", error)
      }
    } else {
      const placeholderDeck: DeckCard[] = Array.from({ length: 8 }, (_, i) => ({
        id: String(i + 1),
        name: "",
        image: undefined,
        cardType: "starter" as CardType,
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      }))
      setDeck(placeholderDeck)
    }
  }, [])

  useEffect(() => {
    // Only save if we have some data to save (character selected or deck has cards)
    if (character || deck.length > 0) {
      const state = {
        character,
        tier,
        isNightmare: nightmareMode,
        deck,
        actionHistory,
        removalCount,
        duplicationCount,
        conversionCount,
      }
      sessionStorage.setItem("czn-run-tracker", JSON.stringify(state))
    }
  }, [character, tier, nightmareMode, deck, actionHistory, removalCount, duplicationCount, conversionCount])

  const handleCharacterChange = (character: string) => {
    const actualCharacter = character === "none" ? "" : character
    setCharacter(character) // Use the passed character string directly

    if (!actualCharacter) {
      const placeholderDeck: DeckCard[] = Array.from({ length: 8 }, (_, i) => ({
        id: String(i + 1),
        name: "",
        image: undefined,
        cardType: "starter" as CardType,
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      }))
      setDeck(placeholderDeck)
    } else {
      // Get character data
      const characterData = CHARACTER_CARDS[actualCharacter]
      if (!characterData) return

      const initialDeck: DeckCard[] = [
        // 4 starter cards
        ...characterData.starter.map((card, index) => ({
          id: String(index + 1),
          name: card.name,
          image: card.image,
          cardType: "starter" as CardType,
          isStartingCard: true,
          hasNormalEpiphany: false,
          hasDivineEpiphany: false,
          isRemoved: false,
          wasConverted: false,
        })),
        // 4 unique cards
        ...characterData.unique.map((card, index) => ({
          id: String(index + 5),
          name: card.name,
          image: card.image,
          cardType: "starter" as CardType, // Defaulting to starter, might need adjustment if unique cards have different types
          isStartingCard: true,
          hasNormalEpiphany: false,
          hasDivineEpiphany: false,
          isRemoved: false,
          wasConverted: false,
        })),
      ]
      setDeck(initialDeck)
    }
  }

  const limit = TIER_LIMITS[tier] + (nightmareMode ? 10 : 0) // Use nightmareMode

  const calculateRemovalCost = (card: DeckCard, currentRemovalCount: number): number => {
    const count = currentRemovalCount + 1
    let cost = 0

    if (count === 1) {
      cost = 0
    } else if (count === 2) {
      cost = 10
    } else if (count === 3) {
      cost = 30
    } else if (count === 4) {
      cost = 50
    } else {
      cost = 70
    }

    // +20 if removing a starting card (that wasn't converted) or a card with a normal epiphany
    if ((card.isStartingCard || card.hasNormalEpiphany) && !card.wasConverted) {
      cost += 20
    }

    // Subtract the base value for non-starter neutrals and monsters so removal undoes the original add/convert cost
    if (card.cardType === "neutral" && !card.isStartingCard) {
      cost -= 20
    } else if (card.cardType === "monster" && !card.isStartingCard) {
      cost -= 80
    }

    return cost
  }

  const calculateDuplicationCost = (originalCard: DeckCard): number => {
    const count = duplicationCount + 1
    let cost = 0

    if (count === 1) {
      cost = 0
    } else if (count === 2) {
      cost = 10
    } else if (count === 3) {
      cost = 30
    } else if (count === 4) {
      cost = 50
    } else {
      cost = 70
    }

    cost += getCardPointValue(originalCard)

    return cost
  }

  const calculateConversionCost = (card: DeckCard): number => {
    let cost = 10

    if (card.cardType === "starter") {
      cost += 20
    }

    // Divine conversion cost is 30 for neutral cards, otherwise 20.
    if (card.hasDivineEpiphany) {
      cost += card.cardType === "neutral" ? 30 : 20
    } else if (card.hasNormalEpiphany && card.cardType !== "starter") {
      cost += 10
    }

    return cost
  }

  const toggleNormalEpiphany = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId)
    if (!card || card.isRemoved || card.cardType === "forbidden") return

    if (!card.hasNormalEpiphany && card.hasDivineEpiphany) return

    const isRemoving = card.hasNormalEpiphany

    setActionHistory([
      ...actionHistory,
      {
        type: "epiphany",
        cardId,
        previousDeck: [...deck],
        previousPoints: totalPoints,
      },
    ])

    const updatedDeck = deck.map((c) => (c.id === cardId ? { ...c, hasNormalEpiphany: !c.hasNormalEpiphany } : c))
    setDeck(updatedDeck)

    if (card.cardType !== "starter") {
      setTotalPoints(totalPoints + (isRemoving ? -10 : 10))
    }

    setSelectedCard(null)
  }

  const toggleDivineEpiphany = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId)
    if (!card || card.isRemoved || card.cardType === "forbidden") return

    if (!card.hasDivineEpiphany && card.hasNormalEpiphany) return

    const isRemoving = card.hasDivineEpiphany

    setActionHistory([
      ...actionHistory,
      {
        type: "divine",
        cardId,
        previousDeck: [...deck],
        previousPoints: totalPoints,
      },
    ])

    const updatedDeck = deck.map((c) => (c.id === cardId ? { ...c, hasDivineEpiphany: !c.hasDivineEpiphany } : c))
    setDeck(updatedDeck)

    // Use 30 points for neutral cards, otherwise 20:
    const delta = card.cardType === "neutral" ? 30 : 20
    setTotalPoints(totalPoints + (isRemoving ? -delta : delta))

    setSelectedCard(null)
  }

  const duplicateCard = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId)
    if (!card || card.isRemoved) return
    if (card.cardType === "forbidden") return

    const cost = calculateDuplicationCost(card)
    const newCard: DeckCard = {
      ...card,
      id: Date.now().toString(),
      name: card.name, // Changed from `${card.name} (Copy)`
      isRemoved: false,
      isDuplicated: true, // Added flag
    }

    setActionHistory([
      ...actionHistory,
      {
        type: "duplicate",
        cardId,
        previousDeck: [...deck],
        previousPoints: totalPoints,
        previousDuplicationCount: duplicationCount,
      },
    ])

    setDeck([...deck, newCard])
    setDuplicationCount(duplicationCount + 1)
    setTotalPoints(totalPoints + cost)
    setSelectedCard(null)
  }

  const convertCard = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId)
    if (!card || card.isRemoved || card.wasConverted) return
    if (card.cardType === "forbidden") return

    const cost = calculateConversionCost(card)

    setActionHistory([
      ...actionHistory,
      {
        type: "convert",
        cardId,
        previousDeck: [...deck],
        previousPoints: totalPoints,
        previousConversionCount: conversionCount,
      },
    ])

    setDeck(
      deck.map((c) =>
        c.id === cardId
          ? {
              ...c,
              cardType: "neutral",
              wasConverted: true,
              isStartingCard: false,
              image: DEFAULT_CARD_IMAGES.neutral,
            }
          : c,
      ),
    )
    setConversionCount(conversionCount + 1)
    setTotalPoints(totalPoints + cost)
    setSelectedCard(null)
  }

  const convertToMutantSample = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId)
    if (!card || card.isRemoved) return
    if (card.cardType === "forbidden") return

    setActionHistory([
      ...actionHistory,
      {
        type: "mutant",
        cardId,
        previousDeck: [...deck],
        previousPoints: totalPoints,
      },
    ])

    setDeck(
      deck.map((c) =>
        c.id === cardId
          ? {
              ...c,
              isRemoved: true,
              isMutantSample: true,
              removalCost: 0,
              image: "/images/remove.png",
            }
          : c,
      ),
    )

    // No cost and doesn't increase removal count
    setSelectedCard(null)
  }

  const removeCard = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId)
    if (!card || card.isRemoved || card.cardType === "forbidden") return

    const newRemovalCount = removalCount + 1

    // Scaling cost: 0, 10, 30, 50, 70
    let scaleCost = 0
    if (newRemovalCount === 1) scaleCost = 0
    else if (newRemovalCount === 2) scaleCost = 10
    else if (newRemovalCount === 3) scaleCost = 30
    else if (newRemovalCount === 4) scaleCost = 50
    else scaleCost = 70

    // Starter/base card tax (+20) if applicable
    const starterTax = card.isStartingCard ? 20 : 0

    // Total points contributed by the card (base + epiphanies)
    const totalCardPoints = getCardPointValue(card)

    // Final removal cost = scaleCost + starterTax - totalCardPoints
    // Ensure that any card with normal/divine epiphany is fully removed (neutral/monster cards)
    const removalCost =
      card.cardType === "neutral" || card.cardType === "monster"
        ? -totalCardPoints + starterTax + scaleCost
        : scaleCost + starterTax - totalCardPoints

    setDeck(deck.map((c) => (c.id === cardId ? { ...c, isRemoved: true, removalCost } : c)))

    setRemovalCount(newRemovalCount)
    setTotalPoints(totalPoints + removalCost)
    setSelectedCard(null)
  }

  const addNewCard = (type: CardType) => {
    const newCard: DeckCard = {
      id: Date.now().toString(),
      name: "",
      image: DEFAULT_CARD_IMAGES[type] ?? DEFAULT_CARD_IMAGES.placeholder,
      cardType: type,
      isStartingCard: false,
      hasNormalEpiphany: false,
      hasDivineEpiphany: false,
      isRemoved: false,
      wasConverted: false,
    }

    setActionHistory([
      ...actionHistory,
      {
        type: "add",
        cardId: newCard.id,
        previousDeck: [...deck],
        previousPoints: totalPoints,
      },
    ])

    setDeck([...deck, newCard])
    setTotalPoints(totalPoints + getCardPointValue(newCard))
    setShowAddCard(false)
  }

  const restoreCard = (cardId: string) => {
    const card = deck.find((c) => c.id === cardId)
    if (!card || !card.isRemoved) return

    const cost = card.removalCost || 0

    setActionHistory([
      ...actionHistory,
      {
        type: "restore",
        cardId,
        previousDeck: [...deck],
        previousPoints: totalPoints,
        previousRemovalCount: removalCount,
      },
    ])

    setDeck(deck.map((c) => (c.id === cardId ? { ...c, isRemoved: false, removalCost: undefined } : c)))
    setRemovalCount(removalCount - 1)
    setTotalPoints(totalPoints - cost)
  }

  const resetDeck = () => {
    const characterData = character !== "none" ? CHARACTER_CARDS[character] : null // Use character state

    setDeck([
      {
        id: "1",
        name: characterData ? (characterData.starter[0] as CardEntry).name : "",
        image: characterData ? (characterData.starter[0] as CardEntry).image : undefined,
        cardType: "starter",
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
      {
        id: "2",
        name: characterData ? (characterData.starter[1] as CardEntry).name : "",
        image: characterData ? (characterData.starter[1] as CardEntry).image : undefined,
        cardType: "starter",
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
      {
        id: "3",
        name: characterData ? (characterData.starter[2] as CardEntry).name : "",
        image: characterData ? (characterData.starter[2] as CardEntry).image : undefined,
        cardType: "starter",
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
      {
        id: "4",
        name: characterData ? (characterData.starter[3] as CardEntry).name : "",
        image: characterData ? (characterData.starter[3] as CardEntry).image : undefined,
        cardType: "starter",
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
      {
        id: "5",
        name: characterData ? (characterData.unique[0] as CardEntry).name : "",
        image: characterData ? (characterData.unique[0] as CardEntry).image : undefined,
        cardType: "starter", // Defaulting to starter, might need adjustment if unique cards have different types
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
      {
        id: "6",
        name: characterData ? (characterData.unique[1] as CardEntry).name : "",
        image: characterData ? (characterData.unique[1] as CardEntry).image : undefined,
        cardType: "starter", // Defaulting to starter
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
      {
        id: "7",
        name: characterData ? (characterData.unique[2] as CardEntry).name : "",
        image: characterData ? (characterData.unique[2] as CardEntry).image : undefined,
        cardType: "starter", // Defaulting to starter
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
      {
        id: "8",
        name: characterData ? (characterData.unique[3] as CardEntry).name : "",
        image: characterData ? (characterData.unique[3] as CardEntry).image : undefined,
        cardType: "starter", // Defaulting to starter
        isStartingCard: true,
        hasNormalEpiphany: false,
        hasDivineEpiphany: false,
        isRemoved: false,
        wasConverted: false,
      },
    ])
    setRemovalCount(0)
    setDuplicationCount(0)
    setConversionCount(0)
    setTotalPoints(0)
    setSelectedCard(null)
    setActionHistory([])
  }

  const deleteCard = (cardId: string) => {
    setDeck(deck.filter((c) => c.id !== cardId))
  }

  const getCardPointValue = (card: DeckCard): number => {
    if (card.isRemoved) return 0

    let points = 0

    if (card.cardType === "neutral") points += 20
    if (card.cardType === "monster") points += 80
    if (card.cardType === "forbidden") points += 20
    if (card.cardType === "starter") points += 0

    // Divine gives 30 if the card is neutral, otherwise 20.
    if (card.hasDivineEpiphany) {
      points += card.cardType === "neutral" ? 30 : 20
    } else if (card.hasNormalEpiphany && card.cardType !== "starter") {
      points += 10
    }

    return points
  }

  const percentage = (totalPoints / limit) * 100

  const undoLastAction = () => {
    if (actionHistory.length === 0) return

    const lastAction = actionHistory[actionHistory.length - 1]

    if (lastAction.previousDeck) {
      setDeck(lastAction.previousDeck)
    }
    if (lastAction.previousPoints !== undefined) {
      setTotalPoints(lastAction.previousPoints)
    }
    if (lastAction.previousRemovalCount !== undefined) {
      setRemovalCount(lastAction.previousRemovalCount)
    }
    if (lastAction.previousDuplicationCount !== undefined) {
      setDuplicationCount(lastAction.previousDuplicationCount)
    }
    if (lastAction.previousConversionCount !== undefined) {
      setConversionCount(lastAction.previousConversionCount)
    }

    setActionHistory(actionHistory.slice(0, -1))
    setSelectedCard(null)
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
        {/* Warning banner added to match site design */}
        <div
          role="alert"
          className="rounded-md border border-[#C41729]/30 bg-[#C41729]/10 p-3 text-sm text-[#C41729] flex items-start gap-2"
        >
          <AlertTriangle className="h-4 w-4 mt-0.5" />
          <div className="leading-tight">
            <strong className="font-semibold"></strong> There’s a bug making [Remove] card conversions cost 0 — i.e.
            converting a card to a Mutant Sample or Fresh Meat currently costs 0
            <br />
            If you converted a card into a [Remove], just don’t remove the card — not removing it will cost 0 when the
            run end.
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Run Tracker</h2>
          <p className="text-sm text-muted-foreground">Track your current run progress and card effects</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Run Configuration</CardTitle>
                <CardDescription>Select your tier and mode</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-end gap-4">
                  <div className="flex-1 space-y-2">
                    <Label>Tier</Label>
                    <Select value={tier.toString()} onValueChange={(val) => setTier(Number.parseInt(val))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(TIER_LIMITS).map((t) => (
                          <SelectItem key={t} value={t}>
                            Tier {t} - {TIER_LIMITS[Number.parseInt(t)]} points
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center gap-2 pb-2">
                    <Checkbox
                      id="nightmare"
                      checked={nightmareMode}
                      onCheckedChange={(checked) => setNightmareMode(checked as boolean)} // Use setNightmareMode
                    />
                    <Label htmlFor="nightmare" className="cursor-pointer">
                      Nightmare Mode
                    </Label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Increases the Save Data cap by 10 points</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Points Used</span>
                    <span className="font-bold">
                      {totalPoints} / {limit}
                    </span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-secondary ring-1 ring-border">
                    <div
                      className={`h-full transition-all ${
                        percentage > 100
                          ? "bg-gradient-to-r from-[#C41729] to-[#FF601A]"
                          : "bg-gradient-to-r from-[#5B1FAF] to-[#19F7E1]"
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  {percentage > 100 && (
                    <p className="text-xs text-red-400 font-semibold">Over limit by {totalPoints - limit} points!</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Deck Cards</CardTitle>
                    <CardDescription>Click a card to apply effects</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={undoLastAction}
                      disabled={actionHistory.length === 0}
                      className="gap-2 border-[#5B1FAF]/30 bg-[#5B1FAF]/10 hover:bg-[#5B1FAF]/20 hover:border-[#5B1FAF]/50 disabled:opacity-50"
                    >
                      <Undo className="h-4 w-4" />
                      Undo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetDeck}
                      className="gap-2 border-[#C41729]/30 bg-[#C41729]/10 hover:bg-[#C41729]/20 hover:border-[#C41729]/50"
                    >
                      <RotateCcw className="h-4 w-4" />
                      Reset
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Character</Label>
                  <Select value={character} onValueChange={handleCharacterChange}>
                    {" "}
                    {/* Use character state */}
                    <SelectTrigger>
                      <SelectValue placeholder="Select a character..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      {Object.keys(CHARACTER_CARDS)
                        .sort()
                        .map((char) => (
                          <SelectItem key={char} value={char}>
                            {formatCharacterName(char)}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {deck.map((card, index) => (
                    <div
                      key={card.id}
                      className={`group relative aspect-[2/3] cursor-pointer rounded-lg transition-all hover:scale-105 ${
                        selectedCard === card.id ? "shadow-lg shadow-[#5B1FAF]/20" : ""
                      } ${card.isRemoved ? "opacity-30 grayscale" : ""} ${
                        card.cardType === "starter"
                          ? "bg-gradient-to-br from-[#0A0B0F] to-[#06070A]"
                          : card.cardType === "neutral"
                            ? "bg-gradient-to-br from-[#0A0B0F] to-[#06070A] shadow-[#19F7E1]/5"
                            : card.cardType === "monster"
                              ? "bg-gradient-to-br from-[#0A0B0F] to-[#06070A] shadow-[#5B1FAF]/5"
                              : "bg-gradient-to-br from-[#0A0B0F] to-[#06070A] shadow-[#C41729]/5"
                      }`}
                      onClick={() => {
                        if (card.isMutantSample) {
                          return
                        }
                        if (card.isRemoved) {
                          restoreCard(card.id)
                        } else {
                          setSelectedCard(selectedCard === card.id ? null : card.id)
                        }
                      }}
                    >
                      {card.isRemoved && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteCard(card.id)
                          }}
                          className="absolute right-2 top-2 z-10 rounded-full bg-[#1A1B20] p-1 text-[#C3C7D0] opacity-0 shadow-lg ring-2 ring-border transition-all hover:bg-[#C41729]/20 hover:ring-[#C41729]/50 group-hover:opacity-100"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}

                      <div className="flex h-full flex-col">
                        <div className="relative h-full w-full rounded-md overflow-hidden">
                          {card.image ? (
                            // image fills the entire card area
                            <img
                              src={card.image || "/placeholder.svg"}
                              alt={card.name || "card image"}
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-card/50 border-2 border-dashed border-border/30 text-xs text-muted-foreground">
                              No image
                            </div>
                          )}

                          {["amir", "luke", "hugo", "yuki"].includes(character) && ( // Use character state
                            <img
                              src="/images/card/order-border.png"
                              alt="Order border"
                              className="absolute left-0 top-0 h-full w-auto z-[5] pointer-events-none"
                            />
                          )}

                          {["tressa", "rin", "renoa", "rei", "kayron"].includes(character) && ( // Use character state
                            <img
                              src="/images/card/void-border.png"
                              alt="Void border"
                              className="absolute left-0 top-0 h-full w-auto z-[5] pointer-events-none"
                            />
                          )}

                          {["nia", "khalipe", "orlea", "cassius"].includes(character) && ( // Use character state
                            <img
                              src="/images/card/instinct-border.png"
                              alt="Instinct border"
                              className="absolute left-0 top-0 h-full w-auto z-[5] pointer-events-none"
                            />
                          )}

                          {["selena", "lucas", "mei-lin", "maribell", "veronica", "owen"].includes(
                            character, // Use character state
                          ) && (
                            <img
                              src="/images/card/passion-border.png"
                              alt="Passion border"
                              className="absolute left-0 top-0 h-full w-auto z-[5] pointer-events-none"
                            />
                          )}

                          {["magna", "mika", "beryl", "haru"].includes(character) && ( // Use character state
                            <img
                              src="/images/card/justice-border.png"
                              alt="Justice border"
                              className="absolute left-0 top-0 h-full w-auto z-[5] pointer-events-none"
                            />
                          )}

                          {/* Overlay content — z-10 so it sits above the image. gradient to keep text readable */}
                          <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-between p-4 bg-gradient-to-b from-black/60 via-transparent to-black/70">
                            <div className="space-y-2">
                              {card.name && (
                                <div
                                  className={`text-base font-medium leading-tight break-words ${
                                    card.wasConverted ? "text-muted-foreground/50" : "text-white"
                                  }`}
                                >
                                  {card.name}
                                </div>
                              )}

                              <div className="text-[10px] font-bold uppercase tracking-wide text-white">
                                {card.cardType === "starter" ? (index < 4 ? "Starter" : "Unique") : card.cardType}
                              </div>

                              <div className="space-y-1">
                                {card.hasNormalEpiphany && (
                                  <Badge
                                    variant="outline"
                                    className="h-5 text-[10px] border-gray-400/40 bg-gray-700/40 text-white font-semibold"
                                    style={{
                                      textShadow:
                                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 3px #000",
                                    }}
                                  >
                                    Epiphany
                                  </Badge>
                                )}
                                {card.hasDivineEpiphany && (
                                  <Badge
                                    variant="outline"
                                    className="h-5 text-[10px] border-slate-300/40 bg-slate-600/40 text-white font-semibold"
                                    style={{
                                      textShadow:
                                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 3px #000",
                                    }}
                                  >
                                    Divine Epiphany
                                  </Badge>
                                )}
                                {card.isDuplicated && (
                                  <Badge
                                    variant="outline"
                                    className="h-5 text-[10px] border-zinc-400/40 bg-zinc-700/40 text-white font-semibold"
                                    style={{
                                      textShadow:
                                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 3px #000",
                                    }}
                                  >
                                    Duplicated
                                  </Badge>
                                )}
                                {card.wasConverted && (
                                  <Badge
                                    variant="outline"
                                    className="h-5 text-[10px] border-neutral-400/40 bg-neutral-700/40 text-white font-semibold"
                                    style={{
                                      textShadow:
                                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 0 3px #000",
                                    }}
                                  >
                                    Converted
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-300">{getCardPointValue(card)}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {selectedCard === card.id && !card.isRemoved && !card.isMutantSample && (
                        <div className="absolute inset-0 z-30 flex flex-col gap-1 rounded-lg bg-[#06070A]/98 p-2 backdrop-blur-sm ring-2 ring-purple-400/50">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-border hover:bg-secondary bg-transparent"
                            disabled={card.hasDivineEpiphany || card.cardType === "forbidden"}
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleNormalEpiphany(card.id)
                            }}
                          >
                            {card.hasNormalEpiphany ? "Remove Epiphany" : "Epiphany"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-border hover:bg-secondary bg-transparent"
                            disabled={card.hasNormalEpiphany || card.cardType === "forbidden"}
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleDivineEpiphany(card.id)
                            }}
                          >
                            {card.hasDivineEpiphany ? "Remove Divine Epiphany" : "Divine Epiphany"}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-border hover:bg-secondary bg-transparent"
                            disabled={card.cardType === "forbidden"}
                            onClick={(e) => {
                              e.stopPropagation()
                              duplicateCard(card.id)
                            }}
                          >
                            Duplicate
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-border hover:bg-secondary bg-transparent"
                            disabled={card.wasConverted || card.cardType === "forbidden"}
                            onClick={(e) => {
                              e.stopPropagation()
                              convertCard(card.id)
                            }}
                          >
                            Convert
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-purple-400/50 bg-purple-400/10 hover:bg-purple-400/20"
                            disabled={card.cardType === "forbidden"}
                            onClick={(e) => {
                              e.stopPropagation()
                              convertToMutantSample(card.id)
                            }}
                          >
                            Convert [Remove]
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="h-8 text-xs bg-red-400/20 border-red-400/50 hover:bg-red-400/30"
                            disabled={card.cardType === "forbidden"}
                            onClick={(e) => {
                              e.stopPropagation()
                              removeCard(card.id)
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Dialog open={showAddCard} onOpenChange={setShowAddCard}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full border-[#5B1FAF]/30 bg-[#5B1FAF]/10 hover:bg-[#5B1FAF]/20 hover:border-[#5B1FAF]/50"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Card
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#0A0B0F] border-[#1F2127]">
                    <DialogHeader>
                      <DialogTitle>Add New Card</DialogTitle>
                      <DialogDescription>Select the type of card to add to your deck</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-3">
                      <Button
                        variant="outline"
                        // CHANGE: Changed from harsh #19F7E1 to softer cyan-400
                        className="h-20 border-cyan-400/20 bg-[#0A0B0F] text-[#C3C7D0] hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                        onClick={() => addNewCard("neutral")}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold">Neutral Card</div>
                          <div className="text-sm text-muted-foreground">20 points</div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        // CHANGE: Changed from harsh #5B1FAF to softer purple-400
                        className="h-20 border-purple-400/20 bg-[#0A0B0F] text-[#C3C7D0] hover:border-purple-400/40 hover:bg-purple-400/10 hover:text-purple-400"
                        onClick={() => addNewCard("monster")}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold">Monster Card</div>
                          <div className="text-sm text-muted-foreground">80 points</div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="h-20 border-[#C41729]/20 bg-[#0A0B0F] text-[#C3C7D0] hover:border-[#C41729]/40 hover:bg-[#C41729]/10 hover:text-[#C41729]"
                        onClick={() => addNewCard("forbidden")}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold">Forbidden Card</div>
                          <div className="text-sm text-muted-foreground">20 points</div>
                        </div>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Run Summary</CardTitle>
                <CardDescription>Current run statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tier</span>
                    {/* CHANGE: Changed from harsh #19F7E1 to softer cyan-400 */}
                    <span className="font-bold text-cyan-400">{nightmareMode ? `${tier + 1} (Nightmare)` : tier}</span>{" "}
                    {/* Use nightmareMode */}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Points</span>
                    {/* CHANGE: Changed from harsh colors to softer red-400 and cyan-400 */}
                    <span className={`font-bold ${percentage > 100 ? "text-red-400" : "text-cyan-400"}`}>
                      {totalPoints} / {limit}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Cards</span>
                    <span className="font-bold">{deck.filter((c) => !c.isRemoved).length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Cards</span>
                    <span className="font-bold">{deck.length}</span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Modifications
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cards Removed</span>
                    <span className="font-bold">{removalCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cards Duplicated</span>
                    <span className="font-bold">{duplicationCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cards Converted</span>
                    <span className="font-bold">{conversionCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Normal Epiphanies</span>
                    {/* CHANGE: Changed from harsh #5B1FAF to softer purple-400 */}
                    <span className="font-bold">{deck.filter((c) => c.hasNormalEpiphany).length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Divine Epiphanies</span>
                    {/* CHANGE: Changed from harsh #19F7E1 to softer cyan-400 */}
                    <span className="font-bold">{deck.filter((c) => c.hasDivineEpiphany).length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
