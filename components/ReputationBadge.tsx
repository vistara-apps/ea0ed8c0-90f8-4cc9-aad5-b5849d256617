'use client';

import { UserReputation } from '@/lib/types';
import { Shield, Users, MessageSquare, Award } from 'lucide-react';

interface ReputationBadgeProps {
  reputation: UserReputation;
}

export function ReputationBadge({ reputation }: ReputationBadgeProps) {
  const reputationScore = Math.min(
    100,
    Math.floor(
      (reputation.followerCount * 0.4) +
      (reputation.castCount * 0.3) +
      (reputation.reactionCount * 0.2) +
      (reputation.onChainAchievements.length * 10)
    )
  );

  const getReputationLevel = (score: number) => {
    if (score >= 80) return { level: 'Elite', color: 'text-yellow-400' };
    if (score >= 60) return { level: 'Advanced', color: 'text-purple-400' };
    if (score >= 40) return { level: 'Intermediate', color: 'text-blue-400' };
    return { level: 'Beginner', color: 'text-green-400' };
  };

  const { level, color } = getReputationLevel(reputationScore);

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Shield className={`w-8 h-8 ${color}`} />
          <div>
            <h3 className="text-lg font-semibold">Reputation Score</h3>
            <p className={`text-sm font-medium ${color}`}>{level}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">{reputationScore}</p>
          <p className="text-xs text-muted">/ 100</p>
        </div>
      </div>

      <div className="w-full h-2 bg-surface rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-accent transition-smooth"
          style={{ width: `${reputationScore}%` }}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs text-muted">Followers</p>
            <p className="text-sm font-semibold">{reputation.followerCount}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs text-muted">Casts</p>
            <p className="text-sm font-semibold">{reputation.castCount}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs text-muted">Achievements</p>
            <p className="text-sm font-semibold">{reputation.onChainAchievements.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs text-muted">Reactions</p>
            <p className="text-sm font-semibold">{reputation.reactionCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
