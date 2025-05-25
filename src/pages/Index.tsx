
import { useEffect, useState, useRef } from 'react';
import PreLoader from '@/components/PreLoader';
import FooterModern from '@/components/FooterModern';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePageNavigation } from '@/hooks/usePageNavigation';
import { preloadImages, heroImages } from '@/utils/imagePreloader';
import ConditionalSections from '@/components/sections/ConditionalSections';
import SEOMetadata from '@/components/seo/SEOMetadata';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import HeroSlideshow from '@/components/hero/HeroSlideshow';
import ComprehensiveAbout from '@/components/about/ComprehensiveAbout';
import EnhancedBooksGallery from '@/components/books/EnhancedBooksGallery';
import HorizontalTimeline from '@/components/timeline/HorizontalTimeline';
import Work from '@/components/Work';
import MediaHighlights from '@/components/MediaHighlights';
import Contact from '@/components/Contact';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import FluidTypography from '@/components/typography/FluidTypography';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { activeSection } = usePageNavigation();
  
  // References for scroll animations
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: mainRef });
  
  // Smooth parallax effects
  const heroOffset = useTransform(scrollY, [0, 1000], [0, -200]);
  const aboutOffset = useTransform(scrollY, [0, 1500], [0, -100]);

  useEffect(() => {
    // Preload important images
    preloadImages(heroImages);
    
    // Set loading to false after a brief delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen" ref={mainRef}>
      <SEOMetadata />
      <ScrollProgressBar />
      
      {isLoading && <PreLoader />}
      
      {/* Navigation */}
      <NavigationSystem />
      
      {/* Hero Slideshow with parallax */}
      <motion.section 
        className="min-h-screen relative"
        style={{ y: heroOffset }}
      >
        <HeroSlideshow />
      </motion.section>
      
      {/* Comprehensive About Section */}
      <motion.section 
        id="about" 
        className="py-[clamp(4rem,8vw,8rem)] relative bg-white"
        style={{ y: aboutOffset }}
      >
        <ResponsiveContainer size="xl" padding="lg">
          <ComprehensiveAbout />
        </ResponsiveContainer>
      </motion.section>
      
      {/* Enhanced Horizontal Timeline */}
      <section id="timeline" className="relative">
        <HorizontalTimeline />
      </section>
      
      {/* Enhanced Books Gallery */}
      <section id="books" className="relative">
        <EnhancedBooksGallery />
      </section>
      
      {/* Work Section with responsive layout */}
      <section id="work" className="py-[clamp(4rem,8vw,8rem)] bg-gradient-to-br from-gray-50 to-royal-50 relative">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="text-center mb-[clamp(3rem,6vw,6rem)]">
            <FluidTypography variant="h2" color="royal" className="mb-6">
              Professional Journey
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto">
              Decades of leadership, scholarship, and community impact across educational, 
              humanitarian, and cultural initiatives.
            </FluidTypography>
          </div>
          <Work />
        </ResponsiveContainer>
      </section>
      
      {/* Media Highlights with enhanced spacing */}
      <section id="media" className="py-[clamp(4rem,8vw,8rem)] relative bg-white">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="text-center mb-[clamp(3rem,6vw,6rem)]">
            <FluidTypography variant="h2" color="royal" className="mb-6">
              Media Recognition
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto">
              Features and coverage across prestigious publications worldwide, 
              highlighting Dr. Rahman's global impact and recognition.
            </FluidTypography>
          </div>
          <MediaHighlights />
        </ResponsiveContainer>
      </section>
      
      {/* Contact Section with improved layout */}
      <section id="contact" className="py-[clamp(4rem,8vw,8rem)] bg-gradient-to-br from-royal-50 to-golden-50 relative">
        <ResponsiveContainer size="lg" padding="lg">
          <Contact />
        </ResponsiveContainer>
      </section>
      
      {/* Conditional Content Section */}
      <ConditionalSections activeSection={activeSection} />
      
      {/* Modern Footer */}
      <FooterModern />
    </div>
  );
};

export default Index;
