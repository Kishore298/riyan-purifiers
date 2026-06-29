import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBanner from "../../assets/images/water-purifiers.png";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative  min-h-[60vh] md:min-h-[70vh] pt-24 md:pt-24 pb-12 flex flex-col justify-center overflow-hidden bg-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-ripple"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-ripple" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-ripple" style={{ animationDelay: '2s' }}></div>

        {/* Falling Water Droplets */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-5 bg-white/40 backdrop-blur-md"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-50px',
              borderRadius: '50% 50% 50% 50% / 65% 65% 35% 35%'
            }}
            animate={{
              y: ['0vh', '120vh'],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="max-w-[90%] md:max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 items-center flex-grow mb-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <div className="glass-pill mb-6 bg-primary/10 border-primary/30 text-primary font-semibold">
              20+ Years of Experience
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-600 mb-2 uppercase tracking-wide">
              RO Purifier Sales & Services
            </h2>

            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-text leading-tight mb-8">
              Trusted RO Water Purifier <br />
              <span className="text-gradient">Sales, Installation, Repair & AMC</span> Services
            </h1>

            <div className="flex flex-wrap gap-4 md:gap-4">
              <a href="/catalogue" className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 md:py-4 md:px-8 rounded-full shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center gap-2 text-base md:text-lg">
                Explore Products <ArrowRight size={20} />
              </a>
              <a href="#contact" className="glass-panel hover:bg-white/80 text-text font-bold py-3 px-4 md:py-4 md:px-8 rounded-full transition-all flex items-center justify-center text-base md:text-lg">
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center mt-8 lg:mt-16"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
            <img
              src={heroBanner}
              alt="Premium Water Purifier"
              className="relative z-10 w-full object-contain drop-shadow-2xl animate-fade-up"
            />

            {/* Glassmorphism card attached to image */}
            <div className="absolute left-0 sm:-left-8 top-4 sm:top-0 glass-panel p-2 sm:p-4 scale-90 sm:scale-100 origin-top-left animate-fade-up z-20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-emerald-100 p-1.5 sm:p-2 rounded-full text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-text">100% Pure</p>
                  <p className="text-xs text-gray-500">Drinking Water</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Social Buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

          <a
            href="https://www.instagram.com/riyanpurifier?igsh=bDd0bWE1d281Mjdl"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill group transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white hover:border-transparent"
          >
            <FaInstagram
              size={18}
              className="text-pink-600 group-hover:text-white transition-colors"
            />
            Instagram
          </a>

          <a
            href="https://www.facebook.com/people/Riyan-Purifiers/61579686325976/?rdid=Fn47Ls7GjglfQ3EO&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Kiyyw9tEo%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill group transition-all duration-300 hover:bg-[#1877F2] hover:text-white hover:border-transparent"
          >
            <FaFacebookF
              size={18}
              className="text-[#1877F2] group-hover:text-white transition-colors"
            />
            Facebook
          </a>

          <a
            href="https://www.youtube.com/@resalesproperties"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill group transition-all duration-300 hover:bg-[#FF0000] hover:text-white hover:border-transparent"
          >
            <FaYoutube
              size={18}
              className="text-[#FF0000] group-hover:text-white transition-colors"
            />
            YouTube
          </a>

          <a
            href="https://wa.me/917550112122"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.fbq && window.fbq('track', 'Contact', { method: 'WhatsApp' })}
            className="glass-pill group transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:border-transparent"
          >
            <FaWhatsapp
              size={18}
              className="text-[#25D366] group-hover:text-white transition-colors"
            />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;