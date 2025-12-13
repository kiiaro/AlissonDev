import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Images mapping based on project index (Placeholders styled for the theme)
  const projectImages = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop", // Solar/Nature
    "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=2070&auto=format&fit=crop", // Data/Network
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"  // DNA/Genetic
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  useEffect(() => {
    if (isAnimating) {
        const timer = setTimeout(() => setIsAnimating(false), 500); // Match CSS duration
        return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const currentProject = PROJECTS[currentIndex];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-void-black relative overflow-hidden min-h-screen flex items-center">
      
      {/* Background Ambience (Changes with slide) */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-20"
        style={{
            backgroundImage: `url(${projectImages[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(50px)'
        }}
      ></div>
      <div className="absolute inset-0 bg-void-black/80"></div>

      <div className="container mx-auto px-6 relative z-10">
         
         {/* Section Header */}
         <div className="flex justify-between items-end mb-12">
            <div>
                <span className="font-mono text-neon-purple text-sm tracking-widest uppercase mb-4 block">03 / Case Studies</span>
                <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
                    TRABALHOS<span className="text-neon-purple">.</span>
                </h2>
            </div>
            
            {/* Controls - Desktop */}
            <div className="hidden md:flex gap-4">
                <button 
                    onClick={prevSlide}
                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-neon-purple hover:border-neon-purple transition-all duration-300 hover:scale-110"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-neon-purple hover:border-neon-purple transition-all duration-300 hover:scale-110"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
         </div>

         {/* Main Slider Area */}
         <div className="relative w-full min-h-[500px] lg:h-[600px] flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Content Side (Left) */}
            <div className="flex-1 flex flex-col justify-center order-2 lg:order-1 relative">
                {/* Text Animation Container */}
                <div key={currentIndex} className="animate-[slideIn_0.6s_ease-out_forwards]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                        <span className="text-xs font-mono text-neon-purple uppercase tracking-wider">{currentProject.role}</span>
                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span className="text-xs font-mono text-gray-400">{currentProject.year}</span>
                    </div>

                    <h3 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6 leading-tight">
                        {currentProject.title}
                    </h3>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                        {currentProject.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {currentProject.tech.map((t, i) => (
                            <span 
                                key={i} 
                                className="px-4 py-2 bg-white/5 text-gray-300 text-sm font-mono rounded border border-white/5"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neon-purple hover:text-white transition-all duration-300">
                        Ver Projeto
                        <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={20} />
                    </button>
                </div>
            </div>

            {/* Image Side (Right) */}
            <div className="flex-1 order-1 lg:order-2 relative group">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 border border-white/5 rounded-3xl -z-10 rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                
                <div className="relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-purple/10">
                    <img 
                        src={projectImages[currentIndex]} 
                        alt={currentProject.title}
                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-transparent"></div>

                    {/* Floating Tech Icon */}
                    <div className="absolute bottom-6 right-6 p-4 glass-panel rounded-xl backdrop-blur-md border border-white/10 animate-bounce-slow">
                        {currentIndex === 0 ? <Cpu className="text-neon-purple" /> : <Layers className="text-neon-purple" />}
                    </div>
                </div>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden justify-between items-center order-3 mt-4">
                 <div className="flex gap-2">
                    {PROJECTS.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-neon-purple w-6' : 'bg-gray-600'}`}
                        />
                    ))}
                 </div>
                 <div className="flex gap-4">
                    <button onClick={prevSlide} className="p-3 rounded-full border border-white/10 text-white"><ChevronLeft size={20}/></button>
                    <button onClick={nextSlide} className="p-3 rounded-full border border-white/10 text-white"><ChevronRight size={20}/></button>
                 </div>
            </div>

         </div>

         {/* Progress Bar (Desktop) */}
         <div className="hidden md:flex items-center gap-4 mt-12">
            <span className="text-xs font-mono text-neon-purple">0{currentIndex + 1}</span>
            <div className="w-full h-px bg-white/10 relative">
                <div 
                    className="absolute top-0 left-0 h-full bg-neon-purple transition-all duration-500 ease-out"
                    style={{ width: `${((currentIndex + 1) / PROJECTS.length) * 100}%` }}
                ></div>
            </div>
            <span className="text-xs font-mono text-gray-500">0{PROJECTS.length}</span>
         </div>

      </div>
      
      <style>{`
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-slow {
            animation: bounce 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;