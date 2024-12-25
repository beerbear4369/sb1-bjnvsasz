import React from 'react';
import { Phone, Video, Info } from 'lucide-react';
import { UserPersona } from '../../types';
import { useChatStore } from '../../store/useChatStore';

interface ChatHeaderProps {
  persona: UserPersona;
}

export function ChatHeader({ persona }: ChatHeaderProps) {
  const startCall = useChatStore((state) => state.startCall);
  
  return (
    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-medium">{persona.name[0]}</span>
        </div>
        <div>
          <h2 className="font-medium">{persona.name}</h2>
          <p className="text-sm text-gray-500">
            {persona.businessStage.replace(/_/g, ' ').toLowerCase()} founder
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => startCall('audio')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Start voice call"
        >
          <Phone className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={() => startCall('video')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Start video call"
        >
          <Video className="w-5 h-5 text-gray-600" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Chat information"
        >
          <Info className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}