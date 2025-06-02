
import { useEffect, useState } from 'react';
import PreLoader from '@/components/PreLoader';
import FooterModern from '@/components/FooterModern';
import { motion } from 'framer-motion';
import { preloadImages, preloadCriticalImages } from '@/utils/imagePreloader';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import AdvancedHero from '@/components/features/AdvancedHero';
import ChapterNavigation from '@/components/modern/ChapterNavigation';
import ChapterOne from '@/components/chapters/ChapterOne';
import ChapterTwo from '@/components/chapters/ChapterTwo';
import ChapterThree from '@/components/chapters/ChapterThree';
import InteractiveBookExperience from '@/components/books/InteractiveBookExperience';
import ImmersiveTimeline from '@/components/timeline/ImmersiveTimeline';
import ProfessionalTimeline from '@/components/timeline/ProfessionalTimeline';
import GlobalImpactVisualization from '@/components/impact/GlobalImpactVisualization';
import Contact from '@/components/Contact';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import FluidTypography from '@/components/typography/FluidTypography';
import TestimonialsWall from '@/components/trust/TestimonialsWall';
import PressWall from '@/components/trust/PressWall';
import SectionErrorBoundary from '@/components/error/SectionErrorBoundary';
import ScrollTriggeredQuotes from '@/components/modern/ScrollTriggeredQuotes';
import PrayerTimeWidget from '@/components/modern/PrayerTimeWidget';

// Hero images for preloading
const criticalImages = [
  '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png', // Dr. PT portrait
  '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png', // Logo
  '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',  // DQAA logo
];

// Secondary images
const heroImages = [
  '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
  // Additional images
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    // Immediately start preloading critical images
    preloadCriticalImages(criticalImages);
    
    // Then preload secondary images
    const preloadSecondary = async () => {
      await preloadImages(heroImages);
      setImagesPreloaded(true);
    };
    
    preloadSecondary();
    
    // Set loading to false after a brief delay or when images are loaded
    const timer = setTimeout(() => {
      if (imagesPreloaded) {
        setIsLoading(false);
      } else {
        // Force loading to end after max delay
        const maxWaitTimer = setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        
        return () => clearTimeout(maxWaitTimer);
      }
    }, 1800);
    
    return () => {
      clearTimeout(timer);
    };
  }, [imagesPreloaded]);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <EnhancedSEO />
      <ScrollProgressBar />
      
      {/* Interactive Features - Optimized for Mobile */}
      <ScrollTriggeredQuotes />
      <PrayerTimeWidget />
      
      {/* Navigation - Enhanced Mobile Experience */}
      <SectionErrorBoundary sectionName="Navigation">
        <NavigationSystem />
      </SectionErrorBoundary>
      
      {/* Chapter Navigation - Mobile Optimized */}
      <SectionErrorBoundary sectionName="Chapter Navigation">
        <ChapterNavigation />
      </SectionErrorBoundary>
      
      {/* Advanced Hero Section - Mobile Responsive */}
      <SectionErrorBoundary sectionName="Hero Section">
        <AdvancedHero />
      </SectionErrorBoundary>
      
      {/* Chapter 1: Visionary Author & Media Pioneer */}
      <SectionErrorBoundary sectionName="Chapter 1">
        <ChapterOne />
      </SectionErrorBoundary>
      
      {/* Press Wall - Professional Media Coverage */}
      <SectionErrorBoundary sectionName="Press Coverage">
        <PressWall />
      </SectionErrorBoundary>
      
      {/* Chapter 2: Humanitarian Leadership & Service */}
      <SectionErrorBoundary sectionName="Chapter 2">
        <ChapterTwo />
      </SectionErrorBoundary>
      
      {/* Testimonials Wall - Professional Endorsements */}
      <SectionErrorBoundary sectionName="Testimonials">
        <TestimonialsWall />
      </SectionErrorBoundary>
      
      {/* Chapter 3: Educational Innovation & Institution Building */}
      <SectionErrorBoundary sectionName="Chapter 3">
        <ChapterThree />
      </SectionErrorBoundary>
      
      {/* Chapter 4: Published Works & Literary Legacy */}
      <SectionErrorBoundary sectionName="Interactive Books">
        <section id="scholar" className="relative">
          <InteractiveBookExperience />
        </section>
      </SectionErrorBoundary>
      
      {/* Global Impact Visualization */}
      <SectionErrorBoundary sectionName="Global Impact">
        <GlobalImpactVisualization />
      </SectionErrorBoundary>
      
      {/* Professional Timeline - Career Journey */}
      <SectionErrorBoundary sectionName="Professional Timeline">
        <section id="timeline" className="relative">
          <ProfessionalTimeline />
        </section>
      </SectionErrorBoundary>
      
      {/* Chapter 5: Immersive Legacy Timeline */}
      <SectionErrorBoundary sectionName="Legacy Timeline">
        <section id="legacy" className="relative">
          <ImmersiveTimeline />
        </section>
      </SectionErrorBoundary>
      
      {/* Connect with Dr. Rahman - Professional Contact */}
      <SectionErrorBoundary sectionName="Contact Section">
        <section id="connect" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-royal-50 to-golden-50 relative">
          <ResponsiveContainer size="lg" padding="lg">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="inline-block mb-4">
                <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-golden-600">
                  Professional Connections
                </span>
              </div>
              <FluidTypography variant="h2" color="royal" className="mb-4 sm:mb-6">
                Connect with Dr. Rahman
              </FluidTypography>
              <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto px-4">
                For professional collaborations, educational partnerships, speaking engagements, 
                or humanitarian initiatives, Dr. Rahman welcomes connections with fellow educators, 
                community leaders, and institutions committed to positive change.
              </FluidTypography>
            </div>
            <Contact />
          </ResponsiveContainer>
        </section>
      </SectionErrorBoundary>
      
      {/* Modern Footer - Enhanced Professional Information */}
      <SectionErrorBoundary sectionName="Footer">
        <FooterModern />
      </SectionErrorBoundary>
    </div>
  );
};

export default Index;
