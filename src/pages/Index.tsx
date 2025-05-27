
import { useEffect, useState } from 'react';
import PreLoader from '@/components/PreLoader';
import FooterModern from '@/components/FooterModern';
import { motion } from 'framer-motion';
import { preloadImages, heroImages } from '@/utils/imagePreloader';
import SEOMetadata from '@/components/seo/SEOMetadata';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import CinematicHero from '@/components/modern/CinematicHero';
import ChapterNavigation from '@/components/modern/ChapterNavigation';
import ChapterOne from '@/components/chapters/ChapterOne';
import ChapterTwo from '@/components/chapters/ChapterTwo';
import ChapterThree from '@/components/chapters/ChapterThree';
import EnhancedBooksGallery from '@/components/books/EnhancedBooksGallery';
import HorizontalTimeline from '@/components/timeline/HorizontalTimeline';
import Contact from '@/components/Contact';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import FluidTypography from '@/components/typography/FluidTypography';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="min-h-screen">
      <SEOMetadata />
      <ScrollProgressBar />
      
      {isLoading && <PreLoader />}
      
      {/* Navigation */}
      <NavigationSystem />
      
      {/* Chapter Navigation */}
      <ChapterNavigation />
      
      {/* Cinematic Hero */}
      <CinematicHero />
      
      {/* Chapter 1: The Visionary */}
      <ChapterOne />
      
      {/* Chapter 2: The Bridge Builder */}
      <ChapterTwo />
      
      {/* Chapter 3: The Educator */}
      <ChapterThree />
      
      {/* Chapter 4: The Scholar (Enhanced Books Gallery) */}
      <section id="scholar" className="relative">
        <EnhancedBooksGallery />
      </section>
      
      {/* Chapter 5: The Legacy (Enhanced Horizontal Timeline) */}
      <section id="legacy" className="relative">
        <HorizontalTimeline />
      </section>
      
      {/* Epilogue: Connect (Enhanced Contact) */}
      <section id="connect" className="py-[clamp(4rem,8vw,8rem)] bg-gradient-to-br from-royal-50 to-golden-50 relative">
        <ResponsiveContainer size="lg" padding="lg">
          <div className="text-center mb-[clamp(3rem,6vw,6rem)]">
            <div className="inline-block mb-4">
              <span className="text-sm font-light tracking-[0.2em] uppercase text-golden-600">
                Epilogue
              </span>
            </div>
            <FluidTypography variant="h2" color="royal" className="mb-6">
              Connect with Dr. P.T. Abdul Rahman
            </FluidTypography>
            <FluidTypography variant="body" color="muted" className="max-w-3xl mx-auto">
              Join the conversation and become part of a global community dedicated to 
              educational excellence and humanitarian service.
            </FluidTypography>
          </div>
          <Contact />
        </ResponsiveContainer>
      </section>
      
      {/* Modern Footer */}
      <FooterModern />
    </div>
  );
};

export default Index;
