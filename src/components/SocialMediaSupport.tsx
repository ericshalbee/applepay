import React from 'react';
import { Twitter, Facebook, Youtube } from 'lucide-react';
import SectionContainer from './SectionContainer';

const SocialMediaSupport: React.FC = () => {
  const socialLinks = [
    {
      platform: "Twitter",
      handle: "@AppleSupport",
      url: "https://twitter.com/AppleSupport",
      icon: <Twitter className="h-5 w-5" />,
      color: "bg-[#1DA1F2] text-white"
    },
    {
      platform: "Facebook",
      handle: "Apple",
      url: "https://www.facebook.com/apple",
      icon: <Facebook className="h-5 w-5" />,
      color: "bg-[#4267B2] text-white"
    },
    {
      platform: "YouTube",
      handle: "Apple Channel",
      url: "https://www.youtube.com/user/Apple",
      icon: <Youtube className="h-5 w-5" />,
      color: "bg-[#FF0000] text-white"
    }
  ];

  return (
    <SectionContainer id="social-media" title="💬 Apple Pay Support on Social Media">
      <p className="text-gray-700 mb-6">
        Apple doesn't provide one-on-one support via DMs, but their official accounts share updates and tips:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {socialLinks.map((social, index) => (
          <a 
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className={`${social.color} p-3 rounded-full mb-3`}>
              {social.icon}
            </div>
            <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {social.handle}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{social.platform}</p>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

export default SocialMediaSupport;