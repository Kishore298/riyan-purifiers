import React from 'react';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import WhatWeOffer from '../components/sections/WhatWeOffer';
import Achievements from '../components/sections/Achievements';
import ProductGallery from '../components/sections/ProductGallery';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutUs />
      <WhatWeOffer />
      <Achievements />
      <ProductGallery />
      <ContactSection />
    </div>
  );
};

export default Home;