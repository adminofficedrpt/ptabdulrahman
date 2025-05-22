
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

// Define main navigation sections and their subsections
const navigationStructure = [
  {
    name: "Journey",
    path: "/#journey",
    description: "Dr. Rahman's life and professional journey",
    subsections: [
      { name: "Biography", path: "/#biography" },
      { name: "Timeline", path: "/#timeline" },
      { name: "Legacy", path: "/#legacy" },
    ]
  },
  {
    name: "Education",
    path: "/#education",
    description: "Educational initiatives and institutions",
    subsections: [
      { name: "DQAA", path: "/#dqaa" },
      { name: "Admission", path: "/#admission" },
      { name: "Support", path: "/#donate" },
    ]
  },
  {
    name: "Publications",
    path: "/#publications",
    description: "Books and scholarly works",
    subsections: [
      { name: "Books", path: "/#books" },
      { name: "Articles", path: "/#articles" },
    ]
  },
  {
    name: "Impact",
    path: "/#impact",
    description: "Humanitarian work and recognition",
    subsections: [
      { name: "Humanitarian", path: "/#humanitarian" },
      { name: "Awards", path: "/#awards" },
      { name: "Media", path: "/#media" },
    ]
  },
  {
    name: "Gallery",
    path: "/gallery",
    description: "Visual journey through moments and milestones",
    subsections: []
  },
];

const NavbarModern = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("/#")) {
      e.preventDefault();
      const id = path.replace("/#", "");
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        // Update URL without page reload
        window.history.pushState({}, "", path);
      } else {
        window.location.href = path;
      }
    }
  };

  // Check if a path is active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" && !location.hash;
    }
    
    if (path.startsWith("/#")) {
      return location.hash === path.replace("/", "");
    }
    
    return location.pathname === path;
  };

  // Animation variants
  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1]
      } 
    })
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-md" : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="z-10 relative" aria-label="Home">
            <img
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
              alt="Dr. P.T. Abdul Rahman Logo"
              className={`h-12 transition-all duration-300 ${
                !isScrolled && location.pathname === "/" ? "filter brightness-0 invert" : ""
              }`}
              width="48"
              height="48"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationStructure.map((item) => (
              <div key={item.name} className="relative group">
                {item.path.startsWith("/#") ? (
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`text-sm font-medium relative ${
                      isScrolled || location.pathname !== "/"
                        ? "text-royal-800"
                        : "text-white"
                    } hover:text-golden-600 transition-colors duration-300`}
                    aria-label={item.description}
                  >
                    {item.name}
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-golden-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium relative ${
                      isScrolled || location.pathname !== "/"
                        ? "text-royal-800"
                        : "text-white"
                    } hover:text-golden-600 transition-colors duration-300 ${
                      isActive(item.path) ? "text-golden-600" : ""
                    }`}
                    aria-label={item.description}
                  >
                    {item.name}
                    <span className={`absolute left-0 right-0 bottom-0 h-0.5 bg-golden-500 transform ${
                      isActive(item.path) ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100 transition-transform origin-left duration-300`}></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-full z-10 md:hidden ${
              isScrolled || location.pathname !== "/" ? "text-royal-800" : "text-white"
            }`}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            ref={menuRef}
          >
            <div className="container mx-auto px-4 pt-20 pb-16 h-full flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-royal-800"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>

              {/* Menu Content */}
              <div className="mt-4 flex flex-col h-full overflow-y-auto">
                <motion.h2
                  className="text-2xl font-playfair font-bold text-royal-900 mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Navigation
                </motion.h2>

                <div className="grid gap-8">
                  {navigationStructure.map((section, index) => (
                    <motion.div
                      key={section.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={navItemVariants}
                      className="border-b border-gray-100 pb-6"
                    >
                      {section.path.startsWith("/#") ? (
                        <a
                          href={section.path}
                          onClick={(e) => handleNavClick(e, section.path)}
                          className={`text-xl font-playfair font-semibold ${
                            isActive(section.path) ? "text-golden-600" : "text-royal-800"
                          } hover:text-golden-600 transition-colors flex items-center`}
                        >
                          {section.name}
                          <ChevronRight className="ml-1 h-5 w-5" />
                        </a>
                      ) : (
                        <Link
                          to={section.path}
                          className={`text-xl font-playfair font-semibold ${
                            isActive(section.path) ? "text-golden-600" : "text-royal-800"
                          } hover:text-golden-600 transition-colors flex items-center`}
                        >
                          {section.name}
                          <ChevronRight className="ml-1 h-5 w-5" />
                        </Link>
                      )}
                      
                      <p className="text-gray-500 text-sm mt-1 mb-4">
                        {section.description}
                      </p>

                      {section.subsections.length > 0 && (
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          {section.subsections.map((subsection) => (
                            <a
                              key={subsection.name}
                              href={subsection.path}
                              onClick={(e) => handleNavClick(e, subsection.path)}
                              className="text-sm text-royal-700 hover:text-golden-600 py-1 transition-colors"
                            >
                              {subsection.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="mt-auto pt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-gray-500 mb-2">Connect with Dr. Rahman</p>
                  <div className="flex space-x-4">
                    {/* Social links would go here */}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scroll Progress Indicator */}
      {isScrolled && (
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-golden-500 origin-left z-50"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: typeof window !== "undefined"
              ? window.scrollY / (document.body.scrollHeight - window.innerHeight)
              : 0
          }}
          style={{ transformOrigin: "left" }}
        />
      )}
    </>
  );
};

export default NavbarModern;
