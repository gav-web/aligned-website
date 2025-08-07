'use client';

import { motion } from 'framer-motion';

const ProblemSection = () => {
  const problems = [
    {
      title: "Stuck in Old Patterns",
      description: "You keep hitting the same obstacles, feeling trapped in cycles that no longer serve your highest potential.",
      icon: "🔄"
    },
    {
      title: "Unfulfilled Despite Success",
      description: "Your achievements feel empty, leaving you wondering if there's something deeper you're meant to be doing.",
      icon: "💭"
    },
    {
      title: "Lost Your True Purpose",
      description: "You've forgotten who you really are beneath all the conditioning, searching for your authentic self.",
      icon: "🌟"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-cosmic-deep to-cosmic-purple/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-white to-cosmic-rose bg-clip-text text-transparent">
            You Know You're Meant for More
          </h2>
          <p className="text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Deep down, you sense there's a greater version of yourself waiting to emerge. 
            You're not broken—you're just ready for your next level of evolution.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-cosmic-white/5 to-cosmic-purple/10 backdrop-blur-sm border border-cosmic-white/10 rounded-2xl p-8 h-full hover:border-cosmic-rose/30 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="text-6xl mb-6 text-center"
                >
                  {problem.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-cosmic-white group-hover:text-cosmic-rose transition-colors duration-300">
                  {problem.title}
                </h3>
                
                <p className="text-cosmic-white/80 leading-relaxed">
                  {problem.description}
                </p>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="mt-6 h-1 bg-gradient-to-r from-cosmic-purple to-cosmic-rose transform origin-left rounded-full"
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
          <p className="text-xl text-cosmic-white/90 max-w-3xl mx-auto mb-8">
            If any of these resonate with you, you're in the right place. 
            It's time to break free and step into your true power.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center text-cosmic-rose font-semibold cursor-pointer"
            onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Discover the ALIGNED solution</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;