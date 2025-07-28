import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Wallet, AlertTriangle, CheckCircle, ArrowLeft, CreditCard, Shield, Clock, Globe, Lock, DollarSign, Users, Smartphone, Bell, FileText, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionContainer from '../components/SectionContainer';

const AppleWalletSupport: React.FC = () => {
  // Schema markup for Apple Wallet support page
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apple Wallet Customer Service: 24/7 Support Help Guide",
    "description": "Need help with Apple Wallet? Learn how to contact Apple Wallet support, add cards, manage passes, and troubleshoot issues.",
    "url": "https://iphonesupport.netlify.app/apple-wallet-support",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Apple Wallet the same as Apple Pay?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Apple Wallet stores your cards and passes. Apple Pay is the payment system used within Wallet."
          }
        },
        {
          "@type": "Question",
          "name": "Can I talk to a live person for Wallet issues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can contact Apple Support through official channels for Apple Wallet assistance."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my card declined in Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Possible reasons include expired cards, bank restrictions, or an outdated iOS version."
          }
        },
        {
          "@type": "Question",
          "name": "Why won't my card add to Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cards may not add to Apple Wallet due to bank restrictions, unsupported card types, outdated iOS, or account issues. Ensure your card is from a participating bank, your iOS is updated, and contact your bank to confirm Apple Pay is enabled on your account."
          }
        },
        {
          "@type": "Question",
          "name": "How do I remove a card from Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To remove a card from Apple Wallet: Open Wallet app → Tap the card you want to remove → Tap the three dots (•••) → Scroll down and tap 'Remove This Card' → Confirm removal. You can also remove cards through Settings → Wallet & Apple Pay."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Apple Wallet without internet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Apple Wallet works offline for most functions. Your stored cards, passes, and tickets are available without internet. However, you need internet to add new cards, update passes, or sync changes across devices. Apple Pay transactions also work offline at contactless terminals."
          }
        },
        {
          "@type": "Question",
          "name": "How do I add boarding passes to Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Boarding passes can be added to Apple Wallet through airline apps, email confirmations, or by scanning QR codes. Most airlines automatically offer the 'Add to Apple Wallet' option when you check in online or through their mobile app. The pass will update automatically with gate changes."
          }
        },
        {
          "@type": "Question",
          "name": "What happens to my Wallet if I lose my iPhone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you lose your iPhone, you can suspend your cards immediately using Find My iPhone or by calling your card issuers. Your Wallet data is encrypted and requires Face ID/Touch ID to access. You can also remotely erase your device to protect your information."
          }
        },
        {
          "@type": "Question",
          "name": "How do I organize cards in Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can organize cards in Apple Wallet by dragging them to reorder. Your most frequently used card will automatically appear first. You can also set a default card for Apple Pay in Settings → Wallet & Apple Pay → Default Card."
          }
        },
        {
          "@type": "Question",
          "name": "Can I share passes from Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some passes in Apple Wallet can be shared via AirDrop, Messages, or email, depending on the pass type and issuer's settings. Look for the share button on individual passes. However, payment cards cannot be shared for security reasons."
          }
        },
        {
          "@type": "Question",
          "name": "Why are my passes not updating in Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Passes may not update due to poor internet connection, disabled background app refresh, or issuer problems. Check your internet connection, enable Background App Refresh for Wallet in Settings, and ensure automatic updates are enabled for passes."
          }
        },
        {
          "@type": "Question",
          "name": "How do I backup my Apple Wallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apple Wallet data is automatically backed up with iCloud Backup when enabled. Your cards and passes will restore when you set up a new device with the same Apple ID. However, you may need to re-verify payment cards for security reasons."
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://iphonesupport.netlify.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Apple Wallet Support",
          "item": "https://iphonesupport.netlify.app/apple-wallet-support"
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "Apple Wallet",
      "description": "Digital wallet service for iPhone users",
      "provider": {
        "@type": "Organization",
        "name": "Apple Inc."
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Apple Wallet Customer Service – Contact Apple Wallet Support 24/7</title>
        <meta name="description" content="Contact Apple Wallet customer service 24/7 for card issues, pass management, and troubleshooting. Get Apple Wallet support via phone, chat, or Apple Support app." />
        <meta name="keywords" content="Apple Wallet customer service, Apple Wallet support, contact Apple Wallet support, Apple Wallet phone number, Apple Wallet help, Apple Wallet not working, Apple Wallet customer service number, Apple Wallet support chat, Apple Pay wallet help, Apple Wallet card issues, Apple Wallet pass management, Apple Wallet troubleshooting, Apple Wallet setup, Apple Wallet add card, Apple Wallet remove card, Apple Wallet transit pass, Apple Wallet boarding pass, USA, Canada" />
        <link rel="canonical" href="https://iphonesupport.netlify.app/apple-wallet-support" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Apple Wallet Customer Service – Contact Apple Wallet Support 24/7" />
        <meta property="og:description" content="Contact Apple Wallet customer service 24/7 for card issues, pass management, and troubleshooting. Get Apple Wallet support via phone, chat, or Apple Support app." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iphonesupport.netlify.app/apple-wallet-support" />
        <meta property="og:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Apple Wallet Customer Service Support" />
        <meta property="article:publisher" content="https://www.facebook.com/apple" />
        <meta property="article:author" content="Apple Wallet Support Team" />
        <meta property="article:section" content="Customer Support" />
        <meta property="article:tag" content="Apple Wallet" />
        <meta property="article:tag" content="Digital Wallet" />
        <meta property="article:tag" content="Mobile Payments" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apple Wallet Customer Service – Contact Apple Wallet Support 24/7" />
        <meta name="twitter:description" content="Contact Apple Wallet customer service 24/7 for card issues, pass management, and troubleshooting. Get Apple Wallet support via phone, chat, or Apple Support app." />
        <meta name="twitter:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta name="twitter:creator" content="@AppleSupport" />
        <meta name="twitter:site" content="@AppleSupport" />
        <meta name="twitter:label1" content="Support Available" />
        <meta name="twitter:data1" content="24/7" />
      </Helmet>
      
      {/* Schema markup */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      
      <Header />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900 font-medium">Apple Wallet Support</span>
              </li>
            </ol>
          </nav>
          <a 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Return to Apple Pay Support homepage"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Apple Pay Support
          </a>
        </div>

        <section className="mb-12 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900" id="main-heading">
            Apple Wallet Support: Customer Service Help & Contact Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Need Apple Wallet customer service help? This comprehensive Apple Wallet support guide shows you how to contact 
            Apple Wallet customer service representatives, add and manage cards, troubleshoot pass issues, and resolve 
            payment problems. Whether you're experiencing Apple Wallet card issues or need assistance with Apple Wallet 
            pass management, we'll help you find the right Apple Wallet support solution quickly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apple Wallet customer service is available 24/7 through multiple channels including phone support, live chat, 
            and in-app assistance. Our Apple Wallet support guide covers everything from basic card management to advanced 
            troubleshooting, helping you resolve Apple Wallet issues efficiently with official customer service channels.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Looking for help with other Apple payment services? We also provide detailed support guides for{' '}
            <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Cash customer service
            </Link>
            {' '}and{' '}
            <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Card support
            </Link>
            . For general Apple Pay assistance, visit our{' '}
            <Link to="/" className="text-blue-600 hover:text-blue-800 underline font-medium">
              main Apple Pay support page
            </Link>
            .
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
              📞 How to Contact Apple Wallet Customer Service
            </h2>
            <div className="mb-4 p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Apple Wallet Support Options</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-medium text-gray-700">Apple Support Website:</p>
                  <p className="text-xl font-bold text-blue-600">Get Support Online</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Apple Support App:</p>
                  <p className="text-xl font-bold text-purple-600">In-App Assistance</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat Support</h3>
                <p className="text-blue-600 font-bold text-lg">24/7 Availability</p>
                <p className="text-sm text-gray-600">Direct support through Apple's official website</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Device Settings</h3>
                <p className="text-purple-600 font-medium">Built-in Help</p>
                <p className="text-sm text-gray-600">Access support directly from your iPhone settings</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-blue-900 font-medium">
                <strong>Quick Action:</strong> Need immediate help? 
                <a 
                  href="https://support.apple.com/wallet" 
                  className="text-blue-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Apple Wallet customer service help now"
                >
                  Get Apple Wallet support now
                </a>
              </p>
            </div>
          </div>
        </section>

        <SectionContainer id="what-is-apple-wallet" title="What is Apple Wallet? Complete Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Apple Wallet is a digital wallet app that stores your credit cards, debit cards, boarding passes, 
              event tickets, loyalty cards, and other passes on your iPhone, iPad, or Apple Watch. It's the 
              foundation for Apple Pay and provides secure storage for all your important cards and passes 
              in one convenient location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="h-5 w-5 text-blue-600 mr-2" />
                  What Apple Wallet Stores
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Credit and debit cards for Apple Pay
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Boarding passes and event tickets
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Store loyalty cards and membership cards
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Transit cards and student ID cards
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  Apple Wallet Security Features
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">1</span>
                    Face ID and Touch ID authentication
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">2</span>
                    Encrypted card information storage
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">3</span>
                    Device-specific security codes
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">4</span>
                    Remote card suspension via Find My
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://support.apple.com/wallet" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About Apple Wallet
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="add-cards-to-wallet" title="How to Add Cards to Apple Wallet: Step-by-Step Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Adding cards to Apple Wallet is simple and secure. Whether you're adding a credit card, debit card, 
              or prepaid card, Apple Wallet customer service recommends following these steps to ensure your cards 
              are properly set up for Apple Pay and other wallet features.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                  Add Card via Wallet App
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Wallet app on your iPhone
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap the plus sign (+) in the upper right corner
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Select "Debit or Credit Card"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Use camera to scan card or enter details manually
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">5</span>
                    Verify with your bank via SMS, call, or app
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-2" />
                  Add Card via Settings
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open Settings on your iPhone
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap "Wallet & Apple Pay"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Tap "Add Card\" under Payment Cards
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Follow the same steps as Wallet app method
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">5</span>
                    Configure card settings and preferences
                  </li>
                </ol>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Card Verification Requirements</h3>
              <ul className="text-yellow-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  Card must be issued by a participating bank or financial institution
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  Account must be in good standing with no restrictions
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                  You may need to verify via SMS, phone call, or banking app
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => alert('Open Wallet app → Tap + → Select Debit or Credit Card')}
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors"
                >
                  Add Card to Wallet Now
                </button>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-wallet-faqs" title="Apple Wallet Customer Support: Frequently Asked Questions">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              Get instant answers to the most common Apple Wallet questions. These comprehensive FAQs cover 
              card management, pass storage, troubleshooting, and customer service topics to help you resolve 
              issues quickly without waiting for support.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Is Apple Wallet the same as Apple Pay?
              </h3>
              <p className="text-gray-700">
                No, Apple Wallet and Apple Pay are different but related services. Apple Wallet is the app that stores 
                your cards, passes, and tickets. Apple Pay is the payment system that uses the cards stored in your 
                Wallet to make purchases. Think of Wallet as the storage and Pay as the payment method.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Why won't my card add to Apple Wallet?
              </h3>
              <p className="text-gray-700">
                Cards may not add to Apple Wallet due to bank restrictions, unsupported card types, outdated iOS, 
                or account issues. Ensure your card is from a participating bank, your iOS is updated, and contact 
                your bank to confirm Apple Pay is enabled on your account.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I remove a card from Apple Wallet?
              </h3>
              <p className="text-gray-700">
                To remove a card from Apple Wallet: Open Wallet app → Tap the card you want to remove → Tap the 
                three dots (•••) → Scroll down and tap "Remove This Card" → Confirm removal. You can also remove 
                cards through Settings → Wallet & Apple Pay.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Can I use Apple Wallet without internet?
              </h3>
              <p className="text-gray-700">
                Yes, Apple Wallet works offline for most functions. Your stored cards, passes, and tickets are 
                available without internet. However, you need internet to add new cards, update passes, or sync 
                changes across devices. Apple Pay transactions also work offline at contactless terminals.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I add boarding passes to Apple Wallet?
              </h3>
              <p className="text-gray-700">
                Boarding passes can be added to Apple Wallet through airline apps, email confirmations, or by 
                scanning QR codes. Most airlines automatically offer the "Add to Apple Wallet" option when you 
                check in online or through their mobile app. The pass will update automatically with gate changes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                What happens to my Wallet if I lose my iPhone?
              </h3>
              <p className="text-gray-700">
                If you lose your iPhone, you can suspend your cards immediately using Find My iPhone or by calling 
                your card issuers. Your Wallet data is encrypted and requires Face ID/Touch ID to access. You can 
                also remotely erase your device to protect your information.
              </p>
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-cash-support" className="text-blue-600 hover:underline">Apple Cash security</Link>
                {' | '}
                <Link to="/apple-card-support" className="text-blue-600 hover:underline">Apple Card fraud protection</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I organize cards in Apple Wallet?
              </h3>
              <p className="text-gray-700">
                You can organize cards in Apple Wallet by dragging them to reorder. Your most frequently used card 
                will automatically appear first. You can also set a default card for Apple Pay in Settings → 
                Wallet & Apple Pay → Default Card.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Can I share passes from Apple Wallet?
              </h3>
              <p className="text-gray-700">
                Some passes in Apple Wallet can be shared via AirDrop, Messages, or email, depending on the pass 
                type and issuer's settings. Look for the share button on individual passes. However, payment cards 
                cannot be shared for security reasons.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Why are my passes not updating in Apple Wallet?
              </h3>
              <p className="text-gray-700">
                Passes may not update due to poor internet connection, disabled background app refresh, or issuer 
                problems. Check your internet connection, enable Background App Refresh for Wallet in Settings, 
                and ensure automatic updates are enabled for passes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I backup my Apple Wallet?
              </h3>
              <p className="text-gray-700">
                Apple Wallet data is automatically backed up with iCloud Backup when enabled. Your cards and passes 
                will restore when you set up a new device with the same Apple ID. However, you may need to re-verify 
                payment cards for security reasons.
              </p>
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/" className="text-blue-600 hover:underline">Apple Pay device setup</Link>
                {' | '}
                <Link to="/apple-cash-support" className="text-blue-600 hover:underline">Apple Cash setup</Link>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="final-thoughts" title="Apple Wallet Support Summary & Next Steps">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-900 mb-3">Get Apple Wallet Help When You Need It</h3>
                <div className="space-y-3 text-blue-800">
                  <p>
                    Apple Wallet customer service is designed to make digital card and pass management simple and secure. 
                    Whether you need help with adding cards, managing passes, troubleshooting issues, or understanding 
                    features, multiple support channels are available to assist you quickly and effectively.
                  </p>
                  <p>
                    Remember that Apple's official support website provides the most comprehensive help resources, while 
                    the built-in device support offers immediate assistance for common issues. Both channels connect you 
                    with trained specialists who understand Apple Wallet's features and capabilities.
                  </p>
                  <div className="flex items-start mt-4">
                    <Bell className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Quick Reference:</strong> Bookmark this page and remember that help is always 
                      available through Apple's official support channels and your device settings.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Explore More Apple Payment Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Pay Support</h4>
                <p className="text-sm text-blue-700">General payment issues and troubleshooting</p>
              </Link>
              <Link to="/apple-cash-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Cash Support</h4>
                <p className="text-sm text-blue-700">Send money and bank transfer help</p>
              </Link>
              <Link to="/apple-card-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Card Support</h4>
                <p className="text-sm text-blue-700">Credit card billing and account help</p>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Apple Wallet Help Right Now?</h3>
              <p className="text-gray-700 mb-4">
                Choose the support method that works best for your situation and get help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://support.apple.com/wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Get Official Support
                </a>
                <a 
                  href="https://getsupport.apple.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center"
                >
                  Start Live Chat
                </a>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppleWalletSupport;