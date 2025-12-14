import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-32 bg-void-black border-t border-white/5 relative overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neon-purple/50 blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-black text-6xl md:text-8xl text-white mb-10 leading-[0.9]">
                LET'S BUILD <br />
                <span className="purple-gradient-text">THE FUTURE.</span>
            </h2>
            
            <p className="text-gray-400 text-xl mb-12 font-light">
                Disponível para novos desafios e colaborações.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group">
                    <Mail className="mb-4 text-white group-hover:text-neon-purple transition-colors" />
                    <span className="text-white font-bold">Email</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group">
                    <Linkedin className="mb-4 text-white group-hover:text-neon-purple transition-colors" />
                    <span className="text-white font-bold">LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group">
                    <Github className="mb-4 text-white group-hover:text-neon-purple transition-colors" />
                    <span className="text-white font-bold">GitHub</span>
                </a>
                 <a href={`tel:${PERSONAL_INFO.phone}`} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group">
                    <Phone className="mb-4 text-white group-hover:text-neon-purple transition-colors" />
                    <span className="text-white font-bold">WhatsApp</span>
                </a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm pt-8 border-t border-white/5">
                <p>&copy; {new Date().getFullYear()} Alisson Calasans.</p>
                <p className="font-mono">System.exit(0);</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;