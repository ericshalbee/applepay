import React from 'react';
import { Link, MessageCircle, Activity, User } from 'lucide-react';
import SectionContainer from './SectionContainer';

const OfficialLinks: React.FC = () => {
  const links = [
    {
      title: "Apple Pay Help Center",
      url: "https://support.apple.com/apple-pay",
      icon: <Link className="h-5 w-5 text-blue-600" />,
      description: "Complete documentation and troubleshooting guides"
    },
    {
      title: "Start Chat / Call Now",
      url: "https://getsupport.apple.com",
      icon: <MessageCircle className="h-5 w-5 text-blue-600" />,
      description: "Connect directly with Apple support"
    },
    {
      title: "Apple System Status",
      url: "https://www.apple.com/support/systemstatus/",
      icon: <Activity className="h-5 w-5 text-blue-600" />,
      description: "Check if Apple Pay services are experiencing issues"
    },
    {
      title: "Apple ID and Wallet Support",
      url: "https://support.apple.com/apple-id",
      icon: <User className="h-5 w-5 text-blue-600" />,
      description: "Get help with your Apple ID and Apple Wallet"
    }
  ];

  return (
    <SectionContainer id="official-links" title="🌐 Official Apple Pay Support Links">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start group"
          >
            <div className="mr-4 mt-1 p-2 bg-blue-50 rounded-full">
              {link.icon}
            </div>
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{link.description}</p>
            </div>
            <svg 
              className="ml-auto w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

export default OfficialLinks;