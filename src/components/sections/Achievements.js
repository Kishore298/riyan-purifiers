import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import numbers from "../../assets/images/numbers.jpg"

const Counter = ({ from, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const updateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(from + (to - from) * progress));
          animationFrame = requestAnimationFrame(updateCounter);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const Achievements = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-primary font-bold tracking-widest uppercase mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-1 bg-primary rounded-full hidden lg:block"></span>
              Our Achievements
            </h3>

            <h2 className="text-xl md:text-4xl font-extrabold text-text mb-12">
              Numbers That Speak For Us
            </h2>

            <div className="space-y-10 flex flex-col items-center lg:items-start">
              <div className="w-full text-center lg:text-left">
                <h4 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 mb-2 flex items-baseline justify-center lg:justify-start">
                  <Counter from={0} to={6958} /> <span className="text-4xl ml-1">+</span>
                </h4>
                <p className="text-lg md:text-xl text-gray-600 font-medium uppercase tracking-wider">Trusted Clients</p>
              </div>

              <div className="w-full text-center lg:text-left">
                <h4 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 mb-2 flex items-baseline justify-center lg:justify-start">
                  <Counter from={0} to={9953} /> <span className="text-4xl ml-1">+</span>
                </h4>
                <p className="text-lg md:text-xl text-gray-600 font-medium uppercase tracking-wider">Total Installations</p>
              </div>

              <div className="w-full text-center lg:text-left">
                <h4 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 mb-2 flex items-baseline justify-center lg:justify-start">
                  <Counter from={0} to={8500} /> <span className="text-4xl ml-1">+</span>
                </h4>
                <p className="text-lg md:text-xl text-gray-600 font-medium uppercase tracking-wider">Total Sales & Services</p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={numbers}
                alt="Our Technicians"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay"></div>
            </div>

            <motion.div
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-4 sm:top-10 left-0 sm:-left-10 glass-panel !bg-white/90 p-2 sm:p-4 flex items-center gap-2 sm:gap-4 scale-90 sm:scale-100 origin-top-left z-10 shadow-lg"
            >
              <div className="bg-primary/20 p-2 sm:p-3 rounded-xl text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-text">24/7</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Support</p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -12, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-4 sm:bottom-10 right-0 sm:-right-10 glass-panel !bg-white/90 p-2 sm:p-4 flex items-center gap-2 sm:gap-4 scale-90 sm:scale-100 origin-bottom-right z-10 shadow-lg"
            >
              <div className="bg-primary/20 p-2 sm:p-3 rounded-xl text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-text">100%</p>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">Guarantee</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;