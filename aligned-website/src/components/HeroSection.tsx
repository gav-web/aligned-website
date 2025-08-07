'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cosmic-deep via-cosmic-purple/20 to-cosmic-deep">
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-white/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border border-cosmic-purple/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border border-cosmic-rose/30"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
        >
          <span className="bg-gradient-to-r from-cosmic-white via-cosmic-rose to-cosmic-purple bg-clip-text text-transparent">
            Awaken Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-rose to-cosmic-white bg-clip-text text-transparent">
            True Power
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-cosmic-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Discover who you really are. Create the life and business of your dreams.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 70, 193, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-10 py-4 rounded-full text-white text-lg font-semibold shadow-lg hover:shadow-cosmic-purple/25 transition-all duration-300"
          >
            Download for Desktop
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-cosmic-white/30 text-cosmic-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-cosmic-white/10 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-cosmic-white/60 cursor-pointer"
            onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to discover more</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;