
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TextRevealAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TextRevealAnimation: React.FC<TextRevealAnimationProps> = ({
  text,
  className = '',
  delay = 0,
  speed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-yellow-300"
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
};

export default TextRevealAnimation;
