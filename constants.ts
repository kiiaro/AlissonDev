import { Certification, Education, Project, Skill } from './types';
import { Database, Shield, Zap, Cpu, Users, Mic, TrendingUp, Brain } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Alisson Calasans Marinho",
  role: "Estudante de Desenvolvimento de Sistemas",
  headline: "DESENVOLVIMENTO DE SISTEMAS & CIÊNCIA",
  subHeadline: "Unindo JavaScript, TypeScript e Biologia para construir interfaces resilientes e inovadoras.",
  email: "contato@alisson.dev", // Placeholder based on context
  phone: "+55 81 99647-4877",
  location: "Recife, Brasil",
  bio: "Sou um profissional versátil, capaz de entender o problema de negócio e colaborar com o time para aplicar a ferramenta certa. Tenho facilidade em aprender e me adaptar, buscando contribuir integralmente ao sucesso de um projeto, da concepção à entrega."
};

export const EDUCATION: Education[] = [
  {
    institution: "Mediotec Senac - Recife",
    course: "Ensino Médio Integrado - Desenvolvimento de Sistemas",
    period: "2024 - 2026"
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Network Defense", org: "Cisco", year: "2025" },
  { name: "Scrum Foundation Learner", org: "Certiprof", year: "2025" },
  { name: "Startup Day", org: "Sebrae", year: "2025" },
  { name: "HospitalMed", org: "HospitalMed", year: "10/25" },
  { name: "Network Defense", org: "Cisco", year: "2024" },
];

export const SKILLS: Skill[] = [
  { name: "JavaScript & TypeScript", level: 95, category: "Tech", icon: "Cpu" },
  { name: "HTML5, CSS3 & Tailwind", level: 90, category: "Tech", icon: "Database" },
  { name: "React & Frontend", level: 85, category: "Tech", icon: "Zap" },
  { name: "Network Defense", level: 80, category: "Tech", icon: "Shield" },
  { name: "Scrum / Agile", level: 95, category: "Core", icon: "Users" },
  { name: "Estratégia Digital", level: 85, category: "Soft", icon: "TrendingUp" },
  { name: "Oratória & Comunicação", level: 90, category: "Soft", icon: "Mic" },
  { name: "Adaptabilidade", level: 95, category: "Soft", icon: "Brain" },
];

export const PROJECTS: Project[] = [
  {
    title: "CHROMA SOLAR",
    description: "Uma iniciativa revolucionária focada na otimização e democratização da energia solar. Utilizamos algoritmos avançados para maximizar a eficiência de captação, inspirados em princípios biológicos de fotossíntese.",
    tech: ["TypeScript", "React", "IoT", "Data Analysis"],
    role: "Tech Founder",
    year: "2024 - Presente"
  },
  {
    title: "NEURO VISION DASHBOARD",
    description: "Interface analítica focada em performance para visualização de grandes volumes de dados. Desenvolvida com React e gerenciamento de estado otimizado, simula conexões neurais interativas no navegador.",
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    role: "Frontend Developer",
    year: "2024"
  },
  {
    title: "BIO-GENESIS SIM",
    description: "Simulação interativa de evolução artificial e algoritmos genéticos. Projeto desenvolvido em JavaScript puro (Vanilla JS) e Canvas API, demonstrando domínio profundo da linguagem e lógica de programação.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3", "Algorithms"],
    role: "Creator",
    year: "2023"
  }
];