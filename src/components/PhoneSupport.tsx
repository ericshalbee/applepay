import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import SectionContainer from './SectionContainer';

const PhoneSupport: React.FC = () => {
  return (
    <SectionContainer id="contact-support" title="Contact Apple Pay Customer Service">
      <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">📞 Apple Support Phone Numbers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">United States</h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">1-800-APL-CARE</p>
            <p className="text-lg text-gray-700">(1-800-275-2273)</p>
            <p className="text-sm text-gray-600">Available 24/7 for Apple Pay support</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Canada</h4>
            <p className="text-2xl font-bold text-blue-600 mb-1">1-800-263-3394</p>
            <p className="text-sm text-gray-600">Bilingual support available</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white rounded-lg">
          <p className="text-blue-900 font-medium">
            💡 <strong>Pro Tip:</strong> Have your Apple ID and device information ready when calling for faster service.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="mr-4 p-3 bg-blue-50 rounded-full mb-3">
            <MessageCircle className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Live Chat Support</h3>
            <p className="text-blue-600 font-medium">Available 24/7</p>
            <p className="text-sm text-gray-600 mt-1">Get instant help through Apple's official support chat</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="mr-4 p-3 bg-green-50 rounded-full mb-3">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-2">Phone Support</h3>
          <a 
            href="https://support.apple.com/en-us/HT201232" 
            className="text-blue-600 hover:underline inline-flex items-center font-medium mb-2"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Find Your Local Number
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          <p className="text-sm text-gray-600 mt-1">Available in multiple countries and languages</p>
          <p className="text-sm font-medium text-gray-700 mt-2">US: 1-800-275-2273 | Canada: 1-800-263-3394</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500 rounded">
        <p className="text-gray-700">
          Apple offers automated and live support through multiple channels. Support is available 24/7 for billing, device, and Apple Pay issues through official channels.
        </p>
      </div>
      
      <div className="mt-6 text-center">
        <a 
          href="https://getsupport.apple.com" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Apple Pay Support Now
        </a>
      </div>
    </SectionContainer>
  );
};

export default PhoneSupport;