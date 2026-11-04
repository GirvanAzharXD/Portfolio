import React from 'react';
import { motion } from 'framer-motion';

// Subtle reveal shared by every section: fade + 24px rise, no springs,
// no infinite motion. Respects the user's reduced-motion setting via
// the MotionConfig wrapper in App.
export function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// Editorial section header: mono kicker, serif title, hairline rule.
export function SectionHeader({ index, label, title, blurb }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-mono text-xs tracking-[0.2em] text-muted mb-5">
        <span className="text-accent">{index}</span>
        {' — '}
        {label}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-paper">
        {title}
      </h2>
      {blurb && (
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
          {blurb}
        </p>
      )}
      <div className="mt-8 md:mt-10 h-px bg-line" aria-hidden="true" />
    </Reveal>
  );
}
