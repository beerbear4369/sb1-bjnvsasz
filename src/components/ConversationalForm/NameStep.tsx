import React from 'react';

interface NameStepProps {
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
}

export function NameStep({ value, onChange, onNext }: NameStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
      <div className="text-2xl font-medium text-gray-700">
        Hi there! I'm Bear, your founder's companion. What's your name?
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:ring-2 
                 focus:ring-primary-500 focus:border-transparent"
        placeholder="Enter your name"
        autoFocus
      />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!value.trim()}
          className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </form>
  );
}