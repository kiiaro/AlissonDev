import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaveBackground from './components/WaveBackground';
import Lab from './components/Lab';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import SectionWrapper from './components/SectionWrapper';

const App: React.FC = () => {
  
  // Basic smooth scroll fix for anchor links since we are using hash navigation
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
            document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
            });
        }
      });
    });
  }, []);

  return (
    <main className="bg-void-black h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white selection:bg-neon-purple selection:text-white font-sans relative">
      <WaveBackground />
      <Navbar />
      
      {/* Slide 1: Introduction */}
      <SectionWrapper id="hero">
        <Hero />
      </SectionWrapper>

      {/* Slide 2: Who I Am (Profile) */}
      <SectionWrapper id="timeline">
        <Timeline />
      </SectionWrapper>

      {/* Slide 3: Skills (The Lab) */}
      <SectionWrapper id="lab">
        <Lab />
      </SectionWrapper>

      {/* Slide 4: Projects */}
      <SectionWrapper id="projects" className="bg-void-black">
        <Projects />
      </SectionWrapper>

      {/* Slide 5: Contact */}
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </main>
  );
};

export default App;