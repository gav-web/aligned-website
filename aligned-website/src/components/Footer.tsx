'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "ALIGNED Framework", href: "#solution" },
        { name: "Pricing", href: "#pricing" },
        { name: "Download Desktop App", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#contact" },
        { name: "Community Forum", href: "#" },
        { name: "Book Consultation", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Meditation Library", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Free Assessment", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" }
  ];

  return (
    <footer className="bg-cosmic-deep border-t border-cosmic-purple/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-rose bg-clip-text text-transparent mb-4"
            >
              ALIGNED
            </motion.div>
            
            <p className="text-cosmic-white/80 mb-6 leading-relaxed">
              Awakening spiritual entrepreneurs to their true power. Transform your life 
              and business through the sacred alignment of consciousness and purpose.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-cosmic-white/10 rounded-full flex items-center justify-center text-xl hover:bg-cosmic-purple/20 transition-colors duration-300"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="flex flex-col space-y-2 text-sm text-cosmic-white/70">
              <span>📧 hello@aligned.app</span>
              <span>📱 1-800-ALIGNED</span>
              <span>🏢 San Francisco, CA</span>
            </div>
          </motion.div>
          
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-cosmic-white font-semibold mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#F59E0B" }}
                      className="text-cosmic-white/70 hover:text-cosmic-rose transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-cosmic-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-cosmic-white/60 text-sm">
              © 2024 ALIGNED. All rights reserved. Made with ❤️ for spiritual entrepreneurs.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-cosmic-white/60">
              <motion.a
                href="#"
                whileHover={{ color: "#F59E0B" }}
                className="hover:text-cosmic-rose transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#F59E0B" }}
                className="hover:text-cosmic-rose transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#F59E0B" }}
                className="hover:text-cosmic-rose transition-colors duration-300"
              >
                Cookie Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#F59E0B" }}
                className="hover:text-cosmic-rose transition-colors duration-300"
              >
                GDPR
              </motion.a>
            </div>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-cosmic-purple to-transparent"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <p className="text-cosmic-white/50 text-xs italic">
              "The universe is not outside of you. Look inside yourself; everything that you want, you already are." - Rumi
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;