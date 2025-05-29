import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <header
      className={cn(
        'h-20 flex justify-start items-center px-10 py-4 bg-card', // Using bg-card as bg-surface is not defined
        className
      )}
    >
      {children}
    </header>
  );
};

export default Header;