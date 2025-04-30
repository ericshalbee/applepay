import React, { useState } from 'react';
import SectionContainer from './SectionContainer';

interface Problem {
  problem: string;
  solution: string;
}

const CommonProblems: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const problems: Problem[] = [
    {
      problem: "Apple Pay not working",
      solution: "Restart device, update iOS, re-add card"
    },
    {
      problem: "Payment declined",
      solution: "Check Wallet app for correct card details and funds"
    },
    {
      problem: "Card not supported",
      solution: "Confirm card eligibility with your bank"
    },
    {
      problem: "Apple Pay verification failed",
      solution: "Contact your bank and try manual verification"
    },
    {
      problem: "Unauthorized charge",
      solution: "Report via Wallet app and contact Apple"
    },
    {
      problem: "Lost phone",
      solution: "Lock Apple Pay via iCloud Find My"
    }
  ];

  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <SectionContainer id="common-problems" title="🛠 Common Apple Pay Problems & How to Fix">
      <div className="space-y-4">
        {problems.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full px-6 py-4 text-left font-medium flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
            >
              <span>{item.problem}</span>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedIndex === index ? 'transform rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              className={`px-6 py-4 border-t border-gray-200 bg-gray-50 transition-all duration-200 ${
                expandedIndex === index ? 'block' : 'hidden'
              }`}
            >
              <p className="text-gray-700">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default CommonProblems;