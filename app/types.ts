// TypeScript interfaces for the application

// Learning Resource interface
export interface Resource {
  title: string;
  url: string;
  type: string; // Resource type e.g., 'Article', 'Video', 'Book', 'Course', 'Tool'
}

// Module interface
export interface Module {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  topics: string[];
  codeLanguages: string[];
  visualExamples: VisualExample[];
  keyFeatures: string[];
}

// Visual Example interface
export interface VisualExample {
  title: string;
  description: string;
  type: string;
}

// Content interface
export interface Content {
  siteTitle: string;
  tagline: string;
  guideTitle: string;
  projectGoal: string;
  modules: Module[];
  techStack: TechStack;
  keyFeatures: string[];
  developmentSteps: string[];
  learningResources: Resource[];
  authorInfo: AuthorInfo;
  siteInfo: SiteInfo;
}

// Tech Stack interface
export interface TechStack {
  framework: string;
  language: string;
  authentication: string;
  uiComponents: string;
  styling: string;
  visualization: string[];
}

// Author Info interface
export interface AuthorInfo {
  name: string;
  role: string;
  bio: string;
  contact: string;
}

// Site Info interface
export interface SiteInfo {
  createdYear: number;
  version: string;
  lastUpdated: string;
  license: string;
} 