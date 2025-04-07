
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#biography" },
    { name: "Timeline", href: "/#timeline" },
    { name: "DQAA", href: "/#dqaa" },
    { name: "Admission", href: "/#admission" },
    { name: "Books", href: "/#books" },
    { name: "Humanitarian", href: "/#humanitarian" },
    { name: "Awards", href: "/#awards" },
    { name: "Media", href: "/#media" },
    { name: "Gallery", href: "/gallery" },
    { name: "Donate", href: "/#donate" },
    { name: "Legacy", href: "/#legacy" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      } else {
        window.location.href = href;
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman Logo" 
            className={`h-10 ${!isScrolled ? 'filter brightness-0 invert' : ''}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition duration-300 ${isScrolled ? 'text-gray-800 hover:text-golden-600' : 'text-white hover:text-golden-300'}`}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition duration-300 ${isScrolled ? 'text-gray-800 hover:text-golden-600' : 'text-white hover:text-golden-300'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
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
            className={isScrolled ? 'text-gray-800' : 'text-white'}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-800 hover:text-golden-600 transition duration-300 py-2 border-b border-gray-100"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-800 hover:text-golden-600 transition duration-300 py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
