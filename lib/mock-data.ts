import { Content, Quest, Subscription } from './types';

export const mockContent: Content[] = [
  {
    contentId: '1',
    type: 'video',
    creatorFid: 9152,
    accessType: 'gated',
    accessRuleId: 'rule-1',
    price: '0.001',
    title: 'Advanced DeFi Strategies',
    description: 'Exclusive masterclass on yield farming and liquidity provision',
    imageUrl: 'https://i.imgur.com/placeholder1.jpg',
  },
  {
    contentId: '2',
    type: 'text',
    creatorFid: 9152,
    accessType: 'gated',
    accessRuleId: 'rule-2',
    title: 'Premium Newsletter',
    description: 'Weekly insights on Base ecosystem developments',
    imageUrl: 'https://i.imgur.com/placeholder2.jpg',
  },
  {
    contentId: '3',
    type: 'image',
    creatorFid: 9152,
    accessType: 'public',
    title: 'Community Art Drop',
    description: 'Free NFT artwork for all community members',
    imageUrl: 'https://i.imgur.com/placeholder3.jpg',
  },
];

export const mockQuests: Quest[] = [
  {
    questId: 'quest-1',
    name: 'Base Builder Challenge',
    description: 'Complete social tasks to unlock exclusive content',
    creatorFid: 9152,
    tasks: [
      {
        taskId: 'task-1',
        type: 'social',
        description: 'Cast about #BaseBuilders',
        requirement: 'Cast with #BaseBuilders hashtag',
        completed: false,
      },
      {
        taskId: 'task-2',
        type: 'social',
        description: 'Follow 3 Base creators',
        requirement: 'Follow at least 3 creators',
        completed: false,
      },
      {
        taskId: 'task-3',
        type: 'onchain',
        description: 'Make a transaction on Base',
        requirement: 'Complete any Base transaction',
        completed: false,
      },
    ],
    rewards: ['content-1', 'content-2'],
    isActive: true,
    progress: 33,
  },
];

export const mockSubscriptions: Subscription[] = [
  {
    subscriptionId: 'sub-1',
    creatorFid: 9152,
    subscriberFid: 1234,
    baseTokenAddress: '0x...',
    amount: '0.01',
    interval: 'monthly',
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    isActive: true,
  },
];
