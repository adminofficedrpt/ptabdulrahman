
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
import BooksGallery from '@/components/books/BooksGallery';
import EnhancedTimeline from '@/components/timeline/EnhancedTimeline';
import Work from '@/components/Work';
import MediaHighlights from '@/components/MediaHighlights';
import Contact from '@/components/Contact';
import SectionContainer from '@/components/design-system/SectionContainer';
import SectionHeading from '@/components/SectionHeading';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { activeSection } = usePageNavigation();
  
  // References for scroll animations
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: mainRef });
  
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
      
      {isLoading && <PreLoader />}
      
      {/* Navigation */}
      <NavigationSystem />
      
      {/* Hero Slideshow */}
      <HeroSlideshow />
      
      {/* Comprehensive About Section */}
      <ComprehensiveAbout />
      
      {/* Timeline Section */}
      <SectionContainer variant="accent" id="timeline">
        <EnhancedTimeline />
      </SectionContainer>
      
      {/* Books Gallery */}
      <BooksGallery />
      
      {/* Work Section */}
      <SectionContainer variant="default" pattern id="work">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="Decades of leadership, scholarship, and community impact"
        />
        <Work />
      </SectionContainer>
      
      {/* Media Highlights */}
      <SectionContainer variant="accent" id="media">
        <SectionHeading 
          title="Media Recognition" 
          subtitle="Features and coverage across prestigious publications worldwide"
        />
        <MediaHighlights />
      </SectionContainer>
      
      {/* Contact Section */}
      <SectionContainer variant="default" id="contact">
        <Contact />
      </SectionContainer>
      
      {/* Conditional Content Section */}
      <ConditionalSections activeSection={activeSection} />
      
      {/* Modern Footer */}
      <FooterModern />
    </div>
  );
};

export default Index;
