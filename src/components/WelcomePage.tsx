import React from 'react';
import { Dog } from 'lucide-react';

interface WelcomePageProps {
  onStart: () => void;
}

export function WelcomePage({ onStart }: WelcomePageProps) {
  return (
    <div className="text-center space-y-6">
      <div className="flex items-center justify-center space-x-2">
        <Dog className="w-8 h-8 text-primary-500" />
        <h1 className="text-4xl font-bold text-gray-800">Bearly Alone</h1>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Welcome, Founder! I'm Bear, your dedicated companion in the entrepreneurial journey. 
        Let's navigate the challenges of building your business together, because no founder should walk this path alone.
      </p>
      <button
        onClick={onStart}
        className="px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 
                 transition-colors shadow-lg hover:shadow-xl"
      >
        Start Your Journey
      </button>
    </div>
  );
}