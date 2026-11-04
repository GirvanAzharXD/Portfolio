import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef(null);

  // Parallax in layers: the headline drifts up against the scroll while
  // the body copy drifts down, so the two move at visibly different
  // speeds. The whole block also fades as the hero leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const bodyY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="flex min-h-screen items-center scroll-mt-24 pt-28 pb-20 md:pt-32 md:pb-28"
    >
      <motion.div style={{ opacity: parallaxOpacity }} className="w-full">
        <motion.div
          className="mx-auto w-full max-w-6xl px-5 md:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted"
          >
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
            MOCHAMAD GIRVAN AZHAR — AVAILABLE FOR HIRE
          </motion.p>

          <motion.div style={{ y: headlineY }}>
            <motion.h1
              variants={itemVariants}
              className="font-display text-6xl leading-[1.02] text-paper sm:text-7xl md:text-8xl"
            >
              Hi, I&rsquo;m Girvan.
            </motion.h1>
          </motion.div>

          <motion.div style={{ y: bodyY }}>
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl"
            >
              Informatics Engineering student &middot; Machine Learning enthusiast
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted"
            >
              Experienced in web development, machine learning, and artificial
              intelligence. Currently expanding my expertise in AI and data science.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-paper px-7 py-3.5 text-sm font-medium text-black transition-colors duration-200 hover:bg-white"
              >
                Let&rsquo;s Connect
                <ArrowDown size={16} />
              </a>

              <a
                href="https://drive.google.com/file/d/1ZNau-5A4XW0r8OXr07GsXB4AnKim4K0W/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-line px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:border-muted"
              >
                Download CV
                <Download size={16} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
