'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useOOPContent } from '../../../lib/contexts/OOPContentContext';
import { Topic, Example } from '../../../lib/types';

export default function Module2Page() {
  const [activeTab, setActiveTab] = useState('typescript');
  const { content, loading, error, getModuleBySlug, isReady } = useOOPContent();
  const module = getModuleBySlug('module2_encapsulation');
  const [codeExamples, setCodeExamples] = useState<Record<string, string>>({
    typescript: '',
    javascript: '',
    python: '',
    java: ''
  });
  
  // State for Encapsulation Simulator
  const [bankAccountCode, setBankAccountCode] = useState<string>(`class BankAccount {
  // Private property with underscore convention
  private _balance: number = 0;
  private _accountNumber: string;
  
  constructor(accountNumber: string, initialBalance: number = 0) {
    this._accountNumber = accountNumber;
    // Validate initial balance through the setter
    this.deposit(initialBalance);
  }
  
  // Getter for balance
  get balance(): number {
    return this._balance;
  }
  
  // Public method to deposit money
  deposit(amount: number): boolean {
    if (amount <= 0) {
      console.log("Deposit amount must be positive");
      return false;
    }
    
    this._balance += amount;
    console.log(\`Deposited \${amount}. New balance: \${this._balance}\`);
    return true;
  }
  
  // Public method to withdraw money
  withdraw(amount: number): boolean {
    if (amount <= 0) {
      console.log("Withdrawal amount must be positive");
      return false;
    }
    
    if (amount > this._balance) {
      console.log("Insufficient funds");
      return false;
    }
    
    this._balance -= amount;
    console.log(\`Withdrew \${amount}. New balance: \${this._balance}\`);
    return true;
  }
  
  // Private method for internal processing
  private calculateInterest(rate: number): number {
    return this._balance * rate / 100;
  }
  
  // Public method that uses private method
  addYearlyInterest(rate: number = 2.5): void {
    const interest = this.calculateInterest(rate);
    this._balance += interest;
    console.log(\`Added yearly interest: \${interest}. New balance: \${this._balance}\`);
  }
  
  // Get account info
  getAccountInfo(): string {
    // Only shows last 4 digits of account number for security
    const lastFourDigits = this._accountNumber.slice(-4);
    return \`Account ending in \${lastFourDigits} - Balance: \${this._balance}\`;
  }
}`);

  const [accountNumber, setAccountNumber] = useState<string>('1234567890');
  const [initialBalance, setInitialBalance] = useState<string>('1000');
  const [account, setAccount] = useState<any>(null);
  const [transactionAmount, setTransactionAmount] = useState<string>('100');
  const [interestRate, setInterestRate] = useState<string>('2.5');
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [attemptedHacks, setAttemptedHacks] = useState<string[]>([]);
  
  // Extract code examples once module data is loaded
  useEffect(() => {
    if (module) {
      // Find getter/setter examples
      const getterSetterTopic = module.topics.find(topic => topic.title === 'Getters and Setters');
      if (getterSetterTopic?.examples) {
        const newCodeExamples: Record<string, string> = {...codeExamples};
        
        getterSetterTopic.examples.forEach(example => {
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

  // Create a new bank account
  const createAccount = () => {
    try {
      setErrorMessage('');
      const parsedBalance = parseFloat(initialBalance);
      
      // Simulating the BankAccount class behavior
      const newAccount = {
        _accountNumber: accountNumber,
        _balance: parsedBalance > 0 ? parsedBalance : 0,
        
        get balance() {
          return this._balance;
        },
        
        deposit(amount: number) {
          const numAmount = Number(amount);
          if (numAmount <= 0) {
            const message = "Deposit amount must be positive";
            setConsoleOutput(prev => [...prev, message]);
            return false;
          }
          
          this._balance += numAmount;
          const message = `Deposited ${numAmount}. New balance: ${this._balance}`;
          setConsoleOutput(prev => [...prev, message]);
          return true;
        },
        
        withdraw(amount: number) {
          const numAmount = Number(amount);
          if (numAmount <= 0) {
            const message = "Withdrawal amount must be positive";
            setConsoleOutput(prev => [...prev, message]);
            return false;
          }
          
          if (numAmount > this._balance) {
            const message = "Insufficient funds";
            setConsoleOutput(prev => [...prev, message]);
            return false;
          }
          
          this._balance -= numAmount;
          const message = `Withdrew ${numAmount}. New balance: ${this._balance}`;
          setConsoleOutput(prev => [...prev, message]);
          return true;
        },
        
        calculateInterest(rate: number) {
          return this._balance * rate / 100;
        },
        
        addYearlyInterest(rate: number = 2.5) {
          const interest = this.calculateInterest(rate);
          this._balance += interest;
          const message = `Added yearly interest: ${interest.toFixed(2)}. New balance: ${this._balance.toFixed(2)}`;
          setConsoleOutput(prev => [...prev, message]);
        },
        
        getAccountInfo() {
          const lastFourDigits = this._accountNumber.slice(-4);
          return `Account ending in ${lastFourDigits} - Balance: ${this._balance}`;
        }
      };
      
      setAccount(newAccount);
      setConsoleOutput(prev => [...prev, `Created new account: ${newAccount.getAccountInfo()}`]);
    } catch (err) {
      console.error('Error creating account:', err);
      setErrorMessage(`Error creating account: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Clear console output
  const clearConsole = () => {
    setConsoleOutput([]);
    setErrorMessage('');
  };
  
  // Simulate a hack attempt
  const simulateHack = (hackType: string) => {
    let hackMessage = '';
    let hackResult = '';
    
    switch (hackType) {
      case 'direct-access':
        hackMessage = `// Trying to access private property directly
account._balance = 1000000; // This would work in JavaScript but not in TypeScript with private fields`;
        hackResult = 'Error: Property \'_balance\' is private and only accessible within class \'BankAccount\'';
        break;
        
      case 'negative-withdrawal':
        hackMessage = `// Trying to game the system with negative withdrawal
account.withdraw(-1000); // This should be caught by validation`;
        if (account) {
          account.withdraw(-1000);
          hackResult = 'Hack prevented by input validation in withdraw method';
        } else {
          hackResult = 'Create an account first';
        }
        break;
        
      case 'prototype-modify':
        hackMessage = `// Trying to modify the prototype to bypass validation
BankAccount.prototype.withdraw = function(amount) { this._balance -= amount; };`;
        hackResult = 'Error: Cannot modify a class that uses private fields';
        break;
    }
    
    setAttemptedHacks(prev => [...prev, hackType]);
    setConsoleOutput(prev => [...prev, '🛑 HACK ATTEMPT:', hackMessage, hackResult, '']);
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
  
  const accessModifiersTopic = getTopicByTitle('Public, Private, Protected Access Modifiers');
  const getterSetterTopic = getTopicByTitle('Getters and Setters');
  const informationHidingTopic = getTopicByTitle('Information Hiding');
  
  // Generate IDs for section anchors
  const getSectionId = (title: string): string => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[()\/]/g, '');
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
          <Link href="/module1_classes_objects" className="btn-outline px-4 py-2">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
              </svg>
              Previous: Classes & Objects
            </span>
          </Link>
          <Link href="/module3_inheritance" className="btn-primary px-4 py-2">
            <span className="flex items-center">
              Next Module: Inheritance
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
                  <a href="#encapsulation-demo" className="flex items-center text-primary hover:underline">
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
            {/* Access Modifiers Section */}
            <section id={getSectionId(accessModifiersTopic?.title || "access-modifiers")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Access Modifiers</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {accessModifiersTopic?.description || ""}
                </p>
                {accessModifiersTopic?.modifiers && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    {accessModifiersTopic.modifiers.map((modifier, idx) => (
                      <div key={idx} className="bg-surface-light dark:bg-surface-dark p-5 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-2">{modifier.name}</h3>
                        <p className="mb-3 text-sm">{modifier.description}</p>
                        <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                          <p className="text-xs font-medium">Use Case</p>
                          <p className="text-sm">{modifier.use_case}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
            
            {/* Getters and Setters Section */}
            <section id={getSectionId(getterSetterTopic?.title || "getters-and-setters")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Getters and Setters</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {getterSetterTopic?.description || ""}
                </p>
                
                {getterSetterTopic?.benefits && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Benefits</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {getterSetterTopic.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Getter/Setter Example</h3>
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
                        <code>{codeExamples.typescript || "class Person {\n  private _age: number;\n\n  get age(): number {\n    return this._age;\n  }\n\n  set age(value: number) {\n    if (value < 0) {\n      throw new Error('Age cannot be negative');\n    }\n    this._age = value;\n  }\n}"}</code>
                      </pre>
                    </div>
                  )}
                  
                  {activeTab === 'javascript' && (
                    <div className="code-block">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{codeExamples.javascript || "class Person {\n  constructor() {\n    this._age = 0;\n  }\n\n  get age() {\n    return this._age;\n  }\n\n  set age(value) {\n    if (value < 0) {\n      throw new Error('Age cannot be negative');\n    }\n    this._age = value;\n  }\n}"}</code>
                      </pre>
                    </div>
                  )}
                  
                  {activeTab === 'python' && (
                    <div className="code-block">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{codeExamples.python || "class Person:\n    def __init__(self):\n        self._age = 0\n\n    @property\n    def age(self):\n        return self._age\n\n    @age.setter\n    def age(self, value):\n        if value < 0:\n            raise ValueError('Age cannot be negative')\n        self._age = value"}</code>
                      </pre>
                    </div>
                  )}
                  
                  {activeTab === 'java' && (
                    <div className="code-block">
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                        <code>{codeExamples.java || "public class Person {\n    private int age;\n\n    public int getAge() {\n        return age;\n    }\n\n    public void setAge(int value) {\n        if (value < 0) {\n            throw new IllegalArgumentException(\"Age cannot be negative\");\n        }\n        this.age = value;\n    }\n}"}</code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </section>
            
            {/* Information Hiding Section */}
            <section id={getSectionId(informationHidingTopic?.title || "information-hiding")} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Information Hiding</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  {informationHidingTopic?.description || ""}
                </p>
                
                {informationHidingTopic?.benefits && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-3">Benefits of Information Hiding</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {informationHidingTopic.benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg">
                          <p>{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
            
            {/* Interactive Bank Account Simulator */}
            <section id="encapsulation-demo" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Interactive Encapsulation Demo: Bank Account</h2>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6">
                <p className="mb-4">
                  This interactive demo shows encapsulation in action through a bank account example. Try creating an account, performing transactions, and even simulating "hack attempts" that encapsulation protects against.
                </p>
                
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg mb-6">
                  {/* Bank Account Class Defintion */}
                  <h3 className="text-xl font-bold mb-3">Bank Account Implementation</h3>
                  <div className="mb-6">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm h-64">
                      <code>{bankAccountCode}</code>
                    </pre>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      This TypeScript class uses private properties (_balance, _accountNumber) and public methods to control access to data.
                    </p>
                  </div>
                  
                  {/* Account Creation */}
                  <h3 className="text-xl font-bold mb-3">Create Bank Account</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block mb-2 font-medium">Account Number</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium">Initial Balance</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                        value={initialBalance}
                        onChange={(e) => setInitialBalance(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <button 
                    onClick={createAccount}
                    className="btn-primary px-4 py-2 mb-6"
                  >
                    Create Account
                  </button>
                  
                  {/* Account Operations */}
                  {account && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3">Account Operations</h3>
                      
                      <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm mb-4">
                        <h4 className="font-bold text-primary mb-2">Account Info</h4>
                        <p>{account.getAccountInfo()}</p>
                        <p className="mt-2 text-sm">Balance (via getter): <span className="font-mono">{account.balance}</span></p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="block mb-2 font-medium">Amount</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-2"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                          />
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={() => account.deposit(Number(transactionAmount))}
                            className="btn-outline w-full py-2"
                          >
                            Deposit
                          </button>
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={() => account.withdraw(Number(transactionAmount))}
                            className="btn-outline w-full py-2"
                          >
                            Withdraw
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block mb-2 font-medium">Interest Rate (%)</label>
                          <input 
                            type="text" 
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 mb-2"
                            value={interestRate}
                            onChange={(e) => setInterestRate(e.target.value)}
                          />
                        </div>
                        <div className="flex items-end">
                          <button 
                            onClick={() => account.addYearlyInterest(Number(interestRate))}
                            className="btn-outline w-full py-2"
                          >
                            Add Yearly Interest
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Hack Attempt Simulation */}
                  {account && (
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3">Security Challenge: Hack Attempts</h3>
                      <p className="mb-3 text-sm">See how encapsulation prevents different types of attacks:</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <button 
                          onClick={() => simulateHack('direct-access')}
                          className={`btn-danger py-2 ${attemptedHacks.includes('direct-access') ? 'opacity-75' : ''}`}
                        >
                          Try Direct Access
                        </button>
                        <button 
                          onClick={() => simulateHack('negative-withdrawal')}
                          className={`btn-danger py-2 ${attemptedHacks.includes('negative-withdrawal') ? 'opacity-75' : ''}`}
                        >
                          Try Negative Withdrawal
                        </button>
                        <button 
                          onClick={() => simulateHack('prototype-modify')}
                          className={`btn-danger py-2 ${attemptedHacks.includes('prototype-modify') ? 'opacity-75' : ''}`}
                        >
                          Try Prototype Modification
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Console Output */}
                  <h3 className="text-xl font-bold mb-3">Operation Log</h3>
                  <div className="relative">
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md h-64 overflow-y-auto font-mono text-sm">
                      {consoleOutput.length > 0 ? (
                        consoleOutput.map((line, index) => (
                          <div key={index} className="mb-1">
                            {line.startsWith('🛑') ? (
                              <span className="text-red-400">{line}</span>
                            ) : line.startsWith('//') ? (
                              <span className="text-gray-500">{line}</span>
                            ) : line.includes('Error') ? (
                              <span className="text-red-400">{line}</span>
                            ) : (
                              <span>
                                {line.includes('Deposited') || line.includes('Created') ? (
                                  <span className="text-green-400">{line}</span>
                                ) : line.includes('Withdrew') || line.includes('Insufficient') ? (
                                  <span className="text-yellow-400">{line}</span>
                                ) : (
                                  <span>{line}</span>
                                )}
                              </span>
                            )}
                          </div>
                        ))
                      ) : (
                        <span className="text-gray-500">// Operation log will appear here</span>
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
                      <li>Private properties can only be accessed within the class itself, not from outside code.</li>
                      <li>Getters provide controlled read access to properties (like checking balance).</li>
                      <li>Public methods with validation (like deposit, withdraw) protect data integrity.</li>
                      <li>Private methods (like calculateInterest) hide implementation details.</li>
                      <li>Encapsulation helps prevent invalid states and protect against malicious access.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Next Steps */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-2">Ready for the Next Module?</h3>
              <p className="mb-4">Continue your OOP journey by learning about inheritance - the principle that allows new classes to be based on existing ones.</p>
              <Link href="/module3_inheritance" className="btn-primary px-6 py-3 inline-block">
                Next: Inheritance →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}