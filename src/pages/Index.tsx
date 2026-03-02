import { useEffect, useState } from 'react';
import PreLoader from '@/components/PreLoader';
import FooterModern from '@/components/FooterModern';
import { preloadImages, preloadCriticalImages } from '@/utils/imagePreloader';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import AdvancedHero from '@/components/features/AdvancedHero';
import ChapterOne from '@/components/chapters/ChapterOne';
import ChapterTwo from '@/components/chapters/ChapterTwo';
import ChapterThree from '@/components/chapters/ChapterThree';
import HorizontalTimeline from '@/components/timeline/HorizontalTimeline'; // Using the refined HorizontalTimeline
import Contact from '@/components/Contact';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import SectionErrorBoundary from '@/components/error/SectionErrorBoundary';
import { designTokens } from '@/lib/design-tokens';

const criticalImages = [
  '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
  '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
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
        const maxWaitTimer = setTimeout(() => setIsLoading(false), 3000);
        return () => clearTimeout(maxWaitTimer);
      }
    }, 1800);
    
    return () => clearTimeout(timer);
  }, [imagesPreloaded]);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <EnhancedSEO />
      <ScrollProgressBar />
      
      <SectionErrorBoundary sectionName="Navigation">
        <NavigationSystem />
      </SectionErrorBoundary>
      
      {/* Hero */}
      <SectionErrorBoundary sectionName="Hero">
        <AdvancedHero />
      </SectionErrorBoundary>
      
      {/* About / Integrated Identity Overview */}
      <SectionErrorBoundary sectionName="About">
        <ChapterOne />
      </SectionErrorBoundary>
      
      {/* Career Timeline and Institutional Contributions */}
      <SectionErrorBoundary sectionName="CareerTimeline">
        <HorizontalTimeline />
      </SectionErrorBoundary>
      
      {/* Publications, Media, and Recognition */}
      <SectionErrorBoundary sectionName="PublicationsAndRecognition">
        <ChapterThree />
      </SectionErrorBoundary>
      
      {/* Contact */}
      <SectionErrorBoundary sectionName="Contact">
        <section id="contact" className={`py-${designTokens.spacing.section.md} bg-gradient-to-br from-primary-50 to-accent-50`}>
          <ResponsiveContainer size="lg" padding="lg">
            <Contact />
          </ResponsiveContainer>
        </section>
      </SectionErrorBoundary>
      
      {/* Footer */}
      <SectionErrorBoundary sectionName="Footer">
        <FooterModern />
      </SectionErrorBoundary>
    </div>
  );
};

export default Index;
