import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <meta name="theme-color" content="#0d6efd" />
      </Helmet>
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
