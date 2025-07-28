import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import SchemaMarkup from './components/SchemaMarkup';
import ScrollToTop from './components/ScrollToTop';
import AppleCashSupport from './pages/AppleCashSupport';
import AppleCardSupport from './pages/AppleCardSupport';
import AppleWalletSupport from './pages/AppleWalletSupport';

function App() {
  console.log('App component rendering');
  
  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <link rel="canonical" href={`https://iphonesupport.netlify.app${window.location.pathname}`} />
        </Helmet>
        <ScrollToTop />
        <Routes>
          {/* SEO-friendly URL redirects */}
          <Route path="/apple-pay-support" element={<Navigate to="/" replace />} />
          <Route path="/apple-pay-customer-service" element={<Navigate to="/" replace />} />
          <Route path="/apple-cash-customer-service" element={<Navigate to="/apple-cash-support" replace />} />
          <Route path="/apple-card-customer-service" element={<Navigate to="/apple-card-support" replace />} />
          <Route path="/apple-wallet-customer-service" element={<Navigate to="/apple-wallet-support" replace />} />
          
          <Route path="/" element={
            <div className="min-h-screen flex flex-col bg-gray-50">
              <SchemaMarkup />
              <Header />
              <MainContent />
              <Footer />
            </div>
          } />
          <Route path="/apple-cash-support" element={<AppleCashSupport />} />
          <Route path="/apple-card-support" element={<AppleCardSupport />} />
          <Route path="/apple-wallet-support" element={<AppleWalletSupport />} />
          
          {/* 404 redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;