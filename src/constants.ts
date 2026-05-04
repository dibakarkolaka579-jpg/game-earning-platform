/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Task, TaskTier } from './types';

export const POINTS_PER_CURRENCY = 1000; // 1000 points = 1 Unit (USD/INR)
export const CURRENCY_SYMBOL = '₹';

export const TIER_CONFIG = {
  [TaskTier.BEGINNER]: {
    label: 'Beginner',
    color: 'emerald',
    unlockCriteria: 'Available to all users',
    minPoints: 0,
    multiplier: 1,
  },
  [TaskTier.INTERMEDIATE]: {
    label: 'Intermediate',
    color: 'blue',
    unlockCriteria: 'Complete 20 tasks or earn 500 points',
    minPoints: 500,
    multiplier: 1.5,
  },
  [TaskTier.EXPERT]: {
    label: 'Expert',
    color: 'purple',
    unlockCriteria: 'Reach Level 10 and invest 100 points',
    minPoints: 2000,
    multiplier: 3,
  },
};

export const TASKS: Task[] = [
  {
    id: 'b-1',
    title: 'Watch Ad',
    description: 'Watch a 30-second sponsored video.',
    points: 10,
    tier: TaskTier.BEGINNER,
    type: 'video',
    icon: 'Play',
  },
  {
    id: 'b-2',
    title: 'Daily Check-in',
    description: 'Claim your daily reward.',
    points: 5,
    tier: TaskTier.BEGINNER,
    type: 'social',
    icon: 'Calendar',
  },
  {
    id: 'i-1',
    title: 'Math Quiz',
    description: 'Solve 5 quick math problems.',
    points: 50,
    tier: TaskTier.INTERMEDIATE,
    type: 'quiz',
    icon: 'Brain',
  },
  {
    id: 'i-2',
    title: 'Survey',
    description: 'Tell us about your shopping habits.',
    points: 100,
    tier: TaskTier.INTERMEDIATE,
    type: 'survey',
    icon: 'ClipboardList',
  },
  {
    id: 'e-1',
    title: 'Mega Quest',
    description: 'Complete the level 5 challenge in the RPG game.',
    points: 500,
    tier: TaskTier.EXPERT,
    type: 'game',
    icon: 'Trophy',
  },
];
