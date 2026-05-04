/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum TaskTier {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  EXPERT = 'expert',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  points: number;
  tier: TaskTier;
  type: 'video' | 'quiz' | 'game' | 'survey' | 'social';
  cooldown?: number; // in milliseconds
  icon: string;
}

export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  balance: number; // in points
  currentTier: TaskTier;
  level: number;
  experience: number;
  tasksCompleted: number;
  withdrawnTotal: number;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: 'earn' | 'withdraw' | 'invest';
  status: 'pending' | 'completed' | 'failed';
  timestamp: Date;
  description: string;
}
