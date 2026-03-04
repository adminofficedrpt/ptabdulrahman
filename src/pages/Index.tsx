import { useEffect, useState } from 'react';
import PreLoader from '@/components/PreLoader';
import FooterModern from '@/components/FooterModern';
import { preloadImages, preloadCriticalImages } from '@/utils/imagePreloader';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import AdvancedHero from '@/components/features/AdvancedHero';
import ChapterOne from '@/components/chapters/ChapterOne';
import ChapterTwo from '@/components/chapters/ChapterTwo';
import ChapterThree from '@/components/chapters/ChapterThree';
import PhotoGallerySection from '@/components/sections/PhotoGallerySection';
import ImmersiveTimeline from '@/components/timeline/ImmersiveTimeline';
import PressWall from '@/components/trust/PressWall';
import Contact from '@/components/Contact';
import SectionErrorBoundary from '@/components/error/SectionErrorBoundary';

const criticalImages = [
  '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
  '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    preloadCriticalImages(criticalImages);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <EnhancedSEO />

      <SectionErrorBoundary sectionName="Navigation">
        <NavigationSystem />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Hero">
        <AdvancedHero />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="About">
        <ChapterOne />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Career">
        <ChapterTwo />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Publications">
        <ChapterThree />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Gallery">
        <PhotoGallerySection />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Press">
        <PressWall />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Milestones">
        <ImmersiveTimeline />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Contact">
        <Contact />
      </SectionErrorBoundary>

      <SectionErrorBoundary sectionName="Footer">
        <FooterModern />
      </SectionErrorBoundary>
    </div>
  );
};

export default Index;
