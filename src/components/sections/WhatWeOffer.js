import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, ShieldCheck, Settings, Wrench } from 'lucide-react';

const offers = [
  {
    title: 'RO Purification',
    description: 'Advanced Reverse Osmosis technology that removes 99% of impurities, chemicals and microorganisms.',
    icon: <Droplet size={40} className="text-primary" />
  },
  {
    title: 'UV Sterilization',
    description: 'Ultra-violet light sterilization kills harmful bacteria and viruses to ensure safe drinking water.',
    icon: <ShieldCheck size={40} className="text-primary" />
  },
  {
    title: 'Annual Maintenance',
    description: 'Professional AMC plans with regular filter changes, sanitisation and performance checks.',
    icon: <Settings size={40} className="text-primary" />
  },
  {
    title: 'Repair & Service',
    description: 'Expert technicians for all brands. Quick repair turnaround with genuine spare parts guaranteed.',
    icon: <Wrench size={40} className="text-primary" />
  }
];

const WhatWeOffer = () => {
  return (
    <section className="py-24 bg-bg relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-full blur-3xl"></div>

      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-primary font-bold tracking-widest uppercase mb-4">What We Offer</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text">
            Professional Water Purifier Solutions
          </h2>
        </div>

        {/* Layout 2x2 Glass Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-panel p-5 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {offer.icon}
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">{offer.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;