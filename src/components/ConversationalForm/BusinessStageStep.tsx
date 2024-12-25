import React from 'react';
import { BusinessStage } from '../../types';
import { BUSINESS_STAGES } from '../../constants/businessStages';
import { StageOption } from './StageOption';

interface BusinessStageStepProps {
  value: BusinessStage;
  onChange: (value: BusinessStage) => void;
  onNext: () => void;
  onBack: () => void;
  name: string;
}

export function BusinessStageStep({ value, onChange, onNext, onBack, name }: BusinessStageStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="text-2xl font-medium text-gray-700">
        Thanks for sharing, {name}. What stage is your business in?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BUSINESS_STAGES.map((stage) => (
          <StageOption
            key={stage.value}
            stage={stage}
            isSelected={value === stage.value}
            onClick={() => onChange(stage.value)}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!value}
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Start Chat
        </button>
      </div>
    </form>
  );
}