import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer;
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Reset idle state when scrolling
      setIsIdle(false);
      clearTimeout(idleTimer);
      
      // Set idle after 0.5 seconds of no scrolling (only when not scrolled)
      if (window.scrollY <= 50) {
        idleTimer = setTimeout(() => {
          setIsIdle(true);
        }, 500);
      }
    };

    const handleMouseMove = () => {
      // Reset idle state on mouse movement
      if (window.scrollY <= 50) {
        setIsIdle(false);
        clearTimeout(idleTimer);
        
        idleTimer = setTimeout(() => {
          setIsIdle(true);
        }, 500);
      }
    };

    const handleUserActivity = () => {
      if (window.scrollY <= 50) {
        setIsIdle(false);
        clearTimeout(idleTimer);
        
        idleTimer = setTimeout(() => {
          setIsIdle(true);
        }, 500);
      }
    };
    
    // Initial idle timer
    if (window.scrollY <= 50) {
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, 500);
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      clearTimeout(idleTimer);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={`mx-auto transition-all duration-500 ease-in-out ${
        isOpen ? 'rounded-3xl md:rounded-full' : 'rounded-3xl md:rounded-full'
      } ${
        scrolled 
          ? 'max-w-2xl bg-gray-900/90 backdrop-blur-md border border-gray-700/30 px-8 py-2.5 shadow-lg shadow-black/25' 
          : isIdle 
            ? 'max-w-6xl px-10 py-2.5 bg-transparent backdrop-blur-none border border-transparent'
            : 'max-w-6xl px-10 py-2.5 bg-gray-800/30 backdrop-blur-sm border border-gray-600/20'
      }`}>
        <div className={`flex items-center transition-all duration-500 ease-in-out ${
          scrolled ? 'justify-between space-x-6' : 'justify-between'
        }`}>
          {/* Logo */}
          <motion.div
            className={`group transition-all duration-500 ease-in-out ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}
            whileHover={{ scale: scrolled ? 0.95 : 1.05 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex items-center">
              {/* Simple MGA Typography Logo */}
              <div className={`relative transition-all duration-500 ease-in-out ${
                scrolled ? 'w-16 h-8' : 'w-20 h-10'
              }`}>
                {/* GA Typography Logo */}
                <div className="relative w-full h-full flex items-center justify-center">
                  
                  {/* MGA Text Container */}
                  <div className="relative flex items-center">
                    
                    {/* Letter M */}
                    <span className={`font-black transition-all duration-500 ease-in-out relative ${
                      scrolled ? 'text-2xl' : 'text-3xl'
                    }`} style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      background: 'linear-gradient(135deg, #ec4899 0%, #3b82f6 50%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
                      letterSpacing: '0.02em'
                    }}>
                      M
                      {/* Connection line M to G */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-500 ${
                        scrolled ? '-right-0.5 w-1 h-0.5' : '-right-1 w-1.5 h-0.5'
                      } opacity-60 group-hover:opacity-100`}></div>
                    </span>

                    {/* Letter G */}
                    <span className={`font-black transition-all duration-500 ease-in-out relative ${
                      scrolled ? 'text-2xl -ml-0.5' : 'text-3xl -ml-1'
                    }`} style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 70%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                      letterSpacing: '0.02em'
                    }}>
                      G
                      {/* Connection line G to A */}
                      <div className={`absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ${
                        scrolled ? '-right-0.5 w-1 h-0.5' : '-right-1 w-1.5 h-0.5'
                      } opacity-60 group-hover:opacity-100`}></div>
                    </span>

                    {/* Letter A with slight overlap */}
                    <span className={`font-black transition-all duration-500 ease-in-out ${
                      scrolled ? 'text-2xl -ml-0.5' : 'text-3xl -ml-1'
                    }`} style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      background: 'linear-gradient(135deg, #8b5cf6 30%, #06b6d4 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                      letterSpacing: '0.02em'
                    }}>
                      A
                    </span>
                  </div>

                  {/* Underline Animation */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 transition-all duration-500 ease-in-out rounded-full ${
                    scrolled ? 'w-12 h-0.5' : 'w-16 h-1'
                  } opacity-0 group-hover:opacity-100 group-hover:scale-110`}></div>

                  {/* Floating Sparkles on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* Sparkle 1 */}
                    <div className={`absolute bg-blue-400 transition-all duration-500 ${
                      scrolled ? 'w-1 h-1 -top-1 left-2' : 'w-1.5 h-1.5 -top-2 left-3'
                    }`} style={{
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      animation: 'sparkle 2s ease-in-out infinite',
                      animationDelay: '0s'
                    }}></div>

                    {/* Sparkle 2 */}
                    <div className={`absolute bg-purple-400 transition-all duration-500 ${
                      scrolled ? 'w-1 h-1 top-0 right-2' : 'w-1.5 h-1.5 top-1 right-3'
                    }`} style={{
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      animation: 'sparkle 2s ease-in-out infinite',
                      animationDelay: '0.7s'
                    }}></div>

                    {/* Sparkle 3 */}
                    <div className={`absolute bg-cyan-400 transition-all duration-500 ${
                      scrolled ? 'w-1 h-1 -bottom-1 left-1/2 transform -translate-x-1/2' : 'w-1.5 h-1.5 -bottom-2 left-1/2 transform -translate-x-1/2'
                    }`} style={{
                      clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                      animation: 'sparkle 2s ease-in-out infinite',
                      animationDelay: '1.4s'
                    }}></div>
                  </div>

                  {/* Text Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <span className={`absolute inset-0 flex items-center justify-center font-black blur-sm transition-all duration-500 ease-in-out ${
                      scrolled ? 'text-2xl' : 'text-3xl'
                    }`} style={{ 
                      fontFamily: 'Inter, system-ui, sans-serif',
                      background: 'linear-gradient(135deg, #ec4899, #3b82f6, #8b5cf6, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      opacity: '0.3'
                    }}>
                      <span className={scrolled ? '-ml-0.5' : '-ml-1'}>MGA</span>
                    </span>
                  </div>

                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full ${
                    scrolled ? 'scale-150' : 'scale-125'
                  }`}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-500 ease-in-out ${
            scrolled ? 'space-x-4' : 'space-x-6'
          }`}>
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-gray-300 hover:text-white transition-all duration-500 ease-in-out relative group font-medium hover:bg-white/10 rounded-full px-3 py-2 ${
                  scrolled ? 'text-sm px-3 py-1.5' : 'text-sm'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              title={isOpen ? "Close menu" : "Open menu"}
              className={`text-white transition-all duration-300 rounded-full hover:bg-white/10 ${
                scrolled ? 'p-2' : 'p-3'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={scrolled ? 18 : 20} /> : <Menu size={scrolled ? 18 : 20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-600/30">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-left py-3 px-4 rounded-xl hover:bg-white/10"
                  whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
