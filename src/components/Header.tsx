import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Apple } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
             src="/apple.png"
              alt="Apple Pay customer service support logo - Contact Apple Support 24/7"
              title="Apple Pay Customer Service - Get Help 24/7"
              className="h-8 w-8"
              width="32"
              height="32"
             onError={(e) => {
               console.error('Logo failed to load:', e);
               e.currentTarget.style.display = 'none';
             }}
             onLoad={() => console.log('Logo loaded successfully')}
            />
            <Link to="/" className="ml-2 text-lg font-medium hover:text-blue-600 transition-colors">
              Apple Pay Support
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {location.pathname === '/' ? (
                <>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <a href="#contact-support">Contact Support</a>
                  </li>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <a href="#official-links">Official Links</a>
                  </li>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <a href="#device-support">Device Support</a>
                  </li>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <a href="#common-problems">Common Problems</a>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <Link to="/">Apple Pay</Link>
                  </li>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <Link to="/apple-cash-support">Apple Cash</Link>
                  </li>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <Link to="/apple-card-support">Apple Card</Link>
                  </li>
                  <li className="text-sm hover:text-blue-600 transition-colors">
                    <Link to="/apple-wallet-support">Apple Wallet</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-blue-600 transition-colors">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;