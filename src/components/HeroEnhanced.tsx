
import { ArrowDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from './Typewriter';

const HeroEnhanced = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
    '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
    '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg'
  ];

  const taglines = [
    "Educator. Humanitarian. Scholar.",
    "Building Bridges. Creating Legacy.",
    "Faith. Knowledge. Service."
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const heroContentVariants = {
    initial: { y: 20, opacity: 0 },
    animate: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <AnimatePresence key={image} mode="wait">
          {currentImageIndex === index && (
            <motion.div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url('${image}')`,
                transform: `translateY(${scrollPosition * 0.1}px)`,
              }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-royal-900/90 via-royal-800/80 to-royal-700/70"></div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          custom={1} 
          variants={heroContentVariants} 
          initial="initial" 
          animate="animate" 
          className="mb-6 md:mb-8"
        >
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman" 
            className="h-16 md:h-24 mx-auto filter drop-shadow-lg" 
          />
        </motion.div>
        
        <motion.h1 
          custom={2} 
          variants={heroContentVariants} 
          initial="initial" 
          animate="animate" 
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 font-playfair leading-tight"
        >
          Dr. P.T. Abdul Rahman
        </motion.h1>
        
        <motion.div 
          custom={3} 
          variants={heroContentVariants} 
          initial="initial" 
          animate="animate" 
          className="text-lg md:text-xl text-golden-300 mb-8 md:mb-12 tracking-wide h-6 md:h-8"
        >
          <Typewriter 
            texts={taglines} 
            typingSpeed={80} 
            deletingSpeed={40} 
            delayBetween={2500}
            cursorClassName="h-6 md:h-8"
          />
        </motion.div>
        
        <motion.div 
          custom={4} 
          variants={heroContentVariants} 
          initial="initial" 
          animate="animate" 
          className="max-w-2xl mx-auto mb-8 md:mb-12"
        >
          <p className="text-white/95 text-sm md:text-lg font-light leading-relaxed px-4">
            Visionary scholar bridging Kerala's heritage with UAE's future through education and service.
          </p>
        </motion.div>

        <motion.div 
          custom={5} 
          variants={heroContentVariants} 
          initial="initial" 
          animate="animate" 
          className="mb-6"
        >
          <SocialLinks />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-golden-300/80 text-xs mb-2 hidden md:block">Discover More</span>
            <a 
              href="#biography" 
              className="text-golden-300 hover:text-golden-200 transition-colors duration-300 bg-royal-900/30 rounded-full p-2"
              aria-label="Learn more"
            >
              <ArrowDownIcon size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroEnhanced;
