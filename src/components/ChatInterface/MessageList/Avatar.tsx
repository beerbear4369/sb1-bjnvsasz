import React from 'react';
import { User, Dog } from 'lucide-react';

interface AvatarProps {
  isUser: boolean;
}

export function Avatar({ isUser }: AvatarProps) {
  if (isUser) {
    return (
      <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
    );
  }

  return (
    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
      <Dog className="w-5 h-5 text-primary-600" />
    </div>
  );
}