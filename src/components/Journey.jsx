import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Journey = () => {
  const timelineEvents = [
    {
      year: '2025',
      title: 'Machine Learning Bootcamp',
      company: 'DBS Foundation',
      location: 'Jakarta, Indonesia',
      type: 'education',
      description: 'Successfully completed an intensive machine learning bootcamp program focused on data science, artificial intelligence, and machine learning algorithms.',
      achievements: [
        'Mastered machine learning algorithms',
        'Built AI/ML models and applications',
        'Learned data science techniques',
        'Completed real-world ML projects'
      ],
      images: [
        '/images/journey/DBS 1.jpg',
        '/images/journey/DBS 2.png'
      ]
    },
    {
      year: '2024',
      title: 'Laboratory Programmer',
      company: 'Universitas Gunadarma',
      location: 'Depok, Indonesia',
      type: 'work',
      description: 'Working as a laboratory programmer, assisting students with programming concepts, maintaining lab equipment, and supporting practical learning sessions.',
      achievements: [
        'Mentored students in programming',
        'Maintained laboratory systems',
        'Assisted in practical sessions',
        'Developed learning materials'
      ],
      images: [
        '/images/journey/LABALA 1.JPG',
        '/images/journey/LABALA 2.jpg'
      ]
    },
    {
      year: '2023',
      title: 'Fund Division Member',
      company: 'HIMTI Universitas Gunadarma',
      location: 'Depok, Indonesia',
      type: 'work',
      description: 'Active member of the Fund Division in the Informatics Student Association, managing budgets for events and activities, organizing fundraising initiatives.',
      achievements: [
        'Managed organization budgets',
        'Organized fundraising events',
        'Coordinated with team members',
        'Financial planning and reporting'
      ],
      images: [
        '/images/journey/DANUS 1.jpg',
        '/images/journey/DANUS 2.jpg'
      ]
    },
    {
      year: '2022',
      title: 'Informatics Engineering Student',
      company: 'Universitas Gunadarma',
      location: 'Depok, Indonesia',
      type: 'education',
      description: 'Started bachelor\'s degree in Informatics Engineering, focusing on machine learning, software development, and computer science fundamentals.',
      achievements: [
        'Strong academic performance',
        'Specialized in machine learning',
        'Active in student organizations',
        'Developed programming skills'
      ],
      images: [
        '/images/journey/TI.JPG'
      ]
    },
    {
      year: '2021',
      title: 'Software Development Intern',
      company: 'PT Lingkar Sembilan',
      location: 'Indonesia',
      type: 'work',
      description: 'Gained first professional experience in software development, learning industry practices and contributing to real-world projects.',
      achievements: [
        'Learned professional development',
        'Contributed to team projects',
        'Gained industry experience',
        'Improved technical skills'
      ],
      images: [
        '/images/journey/PKL.jpg',
      ]
    }
  ];

  const getIcon = (type) => {
    const iconSize = 16; // Fixed size for consistency
    switch (type) {
      case 'work':
        return <Briefcase size={iconSize} />;
      case 'education':
        return <Award size={iconSize} />;
      case 'milestone':
        return <Calendar size={iconSize} />;
      default:
        return <Calendar size={iconSize} />;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'work':
        return 'from-blue-400 to-blue-600';
      case 'education':
        return 'from-green-400 to-green-600';
      case 'milestone':
        return 'from-purple-400 to-purple-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <section id="journey" className="py-12 sm:py-16 md:py-20 pt-20 sm:pt-24 md:pt-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A timeline of my professional growth and key milestones. Each entry represents
            significant achievements and learning experiences in my career.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400"></div>
          
          {/* Timeline Line - Mobile */}
          <div className="md:hidden absolute left-6 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-cyan-400"></div>

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } justify-start`}
              >
                {/* Timeline Dot - Desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-r ${getColor(event.type)} flex items-center justify-center border-4 border-gray-900`}>
                    <div className="text-white">
                      {getIcon(event.type)}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot - Mobile */}
                <div className="md:hidden absolute left-6 transform -translate-x-1/2 z-10">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${getColor(event.type)} flex items-center justify-center border-3 border-gray-900`}>
                    <div className="text-white">
                      {getIcon(event.type)}
                    </div>
                  </div>
                </div>

                {/* Event Card */}
                <div className={`w-full ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-16 md:pl-0 md:max-w-lg`}>
                  <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 border border-gray-700 hover:bg-gray-800 transition-all duration-300 hover:border-gray-600">
                    {/* Header */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${getColor(event.type)} text-white w-fit`}>
                          {event.year}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                          <MapPin size={14} className="flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-blue-400 font-medium text-sm sm:text-base">
                        {event.company}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
                      {event.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {event.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                            <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Images */}
                    {event.images && (
                      <div className="grid grid-cols-2 gap-2">
                        {event.images.map((image, imageIndex) => (
                          <motion.img
                            key={imageIndex}
                            src={image}
                            alt={`${event.title} ${imageIndex + 1}`}
                            className="w-full h-16 sm:h-20 object-cover rounded cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              What's Next?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and work on innovative projects. 
              Let's connect and see how we can create something amazing together!
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
