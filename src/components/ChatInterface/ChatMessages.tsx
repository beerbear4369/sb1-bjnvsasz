import React from 'react';
import { format } from 'date-fns';
import { useChatStore } from '../../store/useChatStore';
import { MessageBubble } from './MessageBubble';

export function ChatMessages() {
  const messages = useChatStore((state) => state.messages);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}