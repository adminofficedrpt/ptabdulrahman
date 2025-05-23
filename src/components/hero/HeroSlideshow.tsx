
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
      title: 'Dr. P.T. Abdul Rahman',
      subtitle: 'Distinguished Islamic Scholar & Humanitarian Leader',
      description: 'Over three decades of dedicated service bridging cultures between UAE and India through education, scholarship, and community development.',
      cta: 'Discover His Journey'
    },
    {
      image: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png',
      title: 'Educational Visionary',
      subtitle: 'Founder of Darul Quran Abdulla Academy',
      description: 'Pioneering Islamic education that integrates traditional Quranic studies with modern academic excellence, producing well-rounded global citizens.',
      cta: 'Learn About DQAA'
    },
    {
      image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
      title: 'Global Recognition',
      subtitle: 'Author & International Speaker',
      description: 'Published influential works including "Is the Creation Meaningless?" translated into multiple languages, reaching audiences worldwide.',
      cta: 'Explore Publications'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-royal-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-royal-900/90 via-royal-800/70 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-3xl text-golden-300 mb-6 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Button 
                  size="lg" 
                  className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {slides[currentSlide].cta}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-golden-500 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white hover:bg-white/20 rounded-full p-2"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="text-white/70 text-sm text-center">
          <div className="w-1 h-8 bg-white/30 mx-auto mb-2 rounded-full">
            <motion.div 
              className="w-1 h-4 bg-golden-500 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <span>Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlideshow;
