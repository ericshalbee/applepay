import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Wallet, AlertTriangle, CheckCircle, ArrowLeft, CreditCard, Shield, Clock, Globe, Lock, DollarSign, Users, Smartphone, Bell, FileText, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionContainer from '../components/SectionContainer';

const AppleCashSupport: React.FC = () => {
  // Schema markup for Apple Cash support page
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apple Cash Customer Service: 24/7 Support Help Guide",
    "description": "Need help with Apple Cash? Learn how to contact Apple Cash support, send money, transfer to bank, fix payment issues, and get verification help.",
    "url": "https://iphonesupport.netlify.app/apple-cash-support",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Apple Cash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Apple Cash is a peer-to-peer (P2P) payment system built into the Apple ecosystem, allowing users in the U.S. to send and receive money via iMessage or the Wallet app."
          }
        },
        {
          "@type": "Question",
          "name": "How do I send money with Apple Cash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open the Messages app, tap the Apple Pay icon in a conversation, enter the amount to send, and approve the payment using Face ID, Touch ID, or your passcode."
          }
        },
        {
          "@type": "Question",
          "name": "How do I transfer Apple Cash to my bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open the Wallet app, tap your Apple Cash card, tap 'Transfer to Bank', enter the amount and choose 1–3 business days (free) or Instant Transfer (fee applies)."
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
          "name": "Apple Cash Support",
          "item": "https://iphonesupport.netlify.app/apple-cash-support"
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "Apple Cash",
      "description": "Peer-to-peer payment service for iPhone users",
      "provider": {
        "@type": "Organization",
        "name": "Apple Inc."
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Apple Cash Customer Service – Contact Apple Cash Support 24/7</title>
        <meta name="description" content="Contact Apple Cash customer service 24/7 for payment issues, bank transfers, and verification problems. Get Apple Cash support via chat or Wallet app messaging." />
        <meta name="keywords" content="Apple Cash customer service, Apple Cash support, contact Apple Cash support, Apple Cash phone number, Apple Cash help, Apple Cash not working, Apple Cash customer service number, Apple Cash support chat, Apple Cash verification help, Apple Cash transfer issues, Apple Cash payment problems, Green Dot Bank Apple Cash, Apple Cash send money, Apple Cash P2P payments, Apple Cash bank transfer, Apple Cash instant transfer, Apple Cash fraud protection, Apple Cash limits, Apple Cash setup, Apple Cash troubleshooting, USA, Canada" />
        <link rel="canonical" href="https://iphonesupport.netlify.app/apple-cash-support" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Apple Cash Customer Service – Contact Apple Cash Support 24/7" />
        <meta property="og:description" content="Contact Apple Cash customer service 24/7 for payment issues, bank transfers, and verification problems. Get Apple Cash support via chat or Wallet app messaging." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iphonesupport.netlify.app/apple-cash-support" />
        <meta property="og:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Apple Cash Customer Service Support" />
        <meta property="article:publisher" content="https://www.facebook.com/apple" />
        <meta property="article:author" content="Apple Cash Support Team" />
        <meta property="article:section" content="Customer Support" />
        <meta property="article:tag" content="Apple Cash" />
        <meta property="article:tag" content="P2P Payments" />
        <meta property="article:tag" content="Money Transfer" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apple Cash Customer Service – Contact Apple Cash Support 24/7" />
        <meta name="twitter:description" content="Contact Apple Cash customer service 24/7 for payment issues, bank transfers, and verification problems. Get Apple Cash support via chat or Wallet app messaging." />
        <meta name="twitter:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta name="twitter:creator" content="@AppleSupport" />
        <meta name="twitter:site" content="@AppleSupport" />
        <meta name="twitter:label1" content="Support Phone" />
        <meta name="twitter:data1" content="1-877-233-8552" />
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
                <span className="text-gray-900 font-medium">Apple Cash Support</span>
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
            Apple Cash Support: Customer Service Help & Contact Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Need Apple Cash customer service help? This comprehensive Apple Cash support guide shows you how to contact 
            Apple Cash customer service representatives, send money safely, transfer funds to your bank account, and 
            resolve verification issues. Whether you're experiencing Apple Cash payment problems or need assistance 
            with Apple Cash fraud protection, we'll help you find the right Apple Cash support solution quickly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apple Cash customer service is available 24/7 through multiple channels including phone support at 
            1-877-233-8552, live chat, and in-app messaging. Our Apple Cash support guide covers everything from 
            basic money transfers to advanced troubleshooting, helping you resolve Apple Cash issues efficiently 
            with official customer service channels.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Looking for help with other Apple payment services? We also provide detailed support guides for{' '}
            <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Card customer service
            </Link>
            {' '}and{' '}
            <Link to="/apple-wallet-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Wallet support
            </Link>
            . For general Apple Pay assistance, visit our{' '}
            <Link to="/" className="text-blue-600 hover:text-blue-800 underline font-medium">
              main Apple Pay support page
            </Link>
            .
          </p>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-green-900 mb-3 flex items-center">
              📞 How to Contact Apple Cash Customer Service
            </h2>
            <div className="mb-4 p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Apple Cash Support Numbers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-medium text-gray-700">Apple Cash (Green Dot Bank):</p>
                  <p className="text-xl font-bold text-green-600">1-877-233-8552</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">General Apple Support:</p>
                  <p className="text-xl font-bold text-blue-600">1-800-275-2273</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Wallet App Support</h3>
                <p className="text-green-600 font-bold text-lg">Built-in Messaging</p>
                <p className="text-sm text-gray-600">Direct support through your Apple Cash card in Wallet app</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Apple Support Website</h3>
                <p className="text-blue-600 font-medium">24/7 Online Help</p>
                <p className="text-sm text-gray-600">Comprehensive support through official Apple channels</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-green-900 font-medium">
                <strong>Quick Action:</strong> Need immediate help? 
                <a 
                  href="https://support.apple.com/apple-cash" 
                  className="text-green-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Apple Cash customer service help now"
                >
                  Get Apple Cash support now
                </a>
              </p>
            </div>
          </div>
        </section>

        <SectionContainer id="what-is-apple-cash" title="What is Apple Cash? Complete Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Apple Cash is a peer-to-peer (P2P) payment system built into the Apple ecosystem, allowing users 
              in the U.S. to send and receive money via iMessage or the Wallet app. Powered by Green Dot Bank, 
              Apple Cash provides a secure and convenient way to transfer money between friends and family members 
              using your iPhone, iPad, or Apple Watch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  Key Apple Cash Features
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Send and receive money through Messages app
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Transfer funds to your bank account
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Use Apple Cash balance for Apple Pay purchases
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    Face ID/Touch ID security authentication
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-5 w-5 text-blue-600 mr-2" />
                  Apple Cash Requirements
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">1</span>
                    iPhone, iPad, or Apple Watch with iOS 11.2 or later
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">2</span>
                    U.S. resident with valid Apple ID
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">3</span>
                    Eligible debit or credit card in Wallet
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">4</span>
                    Two-factor authentication enabled
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://support.apple.com/apple-cash" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About Apple Cash
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="send-money-apple-cash" title="How to Send Money with Apple Cash: Step-by-Step Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Sending money with Apple Cash is quick and secure. Whether you're splitting a bill, paying back a friend, 
              or sending a gift, Apple Cash makes peer-to-peer payments simple through the Messages app. Here's exactly 
              how to send money using Apple Cash customer service approved methods:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                  Send Money via Messages
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Messages app and select a conversation
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap the Apple Pay icon (looks like an Apple logo)
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Enter the amount you want to send
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Tap "Pay\" and authenticate with Face ID, Touch ID, or passcode
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Wallet className="h-5 w-5 text-green-600 mr-2" />
                  Send Money via Wallet App
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Wallet app on your iPhone
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap your Apple Cash card
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Tap "Send Money\" and choose a contact
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Enter amount and confirm with biometric authentication
                  </li>
                </ol>
              </div>
            </div>
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Apple Cash Sending Limits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-yellow-800">
                <div className="text-center">
                  <p className="font-bold text-2xl">$10,000</p>
                  <p className="text-sm">Per transaction</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-2xl">$10,000</p>
                  <p className="text-sm">Per 7-day period</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-2xl">$20,000</p>
                  <p className="text-sm">Maximum balance</p>
                </div>
              </div>
              <p className="text-yellow-700 text-sm mt-4">
                <strong>Note:</strong> Limits may vary based on account verification status. Contact Apple Cash customer service for limit increases.
              </p>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="transfer-to-bank" title="How to Transfer Apple Cash to Your Bank Account">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              Transferring your Apple Cash balance to your bank account is simple and can be done instantly or within 
              1-3 business days. Apple Cash customer service recommends keeping your bank information updated to ensure 
              smooth transfers. Here's how to transfer Apple Cash to your bank account:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  Standard Transfer (Free)
                </h3>
                <ol className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open Wallet app and tap your Apple Cash card
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Tap "Transfer to Bank"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Enter the amount to transfer
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Select "1-3 Business Days" (Free)
                  </li>
                </ol>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Processing Time:</strong> 1-3 business days<br/>
                    <strong>Cost:</strong> Free<br/>
                    <strong>Minimum:</strong> $1
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-2" />
                  Instant Transfer (Fee Applies)
                </h3>
                <ol className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Follow steps 1-3 from Standard Transfer
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Select "Instant Transfer"
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Review the transfer fee (1.5% or $0.25 minimum)
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Confirm with Face ID, Touch ID, or passcode
                  </li>
                </ol>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>Processing Time:</strong> Within 30 minutes<br/>
                    <strong>Cost:</strong> 1.5% fee ($0.25 minimum, $15 maximum)<br/>
                    <strong>Minimum:</strong> $1
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Bank Transfer Requirements</h3>
              <ul className="text-orange-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Valid U.S. bank account with routing and account numbers
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Bank account must be in the same name as your Apple ID
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Debit card eligible for Instant Transfer (Visa or Mastercard)
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => alert('Open Wallet → Tap Apple Cash → Tap Transfer to Bank')}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Start Bank Transfer Now
                </button>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-cash-faqs" title="Apple Cash Customer Support: Frequently Asked Questions">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              Get instant answers to the most common Apple Cash questions. These comprehensive FAQs cover 
              account setup, money transfers, bank connections, and troubleshooting to help you resolve 
              issues quickly without waiting for customer service.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I set up Apple Cash on my iPhone?
              </h3>
              <p className="text-gray-700">
                To set up Apple Cash: Open Settings → Wallet & Apple Pay → Apple Cash → Set Up Apple Cash. 
                You'll need to verify your identity with personal information and add a debit card as your funding source. 
                The setup process typically takes a few minutes and requires iOS 11.2 or later.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Why is my Apple Cash payment failing?
              </h3>
              <p className="text-gray-700">
                Apple Cash payments may fail due to insufficient funds, network connectivity issues, outdated iOS, 
                or verification problems. Check your funding source, ensure you have a stable internet connection, 
                update your device, and contact Apple Cash customer service at 1-877-233-8552 if issues persist.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How long does Apple Cash verification take?
              </h3>
              <p className="text-gray-700">
                Apple Cash identity verification typically takes a few minutes to complete during setup. However, 
                additional verification may be required for higher transaction limits, which can take 1-2 business days. 
                You'll receive notifications about your verification status through the Wallet app.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Can I use Apple Cash without a bank account?
              </h3>
              <p className="text-gray-700">
                You can receive money and make purchases with Apple Cash without a bank account, but you'll need 
                a debit card to add funds and a bank account to transfer money out. The Apple Cash balance can be 
                used for Apple Pay purchases at participating merchants.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                What should I do if I sent money to the wrong person?
              </h3>
              <p className="text-gray-700">
                If you sent Apple Cash to the wrong person, contact them immediately to request a return payment. 
                Apple cannot reverse completed transactions, but you can message the recipient through the transaction 
                in Messages. For fraud concerns, contact Apple Cash customer service immediately at 1-877-233-8552.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I increase my Apple Cash limits?
              </h3>
              <p className="text-gray-700">
                Apple Cash limits may increase automatically based on your usage and verification status. To request 
                higher limits, contact Apple Cash customer service through the Wallet app or call 1-877-233-8552. 
                Additional identity verification may be required for limit increases.
              </p>
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-card-support" className="text-blue-600 hover:underline">Apple Card credit limits</Link>
                {' | '}
                <Link to="/" className="text-blue-600 hover:underline">General Apple Pay support</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Is Apple Cash safe and secure?
              </h3>
              <p className="text-gray-700">
                Yes, Apple Cash uses industry-standard security including Face ID/Touch ID authentication, device-specific 
                security codes, and fraud monitoring. Your personal information is encrypted and never stored on Apple's 
                servers. Green Dot Bank, which powers Apple Cash, is FDIC insured.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Can I use Apple Cash internationally?
              </h3>
              <p className="text-gray-700">
                Apple Cash is currently only available in the United States and can only be used to send money to 
                other U.S. users. However, you can use your Apple Cash balance for Apple Pay purchases at international 
                merchants that accept Apple Pay, subject to currency conversion.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I cancel an Apple Cash payment?
              </h3>
              <p className="text-gray-700">
                You can only cancel an Apple Cash payment if the recipient hasn't accepted it yet. Open the Messages 
                conversation, find the payment, and tap "Cancel Payment." Once accepted, payments cannot be cancelled 
                and you'll need to request the money back from the recipient.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                What happens if my Apple Cash account is restricted?
              </h3>
              <p className="text-gray-700">
                If your Apple Cash account is restricted, you may not be able to send, receive, or transfer money. 
                This can happen due to suspicious activity, verification issues, or policy violations. Contact Apple Cash 
                customer service immediately at 1-877-233-8552 to resolve account restrictions.
              </p>
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-wallet-support" className="text-blue-600 hover:underline">Apple Wallet troubleshooting</Link>
                {' | '}
                <Link to="/apple-card-support" className="text-blue-600 hover:underline">Apple Card account issues</Link>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="final-thoughts" title="Apple Cash Support Summary & Next Steps">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-green-900 mb-3">Get Apple Cash Help When You Need It</h3>
                <div className="space-y-3 text-green-800">
                  <p>
                    Apple Cash customer service is designed to make peer-to-peer payments simple and secure. 
                    Whether you need help with sending money, bank transfers, verification issues, or account 
                    management, multiple support channels are available to assist you quickly and effectively.
                  </p>
                  <p>
                    Remember that the Wallet app provides the fastest access to personalized support, while 
                    the dedicated Apple Cash phone line at 1-877-233-8552 offers immediate assistance for 
                    urgent issues. Both channels connect you with trained specialists who understand Apple Cash.
                  </p>
                  <div className="flex items-start mt-4">
                    <Bell className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Quick Reference:</strong> Bookmark this page and remember that help is always 
                      available through your Wallet app or by calling Apple Cash customer service at 1-877-233-8552.
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
              <Link to="/apple-card-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Card Support</h4>
                <p className="text-sm text-blue-700">Credit card billing and account help</p>
              </Link>
              <Link to="/apple-wallet-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Wallet Support</h4>
                <p className="text-sm text-blue-700">Digital wallet and pass management</p>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Apple Cash Help Right Now?</h3>
              <p className="text-gray-700 mb-4">
                Choose the support method that works best for your situation and get help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => alert('Open your Wallet app → Tap Apple Cash → Tap ••• → Select Message or Call')}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Use Wallet App Support
                </button>
                <a 
                  href="tel:1-877-233-8552" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
                >
                  Call Apple Cash Support
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

export default AppleCashSupport;