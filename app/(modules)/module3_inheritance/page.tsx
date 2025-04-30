'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useOOPContent } from '../../../lib/contexts/OOPContentContext';
import { Topic, Example } from '../../../lib/types';

export default function Module3Page() {
  const [activeTab, setActiveTab] = useState('typescript');
  const { content, loading, error, getModuleBySlug, isReady } = useOOPContent();
  const module = getModuleBySlug('module3_inheritance');
  
  // Extract topic references to fix TypeScript errors
  const baseAndDerivedTopic = module?.topics.find(topic => topic.title === 'Base (Parent) and Derived (Child) Classes');
  const superKeywordTopic = module?.topics.find(topic => topic.title === 'The super Keyword');
  const methodOverridingTopic = module?.topics.find(topic => topic.title === 'Method Overriding');
  const inheritanceHierarchiesTopic = module?.topics.find(topic => topic.title === 'Inheritance Hierarchies');

  const [codeExamples, setCodeExamples] = useState<Record<string, string>>({
    typescript: '',
    javascript: '',
    python: '',
    java: ''
  });
  
  // State for Inheritance Simulator
  const [baseClass, setBaseClass] = useState<string>(`class Animal {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  speak(): void {
    console.log(\`\${this.name} makes a sound\`);
  }
  
  move(distance: number): void {
    console.log(\`\${this.name} moved \${distance} meters\`);
  }
}`);

  const [derivedClass, setDerivedClass] = useState<string>(`class Dog extends Animal {
  private breed: string;
  
  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }
  
  speak(): void {
    console.log(\`\${this.name} barks\`);
  }
  
  fetch(): void {
    console.log(\`\${this.name} fetches the ball\`);
  }
  
  getBreed(): string {
    return this.breed;
  }
}`);
  
  const [baseObjects, setBaseObjects] = useState<any[]>([]);
  const [derivedObjects, setDerivedObjects] = useState<any[]>([]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  
  // Base Class Form
  const [baseObjectName, setBaseObjectName] = useState<string>('genericAnimal');
  
  // Derived Class Form 
  const [derivedObjectName, setDerivedObjectName] = useState<string>('fido');
  const [derivedObjectBreed, setDerivedObjectBreed] = useState<string>('Labrador');
  // Extract code examples once module data is loaded
  useEffect(() => {
    if (module) {
      // Find base and derived class examples
      if (baseAndDerivedTopic?.examples) {
        const newCodeExamples: Record<string, string> = {...codeExamples};
        
        baseAndDerivedTopic.examples.forEach(example => {
          if (example.language && example.code) {
            const lang = example.language.toLowerCase();
            if (lang === 'typescript' || lang === 'javascript' || lang === 'python' || lang === 'java') {
              newCodeExamples[lang] = example.code;
            }
          }
        });
        
        setCodeExamples(newCodeExamples);
      }
    }
  }, [module]);
  
  // Create a new base class instance
  const createBaseObject = () => {
    try {
      setErrorMessage('');
      
      // Simulate creating an Animal instance
      const newBaseObject = {
        name: baseObjectName,
        speak: () => {
          const message = `${baseObjectName} makes a sound`;
          setConsoleOutput(prev => [...prev, message]);
          return message;
        },
        move: (distance: number) => {
          const message = `${baseObjectName} moved ${distance} meters`;
          setConsoleOutput(prev => [...prev, message]);
          return message;
        }
      };
      
      setBaseObjects(prev => [...prev, newBaseObject]);
      setConsoleOutput(prev => [...prev, `Created new Animal: ${baseObjectName}`]);
    } catch (err) {
      console.error('Error creating base object:', err);
      setErrorMessage(`Error creating base object: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Create a new derived class instance
  const createDerivedObject = () => {
    try {
      setErrorMessage('');
      
      // Simulate creating a Dog instance
      const newDerivedObject = {
        name: derivedObjectName,
        breed: derivedObjectBreed,
        speak: () => {
          const message = `${derivedObjectName} barks`;
          setConsoleOutput(prev => [...prev, message]);
          return message;
        },
        move: (distance: number) => {
          const message = `${derivedObjectName} moved ${distance} meters`;
          setConsoleOutput(prev => [...prev, message]);
          return message;
        },
        fetch: () => {
          const message = `${derivedObjectName} fetches the ball`;
          setConsoleOutput(prev => [...prev, message]);
          return message;
        },
        getBreed: () => {
          return derivedObjectBreed;
        }
      };
      
      setDerivedObjects(prev => [...prev, newDerivedObject]);
      setConsoleOutput(prev => [...prev, `Created new Dog: ${derivedObjectName} (${derivedObjectBreed})`]);
    } catch (err) {
      console.error('Error creating derived object:', err);
      setErrorMessage(`Error creating derived object: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  // Call a method on a base object
  const callBaseMethod = (index: number, method: string, params: any[] = []) => {
    try {
      setErrorMessage('');
      const object = baseObjects[index];
      
      if (!object || !(method in object)) {
        throw new Error(`Method "${method}" not found on Animal object`);
      }
      
      // Call the method
      object[method](...params);
    } catch (err) {
      console.error('Error calling method:', err);
      setErrorMessage(`Error calling method: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Call a method on a derived object
  const callDerivedMethod = (index: number, method: string, params: any[] = []) => {
    try {
      setErrorMessage('');
      const object = derivedObjects[index];
      
      if (!object || !(method in object)) {
        throw new Error(`Method "${method}" not found on Dog object`);
      }
      
      // Call the method with parameters
      if (method === 'getBreed') {
        const breed = object[method](...params);
        setConsoleOutput(prev => [...prev, `${object.name}'s breed is ${breed}`]);
      } else {
        object[method](...params);
      }
    } catch (err) {
      console.error('Error calling method:', err);
      setErrorMessage(`Error calling method: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Clear console output
  const clearConsole = () => {
    setConsoleOutput([]);
    setErrorMessage('');
  };
  
  // Generate IDs for section anchors
  const getSectionId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[()\/]/g, '');
  };
  return (
    <div className="min-h-screen py-10">
      <div className="container-custom">
        {/* Module Header */}
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : !module ? (
          <div className="text-center p-8 bg-yellow-50 rounded-lg border border-yellow-200 mt-4">
            <p className="text-yellow-600">Module content is loading or not found. Please wait or check the URL.</p>
          </div>
        ) : (
          <>
            <div className="mb-12 text-center">
              <h1 className="mb-4">{module.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {module.description}
              </p>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between mb-10">
              <Link href="/module2_encapsulation" className="btn-outline px-4 py-2">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                  Previous: Encapsulation
                </span>
              </Link>
              <Link href="/module4_polymorphism" className="btn-primary px-4 py-2">
                <span className="flex items-center">
                  Next Module: Polymorphism
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
                      <a href="#inheritance-demo" className="flex items-center text-primary hover:underline">
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
                {/* Base and Derived Classes Section */}
                <section id={getSectionId(baseAndDerivedTopic?.title || "base-derived-classes")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Base and Derived Classes</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {baseAndDerivedTopic?.description || ""}
                    </p>
                    
                    {baseAndDerivedTopic?.benefits && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Benefits of Inheritance</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {baseAndDerivedTopic?.benefits?.map((benefit: string, idx: number) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Inheritance Example</h3>
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
                        <button 
                          className={`tab ${activeTab === 'java' ? 'tab-active' : ''}`}
                          onClick={() => setActiveTab('java')}
                        >
                          Java
                        </button>
                      </div>
                      
                      {activeTab === 'typescript' && (
                        <div className="code-block">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{codeExamples.typescript || "class Animal {\n  constructor(protected name: string) {}\n  \n  speak(): void {\n    console.log(`${this.name} makes a sound`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name: string) {\n    super(name);\n  }\n  \n  speak(): void {\n    console.log(`${this.name} barks`);\n  }\n}"}</code>
                          </pre>
                        </div>
                      )}
                      
                      {activeTab === 'javascript' && (
                        <div className="code-block">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{codeExamples.javascript || "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  \n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name) {\n    super(name);\n  }\n  \n  speak() {\n    console.log(`${this.name} barks`);\n  }\n}"}</code>
                          </pre>
                        </div>
                      )}
                      
                      {activeTab === 'python' && (
                        <div className="code-block">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{codeExamples.python || "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        print(f\"{self.name} makes a sound\")\n\nclass Dog(Animal):\n    def __init__(self, name):\n        super().__init__(name)\n    \n    def speak(self):\n        print(f\"{self.name} barks\")"}</code>
                          </pre>
                        </div>
                      )}
                      
                      {activeTab === 'java' && (
                        <div className="code-block">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{codeExamples.java || "class Animal {\n    protected String name;\n    \n    public Animal(String name) {\n        this.name = name;\n    }\n    \n    public void speak() {\n        System.out.println(name + \" makes a sound\");\n    }\n}\n\nclass Dog extends Animal {\n    public Dog(String name) {\n        super(name);\n    }\n    \n    @Override\n    public void speak() {\n        System.out.println(name + \" barks\");\n    }\n}"}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
                
                {/* Super Keyword Section */}
                <section id={getSectionId(superKeywordTopic?.title || "super-keyword")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">The super Keyword</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {superKeywordTopic?.description || ""}
                    </p>
                    
                    {superKeywordTopic?.usages && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        {superKeywordTopic?.usages?.map((usage: { scenario: string; purpose: string }, idx: number) => (
                          <div key={idx} className="bg-surface-light dark:bg-surface-dark p-5 rounded-lg">
                            <h3 className="text-xl font-bold text-primary mb-2">{usage.scenario}</h3>
                            <p>{usage.purpose}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
                
                {/* Method Overriding Section */}
                <section id={getSectionId(methodOverridingTopic?.title || "method-overriding")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Method Overriding</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {methodOverridingTopic?.description || ""}
                    </p>
                    
                    {methodOverridingTopic?.principles && (
                      <div className="mt-6">
                        <h3 className="text-xl font-bold mb-3">Key Principles</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {methodOverridingTopic?.principles?.map((principle: string, idx: number) => (
                            <li key={idx}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
                
                {/* Inheritance Hierarchies Section */}
                <section id={getSectionId(inheritanceHierarchiesTopic?.title || "inheritance-hierarchies")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Inheritance Hierarchies</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {inheritanceHierarchiesTopic?.description || ""}
                    </p>
                    
                    {inheritanceHierarchiesTopic?.types && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {inheritanceHierarchiesTopic?.types?.map((type: { type: string; description: string }, idx: number) => (
                          <div key={idx} className="bg-surface-light dark:bg-surface-dark p-5 rounded-lg">
                            <h3 className="text-xl font-bold text-primary mb-2">{type.type}</h3>
                            <p>{type.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
                
                {/* Interactive Inheritance Simulator */}
                <section id="inheritance-demo" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Interactive Inheritance Simulator</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      Experience inheritance in action with this interactive tool. Create instances of base and derived classes, call methods, and observe inheritance and method overriding in practice.
                    </p>
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-6">
                      {/* Class Definitions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-xl font-bold mb-3">Base Class: Animal</h3>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm h-64">
                            <code>{baseClass}</code>
                          </pre>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">Derived Class: Dog</h3>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm h-64">
                            <code>{derivedClass}</code>
                          </pre>
                        </div>
                      </div>
                      
                      {/* Object Creation Section */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Base Class Object Creation */}
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h3 className="text-lg font-bold mb-3">Create Animal Object</h3>
                          <div className="mb-4">
                            <label className="block mb-2 font-medium">Name</label>
                            <input 
                              type="text" 
                              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                              value={baseObjectName}
                              onChange={(e) => setBaseObjectName(e.target.value)}
                            />
                          </div>
                          <button 
                            onClick={createBaseObject}
                            className="btn-primary w-full py-2"
                          >
                            Create Animal
                          </button>
                        </div>
                        
                        {/* Derived Class Object Creation */}
                        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                          <h3 className="text-lg font-bold mb-3">Create Dog Object</h3>
                          <div className="mb-4">
                            <label className="block mb-2 font-medium">Name</label>
                            <input 
                              type="text" 
                              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                              value={derivedObjectName}
                              onChange={(e) => setDerivedObjectName(e.target.value)}
                            />
                          </div>
                          <div className="mb-4">
                            <label className="block mb-2 font-medium">Breed</label>
                            <input 
                              type="text" 
                              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                              value={derivedObjectBreed}
                              onChange={(e) => setDerivedObjectBreed(e.target.value)}
                            />
                          </div>
                          <button 
                            onClick={createDerivedObject}
                            className="btn-primary w-full py-2"
                          >
                            Create Dog
                          </button>
                        </div>
                      </div>
                      
                      {/* Object Lists */}
                      <h3 className="text-xl font-bold mb-3">Interact with Objects</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Base Objects List */}
                        <div>
                          <h4 className="font-bold text-primary mb-3">Animal Objects</h4>
                          {baseObjects.length > 0 ? (
                            <div className="space-y-4">
                              {baseObjects.map((animal, index) => (
                                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                  <p className="font-medium mb-2">Animal: {animal.name}</p>
                                  <div className="grid grid-cols-2 gap-2">
                                    <button 
                                      onClick={() => callBaseMethod(index, 'speak')}
                                      className="btn-outline text-sm py-1"
                                    >
                                      Call speak()
                                    </button>
                                    <button 
                                      onClick={() => callBaseMethod(index, 'move', [5])}
                                      className="btn-outline text-sm py-1"
                                    >
                                      Call move(5)
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg text-center">
                              No Animal objects created yet
                            </div>
                          )}
                        </div>
                        
                        {/* Derived Objects List */}
                        <div>
                          <h4 className="font-bold text-secondary mb-3">Dog Objects</h4>
                          {derivedObjects.length > 0 ? (
                            <div className="space-y-4">
                              {derivedObjects.map((dog, index) => (
                                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                  <p className="font-medium mb-2">Dog: {dog.name}</p>
                                  <div className="grid grid-cols-2 gap-2 mb-2">
                                    <button 
                                      onClick={() => callDerivedMethod(index, 'speak')}
                                      className="btn-outline text-sm py-1"
                                    >
                                      Call speak()
                                    </button>
                                    <button 
                                      onClick={() => callDerivedMethod(index, 'move', [10])}
                                      className="btn-outline text-sm py-1"
                                    >
                                      Call move(10)
                                    </button>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    <button 
                                      onClick={() => callDerivedMethod(index, 'fetch')}
                                      className="btn-outline text-sm py-1"
                                    >
                                      Call fetch()
                                    </button>
                                    <button 
                                      onClick={() => callDerivedMethod(index, 'getBreed')}
                                      className="btn-outline text-sm py-1"
                                    >
                                      Call getBreed()
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg text-center">
                              No Dog objects created yet
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Console Output */}
                      <h3 className="text-xl font-bold mb-3">Console Output</h3>
                      <div className="relative">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md h-64 overflow-y-auto font-mono text-sm">
                          {consoleOutput.length > 0 ? (
                            consoleOutput.map((line, index) => (
                              <div key={index} className="mb-1">
                                {line.includes('barks') || line.includes('fetches') ? (
                                  <span className="text-green-400">&gt; {line}</span>
                                ) : line.includes('moved') ? (
                                  <span className="text-blue-400">&gt; {line}</span>
                                ) : line.includes('Created') ? (
                                  <span className="text-yellow-400">&gt; {line}</span>
                                ) : (
                                  <span>&gt; {line}</span>
                                )}
                              </div>
                            ))
                          ) : (
                            <span className="text-gray-500">// Console output will appear here</span>
                          )}
                          {errorMessage && (
                            <div className="text-red-400 mt-2">
                              <span>Error: </span>
                              {errorMessage}
                            </div>
                          )}
                        </pre>
                        <button 
                          onClick={clearConsole}
                          className="absolute top-2 right-2 text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                        >
                          Clear
                        </button>
                      </div>
                      
                      {/* Learning Insights */}
                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Learning Insights</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>The derived class (Dog) inherits methods from the base class (Animal) like move().</li>
                          <li>The speak() method in Dog overrides the one in Animal, demonstrating method overriding.</li>
                          <li>Dog extends Animal's functionality with additional methods like fetch() and getBreed().</li>
                          <li>The super keyword is used in the Dog constructor to initialize the name property from the Animal class.</li>
                          <li>Inheritance creates an "is-a" relationship - a Dog "is an" Animal, so it can do everything an Animal can do (and more).</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Next Steps */}
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-2">Ready for the Next Module?</h3>
                  <p className="mb-4">Continue your OOP journey by learning about polymorphism - the ability to present the same interface for different underlying forms.</p>
                  <Link href="/module4_polymorphism" className="btn-primary px-6 py-3 inline-block">
                    Next: Polymorphism →
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
