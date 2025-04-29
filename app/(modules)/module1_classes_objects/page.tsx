'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useOOPContent } from '../../../lib/contexts/OOPContentContext';
import { Topic, Example } from '../../../lib/types';

export default function Module1Page() {
  const [activeTab, setActiveTab] = useState('typescript');
  const { content, loading, error, getModuleBySlug, isReady } = useOOPContent();
  const module = getModuleBySlug('module1_classes_objects');
  const [codeExamples, setCodeExamples] = useState<Record<string, string>>({
    typescript: '',
    javascript: '',
    python: ''
  });
  
  // Extract code examples once module data is loaded
  useEffect(() => {
    if (module) {
      // Find constructor examples
      const constructorsTopic = module.topics.find(topic => topic.title === 'Constructors');
      if (constructorsTopic?.examples) {
        const newCodeExamples: Record<string, string> = {...codeExamples};
        
        constructorsTopic.examples.forEach(example => {
          if (example.language && example.code) {
            const lang = example.language.toLowerCase();
            if (lang === 'typescript' || lang === 'javascript' || lang === 'python') {
              newCodeExamples[lang] = example.code;
            }
          }
        });
        
        setCodeExamples(newCodeExamples);
      }
    }
  }, [module]);
  
  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">Loading module content...</p>
        </div>
      </div>
    );
  }
  
  // Error state
  if (error || !module) {
    return (
      <div className="min-h-screen py-10">
        <div className="container-custom">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">Error Loading Content</h2>
            <p className="mb-4">{error || "Module content could not be loaded"}</p>
            <Link href="/" className="btn-primary px-4 py-2">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  // Get topics by title for easy access
  const getTopicByTitle = (title: string): Topic | undefined => {
    return module.topics.find(topic => topic.title === title);
  };
  
  const whatIsOOPTopic = getTopicByTitle('What is OOP?');
  const classesObjectsTopic = getTopicByTitle('Objects and Classes');
  const constructorsTopic = getTopicByTitle('Constructors');
  const attributesTopic = getTopicByTitle('Attributes (Properties/Fields)');
  const methodsTopic = getTopicByTitle('Methods (Behaviors)');
  
  // Find examples for specific language
  const getExample = (topicExamples: Example[] | undefined, language: string): Example | undefined => {
    if (!topicExamples) return undefined;
    return topicExamples.find(example => 
      example.language?.toLowerCase() === language.toLowerCase()
    );
  };
  
  // Generate IDs for section anchors
  const getSectionId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[()\/]/g, '');
  };
  
  // Default code examples if none are found in JSON
  const defaultCodeExamples = {
    typescript: `// Class definition - The blueprint
class Car {
  // Properties
  make: string;
  model: string;
  year: number;
  
  // Constructor
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Method
  getDescription(): string {
    return \`This is a \${this.year} \${this.make} \${this.model}.\`;
  }
}

// Object instantiation - Creating actual cars from the blueprint
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2022);

console.log(car1.getDescription()); // This is a 2020 Toyota Corolla.
console.log(car2.getDescription()); // This is a 2022 Honda Civic.`,
    
    javascript: `// Class definition - The blueprint
class Car {
  // Constructor
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Method
  getDescription() {
    return \`This is a \${this.year} \${this.make} \${this.model}.\`;
  }
}

// Object instantiation - Creating actual cars from the blueprint
const car1 = new Car('Toyota', 'Corolla', 2020);
const car2 = new Car('Honda', 'Civic', 2022);

console.log(car1.getDescription()); // This is a 2020 Toyota Corolla.
console.log(car2.getDescription()); // This is a 2022 Honda Civic.`,
    
    python: `# Class definition - The blueprint
class Car:
    # Constructor (initializer in Python)
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    
    # Method
    def get_description(self):
        return f"This is a {self.year} {self.make} {self.model}."

# Object instantiation - Creating actual cars from the blueprint
car1 = Car('Toyota', 'Corolla', 2020)
car2 = Car('Honda', 'Civic', 2022)

print(car1.get_description())  # This is a 2020 Toyota Corolla.
print(car2.get_description())  # This is a 2022 Honda Civic.`
  };
  
  return (
    <div className="min-h-screen py-10">
      <div className="container-custom">
        {/* Module Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">{module.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {module.description}
          </p>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-between mb-10">
          <Link href="/" className="btn-outline px-4 py-2">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
              Back to Home
            </span>
          </Link>
          <Link href="/module2_encapsulation" className="btn-primary px-4 py-2">
            <span className="flex items-center">
              Next Module: Encapsulation
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
        
        {/* Module Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-4">In This Module</h3>
              <ul className="space-y-3">
                {module.topics.map((topic, index) => (
                  <li key={index}>
                    <a href={`#${getSectionId(topic.title)}`} className="flex items-center text-primary hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {topic.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#demo-section" className="flex items-center text-primary hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Interactive Demo
                  </a>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-bold mb-3">Need Help?</h4>
                <a 
                  href={`https://api.whatsapp.com/send/?phone=${content?.authorInfo.whatsapp}&text&type=phone_number&app_absent=0`}
                  className="btn-whatsapp pulse-effect w-full" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4 mr-2">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                    Get Personalized Help
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction Section */}
            <section id={getSectionId(whatIsOOPTopic?.title || "what-is-oop")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What is Object-Oriented Programming?</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {whatIsOOPTopic?.description || ""}
                </p>
                {whatIsOOPTopic?.advantages && (
                  <>
                    <p className="mb-4">
                      Key advantages of OOP include:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      {whatIsOOPTopic.advantages.map((advantage, idx) => (
                        <li key={idx}>{advantage}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </section>
            
            {/* Classes vs Objects Section */}
            <section id={getSectionId(classesObjectsTopic?.title || "objects-and-classes")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Classes and Objects</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {classesObjectsTopic?.description || ""}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Class</h3>
                    <p className="mb-4">A blueprint or template that defines the structure for creating objects.</p>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                      <p className="font-mono text-sm">Think of a class like a blueprint for a house. It specifies what properties and behaviors the house will have, but it's not a house itself.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-3">Object</h3>
                    <p className="mb-4">An instance of a class with its own state and behavior.</p>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                      <p className="font-mono text-sm">Objects are like actual houses built from the blueprint. Each house has the same general structure but with its own specific characteristics.</p>
                    </div>
                  </div>
                </div>
                
                {classesObjectsTopic?.examples && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Examples</h3>
                    {classesObjectsTopic.examples.map((example, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-bold text-primary">{example.concept || ""}</h4>
                        <p>{example.explanation || ""}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">Class vs Object: Code Example</h3>
                <div className="tabs mb-4">
                  <button 
                    className={`tab ${activeTab === 'typescript' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('typescript')}
                  >
                    TypeScript
                  </button>
                  <button 
                    className={`tab ${activeTab === 'javascript' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('javascript')}
                  >
                    JavaScript
                  </button>
                  <button 
                    className={`tab ${activeTab === 'python' ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab('python')}
                  >
                    Python
                  </button>
                </div>
                
                {activeTab === 'typescript' && (
                  <div className="code-block">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                      <code>{codeExamples.typescript || defaultCodeExamples.typescript}</code>
                    </pre>
                  </div>
                )}
                
                {activeTab === 'javascript' && (
                  <div className="code-block">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                      <code>{codeExamples.javascript || defaultCodeExamples.javascript}</code>
                    </pre>
                  </div>
                )}
                
                {activeTab === 'python' && (
                  <div className="code-block">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                      <code>{codeExamples.python || defaultCodeExamples.python}</code>
                    </pre>
                  </div>
                )}
              </div>
            </section>
            
            {/* Constructors Section */}
            <section id={getSectionId(constructorsTopic?.title || "constructors")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Constructors</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {constructorsTopic?.description || ""}
                </p>
                
                {constructorsTopic?.examples && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Constructor Examples</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {constructorsTopic.examples.map((example, idx) => (
                        <div key={idx} className="code-block">
                          <h4 className="font-bold text-primary mb-2">{example.language || ""}</h4>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{example.code || ""}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
            
            {/* Properties Section */}
            <section id={getSectionId(attributesTopic?.title || "attributes-properties-fields")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Properties and Attributes</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {attributesTopic?.description || ""}
                </p>
                
                {attributesTopic?.examples && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Types of Attributes</h3>
                    {attributesTopic.examples.map((example, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-bold text-primary">{example.concept || ""}</h4>
                        <p>{example.explanation || ""}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
            
            {/* Methods Section */}
            <section id={getSectionId(methodsTopic?.title || "methods-behaviors")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Methods and Behaviors</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {methodsTopic?.description || ""}
                </p>
                
                {methodsTopic?.methodTypes && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Types of Methods</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {methodsTopic.methodTypes.map((methodType, idx) => (
                        <div key={idx} className="p-4 bg-surface-light dark:bg-surface-dark rounded-lg">
                          <h4 className="font-bold text-primary mb-2">{methodType.type || ""}</h4>
                          <p className="text-sm">{methodType.description || ""}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
            
            {/* Demo Section */}
            <section id="demo-section" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{module.demoSection.title}</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {module.demoSection.description}
                </p>
                
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold mb-3">Interactive Tools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.demoSection.interactiveElements.map((element, idx) => (
                      <div key={idx} className="p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-primary">
                        <h4 className="font-bold text-primary mb-2">{element.type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h4>
                        <p className="text-sm">{element.description}</p>
                        <button className="mt-4 btn-primary w-full py-2">
                          Launch Tool
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                {module.demoSection.sampleProjects && (
                  <div>
                    <h3 className="text-xl font-bold mb-3">Sample Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.demoSection.sampleProjects.map((project, idx) => (
                        <div key={idx} className="p-4 bg-surface-light dark:bg-surface-dark rounded-lg">
                          <h4 className="font-bold text-secondary mb-2">{project.title}</h4>
                          <p className="text-sm">{project.description}</p>
                          <button className="mt-4 btn-outline w-full py-2">
                            Try This Project
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
            
            {/* Next Steps */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">Ready for the Next Module?</h3>
              <p className="mb-4">Continue your OOP journey by learning about encapsulation - the principle of bundling data with methods that operate on that data.</p>
              <Link href="/module2_encapsulation" className="btn-primary px-6 py-3 inline-block">
                Next: Encapsulation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}