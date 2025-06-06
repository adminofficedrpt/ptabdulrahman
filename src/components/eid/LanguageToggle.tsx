
import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="absolute top-4 right-4 z-20"
    >
      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20">
        <Globe size={16} className="text-yellow-300" />
        
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'en'
              ? 'bg-yellow-300 text-blue-900'
              : 'text-white hover:bg-white/10'
          }`}
        >
          EN
        </button>
        
        <button
          onClick={() => onLanguageChange('ar')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            language === 'ar'
              ? 'bg-yellow-300 text-blue-900'
              : 'text-white hover:bg-white/10'
          }`}
        >
          عر
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageToggle;
