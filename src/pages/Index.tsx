
import { useEffect, useState, useRef } from 'react';
import PreLoader from '@/components/PreLoader';
import FooterModern from '@/components/FooterModern';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePageNavigation } from '@/hooks/usePageNavigation';
import { preloadImages, heroImages } from '@/utils/imagePreloader';
import ConditionalSections from '@/components/sections/ConditionalSections';
import SEOMetadata from '@/components/seo/SEOMetadata';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import ClearHero from '@/components/hero/ClearHero';
import AboutSection from '@/components/sections/AboutSection';
import BooksShowcase from '@/components/showcase/BooksShowcase';
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
      
      {/* Clear Hero Section */}
      <ClearHero />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Books Showcase */}
      <BooksShowcase />
      
      {/* Work Section */}
      <SectionContainer variant="accent" id="work">
        <SectionHeading 
          title="Professional Journey" 
          subtitle="Decades of leadership, scholarship, and community impact"
        />
        <Work />
      </SectionContainer>
      
      {/* Media Highlights */}
      <SectionContainer variant="default" pattern id="media">
        <SectionHeading 
          title="Media Highlights" 
          subtitle="Recognition and features across prestigious publications"
        />
        <MediaHighlights />
      </SectionContainer>
      
      {/* Contact Section */}
      <SectionContainer variant="accent" id="contact">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Reach out for collaborations, speaking engagements, or inquiries"
        />
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
