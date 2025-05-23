
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NavigationSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Navigation structure with clear sections
  const navigationItems = [
    {
      name: "About Dr. Rahman",
      path: "#about",
      description: "Learn about his life and mission"
    },
    {
      name: "Timeline", 
      path: "#timeline",
      description: "Journey through key milestones"
    },
    {
      name: "Books & Publications",
      path: "#books", 
      description: "Literary contributions and works"
    },
    {
      name: "DQAA Academy",
      path: "#dqaa",
      description: "Educational institution he founded"
    },
    {
      name: "Awards & Recognition",
      path: "#awards",
      description: "Global recognition and honors"
    },
    {
      name: "Humanitarian Work",
      path: "#humanitarian", 
      description: "Community service and impact"
    },
    {
      name: "Contact",
      path: "#contact",
      description: "Get in touch"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (path.startsWith('#')) {
      const elementId = path.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start' 
        });
        // Update URL without page reload
        window.history.pushState({}, '', path);
      }
    }
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="relative z-10">
            <motion.img
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
              alt="Dr. P.T. Abdul Rahman"
              className={`h-12 transition-all duration-300 ${
                !isScrolled && location.pathname === '/' ? 'filter brightness-0 invert' : ''
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.slice(0, 5).map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-royal-800 hover:text-golden-600'
                    : 'text-white hover:text-golden-300'
                }`}
                title={item.description}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled || location.pathname !== '/' 
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
            <div className="container mx-auto px-4 pt-20 pb-16 h-full flex flex-col">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-royal-800 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto">
                <h2 className="text-2xl font-playfair font-bold text-royal-900 mb-8">
                  Explore Dr. Rahman's Journey
                </h2>

                <div className="space-y-6">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 pb-4"
                    >
                      <a
                        href={item.path}
                        onClick={(e) => handleNavClick(e, item.path)}
                        className="block group"
                      >
                        <h3 className="text-xl font-playfair font-semibold text-royal-800 group-hover:text-golden-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      </a>
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
