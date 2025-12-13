import React from 'react';
import { CERTIFICATIONS, EDUCATION, PERSONAL_INFO } from '../constants';
import { Award, BookOpen, Globe } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <div className="relative h-full flex flex-col justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="mb-10 lg:mb-16">
            <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-neon-purple"></span>
            <span className="font-mono text-neon-purple text-sm tracking-widest uppercase">02 / O Perfil</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white max-w-4xl leading-[1.1]">
            QUEM EU SOU<span className="text-neon-purple">.</span>
            </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 h-auto lg:h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Left Column: Bio & Philosophy */}
            <div className="lg:col-span-7 space-y-8">
                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
                        {PERSONAL_INFO.bio}
                    </p>
                    <p className="text-gray-500 leading-relaxed mt-4">
                        Minha abordagem não é apenas escrever código, mas cultivar ecossistemas digitais. 
                        Acredito que a tecnologia deve imitar a eficiência da natureza — adaptável, 
                        resiliente e em constante evolução.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500">
                        <Globe className="text-neon-purple mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" size={28} />
                        <h4 className="text-white font-bold mb-1">Global Mindset</h4>
                        <p className="text-sm text-gray-500">Focado em soluções escaláveis com impacto real.</p>
                    </div>
                    <div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-500">
                        <BookOpen className="text-neon-purple mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" size={28} />
                        <h4 className="text-white font-bold mb-1">Aprendizado Contínuo</h4>
                        <p className="text-sm text-gray-500">Evolução constante baseada em experimentação.</p>
                    </div>
                </div>
            </div>

            {/* Right Column: Timeline & Stats (The 'Dossier' look) */}
            <div className="lg:col-span-5 space-y-6">
                
                {/* Education Block */}
                <div className="bg-void-black border border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-neon-purple/30 transition-colors">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BookOpen size={64} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-white mb-4">Formação</h3>
                    <div className="space-y-4">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="relative pl-6 border-l border-white/10">
                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-neon-purple"></div>
                                <span className="block text-xs font-mono text-neon-purple mb-1">{edu.period}</span>
                                <h4 className="text-white font-bold text-md leading-tight">{edu.institution}</h4>
                                <p className="text-gray-400 text-sm mt-1">{edu.course}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications List */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display font-bold text-xl text-white">Certificações</h3>
                        <Award className="text-neon-purple" size={20} />
                    </div>
                    <div className="space-y-2">
                        {CERTIFICATIONS.map((cert, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-neon-purple/30 hover:bg-white/10 transition-all duration-300 cursor-default group">
                                <div>
                                    <h5 className="text-white font-medium text-sm group-hover:text-neon-purple transition-colors">{cert.name}</h5>
                                </div>
                                <span className="font-mono text-[10px] text-gray-600 border border-gray-700 rounded px-1.5 py-0.5">{cert.year}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Timeline;