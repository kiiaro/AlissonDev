import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['lab', 'timeline', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Habilidades', href: '#lab', id: 'lab' },
    { name: 'Trajetória', href: '#timeline', id: 'timeline' },
    { name: 'Projetos', href: '#projects', id: 'projects' },
  ];

  return (
    <>
      {/* Desktop Floating Capsule */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 p-1.5 rounded-full glass-panel transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
        <a href="#" className="pl-4 pr-6 flex items-center gap-2 font-display font-bold text-white tracking-tight">
          <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></span>
          ALISSON.DEV
        </a>
        
        <div className="flex bg-void-dark/50 rounded-full p-1 border border-white/5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeSection === link.id 
                  ? 'bg-white text-black shadow-lg shadow-white/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="ml-2 px-6 py-2.5 rounded-full bg-neon-purple text-white font-bold text-sm hover:bg-neon-dark transition-colors shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          Fale Comigo
        </a>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-50 p-4 flex justify-between items-center glass-panel border-b-0">
         <a href="#" className="font-display font-bold text-xl text-white">
          ALISSON<span className="text-neon-purple">.</span>
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-void-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-4xl font-bold text-white hover:text-neon-purple transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-8 py-4 bg-neon-purple text-white font-bold rounded-full text-xl"
          >
            Contato
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;