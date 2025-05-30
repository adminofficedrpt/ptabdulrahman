
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight, Home, User, BookOpen, Award, MessageCircle } from 'lucide-react';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import ProgressiveImage from '@/components/ui/progressive-image';
import IslamicPattern from '@/components/design-system/IslamicPattern';

// Navigation structure with enhanced accessibility and mobile optimization
const navigationItems = [
  {
    name: "The Visionary",
    path: "visionary",
    description: "Philosophy and vision for Islamic education",
    icon: User
  },
  {
    name: "The Bridge Builder", 
    path: "bridge-builder",
    description: "Community service and interfaith dialogue",
    icon: Award
  },
  {
    name: "The Educator",
    path: "educator", 
    description: "DQAA Academy and educational innovation",
    icon: BookOpen
  },
  {
    name: "The Scholar",
    path: "scholar",
    description: "Books, publications, and intellectual contributions",
    icon: BookOpen
  },
  {
    name: "The Legacy",
    path: "legacy",
    description: "Timeline of achievements and impact",
    icon: Award
  },
  {
    name: "Connect",
    path: "connect",
    description: "Get in touch and join the community",
    icon: MessageCircle
  }
];

const NavigationSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSection, scrollToSection } = useScrollNavigation();
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll for navbar styling and background transition
  useEffect(() => {
    const handleScroll = () => {
      // Use different threshold for mobile vs desktop
      const scrollThreshold = window.innerWidth < 768 ? 30 : 50;
      const isScrolledNow = window.scrollY > scrollThreshold;
      
      setIsScrolled(isScrolledNow);
      
      if (!hasScrolled && isScrolledNow) {
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);
  
  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023 && isOpen) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    scrollToSection(path);
  };

  return (
    <>
      {/* Fixed Navigation Bar - Optimized for all screen sizes */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'py-3 md:py-4 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo - Responsive sizing */}
          <button 
            onClick={() => scrollToSection('hero')} 
            className="relative z-10 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center"
            aria-label="Back to Top"
          >
            <ProgressiveImage
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
              alt="Dr. P.T. Abdul Rahman"
              className={`h-8 sm:h-10 w-auto transition-all duration-300 ${
                !isScrolled ? 'filter brightness-0 invert' : ''
              }`}
              priority={true}
            />
          </button>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors duration-300 relative whitespace-nowrap px-4 py-2 rounded-full min-h-[44px] flex items-center ${
                  isScrolled
                    ? 'text-royal-800 hover:text-golden-600 hover:bg-gray-50'
                    : 'text-white hover:text-golden-300 hover:bg-white/10'
                } ${
                  activeSection === item.path ? (isScrolled ? 'text-golden-600' : 'text-golden-400') : ''
                }`}
                title={item.description}
              >
                <item.icon className="h-4 w-4 mr-2" />
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

          {/* Mobile Menu Button - Enhanced touch target */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-3 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isScrolled 
                ? 'text-royal-800 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu - Optimized for all screen sizes */}
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
                  onClick={() => setIsOpen(false)}
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

              {/* Navigation Items - Scrollable container */}
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

      {/* Mobile Floating Action Button - Fixed at bottom of screen when scrolled */}
      <AnimatePresence>
        {hasScrolled && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40 lg:hidden"
          >
            <button
              onClick={() => scrollToSection('hero')}
              className="bg-gradient-to-r from-royal-600 to-royal-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-w-[56px] min-h-[56px] flex items-center justify-center"
              aria-label="Back to Top"
            >
              <Home size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationSystem;
