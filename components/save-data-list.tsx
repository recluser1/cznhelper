'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Plus, Trash2, Download, Upload } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type SaveData = {
  id: string
  name: string
  difficulty: 'Normal' | 'Hard' | 'Nightmare' | 'Chaos Zero'
  level: number
  deckName: string
  lastPlayed: string
  wins: number
  losses: number
}

export function SaveDataList() {
  const [saves, setSaves] = useState<SaveData[]>([
    {
      id: '1',
      name: 'Main Run #1',
      difficulty: 'Chaos Zero',
      level: 45,
      deckName: 'Shadow Assault',
      lastPlayed: '2024-01-15',
      wins: 28,
      losses: 17,
    },
    {
      id: '2',
      name: 'Experimental Build',
      difficulty: 'Nightmare',
      level: 32,
      deckName: 'Void Control',
      lastPlayed: '2024-01-14',
      wins: 15,
      losses: 8,
    },
    {
      id: '3',
      name: 'Speed Run Attempt',
      difficulty: 'Hard',
      level: 28,
      deckName: 'Blitz Formation',
      lastPlayed: '2024-01-13',
      wins: 22,
      losses: 6,
    },
  ])

  const [newSave, setNewSave] = useState({
    name: '',
    difficulty: 'Normal' as SaveData['difficulty'],
  })

  const addSave = () => {
    if (!newSave.name) return

    const save: SaveData = {
      id: Date.now().toString(),
      name: newSave.name,
      difficulty: newSave.difficulty,
      level: 1,
      deckName: 'Starter Deck',
      lastPlayed: new Date().toISOString().split('T')[0],
      wins: 0,
      losses: 0,
    }

    setSaves([...saves, save])
    setNewSave({ name: '', difficulty: 'Normal' })
  }

  const deleteSave = (id: string) => {
    setSaves(saves.filter((s) => s.id !== id))
  }

  const getDifficultyColor = (difficulty: SaveData['difficulty']) => {
    switch (difficulty) {
      case 'Normal':
        return 'bg-secondary text-secondary-foreground'
      case 'Hard':
        return 'bg-chart-4 text-primary-foreground'
      case 'Nightmare':
        return 'bg-accent text-accent-foreground'
      case 'Chaos Zero':
        return 'bg-primary text-primary-foreground'
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Save Files</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Save
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Save</DialogTitle>
              <DialogDescription>
                Start a new save file with your chosen difficulty
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Save Name</Label>
                <Input
                  id="name"
                  placeholder="Enter save name..."
                  value={newSave.name}
                  onChange={(e) => setNewSave({ ...newSave, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty</Label>
                <select
                  id="difficulty"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  value={newSave.difficulty}
                  onChange={(e) =>
                    setNewSave({ ...newSave, difficulty: e.target.value as SaveData['difficulty'] })
                  }
                >
                  <option value="Normal">Normal</option>
                  <option value="Hard">Hard</option>
                  <option value="Nightmare">Nightmare</option>
                  <option value="Chaos Zero">Chaos Zero</option>
                </select>
              </div>
              <Button onClick={addSave} className="w-full">
                Create Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {saves.map((save) => (
          <Card key={save.id} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-xl">{save.name}</CardTitle>
                  <CardDescription>Level {save.level}</CardDescription>
                </div>
                <Badge className={getDifficultyColor(save.difficulty)}>{save.difficulty}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Deck</span>
                  <span className="font-medium">{save.deckName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Played</span>
                  <span className="font-medium">{save.lastPlayed}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Record</span>
                  <span className="font-medium">
                    {save.wins}W - {save.losses}L
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="font-medium text-accent">
                    {save.wins + save.losses > 0
                      ? Math.round((save.wins / (save.wins + save.losses)) * 100)
                      : 0}
                    %
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Download className="mr-2 h-3 w-3" />
                  Export
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => deleteSave(save.id)}
                >
                  <Trash2 className="mr-2 h-3 w-3" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
