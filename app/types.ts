// TypeScript interfaces for the application

// Learning Resource interface
export interface Resource {
  title: string;
  url: string;
  type: string; // Resource type e.g., 'Article', 'Video', 'Book', 'Course', 'Tool'
}

// Topic interface
export interface Topic {
  title: string;
  description: string;
  advantages?: string[];
  benefits?: string[];
  examples?: TopicExample[];
  methodTypes?: MethodType[];
  modifiers?: Modifier[];
  principles?: string[];
  types?: TypeVariant[];
  comparisons?: Comparison[];
  characteristics?: string[];
  importance?: string[];
  usages?: Usage[];
}

export interface TopicExample {
  language?: string;
  code?: string;
  concept?: string;
  explanation?: string;
}

export interface MethodType {
  type: string;
  description: string;
}

export interface Modifier {
  name: string;
  description: string;
  use_case: string;
}

export interface TypeVariant {
  type: string;
  description: string;
}

export interface Comparison {
  concept: string;
  explanation: string;
}

export interface Usage {
  scenario: string;
  purpose: string;
}

export interface InteractiveElement {
  type: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface SampleProject {
  title: string;
  description: string;
}

export interface DemoSection {
  title: string;
  description: string;
  interactiveElements: InteractiveElement[];
  challenges?: Challenge[];
  sampleProjects?: SampleProject[];
}

// Module interface
export interface Module {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  topics: Topic[];
  codeLanguages: string[];
  visualExamples: VisualExample[];
  keyFeatures: string[];
  demoSection: DemoSection;
}

// Visual Example interface
export interface VisualExample {
  title: string;
  description: string;
  type: string;
}

// Author Info interface
export interface AuthorInfo {
  name: string;
  role: string;
  bio: string;
  contact: string;
  whatsapp: string;
}

// Meta interface
export interface Meta {
  version: string;
  lastUpdated: string;
  mongoDBCompatible: boolean;
  schemaVersion: string;
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
  meta: Meta;
}