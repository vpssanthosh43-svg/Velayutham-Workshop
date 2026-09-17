import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Highlights from './components/Highlights';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Stats />
        <About />
        <Services />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <Highlights />
        <WhyChooseUs />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ChatBot />
      <ScrollToTop />
    </div>
  );
};

export default App;
