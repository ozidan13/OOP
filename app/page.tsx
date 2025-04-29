import Link from 'next/link';
import Image from 'next/image';
import { Content, Resource } from './types';

async function getData() {
  const data = await import('../public/oop_content.json');
  return data.default as Content;
}

export default async function Home() {
  const content = await getData();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced Modern Design */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-10">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-t from-secondary/10 to-transparent blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 dark:from-primary/10 dark:via-secondary/10 dark:to-accent/10 opacity-50"></div>
          
          {/* Animated floating shapes */}
          <div className="absolute top-1/4 left-1/5 animate-float-slow">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="currentColor" className="text-primary/20" />
            </svg>
          </div>
          <div className="absolute top-2/3 right-1/5 animate-float-medium">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="15" fill="currentColor" className="text-secondary/20" />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/3 animate-float-fast">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L20 10L10 20L0 10L10 0Z" fill="currentColor" className="text-accent/20" />
            </svg>
          </div>
        </div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo and Title */}
            <div className="mb-6 inline-flex justify-center">
              <div className="relative w-48 h-48 mb-4">
                <Image src="/logo.svg" alt="OOP Master Logo" fill priority className="animate-float-slow" />
              </div>
            </div>
            
            <div className="relative">
              <h1 className="mb-4 font-display font-bold leading-tight">
                <span className="text-gradient">Master Object-Oriented Programming</span>
              </h1>
              
              {/* Abstract decorative line */}
              <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto my-6"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Visual learning platform for OOP concepts with interactive examples
              </p>
              
              <p className="creator-highlight mb-8 ">
                Created by <strong>Osama Zinhom</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/module1_classes_objects" 
                  className="btn-primary group px-8 py-4 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    Start Learning
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <path fillRule="evenodd" d="M12 2.25a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  href="/#modules" 
                  className="btn-outline group px-8 py-4 text-lg border-2 hover:bg-primary/10 hover:border-primary hover:text-primary dark:hover:bg-primary/20 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                      <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                    </svg>
                    Explore Modules
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <path fillRule="evenodd" d="M12 2.25a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                <a 
                  href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
                  className="btn-whatsapp pulse-effect px-6 py-4 text-lg group" 
            target="_blank"
            rel="noopener noreferrer"
          >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 mr-2">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    Get Mentorship
                  </span>
                </a>
              </div>
            </div>
            
            {/* Enhanced Feature Preview Cards */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-primary/5 dark:shadow-primary/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
                    <path d="M12.378 1.602a.75.75 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-center">Interactive Visuals</h3>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-secondary/5 dark:shadow-secondary/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="30" height="30" rx="8" fill="currentColor" className="text-secondary/20" />
                  </svg>
                </div>
                <h3 className="font-bold text-center">Code Examples</h3>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-accent/5 dark:shadow-accent/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-accent">
                    <path d="M11.7 2.805a.75.75 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                  </svg>
                </div>
                <h3 className="font-bold text-center">Step-by-Step</h3>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl shadow-primary/5 dark:shadow-primary/10 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <div className="mb-4 flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-primary">
                    <path fillRule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-center">Real-world Apps</h3>
              </div>
            </div>
            
            {/* Scroll down indicator */}
            <div className="mt-16 flex justify-center">
              <Link href="/#modules" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity duration-300 group">
                <span className="text-sm mb-2 font-medium">Scroll to explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 animate-bounce group-hover:animate-bounce-fast">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
              </svg>
            </div>
            <h2 className="mb-4">OOP Learning Modules</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start your journey through the core principles of Object-Oriented Programming with our carefully structured modules.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.modules.map((module, index) => (
              <div key={module.id} className="module-card hover:translate-y-[-5px] transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="module-card-header">
                  <div>
                    <div className="rounded-full w-12 h-12 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                        {getModuleIcon(index)}
                      </svg>
                    </div>
                    <h3 className="module-card-title">{module.title}</h3>
                  </div>
                </div>
                
                <p className="module-card-description">
                  {module.shortDescription}
                </p>
                
                <div className="module-topics-list">
                  {module.topics.slice(0, 3).map((topic, i) => (
                    <div key={i} className="module-topic-item">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary mr-2 flex-shrink-0">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{topic.title}</span>
                    </div>
                  ))}
                  {module.topics.length > 3 && (
                    <div className="module-topic-item text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0">
                        <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                      </svg>
                      <span>+ {module.topics.length - 3} more topics</span>
                    </div>
                  )}
                </div>
                
                <div className="module-card-footer">
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {module.codeLanguages.map((lang, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1 text-gray-500">
                            {getLanguageIcon(lang)}
                          </svg>
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link href={`/${module.slug}`} className="text-primary dark:text-primary-light font-medium text-sm flex items-center group">
                        Explore 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300">
                          <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <a 
                        href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
                        className="btn-whatsapp pulse-effect text-xs py-1 px-2" 
            target="_blank"
            rel="noopener noreferrer"
          >
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-3 h-3 mr-1">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                          </svg>
                          Help
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block p-2 bg-secondary/10 dark:bg-secondary/20 rounded-lg mb-4">
              <i className="fas fa-lightbulb text-secondary text-2xl"></i>
            </div>
            <h2 className="mb-4">Interactive Learning Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Dive into OOP concepts with interactive visualizations and practical code examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Feature 1: Visualizations */}
            <div className="relative">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg aspect-video group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 bg-primary/80 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <i className="fas fa-diagram-project"></i>
                </div>
                <div className="p-4 h-full flex flex-col justify-center items-center">
                  <div className="visualizer-container w-full h-full flex items-center justify-center">
                    <div className="relative w-4/5 h-4/5">
                      {/* Simplified Class vs Object Visualization */}
                      <div className="absolute left-0 top-0 w-2/5 h-4/5 bg-primary/80 rounded-lg p-4 flex flex-col">
                        <h4 className="text-white text-sm font-bold mb-2">Class: Person</h4>
                        <div className="bg-white/10 p-2 rounded mb-2">
                          <p className="text-white text-xs">name: string</p>
                          <p className="text-white text-xs">age: number</p>
                        </div>
                        <div className="bg-white/10 p-2 rounded">
                          <p className="text-white text-xs">greet(): void</p>
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/4 w-2/5 h-3/5 bg-accent/80 rounded-lg p-4 flex flex-col">
                        <h4 className="text-white text-sm font-bold mb-2">Object: john</h4>
                        <div className="bg-white/10 p-2 rounded mb-2">
                          <p className="text-white text-xs">name: "John"</p>
                          <p className="text-white text-xs">age: 30</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-2/5 top-1/4 w-1/5 border-t-2 border-dashed border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <i className="fas fa-chart-network text-primary mr-2"></i>
                  Interactive Visualizations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  See OOP concepts come to life with dynamic visualizations that illustrate class relationships, inheritance hierarchies, and more.
                </p>
              </div>
            </div>
            
            {/* Feature 2: Code Examples */}
            <div className="relative">
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg aspect-video group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 bg-secondary/80 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <i className="fas fa-code"></i>
                </div>
                <div className="p-4 h-full flex flex-col justify-center">
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-white text-sm overflow-hidden">
                    <pre className="language-typescript"><code>
{`class Animal {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  makeSound(): void {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  private breed: string;
  
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  
  makeSound(): void {
    console.log('Woof! Woof!');
  }
  
  fetch(): void {
    console.log(\`\${this.name} is fetching...\`);
  }
}

// Create an instance
const myDog = new Dog('Rex', 'German Shepherd');
myDog.makeSound(); // "Woof! Woof!"
myDog.fetch(); // "Rex is fetching..."`}</code></pre>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <i className="fas fa-code-branch text-secondary mr-2"></i>
                  Clear Code Examples
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn from practical, well-commented code examples in TypeScript, JavaScript, Python, and Java that demonstrate OOP concepts in action.
                </p>
              </div>
            </div>
          </div>
          
          {/* More Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-surface-light dark:bg-surface-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="rounded-full w-16 h-16 bg-secondary/10 dark:bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Step-by-Step Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Follow structured learning paths that build your understanding from fundamentals to advanced concepts.
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
                className="btn-whatsapp pulse-effect text-xs py-1 px-3 mt-2 inline-flex" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-3 h-3 mr-1">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Get Help
                </span>
              </a>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center p-6 rounded-xl bg-surface-light dark:bg-surface-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="rounded-full w-16 h-16 bg-accent/10 dark:bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-accent">
                  <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                  <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn OOP on any device with our fully responsive platform, optimized for desktop, tablet, and mobile.
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
                className="btn-whatsapp pulse-effect text-xs py-1 px-3 mt-2 inline-flex" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-3 h-3 mr-1">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Get Help
                </span>
              </a>
            </div>
            
            {/* Feature 5 */}
            <div className="text-center p-6 rounded-xl bg-surface-light dark:bg-surface-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="rounded-full w-16 h-16 bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Dark & Light Themes</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Choose between light and dark themes for comfortable learning in any environment.
              </p>
              <a 
                href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
                className="btn-whatsapp pulse-effect text-xs py-1 px-3 mt-2 inline-flex" 
          target="_blank"
          rel="noopener noreferrer"
        >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-3 h-3 mr-1">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Get Help
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="section bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container-custom text-center relative z-10">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
            <i className="fas fa-rocket text-white text-3xl"></i>
          </div>
          <h2 className="text-white mb-6">Ready to Master Object-Oriented Programming?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey today and build a solid foundation in one of programming's most essential paradigms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/module1_classes_objects" className="btn bg-white text-primary hover:bg-gray-100 focus:ring-white px-8 py-3 text-lg group">
              Begin Your OOP Journey
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300">
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              </svg>
            </Link>
            <a 
              href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
              className="btn-whatsapp pulse-effect px-6 py-3 text-lg group bg-green-600 hover:bg-green-700" 
          target="_blank"
          rel="noopener noreferrer"
        >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 mr-2">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                Get Personalized Mentorship
              </span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section id="resources" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-primary mr-2"
              >
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Additional Resources</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expand your knowledge with these carefully selected resources on Object-Oriented Programming.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.learningResources.map((resource: Resource, index: number) => (
              <div key={index} className="relative flex flex-col">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full group"
                >
                  <div className="flex items-center mb-3">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6 text-primary mr-2 group-hover:scale-110 transition-transform duration-300"
                    >
                      {getResourceIcon(resource.type)}
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{resource.title}</h3>
                  </div>
                  <div className="mt-auto flex items-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                        <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                      </svg>
                      <span className="group-hover:underline">Resource</span>
                    </p>
                  </div>
                </a>
                <div className="absolute bottom-4 right-4">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
                    className="btn-whatsapp pulse-effect text-xs py-1 px-2" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-3 h-3 mr-1">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                      Help
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper function to get icons for module cards
function getModuleIcon(index: number) {
  const icons = [
    // Module 1: Cube - Classes & Objects
    <path key="cube" d="M12.378 1.602a.75.75 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />,
    
    // Module 2: Lock - Encapsulation
    <path key="lock" fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />,
    
    // Module 3: Hierarchy - Inheritance
    <path key="hierarchy" d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />,
    
    // Module 4: Arrows-split - Polymorphism
    <path key="polymorphism" d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />,
    
    // Module 5: Layers - Abstraction
    <path key="layers" d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
  ];
  
  return icons[index % icons.length];
}

// Helper function to get icons for programming languages
import React from 'react';

function getLanguageIcon(language: string) {
  const codeIcon = <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />;
  
  const iconMap: {[key: string]: JSX.Element} = {
    'TypeScript': <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />,
    'JavaScript': <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />,
    'Python': <path d="M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" />,
    'Java': <path d="M15 6.75a.75.75 0 00-.75.75V18a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H15zM20.25 6.75a.75.75 0 00-.75.75V18c0 .414.336.75.75.75H21a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75h-.75zM5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061z" />,
  };
  
  return iconMap[language] || codeIcon;
}

// Helper function to get icons for resource types
function getResourceIcon(type: string): JSX.Element {
  const defaultIcon = <path fillRule="evenodd" d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" clipRule="evenodd" />;
  
  const iconMap: {[key: string]: JSX.Element} = {
    'Book': <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />,
    'Video': <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />,
    'Article': <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />,
    'Course': <path d="M11.7 2.805a.75.75 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />,
    'Tool': <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />,
  };
  
  return iconMap[type] || defaultIcon;
}
