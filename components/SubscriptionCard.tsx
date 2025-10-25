'use client';

import { Subscription } from '@/lib/types';
import { Calendar, DollarSign, CheckCircle2 } from 'lucide-react';

interface SubscriptionCardProps {
  subscription: Subscription;
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const daysRemaining = Math.ceil(
    (subscription.endDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">Premium Subscription</h3>
          <p className="text-sm text-muted">Access to exclusive content</p>
        </div>
        {subscription.isActive && (
          <CheckCircle2 className="w-6 h-6 text-green-400" />
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs text-muted">Amount</p>
            <p className="text-sm font-semibold">{subscription.amount} ETH</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-accent" />
          <div>
            <p className="text-xs text-muted">Interval</p>
            <p className="text-sm font-semibold capitalize">{subscription.interval}</p>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-surface bg-opacity-50 mb-4">
        <p className="text-sm text-muted mb-1">Next renewal</p>
        <p className="text-sm font-semibold">{daysRemaining} days remaining</p>
      </div>

      <button className="btn-secondary w-full">
        Manage Subscription
      </button>
    </div>
  );
}
