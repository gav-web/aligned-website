'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-gradient-to-r from-cosmic-purple/20 to-cosmic-rose/20 backdrop-blur-sm border border-cosmic-rose/30 rounded-2xl"
      >
        <div className="text-6xl mb-4">🙏</div>
        <h3 className="text-2xl font-bold text-cosmic-white mb-2">Message Sent Successfully!</h3>
        <p className="text-cosmic-white/80">
          Thank you for reaching out. We'll connect with you within 24 hours to discuss your spiritual transformation journey.
        </p>
      </motion.div>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cosmic-purple/5 to-cosmic-deep">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-white to-cosmic-rose bg-clip-text text-transparent">
            Connect with Us
          </h2>
          <p className="text-xl text-cosmic-white/80 max-w-3xl mx-auto">
            Ready to begin your transformation? Have questions about ALIGNED? 
            We're here to support you on your journey to awakening your true power.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-cosmic-white mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-cosmic-white/80"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cosmic-purple to-cosmic-rose rounded-full flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm">hello@aligned.app</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-cosmic-white/80"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cosmic-purple to-cosmic-rose rounded-full flex items-center justify-center">
                      📱
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm">1-800-ALIGNED</div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 text-cosmic-white/80"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cosmic-purple to-cosmic-rose rounded-full flex items-center justify-center">
                      🏢
                    </div>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="text-sm">San Francisco, CA</div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-cosmic-white mb-3">Office Hours</h4>
                <div className="space-y-1 text-sm text-cosmic-white/70">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM PST</div>
                  <div>Saturday: 10:00 AM - 4:00 PM PST</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-gradient-to-br from-cosmic-white/5 to-cosmic-purple/10 backdrop-blur-sm border border-cosmic-white/10 rounded-2xl p-8"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-cosmic-white/80 mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-white/10 border border-cosmic-white/20 rounded-lg text-cosmic-white placeholder-cosmic-white/50 focus:outline-none focus:border-cosmic-rose focus:bg-cosmic-white/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-cosmic-white/80 mb-2 text-sm font-medium">
                    Email Address *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cosmic-white/10 border border-cosmic-white/20 rounded-lg text-cosmic-white placeholder-cosmic-white/50 focus:outline-none focus:border-cosmic-rose focus:bg-cosmic-white/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-cosmic-white/80 mb-2 text-sm font-medium">
                  Subject *
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-cosmic-white/10 border border-cosmic-white/20 rounded-lg text-cosmic-white focus:outline-none focus:border-cosmic-rose focus:bg-cosmic-white/20 transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="pricing">Pricing Questions</option>
                  <option value="demo">Schedule Demo</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                </motion.select>
              </div>
              
              <div className="mb-6">
                <label className="block text-cosmic-white/80 mb-2 text-sm font-medium">
                  Message *
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cosmic-white/10 border border-cosmic-white/20 rounded-lg text-cosmic-white placeholder-cosmic-white/50 focus:outline-none focus:border-cosmic-rose focus:bg-cosmic-white/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your spiritual entrepreneurship journey and how we can support you..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cosmic-purple to-cosmic-rose px-8 py-4 rounded-lg text-white font-semibold shadow-lg hover:shadow-cosmic-purple/25 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/>
                    <span>Sending Message...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              
              <p className="text-cosmic-white/60 text-xs mt-4 text-center">
                🔒 Your information is secure and will never be shared with third parties.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;