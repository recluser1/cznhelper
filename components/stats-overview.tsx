'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Trophy, Target, Zap, Shield } from 'lucide-react'

export function StatsOverview() {
  const stats = [
    {
      title: 'Total Victories',
      value: '65',
      change: '+12 this week',
      icon: Trophy,
      color: 'text-primary',
    },
    {
      title: 'Best Win Streak',
      value: '8',
      change: 'Current: 3',
      icon: Zap,
      color: 'text-accent',
    },
    {
      title: 'Highest Level',
      value: '45',
      change: 'Chaos Zero',
      icon: Target,
      color: 'text-chart-2',
    },
    {
      title: 'Defense Rate',
      value: '68%',
      change: 'Avg blocks/run',
      icon: Shield,
      color: 'text-chart-4',
    },
  ]

  const deckStats = [
    { name: 'Shadow Assault', wins: 28, losses: 17, winRate: 62 },
    { name: 'Void Control', wins: 15, losses: 8, winRate: 65 },
    { name: 'Blitz Formation', wins: 22, losses: 6, winRate: 79 },
  ]

  const recentRuns = [
    { date: '2024-01-15', deck: 'Shadow Assault', difficulty: 'Chaos Zero', result: 'Victory', level: 45 },
    { date: '2024-01-15', deck: 'Shadow Assault', difficulty: 'Chaos Zero', result: 'Defeat', level: 43 },
    { date: '2024-01-14', deck: 'Void Control', difficulty: 'Nightmare', result: 'Victory', level: 32 },
    { date: '2024-01-14', deck: 'Blitz Formation', difficulty: 'Hard', result: 'Victory', level: 28 },
    { date: '2024-01-13', deck: 'Shadow Assault', difficulty: 'Chaos Zero', result: 'Victory', level: 42 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Statistics</h2>
        <p className="text-sm text-muted-foreground">Your performance across all runs</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Deck Performance</CardTitle>
            <CardDescription>Win rates by deck type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {deckStats.map((deck) => (
              <div key={deck.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{deck.name}</span>
                  <span className="text-muted-foreground">
                    {deck.wins}W - {deck.losses}L
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${deck.winRate}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-accent">{deck.winRate}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Runs</CardTitle>
            <CardDescription>Your last 5 attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentRuns.map((run, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-border p-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{run.deck}</span>
                      <span
                        className={`text-xs font-bold ${
                          run.result === 'Victory' ? 'text-primary' : 'text-destructive'
                        }`}
                      >
                        {run.result}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {run.difficulty} • Level {run.level}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">{run.date}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
