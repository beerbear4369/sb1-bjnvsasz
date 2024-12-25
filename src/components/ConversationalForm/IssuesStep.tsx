import React, { useState } from 'react';
import { StressIssue } from '../../types';
import { STRESS_ISSUES } from '../../constants/issues';

interface IssuesStepProps {
  value: {
    selected: StressIssue[];
    customIssue?: string;
  };
  onChange: (value: { selected: StressIssue[]; customIssue?: string }) => void;
  onNext: () => void;
  onBack: () => void;
  name: string;
}

export function IssuesStep({ value, onChange, onNext, onBack, name }: IssuesStepProps) {
  const [showCustomInput, setShowCustomInput] = useState(false);

  const toggleIssue = (issue: StressIssue) => {
    const isSelected = value.selected.includes(issue);
    let newSelected: StressIssue[];
    
    if (isSelected) {
      newSelected = value.selected.filter(i => i !== issue);
    } else {
      newSelected = [...value.selected, issue];
    }

    if (issue === 'OTHER') {
      setShowCustomInput(!isSelected);
      if (!isSelected) {
        onChange({ selected: newSelected, customIssue: '' });
      } else {
        const { customIssue, ...rest } = value;
        onChange({ ...rest, selected: newSelected });
      }
    } else {
      onChange({ ...value, selected: newSelected });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.selected.length > 0) onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
      <div className="text-2xl font-medium text-gray-700">
        Hi {name}, what challenges are you facing right now?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STRESS_ISSUES.map((issue) => (
          <button
            key={issue.value}
            type="button"
            onClick={() => toggleIssue(issue.value)}
            className={`p-4 text-left rounded-lg border transition-colors ${
              value.selected.includes(issue.value)
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-primary-300'
            }`}
          >
            <div className="font-medium">{issue.label}</div>
            <div className="text-sm text-gray-600">{issue.description}</div>
          </button>
        ))}
      </div>

      {showCustomInput && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Please describe your specific challenge:
          </label>
          <textarea
            value={value.customIssue}
            onChange={(e) => onChange({ ...value, customIssue: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                     focus:ring-primary-500 focus:border-transparent h-24"
            placeholder="Share your challenge with us..."
          />
        </div>
      )}

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
          disabled={value.selected.length === 0}
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </form>
  );
}