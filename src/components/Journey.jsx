import React from 'react';
import { Reveal, SectionHeader } from './ui';

const Journey = () => {
  const timelineEvents = [
    {
      year: '2025',
      title: 'Machine Learning Bootcamp',
      company: 'DBS Foundation',
      location: 'Jakarta, Indonesia',
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
      description: 'Gained first professional experience in software development, learning industry practices and contributing to real-world projects.',
      achievements: [
        'Learned professional development',
        'Contributed to team projects',
        'Gained industry experience',
        'Improved technical skills'
      ],
      images: [
        '/images/journey/PKL.jpg'
      ]
    }
  ];

  return (
    <section id="journey" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          index="05"
          label="Journey"
          title="Where I've been"
          blurb="A timeline of my professional growth and key milestones."
        />

        <div className="border-b border-line">
          {timelineEvents.map((event) => (
            <Reveal key={event.year}>
              <div className="grid gap-3 border-t border-line py-8 md:grid-cols-[120px_1fr] md:gap-10 md:py-10">
                <p className="font-mono text-sm text-accent">{event.year}</p>

                <div>
                  <h3 className="font-display text-2xl leading-tight text-paper md:text-3xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-paper">
                    {event.company}
                    <span className="text-muted"> — {event.location}</span>
                  </p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                    {event.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {event.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {event.images && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {event.images.map((image, imageIndex) => (
                        <img
                          key={imageIndex}
                          src={image}
                          alt={`${event.title} ${imageIndex + 1}`}
                          loading="lazy"
                          className="h-16 w-24 border border-line object-cover sm:h-20 sm:w-32"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
