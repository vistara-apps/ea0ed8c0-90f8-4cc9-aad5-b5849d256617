'use client'

import { useState } from 'react'
import { Wallet } from 'lucide-react'

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    setIsConnected(!isConnected)
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-all duration-200 font-medium"
    >
      <Wallet className="w-4 h-4" />
      {isConnected ? 'Connected' : 'Connect Wallet'}
    </button>
  )
}
