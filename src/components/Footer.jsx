import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white border-gray-700 hover:border-blue-400 rounded-full border transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={20} />
          </motion.button>

          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Mochamad Girvan Azhar
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Journey', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 mb-2 font-medium">
              © 2025 Mochamad Girvan Azhar. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
              Built with 
              <Heart size={14} className="text-red-500 mx-1" />
              using React, Vite, Tailwind CSS & Framer Motion
            </p>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center max-w-md"
          >
            <p className="text-gray-500 italic text-sm">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border border-gray-700 rounded opacity-20"></div>
      <div className="absolute bottom-4 right-4 w-6 h-6 border border-gray-600 rounded-full opacity-20"></div>
    </footer>
  );
};

export default Footer;
