import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Users, GraduationCap, BookOpen, Clock, Mail, ChevronRight } from 'lucide-react';
import ProgressiveImage from '@/components/ui/progressive-image';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import { designTokens } from '@/lib/design-tokens';

const navigationItems = [
  { name: "About", path: "about", description: "Biography & credentials", icon: User },
  { name: "Community", path: "community", description: "Service & welfare programs", icon: Users },
  { name: "Education", path: "education", description: "DQAA & academic work", icon: GraduationCap },
  { name: "Publications", path: "publications", description: "Books & writings", icon: BookOpen },
  { name: "Milestones", path: "milestones", description: "Timeline of key events", icon: Clock },
  { name: "Contact", path: "contact", description: "Get in touch", icon: Mail },
];

const NavigationSystem = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection, activeSection } = useScrollNavigation();

  // Handle scroll for navbar styling and background transition
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerWidth < 768 ? 30 : 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(path);
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[${designTokens.zIndex.navigation}] transition-all duration-500 ${
          isScrolled 
            ? `py-2 bg-neutral-50/90 backdrop-blur-xl shadow-lg border-b border-neutral-200` 
            : `py-3 md:py-4 bg-transparent`
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: designTokens.animation.easing.smooth }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors duration-300 relative whitespace-nowrap px-4 py-2 rounded-full min-h-[44px] flex items-center ${
                  isScrolled
                    ? `text-primary-800 hover:text-accent-600 hover:bg-primary-50`
                    : `text-neutral-50 hover:text-accent-300 hover:bg-white/10`
                } ${
                  activeSection === item.path ? (isScrolled ? `text-accent-600` : `text-accent-400`) : ''
                }`}
              >
                <span>{item.name}</span>
                {activeSection === item.path && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${isScrolled ? `bg-accent-600` : `bg-accent-400`}`}
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`lg:hidden p-3 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center ${
              isScrolled 
                ? `text-primary-800 hover:bg-neutral-100` 
                : `text-neutral-50 hover:bg-white/10`
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed inset-0 bg-neutral-50/95 backdrop-blur-xl z-[${designTokens.zIndex.modal}] lg:hidden overflow-hidden`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-primary-100/20">
                <ProgressiveImage
                  src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
                  alt="P.T. Abdul Rahman"
                  className="h-8 sm:h-10 w-auto"
                  priority={true}
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 text-primary-800 hover:bg-primary-50 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                            ? `bg-primary-50 border border-primary-100`
                            : `hover:bg-primary-50/50`
                        }`}
                      >
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl mr-4 ${
                          activeSection === item.path
                            ? `bg-primary-800 text-neutral-50`
                            : `bg-primary-50 text-primary-600 group-hover:bg-primary-100`
                        }`}>
                          <item.icon size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-lg font-semibold text-primary-900`}>
                            {item.name}
                          </h3>
                          <p className={`text-primary-500 text-sm`}>{item.description}</p>
                        </div>
                        <ChevronRight size={18} className={`text-primary-300`} />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-primary-100/20">
                <p className={`text-sm text-primary-400 text-center`}>
                  © {new Date().getFullYear()} P.T. Abdul Rahman
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationSystem;
