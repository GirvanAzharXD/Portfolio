import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building, ExternalLink, Download, Filter, Shield, Briefcase } from 'lucide-react';

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const certifications = [
    {
      id: 1,
      title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Programming',
      description: 'Fundamental course covering programming logic, algorithmic thinking, problem-solving techniques, and basic programming concepts.',
      skills: ['Programming Logic', 'Problem Solving', 'Algorithms', 'Programming Fundamentals'],
      credentialUrl: 'https://www.dicoding.com/certificates/L4PQE1QRVPO1',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Memulai Pemrograman dengan Python',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Programming',
      description: 'Comprehensive Python programming course covering syntax, data structures, object-oriented programming, and best practices for Python development.',
      skills: ['Python Programming', 'Data Structures', 'OOP', 'Programming Fundamentals'],
      credentialUrl: 'https://www.dicoding.com/certificates/98XWEOJ0WXM3',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Programming',
      description: 'Foundational course for aspiring software developers covering programming concepts, software development lifecycle, and industry best practices.',
      skills: ['Software Development', 'Programming Concepts', 'SDLC', 'Best Practices'],
      credentialUrl: 'https://www.dicoding.com/certificates/1RXYEL011ZVM',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 4,
      title: 'Belajar Dasar Visualisasi Data',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Data Science',
      description: 'Data visualization fundamentals covering chart types, design principles, storytelling with data, and creating effective visual representations.',
      skills: ['Data Visualization', 'Chart Design', 'Data Storytelling', 'Visual Analytics'],
      credentialUrl: 'https://www.dicoding.com/certificates/L4PQE10WVPO1',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 5,
      title: 'Belajar Dasar Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Database',
      description: 'Database management fundamentals covering SQL syntax, query optimization, database design principles, and data manipulation techniques.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Management'],
      credentialUrl: 'https://www.dicoding.com/certificates/07Z6301DMZQR',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 6,
      title: 'Belajar Dasar Git dengan GitHub',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Development Tools',
      description: 'Version control fundamentals covering Git commands, GitHub workflows, collaboration techniques, and repository management best practices.',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      credentialUrl: 'https://www.dicoding.com/certificates/07Z63005MZQR',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      id: 7,
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Machine Learning',
      description: 'Artificial Intelligence fundamentals covering AI concepts, machine learning basics, neural networks, and practical AI applications.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'AI Applications'],
      credentialUrl: 'https://www.dicoding.com/certificates/EYX4GV3OJZDL',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 8,
      title: 'Belajar Analisis Data dengan Python',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Data Science',
      description: 'Python-based data analysis course covering pandas, numpy, data cleaning, statistical analysis, and data-driven insights.',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis'],
      credentialUrl: 'https://www.dicoding.com/certificates/JLX19RJ3GP72',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      id: 9,
      title: 'Financial Literacy 101',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Business Skills',
      description: 'Personal finance fundamentals covering budgeting, investment basics, financial planning, and money management strategies.',
      skills: ['Financial Planning', 'Budgeting', 'Investment Basics', 'Money Management'],
      credentialUrl: 'https://www.dicoding.com/certificates/1OP82849LPQK',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      id: 10,
      title: 'Belajar Machine Learning untuk Pemula',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Machine Learning',
      description: 'Beginner-friendly machine learning course covering algorithms, model training, evaluation metrics, and practical ML implementations.',
      skills: ['Machine Learning', 'Algorithms', 'Model Training', 'ML Evaluation'],
      credentialUrl: 'https://www.dicoding.com/certificates/0LZ0RE830P65',
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-teal-400 to-teal-600'
    },
    {
        id: 11,
        title: 'Belajar Pengembangan Machine Learning',
        issuer: 'Dicoding Indonesia',
        date: '2025',
        category: 'Machine Learning',
        description: 'Advanced machine learning development covering MLOps, model deployment, production pipelines, and scalable ML systems.',
        skills: ['MLOps', 'Model Deployment', 'ML Pipelines', 'Production ML'],
        credentialUrl: 'https://www.dicoding.com/certificates/53XED851VPRN',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        color: 'from-rose-400 to-rose-600'
    },
    {
      id: 12,
      title: 'Belajar Fundamental Pemrosesan Data',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Data Science',
      description: 'Data processing fundamentals covering data collection, cleaning, transformation, and preparation for analysis and modeling.',
      skills: ['Data Processing', 'Data Cleaning', 'Data Transformation', 'ETL'],
      credentialUrl: 'https://www.dicoding.com/certificates/81P2LYDOYZOY',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      color: 'from-amber-400 to-amber-600'
    },
    {
        id: 13,
        title: 'Machine Learning Terapan',
        issuer: 'Dicoding Indonesia',
        date: '2025',
        category: 'Machine Learning',
        description: 'Applied machine learning course covering real-world ML projects, industry applications, and practical implementation strategies.',
        skills: ['Applied ML', 'Real-world Projects', 'Industry Applications', 'ML Implementation'],
        credentialUrl: 'https://www.dicoding.com/certificates/N9ZO9WN66XG5',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        color: 'from-violet-400 to-violet-600'
    },
    {
        id: 14,
        title: 'Junior Web Developer',
        issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
        date: '2022',
        category: 'Professional Certification',
        type: 'Professional License',
        description: 'National professional certification for Junior Web Developer, validating competency in web development according to Indonesian national standards.',
        skills: ['Web Development', 'Professional Standards', 'Industry Competency', 'National Certification'],
        credentialUrl: 'https://www.dicoding.com/certificates/N9ZO9WN66XG5',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        color: 'from-yellow-500 to-orange-500'
    },
    {
        id: 15,
        title: 'Software Development Internship Certificate',
        issuer: 'PT Lingkar Sembilan',
        date: '2021',
        category: 'Internship',
        type: 'Work Experience',
        description: 'Internship completion certificate demonstrating practical experience in software development, team collaboration, and professional work environment.',
        skills: ['Software Development', 'Team Collaboration', 'Professional Experience', 'Project Management'],
        credentialUrl: 'https://www.dicoding.com/certificates/N9ZO9WN66XG5',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        color: 'from-gray-500 to-slate-600'
    },
    {
        id: 16,
        title: 'Machine Learning Bootcamp Certificate',
        issuer: 'DBS Foundation',
        date: '2025',
        category: 'Machine Learning',
        type: 'Intensive Program',
        description: 'Comprehensive machine learning bootcamp covering advanced algorithms, deep learning, model deployment, and real-world ML projects.',
        skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Model Deployment'],
        credentialUrl: 'https://example.com/ml-bootcamp-certificate',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        color: 'from-pink-400 to-pink-600'
    },
  ];

  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  // Function to get appropriate icon based on certificate type
  const getCertIcon = (cert) => {
    if (cert.category === 'Professional Certification') {
      return <Shield size={24} className="text-white" />;
    } else if (cert.category === 'Internship') {
      return <Briefcase size={24} className="text-white" />;
    } else if (cert.category === 'Machine Learning' && cert.type === 'Intensive Program') {
      return <Award size={24} className="text-white" />;
    } else {
      return <Award size={24} className="text-white" />;
    }
  };

  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Professional credentials that validate my expertise across various technologies and methodologies. 
            Each certification represents dedicated learning and mastery of specific skills.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 md:px-6 py-2 rounded-full border transition-all duration-300 text-xs sm:text-sm ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent'
                  : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-600 hover:bg-gray-700'
              }`}
            >
              {category === 'Professional Certification' ? (
                <Shield size={16} className="inline mr-2" />
              ) : category === 'Internship' ? (
                <Briefcase size={16} className="inline mr-2" />
              ) : (
                <Filter size={16} className="inline mr-2" />
              )}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-80`}></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                    {getCertIcon(cert)}
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                    <Calendar size={12} className="mr-1 sm:w-[14px] sm:h-[14px]" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center text-gray-400 mb-2 sm:mb-3">
                  <Building size={14} className="mr-2 sm:w-[16px] sm:h-[16px] flex-shrink-0" />
                  <span className="text-xs sm:text-sm truncate">{cert.issuer}</span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded border border-gray-600 truncate"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded border border-gray-600">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={14} className="sm:w-[16px] sm:h-[16px]" />
                    <span className="hidden sm:inline">View Credential</span>
                    <span className="sm:hidden">View</span>
                  </motion.a>
                  
                  {/* Download PDF Button (if PDF exists) */}
                  {cert.pdfUrl && (
                    <motion.a
                      href={cert.pdfUrl}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-700 text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-600 transition-all duration-300"
                      title="Download PDF Certificate"
                    >
                      <Download size={14} className="sm:w-[16px] sm:h-[16px]" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 sm:p-8 border border-gray-700">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{certifications.length}</div>
                <div className="text-gray-400 text-sm sm:text-base">Total Certificates</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{categories.length - 1}</div>
                <div className="text-gray-400 text-sm sm:text-base">Skill Categories</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">2025</div>
                <div className="text-gray-400 text-sm sm:text-base">Recent Year</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">100%</div>
                <div className="text-gray-400 text-sm sm:text-base">Completion Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
