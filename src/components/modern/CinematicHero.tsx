
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play, Book, Users, Globe2 } from 'lucide-react';
import { useScrollNavigation } from '@/hooks/useScrollNavigation';

const CinematicHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollToSection } = useScrollNavigation();
  
  const heroSlides = [
    {
      image: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
      title: 'Scholar',
      subtitle: 'Illuminating minds through authentic Islamic scholarship'
    },
    {
      image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
      title: 'Educator',
      subtitle: 'Transforming lives through innovative Islamic education'
    },
    {
      image: '/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg',
      title: 'Humanitarian',
      subtitle: 'Building bridges across communities and cultures'
    }
  ];

  const achievements = [
    { icon: Book, label: '50+ Publications', value: 'Academic Excellence' },
    { icon: Users, label: '100K+ Lives Touched', value: 'Global Impact' },
    { icon: Globe2, label: '25+ Countries', value: 'International Reach' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative h-screen min-h-[100svh] overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal-900/95 via-royal-800/80 to-royal-700/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <img 
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
              alt="Dr. P.T. Abdul Rahman" 
              className="h-20 sm:h-24 md:h-32 lg:h-40 mx-auto filter drop-shadow-2xl w-auto"
            />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-4 leading-tight px-4">
              Dr. P.T. Abdul Rahman
            </h1>
            <div className="w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-golden-400 to-golden-600 mx-auto mb-4 sm:mb-6" />
          </motion.div>

          {/* Dynamic Subtitle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="mb-8 sm:mb-12 px-4"
            >
              <div className="text-xl sm:text-2xl md:text-3xl text-golden-300 font-light mb-4">
                {heroSlides[currentSlide].title}
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto mb-12 sm:mb-16 px-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <achievement.icon size={20} className="text-golden-300 sm:w-7 sm:h-7" />
                </div>
                <div className="text-white font-semibold mb-1 text-sm sm:text-base">{achievement.label}</div>
                <div className="text-golden-300 text-xs sm:text-sm">{achievement.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="space-y-4 sm:space-y-6 px-4"
          >
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Embark on a journey through the life and legacy of a visionary who has dedicated over three decades 
              to transforming Islamic education and building bridges across communities worldwide.
            </p>
            
            <motion.button
              onClick={() => scrollToSection('visionary')}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-golden-500 to-golden-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:from-golden-600 hover:to-golden-700 transition-all duration-300 shadow-xl hover:shadow-2xl min-h-[44px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={16} className="sm:w-5 sm:h-5" />
              <span>Begin the Journey</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile for better UX */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/70 hover:text-white transition-colors cursor-pointer"
          onClick={() => scrollToSection('visionary')}
        >
          <ArrowDown size={24} className="sm:w-8 sm:h-8" />
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-w-[8px] min-h-[8px] ${
              index === currentSlide ? 'bg-golden-400' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CinematicHero;
