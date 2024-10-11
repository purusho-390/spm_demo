// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import StatsBanner from './components/Banner';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <StatsBanner />
      <Testimonials />
      <Card />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
