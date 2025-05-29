import React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ScreenerNotesProps {
  notes: string;
  onNotesChange: (notes: string) => void;
  className?: string;
  placeholder?: string;
}

const ScreenerNotes: React.FC<ScreenerNotesProps> = ({
  notes,
  onNotesChange,
  className,
  placeholder = "Enter qualitative feedback and observations...",
}) => {
  return (
    // This component is intended to be placed within a container that defines its height (e.g., h-24) and background (e.g. bg-card).
    <div className={cn('p-4 h-full flex flex-col', className)}> 
      <Label htmlFor="screener-notes" className="mb-2 text-base font-medium text-foreground">
        Screener Notes / Comments:
      </Label>
      <Textarea
        id="screener-notes"
        value={notes}
        onChange={(e) => onNotesChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'flex-grow resize-none text-foreground placeholder:text-muted-foreground',
          'bg-background border-border focus:ring-primary focus:border-primary'
        )}
      />
    </div>
  );
};

export default ScreenerNotes;