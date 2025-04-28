'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Module1Page() {
  const [activeTab, setActiveTab] = useState('typescript');
  
  return (
    <div className="min-h-screen py-10">
      <div className="container-custom">
        {/* Module Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Introduction to OOP</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding the fundamental building blocks of Object-Oriented Programming: classes, objects, constructors, and methods.
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
                <li>
                  <a href="#intro" className="flex items-center text-primary hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    What is OOP?
                  </a>
                </li>
                <li>
                  <a href="#classes-vs-objects" className="flex items-center text-primary hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Classes vs Objects
                  </a>
                </li>
                <li>
                  <a href="#constructors" className="flex items-center text-primary hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Constructors
                  </a>
                </li>
                <li>
                  <a href="#properties" className="flex items-center text-primary hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Properties/Attributes
                  </a>
                </li>
                <li>
                  <a href="#methods" className="flex items-center text-primary hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Methods/Behaviors
                  </a>
                </li>
                <li>
                  <a href="#examples" className="flex items-center text-primary hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-2">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Practical Examples
                  </a>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-bold mb-3">Need Help?</h4>
                <a 
                  href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
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
            <section id="intro" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What is Object-Oriented Programming?</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (attributes or properties), and code in the form of procedures (methods).
                </p>
                <p className="mb-4">
                  OOP is designed to make complex software development more manageable by:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Organizing code to be more reusable and modular</li>
                  <li>Grouping related data and behavior together</li>
                  <li>Modeling real-world entities as software objects</li>
                  <li>Creating clear, logical relationships between different parts of your program</li>
                </ul>
                <p>
                  The four main principles of OOP are <strong>Encapsulation</strong>, <strong>Inheritance</strong>, <strong>Polymorphism</strong>, and <strong>Abstraction</strong>, which we'll explore in later modules.
                </p>
              </div>
              
              <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4">Key Benefits of OOP</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Modularity</h4>
                    <p className="text-sm">Encapsulate code into reusable objects with well-defined interfaces</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Reusability</h4>
                    <p className="text-sm">Create objects that can be used across different parts of an application</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Maintainability</h4>
                    <p className="text-sm">Easier to update and modify individual components without affecting the entire system</p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Scalability</h4>
                    <p className="text-sm">Facilitates growing your application by adding new objects that interact with existing ones</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Classes vs Objects Section */}
            <section id="classes-vs-objects" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Classes vs Objects</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                
                <div className="code-block">
                  {activeTab === 'typescript' && (
                    <pre className="font-mono text-sm p-4 bg-gray-100 dark:bg-gray-900 overflow-x-auto rounded">
                      {`// Class definition - the blueprint
class Car {
  make: string;
  model: string;
  year: number;
  
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  displayInfo(): string {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}

// Creating objects (instances) from the Car class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log(car1.displayInfo()); // "2020 Toyota Camry"
console.log(car2.displayInfo()); // "2019 Honda Civic"`}
                    </pre>
                  )}
                  
                  {activeTab === 'javascript' && (
                    <pre className="font-mono text-sm p-4 bg-gray-100 dark:bg-gray-900 overflow-x-auto rounded">
                      {`// Class definition - the blueprint
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  displayInfo() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}

// Creating objects (instances) from the Car class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);

console.log(car1.displayInfo()); // "2020 Toyota Camry"
console.log(car2.displayInfo()); // "2019 Honda Civic"`}
                    </pre>
                  )}
                  
                  {activeTab === 'python' && (
                    <pre className="font-mono text-sm p-4 bg-gray-100 dark:bg-gray-900 overflow-x-auto rounded">
                      {`# Class definition - the blueprint
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    
    def display_info(self):
        return f"{self.year} {self.make} {self.model}"

# Creating objects (instances) from the Car class
car1 = Car("Toyota", "Camry", 2020)
car2 = Car("Honda", "Civic", 2019)

print(car1.display_info())  # "2020 Toyota Camry"
print(car2.display_info())  # "2019 Honda Civic"`}
                    </pre>
                  )}
                </div>
              </div>
            </section>
            
            {/* We'll continue with more sections in the next part */}
            {/* For now, I'll add a message to indicate there's more to come */}
            <div className="text-center p-8 bg-yellow-50 dark:bg-yellow-900 rounded-xl">
              <p className="text-yellow-700 dark:text-yellow-200">
                This module is under active development. More content on Constructors, Properties, Methods, and Examples coming soon!
              </p>
            </div>
            
            {/* Help Button */}
            <div className="mt-10 text-center">
              <a 
                href="https://api.whatsapp.com/send/?phone=201116771405&text&type=phone_number&app_absent=0" 
                className="btn-whatsapp pulse-effect inline-block px-6 py-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Have Questions? Get Help on WhatsApp
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}