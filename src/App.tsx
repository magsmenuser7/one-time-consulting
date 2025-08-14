import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatYouGet from './components/WhatYouGet';
import WhyMagsmen from './components/WhyMagsmen';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import RootsVisual from './components/RootsVisual';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <WhatYouGet />
      <WhyMagsmen />
      <HowItWorks />
      <Testimonials />
      <RootsVisual />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;