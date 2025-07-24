
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Home } from 'lucide-react';
import ProgressiveImage from '@/components/ui/progressive-image';
import IslamicPattern from '@/components/design-system/IslamicPattern';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const navigationItems = [
  {
    name: "The Visionary",
    path: "visionary",
    description: "Philosophy and vision for Islamic education",
    icon: Home
  },
  {
    name: "The Bridge Builder", 
    path: "bridge-builder",
    description: "Community service and interfaith dialogue",
    icon: Home
  },
  {
    name: "The Educator",
    path: "educator", 
    description: "DQAA Academy and educational innovation",
    icon: Home
  },
  {
    name: "The Scholar",
    path: "scholar",
    description: "Books, publications, and intellectual contributions",
    icon: Home
  },
  {
    name: "The Legacy",
    path: "legacy",
    description: "Timeline of achievements and impact",
    icon: Home
  },
  {
    name: "Connect",
    path: "connect",
    description: "Get in touch and join the community",
    icon: Home
  }
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavClick }) => {
  const { activeSection } = useScrollNavigation();

  const handleNavClick = (path: string) => {
    onNavClick(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 lg:hidden overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="h-full flex flex-col overflow-hidden">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div className="flex items-center">
                <ProgressiveImage
                  src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
                  alt="Dr. P.T. Abdul Rahman"
                  className="h-8 sm:h-10 w-auto mr-3"
                  priority={true}
                />
                <h2 className="text-lg font-playfair font-bold text-royal-900">
                  Menu
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-3 text-royal-800 hover:bg-gray-100 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <div className="grid grid-cols-4 gap-4 h-full">
                {Array.from({ length: 16 }).map((_, i) => (
                  <IslamicPattern key={i} variant="tessellation" size="md" animate />
                ))}
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="border-b border-gray-100 pb-3 sm:pb-4"
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`flex items-center w-full text-left group py-2 pr-2 rounded-lg transition-all duration-300 min-h-[56px] ${
                        activeSection === item.path 
                          ? 'bg-gradient-to-r from-royal-50 to-golden-50 text-royal-800'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`flex items-center justify-center min-w-[56px] h-12 mx-2 rounded-full ${
                        activeSection === item.path
                          ? 'bg-gradient-to-r from-golden-500 to-golden-600 text-white'
                          : 'bg-gray-100 text-royal-600 group-hover:bg-gray-200'
                      }`}>
                        <item.icon size={22} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-playfair font-semibold text-royal-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <ChevronRight size={20} className={`mr-2 ${
                        activeSection === item.path ? 'text-golden-600' : 'text-gray-400'
                      }`} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gradient-to-r from-royal-50 to-golden-50">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  © 2024 Dr. P.T. Abdul Rahman
                </p>
                <button
                  onClick={() => handleNavClick('connect')}
                  className="text-sm font-medium text-royal-800 hover:text-golden-600 min-h-[44px] flex items-center"
                >
                  Contact <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
