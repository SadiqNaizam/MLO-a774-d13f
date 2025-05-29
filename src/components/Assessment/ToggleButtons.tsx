import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface ToggleButtonProps {
  id?: string;
  checked: boolean;
  onToggle: () => void;
  className?: string;
  checkColor?: string;
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  id,
  checked,
  onToggle,
  className,
  checkColor = 'text-primary', // Default to primary color from Tailwind config (e.g. #1ABC9C in dark theme)
  size = 'md',
  'aria-label': ariaLabel,
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
  };

  const iconSizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      id={id}
      onClick={onToggle}
      className={cn(
        'flex items-center justify-center border-2 rounded cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:focus:ring-offset-background',
        sizeClasses[size],
        checked 
          ? 'border-transparent' // No border when checked, checkmark provides visual cue
          : 'border-slate-400 dark:border-slate-500 hover:border-slate-500 dark:hover:border-slate-400', // Border for unchecked state
        className
      )}
    >
      {checked && <Check size={iconSizeMap[size]} className={cn(checkColor)} />}
    </button>
  );
};

export default ToggleButton;