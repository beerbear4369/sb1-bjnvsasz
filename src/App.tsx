import React, { useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { ConversationalForm } from './components/ConversationalForm';
import { ChatInterface } from './components/ChatInterface';
import { UserPersona } from './types';
import { usePersonaStore } from './store/usePersonaStore';
import { useChatStore } from './store/useChatStore';

type Step = 'welcome' | 'form' | 'chat';

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const setPersona = usePersonaStore((state) => state.setPersona);
  const sendMessage = useChatStore((state) => state.sendMessage);

  const handlePersonaComplete = (persona: UserPersona) => {
    // First set the persona
    setPersona(persona);

    // Then prepare the welcome message
    const issuesList = persona.issues.selected
      .map(issue => {
        const label = issue.toLowerCase().replace(/_/g, ' ');
        return label;
      })
      .join(', ');

    // Send the welcome message
    setTimeout(() => {
      sendMessage({
        id: Date.now().toString(),
        type: 'text',
        content: `Hi ${persona.name}, I understand you're dealing with ${issuesList}${
          persona.issues.customIssue ? ` and specifically ${persona.issues.customIssue.toLowerCase()}` : ''
        }. Many founders at the ${persona.businessStage.toLowerCase().replace(/_/g, ' ')} stage face similar challenges. I'm here to listen and help.`,
        sender: 'bot',
        timestamp: new Date().toISOString(),
      });
    }, 500);

    // Finally, transition to chat
    setCurrentStep('chat');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'welcome':
        return <WelcomePage onStart={() => setCurrentStep('form')} />;
      case 'form':
        return <ConversationalForm onComplete={handlePersonaComplete} />;
      case 'chat':
        return <ChatInterface />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {renderStep()}
      </div>
    </div>
  );
}