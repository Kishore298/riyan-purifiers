import React, { useState, useMemo, useRef } from 'react';
import { ShoppingCart, Filter, X, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const products = [
  // Domestic RO System
  { id: 1, name: 'Domestic Model A', mainCategory: 'Domestic RO System', subCategory: '12LPH', price: '₹14,500', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&q=80' },
  { id: 2, name: 'Domestic Model B', mainCategory: 'Domestic RO System', subCategory: '25-40LPH', price: '₹18,000', image: 'https://images.unsplash.com/photo-1629831777218-c21e641773ec?w=500&q=80' },
  { id: 3, name: 'Domestic Model C', mainCategory: 'Domestic RO System', subCategory: '60LPH', price: '₹22,500', image: 'https://images.unsplash.com/photo-1584820927498-cafe8c1c5b81?w=500&q=80' },
  { id: 4, name: 'Domestic Model D', mainCategory: 'Domestic RO System', subCategory: '80LPH', price: null, image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&q=80' },

  // Industrial RO System (2 of each)
  { id: 5, name: 'Industrial 100-A', mainCategory: 'Industrial RO System', subCategory: '100LPH', price: '₹45,000', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=500&q=80' },
  { id: 6, name: 'Industrial 100-B', mainCategory: 'Industrial RO System', subCategory: '100LPH', price: '₹48,000', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80' },
  { id: 7, name: 'Industrial 500-A', mainCategory: 'Industrial RO System', subCategory: '500LPH', price: '₹1,20,000', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80' },
  { id: 8, name: 'Industrial 500-B', mainCategory: 'Industrial RO System', subCategory: '500LPH', price: null, image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&q=80' },
  { id: 9, name: 'Industrial 1000-A', mainCategory: 'Industrial RO System', subCategory: '1000LPH', price: '₹2,50,000', image: 'https://images.unsplash.com/photo-1531390632669-7c15e8c1abf5?w=500&q=80' },
  { id: 10, name: 'Industrial 1000-B', mainCategory: 'Industrial RO System', subCategory: '1000LPH', price: '₹2,65,000', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&q=80' },
  { id: 11, name: 'Industrial 2000-A', mainCategory: 'Industrial RO System', subCategory: '2000LPH', price: null, image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80' },
  { id: 12, name: 'Industrial 2000-B', mainCategory: 'Industrial RO System', subCategory: '2000LPH', price: '₹4,80,000', image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&q=80' },
  { id: 13, name: 'Industrial 3000-A', mainCategory: 'Industrial RO System', subCategory: '3000LPH', price: '₹7,00,000', image: 'https://images.unsplash.com/photo-1581091870621-0a6311681283?w=500&q=80' },
  { id: 14, name: 'Industrial 3000-B', mainCategory: 'Industrial RO System', subCategory: '3000LPH', price: null, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80' },
  { id: 15, name: 'Industrial 5000-A', mainCategory: 'Industrial RO System', subCategory: '5000LPH', price: '₹12,00,000', image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=500&q=80' },
  { id: 16, name: 'Industrial 5000-B', mainCategory: 'Industrial RO System', subCategory: '5000LPH', price: '₹12,50,000', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80' },

  // Water Dispenser
  { id: 17, name: 'Dispenser Normal', mainCategory: 'Water Dispenser', subCategory: 'Normal', price: '₹8,500', image: 'https://images.unsplash.com/photo-1629831777218-c21e641773ec?w=500&q=80' },
  { id: 18, name: 'Dispenser Normal & Cold', mainCategory: 'Water Dispenser', subCategory: 'Normal & Cold', price: '₹11,000', image: 'https://images.unsplash.com/photo-1584820927498-cafe8c1c5b81?w=500&q=80' },
  { id: 19, name: 'Dispenser Normal & Hot', mainCategory: 'Water Dispenser', subCategory: 'Normal & Hot', price: '₹12,500', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&q=80' },
  { id: 20, name: 'Dispenser Hot & Cold', mainCategory: 'Water Dispenser', subCategory: 'Normal + Hot & Cold', price: null, image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&q=80' },

  // Water Softeners (8 items)
  { id: 21, name: 'Softener Model A1', mainCategory: 'Water Softeners', subCategory: 'Standard', price: '₹25,000', image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?w=500&q=80' },
  { id: 22, name: 'Softener Model A2', mainCategory: 'Water Softeners', subCategory: 'Standard', price: '₹28,000', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80' },
  { id: 23, name: 'Softener Model B1', mainCategory: 'Water Softeners', subCategory: 'High Capacity', price: '₹45,000', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80' },
  { id: 24, name: 'Softener Model B2', mainCategory: 'Water Softeners', subCategory: 'High Capacity', price: null, image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&q=80' },
  { id: 25, name: 'Softener Model C1', mainCategory: 'Water Softeners', subCategory: 'Industrial', price: '₹1,15,000', image: 'https://images.unsplash.com/photo-1531390632669-7c15e8c1abf5?w=500&q=80' },
  { id: 26, name: 'Softener Model C2', mainCategory: 'Water Softeners', subCategory: 'Industrial', price: '₹1,25,000', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&q=80' },
  { id: 27, name: 'Softener Model D1', mainCategory: 'Water Softeners', subCategory: 'Commercial', price: '₹75,000', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80' },
  { id: 28, name: 'Softener Model D2', mainCategory: 'Water Softeners', subCategory: 'Commercial', price: null, image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&q=80' },

  // Iron Removers (4 items)
  { id: 29, name: 'Iron Remover IR-100', mainCategory: 'Iron Removers', subCategory: 'Domestic', price: '₹15,000', image: 'https://images.unsplash.com/photo-1581091870621-0a6311681283?w=500&q=80' },
  { id: 30, name: 'Iron Remover IR-200', mainCategory: 'Iron Removers', subCategory: 'Domestic', price: '₹18,500', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80' },
  { id: 31, name: 'Iron Remover IR-500', mainCategory: 'Iron Removers', subCategory: 'Commercial', price: '₹45,000', image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=500&q=80' },
  { id: 32, name: 'Iron Remover IR-1000', mainCategory: 'Iron Removers', subCategory: 'Industrial', price: null, image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80' },
];

const mainCategories = [...new Set(products.map(p => p.mainCategory))];

const Catalogue = () => {
  const [activeMainCategory, setActiveMainCategory] = useState(mainCategories[0]);
  const [activeSubCategory, setActiveSubCategory] = useState('All');
  
  // Enquiry Modal States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [emailStatus, setEmailStatus] = useState('idle');
  const formRef = useRef();

  const handleEnquireClick = (e, product) => {
    e.preventDefault();
    setSelectedProduct(product);
    setEmailStatus('idle');
  };

  const closeEnquiryModal = () => {
    setSelectedProduct(null);
    setEmailStatus('idle');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailStatus('loading');

    // MOCK EMAILJS CONFIGURATION (same as ContactSection)
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'mock_service_id';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'mock_template_id';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'mock_public_key';

    if (serviceID === 'mock_service_id') {
      // Simulate API call for mock
      setTimeout(() => setEmailStatus('success'), 2000);
      return;
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        setEmailStatus('success');
      }, (error) => {
        setEmailStatus('error');
        console.error(error.text);
      });
  };

  const subCategories = useMemo(() => {
    const subs = products
      .filter(p => p.mainCategory === activeMainCategory)
      .map(p => p.subCategory);
    return ['All', ...new Set(subs)];
  }, [activeMainCategory]);

  // Reset subcategory when main category changes
  const handleMainCategoryChange = (cat) => {
    setActiveMainCategory(cat);
    setActiveSubCategory('All');
  };

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchMain = p.mainCategory === activeMainCategory;
      const matchSub = activeSubCategory === 'All' ? true : p.subCategory === activeSubCategory;
      return matchMain && matchSub;
    });
  }, [activeMainCategory, activeSubCategory]);

  return (
    <div className="pt-20 min-h-screen bg-bg">
      {/* Banner */}
      <div className="bg-text text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of advanced water purifiers designed to provide safe, clean, and healthy drinking water for your family and business.
          </p>
        </div>
      </div>

      {/* Catalogue Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleMainCategoryChange(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm
                ${activeMainCategory === cat 
                  ? 'bg-primary text-white shadow-primary/30 shadow-md scale-105' 
                  : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Subcategory Filter */}
        {subCategories.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <div className="flex items-center gap-2 text-gray-500 mr-2">
              <Filter size={18} />
              <span className="font-medium text-sm uppercase tracking-wider">Filter by Type:</span>
            </div>
            {subCategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubCategory(sub)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border
                  ${activeSubCategory === sub
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-primary/50 hover:text-primary'
                  }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-64 overflow-hidden relative bg-gray-50 flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary rounded-full shadow-sm border border-primary/20">
                    {product.subCategory}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-text mb-2 line-clamp-2" title={product.name}>{product.name}</h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Price</span>
                    <span className={`font-bold ${product.price ? 'text-text text-lg' : 'text-primary text-sm'}`}>
                      {product.price ? product.price : 'Price on Request'}
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleEnquireClick(e, product)}
                    className="w-full bg-primary/10 text-primary font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ShoppingCart size={18} />
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Enquiry Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative">
            <button 
              onClick={closeEnquiryModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white/80 p-1 rounded-full"
            >
              <X size={24} />
            </button>
            
            <div className="p-6 bg-gray-50 border-b border-gray-100 flex items-center gap-4">
               <img src={selectedProduct.image} alt={selectedProduct.name} className="w-16 h-16 object-contain rounded bg-white p-1 shadow-sm" />
               <div>
                 <h3 className="text-lg font-bold text-text line-clamp-1">{selectedProduct.name}</h3>
                 <p className="text-sm text-primary font-semibold">{selectedProduct.price ? selectedProduct.price : 'Price on Request'}</p>
               </div>
            </div>

            <div className="p-6">
              {emailStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-text mb-2">Enquiry Sent!</h4>
                  <p className="text-gray-600 mb-6">Thank you for your interest in {selectedProduct.name}. Our team will contact you shortly.</p>
                  <button 
                    onClick={closeEnquiryModal}
                    className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-light transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
                  {/* Hidden fields for product details */}
                  <input type="hidden" name="product_name" value={selectedProduct.name} />
                  <input type="hidden" name="product_category" value={selectedProduct.mainCategory} />
                  <input type="hidden" name="product_subcategory" value={selectedProduct.subCategory} />
                  <input type="hidden" name="product_price" value={selectedProduct.price || 'Price on Request'} />

                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-1">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows="2"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder={`I would like to know more about ${selectedProduct.name}.`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={emailStatus === 'loading'}
                    className="w-full mt-2 bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
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
      )}

    </div>
  );
};

export default Catalogue;