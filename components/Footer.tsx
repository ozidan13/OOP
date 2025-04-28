'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-surface-light dark:bg-surface-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">OOP Master</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Making object-oriented programming concepts accessible through 
              interactive visualizations and clear explanations.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light" aria-label="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light" aria-label="GitHub">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#modules" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Modules
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#resources" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* OOP Modules */}
          <div>
            <h3 className="text-lg font-bold mb-4">OOP Modules</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/module1_classes_objects" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Classes & Objects
                </Link>
              </li>
              <li>
                <Link href="/module2_encapsulation" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Encapsulation
                </Link>
              </li>
              <li>
                <Link href="/module3_inheritance" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Inheritance
                </Link>
              </li>
              <li>
                <Link href="/module4_polymorphism" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Polymorphism
                </Link>
              </li>
              <li>
                <Link href="/module5_abstraction" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  Abstraction
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary dark:text-primary-light"></i>
                <span className="text-gray-600 dark:text-gray-400">contact@oopmastersite.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-globe text-primary dark:text-primary-light"></i>
                <a href="https://oopmastersite.com" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light">
                  oopmastersite.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} OOP Master. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light text-sm">
                Terms of Service
              </Link>
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Designed with <i className="fas fa-heart text-accent"></i> by Osama
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 