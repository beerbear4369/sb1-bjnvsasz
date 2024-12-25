import React from 'react';
import { useChatStore } from '../../../store/useChatStore';
import { MessageBubble } from './MessageBubble';
import { useScrollToBottom } from '../hooks/useScrollToBottom';

export function MessageList() {
  const messages = useChatStore((state) => state.messages);
  const messagesEndRef = useScrollToBottom<HTMLDivElement>([messages]);

  return (
    <div 
      ref={messagesEndRef}
      className="flex-1 overflow-y-auto p-4 space-y-4"
      role="log"
      aria-label="Chat messages"
    >
      {messages.map((message) => (
        <MessageBubble 
          key={message.id} 
          message={message} 
        />
      ))}
    </div>
  );
}