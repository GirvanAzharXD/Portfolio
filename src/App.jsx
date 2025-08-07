import React from 'react';
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
    <div className="min-h-screen bg-gray-900 text-white">
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
  );
}

export default App;
