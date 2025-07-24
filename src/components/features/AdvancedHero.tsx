
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen, Users, Globe, Pen } from 'lucide-react';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import IslamicPattern from '@/components/design-system/IslamicPattern';
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import HeroContent from '@/components/hero/HeroContent';
import HeroPortrait from '@/components/hero/HeroPortrait';
import VideoModal from '@/components/hero/VideoModal';

const heroSlides = [
  {
    id: 1,
    title: "Acclaimed Author & Literary Pioneer",
    subtitle: "Transforming Lives Through the Power of Written Word",
    description: "Dr. P.T. Abdul Rahman has authored over 15 influential books that bridge cultures and inspire social change. His literary works, translated into multiple languages, have reached millions of readers worldwide, establishing him as a prominent voice in contemporary social discourse.",
    image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
    stats: [
      { icon: BookOpen, value: "15+", label: "Published Works" },
      { icon: Globe, value: "8", label: "Languages" },
      { icon: Users, value: "2M+", label: "Readers Reached" }
    ]
  },
  {
    id: 2,
    title: "Visionary Social Activist",
    subtitle: "Championing Social Justice and Community Empowerment",
    description: "For over three decades, Dr. Abdul Rahman has been at the forefront of social transformation, leading humanitarian initiatives that have touched countless lives. His work in education reform, community development, and cultural bridge-building continues to inspire positive change.",
    image: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
    stats: [
      { icon: Users, value: "100K+", label: "Lives Impacted" },
      { icon: Globe, value: "25+", label: "Countries Reached" },
      { icon: Pen, value: "30+", label: "Years of Service" }
    ]
  },
  {
    id: 3,
    title: "Educational Innovator & Thought Leader",
    subtitle: "Revolutionizing Learning for Future Generations",
    description: "Through the establishment of progressive educational institutions and innovative pedagogical approaches, Dr. Abdul Rahman has redefined how knowledge is shared and wisdom is cultivated, creating lasting impact across communities worldwide.",
    image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
    stats: [
      { icon: Users, value: "5000+", label: "Students Mentored" },
      { icon: BookOpen, value: "50+", label: "Programs Launched" },
      { icon: Globe, value: "15+", label: "Institutions" }
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

      {/* Background Slideshow */}
      <HeroSlideshow 
        slides={heroSlides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      {/* Main Content */}
      <ResponsiveContainer size="xl" padding="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Text Content */}
          <HeroContent
            currentSlide={heroSlides[currentSlide]}
            onVideoOpen={() => setIsVideoModalOpen(true)}
            onScrollToContent={scrollToContent}
          />

          {/* Featured Portrait */}
          <HeroPortrait />
        </div>
      </ResponsiveContainer>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-golden-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};

export default AdvancedHero;
