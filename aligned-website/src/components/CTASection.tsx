'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cosmic-deep via-cosmic-purple/10 to-cosmic-deep relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cosmic-white/10 rounded-full"
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 border border-cosmic-purple/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 border border-cosmic-rose/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cosmic-white via-cosmic-rose to-cosmic-purple bg-clip-text text-transparent">
              Your Awakening
            </span>
            <br />
            <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-rose to-cosmic-white bg-clip-text text-transparent">
              Awaits
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-cosmic-white/90 mb-12 leading-relaxed"
          >
            Join thousands of spiritual entrepreneurs who have already begun their transformation. 
            Get early access to ALIGNED's powerful desktop platform and start awakening to your true power today.
          </motion.p>
          
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-cosmic-white/10 backdrop-blur-sm border border-cosmic-white/20 text-cosmic-white placeholder-cosmic-white/60 focus:outline-none focus:border-cosmic-rose focus:bg-cosmic-white/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 70, 193, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-cosmic-purple to-cosmic-rose text-white font-semibold rounded-full shadow-lg hover:shadow-cosmic-purple/25 transition-all duration-300 whitespace-nowrap"
                >
                  Get Early Access
                </motion.button>
              </div>
              <p className="text-cosmic-white/60 text-sm mt-4">
                🔒 We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12 p-8 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-rose/20 backdrop-blur-sm border border-cosmic-rose/30 rounded-2xl max-w-2xl mx-auto"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-cosmic-white mb-2">Welcome to Your Transformation!</h3>
              <p className="text-cosmic-white/80">
                Check your email for exclusive early access details and your first awakening exercise.
              </p>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(107, 70, 193, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-10 py-4 rounded-full text-white text-lg font-semibold shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
              Download for Windows
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 border-2 border-cosmic-white/30 text-cosmic-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-cosmic-white/10 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for Mac
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 text-cosmic-white/60"
          >
            <div className="flex items-center">
              <span className="text-cosmic-rose text-2xl mr-2">⭐</span>
              <span>4.9/5 Desktop Platform Rating</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-cosmic-rose text-2xl mr-2">👥</span>
              <span>10,000+ Transformations</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-cosmic-rose text-2xl mr-2">🏆</span>
              <span>Featured in Spiritual Business Magazine</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;