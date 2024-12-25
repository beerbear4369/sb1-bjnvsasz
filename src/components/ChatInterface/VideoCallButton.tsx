import React from 'react';
import { Video, Mic, MicOff, VideoOff, PhoneOff } from 'lucide-react';
import { useChatStore } from '../../store/useChatStore';

export function VideoCallButton() {
  const endCall = useChatStore((state) => state.endCall);
  const [isMuted, setIsMuted] = React.useState(false);
  const [isVideoOff, setIsVideoOff] = React.useState(false);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 bg-gray-900 relative">
        <video className="w-full h-full object-cover" />
        <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-800 rounded-lg">
          <video className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
      
      <div className="p-4 bg-gray-50 flex items-center justify-center space-x-4">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`p-3 rounded-full ${
            isMuted ? 'bg-gray-200' : 'bg-gray-100'
          }`}
        >
          {isMuted ? (
            <MicOff className="w-6 h-6 text-gray-600" />
          ) : (
            <Mic className="w-6 h-6 text-gray-600" />
          )}
        </button>
        
        <button
          onClick={() => setIsVideoOff(!isVideoOff)}
          className={`p-3 rounded-full ${
            isVideoOff ? 'bg-gray-200' : 'bg-gray-100'
          }`}
        >
          {isVideoOff ? (
            <VideoOff className="w-6 h-6 text-gray-600" />
          ) : (
            <Video className="w-6 h-6 text-gray-600" />
          )}
        </button>
        
        <button
          onClick={endCall}
          className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
        >
          <PhoneOff className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}