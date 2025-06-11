
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroEnhanced from '@/components/HeroEnhanced';
import About from '@/components/About';
import Work from '@/components/Work';
import MediaHighlights from '@/components/MediaHighlights';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import QuickStatsSection from '@/components/sections/QuickStatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import SEOMetadata from '@/components/seo/SEOMetadata';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-royal-900 flex items-center justify-center">
        <div className="text-center">
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Loading" 
            className="h-16 w-auto mx-auto mb-4 animate-pulse"
          />
          <div className="text-golden-300 text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOMetadata />
      <Helmet>
        <title>Dr. P.T. Abdul Rahman - Islamic Scholar, Author & Educational Innovator</title>
        <meta name="description" content="Dr. P.T. Abdul Rahman - Distinguished Islamic scholar, founder of DQAA, author of 15+ books, UAE Golden Visa recipient. M.A. Sociology from University of Mysore." />
      </Helmet>
      
      <Navigation />
      <HeroEnhanced />
      <QuickStatsSection />
      <About />
      <Work />
      <TestimonialsSection />
      <MediaHighlights />
      <CallToActionSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
