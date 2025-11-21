'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Plus, HelpCircle, RotateCcw, X, Undo, AlertTriangle } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

/**
 * Inline CHARACTER_CARDS with images (option 2).
 * Keep images in /public/images/characters/<key>/
 * e.g. /public/images/characters/amir/starter-0.png, unique-0.png, portrait.png
 */

// helper type for entries
type CardEntry = { name: string; image?: string }

const CHARACTER_CARDS: Record<string, { portrait?: string; starter: CardEntry[]; unique: CardEntry[] }> = {
  'rei': {
    portrait: '/images/characters/rei/portrait.png',
    starter: [
      { name: 'Dark Blade', image: '/images/characters/rei/starter-0.png' },
      { name: 'Dark Blade', image: '/images/characters/rei/starter-1.png' },
      { name: 'Material Regeneration', image: '/images/characters/rei/starter-2.png' },
      { name: 'Strike of Darkness', image: '/images/characters/rei/starter-3.png' }
    ],
    unique: [
      { name: 'Resonating Darkness', image: '/images/characters/rei/unique-0.png' },
      { name: 'Snack Time', image: '/images/characters/rei/unique-1.png' },
      { name: 'Dark Condensation', image: '/images/characters/rei/unique-2.png' },
      { name: "Predator's Blade", image: '/images/characters/rei/unique-3.png' }
    ]
  },
  'owen': {
    portrait: '/images/characters/owen/portrait.png',
    starter: [
      { name: 'Downward Cut', image: '/images/characters/owen/starter-0.png' },
      { name: 'Downward Cut', image: '/images/characters/owen/starter-1.png' },
      { name: 'Weapon Block', image: '/images/characters/owen/starter-2.png' },
      { name: 'Wind Charge', image: '/images/characters/owen/starter-3.png' }
    ],
    unique: [
      { name: 'Wind Slash', image: '/images/characters/owen/unique-0.png' },
      { name: 'Break Armor', image: '/images/characters/owen/unique-1.png' },
      { name: 'Wind Riding', image: '/images/characters/owen/unique-2.png' },
      { name: 'Gale Strike', image: '/images/characters/owen/unique-3.png' }
    ]
  },
  'cassius': {
    portrait: '/images/characters/cassius/portrait.png',
    starter: [
      { name: 'Cards', image: '/images/characters/cassius/starter-0.png' },
      { name: 'Wild Card', image: '/images/characters/cassius/starter-1.png' },
      { name: 'Mana Field', image: '/images/characters/cassius/starter-2.png' },
      { name: 'Pop Eyed Popper', image: '/images/characters/cassius/starter-3.png' }
    ],
    unique: [
      { name: 'Devil Dice', image: '/images/characters/cassius/unique-0.png' },
      { name: 'Shuffle', image: '/images/characters/cassius/unique-1.png' },
      { name: 'Dice Trick', image: '/images/characters/cassius/unique-2.png' },
      { name: 'Joker', image: '/images/characters/cassius/unique-3.png' }
    ]
  },
  'beryl': {
    portrait: '/images/characters/beryl/portrait.png',
    starter: [
      { name: 'Launcher', image: '/images/characters/beryl/starter-0.png' },
      { name: 'Charged Launcher', image: '/images/characters/beryl/starter-1.png' },
      { name: 'Barrier', image: '/images/characters/beryl/starter-2.png' },
      { name: 'Opening Found', image: '/images/characters/beryl/starter-3.png' }
    ],
    unique: [
      { name: 'Charged Shot', image: '/images/characters/beryl/unique-0.png' },
      { name: 'Guilty Pleasure', image: '/images/characters/beryl/unique-1.png' },
      { name: 'Unlimited Firepower', image: '/images/characters/beryl/unique-2.png' },
      { name: 'Heavy Weapon Specialist', image: '/images/characters/beryl/unique-3.png' }
    ]
  },
  'mika': {
    portrait: '/images/characters/mika/portrait.png',
    starter: [
      { name: 'Water Arrow', image: '/images/characters/mika/starter-0.png' },
      { name: 'Water Barrier', image: '/images/characters/mika/starter-1.png' },
      { name: 'Water Barrier', image: '/images/characters/mika/starter-2.png' },
      { name: 'Source of Water', image: '/images/characters/mika/starter-3.png' }
    ],
    unique: [
      { name: 'Blessing of Waves', image: '/images/characters/mika/unique-0.png' },
      { name: 'Tactical Analysis', image: '/images/characters/mika/unique-1.png' },
      { name: 'Whirpool', image: '/images/characters/mika/unique-2.png' },
      { name: 'Deluge', image: '/images/characters/mika/unique-3.png' }
    ]
  },
  'maribell': {
    portrait: '/images/characters/maribell/portrait.png',
    starter: [
      { name: 'Shelter Kick', image: '/images/characters/maribell/starter-0.png' },
      { name: 'Shelter Defense', image: '/images/characters/maribell/starter-1.png' },
      { name: 'Shelter Hold', image: '/images/characters/maribell/starter-2.png' },
      { name: 'Resolute Blitz', image: '/images/characters/maribell/starter-3.png' }
    ],
    unique: [
      { name: 'Maribell Shelter MK.II', image: '/images/characters/maribell/unique-0.png' },
      { name: "Wolve's Dome", image: '/images/characters/maribell/unique-1.png' },
      { name: 'Oh... I See.', image: '/images/characters/maribell/unique-2.png' },
      { name: 'Shelter Strike', image: '/images/characters/maribell/unique-3.png' }
    ]
  },
  'lucas': {
    portrait: '/images/characters/lucas/portrait.png',
    starter: [
      { name: 'Machine Gun', image: '/images/characters/lucas/starter-0.png' },
      { name: 'Machine Gun', image: '/images/characters/lucas/starter-1.png' },
      { name: 'Shielding Incendiary Bomb', image: '/images/characters/lucas/starter-2.png' },
      { name: 'Extended Magazine', image: '/images/characters/lucas/starter-3.png' }
    ],
    unique: [
      { name: 'S.S.S', image: '/images/characters/lucas/unique-0.png' },
      { name: 'Flame Thrower', image: '/images/characters/lucas/unique-1.png' },
      { name: 'Flashbang', image: '/images/characters/lucas/unique-2.png' },
      { name: 'R.P.G-7', image: '/images/characters/lucas/unique-3.png' }
    ]
  },
  'amir': {
    portrait: '/images/characters/amir/portrait.png',
    starter: [
      { name: 'Rapier', image: '/images/character/amir/starter1.png' },
      { name: 'Rapier', image: '/images/character/amir/starter1.png' },
      { name: 'Steel Barrier', image: '/images/character/amir/starter2.png' },
      { name: 'Hovering Metal', image: '/images/character/amir/starter3.png' }
    ],
    unique: [
      { name: 'Metal Pierce', image: '/images/character/amir/unique1.png' },
      { name: 'Metal Extraction', image: '/images/character/amir/unique2.png' },
      { name: 'Full Metal Hurricane', image: '/images/character/amir/unique3.png' },
      { name: 'Iron Skin', image: '/images/character/amir/unique4.png' }
    ]
  },
  'tressa': {
    portrait: '/images/characters/tressa/portrait.png',
    starter: [
      { name: 'Dagger Throw', image: '/images/characters/tressa/starter-0.png' },
      { name: 'Dagger Throw', image: '/images/characters/tressa/starter-1.png' },
      { name: 'Touch of Darkness', image: '/images/characters/tressa/starter-2.png' },
      { name: 'Unseathe Dagger', image: '/images/characters/tressa/starter-3.png' }
    ],
    unique: [
      { name: 'Curse', image: '/images/characters/tressa/unique-0.png' },
      { name: 'Shadow Reload', image: '/images/characters/tressa/unique-1.png' },
      { name: 'Vital Attack', image: '/images/characters/tressa/unique-2.png' },
      { name: 'Cursed Gouge', image: '/images/characters/tressa/unique-3.png' }
    ]
  },
  'selena': {
    portrait: '/images/characters/selena/portrait.png',
    starter: [
      { name: 'Engagament Fire', image: '/images/characters/selena/starter-0.png' },
      { name: 'Engagament Fire', image: '/images/characters/selena/starter-1.png' },
      { name: 'Emergency Shielding', image: '/images/characters/selena/starter-2.png' },
      { name: 'High-Power Scope', image: '/images/characters/selena/starter-3.png' }
    ],
    unique: [
      { name: 'Target Spotted', image: '/images/characters/selena/unique-0.png' },
      { name: 'Drone Bombing', image: '/images/characters/selena/unique-1.png' },
      { name: 'Tactical Maneuver', image: '/images/characters/selena/unique-2.png' },
      { name: "Sniper's Domain", image: '/images/characters/selena/unique-3.png' }
    ]
  },
  'nia': {
    portrait: '/images/characters/nia/portrait.png',
    starter: [
      { name: 'Stroke', image: '/images/characters/nia/starter-0.png' },
      { name: 'AMP Therapy', image: '/images/characters/nia/starter-1.png' },
      { name: 'AMP Therapy', image: '/images/characters/nia/starter-2.png' },
      { name: 'G Chord', image: '/images/characters/nia/starter-3.png' }
    ],
    unique: [
      { name: 'Mute Accent', image: '/images/characters/nia/unique-0.png' },
      { name: 'Soul Rip', image: '/images/characters/nia/unique-1.png' },
      { name: 'Adagio', image: '/images/characters/nia/unique-2.png' },
      { name: "Nia's Curiosity", image: '/images/characters/nia/unique-3.png' }
    ]
  },
  'kayron': {
    portrait: '/images/characters/kayron/portrait.png',
    starter: [
      { name: 'Elimination', image: '/images/characters/kayron/starter-0.png' },
      { name: 'Elimination', image: '/images/characters/kayron/starter-1.png' },
      { name: 'Sphere', image: '/images/characters/kayron/starter-2.png' },
      { name: 'Echo of Futility', image: '/images/characters/kayron/starter-3.png' }
    ],
    unique: [
      { name: 'Brand of Annihilation', image: '/images/characters/kayron/unique-0.png' },
      { name: 'Black Hole', image: '/images/characters/kayron/unique-1.png' },
      { name: 'Oath of Vanity', image: '/images/characters/kayron/unique-2.png' },
      { name: 'Echoes of True Abyss', image: '/images/characters/kayron/unique-3.png' }
    ]
  },
  'haru': {
    portrait: '/images/characters/haru/portrait.png',
    starter: [
      { name: 'Anchor', image: '/images/characters/haru/starter-0.png' },
      { name: 'Power Anchor', image: '/images/characters/haru/starter-1.png' },
      { name: 'Anchor Drop', image: '/images/characters/haru/starter-2.png' },
      { name: 'Anchor Shot', image: '/images/characters/haru/starter-3.png' }
    ],
    unique: [
      { name: 'Anchor Pointer', image: '/images/characters/haru/unique-0.png' },
      { name: 'Power Charge', image: '/images/characters/haru/unique-1.png' },
      { name: 'Charged Energy', image: '/images/characters/haru/unique-2.png' },
      { name: 'Lift Anchor', image: '/images/characters/haru/unique-3.png' }
    ]
  },
  'yuki': {
    portrait: '/images/characters/yuki/portrait.png',
    starter: [
      { name: 'Longsword Slash', image: '/images/characters/yuki/starter-0.png' },
      { name: 'Rapid Slash', image: '/images/characters/yuki/starter-1.png' },
      { name: 'Flowing Parry', image: '/images/characters/yuki/starter-2.png' },
      { name: 'Prepare to Subdue', image: '/images/characters/yuki/starter-3.png' }
    ],
    unique: [
      { name: 'Flash Slash', image: '/images/characters/yuki/unique-0.png' },
      { name: 'Trickery Strike', image: '/images/characters/yuki/unique-1.png' },
      { name: 'Freezing Blade', image: '/images/characters/yuki/unique-2.png' },
      { name: 'Iceberg Cleave', image: '/images/characters/yuki/unique-3.png' }
    ]
  },
  'hugo': {
    portrait: '/images/characters/hugo/portrait.png',
    starter: [
      { name: 'Throw Dagger', image: '/images/characters/hugo/starter-0.png' },
      { name: 'Throw Dagger', image: '/images/characters/hugo/starter-1.png' },
      { name: 'Defense System', image: '/images/characters/hugo/starter-2.png' },
      { name: 'Hunting Instincts', image: '/images/characters/hugo/starter-3.png' }
    ],
    unique: [
      { name: 'Fan of Daggers', image: '/images/characters/hugo/unique-0.png' },
      { name: 'Quick Fix', image: '/images/characters/hugo/unique-1.png' },
      { name: 'Dingo Howling', image: '/images/characters/hugo/unique-2.png' },
      { name: "Fixer's Approach", image: '/images/characters/hugo/unique-3.png' }
    ]
  },
  'renoa': {
    portrait: '/images/characters/renoa/portrait.png',
    starter: [
      { name: 'Annihilation Shot', image: '/images/characters/renoa/starter-0.png' },
      { name: 'Annihilation Shot', image: '/images/characters/renoa/starter-1.png' },
      { name: 'Black Veil', image: '/images/characters/renoa/starter-2.png' },
      { name: 'Echo of Sorrow', image: '/images/characters/renoa/starter-3.png' }
    ],
    unique: [
      { name: 'Instant Judgement', image: '/images/characters/renoa/unique-0.png' },
      { name: 'Ballad of Pitch Black', image: '/images/characters/renoa/unique-1.png' },
      { name: 'Flower of Devoured Fate', image: '/images/characters/renoa/unique-2.png' },
      { name: 'Last-Ditch Assault', image: '/images/characters/renoa/unique-3.png' }
    ]
  },
  'veronica': {
    portrait: '/images/characters/veronica/portrait.png',
    starter: [
      { name: 'Rapid Fire', image: '/images/characters/veronica/starter-0.png' },
      { name: 'Rapid Fire', image: '/images/characters/veronica/starter-1.png' },
      { name: 'Illusion of Golden Daffodils', image: '/images/characters/veronica/starter-2.png' },
      { name: 'Firing Preparation', image: '/images/characters/veronica/starter-3.png' }
    ],
    unique: [
      { name: 'Repose', image: '/images/characters/veronica/unique-0.png' },
      { name: 'Pendant of Resolution', image: '/images/characters/veronica/unique-1.png' },
      { name: 'Sir Kowalski', image: '/images/characters/veronica/unique-2.png' },
      { name: 'Bombardment Prep', image: '/images/characters/veronica/unique-3.png' }
    ]
  },
  'mei-lin': {
    portrait: '/images/characters/mei-lin/portrait.png',
    starter: [
      { name: 'Strike', image: '/images/characters/mei-lin/starter-0.png' },
      { name: 'Strike', image: '/images/characters/mei-lin/starter-1.png' },
      { name: 'Flame Dragon Guardian', image: '/images/characters/mei-lin/starter-2.png' },
      { name: 'Flame Dragon Jewel', image: '/images/characters/mei-lin/starter-3.png' }
    ],
    unique: [
      { name: 'Rising Dragon Spire', image: '/images/characters/mei-lin/unique-0.png' },
      { name: 'Unity of Attack and Defense', image: '/images/characters/mei-lin/unique-1.png' },
      { name: 'Spirit of the Aroma', image: '/images/characters/mei-lin/unique-2.png' },
      { name: "Flame Dragon's Sovereighty", image: '/images/characters/mei-lin/unique-3.png' }
    ]
  },
  'orlea': {
    portrait: '/images/characters/orlea/portrait.png',
    starter: [
      { name: 'Attack, My Minions', image: '/images/characters/orlea/starter-0.png' },
      { name: 'Attack, My Minions', image: '/images/characters/orlea/starter-1.png' },
      { name: "Heaven's Healing", image: '/images/characters/orlea/starter-2.png' },
      { name: 'Sacred Censer', image: '/images/characters/orlea/starter-3.png' }
    ],
    unique: [
      { name: 'Growth Acceleration', image: '/images/characters/orlea/unique-0.png' },
      { name: 'Annoying, Growing Creature', image: '/images/characters/orlea/unique-1.png' },
      { name: 'Will of Light', image: '/images/characters/orlea/unique-2.png' },
      { name: '', image: undefined }
    ]
  },
  'rin': {
    portrait: '/images/characters/rin/portrait.png',
    starter: [
      { name: 'Dark Mist Sword: First Form', image: '/images/characters/rin/starter-0.png' },
      { name: 'Dark Mist Sword: Third Form', image: '/images/characters/rin/starter-1.png' },
      { name: 'Protection', image: '/images/characters/rin/starter-2.png' },
      { name: 'Drawing Slash', image: '/images/characters/rin/starter-3.png' }
    ],
    unique: [
      { name: 'Dark Mist Secret Art: Destruction', image: '/images/characters/rin/unique-0.png' },
      { name: 'Dark Mist Secret Art: Annihilation', image: '/images/characters/rin/unique-1.png' },
      { name: 'Dark Mist Inner Art', image: '/images/characters/rin/unique-2.png' },
      { name: 'Dark Mist Secret Art: Black Dance', image: '/images/characters/rin/unique-3.png' }
    ]
  },
  'magna': {
    portrait: '/images/characters/magna/portrait.png',
    starter: [
      { name: 'Frozen Fist', image: '/images/characters/magna/starter-0.png' },
      { name: 'Frost Shield', image: '/images/characters/magna/starter-1.png' },
      { name: 'Frost Shield', image: '/images/characters/magna/starter-2.png' },
      { name: 'Ice Fragment', image: '/images/characters/magna/starter-3.png' }
    ],
    unique: [
      { name: 'Glacial Iron Fist', image: '/images/characters/magna/unique-0.png' },
      { name: 'Ice Wall', image: '/images/characters/magna/unique-1.png' },
      { name: 'Frost Charge', image: '/images/characters/magna/unique-2.png' },
      { name: 'Storm of Bitter Cold', image: '/images/characters/magna/unique-3.png' }
    ]
  },
  'khalipe': {
    portrait: '/images/characters/khalipe/portrait.png',
    starter: [
      { name: 'Lashing', image: '/images/characters/khalipe/starter-0.png' },
      { name: 'Upward Slash', image: '/images/characters/khalipe/starter-1.png' },
      { name: "Tyr's Vow", image: '/images/characters/khalipe/starter-2.png' },
      { name: 'Vulture Ejection', image: '/images/characters/khalipe/starter-3.png' }
    ],
    unique: [
      { name: 'Greatsword Aquila', image: '/images/characters/khalipe/unique-0.png' },
      { name: 'Overpower', image: '/images/characters/khalipe/unique-1.png' },
      { name: 'Rally', image: '/images/characters/khalipe/unique-2.png' },
      { name: 'Absolute Protection', image: '/images/characters/khalipe/unique-3.png' }
    ]
  },
  'luke': {
    portrait: '/images/characters/luke/portrait.png',
    starter: [
      { name: 'Single Shot', image: '/images/characters/luke/starter-0.png' },
      { name: 'Single Shot', image: '/images/characters/luke/starter-1.png' },
      { name: 'Shadow Concealment', image: '/images/characters/luke/starter-2.png' },
      { name: 'Rapid Fire', image: '/images/characters/luke/starter-3.png' }
    ],
    unique: [
      { name: 'Stealth Reload', image: '/images/characters/luke/unique-0.png' },
      { name: 'Seize the Opportunity', image: '/images/characters/luke/unique-1.png' },
      { name: 'Dance of the Demon', image: '/images/characters/luke/unique-2.png' },
      { name: 'Finisher Round', image: '/images/characters/luke/unique-3.png' }
    ]
  }
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

type CardType = 'neutral' | 'monster' | 'forbidden' | 'starter'

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
}

