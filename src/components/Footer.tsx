import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
               src="/apple.png"
                alt="Apple Pay customer service help center logo"
                title="Apple Pay Support Help Center"
                className="h-8 w-8"
                width="32"
                height="32"
               onError={(e) => {
                 console.error('Footer logo failed to load:', e);
                 e.currentTarget.style.display = 'none';
               }}
               onLoad={() => console.log('Footer logo loaded successfully')}
              />
              <span className="ml-2 text-lg font-medium">Apple Pay Support</span>
            </div>
            <p className="text-sm text-gray-600">
              Get help with Apple Pay services, troubleshooting, and contact information.
            </p>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Pay Support</Link></li>
                <li><Link to="/apple-cash-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Cash Support</Link></li>
                <li><Link to="/apple-card-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Card Support</Link></li>
                <li><Link to="/apple-wallet-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Wallet Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="/#contact-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Contact Support</a></li>
                <li><a href="/#official-links" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Official Links</a></li>
                <li><a href="/#common-problems" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Common Problems</a></li>
                <li><a href="/#device-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Device Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Official Apple</h3>
              <ul className="space-y-3">
                <li><a href="https://support.apple.com/apple-pay" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple Pay Help</a></li>
                <li><a href="https://getsupport.apple.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Get Support</a></li>
                <li><a href="https://www.apple.com/support/systemstatus/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">System Status</a></li>
                <li><a href="https://support.apple.com/apple-id" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Apple ID Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Additional Apple Resources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Support</h4>
                <ul className="space-y-2">
                  <li><a href="https://support.apple.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Apple Support</a></li>
                  <li><a href="https://discussions.apple.com" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Community Forums</a></li>
                  <li><a href="https://support.apple.com/en-us/HT201232" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Contact Numbers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Services</h4>
                <ul className="space-y-2">
                  <li><a href="https://support.apple.com/wallet" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Apple Wallet</a></li>
                  <li><a href="https://support.apple.com/apple-cash" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Apple Cash</a></li>
                  <li><a href="https://support.apple.com/apple-card" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Apple Card</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Social</h4>
                <ul className="space-y-2">
                  <li><a href="https://twitter.com/AppleSupport" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">@AppleSupport</a></li>
                  <li><a href="https://www.facebook.com/apple" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Facebook</a></li>
                  <li><a href="https://www.youtube.com/user/Apple" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">YouTube</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-medium text-gray-700 uppercase tracking-wider mb-2">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="https://www.apple.com/legal/internet-services/terms/site.html" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
                  <li><a href="/sitemap.xml" className="text-xs text-gray-600 hover:text-blue-600 transition-colors">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Apple Pay Support. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            This is an unofficial support resource. Apple, Apple Pay, and Apple Wallet are trademarks of Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;