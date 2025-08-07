'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cosmic-deep/90 backdrop-blur-md border-b border-cosmic-purple/20"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-rose bg-clip-text text-transparent"
          >
            ALIGNED
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-cosmic-white hover:text-cosmic-rose transition-colors duration-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cosmic-purple/25 transition-all duration-300"
          >
            Download for Desktop
          </motion.button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-cosmic-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-cosmic-white hover:text-cosmic-rose transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-6 py-3 rounded-full text-white font-semibold mt-4">
                Download for Desktop
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;