import React from 'react';
import { Apple } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Apple className="h-8 w-8" />
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
                <li><a href="#phone-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Phone Support</a></li>
                <li><a href="#official-links" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Official Links</a></li>
                <li><a href="#iphone-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">iPhone Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#common-problems" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Common Problems</a></li>
                <li><a href="#social-media" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Social Media</a></li>
                <li><a href="#email-support" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Email Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">Cookie Policy</a></li>
              </ul>
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