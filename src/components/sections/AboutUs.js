import React from 'react';
import { motion } from 'framer-motion';
import experience from "../../assets/images/experience.jpeg"

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl">
              <img
                src={experience}
                alt="About"
                className="w-[75%] mx-auto rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Floating Glass Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 -right-0 bg-primary rounded-lg p-4 flex flex-col items-center justify-center"
            >
              <span className="text-4xl font-extrabold text-white mb-1">20+</span>
              <span className="text-lg font-bold text-white uppercase tracking-wider text-center">Years<br />Experience</span>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              About Us
            </h3>

            <h2 className="text-4xl md:text-5xl font-extrabold text-text mb-6 leading-tight">
              20 Years of Experience <br />
              <span className="text-gray-500">in the Water Purifier Industry</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We have been providing premium RO Water Purifier solutions to homes and businesses for more than 20 years.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              From sales and installation to maintenance and repairs, we are your trusted partner for clean and safe drinking water.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2">
              <div className="glass-pill !bg-bg !border-primary/20">
                RO + UV + TDS
              </div>
              <div className="glass-pill !bg-bg !border-primary/20">
                Copper Technology
              </div>
              <div className="glass-pill !bg-bg !border-primary/20">
                Smart Monitoring
              </div>
              <div className="glass-pill !bg-bg !border-primary/20">
                Eco-Friendly
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;