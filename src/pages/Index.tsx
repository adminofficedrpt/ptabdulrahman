
import React, { useState, useEffect } from 'react';
import EnhancedHeroSection from '@/components/sections/EnhancedHeroSection';
import ChapterOne from '@/components/chapters/ChapterOne';
import ChapterTwo from '@/components/chapters/ChapterTwo';
import ChapterThree from '@/components/chapters/ChapterThree';
import ChapterContainer from '@/components/chapters/ChapterContainer';
import EnhancedTimeline from '@/components/timeline/EnhancedTimeline';
import MediaHighlights from '@/components/MediaHighlights';
import CallToActionSection from '@/components/sections/CallToActionSection';
import FloatingActionButton from '@/components/navigation/FloatingActionButton';
import FooterEnhanced from '@/components/FooterEnhanced';
import PreLoader from '@/components/PreLoader';
import SEOMetadata from '@/components/seo/SEOMetadata';
import AdmissionInquiry from '@/components/dqaa/AdmissionInquiry';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DQAAShowcase from '@/components/dqaa/DQAAShowcase';
import VerifiableAwards from '@/components/authority/VerifiableAwards';
import MediaCoverageArchive from '@/components/authority/MediaCoverageArchive';
import AcademicCredentials from '@/components/authority/AcademicCredentials';
import CitationManager from '@/components/authority/CitationManager';
import StoryNavigation from '@/components/modern/StoryNavigation';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    // Handle floating button visibility
    const handleScroll = () => {
      setShowFloatingButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <LanguageProvider>
        <SEOMetadata />
        <StoryNavigation />
        
        {showPreloader ? (
          <PreLoader />
        ) : (
          <>
            <EnhancedHeroSection />
            <ChapterOne />
            <ChapterTwo />
            <ChapterThree />
            <ChapterContainer
              id="scholar"
              chapterNumber={4}
              title="Scholar & Researcher"
              subtitle="Academic excellence and scholarly contributions"
              variant="gradient"
            >
              <AcademicCredentials />
            </ChapterContainer>
            <VerifiableAwards />
            <MediaCoverageArchive />
            <CitationManager />
            <DQAAShowcase />
            <AdmissionInquiry />
            <EnhancedTimeline />
            <MediaHighlights />
            <CallToActionSection />
            <FloatingActionButton 
              isVisible={showFloatingButton}
              onScrollToTop={scrollToTop}
            />
            <FooterEnhanced />
          </>
        )}
      </LanguageProvider>
    </div>
  );
};

export default Index;
