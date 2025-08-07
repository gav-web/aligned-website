'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Wellness Coach & Author",
      image: "👩‍💼",
      quote: "ALIGNED's desktop platform completely transformed how I approach my business and life. The large-screen experience allows me to see my entire transformation journey at once. Within 3 months, I tripled my income and finally found my true purpose.",
      transformation: "From struggling coach to 6-figure spiritual entrepreneur",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "Energy Healer & Consultant",
      image: "🧙‍♂️",
      quote: "I love having ALIGNED on my desktop - the multi-window workspace lets me track my energy patterns while working with clients. The immersive experience helped me understand my journey better than any mobile app could. My business clarity skyrocketed.",
      transformation: "From scattered healer to aligned business owner",
      rating: 5
    },
    {
      name: "Elena Vasquez",
      title: "Intuitive Business Strategist",
      image: "🌟",
      quote: "The desktop dashboards are incredible - I can see all my progress, goals, and daily rituals on multiple screens. The focused desktop environment kept me aligned even during challenging times. I finally broke through my income ceiling.",
      transformation: "From inconsistent income to predictable 7-figure success",
      rating: 5
    },
    {
      name: "David Thompson",
      title: "Spiritual Entrepreneur & Speaker",
      image: "🎯",
      quote: "ALIGNED's desktop application helped me integrate my spiritual practice with my business strategy seamlessly. Having everything on my main workspace where I do my deep work was a game-changer for my productivity and consciousness expansion.",
      transformation: "From solo practitioner to conscious business leader",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cosmic-purple/10 to-cosmic-deep overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-white to-cosmic-rose bg-clip-text text-transparent">
            Transformation Stories
          </h2>
          <p className="text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Real spiritual entrepreneurs sharing their journey of awakening to their true power 
            and creating extraordinary businesses aligned with their purpose.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cosmic-white/5 to-cosmic-purple/10 backdrop-blur-sm border border-cosmic-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-cosmic-purple to-cosmic-rose rounded-full flex items-center justify-center text-6xl shadow-2xl">
                    {testimonials[currentTestimonial].image}
                  </div>
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-cosmic-rose text-2xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-cosmic-white/90 mb-6 leading-relaxed italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-cosmic-white mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-cosmic-rose font-semibold mb-2">
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-cosmic-white/70 italic">
                      {testimonials[currentTestimonial].transformation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-cosmic-rose scale-110'
                    : 'bg-cosmic-white/30 hover:bg-cosmic-white/50'
                }`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1)}
              className="p-3 rounded-full bg-cosmic-white/10 border border-cosmic-white/20 hover:bg-cosmic-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-cosmic-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentTestimonial(currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0)}
              className="p-3 rounded-full bg-cosmic-white/10 border border-cosmic-white/20 hover:bg-cosmic-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-cosmic-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-cosmic-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of spiritual entrepreneurs who have already awakened to their true power. 
            Your transformation story could be next.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 70, 193, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-10 py-4 rounded-full text-white text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Begin Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;