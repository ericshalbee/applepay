import React from 'react';
import PhoneSupport from './PhoneSupport';
import OfficialLinks from './OfficialLinks';
import IPhoneSupport from './IPhoneSupport';
import SocialMediaSupport from './SocialMediaSupport';
import CommonProblems from './CommonProblems';
import EmailSupport from './EmailSupport';

const MainContent: React.FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
          Apple Pay Customer Service: Contact Apple Support for Help
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Apple Pay is a fast and secure mobile payment service that lets you use your iPhone, 
          Apple Watch, iPad, or Mac to make purchases in stores, apps, and online. If you're 
          having trouble with payments, adding cards, verification errors, or unauthorized charges, 
          Apple offers 24/7 customer support.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This guide contains <strong>accurate Apple Pay support contact information</strong>, 
          official links, social channels, and solutions to common problems.
        </p>
      </section>

      <PhoneSupport />
      <OfficialLinks />
      <IPhoneSupport />
      <SocialMediaSupport />
      <CommonProblems />
      <EmailSupport />
    </main>
  );
};

export default MainContent;