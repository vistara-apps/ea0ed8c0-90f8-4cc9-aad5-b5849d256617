export interface UserReputation {
  fid: number;
  custodyAddress: string;
  followerCount: number;
  castCount: number;
  reactionCount: number;
  onChainAchievements: string[];
}

export interface Content {
  contentId: string;
  type: 'text' | 'image' | 'video' | 'link';
  creatorFid: number;
  accessType: 'public' | 'gated';
  accessRuleId?: string;
  price?: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface AccessRule {
  ruleId: string;
  creatorFid: number;
  gatingConditions: {
    minFollowers?: number;
    requiredFids?: number[];
    requiredAchievements?: string[];
    requiredSubscriptionId?: string;
    questId?: string;
  };
  ruleType: 'reputation' | 'subscription' | 'quest';
}

export interface Subscription {
  subscriptionId: string;
  creatorFid: number;
  subscriberFid: number;
  baseTokenAddress: string;
  amount: string;
  interval: 'daily' | 'weekly' | 'monthly';
  startDate: Date;
  endDate: Date;
  isActive: boolean;
}

export interface Quest {
  questId: string;
  name: string;
  description: string;
  creatorFid: number;
  tasks: QuestTask[];
  rewards: string[];
  isActive: boolean;
  progress?: number;
}

export interface QuestTask {
  taskId: string;
  type: 'social' | 'onchain';
  description: string;
  requirement: string;
  completed: boolean;
}
