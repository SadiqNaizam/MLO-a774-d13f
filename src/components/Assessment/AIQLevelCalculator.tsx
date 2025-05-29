import React from 'react';
import { cn } from '@/lib/utils';
import ToggleButton from './ToggleButtons';
import { Label } from '@/components/ui/label';

export type AIQLevel = 'High' | 'Medium' | 'Low';

interface AIQLevelCalculatorProps {
  currentLevel: AIQLevel | null;
  className?: string;
}

const AIQLevelCalculator: React.FC<AIQLevelCalculatorProps> = ({
  currentLevel,
  className,
}) => {
  const levels: AIQLevel[] = ['High' as const, 'Medium' as const, 'Low' as const];

  return (
    <div className={cn('flex flex-col items-start py-4 text-foreground', className)}>
      <div className="flex items-center space-x-6">
        <Label className="text-base font-medium text-foreground shrink-0">AIQ Level:</Label>
        {levels.map((level) => (
          <div key={level} className="flex items-center space-x-2">
            <ToggleButton
              id={`aiq-${level.toLowerCase()}`}
              checked={currentLevel === level}
              onToggle={() => { /* Auto-calculated, so toggle is non-interactive */ }}
              aria-label={`AIQ Level ${level}`}
              className={cn(
                'cursor-default' 
              )}
            />
            <Label 
              htmlFor={`aiq-${level.toLowerCase()}`} 
              className="text-sm text-foreground cursor-default"
            >
              {level}
            </Label>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2 ml-2">
        (Auto calculated using above inputs)
      </p>
    </div>
  );
};

export default AIQLevelCalculator;