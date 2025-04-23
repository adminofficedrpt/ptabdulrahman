
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}: AnimatedSectionProps) => {
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 40, opacity: 0 };
      case 'down': return { y: -40, opacity: 0 };
      case 'left': return { x: 40, opacity: 0 };
      case 'right': return { x: -40, opacity: 0 };
      case 'none': return { opacity: 0 };
      default: return { y: 40, opacity: 0 };
    }
  };
  
  const getFinalPosition = () => {
    switch (direction) {
      case 'up': 
      case 'down': return { y: 0, opacity: 1 };
      case 'left':
      case 'right': return { x: 0, opacity: 1 };
      case 'none': return { opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };
  
  return (
    <motion.div 
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
