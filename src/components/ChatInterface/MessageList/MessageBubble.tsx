import React from 'react';
import { format } from 'date-fns';
import { Message } from '../../../types/chat';
import { Avatar } from './Avatar';
import { MessageStatus } from './MessageStatus';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  const hasError = message.status === 'error';

  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-start gap-2`}
      role="listitem"
    >
      {!isUser && <Avatar isUser={false} />}
      
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isUser 
            ? 'bg-primary-500 text-white' 
            : 'bg-primary-50 text-gray-800'
        }`}
      >
        <p className="text-sm whitespace-pre-wrap break-words">
          {message.content}
        </p>
        
        <div className="flex items-center justify-end space-x-1 mt-1">
          <span className={`text-xs ${isUser ? 'text-primary-100' : 'text-primary-600'}`}>
            {format(new Date(message.timestamp), 'HH:mm')}
          </span>
          
          {isUser && <MessageStatus status={message.status} isError={hasError} />}
        </div>
      </div>

      {isUser && <Avatar isUser={true} />}
    </div>
  );
}