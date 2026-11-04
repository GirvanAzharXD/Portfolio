import React from 'react';
import { Reveal, SectionHeader } from './ui';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Git']
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'NumPy', 'Pandas', 'Data Analysis', 'Data Visualization']
    },
    {
      title: 'Web Development',
      skills: ['React', 'Frontend Development', 'Backend Development', 'Responsive Design', 'UI/UX Design', 'VS Code']
    },
    {
      title: 'Other Skills',
      skills: ['Algorithm Development', 'Problem Solving', 'Project Management', 'Team Collaboration', 'Marketing & Design', 'IT Maintenance']
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          index="03"
          label="Skills"
          title="What I work with"
          blurb="I specialize in machine learning, data analysis, and web development, with a strong foundation in Python and modern web technologies."
        />

        <div className="border-b border-line">
          {skillCategories.map((category) => (
            <Reveal key={category.title}>
              <div className="grid gap-3 border-t border-line py-8 md:grid-cols-[220px_1fr] md:gap-10 md:py-10">
                <h3 className="font-mono text-xs tracking-[0.2em] text-paper">
                  {category.title.toUpperCase()}
                </h3>
                <p className="text-base leading-loose text-muted">
                  {category.skills.join(' · ')}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
