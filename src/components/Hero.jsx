import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span className="inline-block px-3 sm:px-4 py-2 bg-gray-800/50 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700">
            👋 Available for hire
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Girvan</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2"
        >
          Informatics Engineering Student | Machine Learning Enthusiast
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 leading-relaxed"
        >
          Passionate about solving real-world problems through technology. Experienced in web development, 
          machine learning, and artificial intelligence. Currently expanding expertise in AI and data science.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <motion.a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <ArrowDown size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
            <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border border-gray-700 rounded-lg opacity-30"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 border border-gray-600 rounded-full opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
};

export default Hero;
