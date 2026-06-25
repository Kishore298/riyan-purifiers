import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import product1 from '../../assets/images/product1.jpeg';
import product2 from '../../assets/images/product2.jpeg';
import product3 from '../../assets/images/product3.jpeg';
import product4 from '../../assets/images/product4.jpeg';
import product5 from '../../assets/images/product5.jpeg';
import product6 from '../../assets/images/product6.jpeg';
import product7 from '../../assets/images/product7.jpeg';
import product8 from '../../assets/images/product8.jpeg';
import product9 from '../../assets/images/product9.jpeg';
import product10 from '../../assets/images/product10.jpeg';
import product11 from '../../assets/images/product11.jpeg';
import product12 from '../../assets/images/product12.jpeg';
import product13 from '../../assets/images/product13.jpeg';
import product14 from '../../assets/images/product14.jpeg';
import product15 from '../../assets/images/product15.jpeg';

const products = [
  { id: 1, image: product1 },
  { id: 2, image: product2 },
  { id: 3, image: product3 },
  { id: 4, image: product4 },
  { id: 5, image: product5 },
  { id: 6, image: product6 },
  { id: 7, image: product7 },
  { id: 8, image: product8 },
  { id: 9, image: product9 },
  { id: 10, image: product10 },
  { id: 11, image: product11 },
  { id: 12, image: product12 },
  { id: 13, image: product13 },
  { id: 14, image: product14 },
  { id: 15, image: product15 },
];

const ProductGallery = () => {
  return (
    <section className="py-24 bg-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center">
          <h3 className="text-primary font-bold tracking-widest uppercase mb-4">Our Products</h3>
          <h2 className="text-xl md:text-4xl font-extrabold text-text">
            Explore Our Product Range
          </h2>
        </div>
      </div>

      {/* Auto Scrolling Gallery */}
      <div className="relative w-full overflow-hidden flex pb-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg to-transparent z-10"></div>

        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
        >
          {/* Duplicate products array to create seamless loop */}
          {[...products, ...products].map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="w-80 flex-shrink-0 glass-panel overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-72 flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm">
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <Link
          to="/catalogue"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1 text-lg"
        >
          Explore All Products <ArrowRight size={20} />
        </Link>
      </div>

    </section>
  );
};

export default ProductGallery;