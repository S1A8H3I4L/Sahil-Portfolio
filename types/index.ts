// types/index.ts — All shared TypeScript types

export interface Profile {
  id: string;
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  portfolio_url: string;
  resume_url: string;
  years_learning: number;
  projects_count: number;
  certificates_count: number;
  bio: string;
  currently_learning: string[];
}

export interface Project {
  id: string;
  slug: string;
  order: number;
  name: string;
  subtitle: string;
  description: string;
  long_description?: string;
  features: string[];
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  accent: "yellow" | "teal" | "pink" | "blue";
  featured: boolean;
  cover_emoji?: string;
  role?: string;
  duration?: string;
  challenges?: string[];
}

export interface Skill {
  id: string;
  category: string;
  items: string[];
  color: "yellow" | "teal" | "pink" | "blue" | "black" | "white";
  order: number;
}

export interface Experience {
  id: string;
  order: number;
  title: string;
  company: string;
  type: "Internship" | "Freelance" | "Full-time" | "Part-time";
  period: string;
  bullets: string[];
  badge_color: "yellow" | "teal" | "pink";
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon: string;
  url?: string;
}

export interface Education {
  id: string;
  order: number;
  degree: string;
  college: string;
  location: string;
  period: string;
  gpa_or_percent: string;
  status: "CURRENT" | "COMPLETED";
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}
