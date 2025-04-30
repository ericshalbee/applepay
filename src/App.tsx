import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import SchemaMarkup from './components/SchemaMarkup';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <SchemaMarkup />
      <Header />
      <MainContent />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;