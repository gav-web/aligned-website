'use client';

import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      title: "AI Consciousness Companion",
      description: "Your personal AI guide that understands your spiritual journey and provides personalized insights for your transformation.",
      icon: "🧠",
      benefits: ["24/7 spiritual guidance", "Personalized insights", "Consciousness expansion tracking"]
    },
    {
      title: "Personalized Spiritual Guidance",
      description: "Receive custom-tailored spiritual practices, meditations, and exercises designed specifically for your unique path.",
      icon: "🌟",
      benefits: ["Custom spiritual practices", "Tailored meditations", "Personal growth exercises"]
    },
    {
      title: "Community Connection",
      description: "Connect with like-minded spiritual entrepreneurs who are also on their transformation journey.",
      icon: "🤝",
      benefits: ["Supportive community", "Networking opportunities", "Shared experiences"]
    },
    {
      title: "Immersive Desktop Experience",
      description: "Large-screen dashboards and multi-window layouts that show your spiritual growth, manifestation progress, and consciousness expansion in detail.",
      icon: "🖥️",
      benefits: ["Multi-window workspace", "Large-screen visualizations", "Detailed analytics dashboard"]
    },
    {
      title: "Daily Transformation Rituals",
      description: "Structured daily practices that integrate seamlessly into your routine for consistent spiritual growth.",
      icon: "🧘",
      benefits: ["Morning activations", "Daily check-ins", "Evening integration"]
    },
    {
      title: "Desktop Manifestation Suite",
      description: "Powerful desktop tools for vision boarding, goal setting, and manifesting your dreams with full-screen focus and precision.",
      icon: "✨",
      benefits: ["Full-screen vision boards", "Keyboard shortcuts", "Multi-monitor support"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-cosmic-deep to-cosmic-purple/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-white to-cosmic-rose bg-clip-text text-transparent">
            Powerful Desktop Experience
          </h2>
          <p className="text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Everything you need to transform your life and business through spiritual alignment, 
            all in one comprehensive desktop application designed for focused transformation work.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group h-full"
            >
              <div className="bg-gradient-to-br from-cosmic-white/5 to-cosmic-purple/10 backdrop-blur-sm border border-cosmic-white/10 rounded-2xl p-8 h-full hover:border-cosmic-rose/30 transition-all duration-300 flex flex-col">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-6 text-center"
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-cosmic-white group-hover:text-cosmic-rose transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-cosmic-white/80 mb-6 leading-relaxed flex-grow">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, bIndex) => (
                    <motion.div
                      key={bIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + bIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-cosmic-white/70"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-rose mr-2" />
                      {benefit}
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="mt-6 h-0.5 bg-gradient-to-r from-cosmic-purple to-cosmic-rose transform origin-left rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-cosmic-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of spiritual entrepreneurs who have already begun their transformation 
            with ALIGNED's comprehensive desktop platform.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 70, 193, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-10 py-4 rounded-full text-white text-lg font-semibold shadow-lg transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
              Download for Windows
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cosmic-white/30 text-cosmic-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-cosmic-white/10 transition-all duration-300 flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for Mac
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;