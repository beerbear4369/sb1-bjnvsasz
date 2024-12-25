import { StressIssue } from '../types';

export const STRESS_ISSUES: { value: StressIssue; label: string; description: string }[] = [
  {
    value: 'ISOLATION',
    label: 'Alone at the Top',
    description: 'The Isolation of Leadership'
  },
  {
    value: 'BURNOUT',
    label: 'Burnout Blues',
    description: 'When Passion Turns to Exhaustion'
  },
  {
    value: 'IMPOSTER_SYNDROME',
    label: 'Imposter Syndrome',
    description: 'Fighting Self-Doubt in Success'
  },
  {
    value: 'FINANCIAL_STRESS',
    label: 'Breaking Under Pressure',
    description: 'The Weight of Financial Stress'
  },
  {
    value: 'FEAR_OF_FAILURE',
    label: 'Fear of Failure',
    description: 'The Anxiety of High-Stakes Entrepreneurship'
  },
  {
    value: 'DECISION_FATIGUE',
    label: 'Decision Fatigue',
    description: 'The Endless Struggle for Clarity'
  },
  {
    value: 'RELATIONSHIP_STRAIN',
    label: 'Sacrificed Relationships',
    description: 'When Startups Strain Personal Bonds'
  },
  {
    value: 'UNCERTAINTY',
    label: 'Navigating Uncertainty',
    description: 'Stress in an Unpredictable Journey'
  },
  {
    value: 'LOST_VISION',
    label: 'Losing the Spark',
    description: 'When the Vision Feels Distant'
  },
  {
    value: 'SEEKING_HELP',
    label: 'The Silent Struggle',
    description: 'Overcoming the Stigma of Seeking Help'
  },
  {
    value: 'OTHER',
    label: 'Other',
    description: 'Share your specific challenge'
  }
];