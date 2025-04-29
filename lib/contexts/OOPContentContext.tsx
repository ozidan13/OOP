'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { OOPContent, Module } from '../types';

interface OOPContentContextType {
  content: OOPContent | null;
  loading: boolean;
  error: string | null;
  getModuleBySlug: (slug: string) => Module | undefined;
  isReady: boolean;
}

const OOPContentContext = createContext<OOPContentContextType | undefined>(undefined);

export function useOOPContent() {
  const context = useContext(OOPContentContext);
  if (context === undefined) {
    throw new Error('useOOPContent must be used within an OOPContentProvider');
  }
  return context;
}

interface OOPContentProviderProps {
  children: ReactNode;
}

export function OOPContentProvider({ children }: OOPContentProviderProps) {
  const [content, setContent] = useState<OOPContent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const fetchedRef = useRef<boolean>(false);

  useEffect(() => {
    // Prevent multiple fetches - only fetch if we haven't already
    if (fetchedRef.current) return;
    
    async function fetchContent() {
      try {
        setLoading(true);
        console.log('Fetching OOP content from JSON file...');
        
        // Fetch content from the JSON file
        const response = await fetch('/oop_content.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch OOP content');
        }
        
        const data = await response.json();
        console.log('OOP content successfully loaded');
        setContent(data);
        setIsReady(true);
        fetchedRef.current = true;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching OOP content:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchContent();
  }, []);

  // Helper function to find a module by its slug
  const getModuleBySlug = (slug: string): Module | undefined => {
    if (!content) return undefined;
    return content.modules.find(module => module.slug === slug);
  };

  const value = {
    content,
    loading,
    error,
    getModuleBySlug,
    isReady
  };

  return (
    <OOPContentContext.Provider value={value}>
      {children}
    </OOPContentContext.Provider>
  );
}
