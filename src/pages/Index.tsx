
import { useEffect, useState, useRef } from 'react';
import PreLoader from '@/components/PreLoader';
import EnhancedHero from '@/components/modern/EnhancedHero';
import FooterModern from '@/components/FooterModern';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePageNavigation } from '@/hooks/usePageNavigation';
import { preloadImages, heroImages } from '@/utils/imagePreloader';
import ConditionalSections from '@/components/sections/ConditionalSections';
import MainContentSections from '@/components/sections/MainContentSections';
import SEOMetadata from '@/components/seo/SEOMetadata';

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

  // Create scroll-based animations
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  return (
    <div className="min-h-screen" ref={mainRef}>
      <SEOMetadata />
      
      {isLoading && <PreLoader />}
      
      {/* Enhanced Hero Section */}
      <motion.div style={{ opacity, scale }}>
        <EnhancedHero />
      </motion.div>
      
      {/* Main Content Sections */}
      <MainContentSections />
      
      {/* Conditional Content Section */}
      <ConditionalSections activeSection={activeSection} />
      
      {/* Modern Footer */}
      <FooterModern />
    </div>
  );
};

export default Index;
