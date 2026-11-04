import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

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
      credentialUrl: 'https://www.dicoding.com/certificates/L4PQE1QRVPO1'
    },
    {
      id: 2,
      title: 'Memulai Pemrograman dengan Python',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Programming',
      description: 'Comprehensive Python programming course covering syntax, data structures, object-oriented programming, and best practices for Python development.',
      credentialUrl: 'https://www.dicoding.com/certificates/98XWEOJ0WXM3'
    },
    {
      id: 3,
      title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Programming',
      description: 'Foundational course for aspiring software developers covering programming concepts, software development lifecycle, and industry best practices.',
      credentialUrl: 'https://www.dicoding.com/certificates/1RXYEL011ZVM'
    },
    {
      id: 4,
      title: 'Belajar Dasar Visualisasi Data',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Data Science',
      description: 'Data visualization fundamentals covering chart types, design principles, storytelling with data, and creating effective visual representations.',
      credentialUrl: 'https://www.dicoding.com/certificates/L4PQE10WVPO1'
    },
    {
      id: 5,
      title: 'Belajar Dasar Structured Query Language (SQL)',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Database',
      description: 'Database management fundamentals covering SQL syntax, query optimization, database design principles, and data manipulation techniques.',
      credentialUrl: 'https://www.dicoding.com/certificates/07Z6301DMZQR'
    },
    {
      id: 6,
      title: 'Belajar Dasar Git dengan GitHub',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Development Tools',
      description: 'Version control fundamentals covering Git commands, GitHub workflows, collaboration techniques, and repository management best practices.',
      credentialUrl: 'https://www.dicoding.com/certificates/07Z63005MZQR'
    },
    {
      id: 7,
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Machine Learning',
      description: 'Artificial Intelligence fundamentals covering AI concepts, machine learning basics, neural networks, and practical AI applications.',
      credentialUrl: 'https://www.dicoding.com/certificates/EYX4GV3OJZDL'
    },
    {
      id: 8,
      title: 'Belajar Analisis Data dengan Python',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Data Science',
      description: 'Python-based data analysis course covering pandas, numpy, data cleaning, statistical analysis, and data-driven insights.',
      credentialUrl: 'https://www.dicoding.com/certificates/JLX19RJ3GP72'
    },
    {
      id: 9,
      title: 'Financial Literacy 101',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Business Skills',
      description: 'Personal finance fundamentals covering budgeting, investment basics, financial planning, and money management strategies.',
      credentialUrl: 'https://www.dicoding.com/certificates/1OP82849LPQK'
    },
    {
      id: 10,
      title: 'Belajar Machine Learning untuk Pemula',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Machine Learning',
      description: 'Beginner-friendly machine learning course covering algorithms, model training, evaluation metrics, and practical ML implementations.',
      credentialUrl: 'https://www.dicoding.com/certificates/0LZ0RE830P65'
    },
    {
      id: 11,
      title: 'Belajar Pengembangan Machine Learning',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Machine Learning',
      description: 'Advanced machine learning development covering MLOps, model deployment, production pipelines, and scalable ML systems.',
      credentialUrl: 'https://www.dicoding.com/certificates/53XED851VPRN'
    },
    {
      id: 12,
      title: 'Belajar Fundamental Pemrosesan Data',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Data Science',
      description: 'Data processing fundamentals covering data collection, cleaning, transformation, and preparation for analysis and modeling.',
      credentialUrl: 'https://www.dicoding.com/certificates/81P2LYDOYZOY'
    },
    {
      id: 13,
      title: 'Machine Learning Terapan',
      issuer: 'Dicoding Indonesia',
      date: '2025',
      category: 'Machine Learning',
      description: 'Applied machine learning course covering real-world ML projects, industry applications, and practical implementation strategies.',
      credentialUrl: 'https://www.dicoding.com/certificates/N9ZO9WN66XG5'
    },
    {
      id: 14,
      title: 'Sertifikat Kompetensi - Computer Programming',
      issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
      date: '2022',
      category: 'Professional Certification',
      type: 'Competency Certificate',
      description: 'National competency certificate in Computer Programming, validating professional skills and competency in programming fundamentals, algorithm development, and software development according to Indonesian national standards.',
      credentialUrl: 'https://drive.google.com/file/d/1WdNJ6iJ3ROI2SjL6fxT_HPdKcRIvDNzR/view?usp=sharing'
    },
    {
      id: 15,
      title: 'Software Development Internship Certificate',
      issuer: 'PT Lingkar Sembilan',
      date: '2021',
      category: 'Internship',
      type: 'Work Experience',
      description: 'Internship completion certificate demonstrating practical experience in software development, team collaboration, and professional work environment.',
      credentialUrl: 'https://drive.google.com/file/d/1tLDUh378N7UASqvqeDOzlTQ-u7cDQYo4/view?usp=sharing'
    },
    {
      id: 16,
      title: 'Machine Learning Bootcamp Certificate',
      issuer: 'DBS Foundation',
      date: '2025',
      category: 'Machine Learning',
      type: 'Intensive Program',
      description: 'Comprehensive machine learning bootcamp covering advanced algorithms, deep learning, model deployment, and real-world ML projects.',
      credentialUrl: 'https://drive.google.com/file/d/155Th72IiF_MbRKcnw1lCASC1Yio6eXAN/view?usp=sharing'
    },
    {
      id: 17,
      title: 'Sertifikat Kompetensi - Ilmuwan Data Madya / Associate Data Scientist',
      issuer: 'BNSP (Badan Nasional Sertifikasi Profesi)',
      date: '2026',
      category: 'Professional Certification',
      type: 'Competency Certificate',
      description: 'National competency certificate as Associate Data Scientist (Ilmuwan Data Madya), certifying data science competency according to Indonesian national standards.',
      credentialUrl: 'https://drive.google.com/file/d/1RQeZnj9hKaDELBfr_Lm071snDo3nAvQm/view?usp=drive_link'
    }
  ];

  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  const filteredCertifications = selectedCategory === 'All'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <section id="certifications" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          index="04"
          label="Certifications"
          title="Credentials"
          blurb="Professional credentials across programming, data science, and machine learning. All 17 certificates are listed below."
        />

        {/* Category filter: plain text, no pills */}
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`border-b pb-1 font-mono text-xs tracking-[0.15em] transition-colors duration-200 ${
                selectedCategory === category
                  ? 'border-accent text-paper'
                  : 'border-transparent text-muted hover:text-paper'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Plain text rows separated by hairlines */}
        <div className="border-b border-line">
          {filteredCertifications.map((cert) => (
            <Reveal key={cert.id}>
              <div className="grid gap-2 border-t border-line py-6 md:grid-cols-[1fr_auto] md:items-start md:gap-10 md:py-7">
                <div>
                  <h3 className="text-lg font-medium leading-snug text-paper">
                    {cert.title}
                  </h3>
                  <p className="mt-2 font-mono text-xs tracking-[0.15em] text-muted">
                    {cert.issuer.toUpperCase()} · {cert.date} · {cert.category.toUpperCase()}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {cert.description}
                  </p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-paper underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent md:pt-1"
                >
                  View credential
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
