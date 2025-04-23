
import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarEnhanced = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    
    // Determine scroll direction and visibility
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    
    // Apply background when scrolled
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/", ariaLabel: "Navigate to homepage" },
    { name: "About", href: "/#biography", ariaLabel: "Learn about Dr. P.T. Abdul Rahman" },
    { name: "Timeline", href: "/#timeline", ariaLabel: "View Dr. Rahman's timeline of achievements" },
    { name: "DQAA", href: "/#dqaa", ariaLabel: "Information about Darul Quran Abdulla Academy" },
    { name: "Admission", href: "/#admission", ariaLabel: "DQAA admission information" },
    { name: "Books", href: "/#books", ariaLabel: "Books authored by Dr. Rahman" },
    { name: "Humanitarian", href: "/#humanitarian", ariaLabel: "Dr. Rahman's humanitarian work" },
    { name: "Awards", href: "/#awards", ariaLabel: "Awards and recognitions received" },
    { name: "Media", href: "/#media", ariaLabel: "Media features and coverage" },
    { name: "Gallery", href: "/gallery", ariaLabel: "View photo gallery" },
    { name: "Donate", href: "/#donate", ariaLabel: "Support DQAA through donations" },
    { name: "Legacy", href: "/#legacy", ariaLabel: "Dr. Rahman's enduring legacy" }
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" && !location.hash;
    }
    
    if (href.startsWith("/#")) {
      return location.hash === href.replace("/", "");
    }
    
    return location.pathname === href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        // Update URL without page reload - helps with analytics and bookmarking
        window.history.pushState({}, '', href);
      } else {
        window.location.href = href;
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center z-10" aria-label="Homepage">
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman Logo" 
            className={`h-12 transition-all duration-300 ${!isScrolled ? 'filter brightness-0 invert' : ''}`}
            width="48"
            height="48"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6" role="menubar">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition duration-300 relative group ${
                  isScrolled ? 'text-royal-800' : 'text-white'
                }`}
                role="menuitem"
                aria-label={link.ariaLabel}
              >
                <span>{link.name}</span>
                <span className={`absolute bottom-0 left-0 h-0.5 ${
                  isActive(link.href) 
                    ? `w-full ${isScrolled ? 'bg-golden-600' : 'bg-golden-300'}` 
                    : 'w-0'
                } ${
                  isScrolled ? 'bg-golden-600' : 'bg-golden-300'
                } transition-all duration-300 group-hover:w-full`}></span>
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className={`text-sm font-medium tracking-wide transition duration-300 relative group ${
                  isScrolled ? 'text-royal-800' : 'text-white'
                }`}
                role="menuitem"
                aria-label={link.ariaLabel}
              >
                <span>{link.name}</span>
                <span className={`absolute bottom-0 left-0 h-0.5 ${
                  isActive(link.href) 
                    ? `w-full ${isScrolled ? 'bg-golden-600' : 'bg-golden-300'}` 
                    : 'w-0'
                } ${
                  isScrolled ? 'bg-golden-600' : 'bg-golden-300'
                } transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            )
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={isScrolled ? 'text-royal-800' : 'text-white'}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="lg:hidden bg-white/95 backdrop-blur-sm shadow-xl absolute top-full left-0 right-0 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="menu"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-0">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-royal-800 hover:text-golden-600 transition duration-300 py-3 border-b border-gray-100 block font-medium ${
                        isActive(link.href) ? 'text-golden-600' : ''
                      }`}
                      role="menuitem"
                      aria-label={link.ariaLabel}
                    >
                      {link.name}
                      {isActive(link.href) && (
                        <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-golden-600"></span>
                      )}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`text-royal-800 hover:text-golden-600 transition duration-300 py-3 border-b border-gray-100 block font-medium ${
                        isActive(link.href) ? 'text-golden-600' : ''
                      }`}
                      role="menuitem"
                      aria-label={link.ariaLabel}
                    >
                      {link.name}
                      {isActive(link.href) && (
                        <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-golden-600"></span>
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavbarEnhanced;
