'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Minus, Save } from 'lucide-react'

type Card = {
  id: string
  name: string
  type: 'Attack' | 'Defense' | 'Support' | 'Special'
  cost: number
  power: number
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary'
}

const availableCards: Card[] = [
  { id: '1', name: 'Shadow Strike', type: 'Attack', cost: 3, power: 45, rarity: 'Rare' },
  { id: '2', name: 'Void Shield', type: 'Defense', cost: 2, power: 30, rarity: 'Common' },
  { id: '3', name: 'Chaos Bolt', type: 'Attack', cost: 5, power: 80, rarity: 'Epic' },
  { id: '4', name: 'Nightmare Heal', type: 'Support', cost: 3, power: 40, rarity: 'Rare' },
  { id: '5', name: 'Zero Summon', type: 'Special', cost: 7, power: 120, rarity: 'Legendary' },
  { id: '6', name: 'Dark Barrier', type: 'Defense', cost: 4, power: 55, rarity: 'Epic' },
  { id: '7', name: 'Quick Slash', type: 'Attack', cost: 2, power: 25, rarity: 'Common' },
  { id: '8', name: 'Mana Surge', type: 'Support', cost: 3, power: 35, rarity: 'Rare' },
]

export function DeckBuilder() {
  const [deckName, setDeckName] = useState('New Deck')
  const [deck, setDeck] = useState<Record<string, number>>({})
  const [filterType, setFilterType] = useState<string>('All')

  const addCard = (card: Card) => {
    const currentCount = deck[card.id] || 0
    if (currentCount < 3) {
      setDeck({ ...deck, [card.id]: currentCount + 1 })
    }
  }

  const removeCard = (cardId: string) => {
    const currentCount = deck[cardId] || 0
    if (currentCount > 0) {
      const newDeck = { ...deck }
      if (currentCount === 1) {
        delete newDeck[cardId]
      } else {
        newDeck[cardId] = currentCount - 1
      }
      setDeck(newDeck)
    }
  }

  const getTotalCards = () => {
    return Object.values(deck).reduce((sum, count) => sum + count, 0)
  }

  const getTotalCost = () => {
    return Object.entries(deck).reduce((sum, [cardId, count]) => {
      const card = availableCards.find((c) => c.id === cardId)
      return sum + (card?.cost || 0) * count
    }, 0)
  }

  const getRarityColor = (rarity: Card['rarity']) => {
    switch (rarity) {
      case 'Common':
        return 'bg-secondary text-secondary-foreground'
      case 'Rare':
        return 'bg-chart-4 text-primary-foreground'
      case 'Epic':
        return 'bg-accent text-accent-foreground'
      case 'Legendary':
        return 'bg-primary text-primary-foreground'
    }
  }

  const getTypeColor = (type: Card['type']) => {
    switch (type) {
      case 'Attack':
        return 'text-destructive'
      case 'Defense':
        return 'text-chart-4'
      case 'Support':
        return 'text-chart-2'
      case 'Special':
        return 'text-primary'
    }
  }

  const filteredCards =
    filterType === 'All'
      ? availableCards
      : availableCards.filter((card) => card.type === filterType)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Deck Builder</h2>
          <p className="text-sm text-muted-foreground">
            Build and customize your nightmare deck
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Deck
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Available Cards</CardTitle>
              <CardDescription>Select cards to add to your deck</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs value={filterType} onValueChange={setFilterType}>
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="All">All</TabsTrigger>
                  <TabsTrigger value="Attack">Attack</TabsTrigger>
                  <TabsTrigger value="Defense">Defense</TabsTrigger>
                  <TabsTrigger value="Support">Support</TabsTrigger>
                  <TabsTrigger value="Special">Special</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="grid gap-3 sm:grid-cols-2">
                {filteredCards.map((card) => (
                  <div
                    key={card.id}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
                  >
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{card.name}</span>
                        <Badge variant="outline" className={getRarityColor(card.rarity)}>
                          {card.rarity}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className={getTypeColor(card.type)}>{card.type}</span>
                        <span>Cost: {card.cost}</span>
                        <span>Power: {card.power}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeCard(card.id)}
                        disabled={!deck[card.id]}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-sm font-medium">
                        {deck[card.id] || 0}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addCard(card)}
                        disabled={(deck[card.id] || 0) >= 3}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Deck</CardTitle>
              <CardDescription>
                <Input
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                  className="mt-2"
                />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Cards</span>
                  <span className="font-bold">{getTotalCards()}/30</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Avg Cost</span>
                  <span className="font-bold">
                    {getTotalCards() > 0 ? (getTotalCost() / getTotalCards()).toFixed(1) : 0}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${(getTotalCards() / 30) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-medium text-muted-foreground">
                  DECK COMPOSITION
                </Label>
                {Object.entries(deck).map(([cardId, count]) => {
                  const card = availableCards.find((c) => c.id === cardId)
                  if (!card) return null
                  return (
                    <div
                      key={cardId}
                      className="flex items-center justify-between rounded border border-border bg-muted/50 p-2 text-sm"
                    >
                      <span className="font-medium">{card.name}</span>
                      <span className="text-muted-foreground">×{count}</span>
                    </div>
                  )
                })}
                {getTotalCards() === 0 && (
                  <p className="py-8 text-center text-sm text-muted-foreground">
                    No cards added yet
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
