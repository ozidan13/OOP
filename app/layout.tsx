import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { OOPContentProvider } from '../lib/contexts/OOPContentContext';

export const metadata: Metadata = {
  title: 'OOP Master | Learn Object-Oriented Programming Visually',
  description: 'Master Object-Oriented Programming with interactive visualizations, code examples, and step-by-step explanations.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance optimization for external resources */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* Font Awesome Kit - more reliable than CDN CSS */}
        <script 
          src="https://kit.fontawesome.com/1ed8332167.js" 
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <OOPContentProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </OOPContentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
