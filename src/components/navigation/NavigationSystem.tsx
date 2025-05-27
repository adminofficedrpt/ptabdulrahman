
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const NavigationSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection, scrollToSection } = useScrollNavigation();

  // Navigation structure with chapter-based sections
  const navigationItems = [
    {
      name: "The Visionary",
      path: "visionary",
      description: "Philosophy and vision for Islamic education"
    },
    {
      name: "The Bridge Builder", 
      path: "bridge-builder",
      description: "Community service and interfaith dialogue"
    },
    {
      name: "The Educator",
      path: "educator", 
      description: "DQAA Academy and educational innovation"
    },
    {
      name: "The Scholar",
      path: "scholar",
      description: "Books, publications, and intellectual contributions"
    },
    {
      name: "The Legacy",
      path: "legacy",
      description: "Timeline of achievements and impact"
    },
    {
      name: "Connect",
      path: "connect",
      description: "Get in touch and join the community"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    scrollToSection(path);
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 sm:py-4 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'py-4 sm:py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <button onClick={() => scrollToSection('hero')} className="relative z-10 flex-shrink-0">
            <motion.img
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
              alt="Dr. P.T. Abdul Rahman"
              className={`h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 ${
                !isScrolled ? 'filter brightness-0 invert' : ''
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.slice(0, 4).map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors duration-300 relative whitespace-nowrap ${
                  isScrolled
                    ? 'text-royal-800 hover:text-golden-600'
                    : 'text-white hover:text-golden-300'
                } ${
                  activeSection === item.path ? 'text-golden-600' : ''
                }`}
                title={item.description}
              >
                {item.name}
                {activeSection === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-golden-600"
                    layoutId="activeIndicator"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isScrolled 
                ? 'text-royal-800 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
                <h2 className="text-lg sm:text-xl font-playfair font-bold text-royal-900">
                  Dr. P.T.'s Journey
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-royal-800 hover:bg-gray-100 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="space-y-4 sm:space-y-6">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 pb-4 sm:pb-6"
                    >
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className="block w-full text-left group min-h-[44px] py-2"
                      >
                        <h3 className="text-lg sm:text-xl font-playfair font-semibold text-royal-800 group-hover:text-golden-600 transition-colors mb-1 sm:mb-2">
                          Chapter {index < 5 ? index + 1 : ''} {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationSystem;
