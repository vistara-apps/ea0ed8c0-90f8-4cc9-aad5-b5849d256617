'use client'

import { Trophy, TrendingUp } from 'lucide-react'

interface QuestCardProps {
  title: string
  description: string
  progress: number
  reward: string
}

export function QuestCard({ title, description, progress, reward }: QuestCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-border shadow-card p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Trophy className="w-6 h-6 text-accent" />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-fg mb-2">{title}</h4>
          <p className="text-muted text-sm leading-6">{description}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted">Progress</span>
          <span className="text-sm font-medium text-accent">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-bg rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 p-3 bg-accent/5 rounded-lg border border-accent/10">
        <TrendingUp className="w-4 h-4 text-accent" />
        <span className="text-sm text-fg">Reward: {reward}</span>
      </div>

      <button className="w-full py-2 px-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-200">
        Continue Quest
      </button>
    </div>
  )
}
