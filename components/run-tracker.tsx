import { useState, useEffect } from 'react'
'use client'

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

const CHARACTER_CARDS: Record<string, { starter: string[], unique: string[] }> = {
  'rei': {
    starter: ['Dark Blade', 'Dark Blade', 'Material Regeneration', 'Strike of Darkness'],
    unique: ['Resonating Darkness', 'Snack Time', 'Dark Condensation', 'Predator\'s Blade']
  },
  'owen': {
    starter: ['Downward Cut', 'Downward Cut', 'Weapon Block', 'Wind Charge'],
    unique: ['Wind Slash', 'Break Armor', 'Wind Riding', 'Gale Strike']
  },
  'cassius': {
    starter: ['Cards', 'Wild Card', 'Mana Field', 'Pop Eyed Popper'],
    unique: ['Devil Dice', 'Shuffle', 'Dice Trick', 'Joker']
  },
  'beryl': {
    starter: ['Launcher', 'Charged Launcher', 'Barrier', 'Opening Found'],
    unique: ['Charged Shot', 'Guilty Pleasure', 'Unlimited Firepower', 'Heavy Weapon Specialist']
  },
  'mika': {
    starter: ['Water Arrow', 'Water Barrier', 'Water Barrier', 'Source of Water'],
    unique: ['Blessing of Waves', 'Tactical Analysis', 'Whirpool', 'Deluge']
  },
  'maribell': {
    starter: ['Shelter Kick', 'Shelter Defense', 'Shelter Hold', 'Resolute Blitz'],
    unique: ['Maribell Shelter MK.II', 'Wolve\'s Dome', 'Oh... I See.', 'Shelter Strike']
  },
  'lucas': {
    starter: ['Machine Gun', 'Machine Gun', 'Shielding Incendiary Bomb', 'Extended Magazine'],
    unique: ['S.S.S', 'Flame Thrower', 'Flashbang', 'R.P.G-7']
  },
  'amir': {
    starter: ['Rapier', 'Rapier', 'Steel Barrier', 'Hovering Metal'],
    unique: ['Metal Pierce', 'Metal Extraction', 'Full Metal Hurricane', 'Iron Skin']
  },
  'tressa': {
    starter: ['Dagger Throw', 'Dagger Throw', 'Touch of Darkness', 'Unseathe Dagger'],
    unique: ['Curse', 'Shadow Reload', 'Vital Attack', 'Cursed Gouge']
  },
  'selena': {
    starter: ['Engagament Fire', 'Engagament Fire', 'Emergency Shielding', 'High-Power Scope'],
    unique: ['Target Spotted', 'Drone Bombing', 'Tactical Maneuver', 'Sniper\'s Domain']
  },
  'nia': {
    starter: ['Stroke', 'AMP Therapy', 'AMP Therapy', 'G Chord'],
    unique: ['Mute Accent', 'Soul Rip', 'Adagio', 'Nia\'s Curiosity']
  },
  'kayron': {
    starter: ['Elimination', 'Elimination', 'Sphere', 'Echo of Futility'],
    unique: ['Brand of Annihilation', 'Black Hole', 'Oath of Vanity', 'Echoes of True Abyss']
  },
  'haru': {
    starter: ['Anchor', 'Power Anchor', 'Anchor Drop', 'Anchor Shot'],
    unique: ['Anchor Pointer', 'Power Charge', 'Charged Energy', 'Lift Anchor']
  },
  'yuki': {
    starter: ['Longsword Slash', 'Rapid Slash', 'Flowing Parry', 'Prepare to Subdue'],
    unique: ['Flash Slash', 'Trickery Strike', 'Freezing Blade', 'Iceberg Cleave']
  },
  'hugo': {
    starter: ['Throw Dagger', 'Throw Dagger', 'Defense System', 'Hunting Instincts'],
    unique: ['Fan of Daggers', 'Quick Fix', 'Dingo Howling', 'Fixer\'s Approach']
  },
  'renoa': {
    starter: ['Annihilation Shot', 'Annihilation Shot', 'Black Veil', 'Echo of Sorrow'],
    unique: ['Instant Judgement', 'Ballad of Pitch Black', 'Flower of Devoured Fate', 'Last-Ditch Assault']
  },
  'veronica': {
    starter: ['Rapid Fire', 'Rapid Fire', 'Illusion of Golden Daffodils', 'Firing Preparation'],
    unique: ['Repose', 'Pendant of Resolution', 'Sir Kowalski', 'Bombardment Prep']
  },
  'mei-lin': {
    starter: ['Strike', 'Strike', 'Flame Dragon Guardian', 'Flame Dragon Jewel'],
    unique: ['Rising Dragon Spire', 'Unity of Attack and Defense', 'Spirit of the Aroma', 'Flame Dragon\'s Sovereighty']
  },
  'orlea': {
    starter: ['Attack, My Minions', 'Attack, My Minions', 'Heaven\'s Healing', 'Sacred Censer'],
    unique: ['Growth Acceleration', 'Annoying, Growing Creature', 'Will of Light', '']
  },
  'rin': {
    starter: ['Dark Mist Sword: First Form', 'Dark Mist Sword: Third Form', 'Protection', 'Drawing Slash'],
    unique: ['Dark Mist Secret Art: Destruction', 'Dark Mist Secret Art: Annihilation', 'Dark Mist Inner Art', 'Dark Mist Secret Art: Black Dance']
  },
  'magna': {
    starter: ['Frozen Fist', 'Frost Shield', 'Frost Shield', 'Ice Fragment'],
    unique: ['Glacial Iron Fist', 'Ice Wall', 'Frost Charge', 'Storm of Bitter Cold']
  },
  'khalipe': {
    starter: ['Lashing', 'Upward Slash', 'Tyr\'s Vow', 'Vulture Ejection'],
    unique: ['Greatsword Aquila', 'Overpower', 'Rally', 'Absolute Protection']
  },
  'luke': {
    starter: ['Single Shot', 'Single Shot', 'Shadow Concealment', 'Rapid Fire'],
    unique: ['Stealth Reload', 'Seize the Opportunity', 'Dance of the Demon', 'Finisher Round']
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
  // Accessibility theme toggle
  const [accessibilityMode, setAccessibilityMode] = useState(false)
  
  const [deck, setDeck] = useState<DeckCard[]>([
    { id: '1', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '2', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '3', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '4', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '5', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '6', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '7', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
    { id: '8', name: '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
  ])

  const handleCharacterChange = (character: string) => {
    const actualCharacter = character === "none" ? "" : character
    setSelectedCharacter(actualCharacter)
    
    if (!actualCharacter) {
      // Reset to empty names if no character selected
      setDeck(deck.map((card, index) => ({
        ...card,
        name: ''
      })))
    } else {
      // Update deck with character's card names
      const characterData = CHARACTER_CARDS[actualCharacter]
      setDeck(deck.map((card, index) => ({
        ...card,
        name: index < 4 ? characterData.starter[index] : characterData.unique[index - 4]
      })))
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
      { id: '1', name: characterData ? characterData.starter[0] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '2', name: characterData ? characterData.starter[1] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '3', name: characterData ? characterData.starter[2] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '4', name: characterData ? characterData.starter[3] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '5', name: characterData ? characterData.unique[0] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '6', name: characterData ? characterData.unique[1] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '7', name: characterData ? characterData.unique[2] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
      { id: '8', name: characterData ? characterData.unique[3] : '', cardType: 'starter', isStartingCard: true, hasNormalEpiphany: false, hasDivineEpiphany: false, isRemoved: false, wasConverted: false },
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

  // Toggle accessibility-theme class on body for global effect


  return (
    <TooltipProvider>
      <div className={`space-y-6${accessibilityMode ? ' accessibility-theme' : ''}`}> 
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
                    <Select value={tier.toString()} onValueChange={(val: string) => setTier(parseInt(val))}>
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
                      onCheckedChange={(checked: boolean | undefined) => setNightmareMode(!!checked)}
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
                          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation()
                            deleteCard(card.id)
                          }}
                          className="absolute right-2 top-2 z-10 rounded-full bg-[#1A1B20] p-1 text-[#C3C7D0] opacity-0 shadow-lg ring-2 ring-border transition-all hover:bg-[#C41729]/20 hover:ring-[#C41729]/50 group-hover:opacity-100"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}

                      <div className="flex h-full flex-col justify-between">
                        <div className="space-y-2">
                          {card.name && (
                            <div className={`text-sm font-medium leading-tight break-words ${
                              card.wasConverted ? 'text-muted-foreground/50' : 'text-foreground'
                            }`}>
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

                      {selectedCard === card.id && !card.isRemoved && (
                        <div className="absolute inset-0 flex flex-col gap-1 rounded-lg bg-[#06070A]/98 p-2 backdrop-blur-sm ring-2 ring-[#5B1FAF]/50">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 text-xs border-[#5B1FAF]/30 hover:bg-[#5B1FAF]/20 hover:border-[#5B1FAF]/50"
                            disabled={card.hasDivineEpiphany || card.cardType === 'forbidden'}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
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
