
import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Only show progress bar after scrolling down a bit
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 h-1 bg-golden-500/30 z-[100]"
      style={{ scaleX: scrollYProgress }}
      initial={{ originX: 0 }}
    />
  );
};

export default ScrollProgressBar;
