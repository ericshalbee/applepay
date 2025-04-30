import React from 'react';
import { Settings, User, CloudCog, CreditCard, MessageSquare, Phone } from 'lucide-react';
import SectionContainer from './SectionContainer';

const IPhoneSupport: React.FC = () => {
  const steps = [
    {
      icon: <Settings className="h-6 w-6 text-gray-700" />,
      title: "Open Settings",
      description: "Tap the Settings app on your iPhone home screen"
    },
    {
      icon: <User className="h-6 w-6 text-gray-700" />,
      title: "Tap your name > Apple ID",
      description: "Select your Apple ID at the top of the settings menu"
    },
    {
      icon: <CloudCog className="h-6 w-6 text-gray-700" />,
      title: "iCloud & Media Purchases > Support",
      description: "Tap iCloud & Media Purchases, then scroll down to Support"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-gray-700" />,
      title: "Select Apple Pay",
      description: "Choose Apple Pay from the available support options"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Chat",
      description: "Start a live chat with Apple Support"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Call",
      description: "Request a phone call from Apple Support"
    }
  ];

  return (
    <SectionContainer id="iphone-support" title="📱 Contact Apple Pay Support from iPhone">
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-8 bottom-8 w-0.5 bg-gray-200 z-0"></div>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start relative z-10">
              <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${
                index > 3 ? 'bg-blue-50' : 'bg-gray-100'
              }`}>
                {step.icon}
              </div>
              <div className="ml-4 min-h-12 flex flex-col justify-center">
                <h3 className="text-md font-medium text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default IPhoneSupport;