import React from 'react';
import { MotionConfig } from 'framer-motion';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { usePerformanceMonitor } from './hooks/usePerformance';

function App() {
  // Enable performance monitoring
  usePerformanceMonitor();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-ink font-sans text-paper antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
