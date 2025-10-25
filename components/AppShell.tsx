'use client';

import { ReactNode } from 'react';
import { Shield, Zap, Users } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'minimal' | 'frame';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  if (variant === 'minimal' || variant === 'frame') {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-accent" />
              <div>
                <h1 className="text-xl font-bold">Forge Protocol</h1>
                <p className="text-sm text-muted">Reputation-powered access</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn-secondary text-sm px-4 py-2">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t mt-auto" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Gasless Transactions</h3>
                <p className="text-sm text-muted">Seamless payments with Base</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Reputation Gating</h3>
                <p className="text-sm text-muted">Access based on social proof</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-accent mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Community Quests</h3>
                <p className="text-sm text-muted">Collaborative challenges</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted" style={{ borderColor: 'var(--color-border)' }}>
            <p>© 2024 Forge Protocol. Built on Base.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
