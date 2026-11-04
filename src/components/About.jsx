import React from 'react';
import { Reveal, SectionHeader } from './ui';
import { getProjectsCount, getYearsOfExperience } from '../utils/statsCalculator.js';

const About = () => {
  const skills = [
    'Python', 'SQL', 'Data Analysis', 'Data Visualization', 'Machine Learning', 'NLP',
    'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn', 'Backend Development', 'Git'
  ];

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          index="01"
          label="About"
          title="About me"
        />

        <div className="grid gap-10 md:grid-cols-5 md:gap-14">
          {/* Text */}
          <Reveal className="space-y-5 md:col-span-3">
            <h3 className="font-display text-2xl leading-snug text-paper md:text-3xl">
              Hello! I&rsquo;m Mochamad Girvan Azhar
            </h3>

            <p className="leading-relaxed text-muted">
              I&rsquo;m an Informatics graduate from Universitas Gunadarma (2022–2026, GPA 3.52/4.00)
              working across data analysis, machine learning, and software development. I like turning
              raw data into insights people can actually act on, and building technology that solves
              real problems rather than demos well.
            </p>

            <p className="leading-relaxed text-muted">
              That shows up most clearly in my thesis project: an automated data pipeline for YouTube
              comment sentiment analysis, built with n8n and an XGBoost model over NLP features. I also
              built a descriptive data visualization dashboard for Puskesmas (community health center)
              financing analysis. Alongside that, I completed the Machine Learning Coding Camp powered
              by the DBS Foundation, and hold BNSP competency certifications in Computer Programming
              and as an Associate Data Scientist (Ilmuwan Data Madya).
            </p>

            <p className="leading-relaxed text-muted">
              Before graduating, I spent two years as a programmer at the Advanced Accounting
              Laboratory A, maintaining computer labs across five campuses, leading practicum sessions,
              and fixing software and hardware issues on the spot. I also served as deputy head of the
              Funds and Business division in HIMTI, running the division&rsquo;s merchandise program, and
              interned in software development at PT Lingkar Sembilan, working through the full
              development cycle. That mix of lab operations and organization work is where my
              problem-solving, teamwork, and time management habits come from.
            </p>

            <p className="leading-relaxed text-muted">
              I&rsquo;m now looking for work where data and technology can create real impact — and I&rsquo;m
              still learning: new tools, new methods, whatever the problem in front of me requires.
            </p>

            <div className="pt-2">
              <h4 className="mb-3 font-mono text-xs tracking-[0.2em] text-muted">
                TECHNOLOGIES I WORK WITH
              </h4>
              <p className="font-mono text-sm leading-loose text-paper">
                {skills.join(' · ')}
              </p>
            </div>
          </Reveal>

          {/* Stats: plain figures, no cards, no filler stats */}
          <Reveal className="md:col-span-2" delay={0.1}>
            <div className="border-t border-line">
              <div className="flex items-baseline justify-between border-b border-line py-6">
                <span className="font-display text-5xl text-paper">
                  {getYearsOfExperience()}+
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  YEARS LEARNING
                </span>
              </div>
              <div className="flex items-baseline justify-between border-b border-line py-6">
                <span className="font-display text-5xl text-paper">
                  {getProjectsCount()}
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-muted">
                  PROJECTS COMPLETED
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
