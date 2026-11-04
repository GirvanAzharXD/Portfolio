import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Certifications', 'Journey', 'Contact'];

  return (
    <footer className="border-t border-line py-10 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p className="font-display text-xl text-paper">
            Mochamad Girvan Azhar
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-paper"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted transition-colors duration-200 hover:text-paper"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-1 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Mochamad Girvan Azhar. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS &amp; Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
