
import React from 'react';
import { motion } from 'framer-motion';

const CrescentMoon = () => {
  return (
    <div className="relative">
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-yellow-300/30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width: '120px', height: '120px' }}
      />
      
      {/* Crescent Moon SVG */}
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className="relative z-10"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="moonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <filter id="moonShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Crescent Shape */}
        <path
          d="M 30 20 Q 70 30 70 50 Q 70 70 30 80 Q 50 65 50 50 Q 50 35 30 20 Z"
          fill="url(#moonGradient)"
          filter="url(#moonShadow)"
        />
        
        {/* Stars around moon */}
        <motion.circle
          cx="20"
          cy="30"
          r="1.5"
          fill="#ffffff"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0,
          }}
        />
        <motion.circle
          cx="80"
          cy="25"
          r="1"
          fill="#ffffff"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="85"
          cy="60"
          r="1.5"
          fill="#ffffff"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default CrescentMoon;
