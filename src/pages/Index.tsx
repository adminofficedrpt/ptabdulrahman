import React, { useState, useEffect } from 'react';
import EnhancedHeroSection from '@/components/modern/HeroSection';
import ChapterOne from '@/components/chapters/ChapterOne';
import ChapterTwo from '@/components/chapters/ChapterTwo';
import ChapterThree from '@/components/chapters/ChapterThree';
import ChapterContainer from '@/components/chapters/ChapterContainer';
import EnhancedTimeline from '@/components/EnhancedTimeline';
import MediaHighlights from '@/components/MediaHighlights';
import CallToActionSection from '@/components/CallToActionSection';
import FloatingActionButton from '@/components/FloatingActionButton';
import FooterEnhanced from '@/components/FooterEnhanced';
import PreLoader from '@/components/PreLoader';
import SEOMetadata from '@/components/seo/SEOMetadata';
import AdmissionInquiry from '@/components/AdmissionInquiry';
import { LanguageProvider } from '@/contexts/LanguageContext';
import DQAAShowcase from '@/components/dqaa/DQAAShowcase';
import VerifiableAwards from '@/components/authority/VerifiableAwards';
import MediaCoverageArchive from '@/components/authority/MediaCoverageArchive';
import AcademicCredentials from '@/components/authority/AcademicCredentials';
import CitationManager from '@/components/authority/CitationManager';

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <LanguageProvider>
        <SEOMetadata />
        <StoryNavigation />
        
        {showPreloader ? (
          <PreLoader onComplete={() => setShowPreloader(false)} />
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
            <FloatingActionButton />
            <FooterEnhanced />
          </>
        )}
      </LanguageProvider>
    </div>
  );
};

export default Index;
