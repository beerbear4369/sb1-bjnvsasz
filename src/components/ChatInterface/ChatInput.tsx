import React, { useState } from 'react';
import { Image, Paperclip, Send, Mic } from 'lucide-react';
import { useChatStore } from '../../store/useChatStore';

export function ChatInput() {
  const [message, setMessage] = useState('');
  const sendMessage = useChatStore((state) => state.sendMessage);
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage({
        type: 'text',
        content: message.trim(),
        sender: 'user',
        timestamp: new Date().toISOString(),
        id: Date.now().toString(),
      });

      // Simulate bot response
      setTimeout(() => {
        sendMessage({
          type: 'text',
          content: "I hear you. Could you tell me more about how this is affecting you? I'm here to listen and provide support.",
          sender: 'bot',
          timestamp: new Date().toISOString(),
          id: Date.now().toString(),
        });
      }, 1000);

      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Add image"
        >
          <Image className="w-5 h-5 text-gray-600" />
        </button>
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Attach file"
        >
          <Paperclip className="w-5 h-5 text-gray-600" />
        </button>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 
                   focus:ring-blue-500 focus:border-transparent"
          autoFocus
        />
        
        <button
          type="button"
          onClick={() => setIsRecording(!isRecording)}
          className={`p-2 rounded-full transition-colors ${
            isRecording ? 'bg-blue-500 text-white' : 'hover:bg-gray-100 text-gray-600'
          }`}
          title="Voice message"
        >
          <Mic className="w-5 h-5" />
        </button>
        
        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}