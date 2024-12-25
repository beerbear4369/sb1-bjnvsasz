import React, { FormEvent } from 'react';
import { Send } from 'lucide-react';
import { useMessageInput } from '../hooks/useMessageInput';

export function MessageInput() {
  const { message, setMessage, handleSend } = useMessageInput();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-4 border-t border-gray-200"
    >
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full 
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          maxLength={1000}
          aria-label="Message input"
        />
        
        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 
                   transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}