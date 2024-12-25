export type BusinessStage = 
  | 'IDEA_STAGE'
  | 'PRE_SEED'
  | 'SEED'
  | 'SERIES_A_OR_BEYOND'
  | 'REVENUE_GENERATING'
  | 'OTHER';

export type StressIssue = 
  | 'ISOLATION'
  | 'BURNOUT'
  | 'IMPOSTER_SYNDROME'
  | 'FINANCIAL_STRESS'
  | 'FEAR_OF_FAILURE'
  | 'DECISION_FATIGUE'
  | 'RELATIONSHIP_STRAIN'
  | 'UNCERTAINTY'
  | 'LOST_VISION'
  | 'SEEKING_HELP'
  | 'OTHER';

export interface UserPersona {
  name: string;
  issues: {
    selected: StressIssue[];
    customIssue?: string;
  };
  businessStage: BusinessStage;
}