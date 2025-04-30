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
  
  // State for Class Builder tool
  const [classDefinition, setClassDefinition] = useState<string>(`class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }
}`);
  const [objectProperties, setObjectProperties] = useState<{[key: string]: string}>({
    name: 'John',
    age: '30'
  });
  const [objectInstances, setObjectInstances] = useState<{id: number, properties: {[key: string]: any}}[]>([]);
  const [objectResults, setObjectResults] = useState<string[]>([]);
  const [methodToCall, setMethodToCall] = useState<string>('greet');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isCodeCorrect, setIsCodeCorrect] = useState<boolean>(true);

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
  
  // Extract the properties and methods from the class definition
  const extractClassStructure = () => {
    try {
      // Extract property names from the class definition
      const propertyRegex = /(\w+)\s*:\s*(string|number|boolean|any)/g;
      const properties: string[] = [];
      let match;
      
      // Find all property declarations
      while ((match = propertyRegex.exec(classDefinition)) !== null) {
        properties.push(match[1]);
      }
      
      // If we have new properties that aren't in the objectProperties state
      const updatedProperties = { ...objectProperties };
      let hasNewProperties = false;
      
      for (const prop of properties) {
        if (!(prop in objectProperties)) {
          updatedProperties[prop] = '';
          hasNewProperties = true;
        }
      }
      
      // Update the state if we have new properties
      if (hasNewProperties) {
        setObjectProperties(updatedProperties);
      }
      
      return {
        properties,
        methods: getAvailableMethods()
      };
    } catch (error) {
      console.error('Error extracting class structure:', error);
      return { properties: [], methods: [] };
    }
  };

  // Function to create a new object instance (simulated)
  const createObject = () => {
    try {
      setErrorMessage('');
      
      // Create an object based on the properties and their values
      const propertyValues: {[key: string]: any} = {};
      
      // Convert property values to appropriate types
      for (const [key, value] of Object.entries(objectProperties)) {
        // Convert to number if possible
        if (!isNaN(Number(value)) && value.trim() !== '') {
          propertyValues[key] = Number(value);
        } else {
          propertyValues[key] = value;
        }
      }
      
      // Create a new instance ID
      const instanceId = objectInstances.length + 1;
      
      // Add to instances array (we're simulating objects rather than actually evaluating the class)
      const newInstances = [...objectInstances, { 
        id: instanceId, 
        properties: propertyValues 
      }];
      setObjectInstances(newInstances);
      
      // Update results
      const newResults = [...objectResults];
      newResults.push(`Created new Person: ${JSON.stringify(propertyValues, null, 2)}`);
      setObjectResults(newResults);
    } catch (err) {
      console.error('Error creating object:', err);
      setErrorMessage(`Error creating object: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Function to call a method on an object (simulated)
  const callMethod = (index: number) => {
    try {
      setErrorMessage('');
      const instance = objectInstances[index];
      
      if (!instance) {
        throw new Error(`Object not found`);
      }
      
      let result = '';
      
      // Simulate method behavior based on the method name
      if (methodToCall === 'greet') {
        const { name, age } = instance.properties;
        result = `Hello, my name is ${name} and I am ${age} years old.`;
      } else if (methodToCall === 'getFullInfo') {
        result = `Full information: ${JSON.stringify(instance.properties)}`;
      } else if (methodToCall === 'calculateBirthYear') {
        const currentYear = new Date().getFullYear();
        const { age } = instance.properties;
        result = `Birth year: ${currentYear - Number(age)}`;
      } else {
        // Generic response for other methods
        result = `Method executed on Person with properties: ${JSON.stringify(instance.properties)}`;
      }
      
      // Update results
      const newResults = [...objectResults];
      newResults.push(`Called ${methodToCall}() on Person ${index + 1}: ${result}`);
      setObjectResults(newResults);
    } catch (err) {
      console.error('Error calling method:', err);
      setErrorMessage(`Error calling method: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Clear the console
  const clearConsole = () => {
    setObjectResults([]);
    setErrorMessage('');
  };
  
  // Extract available methods from class definition
  const getAvailableMethods = (): string[] => {
    try {
      const methodRegex = /(\w+)\s*\([^)]*\)\s*{/g;
      let methods: string[] = [];
      let match;
      
      // Find all method declarations in the class definition
      while ((match = methodRegex.exec(classDefinition)) !== null) {
        const methodName = match[1];
        if (methodName !== 'constructor') {
          methods.push(methodName);
        }
      }
      
      return methods;
    } catch (err) {
      return ['greet']; // Default method
    }
  };
  
  // Check if the code has syntax errors
  const checkCodeSyntax = (code: string) => {
    // A very basic check - just see if it has class and constructor
    const hasClass = code.includes('class Person');
    const hasConstructor = code.includes('constructor');
    
    return hasClass && hasConstructor;
  };
  
  // Update class definition and check syntax
  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setClassDefinition(newCode);
    setIsCodeCorrect(checkCodeSyntax(newCode));
    
    // Extract the class structure to update UI
    if (checkCodeSyntax(newCode)) {
      extractClassStructure();
    }
  };

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
              
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-gray-200 dark:border-gray-700">
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
              <h2 className="text-2xl font-bold mb-4">Interactive Class Builder</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  Practice creating classes and objects with this interactive tool. Define your class, create instances, and call methods to see them in action.
                </p>
                
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-6">
                  {/* Class Definition */}
                  <h3 className="text-xl font-bold mb-3">1. Define Your Class</h3>
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">Class Code (TypeScript)</label>
                    <div className={`relative border ${isCodeCorrect ? 'border-gray-300 dark:border-gray-600' : 'border-red-500'} rounded-md`}>
                      <textarea 
                        className="w-full h-72 p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-md"
                        value={classDefinition}
                        onChange={handleCodeChange}
                        spellCheck={false}
                      />
                      {!isCodeCorrect && (
                        <div className="absolute top-2 right-2">
                          <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs">
                            Syntax Error
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Define a TypeScript class named "Person" with properties and methods.
                      </p>
                      <button 
                        onClick={() => extractClassStructure()}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded hover:bg-primary/20 transition"
                      >
                        Update Properties
                      </button>
                    </div>
                  </div>
                  
                  {/* Object Creation */}
                  <h3 className="text-xl font-bold mb-3">2. Create Object Instances</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {Object.keys(objectProperties).map((key) => (
                      <div key={key} className="mb-4">
                        <label className="block mb-2 font-medium">{key}</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                          value={objectProperties[key]}
                          onChange={(e) => {
                            const newProps = {...objectProperties};
                            newProps[key] = e.target.value;
                            setObjectProperties(newProps);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={createObject}
                    className={`btn-primary px-4 py-2 mb-6 ${!isCodeCorrect ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!isCodeCorrect}
                  >
                    Create New Person Object
                  </button>
                  
                  {/* Method Calls */}
                  <h3 className="text-xl font-bold mb-3">3. Call Methods on Your Objects</h3>
                  
                  {objectInstances.length > 0 ? (
                    <div className="mb-6">
                      <label className="block mb-2 font-medium">Method to Call</label>
                      <div className="flex items-center gap-4 mb-4">
                        <select 
                          className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                          value={methodToCall}
                          onChange={(e) => setMethodToCall(e.target.value)}
                        >
                          {getAvailableMethods().length > 0 ? (
                            getAvailableMethods().map((method) => (
                              <option key={method} value={method}>{method}</option>
                            ))
                          ) : (
                            <option value="greet">greet</option>
                          )}
                        </select>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {objectInstances.map((instance, index) => (
                          <div key={index} className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                            <h4 className="font-bold text-primary mb-2">Person {instance.id}</h4>
                            <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs mb-3 max-h-24 overflow-y-auto">
                              {JSON.stringify(instance.properties, null, 2)}
                            </pre>
                            <button 
                              onClick={() => callMethod(index)}
                              className="btn-outline w-full py-1.5 text-sm"
                            >
                              Call {methodToCall}()
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6">
                      <p>No objects created yet. Define your class and create some objects first!</p>
                    </div>
                  )}
                  
                  {/* Console Output */}
                  <h3 className="text-xl font-bold mb-3">4. Console Output</h3>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md h-48 overflow-y-auto font-mono text-sm">
                      {objectResults.length > 0 ? (
                        objectResults.map((result, index) => (
                          <div key={index} className="mb-1">
                            <span className="text-green-400">&gt; </span>
                            {result}
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
                      <li>A class defines the structure (properties) and behaviors (methods) of objects.</li>
                      <li>The constructor is a special method that initializes new objects.</li>
                      <li>Objects are instances of classes with their own state but shared behaviors.</li>
                      <li>Methods can access and manipulate the object's properties using 'this'.</li>
                      <li>Try adding a new method like <code>calculateBirthYear()</code> that returns the birth year!</li>
                    </ul>
                  </div>
                </div>
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