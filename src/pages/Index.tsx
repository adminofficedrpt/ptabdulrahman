
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
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import FluidTypography from '@/components/typography/FluidTypography';

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
      
      {/* Hero Slideshow with improved sizing */}
      <section className="min-h-screen relative">
        <HeroSlideshow />
      </section>
      
      {/* Comprehensive About Section */}
      <section id="about" className="py-[clamp(4rem,8vw,8rem)] relative">
        <ResponsiveContainer size="xl" padding="lg">
          <ComprehensiveAbout />
        </ResponsiveContainer>
      </section>
      
      {/* Timeline Section with enhanced layout */}
      <section id="timeline" className="py-[clamp(4rem,8vw,8rem)] bg-gradient-to-br from-royal-50 to-golden-50 relative overflow-hidden">
        <ResponsiveContainer size="2xl" padding="lg">
          <div className="text-center mb-[clamp(3rem,6vw,6rem)]">
            <FluidTypography variant="h2" color="royal" className="mb-6">
              Journey of Impact
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto">
              Spanning three decades, Dr. Rahman's journey has been marked by significant milestones 
              in education, interfaith unity, humanitarian service, and community development.
            </FluidTypography>
          </div>
          <EnhancedTimeline />
        </ResponsiveContainer>
      </section>
      
      {/* Books Gallery with improved spacing */}
      <section id="books" className="py-[clamp(4rem,8vw,8rem)] relative">
        <ResponsiveContainer size="xl" padding="lg">
          <div className="text-center mb-[clamp(3rem,6vw,6rem)]">
            <FluidTypography variant="h2" color="royal" className="mb-6">
              Literary Contributions
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto">
              Explore Dr. Rahman's scholarly works that bridge Islamic philosophy with contemporary thought, 
              touching minds across cultures and generations.
            </FluidTypography>
          </div>
          <BooksGallery />
        </ResponsiveContainer>
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
      <section id="media" className="py-[clamp(4rem,8vw,8rem)] relative">
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
