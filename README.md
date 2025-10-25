# Forge Protocol

Exclusive content, unlocked by your Farcaster reputation.

## Features

- **Reputation-Based Access Gating**: Gate content based on Farcaster social metrics
- **Collaborative Quest XP System**: Community-driven challenges and rewards
- **Tip Jar Frames**: Seamless creator monetization with gasless transactions
- **Subscription Gating**: Recurring access to premium content

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- MiniKit for Farcaster integration
- TypeScript
- Tailwind CSS (Coinbase theme)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example` and add your API keys

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx            # Main landing page
├── providers.tsx       # OnchainKit + React Query setup
├── globals.css         # Coinbase theme styles
components/
├── AppShell.tsx        # Main app layout
├── ContentCard.tsx     # Gated content display
├── QuestCard.tsx       # Quest progress tracking
├── SubscriptionCard.tsx # Subscription management
├── TipJar.tsx          # Creator tipping interface
├── ReputationBadge.tsx # User reputation display
lib/
├── types.ts            # TypeScript interfaces
├── mock-data.ts        # Sample data for demo
.well-known/
└── farcaster.json      # Farcaster manifest
```

## Base Mini App Integration

This app uses:
- OnchainKit for wallet connections and transactions
- MiniKit for Farcaster social features
- Base network for gasless transactions via Paymaster
- Reputation scoring based on Farcaster activity

## License

MIT
