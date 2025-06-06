
import React from 'react';
import { motion } from 'framer-motion';

const IslamicPattern = () => {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="absolute inset-0"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <pattern id="islamicPattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <g fill="none" stroke="currentColor" strokeWidth="1" className="text-yellow-300">
              {/* Star pattern */}
              <polygon 
                points="50,10 60,35 85,35 65,55 75,80 50,65 25,80 35,55 15,35 40,35" 
                strokeWidth="1.5"
              />
              {/* Geometric circles */}
              <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" strokeWidth="0.5" />
              {/* Corner decorations */}
              <path d="M10,10 Q20,20 10,30 Q20,20 30,10" strokeWidth="0.5" />
              <path d="M90,10 Q80,20 90,30 Q80,20 70,10" strokeWidth="0.5" />
              <path d="M10,90 Q20,80 10,70 Q20,80 30,90" strokeWidth="0.5" />
              <path d="M90,90 Q80,80 90,70 Q80,80 70,90" strokeWidth="0.5" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamicPattern)" />
      </motion.svg>

      {/* Additional decorative elements */}
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 border border-yellow-300/20 rounded-full"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-12 h-12 border border-yellow-300/20"
        style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default IslamicPattern;
