import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Wallet, AlertTriangle, CheckCircle, ArrowLeft, CreditCard, Shield, Clock, Globe, Lock, DollarSign, Users, Smartphone, Bell, FileText, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SectionContainer from '../components/SectionContainer';

const AppleCardSupport: React.FC = () => {
  // Schema markup for Apple Card support page
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Apple Card Customer Service: 24/7 Support Help Guide",
    "description": "Need help with Apple Card? Learn how to contact Apple Card support through the Wallet app, get help with billing, dispute charges, and protect against fraud.",
    "url": "https://iphonesupport.netlify.app/apple-card-support",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I contact Apple Card support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Apple Card customer service directly from your Wallet app by tapping your Apple Card, then the More button (•••), and selecting Message or Call under 'Get Support'. You can also call Goldman Sachs at 1‑877‑255‑5923 for 24/7 Apple Card support."
          }
        },
        {
          "@type": "Question",
          "name": "How do I dispute a charge on my Apple Card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To dispute a charge on your Apple Card: Open the Wallet app, tap your Apple Card, find the transaction you want to dispute, tap on it, then tap 'Report an Issue' to begin the dispute process. You can also message Apple Card customer service directly through the Wallet app for additional assistance."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if my Apple Card isn't working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If your Apple Card isn't working: Check your internet connection, ensure your device software is up to date, verify your card isn't locked in the Wallet app, and contact Apple Card customer service through the Wallet app or by calling the Apple Card support line for assistance."
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
          "name": "Apple Card Support",
          "item": "https://iphonesupport.netlify.app/apple-card-support"
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "Apple Card",
      "description": "Credit card service by Apple and Goldman Sachs",
      "provider": {
        "@type": "Organization",
        "name": "Apple Inc."
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Apple Card Customer Service – Contact Apple Card Support 24/7</title>
        <meta name="description" content="Contact Apple Card customer service 24/7 for billing issues, dispute charges, and fraud protection. Get Apple Card support via Wallet app messaging, phone at 1-877-255-5923, or live chat." />
        <meta name="keywords" content="Apple Card customer service, Apple Card support, contact Apple Card support, Apple Card phone number, Apple Card help, Apple Card billing issues, Apple Card not working, dispute Apple Card charge, Apple Card customer service number, Apple Card support chat, Goldman Sachs Apple Card, Apple Card fraud protection, Apple Card payment problems, Apple Card verification, Apple Card credit limit, Apple Card interest rate, Apple Card late payment, Apple Card dispute transaction, Apple Card unauthorized charge, Apple Card account management, Apple Card balance, Apple Card statement, Apple Card rewards, Apple Card cashback, USA, Canada" />
        <link rel="canonical" href="https://iphonesupport.netlify.app/apple-card-support" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Apple Card Customer Service – Contact Apple Card Support 24/7" />
        <meta property="og:description" content="Contact Apple Card customer service 24/7 for billing issues, dispute charges, and fraud protection. Get Apple Card support via Wallet app messaging, phone at 1-877-255-5923, or live chat." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iphonesupport.netlify.app/apple-card-support" />
        <meta property="og:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Apple Card Customer Service Support" />
        <meta property="article:publisher" content="https://www.facebook.com/apple" />
        <meta property="article:author" content="Apple Card Support Team" />
        <meta property="article:section" content="Customer Support" />
        <meta property="article:tag" content="Apple Card" />
        <meta property="article:tag" content="Credit Card" />
        <meta property="article:tag" content="Goldman Sachs" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apple Card Customer Service – Contact Apple Card Support 24/7" />
        <meta name="twitter:description" content="Contact Apple Card customer service 24/7 for billing issues, dispute charges, and fraud protection. Get Apple Card support via Wallet app messaging, phone at 1-877-255-5923, or live chat." />
        <meta name="twitter:image" content="https://iphonesupport.netlify.app/apple.png" />
        <meta name="twitter:creator" content="@AppleSupport" />
        <meta name="twitter:site" content="@AppleSupport" />
        <meta name="twitter:label1" content="Support Phone" />
        <meta name="twitter:data1" content="1-877-255-5923" />
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
                <span className="text-gray-900 font-medium">Apple Card Support</span>
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
            Apple Card Support: Customer Service Help & Contact Guide
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Need Apple Card customer service help? This comprehensive Apple Card support guide shows you how to contact 
            Apple Card customer service representatives through multiple channels, resolve billing issues, dispute charges, 
            and manage your account effectively. Whether you're experiencing Apple Card payment problems or need assistance 
            with Apple Card fraud protection, we'll help you find the right Apple Card support solution quickly and efficiently.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Apple Card customer service is available 24/7 through the Wallet app, phone support, and online chat. Our 
            Apple Card support guide covers everything from basic account management to advanced dispute resolution, 
            helping you resolve Apple Card issues efficiently with official customer service channels.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Looking for help with other Apple payment services? We also provide detailed support guides for{' '}
            <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              Apple Cash customer service
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
          
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-3 flex items-center">
              📞 How to Contact Apple Card Customer Service
            </h2>
            <div className="mb-4 p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Apple Card Support Numbers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <p className="font-medium text-gray-700">Goldman Sachs (Apple Card):</p>
                  <p className="text-xl font-bold text-blue-600">1-877-255-5923</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">General Apple Support:</p>
                  <p className="text-xl font-bold text-green-600">1-800-275-2273</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Wallet App Support</h3>
                <p className="text-blue-600 font-bold text-lg">Built-in Messaging</p>
                <p className="text-sm text-gray-600">Direct support through your Apple Card in Wallet app</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Apple Support Website</h3>
                <p className="text-green-600 font-medium">24/7 Online Help</p>
                <p className="text-sm text-gray-600">Comprehensive support through official Apple channels</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded-lg">
              <p className="text-blue-900 font-medium">
                <strong>Quick Action:</strong> Need immediate help? 
                <a 
                  href="https://support.apple.com/apple-card" 
                  className="text-blue-600 hover:underline ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Apple Card customer service help now"
                >
                  Get Apple Card support now
                </a>
              </p>
            </div>
          </div>
        </section>

        <SectionContainer id="contact-from-wallet" title="Contact Apple Card Support from Wallet App">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-4 text-lg">
              The fastest way to get Apple Card customer service help is directly through your Wallet app. 
              This Apple Card support method connects you instantly with Apple Card customer service specialists who can access your account 
              information and provide personalized assistance for billing, payments, and account management issues.
            </p>
            <p className="text-gray-700 mb-6">
              Apple Card customer service through the Wallet app provides the most secure and efficient support experience. 
              Apple Card support representatives can view your transaction history, account status, and provide real-time 
              assistance with any Apple Card issues you're experiencing.
            </p>
            <div className="relative">
              <div className="absolute left-4 md:left-6 top-8 bottom-8 w-0.5 bg-gray-200 z-0"></div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Wallet className="h-6 w-6 text-blue-600" />,
                    title: "Open the Wallet app",
                    description: "Launch the Wallet app on your iPhone"
                  },
                  {
                    icon: <CreditCard className="h-6 w-6 text-blue-600" />,
                    title: "Tap on your Apple Card",
                    description: "Select your Apple Card from the available cards"
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-blue-600" />,
                    title: "Tap the More button (•••)",
                    description: "Located in the top right corner of your Apple Card"
                  },
                  {
                    icon: <MessageCircle className="h-6 w-6 text-green-600" />,
                    title: "Select Message or Call",
                    description: "Choose your preferred support method under 'Get Support'"
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start relative z-10">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
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
            
            <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
              <p className="text-green-800">
                <strong>Pro Tip:</strong> Messaging support through the Wallet app is the fastest option, 
                typically providing responses in under 5 minutes with full access to your account details.
              </p>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://support.apple.com/apple-card" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Apple Card Help Now
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-card-not-working" title="Apple Card Not Working? Troubleshooting Guide">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              If your Apple Card isn't working properly, these troubleshooting steps will help you identify 
              and resolve the most common issues. Follow these solutions in order, and contact Apple Card 
              support if problems persist after trying these fixes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                Apple Card Declined or Not Working?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Check your internet connection
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Update your device software to the latest version
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Verify your card isn't locked in Wallet
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  Check your available credit limit
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Smartphone className="h-5 w-5 text-blue-500 mr-2" />
                Adding/Removing Apple Card from Wallet
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">1</span>
                  Open Settings &rarr; Wallet &amp; Apple Pay
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">2</span>
                  Tap Apple Card to manage settings
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">3</span>
                  Use "Remove Card\" or \"Add to Wallet" as needed
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5">4</span>
                  Contact support if issues persist
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">Still Having Problems?</h3>
            <p className="text-red-800 mb-4">
              If these troubleshooting steps don't resolve your Apple Card issues, contact customer service immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => alert('Open Wallet app → Tap Apple Card → Tap ••• → Select Message')}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Message Support via Wallet
              </button>
              <a 
                href="tel:1-877-255-5923" 
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
              >
                Call Apple Card Support
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="billing-payments-help" title="Apple Card Billing, Payments & Transaction Help">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6">
              Apple Card customer service can help resolve a wide range of billing, payment, and transaction 
              issues. Whether you're dealing with payment problems, account questions, or need assistance 
              with your credit information, here are the most common issues our support team handles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Disputed Transactions</h3>
                <p className="text-sm text-gray-600">Fraud alerts and suspicious charges</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Billing Issues</h3>
                <p className="text-sm text-gray-600">Payment problems and account questions</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Clock className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Late Payments</h3>
                <p className="text-sm text-gray-600">Missed payments and late fee assistance</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <FileText className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Interest Rates</h3>
                <p className="text-sm text-gray-600">Balance questions and rate inquiries</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Credit Reporting</h3>
                <p className="text-sm text-gray-600">FICO score and credit report issues</p>
              </div>
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <Wallet className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Wallet Management</h3>
                <p className="text-sm text-gray-600">Adding or removing cards from Wallet</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Get Help with Any Apple Card Issue</h3>
              <p className="text-blue-800 mb-4">
                Our customer service team is trained to handle all Apple Card billing and payment concerns.
              </p>
              <a 
                href="https://support.apple.com/apple-card" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Apple Card Support
              </a>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="dispute-charge" title="How to Dispute Apple Card Charges: Step-by-Step Guide">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 text-lg">
              If you notice an unauthorized charge or need to dispute a transaction on your Apple Card, 
              you can initiate the dispute process directly through your Wallet app or by contacting 
              customer service. Here's exactly how to dispute Apple Card charges effectively:
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                  Dispute Through Wallet App
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                    Open the Wallet app and tap your Apple Card
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                    Find the transaction you want to dispute
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                    Tap on the transaction for details
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</span>
                    Tap "Report an Issue\" to begin dispute process
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                  Alternative Support Methods
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Message Support</h4>
                    <p className="text-sm text-green-700">
                      Use the messaging feature in your Apple Card for quick dispute assistance
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Call Support</h4>
                    <p className="text-sm text-blue-700">
                      Call 1‑877‑255‑5923 for immediate dispute assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Important Dispute Information</h3>
              <ul className="text-orange-800 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Dispute charges as soon as you notice them for faster resolution
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  Keep records of all communication during the dispute process
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                  You may receive provisional credit while the dispute is investigated
                </li>
              </ul>
              <div className="mt-4 text-center">
                <button 
                  onClick={() => alert('Open Wallet → Tap Apple Card → Find transaction → Tap transaction → Report an Issue')}
                  className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Start Dispute Process Now
                </button>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="fraud-protection" title="Apple Card Fraud Protection & Security Support">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
              <Shield className="h-6 w-6 mr-2" />
              Apple Card Fraud Support
            </h3>
            <p className="text-red-800 mb-4">
              Apple Card provides comprehensive fraud protection and monitoring. If you suspect fraudulent 
              activity or notice suspicious charges on your account, take immediate action using these steps 
              to protect your account and resolve the issue quickly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <Lock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">1. Lock Your Card</h3>
              </div>
              <p className="text-gray-700 text-sm text-center">
                Immediately lock your card in the Wallet app to prevent further unauthorized use
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">2. Contact Support</h3>
              </div>
              <p className="text-gray-700 text-sm text-center">
                Call 1‑877‑255‑5923 or message support through your Apple Card in Wallet
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">3. Report the Issue</h3>
              </div>
              <p className="text-gray-700 text-sm text-center">
                Tap "Report an Issue" on the suspicious transaction to begin the dispute process
              </p>
            </div>
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Apple Card Security Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Real-time fraud monitoring
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Instant transaction notifications
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Face ID/Touch ID authorization
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  No card numbers on physical card
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Unique security codes for each transaction
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  24/7 fraud protection team
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3">Suspected Fraud? Act Immediately</h3>
              <p className="text-red-800 mb-4">
                Time is critical when dealing with fraudulent charges. Contact Apple Card support right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => alert('Open Wallet → Tap Apple Card → Tap ••• → Select Message → Report Fraud')}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Report Fraud via Wallet
                </button>
                <a 
                  href="tel:1-877-255-5923" 
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
                >
                  Call Fraud Hotline
                </a>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="social-media-support" title="Apple Card Social Media Support Options">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6">
              While Apple doesn't provide direct customer service for Apple Card through social media channels, 
              you can follow these official accounts for updates, tips, and general information about Apple 
              Card features and services:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">@AppleSupport</h3>
                <p className="text-sm text-gray-600 mb-3">Follow on X (formerly Twitter) for updates</p>
                <a 
                  href="https://twitter.com/AppleSupport" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Visit @AppleSupport
                </a>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <Users className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Apple Community Forums</h3>
                <p className="text-sm text-gray-600 mb-3">Community discussions and tips</p>
                <a 
                  href="https://discussions.apple.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Visit Community Forums
                </a>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-yellow-800">
                <strong>Note:</strong> For account-specific issues, always use official Apple Card support channels through the Wallet app or phone support.
              </p>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="apple-card-faqs" title="Apple Card Customer Support: Frequently Asked Questions">
          <div className="mb-6">
            <p className="text-gray-700 text-lg">
              Get instant answers to the most common Apple Card questions. These comprehensive FAQs cover 
              account management, billing issues, payment problems, and customer service topics to help 
              you resolve issues quickly without waiting for support.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How quickly can I get help with my Apple Card?
              </h3>
              <p className="text-gray-700">
                Apple Card support is available 24/7. Messaging through the Wallet app typically gets responses 
                in under 5 minutes, while phone support at 1‑877‑255‑5923 connects you immediately with a representative.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How can I dispute an unauthorized charge on my Apple Card?
              </h3>
              <p className="text-gray-700">
                You can dispute an unauthorized Apple Card charge by opening the Wallet app, selecting the transaction, 
                tapping "Report an Issue", and following the on-screen steps to submit a dispute. You can also message 
                support directly through the Wallet app for additional assistance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I talk to a real person about my Apple Card account?
              </h3>
              <p className="text-gray-700">
                To speak with a real person, open the Wallet app, tap your Apple Card, then tap the More button (•••) 
                and select Call. A support agent will assist you directly. You can also call 1‑877‑255‑5923 to speak 
                with Goldman Sachs customer service immediately.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Why was my Apple Card declined even with available balance?
              </h3>
              <p className="text-gray-700">
                Your Apple Card may be declined due to suspected fraud, expired payment methods, internet issues, 
                or a temporary account lock. Check the Wallet app for any alerts or notifications, ensure your 
                internet connection is stable, and contact support if the issue persists.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I update my billing address on Apple Card?
              </h3>
              <p className="text-gray-700">
                To update your Apple Card billing address, go to Wallet &gt; Apple Card &gt; More (•••) &gt; tap Billing Address 
                and enter your updated information. Make sure your address matches your bank records to avoid payment issues.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Can I get a refund on a purchase made with Apple Card?
              </h3>
              <p className="text-gray-700">
                Yes, if a merchant issues a refund, it will appear on your Apple Card balance. You can track refunds 
                directly in the Wallet app under the specific transaction. Refunds typically appear within 3-5 business 
                days, depending on the merchant's processing time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I increase my Apple Card credit limit?
              </h3>
              <p className="text-gray-700">
                You can request a credit limit increase by contacting Apple Card support through Wallet. Tap your card, 
                tap (•••), and select Message to start a request with Goldman Sachs. They'll review your account and 
                payment history to determine if you qualify for an increase.
              </p>
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-cash-support" className="text-blue-600 hover:underline">Apple Cash limits</Link>
                {' | '}
                <Link to="/" className="text-blue-600 hover:underline">General Apple Pay support</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                What happens if I miss an Apple Card payment?
              </h3>
              <p className="text-gray-700">
                If you miss a payment, interest may accrue and your credit score could be affected. You can make a late 
                payment from Wallet or contact support for assistance with payment options. Apple Card doesn't charge 
                late fees, but missed payments are reported to credit bureaus.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I cancel or close my Apple Card account?
              </h3>
              <p className="text-gray-700">
                To close your Apple Card account, open Wallet, tap your card, tap (•••), and then choose Message to 
                request account closure with support. Make sure to pay off your full balance before closing the account 
                to avoid any remaining charges.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                Does Apple Card support international transactions?
              </h3>
              <p className="text-gray-700">
                Yes, Apple Card can be used internationally wherever Mastercard is accepted. Foreign transaction fees 
                do not apply, but currency conversion rates may affect the final amount. You can track international 
                purchases in the Wallet app just like domestic transactions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                How do I add Apple Card to a new iPhone?
              </h3>
              <p className="text-gray-700">
                Open Wallet on your new iPhone, tap the plus icon (+), and select Apple Card. You may be prompted to 
                verify via Apple ID or support. If you have issues, sign in with the same Apple ID used for your 
                original Apple Card application and contact support if needed.
              </p>
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-wallet-support" className="text-blue-600 hover:underline">Apple Wallet setup</Link>
                {' | '}
                <Link to="/" className="text-blue-600 hover:underline">Apple Pay device setup</Link>
              </div>
            </div>
          </div>
        </SectionContainer>

        <SectionContainer id="final-thoughts" title="Apple Card Support Summary & Next Steps">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-900 mb-3">Get Apple Card Help When You Need It</h3>
                <div className="space-y-3 text-blue-800">
                  <p>
                    Apple Card customer service is designed to be as simple and transparent as the card itself. 
                    Whether you need help with billing, disputes, fraud protection, or account management, 
                    multiple support channels are available to assist you quickly and effectively.
                  </p>
                  <p>
                    Remember that the Wallet app provides the fastest access to personalized support, while 
                    the phone line offers immediate assistance for urgent issues. Both channels connect you 
                    with trained specialists who can resolve your Apple Card concerns efficiently.
                  </p>
                  <div className="flex items-start mt-4">
                    <Bell className="h-4 w-4 mt-1 mr-2 flex-shrink-0" />
                    <div>
                      <strong>Quick Reference:</strong> Bookmark this page and remember that help is always 
                      available through your Wallet app or by calling customer service at 1‑877‑255‑5923.
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
              <Link to="/apple-wallet-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-medium text-blue-900 mb-2">Apple Wallet Support</h4>
                <p className="text-sm text-blue-700">Digital wallet and pass management</p>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Apple Card Help Right Now?</h3>
              <p className="text-gray-700 mb-4">
                Choose the support method that works best for your situation and get help immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => alert('Open your Wallet app → Tap Apple Card → Tap ••• → Select Message or Call')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Use Wallet App Support
                </button>
                <a 
                  href="tel:1-877-255-5923" 
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
                >
                  Call Customer Service
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

export default AppleCardSupport;