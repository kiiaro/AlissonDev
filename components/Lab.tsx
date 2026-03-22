import React from 'react';
import { SKILLS } from '../constants';
import { Cpu, Database, Shield, Zap, Users, Mic, TrendingUp, Brain, Code } from 'lucide-react';

const getIcon = (iconName: string | undefined) => {
  switch (iconName) {
    case 'Cpu': return <Cpu className="text-neon-purple" size={24} />;
    case 'Database': return <Database className="text-neon-purple" size={24} />;
    case 'Shield': return <Shield className="text-neon-purple" size={24} />;
    case 'Zap': return <Zap className="text-neon-purple" size={24} />;
    case 'Users': return <Users className="text-neon-purple" size={24} />;
    case 'Mic': return <Mic className="text-neon-purple" size={24} />;
    case 'TrendingUp': return <TrendingUp className="text-neon-purple" size={24} />;
    case 'Brain': return <Brain className="text-neon-purple" size={24} />;
    default: return <Code className="text-neon-purple" size={24} />;
  }
};

const Lab: React.FC = () => {
  return (
    <section id="lab" className="py-32 relative bg-void-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
            <div>
                 <span className="font-mono text-neon-purple text-sm tracking-widest uppercase mb-4 block">01 / Toolkit</span>
                 <h2 className="font-display font-bold text-5xl md:text-6xl text-white">
                    O LABORATÓRIO<span className="text-neon-purple">.</span>
                 </h2>
            </div>
            <p className="max-w-md text-gray-400 mt-6 lg:mt-0 font-light leading-relaxed">
                Minha stack técnica combina a robustez do desenvolvimento Backend com a flexibilidade das Soft Skills, criando uma abordagem holística para resolução de problemas.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className="group relative p-6 bg-void-dark border border-white/5 rounded-xl hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-neon-purple/20 transition-colors">
                    {getIcon(skill.icon)}
                </div>
                <span className="font-mono text-[10px] text-gray-500 border border-gray-800 rounded px-1.5 py-0.5 group-hover:text-neon-purple group-hover:border-neon-purple/30">
                    {skill.category}
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-lg text-white mb-2">{skill.name}</h3>
              
              <div className="w-full bg-gray-800 h-0.5 rounded-full overflow-hidden">
                <div 
                  className="bg-neon-purple h-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;