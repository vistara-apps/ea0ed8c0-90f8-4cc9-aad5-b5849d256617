'use client';

import { useState } from 'react';
import { DollarSign, Send } from 'lucide-react';

interface TipJarProps {
  creatorFid: number;
  creatorName: string;
}

export function TipJar({ creatorFid, creatorName }: TipJarProps) {
  const [amount, setAmount] = useState('0.001');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSendTip = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSuccess(true);
    setLoading(false);
    setTimeout(() => setSuccess(false), 3000);
  };

  const presetAmounts = ['0.001', '0.005', '0.01', '0.05'];

  return (
    <div className="card">
      <div className="flex items-center gap-3 mb-4">
        <DollarSign className="w-6 h-6 text-accent" />
        <div>
          <h3 className="text-lg font-semibold">Tip Jar</h3>
          <p className="text-sm text-muted">Support {creatorName}</p>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Amount (ETH)</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
          placeholder="0.001"
        />
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            onClick={() => setAmount(preset)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth ${
              amount === preset
                ? 'bg-accent text-white'
                : 'bg-surface text-muted hover:bg-opacity-80'
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      <button
        onClick={handleSendTip}
        disabled={loading || success}
        className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-smooth ${
          success
            ? 'bg-green-500 text-white'
            : 'btn-primary'
        }`}
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : success ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            Tip Sent!
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Tip
          </>
        )}
      </button>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
