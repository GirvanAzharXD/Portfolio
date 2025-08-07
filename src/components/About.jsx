import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Heart, Zap } from 'lucide-react';
import { getProjectsCount, getYearsOfExperience } from '../utils/statsCalculator.js';

const About = () => {
  const stats = [
    { icon: <Code size={24} />, value: `${getYearsOfExperience()}+`, label: 'Years Learning' },
    { icon: <Zap size={24} />, value: `${getProjectsCount()}`, label: 'Projects Completed' },
    { icon: <Coffee size={24} />, value: '100+', label: 'Cups of Coffee' },
    { icon: <Heart size={24} />, value: '∞', label: 'Lines of Code' },
  ];

  const skills = [
    'Python', 'JavaScript', 'HTML/CSS', 'Machine Learning', 'Scikit-learn', 'TensorFlow',
    'NumPy', 'Pandas', 'SQL', 'Web Development', 'Git', 'Data Analysis'
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Passionate developer with a love for creating amazing digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Hello! I'm Mochamad Girvan Azhar
            </h3>
            
            <p className="text-gray-300 leading-relaxed">
              I'm an Informatics Engineering student at Gunadarma University with a strong passion 
              for web development, programming, and machine learning. I'm driven by solving real-world 
              problems through technology and continuously exploring new tools to sharpen my technical skills.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Currently, I'm expanding my expertise in artificial intelligence and data science as a 
              participant in the Machine Learning cohort of Coding Camp 2025 powered by the DBS Foundation. 
              I also actively contribute to various organizations and projects that allow me to grow both 
              technically and professionally.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My experience includes internship at PT Lingkar Sembilan Titian Media in web development, 
              active participation in HIMTI as part of the Funds and Business Division, and serving as 
              a programmer at the Advanced Accounting Laboratory A, where I maintain IT systems and 
              create visual content.
            </p>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">
                Technologies I work with:
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full border border-gray-700"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-1">
                <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl">👨‍💻</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center hover:bg-gray-800 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
