import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { MessageStatus as Status } from '../../../types/chat';

interface MessageStatusProps {
  status?: Status;
  isError: boolean;
}

export function MessageStatus({ status, isError }: MessageStatusProps) {
  if (!status) return null;
  
  return (
    <span className="ml-1">
      {isError ? (
        <XCircle className="w-4 h-4 text-red-400" />
      ) : (
        <CheckCircle2 className="w-4 h-4 text-blue-200" />
      )}
    </span>
  );
}