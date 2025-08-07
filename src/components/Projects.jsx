import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

// Data projects - dipindahkan keluar dari komponen agar bisa di-export
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with React, Vite, and Tailwind CSS. Features modern UI/UX design and smooth animations.',
    image: '/images/projects/Portfolio.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/GirvanAzharXD/portfolio',
    live: 'https://your-portfolio.com/',
    featured: true
    },
    {
      id: 2,
      title: 'Aurithm',
      description: 'Discover the colors that best enhance your style, elevate your confidence, and reflect your true essence. Aurithm is my personal evolution of the DragfAI concept, featuring advanced AI-powered analysis using Gemini API to reveal your perfect color palette through the 12-season analysis system.',
      image: '/images/projects/Aurithm.png',
      technologies: ['React', 'Vite', 'Python', 'Flask', 'Gemini API', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/GirvanAzharXD/aurithm-frontend',
      live: 'https://aurithm.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'aReminder',
      description: 'aReminder is a daily task reminder app developed during my internship 2021. Designed to help users manage their daily tasks efficiently with a clean interface, task categorization, and reminder features. This project showcases my early experience in full-stack web development.',
      image: '/images/projects/aReminder.png',  
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
      github: 'https://github.com/itslanaa/aReminderApp',
      featured: true
    },
    {
      id: 4,
      title: 'DragfAI',
      description: 'DragfAI is our capstone project - an AI-powered color analysis platform that reveals your true colors to enhance your style and personal elegance. Built collaboratively as a team project, it analyzes skin tone to suggest perfect color palettes for effortless outfit harmony.',
      image: '/images/projects/DragfAI.png',
      technologies: ['React', 'Vite', 'Python', 'Flask', 'OpenCV', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/GirvanAzharXD/dragfai',
      live: 'https://dragf-ai.vercel.app/',
      featured: true
    },
    {
      id: 5,
      title: 'Dashboard Visualisasi Data Deskriptif Analisis Pembiayaan Puskesmas',
      description: 'An interactive dashboard for my scientific paper analyzing healthcare financing data at Puskesmas (Community Health Centers). This data visualization tool provides comprehensive descriptive analysis of funding patterns, budget allocation, and financial trends to support evidence-based healthcare policy decisions.',
      image: '/images/projects/Puskesmas.png',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/GirvanAzharXD/streamlit-puskesmas',
      live: 'https://visualisasi-data-deskriptif-pembiayaan-puskesmas.streamlit.app/',
      featured: true
    },
    {
      id: 6,
      title: 'Coming Soon',
      description: 'An exciting new project is in development. Stay tuned for more details!',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      technologies: ['???'],
      github: '#',
      live: '#',
      featured: false,
      comingSoon: true
    }
  ];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and experience. 
            Each project reflects my passion for clean code and modern design principles.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 mb-12 sm:mb-16 md:mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-gray-800 text-blue-400 text-xs sm:text-sm rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 sm:gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github size={16} className="sm:w-[20px] sm:h-[20px]" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:bg-gray-800 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {project.comingSoon && (
                  <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                    <span className="text-white font-semibold">Coming Soon</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-blue-400 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {!project.comingSoon && (
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export projects data untuk digunakan di komponen lain
export { projects as projectsData };

export default Projects;
