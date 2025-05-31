
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';
import ProgressiveImage from '@/components/ui/progressive-image';
import DesktopNavigation from './DesktopNavigation';
import MobileMenu from './MobileMenu';
import FloatingActionButton from './FloatingActionButton';

const NavigationSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useScrollNavigation();
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
      {/* Fixed Navigation Bar */}
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
          <DesktopNavigation isScrolled={isScrolled} onNavClick={handleNavClick} />

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNavClick={handleNavClick}
      />

      {/* Mobile Floating Action Button */}
      <FloatingActionButton 
        isVisible={hasScrolled && !isOpen}
        onScrollToTop={() => scrollToSection('hero')}
      />
    </>
  );
};

export default NavigationSystem;
