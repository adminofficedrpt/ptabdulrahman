
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Award, BookOpen, Users, Globe } from 'lucide-react';
import FluidTypography from '@/components/typography/FluidTypography';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import ProgressiveImage from '@/components/ui/progressive-image';
import IslamicPattern from '@/components/design-system/IslamicPattern';

const heroSlides = [
  {
    id: 1,
    title: "Distinguished Islamic Scholar",
    subtitle: "Bridging Traditional Wisdom with Modern Excellence",
    description: "Dr. P.T. Abdul Rahman has dedicated over three decades to advancing Islamic education, fostering interfaith dialogue, and serving humanitarian causes across the globe.",
    image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
    stats: [
      { icon: Users, value: "500+", label: "Students Graduated" },
      { icon: BookOpen, value: "15+", label: "Books Published" },
      { icon: Globe, value: "25+", label: "Countries Reached" }
    ]
  },
  {
    id: 2,
    title: "Founder of DQAA",
    subtitle: "Revolutionizing Islamic Education",
    description: "The Darul Quran Abdulla Academy represents a groundbreaking approach to Islamic education, combining Quranic memorization with comprehensive academic excellence.",
    image: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
    stats: [
      { icon: Award, value: "100%", label: "Success Rate" },
      { icon: Users, value: "50+", label: "Faculty Members" },
      { icon: BookOpen, value: "12", label: "Grade Levels" }
    ]
  },
  {
    id: 3,
    title: "Global Humanitarian",
    subtitle: "Serving Communities Worldwide",
    description: "Through the Dubai Indian Islamic Centre and various humanitarian initiatives, Dr. Abdul Rahman has touched countless lives across continents.",
    image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
    stats: [
      { icon: Globe, value: "1000+", label: "Families Helped" },
      { icon: Users, value: "50+", label: "Community Programs" },
      { icon: Award, value: "30+", label: "Years of Service" }
    ]
  }
];

const AdvancedHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('visionary');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-12 h-full rotate-12 transform scale-150">
          {Array.from({ length: 64 }).map((_, i) => (
            <IslamicPattern key={i} variant="geometric" size="md" animate />
          ))}
        </div>
      </div>

      {/* Background Video/Image Slideshow */}
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
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover"
            priority={currentSlide === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-royal-800/60 to-royal-700/40" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <ResponsiveContainer size="xl" padding="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
              >
                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="text-golden-400 text-sm md:text-base font-light tracking-[0.2em] uppercase">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <FluidTypography variant="h1" color="white" className="mb-6 font-bold leading-tight">
                    {heroSlides[currentSlide].title}
                  </FluidTypography>
                </motion.div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8"
                >
                  <FluidTypography variant="lg" className="text-gray-200 leading-relaxed max-w-2xl lg:max-w-none">
                    {heroSlides[currentSlide].description}
                  </FluidTypography>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                >
                  <button
                    onClick={scrollToContent}
                    className="bg-gradient-to-r from-golden-500 to-golden-600 text-white px-8 py-4 rounded-lg hover:from-golden-600 hover:to-golden-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-h-[56px]"
                  >
                    Explore His Journey
                  </button>
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-royal-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 min-h-[56px]"
                  >
                    <Play className="h-5 w-5" />
                    <span>Watch Story</span>
                  </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="grid grid-cols-3 gap-6"
                >
                  {heroSlides[currentSlide].stats.map((stat, index) => (
                    <div key={index} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <stat.icon className="h-6 w-6 text-golden-400 mr-2" />
                        <FluidTypography variant="h4" color="white" className="font-bold">
                          {stat.value}
                        </FluidTypography>
                      </div>
                      <FluidTypography variant="caption" className="text-gray-300">
                        {stat.label}
                      </FluidTypography>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Featured Image/Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
                <ProgressiveImage
                  src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
                  alt="Dr. P.T. Abdul Rahman"
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-900/40 to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-golden-500 to-golden-600 p-4 rounded-full shadow-lg"
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ResponsiveContainer>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
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

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-golden-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>

      {/* Video Modal (placeholder) */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <FluidTypography variant="h4" color="royal" className="mb-4">
                Featured Documentary
              </FluidTypography>
              <FluidTypography variant="body" color="muted" className="mb-6">
                Watch the inspiring story of Dr. P.T. Abdul Rahman's journey in Islamic education and humanitarian service.
              </FluidTypography>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <Play className="h-16 w-16 text-gray-400" />
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="mt-4 px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors min-h-[44px]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdvancedHero;
