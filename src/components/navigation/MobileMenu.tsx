
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, User, Users, GraduationCap, BookOpen, Clock, Mail } from 'lucide-react';
import ProgressiveImage from '@/components/ui/progressive-image';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const navigationItems = [
  { name: "About", path: "about", description: "Biography & credentials", icon: User },
  { name: "Community", path: "community", description: "Service & welfare programs", icon: Users },
  { name: "Education", path: "education", description: "DQAA & academic work", icon: GraduationCap },
  { name: "Publications", path: "publications", description: "Books & writings", icon: BookOpen },
  { name: "Milestones", path: "milestones", description: "Timeline of key events", icon: Clock },
  { name: "Contact", path: "contact", description: "Get in touch", icon: Mail },
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
          className="fixed inset-0 bg-white/95 backdrop-blur-xl z-50 lg:hidden overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="h-full flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-royal-100/20">
              <ProgressiveImage
                src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
                alt="P.T. Abdul Rahman"
                className="h-8 sm:h-10 w-auto"
                priority={true}
              />
              <button
                onClick={onClose}
                className="p-3 text-royal-800 hover:bg-royal-50 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6">
              <div className="space-y-2">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`flex items-center w-full text-left group py-3 px-4 rounded-xl transition-all duration-300 min-h-[56px] ${
                        activeSection === item.path 
                          ? 'bg-royal-50 border border-royal-100'
                          : 'hover:bg-royal-50/50'
                      }`}
                    >
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 ${
                        activeSection === item.path
                          ? 'bg-royal-800 text-white'
                          : 'bg-royal-50 text-royal-600 group-hover:bg-royal-100'
                      }`}>
                        <item.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-royal-900">
                          {item.name}
                        </h3>
                        <p className="text-royal-500 text-sm">{item.description}</p>
                      </div>
                      <ChevronRight size={18} className="text-royal-300" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-royal-100/20">
              <p className="text-sm text-royal-400 text-center">
                © {new Date().getFullYear()} P.T. Abdul Rahman
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
