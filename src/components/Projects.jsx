import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

// Project data - kept outside the component so it can be exported.
const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with React, Vite, and Tailwind CSS.',
    image: '/images/projects/Portfolio.png',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/GirvanAzharXD/portfolio',
    live: 'https://girvanazhar.vercel.app/',
    featured: true
  },
  {
    id: 2,
    title: 'Aurithm',
    description: 'Aurithm is my personal evolution of the DragfAI concept: AI-powered color analysis using the Gemini API that reveals a personal color palette through the 12-season analysis system.',
    image: '/images/projects/Aurithm.png',
    technologies: ['React', 'Vite', 'Python', 'Flask', 'Gemini API', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/GirvanAzharXD/aurithm-frontend',
    live: 'https://aurithm.vercel.app/',
    featured: true
  },
  {
    id: 3,
    title: 'aReminder',
    description: 'A daily task reminder app developed during my internship in 2021, with a clean interface, task categorization, and reminder features.',
    image: '/images/projects/aReminder.png',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/itslanaa/aReminderApp',
    featured: true
  },
  {
    id: 4,
    title: 'DragfAI',
    description: 'Our capstone project: an AI-powered color analysis platform built as a team project. It analyzes skin tone to suggest color palettes for outfit harmony.',
    image: '/images/projects/DragfAI.png',
    technologies: ['React', 'Vite', 'Python', 'Flask', 'OpenCV', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/GirvanAzharXD/dragfai',
    live: 'https://dragf-ai.vercel.app/',
    featured: true
  },
  {
    id: 5,
    title: 'Dashboard Visualisasi Data Deskriptif Analisis Pembiayaan Puskesmas',
    description: 'An interactive dashboard built for my scientific paper, analyzing healthcare financing data at Puskesmas (Community Health Centers): funding patterns, budget allocation, and financial trends.',
    image: '/images/projects/Puskesmas.png',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/GirvanAzharXD/streamlit-puskesmas',
    live: 'https://visualisasi-data-deskriptif-pembiayaan-puskesmas.streamlit.app/',
    featured: true
  },
  {
  id: 6,
  title: 'Dana Desa Jawa Barat 2024',
  description: 'Power BI dashboard asking whether larger village funds mean more prosperous villages, built from 2024 Dana Desa allocation (DJPK) and poverty data (BPS) for 19 regencies in West Java. Finding: 99.91% of Rp6.33 trillion was disbursed, but the top 10 regencies took 68.6% of it, and larger funds did not mean lower poverty.',
  image: '/images/projects/DanaDesa.png',
  technologies: ['Power BI', 'DAX', 'Power Query', 'Excel'],
  github: 'https://github.com/GirvanAzharXD/dana-desa-jawa-barat-power-bi',
  featured: true
},
{
  id: 7,
  title: 'Harga Cabai Rawit Merah di Indonesia, 2025-2026',
  description: 'An interactive Looker Studio dashboard tracking Cabai Rawit Merah prices across 32 Indonesian provinces from January 2025 to November 2026, using official PIHPS Bank Indonesia data: monthly trends, a province-by-month heatmap, and a 23-month ranking.',
  image: '/images/projects/HargaPangan.png',
  technologies: ['Looker Studio', 'Google Sheets', 'PIHPS BI'],
  github: 'https://github.com/GirvanAzharXD/harga-cabai-rawit-merah-looker-studio',
  live: 'https://datastudio.google.com/reporting/4a6c307f-a88a-40bf-887b-83b86f692efc',
  featured: true
},
{
  id: 8,
  title: 'Gempa Bumi di Indonesia, 2024-2026',
  description: 'A Tableau Public dashboard mapping 2,280 earthquakes (M4.5+) across Indonesia from January 2024 to November 2026, using USGS Earthquake Catalog data: a seismic map, monthly trends, and magnitude and depth distributions. Finding: aftershock spikes followed the M7.4 Bitung (April 2026, 179 quakes) and M7.8 Ende (August 2026, 266 quakes) events, while most quakes were shallow (1,750) and small (M4.5-4.9: 1,768).',
  image: '/images/projects/Gempa.png',
  technologies: ['Tableau Public', 'Python', 'Pandas', 'USGS'],
  github: 'https://github.com/GirvanAzharXD/gempa-indonesia-tableau',
  live: 'https://public.tableau.com/app/profile/mochamad.girvan.azhar/viz/GempaBumidiIndonesia20242026/GempaBumidiIndonesia20242026',
  featured: true
},


];

// The frame shows the whole screenshot uncropped (object-contain) and
// the frame itself drifts slightly against the scroll, so the parallax
// never cuts off any part of the image.
function ProjectImage({ src, alt }) {
  const frameRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <motion.div
      ref={frameRef}
      style={{ y }}
      className="relative aspect-video overflow-hidden border border-line bg-surface"
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain"
      />
    </motion.div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          index="02"
          label="Projects"
          title="Selected work"
          blurb="A few projects that show what I actually build — web apps, machine learning tools, and data visualization."
        />

        <div className="border-b border-line">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <article className="grid items-start gap-6 border-t border-line py-10 md:grid-cols-2 md:gap-12 md:py-14">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <ProjectImage src={project.image} alt={project.title} />
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="mb-3 font-mono text-xs tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-3xl leading-tight text-paper md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <p className="mt-5 font-mono text-xs leading-loose text-muted">
                    {project.technologies.join(' · ')}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-paper underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                    >
                      GitHub
                      <ArrowUpRight size={15} />
                    </a>
                    {project.live && !project.live.includes('your-portfolio.com') && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live demo`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-paper underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
                      >
                        Live
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export projects data untuk digunakan di komponen lain
export { projects as projectsData };

export default Projects;
