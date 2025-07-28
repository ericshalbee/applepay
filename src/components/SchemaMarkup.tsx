import React from 'react';

const SchemaMarkup: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Apple Inc.",
    "url": "https://www.apple.com",
    "logo": "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
    "sameAs": [
      "https://twitter.com/AppleSupport",
      "https://www.facebook.com/apple",
      "https://www.youtube.com/user/Apple"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Apple Pay customer service phone number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apple Pay customer service is available 24/7 through multiple official channels including live chat at getsupport.apple.com, the Apple Support app, and phone support through your local Apple support number."
        }
      },
      {
        "@type": "Question",
        "name": "How do I contact Apple Pay support from my device?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To contact Apple Pay support from your device: 1) Open Settings, 2) Tap your name > Apple ID, 3) Select iCloud & Media Purchases > Support, 4) Choose Apple Pay, then select Chat or Call options."
        }
      },
      {
        "@type": "Question",
        "name": "Does Apple Pay offer email support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Apple does not offer email-based customer service for Apple Pay. For security reasons, always use Apple's official Get Support website or call 1‑800‑692‑7753 to chat or speak with a representative."
        }
      },
      {
        "@type": "Question",
        "name": "How do I fix Apple Pay not working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To fix Apple Pay not working: 1) Restart your device, 2) Update to the latest iOS version, 3) Re-add your payment card to Apple Wallet, 4) Check with your bank that the card supports Apple Pay, 5) Contact Apple Support if issues persist."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if I have an unauthorized Apple Pay charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For unauthorized Apple Pay charges: 1) Report the transaction immediately via the Wallet app, 2) Contact Apple Support through official channels, 3) Contact your bank or card issuer, 4) Monitor your account for additional unauthorized activity."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Contact Apple Pay Customer Support",
    "description": "Step-by-step guide to contact Apple Pay customer service for help with payment issues, card errors, and account problems.",
    "image": "https://iphonesupport.netlify.app/apple.png",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Call Apple Support",
        "text": "Contact Apple Pay support through official channels for immediate assistance with payment issues.",
        "image": "https://iphonesupport.netlify.app/apple.png"
      },
      {
        "@type": "HowToStep",
        "name": "Use Online Chat",
        "text": "Visit getsupport.apple.com and select Apple Pay to start a live chat with Apple Support.",
        "image": "https://iphonesupport.netlify.app/apple.png"
      },
      {
        "@type": "HowToStep",
        "name": "Contact from iPhone",
        "text": "Open Settings > Your Name > iCloud & Media Purchases > Support > Apple Pay to access chat and support options.",
        "image": "https://iphonesupport.netlify.app/apple.png"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iphonesupport.netlify.app/",
        "logo": "https://iphonesupport.netlify.app/apple.png"
      }
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://iphonesupport.netlify.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "iPhone Support",
    "url": "https://iphonesupport.netlify.app/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://iphonesupport.netlify.app/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;