'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useOOPContent } from '../../../lib/contexts/OOPContentContext';
import { Topic, Example } from '../../../lib/types';

export default function Module5Page() {
  const [activeTab, setActiveTab] = useState('typescript');
  const { content, loading, error, getModuleBySlug, isReady } = useOOPContent();
  const module = getModuleBySlug('module5_abstraction');
  
  // Extract topic references for easier access
  const essentialFeaturesTopic = module?.topics.find(topic => topic.title === 'Focusing on essential features');
  const hidingDetailsTopic = module?.topics.find(topic => topic.title === 'Hiding implementation details');
  const relationshipTopic = module?.topics.find(topic => topic.title === 'Relationship with Encapsulation, Abstract Classes, Interfaces');

  const [codeExamples, setCodeExamples] = useState<Record<string, string>>({
    typescript: '',
    javascript: '',
    python: '',
    java: ''
  });
  
  // State for Abstraction Simulator
  const [abstractionExample, setAbstractionExample] = useState<string>(`// Abstract class - partial implementation with common functionality
abstract class Vehicle {
  protected make: string;
  protected model: string;
  protected year: number;
  
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Common functionality for all vehicles
  public getDescription(): string {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
  
  // Abstract methods that subclasses must implement
  abstract start(): string;
  abstract stop(): string;
  abstract getFuelType(): string;
}`);

  const [carImplementation, setCarImplementation] = useState<string>(`// Concrete implementation of Vehicle
class Car extends Vehicle {
  private numDoors: number;
  private isElectric: boolean;
  
  constructor(make: string, model: string, year: number, numDoors: number, isElectric: boolean) {
    super(make, model, year);
    this.numDoors = numDoors;
    this.isElectric = isElectric;
  }
  
  // Implement abstract methods
  start(): string {
    return this.isElectric 
      ? \`The \${this.getDescription()} silently powers up\` 
      : \`The \${this.getDescription()} engine roars to life\`;
  }
  
  stop(): string {
    return \`The \${this.getDescription()} powers down\`;
  }
  
  getFuelType(): string {
    return this.isElectric ? 'Electric' : 'Gasoline';
  }
  
  // Additional methods specific to Cars
  getNumDoors(): number {
    return this.numDoors;
  }
}`);

  const [motorcycleImplementation, setMotorcycleImplementation] = useState<string>(`// Another concrete implementation of Vehicle
class Motorcycle extends Vehicle {
  private engineSize: number; // in cc
  
  constructor(make: string, model: string, year: number, engineSize: number) {
    super(make, model, year);
    this.engineSize = engineSize;
  }
  
  // Implement abstract methods
  start(): string {
    return \`The \${this.getDescription()} engine revs up with a \${this.engineSize > 600 ? 'loud' : 'gentle'} rumble\`;
  }
  
  stop(): string {
    return \`The \${this.getDescription()} engine quiets down and stops\`;
  }
  
  getFuelType(): string {
    return 'Gasoline';
  }
  
  // Additional methods specific to Motorcycles
  getEngineSize(): number {
    return this.engineSize;
  }
}`);

  // State for created vehicles
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  // Form states
  const [vehicleType, setVehicleType] = useState<string>('car');
  
  // Common vehicle properties
  const [vehicleMake, setVehicleMake] = useState<string>('Toyota');
  const [vehicleModel, setVehicleModel] = useState<string>('Camry');
  const [vehicleYear, setVehicleYear] = useState<number>(2023);
  
  // Car-specific properties
  const [carDoors, setCarDoors] = useState<number>(4);
  const [isElectric, setIsElectric] = useState<boolean>(false);
  
  // Motorcycle-specific properties
  const [engineSize, setEngineSize] = useState<number>(750);
  
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
      const relationshipExamples = fetchExamples(relationshipTopic);
      
      if (relationshipExamples) {
        setCodeExamples(relationshipExamples);
      }
    }
  }, [module]);
  
  // Create a vehicle based on selected type
  const createVehicle = () => {
    try {
      setErrorMessage('');
      
      let newVehicle;
      let description = '';
      
      // Simulate creating the appropriate vehicle
      if (vehicleType === 'car') {
        newVehicle = {
          type: 'Car',
          properties: {
            make: vehicleMake,
            model: vehicleModel,
            year: vehicleYear,
            numDoors: carDoors,
            isElectric: isElectric
          },
          getDescription: () => {
            return `${vehicleYear} ${vehicleMake} ${vehicleModel}`;
          },
          start: () => {
            const desc = newVehicle.getDescription();
            return isElectric
              ? `The ${desc} silently powers up`
              : `The ${desc} engine roars to life`;
          },
          stop: () => {
            const desc = newVehicle.getDescription();
            return `The ${desc} powers down`;
          },
          getFuelType: () => {
            return isElectric ? 'Electric' : 'Gasoline';
          },
          getNumDoors: () => {
            return carDoors;
          }
        };
        description = `Car: ${vehicleYear} ${vehicleMake} ${vehicleModel} (${carDoors}-door, ${isElectric ? 'Electric' : 'Gasoline'})`;
      } else if (vehicleType === 'motorcycle') {
        newVehicle = {
          type: 'Motorcycle',
          properties: {
            make: vehicleMake,
            model: vehicleModel,
            year: vehicleYear,
            engineSize: engineSize
          },
          getDescription: () => {
            return `${vehicleYear} ${vehicleMake} ${vehicleModel}`;
          },
          start: () => {
            const desc = newVehicle.getDescription();
            return `The ${desc} engine revs up with a ${engineSize > 600 ? 'loud' : 'gentle'} rumble`;
          },
          stop: () => {
            const desc = newVehicle.getDescription();
            return `The ${desc} engine quiets down and stops`;
          },
          getFuelType: () => {
            return 'Gasoline';
          },
          getEngineSize: () => {
            return engineSize;
          }
        };
        description = `Motorcycle: ${vehicleYear} ${vehicleMake} ${vehicleModel} (${engineSize}cc)`;
      }
      
      setVehicles(prev => [...prev, newVehicle]);
      setConsoleOutput(prev => [...prev, `Created new ${description}`]);
    } catch (err) {
      console.error('Error creating vehicle:', err);
      setErrorMessage(`Error creating vehicle: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  // Call a method on a vehicle
  const callVehicleMethod = (index: number, method: string) => {
    try {
      setErrorMessage('');
      const vehicle = vehicles[index];
      
      if (!vehicle || !(method in vehicle)) {
        throw new Error(`Method "${method}" not found on vehicle`);
      }
      
      // Call the method and log the result
      const result = vehicle[method]();
      setConsoleOutput(prev => [...prev, `${vehicle.type}.${method}() → ${result}`]);
    } catch (err) {
      console.error('Error calling method:', err);
      setErrorMessage(`Error calling method: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Use abstract methods on all vehicles
  const useAbstractMethod = (method: string) => {
    try {
      setErrorMessage('');
      
      if (vehicles.length === 0) {
        setConsoleOutput(prev => [...prev, 'No vehicles to process!']);
        return;
      }
      
      setConsoleOutput(prev => [...prev, `\n--- Using abstract method ${method}() on all vehicles ---`]);
      
      vehicles.forEach((vehicle, index) => {
        try {
          if (!(method in vehicle)) {
            setConsoleOutput(prev => [...prev, `Vehicle at index ${index} does not implement method ${method}()`]);
            return;
          }
          
          const result = vehicle[method]();
          setConsoleOutput(prev => [...prev, `${vehicle.type}.${method}() → ${result}`]);
        } catch (error) {
          setConsoleOutput(prev => [...prev, `Error processing vehicle at index ${index}: ${error}`]);
        }
      });
      
      setConsoleOutput(prev => [...prev, '--- Abstraction demonstration complete ---\n']);
    } catch (err) {
      console.error('Error processing vehicles:', err);
      setErrorMessage(`Error processing vehicles: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Clear console output
  const clearConsole = () => {
    setConsoleOutput([]);
    setErrorMessage('');
  };
  
  // Clear all vehicles
  const clearVehicles = () => {
    setVehicles([]);
    setConsoleOutput(prev => [...prev, 'All vehicles cleared']);
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
              <Link href="/module4_polymorphism" className="btn-outline px-4 py-2">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                  Previous: Polymorphism
                </span>
              </Link>
              <Link href="/" className="btn-primary px-4 py-2">
                <span className="flex items-center">
                  Back to Home
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                    <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
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
                      <a href="#abstraction-demo" className="flex items-center text-primary hover:underline">
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
                {/* Essential Features Section */}
                <section id={getSectionId(essentialFeaturesTopic?.title || "focusing-on-essential-features")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Focusing on Essential Features</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {essentialFeaturesTopic?.description || "Abstraction is the process of simplifying complex reality by modeling classes based on the essential properties and behaviors they should have. It involves identifying the core characteristics and hiding unnecessary details."}
                    </p>
                    
                    {essentialFeaturesTopic?.principles && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Key Principles</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {essentialFeaturesTopic?.principles?.map((principle: string, idx: number) => (
                            <li key={idx}>{principle}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Abstraction Example</h3>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{`// Real-world example: Database access
// Instead of exposing complex database operations,
// we abstract it into a simple interface

// Without abstraction (complex & detailed):
function rawDatabaseQuery() {
  // Connect to database with credentials
  const connection = createConnection('localhost', 3306, 'user', 'password');
  
  // Format SQL query with proper escaping
  const query = "SELECT * FROM users WHERE status = 'active'";
  
  // Execute query with error handling
  try {
    const result = connection.execute(query);
    // Process raw result set
    const processedData = [];
    while (result.hasNext()) {
      processedData.push(result.getNext());
    }
    connection.close();
    return processedData;
  } catch (error) {
    connection.rollback();
    connection.close();
    throw error;
  }
}

// With abstraction (simple & focused):
class UserRepository {
  getActiveUsers() {
    // All the complex database details are hidden
    return this.findByStatus('active');
  }
  
  // Internal implementation details hidden from users
  private findByStatus(status) {
    // ... all the complex code is encapsulated here
  }
}

// Client code is much simpler:
const userRepo = new UserRepository();
const activeUsers = userRepo.getActiveUsers();
`}</code>
                      </pre>
                    </div>
                  </div>
                </section>
                {/* Hiding Implementation Details Section */}
                <section id={getSectionId(hidingDetailsTopic?.title || "hiding-implementation-details")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Hiding Implementation Details</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {hidingDetailsTopic?.description || "Abstraction hides complex implementation details and exposes only the necessary functionalities to the outside world. This allows for changes to the implementation without affecting the code that uses the abstraction."}
                    </p>
                    
                    {hidingDetailsTopic?.benefits && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Benefits</h3>
                        <ul className="list-disc pl-6 space-y-2">
                          {hidingDetailsTopic?.benefits?.map((benefit: string, idx: number) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                      <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-bold text-primary mb-2">Public Interface</h4>
                        <p className="text-sm">The simplified API that users of your code will interact with. It focuses on <span className="font-bold">what</span> the code does, not how it does it.</p>
                      </div>
                      <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">Private Implementation</h4>
                        <p className="text-sm">The complex underlying code that handles the actual work. This can change without affecting users as long as the public interface remains consistent.</p>
                      </div>
                    </div>
                    
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Hiding Implementation Example</h3>
                      <div className="tabs mb-4">
                        <button 
                          className={`tab ${activeTab === 'typescript' ? 'active' : ''}`} 
                          onClick={() => setActiveTab('typescript')}
                        >
                          TypeScript
                        </button>
                        <button 
                          className={`tab ${activeTab === 'javascript' ? 'active' : ''}`} 
                          onClick={() => setActiveTab('javascript')}
                        >
                          JavaScript
                        </button>
                        <button 
                          className={`tab ${activeTab === 'python' ? 'active' : ''}`} 
                          onClick={() => setActiveTab('python')}
                        >
                          Python
                        </button>
                        <button 
                          className={`tab ${activeTab === 'java' ? 'active' : ''}`} 
                          onClick={() => setActiveTab('java')}
                        >
                          Java
                        </button>
                      </div>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>
                          {codeExamples[activeTab] || `// No example available for ${activeTab}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </section>
                {/* Relationship with Other Concepts */}
                <section id={getSectionId(relationshipTopic?.title || "relationship-with-encapsulation-abstract-classes-interfaces")} className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Relationship with Other OOP Concepts</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                    <p className="mb-4">
                      {relationshipTopic?.description || "Abstraction works hand-in-hand with other OOP concepts. Encapsulation implements abstraction by hiding details, abstract classes provide partial implementation while defining an abstract interface, and interfaces define pure abstraction with no implementation."}
                    </p>
                    
                    {relationshipTopic?.comparisons && (
                      <div className="space-y-6 mb-6">
                        {relationshipTopic.comparisons.map((comparison: any, idx: number) => (
                          <div key={idx} className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                            <h4 className="font-bold mb-2">{comparison.concept}</h4>
                            <p>{comparison.explanation}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg">
                        <h4 className="font-bold text-primary mb-3">Abstract Classes</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Provide a partial implementation</li>
                          <li>Can have instance variables and constructors</li>
                          <li>Can include both abstract and concrete methods</li>
                          <li>Classes can only inherit from one abstract class</li>
                          <li>Best for "is-a" relationships and when classes share common functionality</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg">
                        <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3">Interfaces</h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Provide pure abstraction with no implementation</li>
                          <li>Cannot have instance variables or constructors</li>
                          <li>All methods are implicitly abstract</li>
                          <li>Classes can implement multiple interfaces</li>
                          <li>Best for "can-do" relationships and defining common behavior</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Interactive Abstraction Demo */}
                <section id="abstraction-demo" className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Interactive Abstraction Demo</h2>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <p className="mb-6">
                      This interactive demo demonstrates abstraction through a vehicle hierarchy. 
                      The <code>Vehicle</code> abstract class defines a common interface and shared functionality, 
                      while concrete implementations (<code>Car</code> and <code>Motorcycle</code>) provide specific implementations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Abstract Class Code */}
                      <div>
                        <h3 className="text-xl font-bold mb-3">Abstract Vehicle Class</h3>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md h-72 overflow-y-auto text-sm">
                          <code>{abstractionExample}</code>
                        </pre>
                      </div>
                      
                      {/* Concrete Implementation */}
                      <div>
                        <h3 className="text-xl font-bold mb-3">Concrete Implementations</h3>
                        <div className="tabs mb-2">
                          <button 
                            className={`tab-sm ${vehicleType === 'car' ? 'active' : ''}`} 
                            onClick={() => setVehicleType('car')}
                          >
                            Car
                          </button>
                          <button 
                            className={`tab-sm ${vehicleType === 'motorcycle' ? 'active' : ''}`} 
                            onClick={() => setVehicleType('motorcycle')}
                          >
                            Motorcycle
                          </button>
                        </div>
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-md h-72 overflow-y-auto text-sm">
                          <code>{vehicleType === 'car' ? carImplementation : motorcycleImplementation}</code>
                        </pre>
                      </div>
                    </div>
                    {/* Create Vehicle Form */}
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-3">Create a Vehicle</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {/* Common properties */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Make:</span>
                          </label>
                          <input 
                            type="text" 
                            value={vehicleMake}
                            onChange={(e) => setVehicleMake(e.target.value)}
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Model:</span>
                          </label>
                          <input 
                            type="text" 
                            value={vehicleModel}
                            onChange={(e) => setVehicleModel(e.target.value)}
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Year:</span>
                          </label>
                          <input 
                            type="number" 
                            value={vehicleYear}
                            onChange={(e) => setVehicleYear(parseInt(e.target.value) || 2023)}
                            className="input input-bordered w-full"
                            min="1900"
                            max="2030"
                          />
                        </div>
                      </div>
                      
                      {/* Car-specific properties (show only when car type is selected) */}
                      {vehicleType === 'car' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Number of Doors:</span>
                            </label>
                            <input 
                              type="number" 
                              value={carDoors}
                              onChange={(e) => setCarDoors(parseInt(e.target.value) || 2)}
                              className="input input-bordered w-full"
                              min="2"
                              max="6"
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Electric?</span>
                            </label>
                            <div className="pt-3">
                              <label className="cursor-pointer label justify-start gap-4">
                                <input 
                                  type="checkbox" 
                                  checked={isElectric}
                                  onChange={(e) => setIsElectric(e.target.checked)}
                                  className="checkbox checkbox-primary" 
                                />
                                <span className="label-text">{isElectric ? 'Yes - Electric Vehicle' : 'No - Gasoline Vehicle'}</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Motorcycle-specific properties (show only when motorcycle type is selected) */}
                      {vehicleType === 'motorcycle' && (
                        <div className="grid grid-cols-1 mb-4">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Engine Size (cc):</span>
                            </label>
                            <input 
                              type="number" 
                              value={engineSize}
                              onChange={(e) => setEngineSize(parseInt(e.target.value) || 250)}
                              className="input input-bordered w-full"
                              min="50"
                              max="2000"
                            />
                          </div>
                        </div>
                      )}
                      
                      <button 
                        onClick={createVehicle}
                        className="btn-primary py-2 px-4 w-full"
                      >
                        Create {vehicleType === 'car' ? 'Car' : 'Motorcycle'}
                      </button>
                    </div>
                    {/* Vehicles List */}
                    <h3 className="text-xl font-bold mb-3">Vehicles List</h3>
                    <div className="mb-4">
                      {vehicles.length > 0 ? (
                        <div className="space-y-4">
                          {vehicles.map((vehicle, index) => (
                            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                              <div className="flex justify-between mb-2">
                                <p className="font-medium">
                                  {vehicle.type} #{index + 1}: {vehicle.properties.year} {vehicle.properties.make} {vehicle.properties.model}
                                </p>
                                <div className="text-sm text-gray-500">
                                  {vehicle.type === 'Car' ? 
                                   `${vehicle.properties.numDoors}-door, ${vehicle.properties.isElectric ? 'Electric' : 'Gasoline'}` : 
                                   `${vehicle.properties.engineSize}cc`}
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                <button 
                                  onClick={() => callVehicleMethod(index, 'start')}
                                  className="btn-outline text-sm py-1"
                                >
                                  start()
                                </button>
                                <button 
                                  onClick={() => callVehicleMethod(index, 'stop')}
                                  className="btn-outline text-sm py-1"
                                >
                                  stop()
                                </button>
                                <button 
                                  onClick={() => callVehicleMethod(index, 'getFuelType')}
                                  className="btn-outline text-sm py-1"
                                >
                                  getFuelType()
                                </button>
                              </div>
                              <div className="mt-2">
                                {vehicle.type === 'Car' && (
                                  <button 
                                    onClick={() => callVehicleMethod(index, 'getNumDoors')}
                                    className="btn-outline text-sm py-1 w-full"
                                  >
                                    getNumDoors() - Car specific method
                                  </button>
                                )}
                                {vehicle.type === 'Motorcycle' && (
                                  <button 
                                    onClick={() => callVehicleMethod(index, 'getEngineSize')}
                                    className="btn-outline text-sm py-1 w-full"
                                  >
                                    getEngineSize() - Motorcycle specific method
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-lg text-center">
                          No vehicles created yet
                        </div>
                      )}
                    </div>
                    
                    {/* Abstraction Operations */}
                    {vehicles.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Abstract Operations</h3>
                        <p className="mb-3">These operations demonstrate abstraction by calling the same abstract methods on all vehicles regardless of their concrete type:</p>
                        <div className="grid grid-cols-3 gap-4">
                          <button 
                            onClick={() => useAbstractMethod('start')}
                            className="btn-primary py-2"
                          >
                            Call All start()
                          </button>
                          <button 
                            onClick={() => useAbstractMethod('stop')}
                            className="btn-primary py-2"
                          >
                            Call All stop()
                          </button>
                          <button 
                            onClick={() => useAbstractMethod('getFuelType')}
                            className="btn-primary py-2"
                          >
                            Call All getFuelType()
                          </button>
                        </div>
                        <div className="mt-3">
                          <button 
                            onClick={clearVehicles}
                            className="btn-outline py-1 text-red-500 border-red-500 hover:bg-red-50"
                          >
                            Clear All Vehicles
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
                              {line.includes('start') ? (
                                <span className="text-green-400">&gt; {line}</span>
                              ) : line.includes('stop') ? (
                                <span className="text-blue-400">&gt; {line}</span>
                              ) : line.includes('getFuelType') ? (
                                <span className="text-purple-400">&gt; {line}</span>
                              ) : line.includes('Created') ? (
                                <span className="text-yellow-400">&gt; {line}</span>
                              ) : line.startsWith('\n--- Using') ? (
                                <span className="text-cyan-400">&gt; {line.replace(/\n/g, '')}</span>
                              ) : line === '--- Abstraction demonstration complete ---\n' ? (
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
                        <li>Abstraction focuses on <strong>what</strong> an object does rather than <strong>how</strong> it does it.</li>
                        <li>Abstract classes provide a common interface with some shared implementation.</li>
                        <li>Concrete implementations provide the specific behavior for abstract methods.</li>
                        <li>The code that uses these classes can work with any vehicle type without knowing its specific implementation.</li>
                        <li>This enables more maintainable code, as you can change the internal implementation without affecting the code that uses it.</li>
                        <li>New vehicle types can be added by implementing the same abstract methods, demonstrating extensibility.</li>
                      </ul>
                    </div>
                  </div>
                </section>
                
                {/* Next Steps */}
                <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
                  <p className="mb-4">You've completed all the core OOP principles modules. Continue your journey by exploring advanced OOP topics or starting to apply these principles in your own projects.</p>
                  <Link href="/" className="btn-primary px-6 py-3 inline-block">
                    Return to Dashboard
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
