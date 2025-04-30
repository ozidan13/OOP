'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useOOPContent } from '../../../lib/contexts/OOPContentContext';
import { Topic, Example } from '../../../lib/types';

export default function Module4Page() {
  const [activeTab, setActiveTab] = useState('typescript');
  const { content, loading, error, getModuleBySlug, isReady } = useOOPContent();
  const module = getModuleBySlug('module4_polymorphism');
  
  // Extract topic references for easier access
  const methodOverloadingTopic = module?.topics.find(topic => topic.title === 'Method Overloading');
  const methodOverridingTopic = module?.topics.find(topic => topic.title === 'Method Overriding (runtime polymorphism)');
  const abstractClassesTopic = module?.topics.find(topic => topic.title === 'Abstract Classes and Methods');
  const interfacesTopic = module?.topics.find(topic => topic.title === 'Interfaces');

  const [codeExamples, setCodeExamples] = useState<Record<string, string>>({
    typescript: '',
    javascript: '',
    python: '',
    java: ''
  });
  
  // State for Polymorphism Simulator
  const [shapeInterface, setShapeInterface] = useState<string>(`interface Shape {
  getArea(): number;
  getPerimeter(): number;
  describe(): string;
}`);

  const [circleClass, setCircleClass] = useState<string>(`class Circle implements Shape {
  private radius: number;
  
  constructor(radius: number) {
    this.radius = radius;
  }
  
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
  
  describe(): string {
    return \`A circle with radius \${this.radius}\`;
  }
}`);

  const [rectangleClass, setRectangleClass] = useState<string>(`class Rectangle implements Shape {
  private width: number;
  private height: number;
  
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  
  getArea(): number {
    return this.width * this.height;
  }
  
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
  
  describe(): string {
    return \`A rectangle with width \${this.width} and height \${this.height}\`;
  }
}`);

  const [triangleClass, setTriangleClass] = useState<string>(`class Triangle implements Shape {
  private a: number;
  private b: number;
  private c: number;
  
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  getArea(): number {
    // Using Heron's formula
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
  
  getPerimeter(): number {
    return this.a + this.b + this.c;
  }
  
  describe(): string {
    return \`A triangle with sides \${this.a}, \${this.b}, and \${this.c}\`;
  }
}`);

  // Store for created objects
  const [shapes, setShapes] = useState<any[]>([]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  // Form states
  const [shapeType, setShapeType] = useState<string>('circle');
  
  // Circle parameters
  const [circleRadius, setCircleRadius] = useState<number>(5);
  
  // Rectangle parameters
  const [rectangleWidth, setRectangleWidth] = useState<number>(4);
  const [rectangleHeight, setRectangleHeight] = useState<number>(6);
  
  // Triangle parameters
  const [triangleSideA, setTriangleSideA] = useState<number>(3);
  const [triangleSideB, setTriangleSideB] = useState<number>(4);
  const [triangleSideC, setTriangleSideC] = useState<number>(5);
  
  // Extract code examples once module data is loaded
  useEffect(() => {
    if (module) {
      // Find relevant examples for each section
      const fetchExamples = (topic: Topic | undefined) => {
        if (topic?.examples) {
          const newCodeExamples = {...codeExamples};
          
          topic.examples.forEach(example => {
            if (example.language && example.code) {
              const lang = example.language.toLowerCase();
              if (lang === 'typescript' || lang === 'javascript' || lang === 'python' || lang === 'java') {
                newCodeExamples[lang] = example.code;
              }
            }
          });
          
          return newCodeExamples;
        }
        return null;
      };
      
      // Try to get examples from each topic
      const interfaceExamples = fetchExamples(interfacesTopic);
      
      if (interfaceExamples) {
        setCodeExamples(interfaceExamples);
      }
    }
  }, [module]);
  
  // Create a new shape based on the selected type
  const createShape = () => {
    try {
      setErrorMessage('');
      
      let newShape;
      let description = '';
      
      // Simulate creating the appropriate shape
      if (shapeType === 'circle') {
        newShape = {
          type: 'Circle',
          params: { radius: circleRadius },
          getArea: () => {
            const area = Math.PI * circleRadius * circleRadius;
            return area.toFixed(2);
          },
          getPerimeter: () => {
            const perimeter = 2 * Math.PI * circleRadius;
            return perimeter.toFixed(2);
          },
          describe: () => {
            return `A circle with radius ${circleRadius}`;
          }
        };
        description = `Circle(radius: ${circleRadius})`;
      } else if (shapeType === 'rectangle') {
        newShape = {
          type: 'Rectangle',
          params: { width: rectangleWidth, height: rectangleHeight },
          getArea: () => {
            const area = rectangleWidth * rectangleHeight;
            return area.toFixed(2);
          },
          getPerimeter: () => {
            const perimeter = 2 * (rectangleWidth + rectangleHeight);
            return perimeter.toFixed(2);
          },
          describe: () => {
            return `A rectangle with width ${rectangleWidth} and height ${rectangleHeight}`;
          }
        };
        description = `Rectangle(width: ${rectangleWidth}, height: ${rectangleHeight})`;
      } else if (shapeType === 'triangle') {
        newShape = {
          type: 'Triangle',
          params: { a: triangleSideA, b: triangleSideB, c: triangleSideC },
          getArea: () => {
            // Heron's formula
            const s = (triangleSideA + triangleSideB + triangleSideC) / 2;
            const area = Math.sqrt(s * (s - triangleSideA) * (s - triangleSideB) * (s - triangleSideC));
            return area.toFixed(2);
          },
          getPerimeter: () => {
            const perimeter = triangleSideA + triangleSideB + triangleSideC;
            return perimeter.toFixed(2);
          },
          describe: () => {
            return `A triangle with sides ${triangleSideA}, ${triangleSideB}, and ${triangleSideC}`;
          }
        };
        description = `Triangle(sides: ${triangleSideA}, ${triangleSideB}, ${triangleSideC})`;
      }
      
      setShapes(prev => [...prev, newShape]);
      setConsoleOutput(prev => [...prev, `Created new ${description}`]);
    } catch (err) {
      console.error('Error creating shape:', err);
      setErrorMessage(`Error creating shape: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  // Call a method on a shape object
  const callShapeMethod = (index: number, method: string) => {
    try {
      setErrorMessage('');
      const shape = shapes[index];
      
      if (!shape || !(method in shape)) {
        throw new Error(`Method "${method}" not found on shape`);
      }
      
      // Call the appropriate method and log the result
      const result = shape[method]();
      setConsoleOutput(prev => [...prev, `${shape.type}.${method}() → ${result}`]);
    } catch (err) {
      console.error('Error calling method:', err);
      setErrorMessage(`Error calling method: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Process all shapes with the same method (demonstrating polymorphism)
  const processAllShapes = (method: string) => {
    try {
      setErrorMessage('');
      
      if (shapes.length === 0) {
        setConsoleOutput(prev => [...prev, 'No shapes to process!']);
        return;
      }
      
      setConsoleOutput(prev => [...prev, `\n--- Processing all shapes with ${method}() ---`]);
      
      shapes.forEach((shape, index) => {
        try {
          if (!(method in shape)) {
            setConsoleOutput(prev => [...prev, `Shape at index ${index} does not have method ${method}()`]);
            return;
          }
          
          const result = shape[method]();
          setConsoleOutput(prev => [...prev, `${shape.type}.${method}() → ${result}`]);
        } catch (error) {
          setConsoleOutput(prev => [...prev, `Error processing shape at index ${index}: ${error}`]);
        }
      });
      
      setConsoleOutput(prev => [...prev, '--- Processing complete ---\n']);
    } catch (err) {
      console.error('Error processing shapes:', err);
      setErrorMessage(`Error processing shapes: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Clear console output
  const clearConsole = () => {
    setConsoleOutput([]);
    setErrorMessage('');
  };
  
  // Clear all shapes
  const clearShapes = () => {
    setShapes([]);
    setConsoleOutput(prev => [...prev, 'All shapes cleared']);
  };
  
  // Generate IDs for section anchors
  const getSectionId = (title: string): string => {
    return title?.toLowerCase().replace(/\s+/g, '-').replace(/[()\/]/g, '') || '';
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
              <Link href="/module3_inheritance" className="btn-outline px-4 py-2">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                  Previous: Inheritance
                </span>
              </Link>
              <Link href="/module5_abstraction" className="btn-primary px-4 py-2">
                <span className="flex items-center">
                  Next Module: Abstraction
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
                      <a href="#polymorphism-demo" className="flex items-center text-primary hover:underline">
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
                {/* Method Overloading Section */}
                <section id={getSectionId(methodOverloadingTopic?.title || "method-overloading")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Method Overloading</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {methodOverloadingTopic?.description || "Method overloading is a feature that allows a class to have multiple methods with the same name but different parameters. The compiler determines which method to call based on the arguments provided."}
                    </p>
                    
                    {methodOverloadingTopic?.characteristics && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {methodOverloadingTopic?.characteristics?.map((characteristic: string, idx: number) => (
                            <li key={idx}>{characteristic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Overloading Example</h3>
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
                            <code>{`class Calculator {
  // Method with two number parameters
  add(a: number, b: number): number {
    return a + b;
  }
  
  // Overloaded method with three number parameters
  add(a: number, b: number, c: number): number {
    return a + b + c;
  }
  
  // Overloaded method with string parameters
  add(a: string, b: string): string {
    return a + b;
  }
  
  // Note: TypeScript doesn't support true method overloading.
  // In practice, we use function overloads with a single implementation:
  /*
  add(a: number, b: number): number;
  add(a: number, b: number, c: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any, c?: any): any {
    if (typeof a === 'string') {
      return a + b;
    }
    if (c !== undefined) {
      return a + b + c;
    }
    return a + b;
  }
  */
}`}</code>
                          </pre>
                        </div>
                      )}
                      
                      {activeTab === 'javascript' && (
                        <div className="code-block">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{`class Calculator {
  // JavaScript doesn't support true method overloading.
  // When you define multiple methods with the same name,
  // the last one overwrites all others.
  
  // This is how we can simulate overloading in JavaScript:
  add(a, b, c) {
    // Check the arguments to determine behavior
    if (c !== undefined) {
      return a + b + c;
    } else if (typeof a === 'string') {
      return a + b;
    } else {
      return a + b;
    }
  }
  
  // Alternative approach using rest parameters
  sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
}`}</code>
                          </pre>
                        </div>
                      )}
                      
                      {activeTab === 'python' && (
                        <div className="code-block">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{`class Calculator:
    # Python doesn't support traditional method overloading.
    # We can simulate it using default parameters or *args
    
    def add(self, a, b, c=None):
        # If c is provided, add all three
        if c is not None:
            return a + b + c
        # Otherwise just add a and b
        return a + b
    
    # Another way using *args
    def sum(self, *numbers):
        return sum(numbers)
    
    # For completely different types, we can use type checking
    def concat(self, a, b):
        if isinstance(a, str) and isinstance(b, str):
            return a + b
        elif isinstance(a, (int, float)) and isinstance(b, (int, float)):
            return a + b
        else:
            raise TypeError("Unsupported types for concat")`}</code>
                          </pre>
                        </div>
                      )}
                      
                      {activeTab === 'java' && (
                        <div className="code-block">
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                            <code>{`class Calculator {
    // Method with two int parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded method with three int parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded method with double parameters
    public double add(double a, double b) {
        return a + b;
    }
    
    // Overloaded method with String parameters
    public String add(String a, String b) {
        return a + b;
    }
    
    // Java supports true method overloading, so all these methods
    // can exist simultaneously with the same name but different
    // parameter types or counts.
}`}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
                
                {/* Method Overriding (Runtime Polymorphism) Section */}
                <section id={getSectionId(methodOverridingTopic?.title || "method-overriding")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Method Overriding (Runtime Polymorphism)</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {methodOverridingTopic?.description || "Method overriding occurs when a subclass provides a specific implementation for a method already defined in its superclass. When a method is called on an object, the runtime determines which version of the method to execute based on the actual type of the object, not the reference type."}
                    </p>
                    
                    {methodOverridingTopic?.importance && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Why It's Important</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {methodOverridingTopic?.importance?.map((item: string, idx: number) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Runtime Polymorphism Example</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// Base class
class Animal {
  makeSound() {
    console.log("Some generic animal sound");
  }
}

// Derived classes
class Dog extends Animal {
  makeSound() {
    console.log("Woof! Woof!");  // Override the method
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow!");  // Override the method
  }
}

// Runtime polymorphism in action
function makeAnimalTalk(animal) {
  // This will call the appropriate makeSound() method
  // based on the actual object type at runtime
  animal.makeSound();
}

// Create instances
const myDog = new Dog();
const myCat = new Cat();
const genericAnimal = new Animal();

// The same function call produces different outputs
// based on the actual object type
makeAnimalTalk(myDog);        // Outputs: "Woof! Woof!"
makeAnimalTalk(myCat);        // Outputs: "Meow!"
makeAnimalTalk(genericAnimal); // Outputs: "Some generic animal sound"
`}</code>
                      </pre>
                    </div>
                  </div>
                </section>
                
                {/* Abstract Classes Section */}
                <section id={getSectionId(abstractClassesTopic?.title || "abstract-classes-and-methods")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Abstract Classes and Methods</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {abstractClassesTopic?.description || "Abstract classes are classes that cannot be instantiated directly and may contain abstract methods—methods without implementation that must be implemented by concrete subclasses. They provide a common interface and partial implementation for their subclasses."}
                    </p>
                    
                    {abstractClassesTopic?.characteristics && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Key Characteristics</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {abstractClassesTopic?.characteristics?.map((characteristic: string, idx: number) => (
                            <li key={idx}>{characteristic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Abstract Class Example</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// TypeScript abstract class example
abstract class Shape {
  protected color: string;
  
  constructor(color: string) {
    this.color = color;
  }
  
  // Abstract method that subclasses must implement
  abstract calculateArea(): number;
  
  // Concrete method shared by all subclasses
  displayColor(): void {
    console.log(\`This shape is \${this.color}\`);
  }
}

// Concrete subclass
class Circle extends Shape {
  private radius: number;
  
  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }
  
  // Implementation of the abstract method
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  
  // Additional method specific to Circle
  getRadius(): number {
    return this.radius;
  }
}

// Concrete subclass
class Rectangle extends Shape {
  private width: number;
  private height: number;
  
  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }
  
  // Implementation of the abstract method
  calculateArea(): number {
    return this.width * this.height;
  }
}

// Usage example
// const shape = new Shape("red");  // Error: cannot instantiate abstract class

const circle = new Circle("blue", 5);
circle.displayColor();        // Outputs: "This shape is blue"
console.log(circle.calculateArea());  // Outputs: 78.54... (π * 5²)

const rectangle = new Rectangle("green", 4, 6);
rectangle.displayColor();     // Outputs: "This shape is green"
console.log(rectangle.calculateArea());  // Outputs: 24 (4 * 6)
`}</code>
                      </pre>
                    </div>
                  </div>
                </section>
                
                {/* Interfaces Section */}
                <section id={getSectionId(interfacesTopic?.title || "interfaces")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Interfaces</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {interfacesTopic?.description || "Interfaces define a contract for classes to implement, specifying what methods a class must have without defining how they work. They enable polymorphism by allowing objects of different classes to be treated as objects of the same interface type."}
                    </p>
                    
                    {interfacesTopic?.benefits && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Benefits of Interfaces</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {interfacesTopic?.benefits?.map((benefit: string, idx: number) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Interface Example</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// TypeScript interface example
interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  private radius: number;
  
  constructor(radius: number) {
    this.radius = radius;
  }
  
  draw(): void {
    console.log(\`Drawing a circle with radius \${this.radius}\`);
  }
}

class Square implements Drawable {
  private sideLength: number;
  
  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }
  
  draw(): void {
    console.log(\`Drawing a square with side length \${this.sideLength}\`);
  }
}

// A function that accepts any object implementing the Drawable interface
function renderShape(shape: Drawable) {
  shape.draw();
}

// Usage example
const myCircle = new Circle(5);
const mySquare = new Square(4);

// Both objects can be passed to the same function because
// they both implement the Drawable interface
renderShape(myCircle);  // Outputs: "Drawing a circle with radius 5"
renderShape(mySquare);  // Outputs: "Drawing a square with side length 4"

// Interfaces enable polymorphic behavior while
// allowing different implementations
`}</code>
                      </pre>
                    </div>
                  </div>
                </section>
                
                {/* Interactive Polymorphism Simulator */}
                <section id="polymorphism-demo" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Interactive Polymorphism Simulator</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      Experience polymorphism in action with this interactive tool. Create different types of shapes that all implement the same Shape interface, and see how polymorphism lets you work with different objects through a common interface.
                    </p>
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-6">
                      {/* Interface and Classes Definitions */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h3 className="text-xl font-bold mb-3">Shape Interface</h3>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm h-48">
                            <code>{shapeInterface}</code>
                          </pre>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">Circle Implementation</h3>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm h-48">
                            <code>{circleClass}</code>
                          </pre>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3">Rectangle Implementation</h3>
                          <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm h-48">
                            <code>{rectangleClass}</code>
                          </pre>
                        </div>
                      </div>
                      
                      {/* Triangle class too */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Triangle Implementation</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm h-48">
                          <code>{triangleClass}</code>
                        </pre>
                      </div>
                      
                      {/* Shape Creation Form */}
                      <h3 className="text-xl font-bold mb-4">Create a Shape</h3>
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-6">
                        <div className="mb-4">
                          <label className="block mb-2 font-medium">Shape Type</label>
                          <select 
                            className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                            value={shapeType}
                            onChange={(e) => setShapeType(e.target.value)}
                          >
                            <option value="circle">Circle</option>
                            <option value="rectangle">Rectangle</option>
                            <option value="triangle">Triangle</option>
                          </select>
                        </div>
                        
                        {/* Dynamic form fields based on shape type */}
                        {shapeType === 'circle' && (
                          <div className="mb-4">
                            <label className="block mb-2 font-medium">Radius</label>
                            <input 
                              type="number" 
                              className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                              value={circleRadius}
                              onChange={(e) => setCircleRadius(parseFloat(e.target.value))}
                              min="0.1"
                              step="0.1"
                            />
                          </div>
                        )}
                        
                        {shapeType === 'rectangle' && (
                          <>
                            <div className="mb-4">
                              <label className="block mb-2 font-medium">Width</label>
                              <input 
                                type="number" 
                                className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                                value={rectangleWidth}
                                onChange={(e) => setRectangleWidth(parseFloat(e.target.value))}
                                min="0.1"
                                step="0.1"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block mb-2 font-medium">Height</label>
                              <input 
                                type="number" 
                                className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                                value={rectangleHeight}
                                onChange={(e) => setRectangleHeight(parseFloat(e.target.value))}
                                min="0.1"
                                step="0.1"
                              />
                            </div>
                          </>
                        )}
                        
                        {shapeType === 'triangle' && (
                          <>
                            <div className="mb-4">
                              <label className="block mb-2 font-medium">Side A</label>
                              <input 
                                type="number" 
                                className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                                value={triangleSideA}
                                onChange={(e) => setTriangleSideA(parseFloat(e.target.value))}
                                min="0.1"
                                step="0.1"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block mb-2 font-medium">Side B</label>
                              <input 
                                type="number" 
                                className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                                value={triangleSideB}
                                onChange={(e) => setTriangleSideB(parseFloat(e.target.value))}
                                min="0.1"
                                step="0.1"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block mb-2 font-medium">Side C</label>
                              <input 
                                type="number" 
                                className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500"
                                value={triangleSideC}
                                onChange={(e) => setTriangleSideC(parseFloat(e.target.value))}
                                min="0.1"
                                step="0.1"
                              />
                            </div>
                          </>
                        )}
                        
                        <button 
                          onClick={createShape}
                          className="btn-primary w-full py-2"
                        >
                          Create Shape
                        </button>
                      </div>
                      
                      {/* Shapes List and Polymorphic Operations */}
                      <h3 className="text-xl font-bold mb-3">Shapes List</h3>
                      <div className="mb-4">
                        {shapes.length > 0 ? (
                          <div className="space-y-4">
                            {shapes.map((shape, index) => (
                              <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                                <div className="flex justify-between mb-2">
                                  <p className="font-medium">
                                    {shape.type} #{index + 1}
                                  </p>
                                  <div className="text-sm text-gray-500">
                                    {shape.type === 'Circle' ? `Radius: ${shape.params.radius}` : 
                                     shape.type === 'Rectangle' ? `${shape.params.width} × ${shape.params.height}` :
                                     `Sides: ${shape.params.a}, ${shape.params.b}, ${shape.params.c}`}
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  <button 
                                    onClick={() => callShapeMethod(index, 'getArea')}
                                    className="btn-outline text-sm py-1"
                                  >
                                    getArea()
                                  </button>
                                  <button 
                                    onClick={() => callShapeMethod(index, 'getPerimeter')}
                                    className="btn-outline text-sm py-1"
                                  >
                                    getPerimeter()
                                  </button>
                                  <button 
                                    onClick={() => callShapeMethod(index, 'describe')}
                                    className="btn-outline text-sm py-1"
                                  >
                                    describe()
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg text-center">
                            No shapes created yet
                          </div>
                        )}
                      </div>
                      
                      {/* Polymorphic Operations */}
                      {shapes.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-xl font-bold mb-3">Polymorphic Operations</h3>
                          <p className="mb-3">These operations demonstrate polymorphism by applying the same method to all shapes regardless of their specific type:</p>
                          <div className="grid grid-cols-3 gap-4">
                            <button 
                              onClick={() => processAllShapes('getArea')}
                              className="btn-primary py-2"
                            >
                              Calculate All Areas
                            </button>
                            <button 
                              onClick={() => processAllShapes('getPerimeter')}
                              className="btn-primary py-2"
                            >
                              Calculate All Perimeters
                            </button>
                            <button 
                              onClick={() => processAllShapes('describe')}
                              className="btn-primary py-2"
                            >
                              Describe All Shapes
                            </button>
                          </div>
                          <div className="mt-3">
                            <button 
                              onClick={clearShapes}
                              className="btn-outline py-1 text-red-500 border-red-500 hover:bg-red-50"
                            >
                              Clear All Shapes
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Console Output */}
                      <h3 className="text-xl font-bold mb-3">Console Output</h3>
                      <div className="relative">
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md h-64 overflow-y-auto font-mono text-sm">
                          {consoleOutput.length > 0 ? (
                            consoleOutput.map((line, index) => (
                              <div key={index} className="mb-1">
                                {line.includes('getArea') ? (
                                  <span className="text-green-400">&gt; {line}</span>
                                ) : line.includes('getPerimeter') ? (
                                  <span className="text-blue-400">&gt; {line}</span>
                                ) : line.includes('describe') ? (
                                  <span className="text-purple-400">&gt; {line}</span>
                                ) : line.includes('Created') ? (
                                  <span className="text-yellow-400">&gt; {line}</span>
                                ) : line.startsWith('\n--- Processing') ? (
                                  <span className="text-cyan-400">&gt; {line.replace(/\n/g, '')}</span>
                                ) : line === '--- Processing complete ---\n' ? (
                                  <span className="text-cyan-400">&gt; {line.replace(/\n/g, '')}</span>
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
                          <li>Polymorphism allows different classes to share a common interface (e.g., the Shape interface).</li>
                          <li>Each class can provide its own implementation of the interface methods (e.g., different area calculations).</li>
                          <li>This enables writing code that works with objects based on their interface, not their specific class (e.g., the "process all shapes" functions).</li>
                          <li>All shapes in this demo implement the same interface, but each responds differently to the same method calls.</li>
                          <li>Polymorphism enables more modular, extensible code, as you can add new shapes without changing existing code.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Next Steps */}
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-2">Ready for the Next Module?</h3>
                  <p className="mb-4">Continue your OOP journey by learning about abstraction - the concept of hiding complex implementation details and showing only the essential features.</p>
                  <Link href="/module5_abstraction" className="btn-primary px-6 py-3 inline-block">
                    Next: Abstraction →
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
