'use client'

import { Lock, Unlock, CheckCircle2 } from 'lucide-react'

interface GatedContentCardProps {
  title: string
  description: string
  requirement: string
  isLocked: boolean
  imageUrl: string
}

export function GatedContentCard({
  title,
  description,
  requirement,
  isLocked,
  imageUrl,
}: GatedContentCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-border shadow-card overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
        {isLocked ? (
          <Lock className="w-16 h-16 text-accent/50" />
        ) : (
          <Unlock className="w-16 h-16 text-accent" />
        )}
        <div className="absolute top-3 right-3">
          {isLocked ? (
            <span className="px-3 py-1 bg-surface/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted border border-border">
              Locked
            </span>
          ) : (
            <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-accent">
              Unlocked
            </span>
          )}
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold text-fg mb-2">{title}</h4>
        <p className="text-muted text-sm leading-6 mb-4">{description}</p>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted">Requires: {requirement}</span>
        </div>
        <button
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
            isLocked
              ? 'bg-surface border border-border text-muted hover:border-accent'
              : 'bg-accent text-white hover:bg-accent/90'
          }`}
        >
          {isLocked ? 'View Requirements' : 'Access Content'}
        </button>
      </div>
    </div>
  )
}
