'use client';

import { Content } from '@/lib/types';
import { Lock, Unlock, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface ContentCardProps {
  content: Content;
  isUnlocked?: boolean;
  onUnlock?: () => void;
}

export function ContentCard({ content, isUnlocked = false, onUnlock }: ContentCardProps) {
  const [loading, setLoading] = useState(false);

  const handleUnlock = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    onUnlock?.();
    setLoading(false);
  };

  return (
    <div className="card transition-smooth hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{content.title}</h3>
          <p className="text-sm text-muted">{content.description}</p>
        </div>
        {content.accessType === 'gated' && (
          <div className="ml-4">
            {isUnlocked ? (
              <Unlock className="w-5 h-5 text-green-400" />
            ) : (
              <Lock className="w-5 h-5 text-accent" />
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded bg-accent bg-opacity-20 text-accent">
            {content.type.toUpperCase()}
          </span>
          {content.price && (
            <span className="text-xs px-2 py-1 rounded bg-surface text-muted">
              {content.price} ETH
            </span>
          )}
        </div>

        {content.accessType === 'gated' && !isUnlocked ? (
          <button
            onClick={handleUnlock}
            disabled={loading}
            className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Unlocking...
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                Unlock
              </>
            )}
          </button>
        ) : (
          <button className="btn-secondary text-sm px-4 py-2 flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            View
          </button>
        )}
      </div>
    </div>
  );
}
