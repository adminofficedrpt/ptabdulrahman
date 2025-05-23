
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon, Sparkles } from 'lucide-react';
import SocialLinks from '../SocialLinks';
import Typewriter from '../Typewriter';

const EnhancedHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef });

  // Enhanced hero images with better transitions
  const heroImages = [
    '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
    '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
    '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg'
  ];

  // Enhanced taglines with more emotional impact
  const taglines = [
    "Visionary Scholar. Transformative Leader.",
    "Bridging Faith with Modern Education.", 
    "Building Tomorrow's Islamic Leaders.",
    "Where Tradition Meets Innovation.",
    "Illuminating Minds, Nurturing Souls."
  ];

  // Parallax transformations
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Image slideshow with longer intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000); // Increased to 10 seconds for better viewing

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Mouse movement tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const contentVariants = {
    initial: { y: 60, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background with Enhanced Transitions */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <AnimatePresence mode="wait">
          {heroImages.map((image, index) => (
            currentImageIndex === index && (
              <motion.div
                key={image}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${image}')`,
                  transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                {/* Enhanced gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-royal-900/90 via-royal-800/80 to-royal-700/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
            variants={particleVariants}
            animate="animate"
            custom={i}
          >
            <Sparkles 
              size={16 + (i % 3) * 8} 
              className="text-golden-400/30" 
            />
          </motion.div>
        ))}
      </div>

      {/* Enhanced Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 text-center"
        style={{ opacity }}
      >
        {/* Logo with Enhanced Animation */}
        <motion.div 
          custom={0} 
          variants={contentVariants} 
          initial="initial" 
          animate="animate"
          className="mb-12"
        >
          <motion.img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Dr. P.T. Abdul Rahman - Islamic Scholar UAE Logo" 
            className="h-28 md:h-36 mx-auto filter drop-shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Enhanced Typewriter */}
        <motion.div 
          custom={1} 
          variants={contentVariants} 
          initial="initial" 
          animate="animate"
          className="text-2xl md:text-3xl text-golden-300 mb-16 tracking-wide min-h-[3rem] flex items-center justify-center"
        >
          <Typewriter 
            texts={taglines} 
            typingSpeed={80} 
            deletingSpeed={40} 
            delayBetween={4000}
            className="font-light"
            cursorClassName="h-8 w-1 bg-golden-300"
          />
        </motion.div>
        
        {/* Enhanced Description */}
        <motion.div 
          custom={2} 
          variants={contentVariants} 
          initial="initial" 
          animate="animate"
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="text-white/95 text-xl md:text-2xl font-light leading-relaxed mb-6">
            A distinguished Islamic scholar and humanitarian whose vision transcends borders, 
            Dr. PT Abdul Rahman has dedicated over three decades to fostering educational excellence, 
            interfaith harmony, and community empowerment across the UAE and beyond.
          </p>
          <p className="text-white/80 text-lg md:text-xl font-light">
            From the corridors of Darul Quran Abdulla Academy to the international stage of humanitarian service, 
            his legacy continues to shape minds and touch hearts worldwide.
          </p>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div 
          custom={3} 
          variants={contentVariants} 
          initial="initial" 
          animate="animate"
          className="mb-12"
        >
          <SocialLinks />
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          >
            <span className="text-golden-300/90 text-sm font-light mb-3 group-hover:text-golden-200 transition-colors">
              Begin the Journey
            </span>
            <motion.a 
              href="#biography" 
              className="text-golden-300 hover:text-golden-200 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Explore Dr. P.T. Abdul Rahman's biography"
            >
              <ArrowDownIcon size={32} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedHero;
