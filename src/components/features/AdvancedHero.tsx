import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BookOpen, Users, Globe, GraduationCap, Building, Award } from 'lucide-react';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import IslamicPattern from '@/components/design-system/IslamicPattern';
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import HeroContent from '@/components/hero/HeroContent';
import HeroPortrait from '@/components/hero/HeroPortrait';
import VideoModal from '@/components/hero/VideoModal';
const heroSlides = [{
  id: 1,
  title: "Building Generations Through Vision and Compassion",
  subtitle: "Visionary Educator & Humanitarian Leader",
  description: "For over three decades, Dr. P.T. Abdul Rahman has transformed lives through educational innovation and humanitarian service. As the founder of Darul Quran Abdulla Academy and a multilingual author of 15+ books, his vision extends from the classrooms of Kerala to the global stage of humanitarian impact.",
  image: "/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
  stats: [{
    icon: GraduationCap,
    value: "M.A.",
    label: "Sociology - University of Mysore"
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
  title: "Founder of Darul Quran Abdulla Academy",
  subtitle: "Where Values and Excellence Meet",
  description: "In 2013, Dr. Rahman founded DQAA - a revolutionary educational institution that bridges traditional values with modern pedagogical excellence. His vision has mentored students to represent India at international competitions and created a model that inspires educational innovation across the region.",
  image: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
  stats: [{
    icon: Building,
    value: "2013",
    label: "DQAA Academy Founded"
  }, {
    icon: Users,
    value: "1000s",
    label: "Lives Transformed"
  }, {
    icon: Award,
    value: "Global",
    label: "Recognition"
  }]
}, {
  id: 3,
  title: "Three Decades of Transformative Service",
  subtitle: "From Military Administration to Educational Innovation",
  description: "From his early role with the Central Military Command UAE (1992-1996) to establishing multiple institutions, Dr. Rahman's journey exemplifies visionary leadership. His humanitarian work includes legal aid for prisoners, healthcare camps, and founding the Indian Islamic Center Dubai - touching countless lives across continents.",
  image: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
  stats: [{
    icon: Users,
    value: "30+",
    label: "Years of Service"
  }, {
    icon: Building,
    value: "Multiple",
    label: "Institutions Founded"
  }, {
    icon: Globe,
    value: "Global",
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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-12 h-full rotate-12 transform scale-150">
          {Array.from({
          length: 64
        }).map((_, i) => <IslamicPattern key={i} variant="geometric" size="md" animate />)}
        </div>
      </div>

      {/* Background Slideshow */}
      <HeroSlideshow slides={heroSlides} currentSlide={currentSlide} onSlideChange={setCurrentSlide} />

      {/* Main Content */}
      <ResponsiveContainer size="xl" padding="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
          {/* Text Content */}
          <HeroContent currentSlide={heroSlides[currentSlide]} onVideoOpen={() => setIsVideoModalOpen(true)} onScrollToContent={scrollToContent} />

          {/* Featured Portrait */}
          <HeroPortrait />
        </div>
      </ResponsiveContainer>

      {/* Enhanced AI8TY Credit - Premium Creative Agency */}
      <motion.div className="absolute bottom-4 right-4 z-20" initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 2,
      duration: 0.8
    }}>
        <div className="group relative">
          {/* Sophisticated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-golden-400/40 via-royal-400/30 to-golden-300/40 rounded-xl blur-lg group-hover:blur-xl transition-all duration-700 animate-pulse" />
          
          {/* Premium credit container */}
          
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button onClick={scrollToContent} animate={{
      y: [0, 10, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-golden-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
        <ChevronDown className="h-8 w-8" />
      </motion.button>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>;
};
export default AdvancedHero;