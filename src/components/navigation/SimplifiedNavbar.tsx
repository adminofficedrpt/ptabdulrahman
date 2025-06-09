
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SimplifiedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "About", href: "/#about", description: "Dr. Rahman's journey and vision" },
    { name: "Books", href: "/#books", description: "Published works and writings" },
    { name: "Academy", href: "/#academy", description: "DQAA educational institution" },
    { name: "Impact", href: "/#impact", description: "Humanitarian work and achievements" },
    { name: "Gallery", href: "/gallery", description: "Visual journey and moments" },
    { name: "Contact", href: "/#contact", description: "Get in touch" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        window.history.pushState({}, '', href);
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman" 
            className={`h-12 transition-all duration-300 ${
              !isScrolled && location.pathname === "/" ? 'filter brightness-0 invert' : ''
            }`}
            width="48"
            height="48"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="group relative">
              {item.href.startsWith('/#') ? (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled || location.pathname !== "/"
                      ? "text-royal-800 hover:text-golden-600"
                      : "text-white hover:text-golden-300"
                  }`}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled || location.pathname !== "/"
                      ? "text-royal-800 hover:text-golden-600"
                      : "text-white hover:text-golden-300"
                  }`}
                >
                  {item.name}
                </Link>
              )}
              
              {/* Hover tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-royal-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="/#academy"
            onClick={(e) => handleNavClick(e, "/#academy")}
            className="bg-gradient-to-r from-golden-500 to-golden-600 text-white px-6 py-2 rounded-full font-medium hover:from-golden-600 hover:to-golden-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join DQAA
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-full ${
            isScrolled || location.pathname !== "/" ? "text-royal-800" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white/98 backdrop-blur-md shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-3 border-b border-gray-100 text-royal-800 hover:text-golden-600 transition-colors"
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-3 border-b border-gray-100 text-royal-800 hover:text-golden-600 transition-colors"
                    >
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <a
                  href="/#academy"
                  onClick={(e) => handleNavClick(e, "/#academy")}
                  className="block w-full bg-gradient-to-r from-golden-500 to-golden-600 text-white px-6 py-3 rounded-full font-medium text-center hover:from-golden-600 hover:to-golden-700 transition-all duration-300"
                >
                  Join DQAA
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default SimplifiedNavbar;
