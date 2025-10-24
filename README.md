# Forge Protocol

Exclusive content, unlocked by your Farcaster reputation.

## Features

- **Reputation-Based Access Gating**: Set Farcaster-based criteria to grant exclusive access
- **Collaborative Quest XP System**: Drive community engagement through gamified tasks
- **Tip Jar Frames**: Seamless in-feed monetization for creators
- **Subscription Gating**: Decentralized subscription model via Frames

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- Farcaster MiniKit for social features
- Tailwind CSS with Coinbase theme
- TypeScript

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

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Get from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)
- `NEXT_PUBLIC_CHAIN_ID`: Base mainnet (8453) or testnet (84532)
- `NEXT_PUBLIC_RPC_URL`: Base RPC endpoint

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
