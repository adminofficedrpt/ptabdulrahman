
import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from '@/components/ui/progressive-image';

const HeroPortrait: React.FC = () => {
  return (
    <div className="lg:col-span-5 flex justify-center lg:justify-end">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative"
      >
        <div className="relative w-72 h-80 md:w-96 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
          <ProgressiveImage
            src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
            alt="P.T. Abdul Rahman"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900/30 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroPortrait;
