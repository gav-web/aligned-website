'use client';

import { motion } from 'framer-motion';

const PricingSection = () => {
  const plans = [
    {
      name: "Awakening",
      price: 27,
      period: "month",
      description: "Perfect for spiritual entrepreneurs beginning their transformation journey",
      features: [
        "Basic ALIGNED Framework access",
        "Daily spiritual practices",
        "Progress tracking dashboard",
        "Community forum access",
        "Email support",
        "Monthly group coaching call"
      ],
      color: "from-cosmic-purple/20 to-cosmic-purple/5",
      border: "border-cosmic-purple/30",
      button: "bg-cosmic-purple hover:bg-cosmic-purple/80"
    },
    {
      name: "Embodiment",
      price: 47,
      period: "month",
      description: "Most popular choice for serious transformation and business growth",
      features: [
        "Complete ALIGNED Framework",
        "AI Consciousness Companion",
        "Personalized spiritual guidance",
        "Advanced manifestation tools",
        "Priority community access",
        "Weekly 1-on-1 coaching session",
        "Custom vision board creation",
        "Energy optimization tools"
      ],
      popular: true,
      color: "from-cosmic-rose/20 to-cosmic-rose/5",
      border: "border-cosmic-rose",
      button: "bg-gradient-to-r from-cosmic-purple to-cosmic-rose hover:from-cosmic-purple/80 hover:to-cosmic-rose/80"
    },
    {
      name: "Mastery",
      price: 77,
      period: "month",
      description: "For advanced practitioners ready to master their spiritual business",
      features: [
        "Everything in Embodiment",
        "Premium AI coaching modules",
        "Private mastermind access",
        "Direct mentor access",
        "Custom spiritual business strategy",
        "Unlimited 1-on-1 sessions",
        "Exclusive retreat invitations",
        "Done-for-you marketing templates",
        "Advanced consciousness tracking"
      ],
      color: "from-cosmic-rose/20 to-cosmic-purple/10",
      border: "border-cosmic-rose/50",
      button: "bg-gradient-to-r from-cosmic-rose to-cosmic-purple hover:from-cosmic-rose/80 hover:to-cosmic-purple/80"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-cosmic-deep to-cosmic-purple/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-white to-cosmic-rose bg-clip-text text-transparent">
            Choose Your Transformation Path
          </h2>
          <p className="text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Select the plan that aligns with your spiritual entrepreneurship goals. 
            Each tier is designed to support your unique journey of awakening and business growth.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-6 py-2 rounded-full text-white font-semibold text-sm shadow-lg z-10"
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className={`bg-gradient-to-br ${plan.color} backdrop-blur-sm border-2 ${plan.border} rounded-3xl p-8 h-full ${plan.popular ? 'shadow-2xl shadow-cosmic-rose/20' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-cosmic-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-cosmic-white/80 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-cosmic-white">
                      ${plan.price}
                    </span>
                    <span className="text-cosmic-white/70 text-lg">
                      /{plan.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + fIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-cosmic-white/90"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-rose mr-3 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${plan.button} px-8 py-4 rounded-full text-white font-semibold shadow-lg transition-all duration-300`}
                >
                  Start Your {plan.name} Journey
                </motion.button>
                
                <p className="text-cosmic-white/60 text-xs text-center mt-4">
                  30-day money-back guarantee
                </p>
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
          <div className="bg-gradient-to-br from-cosmic-white/5 to-cosmic-purple/10 backdrop-blur-sm border border-cosmic-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-cosmic-white mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-cosmic-white/80 mb-6">
              Book a free 15-minute alignment call with one of our spiritual business consultants 
              to discover which path will accelerate your transformation.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-cosmic-white/30 text-cosmic-white px-8 py-3 rounded-full font-semibold hover:bg-cosmic-white/10 transition-all duration-300"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-cosmic-white/60">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-cosmic-rose" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-Day Guarantee</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-cosmic-rose" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure Payments</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-cosmic-rose" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;