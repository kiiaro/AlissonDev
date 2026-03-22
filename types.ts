export interface Certification {
  name: string;
  org: string;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Tech' | 'Soft' | 'Core';
  icon?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  role: string;
  year: string;
}

export interface Education {
  institution: string;
  course: string;
  period: string;
}