
import React from 'react';
import { motion } from 'framer-motion';

const TwinklingStars = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
    size: 1 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Shooting stars */}
      <motion.div
        className="absolute w-1 h-1 bg-yellow-300 rounded-full"
        style={{ left: '10%', top: '20%' }}
        animate={{
          x: [0, 200],
          y: [0, 100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 2,
          ease: "easeOut",
        }}
      />
      
      <motion.div
        className="absolute w-1 h-1 bg-yellow-300 rounded-full"
        style={{ left: '80%', top: '30%' }}
        animate={{
          x: [0, -150],
          y: [0, 80],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 5,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export default TwinklingStars;
