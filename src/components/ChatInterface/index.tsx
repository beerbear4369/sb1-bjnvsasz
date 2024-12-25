import React from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export function ChatInterface() {
  return (
    <div 
      className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg"
      role="region"
      aria-label="Chat interface"
    >
      <MessageList />
      <MessageInput />
    </div>
  );
}