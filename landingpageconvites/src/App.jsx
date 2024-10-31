import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
