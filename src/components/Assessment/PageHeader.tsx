import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        'h-20 w-full bg-card flex flex-col items-center justify-center px-10 py-4 text-center',
        className
      )}
    >
      <h1 className="text-3xl font-bold text-foreground tracking-wider">
        AI QUOTIENT (AIQ) ASSESSMENT
      </h1>
      <p className="text-sm text-muted-foreground mt-1">
        SCREENING AI-FRIENDLY TALENT
      </p>
    </header>
  );
};

export default PageHeader;