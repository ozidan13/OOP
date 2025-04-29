// Types for OOP content data structure
// These types match the structure of our JSON data for MongoDB compatibility

export interface VisualExample {
  title: string;
  description: string;
  type: string;
}

export interface Example {
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

export interface TypeComparison {
  type: string;
  description: string;
}

export interface Comparison {
  concept: string;
  explanation: string;
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

export interface Topic {
  title: string;
  description: string;
  advantages?: string[];
  benefits?: string[];
  examples?: Example[];
  methodTypes?: MethodType[];
  modifiers?: Modifier[];
  principles?: string[];
  types?: TypeComparison[];
  comparisons?: Comparison[];
  characteristics?: string[];
  importance?: string[];
  usages?: {
    scenario: string;
    purpose: string;
  }[];
}

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

export interface LearningResource {
  title: string;
  url: string;
  type: string;
}

export interface AuthorInfo {
  name: string;
  role: string;
  contact: string;
  whatsapp: string;
  bio: string;
}

export interface TechStack {
  framework: string;
  language: string;
  authentication: string;
  uiComponents: string;
  styling: string;
  visualization: string[];
}

export interface Meta {
  version: string;
  lastUpdated: string;
  mongoDBCompatible: boolean;
  schemaVersion: string;
}

export interface OOPContent {
  siteTitle: string;
  tagline: string;
  guideTitle: string;
  projectGoal: string;
  modules: Module[];
  techStack: TechStack;
  keyFeatures: string[];
  developmentSteps: string[];
  learningResources: LearningResource[];
  authorInfo: AuthorInfo;
  meta: Meta;
}
