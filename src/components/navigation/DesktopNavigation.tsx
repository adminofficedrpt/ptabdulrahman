
import React from 'react';
import { motion } from 'framer-motion';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import { Link } from 'react-router-dom';

const navigationItems = [
  {
    name: "The Visionary",
    path: "visionary",
    description: "Philosophy and vision for Islamic education",
  },
  {
    name: "The Bridge Builder", 
    path: "bridge-builder",
    description: "Community service and interfaith dialogue",
  },
  {
    name: "The Educator",
    path: "educator", 
    description: "DQAA Academy and educational innovation",
  },
  {
    name: "The Scholar",
    path: "scholar",
    description: "Books, publications, and intellectual contributions",
  },
  {
    name: "The Legacy",
    path: "legacy",
    description: "Timeline of achievements and impact",
  },
  {
    name: "Connect",
    path: "connect",
    description: "Get in touch and join the community",
  }
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
              ? 'text-royal-800 hover:text-golden-600 hover:bg-gray-50'
              : 'text-white hover:text-golden-300 hover:bg-white/10'
          } ${
            activeSection === item.path ? (isScrolled ? 'text-golden-600' : 'text-golden-400') : ''
          }`}
          title={item.description}
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
      
      {/* Eid Greeting Link */}
      <Link
        to="/eid"
        className={`text-sm font-medium transition-colors duration-300 relative whitespace-nowrap px-4 py-2 rounded-full min-h-[44px] flex items-center ${
          isScrolled
            ? 'text-royal-800 hover:text-golden-600 hover:bg-gray-50'
            : 'text-white hover:text-golden-300 hover:bg-white/10'
        }`}
        title="Eid ul Adha greeting card"
      >
        <span>Eid Greetings</span>
      </Link>
    </div>
  );
};

export default DesktopNavigation;
