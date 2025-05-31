
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home } from 'lucide-react';

interface FloatingActionButtonProps {
  isVisible: boolean;
  onScrollToTop: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ isVisible, onScrollToTop }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 lg:hidden"
        >
          <button
            onClick={onScrollToTop}
            className="bg-gradient-to-r from-royal-600 to-royal-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[56px] min-h-[56px] flex items-center justify-center"
            aria-label="Back to Top"
          >
            <Home size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;
