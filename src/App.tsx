import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function HomePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/dash-guard" : "/"}>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
