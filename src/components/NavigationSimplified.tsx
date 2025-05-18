
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Consolidated navigation structure
const mainNavItems = [
  { name: "Home", href: "/", ariaLabel: "Navigate to homepage" },
  { name: "About", href: "/#about", ariaLabel: "Learn about Dr. P.T. Abdul Rahman" },
  { name: "Work", href: "/#work", ariaLabel: "Dr. Rahman's work and contributions" },
  { name: "Media", href: "/#media", ariaLabel: "Media features and coverage" },
  { name: "Gallery", href: "/gallery", ariaLabel: "View photo gallery" },
  { name: "Contact", href: "/#contact", ariaLabel: "Get in touch" },
];

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface DropdownSection {
  title: string;
  items: DropdownItem[];
}

// Detailed submenu structure
const dropdownContent: Record<string, DropdownSection[]> = {
  "About": [
    {
      title: "Biography",
      items: [
        { name: "Life & Journey", href: "/#biography", description: "Dr. Rahman's life and professional journey" },
        { name: "Timeline", href: "/#timeline", description: "Key milestones and achievements" },
        { name: "Legacy", href: "/#legacy", description: "Dr. Rahman's enduring legacy" },
      ]
    }
  ],
  "Work": [
    {
      title: "Educational",
      items: [
        { name: "DQAA", href: "/#dqaa", description: "Darul Quran Abdulla Academy" },
        { name: "Admission", href: "/#admission", description: "DQAA admission information" },
        { name: "Support DQAA", href: "/#donate", description: "Support through donations" },
      ]
    },
    {
      title: "Publications & Service",
      items: [
        { name: "Books", href: "/#books", description: "Books authored by Dr. Rahman" },
        { name: "Humanitarian", href: "/#humanitarian", description: "Humanitarian work and initiatives" },
        { name: "Awards", href: "/#awards", description: "Honors and recognitions" },
      ]
    }
  ]
};

const NavigationSimplified = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    
    // Determine scroll direction and visibility
    setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
    
    // Apply background when scrolled
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        setActiveDropdown(null);
        // Update URL without page reload
        window.history.pushState({}, '', href);
      } else {
        window.location.href = href;
      }
    } else {
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
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
        <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
          {mainNavItems.map((item) => {
            const hasDropdown = dropdownContent[item.name];
            
            return (
              <div key={item.name} className="relative group">
                {hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`text-sm font-medium tracking-wide transition duration-300 flex items-center ${
                      isScrolled ? 'text-royal-800' : 'text-white'
                    } ${activeDropdown === item.name ? 'text-golden-600' : ''}`}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                    aria-label={`${item.name} menu`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                    <span className={`absolute bottom-0 left-0 h-0.5 w-0 ${
                      isScrolled ? 'bg-golden-600' : 'bg-golden-300'
                    } transition-all duration-300 group-hover:w-full ${
                      activeDropdown === item.name ? 'w-full' : ''
                    }`}></span>
                  </button>
                ) : (
                  <Link 
                    to={item.href}
                    onClick={(e) => item.href.startsWith('/#') && handleNavClick(e, item.href)}
                    className={`text-sm font-medium tracking-wide transition duration-300 relative group ${
                      isScrolled ? 'text-royal-800' : 'text-white'
                    }`}
                    aria-label={item.ariaLabel}
                  >
                    <span>{item.name}</span>
                    <span className={`absolute bottom-0 left-0 h-0.5 w-0 ${
                      isScrolled ? 'bg-golden-600' : 'bg-golden-300'
                    } transition-all duration-300 group-hover:w-full`}></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-72 bg-white rounded-xl shadow-xl overflow-hidden z-20"
                      >
                        <div className="p-4 grid gap-6">
                          {dropdownContent[item.name].map((section, idx) => (
                            <div key={idx}>
                              <h3 className="font-medium text-royal-800 mb-2">{section.title}</h3>
                              <ul className="space-y-1">
                                {section.items.map((subItem, subIdx) => (
                                  <li key={subIdx}>
                                    <Link
                                      to={subItem.href}
                                      onClick={(e) => subItem.href.startsWith('/#') && handleNavClick(e, subItem.href)}
                                      className="block p-2 rounded-lg hover:bg-royal-50 transition-colors text-royal-700 hover:text-royal-900"
                                    >
                                      <div className="font-medium text-sm">{subItem.name}</div>
                                      {subItem.description && (
                                        <div className="text-xs text-gray-500 mt-0.5">{subItem.description}</div>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full ${isScrolled ? 'text-royal-800' : 'text-white'} ${isOpen ? 'bg-gray-100' : ''}`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 overflow-hidden z-20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="menu"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {mainNavItems.map((item, index) => {
                  const hasDropdown = dropdownContent[item.name];
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      {hasDropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.name)}
                            className="w-full flex justify-between items-center p-3 rounded-lg text-royal-800 font-medium hover:bg-gray-100 transition-colors"
                            aria-expanded={activeDropdown === item.name}
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="pl-4 py-2 space-y-4">
                                  {dropdownContent[item.name].map((section, idx) => (
                                    <div key={idx}>
                                      <h3 className="text-sm font-medium text-royal-800 mb-1 ml-2">{section.title}</h3>
                                      <ul>
                                        {section.items.map((subItem, subIdx) => (
                                          <li key={subIdx}>
                                            <Link
                                              to={subItem.href}
                                              onClick={(e) => subItem.href.startsWith('/#') && handleNavClick(e, subItem.href)}
                                              className="block p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                                            >
                                              {subItem.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={(e) => item.href.startsWith('/#') && handleNavClick(e, item.href)}
                          className="block p-3 rounded-lg text-royal-800 font-medium hover:bg-gray-100 transition-colors"
                          aria-label={item.ariaLabel}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationSimplified;
