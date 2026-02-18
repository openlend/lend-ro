'use client';

import { useState } from 'react';

interface ReadMoreProps {
  text: string;
  maxWords?: number;
}

export default function ReadMore({ text, maxWords = 75 }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const words = text.split(' ');
  const shouldTruncate = words.length > maxWords;
  const displayText = shouldTruncate && !isExpanded 
    ? words.slice(0, maxWords).join(' ') + '...' 
    : text;

  return (
    <div>
      <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
        {displayText}
      </p>
      
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 inline-flex items-center gap-2 text-sage font-bold hover:text-sage/80 transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Ascunde detaliile</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </>
          ) : (
            <>
              <span>Citește mai mult</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
}
