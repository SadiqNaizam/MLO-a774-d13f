import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import MainAppLayout from '../components/layout/MainAppLayout';
import PageHeader from '../components/Assessment/PageHeader';
import QuestionBlock from '../components/Assessment/QuestionBlock';
import AIQLevelCalculator, { AIQLevel } from '../components/Assessment/AIQLevelCalculator';
import ScreenerNotes from '../components/Assessment/ScreenerNotes';

interface Question {
  id: string;
  number: string;
  text: string;
  detailsText?: string;
  isRelevant: boolean;
  isNonRelevant: boolean;
}

const initialQuestionsData: Question[] = [
  {
    id: 'q1',
    number: '01',
    text: "Tell me about a time when you adopted a new technology or tool on your own. What motivated you, and what was the result?",
    detailsText: "(Looks for curiosity and initiative)",
    isRelevant: true,
    isNonRelevant: false,
  },
  {
    id: 'q2',
    number: '02',
    text: "How do you stay up to date with new trends or tools in your field? Have you come across anything AI-related?",
    detailsText: "(Assesses awareness and interest)",
    isRelevant: false,
    isNonRelevant: true,
  },
  {
    id: 'q3',
    number: '03',
    text: "Have you experimented with any AI tools, even casually? (e.g., ChatGPT, image generators, automation bots)",
    detailsText: "(Gauges willingness to experiment)",
    isRelevant: true,
    isNonRelevant: false,
  },
  {
    id: 'q4',
    number: '04',
    text: "Can you think of a repetitive or time-consuming task in your role that could benefit from automation or AI?",
    detailsText: "(Tests ability to identify practical AI opportunities)",
    isRelevant: false,
    isNonRelevant: true,
  },
  {
    id: 'q5',
    number: '05',
    text: "Tell me about a time you had to change your way of working because of a new process or tool. How did you respond?",
    detailsText: "(Evaluates adaptability)",
    isRelevant: true,
    isNonRelevant: false,
  },
  {
    id: 'q6',
    number: '06',
    text: "Can you open an AI tool of your choice and show me how you would use it to solve something or get a result? Pls walk me through the process, step by step",
    isRelevant: false,
    isNonRelevant: true,
  },
];

const AIQAssessmentPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestionsData);
  const [screenerNotes, setScreenerNotes] = useState<string>('');
  const [aiqLevel, setAiqLevel] = useState<AIQLevel | null>(null);

  useEffect(() => {
    const relevantCount = questions.filter(q => q.isRelevant).length;
    if (relevantCount >= 4) {
      setAiqLevel('High' as const);
    } else if (relevantCount >= 2) { // 2 or 3
      setAiqLevel('Medium' as const);
    } else { // 0 or 1
      setAiqLevel('Low' as const);
    }
  }, [questions]);

  const handleRelevantToggle = (questionId: string) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q =>
        q.id === questionId
          ? { ...q, isRelevant: !q.isRelevant, isNonRelevant: !q.isRelevant ? false : q.isNonRelevant }
          : q
      )
    );
  };

  const handleNonRelevantToggle = (questionId: string) => {
    setQuestions(prevQuestions =>
      prevQuestions.map(q =>
        q.id === questionId
          ? { ...q, isNonRelevant: !q.isNonRelevant, isRelevant: !q.isNonRelevant ? false : q.isRelevant }
          : q
      )
    );
  };

  return (
    <MainAppLayout
      headerContent={<PageHeader />}
      footerContent={<ScreenerNotes notes={screenerNotes} onNotesChange={setScreenerNotes} />}
    >
      <div className={cn(
        "w-full max-w-screen-lg mx-auto px-10 py-6 flex flex-col gap-6",
        // Layout Requirements: mainContent.layout = "flex flex-col gap-6 px-10 py-6"
        // Layout Requirements: mainContent.container = "flex flex-col gap-6"
      )}>
        {/* Header row for Relevant/Non-Relevant toggle columns */}
        <div className="flex items-center w-full text-sm font-medium text-muted-foreground">
          <div className="w-10 flex-shrink-0" aria-hidden="true" /> {/* Spacer for question number column */}
          <div className="flex-grow px-4" aria-hidden="true" /> {/* Spacer for question text column */}
          <div className="w-[100px] flex-shrink-0 text-center ml-2 mr-1">Relevant</div>
          <div className="w-[120px] flex-shrink-0 text-center ml-1">Non-Relevant</div>
        </div>

        {/* Question Blocks List */}
        {questions.map(q => (
          <QuestionBlock
            key={q.id}
            questionNumber={q.number}
            questionText={q.text}
            detailsText={q.detailsText}
            isRelevant={q.isRelevant}
            onRelevantToggle={() => handleRelevantToggle(q.id)}
            isNonRelevant={q.isNonRelevant}
            onNonRelevantToggle={() => handleNonRelevantToggle(q.id)}
          />
        ))}

        {/* AIQ Level Calculator Section */}
        <AIQLevelCalculator currentLevel={aiqLevel} />
      </div>
    </MainAppLayout>
  );
};

export default AIQAssessmentPage;
