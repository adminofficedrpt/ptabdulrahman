
import { useState, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
  className?: string;
  cursorClassName?: string;
  textClassName?: string;
}

const Typewriter = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBetween = 2000,
  className,
  cursorClassName,
  textClassName
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'deleting' | 'pausing'>('typing');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (phase === 'typing') {
      if (displayedText !== texts[index]) {
        timeout = setTimeout(() => {
          setDisplayedText(texts[index].substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase('pausing');
        }, delayBetween);
      }
    } 
    else if (phase === 'pausing') {
      timeout = setTimeout(() => {
        setPhase('deleting');
      }, delayBetween);
    }
    else if (phase === 'deleting') {
      if (displayedText) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase('typing');
          setIndex((index + 1) % texts.length);
        }, typingSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayedText, index, phase, texts, typingSpeed, deletingSpeed, delayBetween]);
  
  return (
    <span className={cn("relative", className)}>
      <span className={cn("transition-all duration-75", textClassName)}>
        {displayedText}
      </span>
      <span 
        className={cn("absolute -right-4 top-0 inline-block w-1 h-7 bg-golden-300 animate-cursor-blink", cursorClassName)}
        aria-hidden="true"
      ></span>
    </span>
  );
};

export default Typewriter;
