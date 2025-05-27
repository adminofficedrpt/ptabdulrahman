
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const ChapterNavigation: React.FC = () => {
  const { activeSection, scrollToSection } = useScrollNavigation();

  const chapters = [
    { id: 'visionary', number: 1, title: 'The Visionary', shortTitle: 'Visionary' },
    { id: 'bridge-builder', number: 2, title: 'The Bridge Builder', shortTitle: 'Bridge Builder' },
    { id: 'educator', number: 3, title: 'The Educator', shortTitle: 'Educator' },
    { id: 'scholar', number: 4, title: 'The Scholar', shortTitle: 'Scholar' },
    { id: 'legacy', number: 5, title: 'The Legacy', shortTitle: 'Legacy' },
    { id: 'connect', number: 6, title: 'Connect', shortTitle: 'Connect' }
  ];

  return (
    <motion.nav 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-xl border border-royal-100">
        {chapters.map((chapter) => (
          <motion.button
            key={chapter.id}
            onClick={() => scrollToSection(chapter.id)}
            className={`block w-12 h-12 rounded-full mb-2 last:mb-0 transition-all duration-300 relative group ${
              activeSection === chapter.id
                ? 'bg-gradient-to-br from-royal-500 to-golden-500 text-white shadow-lg'
                : 'bg-white text-royal-600 hover:bg-royal-50'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={chapter.title}
          >
            <span className="text-sm font-bold">{chapter.number}</span>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-royal-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                {chapter.title}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-royal-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default ChapterNavigation;
