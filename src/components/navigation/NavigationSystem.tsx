import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ProgressiveImage from '@/components/ui/progressive-image';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const navigationItems = [
  { name: "About", path: "about" },
  { name: "Career", path: "career" },
  { name: "Publications", path: "publications" },
  { name: "Milestones", path: "milestones" },
  { name: "Contact", path: "contact" },
];

const NavigationSystem = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection, activeSection } = useScrollNavigation();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav only after scrolling past the hero
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(path);
  };

  return (
    <>
      {/* Sticky nav - appears on scroll */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
        initial={{ y: -80 }}
        animate={{ y: isVisible ? 0 : -80 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center h-14">
          <button
            onClick={() => scrollToSection('hero')}
            className="min-w-[44px] min-h-[44px] flex items-center"
            aria-label="Back to Top"
          >
            <ProgressiveImage
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
              alt="P.T. Abdul Rahman"
              className="h-7 w-auto"
              priority
            />
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 min-h-[44px] flex items-center ${
                  activeSection === item.path
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-playfair font-bold text-lg text-foreground">P.T. Abdul Rahman</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground"
                  aria-label="Close Menu"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-6">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`text-left py-5 border-b border-border font-playfair text-2xl transition-colors ${
                      activeSection === item.path
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              <div className="p-6 border-t border-border">
                <p className="text-xs text-muted-foreground tracking-[0.1em] uppercase">
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
