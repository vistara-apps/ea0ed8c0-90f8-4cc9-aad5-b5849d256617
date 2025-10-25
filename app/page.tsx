'use client';

import { AppShell } from '@/components/AppShell';
import { ContentCard } from '@/components/ContentCard';
import { QuestCard } from '@/components/QuestCard';
import { SubscriptionCard } from '@/components/SubscriptionCard';
import { TipJar } from '@/components/TipJar';
import { ReputationBadge } from '@/components/ReputationBadge';
import { mockContent, mockQuests, mockSubscriptions } from '@/lib/mock-data';
import { UserReputation } from '@/lib/types';
import { useState } from 'react';
import { Sparkles, Lock, Trophy, DollarSign } from 'lucide-react';

const mockReputation: UserReputation = {
  fid: 1234,
  custodyAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  followerCount: 1250,
  castCount: 450,
  reactionCount: 3200,
  onChainAchievements: ['base-builder', 'early-adopter', 'nft-collector'],
};

export default function Home() {
  const [unlockedContent, setUnlockedContent] = useState<Set<string>>(new Set());

  const handleUnlock = (contentId: string) => {
    setUnlockedContent(prev => new Set([...prev, contentId]));
  };

  return (
    <AppShell>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent bg-opacity-20 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Reputation-Powered Access
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Forge Protocol
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Exclusive content, unlocked by your Farcaster reputation and on-chain activity
          </p>
        </div>

        {/* Reputation Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Your Reputation</h2>
          <ReputationBadge reputation={mockReputation} />
        </div>

        {/* Content Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Lock className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold">Gated Content</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockContent.map((content) => (
              <ContentCard
                key={content.contentId}
                content={content}
                isUnlocked={unlockedContent.has(content.contentId)}
                onUnlock={() => handleUnlock(content.contentId)}
              />
            ))}
          </div>
        </div>

        {/* Quests Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold">Active Quests</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockQuests.map((quest) => (
              <QuestCard key={quest.questId} quest={quest} />
            ))}
          </div>
        </div>

        {/* Subscriptions & Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <DollarSign className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Subscriptions</h2>
            </div>
            {mockSubscriptions.map((sub) => (
              <SubscriptionCard key={sub.subscriptionId} subscription={sub} />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold">Support Creators</h2>
            </div>
            <TipJar creatorFid={9152} creatorName="Base Builder" />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
