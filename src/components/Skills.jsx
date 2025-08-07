import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Palette, 
  Settings,
  Globe,
  Smartphone,
  Zap,
  Shield
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code size={32} />,
      color: 'from-blue-400 to-blue-600',
      skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Git']
    },
    {
      title: 'Machine Learning',
      icon: <Database size={32} />,
      color: 'from-green-400 to-green-600',
      skills: ['Scikit-learn', 'TensorFlow', 'NumPy', 'Pandas', 'Data Analysis', 'Data Visualization']
    },
    {
      title: 'Web Development',
      icon: <Settings size={32} />,
      color: 'from-purple-400 to-purple-600',
      skills: ['React', 'Frontend Development', 'Backend Development', 'Responsive Design', 'UI/UX Design', 'VS Code']
    },
    {
      title: 'Other Skills',
      icon: <Zap size={32} />,
      color: 'from-orange-400 to-orange-600',
      skills: ['Algorithm Development', 'Problem Solving', 'Project Management', 'Team Collaboration', 'Marketing & Design', 'IT Maintenance']
    }
  ];

  const highlights = [
    {
      icon: <Globe size={40} />,
      title: 'Web Development',
      description: 'Building responsive and functional web applications'
    },
    {
      icon: <Database size={40} />,
      title: 'Machine Learning',
      description: 'Developing AI models and data-driven solutions'
    },
    {
      icon: <Palette size={40} />,
      title: 'Data Analysis',
      description: 'Extracting insights from data using Python tools'
    },
    {
      icon: <Shield size={40} />,
      title: 'Problem Solving',
      description: 'Solving real-world problems through technology'
    }
  ];

  return (
    <section id="skills" className="py-20 pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I specialize in machine learning, data analysis, and web development with a strong foundation 
            in Python programming and modern technologies. Here's a comprehensive overview of my technical expertise.
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800 transition-all duration-300 text-center"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:bg-gray-800 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-200 text-sm font-medium"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Technologies I Use Daily
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'Python', 'JavaScript', 'React', 'HTML5', 'CSS3', 
              'TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Git'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
