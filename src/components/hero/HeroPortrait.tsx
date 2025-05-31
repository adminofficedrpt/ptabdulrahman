
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
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
        <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
          <ProgressiveImage
            src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
            alt="Dr. P.T. Abdul Rahman"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900/40 to-transparent" />
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -top-4 -right-4 bg-gradient-to-r from-golden-500 to-golden-600 p-4 rounded-full shadow-lg"
        >
          <Award className="h-8 w-8 text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroPortrait;
