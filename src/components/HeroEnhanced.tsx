
import { ArrowDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Typewriter from './Typewriter';

const HeroEnhanced = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Hero background images
  const heroImages = [
    '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
    '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
    '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg'
  ];

  // Rotating taglines for typewriter effect
  const taglines = [
    "Visionary Leader. Educator. Humanitarian.",
    "Islamic Scholar. Author. Philanthropist.",
    "Community Builder. Mentor. Visionary."
  ];
  
  // Handle scroll parallax effect
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
  
  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Animation variants
  const heroContentVariants = {
    initial: {
      y: 30,
      opacity: 0
    },
    animate: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      {heroImages.map((image, index) => (
        <AnimatePresence key={image} mode="wait">
          {currentImageIndex === index && (
            <motion.div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{
                backgroundImage: `url('${image}')`,
                transform: `translateY(${scrollPosition * 0.15}px)`,
                transformOrigin: 'center',
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-royal-900/90 via-royal-800/80 to-royal-700/70"></div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
      
      {/* Particle Overlay Effect */}
      <div className="absolute inset-0 z-1 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-golden-300/20 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          custom={1}
          variants={heroContentVariants}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman - Islamic Scholar UAE Logo" 
            className="h-24 md:h-28 mx-auto"
          />
        </motion.div>
        
        <motion.h1 
          custom={2}
          variants={heroContentVariants}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-playfair"
        >
          Dr. P.T. Abdul Rahman
        </motion.h1>
        
        <motion.div 
          custom={3}
          variants={heroContentVariants}
          initial="initial"
          animate="animate"
          className="text-xl md:text-2xl text-golden-300 mb-10 tracking-wide h-8"
        >
          <Typewriter texts={taglines} typingSpeed={50} deletingSpeed={30} delayBetween={3000} />
        </motion.div>
        
        <motion.div 
          custom={4}
          variants={heroContentVariants}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto mb-14"
        >
          <p className="text-white/90 text-lg font-light md:text-base leading-relaxed">
            Dr. PT Abdul Rahman is a visionary Malayali scholar, educator, and humanitarian rooted in Kerala and serving across the UAE. 
            For over three decades, he has championed education, interfaith harmony, and community upliftment, 
            bridging cultures through scholarship and service.
          </p>
        </motion.div>

        <motion.div
          custom={5}
          variants={heroContentVariants}
          initial="initial"
          animate="animate"
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
