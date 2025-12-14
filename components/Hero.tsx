import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight, Terminal } from 'lucide-react';

const GREETINGS = [
  "BEM-VINDO AO PORTFOLIO DE",
  "INICIALIZANDO SISTEMA DE",
  "ESTABELECENDO CONEXÃO COM",
  "ACESSO CONCEDIDO A"
];

const CHARS = "ABCDEF0123456789";

const Hero: React.FC = () => {
  const [text, setText] = useState(GREETINGS[0]);
  const [index, setIndex] = useState(0);
  
  // Lógica do efeito Scramble
  useEffect(() => {
    let interval: any;
    let iteration = 0;
    
    const targetWord = GREETINGS[index];
    
    interval = setInterval(() => {
      setText(prev => 
        targetWord
          .split("")
          .map((letter, i) => {
            if (i < iteration) {
              return targetWord[i];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetWord.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2; 
    }, 30);

    const nextWordTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 3500); 

    return () => {
        clearInterval(interval);
        clearTimeout(nextWordTimeout);
    };
  }, [index]);

  return (
    <div className="relative h-full flex flex-col justify-center perspective-1000 overflow-visible">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-neon-purple/20 blur-[120px] rounded-full pointer-events-none opacity-40 -translate-y-1/2 mix-blend-screen animate-pulse-slow"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Esquerda: Conteúdo de Texto */}
          <div className="order-2 lg:order-1 relative z-10">
            
            {/* Scramble Greeting */}
            <div className="flex items-center gap-3 mb-4 h-8">
                <Terminal size={16} className="text-neon-purple animate-pulse" />
                <span className="font-mono text-neon-purple/80 text-sm md:text-base tracking-widest uppercase">
                    {text}
                </span>
            </div>
            
            {/* Título Principal */}
            <h1 className="relative font-display font-black text-6xl md:text-8xl lg:text-[6.5rem] leading-[0.9] text-white mb-10 tracking-tighter">
              ALISSON<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-white to-neon-purple bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
                .DEV
              </span>
              <div className="absolute -right-4 top-0 w-4 h-4 bg-neon-purple rounded-full animate-ping opacity-50 hidden lg:block"></div>
            </h1>
            
            {/* Bloco "Terminal" Traduzido e Limpo */}
            <div className="mb-12 p-6 rounded-xl bg-void-dark/50 border border-white/10 backdrop-blur-md font-mono text-sm text-gray-400 shadow-2xl hover:border-neon-purple/30 transition-colors duration-500">
                <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="space-y-2">
                    <p className="flex justify-between">
                        <span>> LOCALIZACAO:</span> 
                        <span className="text-white">RECIFE_BR</span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
               <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Ver Projetos <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18}/>
                  </span>
                  <div className="absolute inset-0 bg-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver Projetos <ArrowRight size={18}/>
                  </span>
               </a>

               <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 hover:-translate-y-1"><Github size={20}/></a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 hover:-translate-y-1"><Linkedin size={20}/></a>
               </div>
            </div>
          </div>

          {/* Direita: A Foto com Efeito "Ghost/Trail" */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative group perspective-1000">
            
            {/* Círculos de Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-neon-purple/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            {/* Container da Imagem */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] transition-all duration-500 z-10">
                
                {/* Imagem Fantasma 1 (Magenta/Esquerda) - Rastro Temporário */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-40 transition-all duration-300 ease-out group-hover:-translate-x-3 group-hover:-translate-y-2 mix-blend-screen pointer-events-none z-0">
                     <img 
                        src="https://image2url.com/images/1765632822605-7f0c7cf2-5b01-4cd2-a56f-199b6ff50f8b.jpg" 
                        className="w-full h-full object-cover filter sepia hue-rotate-[280deg] contrast-150"
                        alt="Ghost 1"
                    />
                </div>

                {/* Imagem Fantasma 2 (Ciano/Direita) - Rastro Temporário */}
                <div className="absolute inset-0 rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-40 transition-all duration-300 ease-out delay-75 group-hover:translate-x-3 group-hover:translate-y-2 mix-blend-screen pointer-events-none z-0">
                     <img 
                        src="https://image2url.com/images/1765632822605-7f0c7cf2-5b01-4cd2-a56f-199b6ff50f8b.jpg" 
                        className="w-full h-full object-cover filter sepia hue-rotate-[160deg] contrast-150"
                        alt="Ghost 2"
                    />
                </div>

                {/* Imagem Principal */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black bg-void-dark z-10">
                    <img 
                        src="https://image2url.com/images/1765632822605-7f0c7cf2-5b01-4cd2-a56f-199b6ff50f8b.jpg" 
                        alt="Alisson Calasans" 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Gradiente Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    
                    {/* Reveal Text on Hover - ATUALIZADO */}
                    <div className="absolute bottom-10 inset-x-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                         <div className="inline-block px-8 py-4 rounded-2xl glass-panel border border-neon-purple/30 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                            <h3 className="font-display font-bold text-white tracking-wide text-lg leading-tight">
                                ALISSON CALASANS
                            </h3>
                            <span className="font-mono text-neon-purple text-xs tracking-[0.2em] block mt-1 uppercase">
                                DESENVOLVEDOR JUNIOR
                            </span>
                         </div>
                    </div>
                </div>

            </div>
          </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-0 hidden md:flex items-center gap-4 animate-[fadeIn_2s_ease-out_1s_both]">
         <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-purple transition-colors">
            <div className="w-1 h-1 bg-neon-purple rounded-full animate-ping"></div>
         </div>
         <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-gray-500 group-hover:text-white">SCROLL PARA INICIAR</span>
      </div>

      <style>{`
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
      `}</style>

    </div>
  );
};

export default Hero;