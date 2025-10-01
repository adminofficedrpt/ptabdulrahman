
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
    title: "Author & Scholar",
    subtitle: "Writing on Islamic Philosophy and Social Issues",
    description: "P.T. Abdul Rahman has authored books exploring Islamic philosophy, education, and contemporary social questions. His writings address topics ranging from the purpose of creation to community development, published in Malayalam, Arabic, and English.",
    image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
    stats: [
      { icon: BookOpen, value: "30+", label: "Years Writing" },
      { icon: Globe, value: "Multiple", label: "Languages" },
      { icon: Pen, value: "Dubai", label: "Based in UAE" }
    ]
  },
  {
    id: 2,
    title: "Community Leader",
    subtitle: "Serving Expatriate Communities in the UAE",
    description: "As President of the Dubai Indian Islamic Centre, P.T. Abdul Rahman has organized medical camps, welfare schemes, and cultural programs for the Indian expatriate community. His work includes advocating for community welfare and promoting cultural heritage.",
    image: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
    stats: [
      { icon: Users, value: "DIIC", label: "President" },
      { icon: Globe, value: "UAE", label: "Based" },
      { icon: Pen, value: "30+", label: "Years Service" }
    ]
  },
  {
    id: 3,
    title: "Educator & Founder",
    subtitle: "Establishing Educational Institutions",
    description: "Founded Darul Quran Abdulla Academy (DQAA) in Dubai, providing Islamic education with focus on Quranic memorization and Arabic instruction. The academy serves students from the expatriate community in the UAE.",
    image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
    stats: [
      { icon: BookOpen, value: "DQAA", label: "Founder" },
      { icon: Users, value: "Islamic", label: "Education" },
      { icon: Globe, value: "Dubai", label: "Location" }
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
