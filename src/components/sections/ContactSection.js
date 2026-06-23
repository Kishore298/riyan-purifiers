import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    // MOCK EMAILJS CONFIGURATION
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'mock_service_id';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'mock_template_id';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'mock_public_key';

    if (serviceID === 'mock_service_id') {
      // Simulate API call for mock
      setTimeout(() => setStatus('success'), 2000);
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        setStatus('error');
        console.error(error.text);
      });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h3 className="text-primary font-bold tracking-widest uppercase mb-4">Contact Us</h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text">
            Get In Touch With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-panel p-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-600">+91 75501 12122</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Email Address</h4>
                  <p className="text-gray-600">riyanrealtorz@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-text mb-1">Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.059296538965!2d76.9947547!3d11.0207198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582b12361cf5%3A0x6b7fcabdfdc51d45!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Glassmorphism Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

            <div className="glass-panel p-10 relative z-10 !bg-white/80">
              <h3 className="text-2xl font-bold text-text mb-8">Send an Enquiry</h3>

              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="form"
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Full Name</label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="user_phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="+91 75501 12122"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Email Address</label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {status === 'loading' ? 'Sending...' : (
                        <>Send Enquiry <Send size={20} /></>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    {/* Water-drop Success Animation */}
                    <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
                      <motion.div
                        initial={{ y: -50, opacity: 0, scale: 0.5 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
                        className="w-12 h-12 bg-primary rounded-full absolute z-20 shadow-lg shadow-primary/50"
                        style={{ borderTopLeftRadius: '0' }}
                        transformTemplate={({ y, scale }) => `translateY(${y}) scale(${scale}) rotate(45deg)`}
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.5, 2], opacity: [0, 1, 0] }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="absolute inset-0 border-4 border-primary rounded-full"
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 2, 3], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute inset-0 border-2 border-primary-light rounded-full"
                      />

                      {/* Bubbles */}
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={`bubble-${i}`}
                          initial={{ y: 0, x: 0, opacity: 0, scale: 0 }}
                          animate={{
                            y: -40 - Math.random() * 40,
                            x: (Math.random() - 0.5) * 60,
                            opacity: [0, 1, 0],
                            scale: Math.random() + 0.5
                          }}
                          transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                          className="absolute w-3 h-3 bg-primary-light rounded-full"
                        />
                      ))}
                    </div>

                    <motion.h4
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="text-2xl font-bold text-text mb-2 text-center"
                    >
                      Message Sent!
                    </motion.h4>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                      className="text-gray-600 text-center mb-8"
                    >
                      Your enquiry has been sent successfully. We will get back to you shortly.
                    </motion.p>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      onClick={() => setStatus('idle')}
                      className="text-primary font-medium hover:underline"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;