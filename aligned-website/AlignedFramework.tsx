'use client';

import { motion } from 'framer-motion';

const AlignedFramework = () => {
  const steps = [
    {
      letter: "A",
      title: "Awakened Purpose Assessment",
      subtitle: "Discover Who You Really Are",
      description: "Soul signature identification, life vision creation, and purpose activation to unlock your deepest calling.",
      features: ["Soul signature identification", "Life vision creation", "Purpose activation"],
      color: "from-cosmic-purple to-blue-600"
    },
    {
      letter: "L",
      title: "Limiting Belief Liberation",
      subtitle: "Free Yourself from What Holds You Back",
      description: "Subconscious programming clearing, fear transformation, and identity evolution for breakthrough growth.",
      features: ["Subconscious programming clearing", "Fear transformation", "Identity evolution"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      letter: "I",
      title: "Inner Genius Integration",
      subtitle: "Activate Your Supernatural Abilities",
      description: "Gifts identification, spiritual abilities recognition, and integration strategies for your unique talents.",
      features: ["Gifts identification", "Spiritual abilities recognition", "Integration strategies"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      letter: "G",
      title: "Growth Action Strategy",
      subtitle: "Manifest Your Vision into Reality",
      description: "Vision board creation, manifestation pathways, and sacred milestone mapping for tangible results.",
      features: ["Vision board creation", "Manifestation pathways", "Sacred milestone mapping"],
      color: "from-purple-600 to-pink-600"
    },
    {
      letter: "N",
      title: "Natural Energy Optimization",
      subtitle: "Master Your Flow States",
      description: "Energy pattern recognition, spiritual rhythm integration, and sustainable performance optimization.",
      features: ["Energy pattern recognition", "Spiritual rhythm integration", "Sustainable performance"],
      color: "from-pink-600 to-cosmic-rose"
    },
    {
      letter: "E",
      title: "Evolutionary Progress Tracking",
      subtitle: "Measure Your Transformation",
      description: "Multi-dimensional dashboards, consciousness expansion tracking, and celebration systems.",
      features: ["Multi-dimensional dashboards", "Consciousness expansion tracking", "Celebration systems"],
      color: "from-cosmic-rose to-orange-500"
    },
    {
      letter: "D",
      title: "Daily Sacred Rituals",
      subtitle: "Integrate Awakening into Daily Life",
      description: "Morning power activation, alignment check-ins, and evening integration for lasting transformation.",
      features: ["Morning power activation", "Alignment check-ins", "Evening integration"],
      color: "from-orange-500 to-cosmic-purple"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-cosmic-purple/5 to-cosmic-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cosmic-white to-cosmic-rose bg-clip-text text-transparent">
              The ALIGNED
            </span>
            <br />
            <span className="bg-gradient-to-r from-cosmic-rose to-cosmic-purple bg-clip-text text-transparent">
              Framework
            </span>
          </h2>
          <p className="text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            A comprehensive 7-step system designed to awaken your true power and create 
            the life and business of your dreams through spiritual alignment.
          </p>
        </motion.div>
        
        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}
            >
              <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                >
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {step.letter}
                  </span>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 bg-gradient-to-br from-cosmic-white/5 to-cosmic-purple/10 backdrop-blur-sm border border-cosmic-white/10 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-cosmic-white">
                    {step.title}
                  </h3>
                  <h4 className="text-lg md:text-xl font-semibold mb-4 bg-gradient-to-r from-cosmic-rose to-cosmic-purple bg-clip-text text-transparent">
                    {step.subtitle}
                  </h4>
                  <p className="text-cosmic-white/80 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid gap-2">
                    {step.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + fIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-cosmic-white/90"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-cosmic-white/90 mb-8 max-w-3xl mx-auto">
            Each step builds upon the last, creating a powerful transformation that aligns 
            your spiritual essence with your entrepreneurial vision.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 70, 193, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-10 py-4 rounded-full text-white text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Start Your ALIGNED Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AlignedFramework;