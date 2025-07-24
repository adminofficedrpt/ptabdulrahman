
import { useEffect, useState } from 'react';
import PreLoader from '@/components/PreLoader';
import FooterModern from '@/components/FooterModern';
import { motion } from 'framer-motion';
import { preloadImages, preloadCriticalImages } from '@/utils/imagePreloader';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import SectionErrorBoundary from '@/components/error/SectionErrorBoundary';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Enhanced navigation and hero
import SimplifiedNavbar from '@/components/navigation/SimplifiedNavbar';
import EnhancedHeroSection from '@/components/sections/EnhancedHeroSection';

// New Phase 1 components
import MomentsThatShaped from '@/components/storytelling/MomentsThatShaped';
import ComprehensiveMediaWall from '@/components/media/ComprehensiveMediaWall';
import InteractiveAudioTimeline from '@/components/timeline/InteractiveAudioTimeline';
import TransformedLivesShowcase from '@/components/impact/TransformedLivesShowcase';
import ThoughtLeadershipBlog from '@/components/blog/ThoughtLeadershipBlog';

// Phase 2: DQAA Integration & Multilingual
import DQAAShowcase from '@/components/dqaa/DQAAShowcase';
import AdmissionInquiry from '@/components/dqaa/AdmissionInquiry';

// Enhanced existing sections
import QuickStatsSection from '@/components/sections/QuickStatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

// Existing components for key sections
import InteractiveBiography from '@/components/modern/InteractiveBiography';
import InteractiveBookExperience from '@/components/books/InteractiveBookExperience';
import ChapterThree from '@/components/chapters/ChapterThree';
import GlobalImpactVisualization from '@/components/impact/GlobalImpactVisualization';
import Contact from '@/components/Contact';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import FluidTypography from '@/components/typography/FluidTypography';

// Hero images for preloading
const criticalImages = [
  '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
  '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
  '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png',
];

const heroImages = [
  '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    preloadCriticalImages(criticalImages);
    
    const preloadSecondary = async () => {
      await preloadImages(heroImages);
      setImagesPreloaded(true);
    };
    
    preloadSecondary();
    
    const timer = setTimeout(() => {
      if (imagesPreloaded) {
        setIsLoading(false);
      } else {
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
    <LanguageProvider>
      <div className="min-h-screen w-full overflow-x-hidden">
        <EnhancedSEO />
        <ScrollProgressBar />
        
        {/* Simplified Navigation */}
        <SectionErrorBoundary sectionName="Navigation">
          <SimplifiedNavbar />
        </SectionErrorBoundary>
        
        {/* Enhanced Hero Section */}
        <SectionErrorBoundary sectionName="Hero Section">
          <EnhancedHeroSection />
        </SectionErrorBoundary>
        
        {/* Quick Stats - Immediate Impact */}
        <SectionErrorBoundary sectionName="Quick Stats">
          <QuickStatsSection />
        </SectionErrorBoundary>
        
        {/* Phase 1: Enhanced Storytelling - Moments That Shaped Me */}
        <SectionErrorBoundary sectionName="Moments That Shaped">
          <MomentsThatShaped />
        </SectionErrorBoundary>
        
        {/* About Section - Simplified Biography */}
        <SectionErrorBoundary sectionName="About Section">
          <section id="about" className="relative">
            <InteractiveBiography />
          </section>
        </SectionErrorBoundary>
        
        {/* Phase 1: Interactive Timeline with Audio */}
        <SectionErrorBoundary sectionName="Interactive Timeline">
          <InteractiveAudioTimeline />
        </SectionErrorBoundary>
        
        {/* Phase 2: Enhanced DQAA Showcase */}
        <SectionErrorBoundary sectionName="DQAA Showcase">
          <section id="dqaa" className="relative">
            <DQAAShowcase />
          </section>
        </SectionErrorBoundary>
        
        {/* Phase 2: Admission Inquiry */}
        <SectionErrorBoundary sectionName="Admission Inquiry">
          <AdmissionInquiry />
        </SectionErrorBoundary>
        
        {/* Phase 1: Comprehensive Media Wall */}
        <SectionErrorBoundary sectionName="Media Wall">
          <ComprehensiveMediaWall />
        </SectionErrorBoundary>
        
        {/* Phase 1: Transformed Lives Showcase */}
        <SectionErrorBoundary sectionName="Transformed Lives">
          <TransformedLivesShowcase />
        </SectionErrorBoundary>
        
        {/* Testimonials - Social Proof */}
        <SectionErrorBoundary sectionName="Testimonials">
          <TestimonialsSection />
        </SectionErrorBoundary>
        
        {/* Books Section */}
        <SectionErrorBoundary sectionName="Books Section">
          <section id="books" className="relative">
            <InteractiveBookExperience />
          </section>
        </SectionErrorBoundary>
        
        {/* Academy Section - DQAA Legacy */}
        <SectionErrorBoundary sectionName="Academy Section">
          <section id="academy" className="relative">
            <ChapterThree />
          </section>
        </SectionErrorBoundary>
        
        {/* Impact Section - Global Visualization */}
        <SectionErrorBoundary sectionName="Impact Section">
          <section id="impact" className="relative">
            <GlobalImpactVisualization />
          </section>
        </SectionErrorBoundary>
        
        {/* Phase 1: Thought Leadership Blog */}
        <SectionErrorBoundary sectionName="Blog Section">
          <section id="blog" className="relative">
            <ThoughtLeadershipBlog />
          </section>
        </SectionErrorBoundary>
        
        {/* Call to Action */}
        <SectionErrorBoundary sectionName="Call to Action">
          <CallToActionSection />
        </SectionErrorBoundary>
        
        {/* Contact Section */}
        <SectionErrorBoundary sectionName="Contact Section">
          <section id="contact" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-royal-50 to-golden-50 relative">
            <ResponsiveContainer size="lg" padding="lg">
              <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <div className="inline-block mb-4">
                  <span className="text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-golden-600">
                    Get In Touch
                  </span>
                </div>
                <FluidTypography variant="h2" color="royal" className="mb-4 sm:mb-6">
                  Connect with Dr. Rahman
                </FluidTypography>
                <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto px-4">
                  For collaborations, speaking engagements, or inquiries about DQAA, 
                  Dr. Rahman welcomes connections with educators and community leaders.
                </FluidTypography>
              </div>
              <Contact />
            </ResponsiveContainer>
          </section>
        </SectionErrorBoundary>
        
        {/* Footer */}
        <SectionErrorBoundary sectionName="Footer">
          <FooterModern />
        </SectionErrorBoundary>
      </div>
    </LanguageProvider>
  );
};

export default Index;
