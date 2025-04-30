import React from 'react';
import { Phone } from 'lucide-react';
import SectionContainer from './SectionContainer';

const PhoneSupport: React.FC = () => {
  return (
    <SectionContainer id="phone-support" title="📞 Apple Pay Customer Service Phone Numbers">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center">
          <div className="mr-4 p-3 bg-blue-50 rounded-full">
            <Phone className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Toll-Free (USA)</h3>
            <p className="text-blue-600 font-medium">1‑800‑MY‑APPLE (1‑800‑692‑7753)</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="font-medium text-gray-900 mb-2">International Support</h3>
          <a 
            href="https://support.apple.com/en-us/HT201232" 
            className="text-blue-600 hover:underline inline-flex items-center font-medium"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Global Support Directory
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
        <p className="text-gray-700">
          Apple offers automated and live support. Phone support is available 24/7 for billing, device, and Apple Pay issues.
        </p>
      </div>
    </SectionContainer>
  );
};

export default PhoneSupport;