
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const navigationItems = [
  { name: "About", path: "about" },
  { name: "Community", path: "community" },
  { name: "Education", path: "education" },
  { name: "Publications", path: "publications" },
  { name: "Milestones", path: "milestones" },
  { name: "Contact", path: "contact" },
];

interface DesktopNavigationProps {
  isScrolled: boolean;
  onNavClick: (path: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ isScrolled, onNavClick }) => {
  const { activeSection } = useScrollNavigation();

  return (
    <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {navigationItems.map((item) => (
        <button
          key={item.name}
          onClick={() => onNavClick(item.path)}
          className={`text-sm font-medium transition-colors duration-300 relative whitespace-nowrap px-4 py-2 rounded-full min-h-[44px] flex items-center ${
            isScrolled
              ? 'text-royal-800 hover:text-golden-600 hover:bg-royal-50'
              : 'text-white hover:text-golden-300 hover:bg-white/10'
          } ${
            activeSection === item.path ? (isScrolled ? 'text-golden-600' : 'text-golden-400') : ''
          }`}
        >
          <span>{item.name}</span>
          {activeSection === item.path && (
            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-0.5 ${isScrolled ? 'bg-golden-600' : 'bg-golden-400'}`}
              layoutId="activeIndicator"
              transition={{ duration: 0.3 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default DesktopNavigation;
