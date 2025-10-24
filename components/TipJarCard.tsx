'use client'

import { Heart, Send } from 'lucide-react'
import { useState } from 'react'

interface TipJarCardProps {
  creatorName: string
  creatorAvatar: string
  description: string
}

export function TipJarCard({ creatorName, creatorAvatar, description }: TipJarCardProps) {
  const [tipAmount, setTipAmount] = useState('0.001')

  return (
    <div className="bg-surface rounded-lg border border-border shadow-card p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {creatorName.charAt(1).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-fg">{creatorName}</h4>
          <p className="text-muted text-sm">{description}</p>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-muted mb-2">Tip Amount (ETH)</label>
        <input
          type="text"
          value={tipAmount}
          onChange={(e) => setTipAmount(e.target.value)}
          className="w-full px-4 py-2 bg-bg border border-border rounded-lg text-fg focus:outline-none focus:border-accent transition-colors duration-200"
          placeholder="0.001"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {['0.001', '0.005', '0.01'].map((amount) => (
          <button
            key={amount}
            onClick={() => setTipAmount(amount)}
            className="py-2 px-3 bg-bg border border-border rounded-lg text-sm text-muted hover:border-accent hover:text-accent transition-all duration-200"
          >
            {amount} ETH
          </button>
        ))}
      </div>

      <button className="w-full py-2 px-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 flex items-center justify-center gap-2">
        <Heart className="w-4 h-4" />
        Send Tip
      </button>
    </div>
  )
}
