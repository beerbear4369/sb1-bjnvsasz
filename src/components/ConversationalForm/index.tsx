import React, { useState } from 'react';
import { BusinessStage, StressIssue, UserPersona } from '../../types';
import { NameStep } from './NameStep';
import { IssuesStep } from './IssuesStep';
import { BusinessStageStep } from './BusinessStageStep';

interface ConversationalFormProps {
  onComplete: (persona: UserPersona) => void;
}

export function ConversationalForm({ onComplete }: ConversationalFormProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    issues: {
      selected: [] as StressIssue[],
      customIssue: '',
    },
    businessStage: '' as BusinessStage,
  });

  const handleBack = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  const steps = [
    <NameStep
      key="name"
      value={formData.name}
      onChange={(name) => setFormData({ ...formData, name })}
      onNext={() => setStep(1)}
    />,
    <IssuesStep
      key="issues"
      value={formData.issues}
      onChange={(issues) => setFormData({ ...formData, issues })}
      onNext={() => setStep(2)}
      onBack={handleBack}
      name={formData.name}
    />,
    <BusinessStageStep
      key="stage"
      value={formData.businessStage}
      onChange={(businessStage) => setFormData({ ...formData, businessStage })}
      onNext={() => onComplete(formData as UserPersona)}
      onBack={handleBack}
      name={formData.name}
    />,
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {steps[step]}
    </div>
  );
}