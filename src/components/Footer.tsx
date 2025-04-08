
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const footerItem = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gradient-to-b from-royal-900 to-royal-950 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={footerItems}
        >
          <motion.div variants={footerItem}>
            <div className="mb-8">
              <img 
                src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
                alt="Dr. P.T. Abdul Rahman Logo" 
                className="h-20 md:h-24 filter brightness-0 invert"
              />
            </div>
            <p className="mb-8 text-golden-200/90 leading-relaxed">
              A lifelong dedication to elevating education, humanitarian service, and spiritual guidance through initiatives like Darul Quran Abdulla Academy.
            </p>
            <Button 
              variant="outline" 
              className="border-golden-400 text-golden-300 hover:bg-royal-800/50 hover:text-golden-200 transition-all duration-300" 
              onClick={scrollToTop}
            >
              Back to top
              <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div variants={footerItem}>
            <h3 className="text-xl font-bold mb-8 text-golden-300 font-playfair">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href="#biography" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">About</a>
              <a href="#timeline" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Timeline</a>
              <a href="#dqaa" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">DQAA</a>
              <a href="#admission" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Admission</a>
              <a href="#books" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Books</a>
              <a href="#humanitarian" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Humanitarian Work</a>
              <a href="#awards" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Awards</a>
              <a href="#media" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Media Features</a>
              <Link to="/gallery" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Photo Gallery</Link>
              <a href="#donate" className="text-white/80 hover:text-golden-300 transition-all duration-300 hover:translate-x-1">Support DQAA</a>
            </div>
          </motion.div>
          
          <motion.div variants={footerItem}>
            <h3 className="text-xl font-bold mb-8 text-golden-300 font-playfair">Connect</h3>
            <SocialLinks />
            
            <p className="mt-10 text-sm text-golden-200/70 border-t border-golden-900/30 pt-6">
              For speaking engagements, interviews, DQAA admissions, or other inquiries, please reach out through the social media channels above.
            </p>
            
            <div className="mt-8">
              <a href="https://www.darul-quran.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-golden-300 hover:text-golden-200 transition-all duration-300">
                Visit Darul Quran Website
                <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        
        <div className="border-t border-royal-800/50 mt-16 pt-10 text-center">
          <p className="text-golden-200/50">&copy; {new Date().getFullYear()} All Rights Reserved | Dr. P.T. Abdul Rahman | Darul Quran Abdulla Academy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
