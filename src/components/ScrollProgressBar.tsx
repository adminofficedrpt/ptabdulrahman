
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressBarProps {
  height?: number;
  color?: string;
  zIndex?: number;
  showOnMobile?: boolean;
  position?: 'top' | 'bottom';
  showPercentage?: boolean;
}

/**
 * Enhanced mobile-optimized scroll progress bar
 */
const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  height = 3,
  color = 'linear-gradient(to right, rgb(210, 161, 20), rgb(30, 58, 138))',
  zIndex = 40,
  showOnMobile = true,
  position = 'top',
  showPercentage = false,
}) => {
  const [visible, setVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Smoother spring animation for the progress indicator
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Don't show progress until user has scrolled a bit
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1;
      setVisible(window.scrollY > scrollThreshold);
      
      // Calculate scroll percentage for display
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const total = docHeight - winHeight;
      const percentage = Math.round((scrolled / total) * 100);
      setScrollPercentage(percentage);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on mobile if specified
  if (!showOnMobile && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 pointer-events-none"
        style={{
          top: position === 'top' ? 0 : 'auto',
          bottom: position === 'bottom' ? 0 : 'auto',
          height,
          background: color,
          transformOrigin: 'left',
          scaleX,
          zIndex,
          opacity: visible ? 1 : 0,
        }}
        aria-hidden="true"
        transition={{
          opacity: { duration: 0.3 }
        }}
      />

      {/* Percentage indicator (optional) */}
      {showPercentage && visible && (
        <motion.div 
          className="fixed right-4 bottom-4 bg-royal-800 text-white text-xs font-medium px-2 py-1 rounded-full pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          style={{ zIndex }}
        >
          {scrollPercentage}%
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgressBar;
