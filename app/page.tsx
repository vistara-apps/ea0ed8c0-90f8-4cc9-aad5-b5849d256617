'use client'

import { useState, useEffect } from 'react'
import { Lock, Unlock, Zap, Users, TrendingUp, Shield } from 'lucide-react'
import { ConnectWallet } from '@/components/ConnectWallet'
import { GatedContentCard } from '@/components/GatedContentCard'
import { SubscriptionCard } from '@/components/SubscriptionCard'
import { QuestCard } from '@/components/QuestCard'
import { TipJarCard } from '@/components/TipJarCard'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-fg">Forge Protocol</h1>
                <p className="text-sm text-muted">Reputation-Gated Content</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-semibold text-fg mb-4">
            Exclusive Content, Unlocked by Your Reputation
          </h2>
          <p className="text-lg text-muted leading-7">
            Gate content, experiences, and subscriptions based on Farcaster social reputation and on-chain activity. Enable seamless, gasless value exchange.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-surface rounded-lg p-6 border border-border shadow-card">
            <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">Reputation Gating</h3>
            <p className="text-muted leading-7">
              Set Farcaster-based criteria to grant exclusive access to your premium content.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 border border-border shadow-card">
            <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">Collaborative Quests</h3>
            <p className="text-muted leading-7">
              Drive community engagement through gamified social and on-chain tasks.
            </p>
          </div>

          <div className="bg-surface rounded-lg p-6 border border-border shadow-card">
            <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-fg mb-2">Gasless Payments</h3>
            <p className="text-muted leading-7">
              Seamless tips and subscriptions with sponsored transactions on Base.
            </p>
          </div>
        </div>

        {/* Content Showcase */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-semibold text-fg">Featured Content</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GatedContentCard
                title="Premium Alpha Report"
                description="Exclusive market insights for verified community members"
                requirement="500+ followers"
                isLocked={true}
                imageUrl="/placeholder-content-1.jpg"
              />
              <GatedContentCard
                title="Advanced Trading Strategies"
                description="Deep dive into DeFi strategies and risk management"
                requirement="Base Builder NFT"
                isLocked={false}
                imageUrl="/placeholder-content-2.jpg"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Unlock className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-semibold text-fg">Active Subscriptions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SubscriptionCard
                title="Creator Pro Access"
                description="Monthly access to all premium content and exclusive community"
                price="0.01 ETH"
                interval="monthly"
                isActive={true}
              />
              <SubscriptionCard
                title="Weekly Insights"
                description="Weekly market analysis and trading signals"
                price="0.003 ETH"
                interval="weekly"
                isActive={false}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-semibold text-fg">Community Quests</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <QuestCard
                title="Base Builder Challenge"
                description="Complete social tasks to unlock exclusive NFT and content access"
                progress={65}
                reward="Exclusive NFT + Premium Access"
              />
              <QuestCard
                title="Community Growth Quest"
                description="Help grow the community and earn reputation points"
                progress={40}
                reward="Reputation Boost + Badges"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-semibold text-fg">Support Creators</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TipJarCard
                creatorName="@basedcreator"
                creatorAvatar="/placeholder-avatar-1.jpg"
                description="Supporting quality content creation on Base"
              />
              <TipJarCard
                creatorName="@defibuilder"
                creatorAvatar="/placeholder-avatar-2.jpg"
                description="Building the future of decentralized finance"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/50 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-fg font-semibold">Forge Protocol</span>
            </div>
            <p className="text-muted text-sm">
              Built on Base • Powered by Farcaster
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
