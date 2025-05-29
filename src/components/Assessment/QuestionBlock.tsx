import React from 'react';
import { cn } from '@/lib/utils';
import ToggleButton from './ToggleButtons';

interface QuestionBlockProps {
  questionNumber: string;
  questionText: string;
  detailsText?: string;
  isRelevant: boolean;
  onRelevantToggle: () => void;
  isNonRelevant: boolean;
  onNonRelevantToggle: () => void;
  className?: string;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({
  questionNumber,
  questionText,
  detailsText,
  isRelevant,
  onRelevantToggle,
  isNonRelevant,
  onNonRelevantToggle,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-start py-3 text-foreground w-full',
        className
      )}
    >
      <div className="w-10 flex-shrink-0 pt-0.5">
        <span className="text-xl font-semibold text-primary">{questionNumber}</span>
      </div>
      <div className="flex-grow px-4">
        <p className="text-base text-foreground leading-relaxed">{questionText}</p>
        {detailsText && (
          <p className="text-xs text-muted-foreground mt-1 italic">{detailsText}</p>
        )}
      </div>
      {/* Fixed widths for toggle columns align with 'Relevant'/'Non-Relevant' headers in parent */}
      <div className="w-[100px] flex-shrink-0 flex justify-center ml-2 mr-1 pt-0.5"> 
        <ToggleButton
          checked={isRelevant}
          onToggle={onRelevantToggle}
          aria-label={`Mark question ${questionNumber} as relevant`}
        />
      </div>
      <div className="w-[120px] flex-shrink-0 flex justify-center ml-1 pt-0.5">
        <ToggleButton
          checked={isNonRelevant}
          onToggle={onNonRelevantToggle}
          aria-label={`Mark question ${questionNumber} as non-relevant`}
        />
      </div>
    </div>
  );
};

export default QuestionBlock;