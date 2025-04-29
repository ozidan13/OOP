'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useOOPContent } from '../lib/contexts/OOPContentContext';
import { Module } from '../lib/types';
import { FontAwesomeIcon } from '../components/FontAwesomeIcon';
import { 
  faPlay, 
  faBook, 
  faCode, 
  faPuzzlePiece, 
  faLightbulb, 
  faArrowRight, 
  faArrowLeft, 
  faChevronRight, 
  faChevronDown, 
  faChevronUp, 
  faGraduationCap, 
  faMobile, 
  faLaptopCode, 
  faChartLine, 
  faCircleCheck, 
  faEllipsis, 
  faArrowDown
} from '@fortawesome/free-solid-svg-icons';

import { 
  faWhatsapp, 
  faJs, 
  faPython, 
  faReact, 
  faNode
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const { content, loading, error } = useOOPContent();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Loading OOP content...</p>
        </div>
      </div>
    );
  }
  
  if (error || !content) {
    return (
      <div className="min-h-screen py-10">
        <div className="container-custom">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Error Loading Content</h2>
            <p className="mb-4">{error || "Content could not be loaded"}</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section - Modern & Elegant Design */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-10">
        {/* Modern Background Design */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5"></div>

          {/* Subtle accent shapes */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo with refined animation */}
            <div className="mb-8">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image src="/logo.svg" alt="OOP Master Logo" fill priority className="hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="relative space-y-6">
              {/* Main heading with refined typography */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Master OOP
                </span>
              </h1>
              
              {/* Elegant divider */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto my-6 opacity-80"></div>
              
              {/* Refined tagline with better typography */}
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Learning platform for OOP concepts with interactive examples
              </p>
              
              {/* Author credit with improved styling */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Created by <span className="font-semibold text-primary">Osama Zinhom</span>
              </p>
              
              {/* Call to action buttons with modern styling */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link 
                  href="/module1_classes_objects" 
                  className="btn-primary group px-8 py-4 text-base rounded-lg shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faPlay} className="mr-2 h-5 w-5" />
                    Start Learning
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
                    />
                  </span>
                </Link>
                <Link 
                  href="/#modules" 
                  className="btn-outline group px-8 py-4 text-base rounded-lg border hover:bg-primary/5 hover:border-primary hover:text-primary dark:hover:bg-primary/10 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faBook} className="mr-2 h-5 w-5" />
                    Explore Modules
                    <FontAwesomeIcon 
                      icon={faArrowRight} 
                      className="ml-2 h-4 w-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" 
                    />
                  </span>
                </Link>
                <a 
                  href={`https://api.whatsapp.com/send/?phone=${content?.authorInfo.whatsapp}&text&type=phone_number&app_absent=0`}
                  className="btn-whatsapp group px-6 py-4 text-base rounded-lg" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                    Get Mentorship
                  </span>
                </a>
              </div>
            </div>
            
            {/* Refined scroll indicator */}
            <div className="mt-16">
              <Link href="/#modules" className="inline-flex flex-col items-center text-gray-500 hover:text-primary transition-colors duration-300">
                <span className="text-sm mb-2 font-medium">Explore Content</span>
                <FontAwesomeIcon icon={faArrowDown} className="h-5 w-5 animate-bounce" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modules Section */}
      <section id="modules" className="section bg-surface-light dark:bg-surface-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-primary/10 dark:bg-primary/20 rounded-lg mb-4">
              <FontAwesomeIcon icon={faPuzzlePiece} className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-4">OOP Learning Modules</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start your journey through the core principles of Object-Oriented Programming with our carefully structured modules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.modules.map((module: Module, index: number) => (
              <div 
                key={module.id} 
                className="relative group overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Decorative accent elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150"></div>
                
                <div className="px-6 pt-8 pb-6 relative">
                  <div className="mb-4 flex">
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 w-14 h-14 rounded-lg flex items-center justify-center text-primary">
                      <FontAwesomeIcon icon={getModuleIcon(index)} className="h-7 w-7" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-xl mb-1">{module.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.codeLanguages.map((lang, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center"
                          >
                            <FontAwesomeIcon icon={getLanguageIcon(lang)} className="h-3 w-3 mr-1 text-gray-500" />
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {module.shortDescription}
                  </p>
                  
                  <div className="module-topics-list mb-6">
                    {module.topics.slice(0, 3).map((topic, i) => (
                      <div key={i} className="flex items-center py-1.5 text-gray-700 dark:text-gray-300">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-primary h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">{topic.title}</span>
                      </div>
                    ))}
                    {module.topics.length > 3 && (
                      <div className="flex items-center py-1.5 text-gray-500">
                        <FontAwesomeIcon icon={faEllipsis} className="text-gray-400 h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">+ {module.topics.length - 3} more topics</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      href={`/${module.slug}`} 
                      className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300 font-medium text-sm flex items-center group"
                    >
                      Explore 
                      <FontAwesomeIcon 
                        icon={faArrowRight} 
                        className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" 
                      />
                    </Link>
                    <a 
                      href={`https://api.whatsapp.com/send/?phone=${content.authorInfo.whatsapp}&text=Hi, I need help with the ${module.title} module.&type=phone_number&app_absent=0`} 
                      className="text-gray-500 hover:text-green-500 px-2 py-1 rounded-lg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-secondary/10 dark:bg-secondary/20 rounded-lg mb-4">
              <FontAwesomeIcon icon={faLightbulb} className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to make learning OOP intuitive and enjoyable with these key features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-secondary/5 dark:shadow-secondary/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCode} className="h-7 w-7 text-secondary" />
                </div>
              </div>
              <h3 className="font-bold text-center mb-4">Code Examples</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Real-world code examples in multiple languages to reinforce concepts.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-primary/5 dark:shadow-primary/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLaptopCode} className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-center mb-4">Interactive Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Hands-on exercises and interactive demos for practical understanding.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-accent/5 dark:shadow-accent/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faMobile} className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="font-bold text-center mb-4">Mobile Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Responsive design that works seamlessly on all devices.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-primary/5 dark:shadow-primary/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faGraduationCap} className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-bold text-center mb-4">Step-by-Step Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Progressive learning path from basic to advanced concepts.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-secondary/5 dark:shadow-secondary/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faChartLine} className="h-7 w-7 text-secondary" />
                </div>
              </div>
              <h3 className="font-bold text-center mb-4">Progress Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Track your learning progress and achievements.
              </p>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-accent/5 dark:shadow-accent/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="font-bold text-center mb-4">Personal Mentorship</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Get direct help and guidance through WhatsApp support.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="section bg-surface-light dark:bg-surface-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-accent/10 dark:bg-accent/20 rounded-lg mb-4">
              <FontAwesomeIcon icon={faBook} className="h-6 w-6 text-accent" />
            </div>
            <h2 className="mb-4">Learning Resources</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore these carefully selected resources to enhance your understanding of OOP.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.learningResources.map((resource, index: number) => (
              <div key={index} className="relative flex flex-col">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group h-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-primary opacity-70"></div>
                  
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
                      <FontAwesomeIcon icon={getResourceIcon(resource.type)} className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-center mb-2 line-clamp-2">{resource.title}</h3>
                  <div className="mt-auto">
                    <div className="flex justify-center mt-4">
                      <span className="text-xs px-3 py-1 bg-accent/10 dark:bg-accent/20 text-accent rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <div className="text-center mt-3 text-primary text-sm font-medium group-hover:underline">
                      View Resource
                      <FontAwesomeIcon icon={faArrowRight} className="ml-1 h-3 w-3 inline-block group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary/90 to-accent/90 text-white">
        <div className="container-custom py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master OOP?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90">
            Start your journey today and transform the way you think about programming with our interactive learning platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/module1_classes_objects" className="btn bg-white text-primary hover:bg-gray-100 focus:ring-white px-8 py-3 text-lg group">
              Begin Your OOP Journey
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" 
              />
            </Link>
            <a 
              href={`https://api.whatsapp.com/send/?phone=${content.authorInfo.whatsapp}&text=Hello, I'm interested in learning more about your OOP learning platform.&type=phone_number&app_absent=0`}
              className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white/50 px-8 py-3 text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get icons for module cards
function getModuleIcon(index: number) {
  const icons = [
    faCode,             // Classes & Objects
    faLaptopCode,       // Encapsulation
    faPuzzlePiece,      // Inheritance
    faLightbulb,        // Polymorphism
    faChartLine,        // Abstraction
  ];
  
  return icons[index % icons.length];
}

// Helper function to get icons for programming languages
function getLanguageIcon(language: string): any {
  const iconMap: {[key: string]: any} = {
    'TypeScript': faCode,
    'JavaScript': faJs,
    'Python': faPython,
    'React': faReact,
    'Node.js': faNode
  };
  
  return iconMap[language] || faCode;
}

// Helper function to get icons for resource types
function getResourceIcon(type: string): any {
  const iconMap: {[key: string]: any} = {
    'Book': faBook,
    'Video': faPlay,
    'Article': faBook,
    'Course': faGraduationCap,
    'Tool': faCode,
  };
  
  return iconMap[type] || faBook;
}
