
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen, Users, Globe, GraduationCap, Heart, Building } from 'lucide-react';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import IslamicPattern from '@/components/design-system/IslamicPattern';
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import HeroContent from '@/components/hero/HeroContent';
import HeroPortrait from '@/components/hero/HeroPortrait';
import VideoModal from '@/components/hero/VideoModal';

const heroSlides = [{
  id: 1,
  title: "Assalamu Alaikum - Welcome to My Journey",
  subtitle: "Three Decades of Service to Humanity, Alhamdulillah",
  description: "I am Dr. P.T. Abdul Rahman, and by Allah's grace, I have been blessed to serve through education, humanitarian work, and community building for over thirty years. From my early days in Kerala to establishing institutions in the UAE, this website shares my humble journey as an author, educator, and social activist.",
  image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
  stats: [{
    icon: GraduationCap,
    value: "M.A.",
    label: "Sociology - Mysore"
  }, {
    icon: Globe,
    value: "6",
    label: "Languages Mastered"
  }, {
    icon: BookOpen,
    value: "15+",
    label: "Books Published"
  }]
}, {
  id: 2,
  title: "Professional Service & Leadership",
  subtitle: "From Military Administration to Educational Innovation",
  description: "Starting with the Central Military Command UAE (1992-1996), then serving as a researcher with the Department of Islamic Affairs (1996-2005), I've had diverse roles including Chairman & MD of multiple companies. Each position taught me valuable lessons about leadership, community service, and the importance of ethical business practices.",
  image: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
  stats: [{
    icon: Building,
    value: "1992",
    label: "Started in UAE"
  }, {
    icon: Users,
    value: "Multiple",
    label: "Leadership Roles"
  }, {
    icon: Heart,
    value: "Ongoing",
    label: "Service Mission"
  }]
}, {
  id: 3,
  title: "Educational Legacy & Humanitarian Impact",
  subtitle: "Building Institutions That Transform Lives",
  description: "In 2013, I founded Darul Quran Abdulla Educational Academy in Kerala - a revolutionary initiative. I also established the Indian Islamic Center Dubai in 1992 and have been blessed to mentor students, conduct TV programs promoting interfaith harmony, and provide humanitarian assistance to countless families.",
  image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
  stats: [{
    icon: Users,
    value: "1992",
    label: "Indian Islamic Center"
  }, {
    icon: BookOpen,
    value: "2013",
    label: "DQAA Academy"
  }, {
    icon: Globe,
    value: "Continuing",
    label: "Impact"
  }]
}];

const AdvancedHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('visionary');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth'
      });
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
      <HeroSlideshow slides={heroSlides} currentSlide={currentSlide} onSlideChange={setCurrentSlide} />

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

      {/* AI8TY Credit - Premium Tech Integration */}
      <motion.div 
        className="absolute bottom-4 right-4 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="group relative">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-golden-400/30 to-royal-400/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 animate-pulse" />
          
          {/* Main credit container */}
          <div className="relative bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl px-6 py-3 text-sm text-white/95 hover:text-white transition-all duration-500 shadow-2xl">
            <div className="flex items-center space-x-3">
              {/* Animated indicator */}
              <div className="relative">
                <div className="w-3 h-3 bg-gradient-to-r from-golden-400 to-royal-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-golden-400 to-royal-400 rounded-full animate-ping opacity-20" />
              </div>
              
              {/* Credit text */}
              <div className="flex items-center space-x-2">
                <span className="font-medium text-white/90">Built & Managed by</span>
                <a 
                  href="https://ai8ty.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold bg-gradient-to-r from-golden-400 via-golden-300 to-royal-400 bg-clip-text text-transparent hover:from-golden-300 hover:via-golden-200 hover:to-royal-300 transition-all duration-500 transform hover:scale-105"
                >
                  AI8TY
                </a>
                <span className="text-white/70 text-xs">Creative Agency</span>
              </div>
            </div>
            
            {/* Subtle tech indicator */}
            <div className="mt-1 text-xs text-white/60 text-center">
              Premium Digital Experience
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
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  );
};

export default AdvancedHero;
