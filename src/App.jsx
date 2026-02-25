import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Resume from './components/Resume';

import Contact from './components/Contact';

export default function App() {
  /* Scroll-triggered fade-in animations — watches for dynamically added elements */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () =>
      document.querySelectorAll('.fade-in-up:not(.visible)').forEach(el => io.observe(el));

    observe();

    // Re-observe when new DOM nodes appear (e.g. after lazy renders)
    const mo = new MutationObserver(observe);
    mo.observe(document.getElementById('root'), { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <WhatIDo />
      <Projects />
      <Resume />

      <Contact />
    </>
  );
}
