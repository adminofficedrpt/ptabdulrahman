
import { ArrowDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

const HeroEnhanced = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url('/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png')`,
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: 'transform 0.1s ease-out'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/90 via-royal-800/80 to-royal-700/70"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman - Islamic Scholar UAE Logo" 
            className="h-24 md:h-28 mx-auto"
          />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-playfair"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Dr. P.T. Abdul Rahman
        </motion.h1>
        
        <motion.h2 
          className="text-xl md:text-2xl text-golden-300 mb-10 tracking-wide"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Educator | Humanitarian | Veteran in Legal Affairs | Author
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto mb-14"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="text-white/90 text-lg font-light md:text-base leading-relaxed">
            Dr. PT Abdul Rahman is a visionary Malayali scholar, educator, and humanitarian rooted in Kerala and serving across the UAE. 
            For over three decades, he has championed education, interfaith harmony, and community upliftment, 
            bridging cultures through scholarship and service.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <SocialLinks />
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <a 
              href="#biography" 
              className="text-golden-300 hover:text-golden-200 transition-colors duration-300" 
              aria-label="Learn more about Dr. P.T. Abdul Rahman"
            >
              <ArrowDownIcon size={36} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
