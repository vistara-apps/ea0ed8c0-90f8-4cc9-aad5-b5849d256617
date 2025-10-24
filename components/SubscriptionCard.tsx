'use client'

import { Calendar, CheckCircle2 } from 'lucide-react'

interface SubscriptionCardProps {
  title: string
  description: string
  price: string
  interval: 'daily' | 'weekly' | 'monthly'
  isActive: boolean
}

export function SubscriptionCard({
  title,
  description,
  price,
  interval,
  isActive,
}: SubscriptionCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-border shadow-card p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-fg mb-2">{title}</h4>
          <p className="text-muted text-sm leading-6">{description}</p>
        </div>
        {isActive && (
          <span className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent border border-accent/20">
            Active
          </span>
        )}
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-4 h-4 text-accent" />
        <span className="text-sm text-muted capitalize">{interval} subscription</span>
      </div>

      <div className="flex items-baseline gap-2 mb-6">
        <span className="text-3xl font-semibold text-fg">{price}</span>
        <span className="text-muted text-sm">/ {interval}</span>
      </div>

      <button
        className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
          isActive
            ? 'bg-surface border border-border text-muted hover:border-accent'
            : 'bg-accent text-white hover:bg-accent/90'
        }`}
      >
        {isActive ? 'Manage Subscription' : 'Subscribe Now'}
      </button>
    </div>
  )
}
