
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProgressiveImage from '@/components/ui/progressive-image';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: Array<{
    icon: React.ComponentType<{ className?: string }>;
    value: string;
    label: string;
  }>;
}

interface HeroSlideshowProps {
  slides: HeroSlide[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}

const HeroSlideshow: React.FC<HeroSlideshowProps> = ({ slides, currentSlide, onSlideChange }) => {
  return (
    <>
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <ProgressiveImage
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            priority={currentSlide === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-royal-800/60 to-royal-700/40" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              index === currentSlide
                ? 'bg-golden-500 scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          >
            <span className="sr-only">Slide {index + 1}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default HeroSlideshow;
