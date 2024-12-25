export type MessageType = 'text' | 'image' | 'video' | 'file' | 'voice';
export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'error';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  sender: 'user' | 'bot';
  timestamp: string;
  status?: MessageStatus;
  error?: string;
  metadata?: {
    fileName?: string;
    fileSize?: number;
    duration?: number;
    dimensions?: {
      width: number;
      height: number;
    };
  };
}