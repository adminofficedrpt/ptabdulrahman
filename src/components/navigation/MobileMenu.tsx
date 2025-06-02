
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, User, BookOpen, GraduationCap, Building, MessageCircle, Phone } from 'lucide-react';
import ProgressiveImage from '@/components/ui/progressive-image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (path: string) => void;
}

const navigationItems = [
  { icon: Home, label: 'Home', path: 'hero', description: 'Back to top' },
  { icon: User, label: 'Visionary Author', path: 'visionary', description: 'Literary journey' },
  { icon: Building, label: 'Humanitarian Leader', path: 'bridge-builder', description: 'Service & impact' },
  { icon: GraduationCap, label: 'Educational Pioneer', path: 'educator', description: 'Innovation & institutions' },
  { icon: BookOpen, label: 'Published Works', path: 'scholar', description: 'Books & writings' },
  { icon: MessageCircle, label: 'Legacy Timeline', path: 'legacy', description: 'Career journey' },
  { icon: Phone, label: 'Connect', path: 'connect', description: 'Get in touch' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavClick }) => {
  const handleNavClick = (path: string) => {
    onNavClick(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 shadow-2xl lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-royal-800 to-royal-700 text-white">
              <div className="flex items-center space-x-3">
                <ProgressiveImage
                  src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
                  alt="Dr. P.T. Abdul Rahman"
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="font-semibold text-sm">Dr. P.T. Abdul Rahman</h3>
                  <p className="text-xs text-royal-200">Visionary Educator & Leader</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="overflow-y-auto flex-1 py-6">
              <nav className="px-4">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="w-full flex items-center space-x-4 p-4 rounded-xl hover:bg-royal-50 transition-all duration-200 text-left group min-h-[64px]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-royal-500 to-golden-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-royal-800 text-base group-hover:text-royal-700">
                        {item.label}
                      </h4>
                      <p className="text-sm text-royal-600 group-hover:text-royal-500">
                        {item.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center mb-3">
                Crafted & Managed by AI8TY Creative Agency
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://ai8ty.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-golden-600 hover:text-golden-700 transition-colors"
                >
                  Premium Digital Experience
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
