import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header'; // Relative import from the same directory

interface MainAppLayoutProps {
  children: React.ReactNode; // Main content of the page
  headerContent?: React.ReactNode; // Optional content to be rendered within the Header component
  footerContent?: React.ReactNode; // Optional content for the footer area
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  headerContent,
  footerContent,
  className,
}) => {
  return (
    <div className={cn('flex flex-col w-full min-h-screen bg-background', className)}>
      {/* Header section utilizing the Header component */}
      {/* The Header component itself defines its height (h-20) and styles */}
      <Header>
        {headerContent}
      </Header>
      
      {/* Main content area */}
      {/* flex-1 ensures this section takes up available vertical space */}
      {/* overflow-y-auto allows content within to scroll if it exceeds viewport height */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {children}
      </main>

      {/* Footer section, rendered only if footerContent is provided */}
      {footerContent && (
        <footer className={cn(
          'h-24 bg-card flex-shrink-0' // Using bg-card as bg-surface is not defined, flex-shrink-0 prevents shrinking
        )}>
          {footerContent}
        </footer>
      )}
    </div>
  );
};

export default MainAppLayout;