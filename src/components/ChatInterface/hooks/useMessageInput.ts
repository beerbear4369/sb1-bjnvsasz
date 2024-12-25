import { useState, useCallback } from 'react';
import { useChatStore } from '../../../store/useChatStore';

export function useMessageInput() {
  const [message, setMessage] = useState('');
  const sendMessage = useChatStore((state) => state.sendMessage);

  const handleSend = useCallback(async () => {
    if (!message.trim()) return;

    try {
      await sendMessage({
        type: 'text',
        content: message.trim(),
        sender: 'user',
        timestamp: new Date().toISOString(),
        id: Date.now().toString(),
      });
      setMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }, [message, sendMessage]);

  return {
    message,
    setMessage,
    handleSend,
  };
}