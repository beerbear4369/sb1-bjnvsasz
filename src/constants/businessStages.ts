import { BusinessStage } from '../types';

export const BUSINESS_STAGES: { value: BusinessStage; label: string; description: string }[] = [
  {
    value: 'IDEA_STAGE',
    label: 'Idea Stage',
    description: 'You have a concept but haven\'t started building yet'
  },
  {
    value: 'PRE_SEED',
    label: 'Pre-Seed',
    description: 'Building your MVP or initial product'
  },
  {
    value: 'SEED',
    label: 'Seed',
    description: 'Have a product and looking for initial funding'
  },
  {
    value: 'SERIES_A_OR_BEYOND',
    label: 'Series A or Beyond',
    description: 'Raised significant funding and scaling'
  },
  {
    value: 'REVENUE_GENERATING',
    label: 'Revenue Generating',
    description: 'Generating consistent revenue'
  },
  {
    value: 'OTHER',
    label: 'Other',
    description: 'Different stage or prefer not to say'
  }
];