import React from 'react';
import { AlertCircle } from 'lucide-react';
import SectionContainer from './SectionContainer';

const EmailSupport: React.FC = () => {
  return (
    <SectionContainer id="email-support" title="📧 Is Email Support Available?">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-gray-800">
              Apple does <strong>not offer email-based customer service</strong> for Apple Pay. 
              For security, always use{' '}
              <a 
                href="https://getsupport.apple.com" 
                className="text-blue-600 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple's Get Support
              </a>{' '}
              to chat or speak with a representative.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default EmailSupport;