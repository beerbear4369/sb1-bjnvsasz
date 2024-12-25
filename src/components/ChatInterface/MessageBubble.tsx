import React from 'react';
import { format } from 'date-fns';
import { Message } from '../../types/chat';
import { Image, Play, FileText, Download } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.sender === 'user';
  
  const renderContent = () => {
    switch (message.type) {
      case 'text':
        return <p className="text-sm whitespace-pre-wrap">{message.content}</p>;
      case 'image':
        return (
          <div className="relative">
            <img 
              src={message.content} 
              alt="Shared image" 
              className="rounded-lg max-w-[300px] max-h-[300px] object-cover"
            />
            <button className="absolute bottom-2 right-2 p-1 bg-black/50 rounded-full">
              <Download className="w-4 h-4 text-white" />
            </button>
          </div>
        );
      case 'video':
        return (
          <div className="relative w-[300px] h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
            <Play className="w-12 h-12 text-gray-500" />
            <video src={message.content} className="hidden" />
          </div>
        );
      case 'file':
        return (
          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
            <FileText className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-700">{message.content}</span>
            <Download className="w-4 h-4 text-gray-500" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
          <span className="text-blue-600 text-sm font-medium">B</span>
        </div>
      )}
      <div
        className={`max-w-[70%] ${
          isUser
            ? 'bg-blue-600 text-white rounded-l-lg rounded-tr-lg'
            : 'bg-gray-100 text-gray-800 rounded-r-lg rounded-tl-lg'
        } p-3 space-y-1`}
      >
        {renderContent()}
        <div className={`text-xs ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
          {format(new Date(message.timestamp), 'HH:mm')}
        </div>
      </div>
      {isUser && (
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center ml-2">
          <span className="text-white text-sm font-medium">U</span>
        </div>
      )}
    </div>
  );
}