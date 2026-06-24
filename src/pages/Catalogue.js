import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Filter, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';

const categories = [
  'All Products',
  'Domestic RO Systems',
  'Industrial RO Systems',
  'Water Dispensers',
  'Iron Removers',
  'Water Softeners'
];

const domesticCapacities = ['All', '12 LPH', '25–40 LPH', '60 LPH', '80 LPH'];

const getBrandsForCapacity = (capacity) => {
  switch (capacity) {
    case '12 LPH': return ['All Brands', 'Misty', 'Genpure', 'Chrome', 'Merlin', 'Wave', 'Olivar'];
    case '25–40 LPH': return ['All Brands', 'Misty', 'Nobact'];
    case '60 LPH': return ['All Brands', 'Misty'];
    case '80 LPH': return ['All Brands', 'Misty'];
    default: return [];
  }
};

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedCapacity, setSelectedCapacity] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');

  // Enquiry Form States
  const [selectedProductName, setSelectedProductName] = useState('');
  const [emailStatus, setEmailStatus] = useState('idle');
  const formRef = useRef();
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedCapacity('All');
    setSelectedBrand('All Brands');
  };

  const handleCapacityChange = (cap) => {
    setSelectedCapacity(cap);
    setSelectedBrand('All Brands');
  };



  const sendEmail = (e) => {
    e.preventDefault();
    setEmailStatus('loading');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_CATALOGUE_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setEmailStatus('success');
      }, (error) => {
        setEmailStatus('error');
        console.error(error.text);
      });
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      // 1. Category Filter
      if (selectedCategory !== 'All Products' && p.category !== selectedCategory) {
        return false;
      }

      // 2. Secondary Capacity Filter (Only for Domestic RO)
      if (selectedCategory === 'Domestic RO Systems' && selectedCapacity !== 'All') {
        if (p.capacity !== selectedCapacity) return false;
      }

      // 3. Brand Filter (Only when a specific capacity is selected)
      if (selectedCategory === 'Domestic RO Systems' && selectedCapacity !== 'All' && selectedBrand !== 'All Brands') {
        if (p.brand !== selectedBrand) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedCapacity, selectedBrand]);

  return (
    <div className="pt-20 min-h-screen bg-bg">
      {/* Banner */}
      <div className="bg-text text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Our Product Catalogue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Explore our wide range of advanced water purifiers designed to provide safe, clean, and healthy drinking water.
          </motion.p>
        </div>
      </div>

      {/* Catalogue Content */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">

        {/* Sticky Filters Section */}
        <div className="sticky top-20 z-40 bg-bg/90 backdrop-blur-md py-2 md:py-4 border-b border-gray-200 mb-4 md:mb-8">

          {/* Main Category Filter */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-2 md:mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold transition-all duration-300 shadow-sm text-sm md:text-base
                  ${selectedCategory === cat
                    ? 'bg-primary text-white shadow-primary/30 shadow-md scale-105'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {/* Secondary Capacity Filter */}
            {selectedCategory === 'Domestic RO Systems' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 justify-center mb-4 overflow-hidden"
              >
                <div className="flex items-center gap-2 text-gray-500 mr-2">
                  <Filter size={18} />
                  <span className="font-medium text-sm uppercase tracking-wider">Capacity:</span>
                </div>
                {domesticCapacities.map((cap) => (
                  <button
                    key={cap}
                    onClick={() => handleCapacityChange(cap)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                      ${selectedCapacity === cap
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-primary/50 hover:text-primary'
                      }`}
                  >
                    {cap}
                  </button>
                ))}
              </motion.div>
            )}

            {/* Tertiary Brand Filter */}
            {selectedCategory === 'Domestic RO Systems' && selectedCapacity !== 'All' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2 justify-center overflow-hidden"
              >
                <div className="flex items-center gap-2 text-gray-500 mr-2">
                  <span className="font-medium text-sm uppercase tracking-wider">Brand:</span>
                </div>
                {getBrandsForCapacity(selectedCapacity).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                      ${selectedBrand === brand
                        ? 'bg-primary border-primary text-white shadow-md'
                        : 'bg-white border-gray-200 text-gray-500 hover:border-primary/50 hover:text-primary'
                      }`}
                  >
                    {brand}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-100 overflow-hidden group flex flex-col product-card ${firstLoad ? "fade-up" : ""}`}
              style={{ animationDelay: firstLoad ? `${index * 50}ms` : "0ms" }}
            >
              <div className="h-56 overflow-hidden relative flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
                <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary rounded-full shadow-sm border border-primary/20">
                    {product.brand}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-text rounded-full shadow-sm border border-gray-200">
                    {product.capacity}
                  </span>
                </div>
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-md font-bold text-text mb-2 line-clamp-2" title={product.name}>{product.name}</h3>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">Price</span>
                    {product.price ? (
                      <span className="font-bold text-text text-lg">{product.price}</span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedProductName(product.name);
                          document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="font-bold text-primary text-sm hover:underline hover:text-primary-light transition-colors"
                      >
                        Price on Request
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            <p className="text-xl">No products found matching your filters.</p>
            <button
              onClick={() => handleCategoryChange('All Products')}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* More Products Notice */}
        <div className="mt-16 text-center bg-primary/5 rounded-3xl p-3 md:p-8 border border-primary/10 max-w-4xl mx-auto">
          <h3 className="text-lg md:text-2xl font-bold text-text mb-2">Didn't find what you're looking for?</h3>
          <p className="text-gray-600 mb-3 md:mb-6">
            We have an extensive range of products available. Reach out to us with your specific requirements and we'll provide the perfect solution.
          </p>
          <button
            onClick={() => {
              setSelectedProductName('Others');
              document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-primary-light hover:shadow-lg transition-all"
          >
            Contact Us for More
          </button>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div id="enquiry-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-primary/5 p-6 md:p-8 text-center border-b border-gray-100">
            <h2 className="text-3xl font-bold text-text mb-2">Enquire Now</h2>
            <p className="text-gray-600">Interested in our products? Fill out the form below and we'll get back to you.</p>
          </div>
          <div className="p-6 md:p-8">
            {emailStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-2xl font-bold text-text mb-2">Enquiry Sent!</h4>
                <p className="text-gray-600 mb-6">Thank you for your interest. Our team will contact you shortly.</p>
                <button
                  onClick={() => {
                    setEmailStatus('idle');
                    setSelectedProductName('');
                  }}
                  className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-light transition-colors"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
                {selectedProductName && (
                  <>
                    <input type="hidden" name="product_category" value={products.find(p => p.name === selectedProductName)?.category || ''} />
                    <input type="hidden" name="product_capacity" value={products.find(p => p.name === selectedProductName)?.capacity || ''} />
                  </>
                )}

                <div>
                  <label className="block text-sm font-medium text-text mb-1">Select Product</label>
                  <select
                    name="product_name"
                    value={selectedProductName}
                    onChange={(e) => setSelectedProductName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="" disabled>Select a product to enquire about...</option>
                    {products.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-1">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="I would like to know more about the pricing and installation process."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={emailStatus === 'loading'}
                  className="w-full mt-2 bg-primary hover:bg-primary-light text-white font-bold py-4 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {emailStatus === 'loading' ? 'Sending Enquiry...' : (
                    <>Send Enquiry <Send size={18} /></>
                  )}
                </button>
                {emailStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">Failed to send. Please try again.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Catalogue;