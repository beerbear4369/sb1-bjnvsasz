import React from 'react';
import { BusinessStage } from '../../types';

interface StageOptionProps {
  stage: {
    value: BusinessStage;
    label: string;
    description: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export function StageOption({ stage, isSelected, onClick }: StageOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-4 text-left rounded-lg border transition-colors ${
        isSelected
          ? 'border-primary-500 bg-primary-50'
          : 'border-gray-200 hover:border-primary-300'
      }`}
    >
      <div className="font-medium">{stage.label}</div>
      <div className="text-sm text-gray-600">{stage.description}</div>
    </button>
  );
}