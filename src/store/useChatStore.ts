import { create } from 'zustand';
import { Message, MessageStatus } from '../types/chat';
import { validateTextMessage, validateImage, validateVideo } from '../utils/mediaValidation';

interface ChatStore {
  messages: Message[];
  isCallActive: boolean;
  callType: 'audio' | 'video' | null;
  isLoading: boolean;
  error: string | null;
  
  sendMessage: (message: Omit<Message, 'id' | 'timestamp' | 'status'>) => Promise<void>;
  updateMessageStatus: (id: string, status: MessageStatus, error?: string) => void;
  startCall: (type: 'audio' | 'video') => void;
  endCall: () => void;
  clearError: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [{
    id: '1',
    type: 'text',
    content: "Hi there! I'm Bear, your founder's companion. The entrepreneurial journey can be challenging, but you don't have to face it alone. Whether you're dealing with startup stress, decision-making pressure, or just need someone to talk to, I'm here to support you. What's on your mind today? 🐻",
    sender: 'bot',
    timestamp: new Date().toISOString(),
    status: 'delivered'
  }],
  isCallActive: false,
  callType: null,
  isLoading: false,
  error: null,

  sendMessage: async (message) => {
    const id = Date.now().toString();
    const timestamp = new Date().toISOString();
    
    set((state) => ({
      messages: [...state.messages, { ...message, id, timestamp, status: 'sending' }],
    }));

    try {
      let validationError = null;
      switch (message.type) {
        case 'text':
          validationError = validateTextMessage(message.content);
          break;
        case 'image':
          validationError = await validateImage(message.content as unknown as File);
          break;
        case 'video':
          validationError = await validateVideo(message.content as unknown as File);
          break;
      }

      if (validationError) {
        throw new Error(validationError);
      }

      await new Promise(resolve => setTimeout(resolve, 1000));

      set((state) => ({
        messages: state.messages.map(msg =>
          msg.id === id ? { ...msg, status: 'delivered' as MessageStatus } : msg
        ),
      }));

    } catch (error) {
      set((state) => ({
        messages: state.messages.map(msg =>
          msg.id === id ? { ...msg, status: 'error' as MessageStatus, error: error.message } : msg
        ),
        error: error.message,
      }));
    }
  },

  updateMessageStatus: (id, status, error) =>
    set((state) => ({
      messages: state.messages.map(msg =>
        msg.id === id ? { ...msg, status, error } : msg
      ),
    })),

  startCall: (type) => set({ isCallActive: true, callType: type }),
  endCall: () => set({ isCallActive: false, callType: null }),
  clearError: () => set({ error: null }),
}));