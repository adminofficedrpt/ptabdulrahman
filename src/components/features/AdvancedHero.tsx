
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen, Users, Globe, Pen, Heart } from 'lucide-react';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import IslamicPattern from '@/components/design-system/IslamicPattern';
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import HeroContent from '@/components/hero/HeroContent';
import HeroPortrait from '@/components/hero/HeroPortrait';
import VideoModal from '@/components/hero/VideoModal';

const heroSlides = [
  {
    id: 1,
    title: "Welcome to My Journey",
    subtitle: "Alhamdulillah - Through Words and Service to Humanity",
    description: "I am Dr. P.T. Abdul Rahman, and by Allah's grace, I have been blessed to serve through writing and community work for over three decades. This website shares my humble journey as an author of 15+ books and my ongoing commitment to supporting families and communities worldwide.",
    image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
    stats: [
      { icon: BookOpen, value: "15+", label: "Books Published" },
      { icon: Globe, value: "8", label: "Languages" },
      { icon: Heart, value: "Countless", label: "Lives Touched" }
    ]
  },
  {
    id: 2,
    title: "A Life of Service",
    subtitle: "Standing with Communities Through Challenges",
    description: "Through many adversities and with Allah's guidance, I've dedicated my life to serving others. From supporting families in crisis to establishing educational initiatives, every step has been a blessing and responsibility I carry with deep gratitude.",
    image: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
    stats: [
      { icon: Users, value: "30+", label: "Years of Service" },
      { icon: Globe, value: "25+", label: "Countries Reached" },
      { icon: Heart, value: "Ongoing", label: "Mission" }
    ]
  },
  {
    id: 3,
    title: "Education & Legacy",
    subtitle: "Building Tomorrow Through Proper Upbringing",
    description: "As I enter my sixties, I remain committed to education and proper upbringing. Through DQAA and other initiatives, I pray that the knowledge and values we share today will benefit generations to come, Insha'Allah.",
    image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
    stats: [
      { icon: Users, value: "Thousands", label: "Students Guided" },
      { icon: BookOpen, value: "Multiple", label: "Institutions" },
      { icon: Globe, value: "Continuing", label: "Legacy" }
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

      {/* AI8TY Credit - Technologically Advanced */}
      <motion.div
        className="absolute bottom-4 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-golden-400/20 to-royal-400/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
          <div className="relative bg-black/70 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 text-xs text-white/90 hover:text-white transition-all duration-300">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-golden-400 to-royal-400 rounded-full animate-pulse" />
              <span className="font-medium">Built & Managed by</span>
              <a 
                href="https://ai8ty.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold bg-gradient-to-r from-golden-400 to-royal-400 bg-clip-text text-transparent hover:from-golden-300 hover:to-royal-300 transition-all duration-300"
              >
                AI8TY
              </a>
            </div>
          </div>
        </div>
      </motion.div>

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