type Action = {
  type: 'epiphany' | 'divine' | 'duplicate' | 'convert' | 'remove' | 'add' | 'restore'
  cardId: string
  previousState?: DeckCard
  previousDeck?: DeckCard[]
  previousPoints?: number
  previousRemovalCount?: number
  previousDuplicationCount?: number
  previousConversionCount?: number
}

export function RunTracker() {
  const [tier, setTier] = useState(1)
  const [nightmareMode, setNightmareMode] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState<string>('none')
  const [removalCount, setRemovalCount] = useState(0)
  const [duplicationCount, setDuplicationCount] = useState(0)
  const [conversionCount, setConversionCount] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [showAddCard, setShowAddCard] = useState(false)
  const [actionHistory, setActionHistory] = useState<Action[]>([])
  
  const [deck, setDeck] = useState<DeckCard[]>([
    { id: '1', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '2', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '3', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '4', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '5', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '6', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '7', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '8', name: '', image: undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
  ])

  const handleCharacterChange = (character: string) => {
    const actualCharacter = character === "none" ? "" : character
    setSelectedCharacter(actualCharacter || 'none')
    
    if (!actualCharacter) {
      // Reset to empty names/images if no character selected
      setDeck(prev => prev.map((card) => ({
        ...card,
        name: '',
        image: undefined
      })))
    } else {
      // Update deck with character's card names and images
      const characterData = CHARACTER_CARDS[actualCharacter]
      if (!characterData) return

      setDeck(prev => prev.map((card, index) => {
        const isStarter = index < 4
        const source: CardEntry | undefined = isStarter ? characterData.starter[index] : characterData.unique[index - 4]
        return {
          ...card,
          name: source?.name ?? '',
          image: source?.image
        }
      }))
    }
  }

  const limit = TIER_LIMITS[tier] + (nightmareMode ? 10 : 0)

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
    if (card.cardType === 'neutral' && !card.isStartingCard) {
      cost -= 20
    } else if (card.cardType === 'monster' && !card.isStartingCard) {
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
    
    if (card.cardType === 'starter') {
      cost += 20
    }
    
    // Divine conversion cost is 30 for neutral cards, otherwise 20.
    if (card.hasDivineEpiphany) {
      cost += card.cardType === 'neutral' ? 30 : 20
    } else if (card.hasNormalEpiphany && card.cardType !== 'starter') {
      cost += 10
    }
    
    return cost
  }

  const toggleNormalEpiphany = (cardId: string) => {
    const card = deck.find(c => c.id === cardId)
    if (!card || card.isRemoved || card.cardType === 'forbidden') return
    
    if (!card.hasNormalEpiphany && card.hasDivineEpiphany) return
    
    const isRemoving = card.hasNormalEpiphany
    
    setActionHistory([...actionHistory, {
      type: 'epiphany',
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints
    }])
    
    const updatedDeck = deck.map(c => 
      c.id === cardId ? { ...c, hasNormalEpiphany: !c.hasNormalEpiphany } : c
    )
    setDeck(updatedDeck)
    
    if (card.cardType !== 'starter') {
      setTotalPoints(totalPoints + (isRemoving ? -10 : 10))
    }
    
    setSelectedCard(null)
  }

  const toggleDivineEpiphany = (cardId: string) => {
    const card = deck.find(c => c.id === cardId)
    if (!card || card.isRemoved || card.cardType === 'forbidden') return
    
    if (!card.hasDivineEpiphany && card.hasNormalEpiphany) return
    
    const isRemoving = card.hasDivineEpiphany
    
    setActionHistory([...actionHistory, {
      type: 'divine',
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints
    }])
    
    const updatedDeck = deck.map(c => 
      c.id === cardId ? { ...c, hasDivineEpiphany: !c.hasDivineEpiphany } : c
    )
    setDeck(updatedDeck)
    
    // Use 30 points for neutral cards, otherwise 20:
    const delta = card.cardType === 'neutral' ? 30 : 20
    setTotalPoints(totalPoints + (isRemoving ? -delta : delta))
    
    setSelectedCard(null)
  }

  const duplicateCard = (cardId: string) => {
    const card = deck.find(c => c.id === cardId)
    if (!card || card.isRemoved) return
    if (card.cardType === 'forbidden') return
    
    const cost = calculateDuplicationCost(card)
    const newCard: DeckCard = {
      ...card,
      id: Date.now().toString(),
      name: `${card.name} (Copy)`,
      isRemoved: false,
    }
    
    setActionHistory([...actionHistory, {
      type: 'duplicate',
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
      previousDuplicationCount: duplicationCount
    }])
    
    setDeck([...deck, newCard])
    setDuplicationCount(duplicationCount + 1)
    setTotalPoints(totalPoints + cost)
    setSelectedCard(null)
  }

  const convertCard = (cardId: string) => {
    const card = deck.find(c => c.id === cardId)
    if (!card || card.isRemoved || card.wasConverted) return
    if (card.cardType === 'forbidden') return
    
    const cost = calculateConversionCost(card)
    
    setActionHistory([...actionHistory, {
      type: 'convert',
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
      previousConversionCount: conversionCount
    }])
    
    setDeck(deck.map(c => 
      c.id === cardId 
        ? { 
            ...c, 
            cardType: 'neutral', 
            wasConverted: true,
            isStartingCard: false
          } 
        : c
    ))
    setConversionCount(conversionCount + 1)
    setTotalPoints(totalPoints + cost)
    setSelectedCard(null)
  }

  const removeCard = (cardId: string) => {
    const card = deck.find(c => c.id === cardId)
    if (!card || card.isRemoved) return
    if (card.cardType === 'forbidden') return
    
    const actualRemovalCount = deck.filter(c => c.isRemoved).length
    const cost = calculateRemovalCost(card, removalCount)
    
    setActionHistory([...actionHistory, {
      type: 'remove',
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
      previousRemovalCount: removalCount
    }])
    
    setDeck(deck.map(c => c.id === cardId ? { ...c, isRemoved: true, removalCost: cost } : c))
    setRemovalCount(removalCount + 1)
    setTotalPoints(totalPoints + cost)
    setSelectedCard(null)
  }

  const addNewCard = (type: CardType) => {
    const newCard: DeckCard = {
      id: Date.now().toString(),
      name: '',
      image: undefined,
      cardType: type,
      isStartingCard: false,
      hasNormalEpiphany: false,
      hasDivineEpiphany: false,
      isRemoved: false,
      wasConverted: false,
    }
    
    setActionHistory([...actionHistory, {
      type: 'add',
      cardId: newCard.id,
      previousDeck: [...deck],
      previousPoints: totalPoints
    }])
    
    setDeck([...deck, newCard])
    setTotalPoints(totalPoints + getCardPointValue(newCard))
    setShowAddCard(false)
  }

  const restoreCard = (cardId: string) => {
    const card = deck.find(c => c.id === cardId)
    if (!card || !card.isRemoved) return
    
    const cost = card.removalCost || 0
    
    setActionHistory([...actionHistory, {
      type: 'restore',
      cardId,
      previousDeck: [...deck],
      previousPoints: totalPoints,
      previousRemovalCount: removalCount
    }])
    
    setDeck(deck.map(c => c.id === cardId ? { ...c, isRemoved: false, removalCost: undefined } : c))
    setRemovalCount(removalCount - 1)
    setTotalPoints(totalPoints - cost)
  }

  const resetDeck = () => {
    const characterData = selectedCharacter !== 'none' ? CHARACTER_CARDS[selectedCharacter] : null
    
    setDeck([
      { id: '1', name: characterData ? (characterData.starter[0] as CardEntry).name : '', image: characterData ? (characterData.starter[0] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '2', name: characterData ? (characterData.starter[1] as CardEntry).name : '', image: characterData ? (characterData.starter[1] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '3', name: characterData ? (characterData.starter[2] as CardEntry).name : '', image: characterData ? (characterData.starter[2] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '4', name: characterData ? (characterData.starter[3] as CardEntry).name : '', image: characterData ? (characterData.starter[3] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '5', name: characterData ? (characterData.unique[0] as CardEntry).name : '', image: characterData ? (characterData.unique[0] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '6', name: characterData ? (characterData.unique[1] as CardEntry).name : '', image: characterData ? (characterData.unique[1] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '7', name: characterData ? (characterData.unique[2] as CardEntry).name : '', image: characterData ? (characterData.unique[2] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '8', name: characterData ? (characterData.unique[3] as CardEntry).name : '', image: characterData ? (characterData.unique[3] as CardEntry).image : undefined, cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    ])
    setRemovalCount(0)
    setDuplicationCount(0)
    setConversionCount(0)
    setTotalPoints(0)
    setSelectedCard(null)
    setActionHistory([])
  }

  const deleteCard = (cardId: string) => {
    setDeck(deck.filter(c => c.id !== cardId))
  }

  const getCardPointValue = (card: DeckCard): number => {
    if (card.isRemoved) return 0
    
    let points = 0
    
    if (card.cardType === 'neutral') points += 20
    if (card.cardType === 'monster') points += 80
    if (card.cardType === 'forbidden') points += 20
    if (card.cardType === 'starter') points += 0
    
    // Divine gives 30 if the card is neutral, otherwise 20.
    if (card.hasDivineEpiphany) {
      points += card.cardType === 'neutral' ? 30 : 20
    } else if (card.hasNormalEpiphany && card.cardType !== 'starter') {
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
        <div role="alert" className="rounded-md border border-[#C41729]/30 bg-[#C41729]/10 p-3 text-sm text-[#C41729] flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 mt-0.5" />
          <div className="leading-tight">
            <strong className="font-semibold"></strong> There’s a bug making [Remove] card conversions cost 0 — i.e. converting a card to a Mutant Sample currently costs 0
            <br />
            If you converted a base card into a [Remove], just don’t remove the base card — not removing the base card and converting it into a [Remove] card currently has the same cost: 0
          </div>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Run Tracker</h2>
          <p className="text-sm text-muted-foreground">
            Track your current run progress and card effects
          </p>
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
                    <Select value={tier.toString()} onValueChange={(val) => setTier(parseInt(val))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(TIER_LIMITS).map(t => (
                          <SelectItem key={t} value={t}>
                            Tier {t} - {TIER_LIMITS[parseInt(t)]} points
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center gap-2 pb-2">
                    <Checkbox 
                      id="nightmare" 
                      checked={nightmareMode}
                      onCheckedChange={(checked) => setNightmareMode(checked as boolean)}
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
                          ? 'bg-gradient-to-r from-[#C41729] to-[#FF601A]' 
                          : 'bg-gradient-to-r from-[#5B1FAF] to-[#19F7E1]'
                      }`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  {percentage > 100 && (
                    <p className="text-xs text-[#C41729] font-semibold">
                      Over limit by {totalPoints - limit} points!
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 rounded-lg border border-border bg-card p-3 text-center text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground">Removals</div>
                    <div className="font-bold text-[#19F7E1]">{removalCount}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Duplications</div>
                    <div className="font-bold text-[#19F7E1]">{duplicationCount}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Conversions</div>
                    <div className="font-bold text-[#19F7E1]">{conversionCount}</div>
                  </div>
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
                  <Select value={selectedCharacter} onValueChange={handleCharacterChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a character..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      {Object.keys(CHARACTER_CARDS).sort().map(char => (
                        <SelectItem key={char} value={char}>
                          {char.charAt(0).toUpperCase() + char.slice(1).replace('-', ' ')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {deck.map((card, index) => (
                    <div
                      key={card.id}
                      className={`group relative aspect-[2/3] cursor-pointer rounded-lg border-2 p-4 transition-all hover:scale-105 ${
                        selectedCard === card.id
                          ? 'border-[#5B1FAF] shadow-lg shadow-[#5B1FAF]/20'
                          : 'border-border'
                      } ${
                        card.isRemoved ? 'opacity-30 grayscale' : ''
                      } ${
                        card.cardType === 'starter'
                          ? 'border-[#1F2127] bg-gradient-to-br from-[#0A0B0F] to-[#06070A]'
                          : card.cardType === 'neutral'
                          ? 'border-[#19F7E1]/20 bg-gradient-to-br from-[#0A0B0F] to-[#06070A] shadow-[#19F7E1]/5'
                          : card.cardType === 'monster'
                          ? 'border-[#5B1FAF]/30 bg-gradient-to-br from-[#0A0B0F] to-[#06070A] shadow-[#5B1FAF]/5'
                          : 'border-[#C41729]/30 bg-gradient-to-br from-[#0A0B0F] to-[#06070A] shadow-[#C41729]/5'
                      }`}
                      onClick={() => {
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

                    {/* REPLACE the existing: <div className="flex h-full flex-col justify-between"> ... </div> */}
                    <div className="flex h-full flex-col">
                      <div className="relative h-full w-full rounded-md overflow-hidden">
                        {card.image ? (
                          // image fills the entire card area
                          <img
                            src={card.image}
                            alt={card.name || 'card image'}
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#0A0B0F] text-xs text-muted-foreground">
                            No image
                          </div>
                        )}

                        {/* Overlay content — z-10 so it sits above the image. gradient to keep text readable */}
                        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-between p-4 bg-gradient-to-t from-black/70 via-transparent/0 to-transparent/0">
                          <div className="space-y-2">
                            {card.name && (
                              <div
                                className={`text-sm font-medium leading-tight break-words ${
                                  card.wasConverted ? 'text-muted-foreground/50' : 'text-foreground'
                                }`}
                              >
                                {card.name}
                              </div>
                            )}

                            <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                              {card.cardType === 'starter' ? (index < 4 ? 'Starter' : 'Unique') : card.cardType}
                            </div>

                            <div className="space-y-1">
                              {card.hasNormalEpiphany && (
                                <Badge variant="outline" className="h-5 text-[10px] border-[#5B1FAF]/30 bg-[#5B1FAF]/10 text-[#5B1FAF]">Epiphany</Badge>
                              )}
                              {card.hasDivineEpiphany && (
                                <Badge variant="outline" className="h-5 text-[10px] border-[#19F7E1]/30 bg-[#19F7E1]/10 text-[#19F7E1]">Divine Epiphany</Badge>
                              )}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-2xl font-bold text-[#5B1FAF]">
                              {getCardPointValue(card)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                      {selectedCard === card.id && !card.isRemoved && (
                          <div className="absolute inset-0 z-30 flex flex-col gap-1 rounded-lg bg-[#06070A]/98 p-2 backdrop-blur-sm ring-2 ring-[#5B1FAF]/50">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-[#5B1FAF]/30 hover:bg-[#5B1FAF]/20 hover:border-[#5B1FAF]/50"
                            disabled={card.hasDivineEpiphany || card.cardType === 'forbidden'}
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleNormalEpiphany(card.id)
                            }}
                          >
                            {card.hasNormalEpiphany ? 'Remove Epiphany' : 'Epiphany'}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-[#19F7E1]/30 hover:bg-[#19F7E1]/20 hover:border-[#19F7E1]/50"
                            disabled={card.hasNormalEpiphany || card.cardType === 'forbidden'}
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleDivineEpiphany(card.id)
                            }}
                          >
                            {card.hasDivineEpiphany ? 'Remove Divine Epiphany' : 'Divine Epiphany'}
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-border hover:bg-secondary"
                            disabled={card.cardType === 'forbidden'}
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
                            className="h-8 text-xs border-border hover:bg-secondary"
                            disabled={card.wasConverted || card.cardType === 'forbidden'}
                            onClick={(e) => {
                              e.stopPropagation()
                              convertCard(card.id)
                            }}
                          >
                            Convert
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="h-8 text-xs bg-[#C41729]/20 border-[#C41729]/50 hover:bg-[#C41729]/30"
                            disabled={card.cardType === 'forbidden'}
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
                    <Button variant="outline" className="w-full border-[#5B1FAF]/30 bg-[#5B1FAF]/10 hover:bg-[#5B1FAF]/20 hover:border-[#5B1FAF]/50">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Card
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#0A0B0F] border-[#1F2127]">
                    <DialogHeader>
                      <DialogTitle>Add New Card</DialogTitle>
                      <DialogDescription>
                        Select the type of card to add to your deck
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-3">
                      <Button
                        variant="outline"
                        className="h-20 border-[#19F7E1]/20 bg-[#0A0B0F] text-[#C3C7D0] hover:border-[#19F7E1]/40 hover:bg-[#19F7E1]/10 hover:text-[#19F7E1]"
                        onClick={() => addNewCard('neutral')}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold">Neutral Card</div>
                          <div className="text-sm text-muted-foreground">20 points</div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="h-20 border-[#5B1FAF]/20 bg-[#0A0B0F] text-[#C3C7D0] hover:border-[#5B1FAF]/40 hover:bg-[#5B1FAF]/10 hover:text-[#5B1FAF]"
                        onClick={() => addNewCard('monster')}
                      >
                        <div className="text-center">
                          <div className="text-lg font-bold">Monster Card</div>
                          <div className="text-sm text-muted-foreground">80 points</div>
                        </div>
                      </Button>
                      <Button
                        variant="outline"
                        className="h-20 border-[#C41729]/20 bg-[#0A0B0F] text-[#C3C7D0] hover:border-[#C41729]/40 hover:bg-[#C41729]/10 hover:text-[#C41729]"
                        onClick={() => addNewCard('forbidden')}
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
                    <span className="font-bold text-[#19F7E1]">
                      {nightmareMode ? `${tier + 1} (Nightmare)` : tier}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Point Limit</span>
                    <span className="font-bold">{limit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Points Used</span>
                    <span className={`font-bold ${percentage > 100 ? 'text-[#C41729]' : 'text-[#19F7E1]'}`}>
                      {totalPoints}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Remaining</span>
                    <span className={`font-bold ${percentage > 100 ? 'text-[#C41729]' : ''}`}>
                      {limit - totalPoints}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Active Cards</span>
                    <span className="font-bold">{deck.filter(c => !c.isRemoved).length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Removed Cards</span>
                    <span className="font-bold">{deck.filter(c => c.isRemoved).length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Cards</span>
                    <span className="font-bold">{deck.length}</span>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Epiphanies</span>
                    <span className="font-bold text-[#5B1FAF]">
                      {deck.filter(c => c.hasNormalEpiphany).length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Divine Epiphanies</span>
                    <span className="font-bold text-[#19F7E1]">
                      {deck.filter(c => c.hasDivineEpiphany).length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Conversions</span>
                    <span className="font-bold">{conversionCount}</span>
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