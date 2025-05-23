
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  User, 
  BookOpen, 
  Award, 
  MessageCircle, 
  Menu, 
  X,
  ChevronRight 
} from 'lucide-react';

const StoryNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Story-based navigation structure
  const storyPillars = [
    {
      name: "The Scholar",
      icon: User,
      path: "/#biography",
      description: "Journey of knowledge and faith",
      sections: ["Biography", "Timeline", "Philosophy"]
    },
    {
      name: "The Work", 
      icon: BookOpen,
      path: "/#dqaa",
      description: "Educational legacy and institutions",
      sections: ["DQAA", "Books", "Publications"]
    },
    {
      name: "The Impact",
      icon: Award, 
      path: "/#humanitarian",
      description: "Global recognition and humanitarian efforts",
      sections: ["Awards", "Humanitarian", "Media"]
    },
    {
      name: "Connect",
      icon: MessageCircle,
      path: "/#contact",
      description: "Reach out and engage",
      sections: ["Contact", "Speaking", "Collaborations"]
    }
  ];

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const observers = new Map();
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    document.querySelectorAll('section[id]').forEach(section => {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(section);
      observers.set(section.id, observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        window.history.pushState({}, '', path);
      }
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    open: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'py-6 bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <motion.img
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
              alt="Dr. P.T. Abdul Rahman"
              className={`h-12 transition-all duration-300 ${
                !isScrolled && location.pathname === '/' ? 'filter brightness-0 invert' : ''
              }`}
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {storyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <a
                  href={pillar.path}
                  onClick={(e) => handleNavClick(e, pillar.path)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isScrolled || location.pathname !== '/'
                      ? 'text-royal-800 hover:text-golden-600'
                      : 'text-white hover:text-golden-300'
                  } flex items-center space-x-2`}
                >
                  <pillar.icon size={18} />
                  <span>{pillar.name}</span>
                </a>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-golden-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 lg:hidden overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="container mx-auto px-4 pt-20 pb-16 h-full flex flex-col">
              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-royal-800 hover:bg-gray-100 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto">
                <motion.h2
                  className="text-3xl font-playfair font-bold text-royal-900 mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Explore the Journey
                </motion.h2>

                <div className="space-y-8">
                  {storyPillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.name}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      className="border-b border-gray-100 pb-6"
                    >
                      <a
                        href={pillar.path}
                        onClick={(e) => handleNavClick(e, pillar.path)}
                        className="flex items-center space-x-4 text-royal-800 hover:text-golden-600 transition-colors group"
                      >
                        <div className="p-3 bg-gradient-to-br from-golden-50 to-royal-50 rounded-xl group-hover:from-golden-100 group-hover:to-royal-100 transition-colors">
                          <pillar.icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-playfair font-semibold">{pillar.name}</h3>
                          <p className="text-gray-600 text-sm mt-1">{pillar.description}</p>
                        </div>
                        <ChevronRight size={20} className="text-gray-400 group-hover:text-golden-600" />
                      </a>
                      
                      <div className="mt-4 ml-16 grid grid-cols-2 gap-2">
                        {pillar.sections.map((section) => (
                          <span 
                            key={section}
                            className="text-sm text-gray-500 py-1"
                          >
                            {section}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <motion.div
                className="mt-8 pt-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm text-gray-500 text-center">
                  Dr. P.T. Abdul Rahman • Islamic Scholar & Humanitarian
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Progress Indicator */}
      {isScrolled && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-golden-500 to-royal-500 z-40 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: typeof window !== 'undefined' 
              ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
              : 0
          }}
          style={{ transformOrigin: 'left' }}
        />
      )}
    </>
  );
};

export default StoryNavigation;
