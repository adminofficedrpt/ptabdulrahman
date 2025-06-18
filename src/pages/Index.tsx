
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Work from '@/components/Work';
import MediaHighlights from '@/components/MediaHighlights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import CallToActionSection from '@/components/sections/CallToActionSection';
import SEOMetadata from '@/components/seo/SEOMetadata';

// New enhanced components
import CinematicHeroV2 from '@/components/modern/CinematicHeroV2';
import VisionarySection from '@/components/narrative/VisionarySection';
import InteractiveTimeline from '@/components/narrative/InteractiveTimeline';
import BooksShowcase from '@/components/narrative/BooksShowcase';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-royal-900 flex items-center justify-center">
        <div className="text-center">
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Loading" 
            className="h-20 w-auto mx-auto mb-6 animate-pulse"
          />
          <div className="text-golden-300 text-lg font-light">Preparing the Journey...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOMetadata />
      <Helmet>
        <title>Dr. P.T. Abdul Rahman - Visionary Islamic Scholar, Educator & Humanitarian Leader</title>
        <meta name="description" content="Explore the transformative journey of Dr. P.T. Abdul Rahman - founder of DQAA, author of 15+ influential works, UAE Golden Visa recipient, and architect of educational renaissance bridging Kerala's heritage with global Islamic scholarship." />
      </Helmet>
      
      <NavigationSystem />
      <CinematicHeroV2 />
      <VisionarySection />
      <InteractiveTimeline />
      <BooksShowcase />
      <Work />
      <MediaHighlights />
      <CallToActionSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
