import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Activity, User, Settings, CloudCog, CreditCard, Phone, Twitter, Facebook, Youtube, AlertCircle, CheckCircle, Shield, Users } from 'lucide-react';

const ApplePayFAQs: React.FC = () => {
  const faqs = [
    {
      question: "Why does Apple Pay keep failing even though my card works elsewhere?",
      answer: "This issue may require help from Apple customer service, especially if your card works in other apps but not with Apple Pay. Contact Apple Support at 1‑800‑MY‑APPLE (1‑800‑692‑7753) for assistance with card-specific Apple Pay issues. If you're having issues with Apple Card specifically, visit our Apple Card support guide for specialized help."
    },
    {
      question: "My Apple Pay isn't working after a recent iOS update — should I call Apple support?",
      answer: "Yes, Apple support can help resolve system-related Apple Pay errors that start after software updates. Call 1‑800‑MY‑APPLE or use the Apple Support app for iOS update-related issues. For Wallet app problems after updates, check our Apple Wallet support page for specific troubleshooting steps."
    },
    {
      question: "Can Apple customer service help with unauthorized Apple Pay transactions?",
      answer: "Absolutely. If you notice suspicious activity, it's important to report it to Apple Pay support right away. Contact Apple immediately at 1‑800‑MY‑APPLE and also notify your bank or card issuer. For Apple Cash fraud issues, see our Apple Cash support guide for specific reporting steps."
    },
    {
      question: "Why is my card not verifying in Apple Pay even after multiple attempts?",
      answer: "This may be a verification issue that Apple customer service or your bank can help resolve. Contact Apple if the Wallet app shows errors, or reach out to your card issuer to ensure Apple Pay is enabled on your account. For Apple Card verification problems, visit our Apple Card support page for detailed solutions."
    },
    {
      question: "What number should I call if Apple Pay is charging me twice?",
      answer: "Double charges should be reported immediately. You can reach Apple customer service at 1‑800‑MY‑APPLE (1‑800‑692‑7753) to investigate the duplicate payment and request a refund if necessary. For Apple Cash duplicate charges, check our Apple Cash support guide for specific dispute procedures."
    },
    {
      question: "Apple Pay shows 'payment not completed' — should I contact Apple support?",
      answer: "Yes, if basic troubleshooting doesn't work, contacting Apple Pay customer support is the next best step. Try restarting your device first, then call Apple Support if the issue persists. For Wallet app-specific errors, visit our Apple Wallet support page for additional troubleshooting steps."
    },
    {
      question: "How can Apple Pay support help if my card keeps disappearing from my iPhone?",
      answer: "Apple customer service can look into issues where cards are removed unexpectedly, often due to security settings or software bugs. Contact Apple Support to troubleshoot card removal issues and restore your payment methods. For Apple Card disappearing issues, see our Apple Card support guide for specific solutions."
    },
    {
      question: "Is there an Apple phone number to call about Apple Pay transaction errors?",
      answer: "Yes, Apple provides phone-based support for Apple Pay at 1‑800‑MY‑APPLE (1‑800‑692‑7753). If your payment fails or errors persist, calling support can help resolve the issue quickly. For service-specific issues, check our Apple Cash, Apple Card, or Apple Wallet support guides for targeted assistance."
    },
    {
      question: "Why does Apple Pay keep asking me to verify my card again and again?",
      answer: "This may be caused by syncing problems or account issues. Apple customer service can help reset and verify your card properly. Contact Apple Support or try signing out and back into your Apple ID. For persistent Wallet verification issues, visit our Apple Wallet support page for detailed troubleshooting."
    },
    {
      question: "What do I do if my Apple Pay is not working in-store and online? Should I call support?",
      answer: "If Apple Pay fails across all platforms, calling Apple support at 1‑800‑MY‑APPLE is recommended to diagnose device or account-related issues. This could indicate a broader problem with your Apple Pay setup. Check our comprehensive support guides for Apple Cash, Apple Card, and Apple Wallet for service-specific troubleshooting."
    }
  ];

  return (
    <section className="py-8 scroll-mt-20" id="apple-pay-faqs">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">❓ Apple Pay Support FAQs</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
            {index === 0 && (
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline">
                  Apple Card specific issues
                </Link>
                {' | '}
                <a href="#contact-support" className="text-blue-600 hover:text-blue-800 underline">
                  Contact Apple Support
                </a>
              </div>
            )}
            {index === 2 && (
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline">
                  Apple Cash fraud reporting
                </Link>
                {' | '}
                <a href="#common-problems" className="text-blue-600 hover:text-blue-800 underline">
                  Security troubleshooting
                </a>
              </div>
            )}
            {index === 5 && (
              <div className="mt-3 text-sm">
                <strong>Related help:</strong>{' '}
                <Link to="/apple-wallet-support" className="text-blue-600 hover:text-blue-800 underline">
                  Apple Wallet troubleshooting
                </Link>
                {' | '}
                <a href="#device-support" className="text-blue-600 hover:text-blue-800 underline">
                  Device support guide
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">More Detailed Support Guides</h3>
          <p className="text-blue-800 mb-4">
            For service-specific help, visit our comprehensive support pages with step-by-step solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/apple-cash-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-blue-900 mb-2">Apple Cash Support</h4>
              <p className="text-sm text-blue-700">Send money, bank transfers, verification help</p>
            </Link>
            <Link to="/apple-card-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-blue-900 mb-2">Apple Card Support</h4>
              <p className="text-sm text-blue-700">Billing, disputes, fraud protection</p>
            </Link>
            <Link to="/apple-wallet-support" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-medium text-blue-900 mb-2">Apple Wallet Support</h4>
              <p className="text-sm text-blue-700">Card management, passes, troubleshooting</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const MainContent: React.FC = () => {
  const steps = [
    {
      icon: <Settings className="h-6 w-6 text-gray-700" />,
      title: "Open Settings",
      description: "Tap the Settings app on your iPhone home screen"
    },
    {
      icon: <User className="h-6 w-6 text-gray-700" />,
      title: "Tap your name > Apple ID",
      description: "Select your Apple ID at the top of the settings menu"
    },
    {
      icon: <CloudCog className="h-6 w-6 text-gray-700" />,
      title: "iCloud & Media Purchases > Support",
      description: "Tap iCloud & Media Purchases, then scroll down to Support"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-gray-700" />,
      title: "Select Apple Pay",
      description: "Choose Apple Pay from the available support options"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-600" />,
      title: "Chat",
      description: "Start a live chat with Apple Support"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Call",
      description: "Request a phone call from Apple Support"
    }
  ];

  const links = [
    {
      title: "Apple Pay Help Center",
      url: "https://support.apple.com/apple-pay",
      icon: <Activity className="h-5 w-5 text-blue-600" />,
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

  const problems = [
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

  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12 max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-900 font-medium">Apple Pay Customer Service</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
          Apple Pay Customer Service: Contact Apple Support for Help
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Apple Pay is a fast and secure mobile payment service that lets you use your iPhone, Apple Watch, iPad, or Mac to make purchases in stores, apps, and online. If you're having trouble with payments, adding cards, verification errors, or unauthorized charges, Apple Pay customer service offers 24/7 support through multiple channels including phone support, live chat, and in-app assistance.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This comprehensive Apple Pay customer service guide contains accurate contact information, official support links, social channels, and step-by-step solutions to common Apple Pay problems. Whether you need Apple Wallet support, mobile payment help, or technical assistance, we'll help you connect with the right Apple support team quickly and efficiently.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Looking for specific Apple services? We also provide dedicated support guides for{' '}
          <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Apple Cash customer service
          </Link>
          ,{' '}
          <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Apple Card support
          </Link>
          , and{' '}
          <Link to="/apple-wallet-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Apple Wallet help
          </Link>
          . Each guide provides specialized assistance for these Apple payment services. For general troubleshooting, visit our{' '}
          <a href="#common-problems" className="text-blue-600 hover:text-blue-800 underline font-medium">
            common problems section
          </a>
          {' '}or contact{' '}
          <a href="#contact-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Apple Pay customer service directly
          </a>
          .
        </p>
        
        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-blue-800">
            Need help with a specific Apple payment service?
            <Link 
              to="/apple-cash-support" 
              className="font-medium text-blue-600 hover:text-blue-800 underline ml-1"
            >
              Apple Cash Support
            </Link>
            {' | '}
            <Link 
              to="/apple-card-support" 
              className="font-medium text-blue-600 hover:text-blue-800 underline"
            >
              Apple Card Support
            </Link>
            {' | '}
            <Link 
              to="/apple-wallet-support" 
              className="font-medium text-blue-600 hover:text-blue-800 underline"
            >
              Apple Wallet Support
            </Link>
            {' | '}
            <a 
              href="#official-links" 
              className="font-medium text-blue-600 hover:text-blue-800 underline"
            >
              Official Apple Links
            </a>
            {' | '}
            <a 
              href="#device-support" 
              className="font-medium text-blue-600 hover:text-blue-800 underline"
            >
              iPhone Support Guide
            </a>
          </p>
        </div>
      </section>

      {/* Phone Support Section */}
      <section id="contact-support" className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">📞 Apple Pay Customer Service Phone Numbers</h2>
        <div className="mb-6 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Toll-Free (USA)</h3>
          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-2xl font-bold text-blue-600 mb-1">1‑800‑MY‑APPLE</p>
            <p className="text-lg text-gray-700">(1‑800‑692‑7753)</p>
            <p className="text-sm text-gray-600 mt-2">Available 24/7 for Apple Pay customer service, billing issues, and technical support</p>
            <div className="mt-3 text-sm">
              <strong>Related support:</strong>{' '}
              <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline">
                Apple Cash phone support
              </Link>
              {' | '}
              <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline">
                Apple Card customer service
              </Link>
              {' | '}
              <Link to="/apple-wallet-support" className="text-blue-600 hover:text-blue-800 underline">
                Apple Wallet help
              </Link>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-blue-900 mb-4">International Support</h3>
          <div className="bg-white rounded-lg p-4">
            <a 
              href="https://support.apple.com/en-us/HT201232" 
              className="text-blue-600 hover:underline inline-flex items-center font-medium"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Find Apple Pay customer service phone numbers for your country"
            >
              Global Support Directory
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <p className="text-sm text-gray-600 mt-2">Find Apple Pay support numbers for Canada, UK, Australia, and other countries</p>
            <div className="mt-3 text-sm">
              <strong>International guides:</strong>{' '}
              <a href="#device-support" className="text-blue-600 hover:text-blue-800 underline">
                Contact from your device
              </a>
              {' | '}
              <a href="#official-links" className="text-blue-600 hover:text-blue-800 underline">
                Official Apple support
              </a>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-white rounded-lg">
            <p className="text-blue-900 font-medium mt-2">
              Apple offers automated and live support. Phone support is available 24/7 for billing, device, and Apple Pay issues.
            </p>
          </div>
        </div>
      </section>

      {/* Official Links Section */}
      <section id="official-links" className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">🌐 Official Apple Pay Support Links</h2>
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
      </section>

      {/* Device Support Section */}
      <section id="device-support" className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">📱 Contact Apple Pay Support from iPhone</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-8 bottom-8 w-0.5 bg-gray-200 z-0"></div>
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start relative z-10">
                <div className={`flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center ${
                  index > 3 ? 'bg-blue-50' : 'bg-gray-100'
                }`}>
                  {step.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="mt-3 text-sm">
            <strong>Related guides:</strong>{' '}
            <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline">
              Apple Cash Support
            </Link>
            {' | '}
            <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline">
              Apple Card Support
            </Link>
            {' | '}
            <Link to="/apple-wallet-support" className="text-blue-600 hover:text-blue-800 underline">
              Apple Wallet Support
            </Link>
            {' | '}
            <a href="#common-problems" className="text-blue-600 hover:text-blue-800 underline">
              Troubleshooting Guide
            </a>
            {' | '}
            <a href="#apple-pay-faqs" className="text-blue-600 hover:text-blue-800 underline">
              Apple Pay FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section id="social-media" className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">💬 Apple Pay Support on Social Media</h2>
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
        
        <div className="mt-6 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-900 font-medium mb-3">
              Need help with other Apple services?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Apple Cash Support
              </Link>
              <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Apple Card Help
              </Link>
              <Link to="/apple-wallet-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Apple Wallet Guide
              </Link>
              <a href="#contact-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Section */}
      <section id="common-problems" className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">🛠 Common Apple Pay Problems & How to Fix</h2>
        <div className="space-y-4">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.problem}</h3>
                  <p className="text-gray-700">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Additional Apple Pay Troubleshooting Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
            <div>
              <h4 className="font-medium mb-2">Before Contacting Apple Pay Support:</h4>
              <ul className="text-sm space-y-1">
                <li>• Check Apple System Status for service outages</li>
                <li>• Ensure your device has the latest iOS update</li>
                <li>• Verify your Apple ID is signed in properly</li>
                <li>• Test with a different payment method</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">When to Call Apple Pay Customer Service:</h4>
              <ul className="text-sm space-y-1">
                <li>• Persistent payment failures across multiple cards</li>
                <li>• Unauthorized transactions or fraud concerns</li>
                <li>• Apple Wallet not responding or crashing</li>
                <li>• Card verification issues after multiple attempts</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-900 font-medium mb-3">
                Still need help? Try these resources:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#contact-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Phone Support
                </a>
                <a href="#official-links" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Official Apple Links
                </a>
                <a href="#device-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Device Support Guide
                </a>
                <a href="#apple-pay-faqs" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Detailed FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">✨ Why Choose Official Apple Pay Customer Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Fast Resolution</h3>
                <p className="text-sm text-gray-600">Average 5-minute response time</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Apple Pay customer service resolved my payment verification issue in under 10 minutes through the Wallet app chat. Highly recommend using official support channels."
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Secure Support</h3>
                <p className="text-sm text-gray-600">Protected account access</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "When I had unauthorized charges, Apple Pay customer service immediately secured my account and helped me dispute the transactions. Their fraud protection is excellent."
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-gray-900">Expert Help</h3>
                <p className="text-sm text-gray-600">Trained Apple specialists</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">
              "Apple Pay customer service helped me set up Family Sharing and explained all the security features. The support team really knows their stuff."
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-900 font-medium mb-3">
              Success stories from our comprehensive support:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/apple-cash-support" className="text-green-600 hover:text-green-800 underline font-medium">
                Apple Cash Success Stories
              </Link>
              <Link to="/apple-card-support" className="text-green-600 hover:text-green-800 underline font-medium">
                Apple Card Testimonials
              </Link>
              <Link to="/apple-wallet-support" className="text-green-600 hover:text-green-800 underline font-medium">
                Apple Wallet Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Troubleshooting */}
      <section className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">🔧 Advanced Apple Pay Error Codes & Solutions</h2>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-700 mb-6">
            If you encounter specific Apple Pay error codes, Apple Pay customer service can provide targeted solutions. Here are common error codes and when to contact support:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-red-900 mb-2">Error Code: Could Not Set Up Apple Pay</h3>
                <p className="text-red-800 text-sm mb-2">
                  <strong>Solution:</strong> Contact Apple Pay customer service immediately - this usually requires account verification assistance. For Apple Card setup issues, see our{' '}
                  <Link to="/apple-card-support" className="text-red-700 hover:text-red-900 underline font-medium">
                    Apple Card support guide
                  </Link>
                  .
                </p>
                <p className="text-red-700 text-xs">Call 1‑800‑MY‑APPLE for immediate help with setup errors.</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-2">Error Code: Payment Not Completed</h3>
                <p className="text-orange-800 text-sm mb-2">
                  <strong>Solution:</strong> Check internet connection, then contact Apple Pay customer service if persistent. For Apple Cash payment issues, visit our{' '}
                  <Link to="/apple-cash-support" className="text-orange-700 hover:text-orange-900 underline font-medium">
                    Apple Cash support page
                  </Link>
                  .
                </p>
                <p className="text-orange-700 text-xs">Apple Pay customer service can check for account restrictions.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Error Code: Card Cannot Be Added</h3>
                <p className="text-yellow-800 text-sm mb-2">
                  <strong>Solution:</strong> Contact both your bank and Apple Pay customer service for card compatibility issues. For Wallet-specific problems, check our{' '}
                  <Link to="/apple-wallet-support" className="text-yellow-700 hover:text-yellow-900 underline font-medium">
                    Apple Wallet troubleshooting guide
                  </Link>
                  .
                </p>
                <p className="text-yellow-700 text-xs">Apple Pay customer service can verify if your card is supported.</p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Error Code: Touch ID/Face ID Required</h3>
                <p className="text-blue-800 text-sm mb-2">
                  <strong>Solution:</strong> Enable biometric authentication in Settings, or contact Apple Pay customer service for alternatives.
                </p>
                <p className="text-blue-700 text-xs">Apple Pay customer service can help with accessibility options.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3">When to Contact Apple Pay Customer Service</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Any error code that persists after basic troubleshooting
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Account verification or identity confirmation issues
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Suspected fraud or unauthorized transactions
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Multiple card setup failures
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Device-specific Apple Pay problems
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  Business or family account setup assistance
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-medium mb-3">
                Advanced troubleshooting resources:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a href="#contact-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Expert Phone Support
                </a>
                <a href="#official-links" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Apple System Status
                </a>
                <Link to="/apple-cash-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Apple Cash Troubleshooting
                </Link>
                <Link to="/apple-card-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
                  Apple Card Error Codes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApplePayFAQs />

      {/* Email Support Section */}
      <section id="email-support" className="py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">📧 Is Email Support Available?</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <p className="text-gray-800">
                Apple does <strong>not offer email-based Apple Pay customer service</strong> for security reasons. 
                For security, always use{' '}
                <a 
                  href="https://getsupport.apple.com" 
                  className="text-blue-600 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start Apple Pay support chat or phone call"
                >
                  Apple's Get Support
                </a>{' '}
                to chat or speak with an Apple Pay customer service representative. This ensures your account information stays secure while getting the help you need.
                {' '}For specific services, visit our{' '}
                <Link to="/apple-cash-support" className="text-blue-600 hover:underline font-medium">
                  Apple Cash support
                </Link>
                {' '}or{' '}
                <Link to="/apple-card-support" className="text-blue-600 hover:underline font-medium">
                  Apple Card support
                </Link>
                {' '}pages.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Why Choose Official Apple Pay Customer Service?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-green-800">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-medium">Secure Support</h4>
              <p className="text-sm">Protected account access</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-medium">24/7 Availability</h4>
              <p className="text-sm">Round-the-clock assistance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium">Expert Help</h4>
              <p className="text-sm">Trained Apple specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Information Before Footer */}
      <section className="py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-900 font-medium">
            Apple offers automated and live support. Phone support is available 24/7 for billing, device, and Apple Pay issues.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <a href="#contact-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              📞 Phone Support
            </a>
            <a href="#official-links" className="text-blue-600 hover:text-blue-800 underline font-medium">
              🌐 Official Links
            </a>
            <a href="#device-support" className="text-blue-600 hover:text-blue-800 underline font-medium">
              📱 Device Support
            </a>
            <a href="#common-problems" className="text-blue-600 hover:text-blue-800 underline font-medium">
              🛠 Troubleshooting
            </a>
            <a href="#apple-pay-faqs" className="text-blue-600 hover:text-blue-800 underline font-medium">
              ❓ FAQs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;