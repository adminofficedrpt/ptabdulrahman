
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NavigationSystem from '@/components/navigation/NavigationSystem';
import CallToActionSection from '@/components/sections/CallToActionSection';
import SEOMetadata from '@/components/seo/SEOMetadata';

// Modern enhanced components
import ModernCinematicHero from '@/components/modern/ModernCinematicHero';
import VisionarySection from '@/components/narrative/VisionarySection';
import EnhancedTimeline from '@/components/narrative/EnhancedTimeline';
import AdvancedBooksShowcase from '@/components/narrative/AdvancedBooksShowcase';
import PersonalLetter from '@/components/narrative/PersonalLetter';
import MediaArchive from '@/components/media/MediaArchive';
import TestimonialsWall from '@/components/testimonials/TestimonialsWall';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <img 
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
            alt="Loading" 
            className="h-24 w-auto mx-auto mb-8 animate-pulse filter brightness-0 invert"
          />
          <div className="text-white text-lg font-light tracking-wide">Preparing the Journey...</div>
          <div className="w-48 h-1 bg-gray-800 rounded-full mx-auto mt-6 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-golden-400 to-golden-600 rounded-full animate-pulse"></div>
          </div>
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
        <meta property="og:title" content="Dr. P.T. Abdul Rahman - Visionary Islamic Scholar & Educational Leader" />
        <meta property="og:description" content="Three decades of transforming lives through Islamic scholarship, bridging cultures through education, and building tomorrow's leaders at Darul Quran Abdulla Academy." />
        <meta property="og:image" content="/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png" />
        <meta property="og:url" content="https://ptabdulrahman.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. P.T. Abdul Rahman - Visionary Islamic Scholar" />
        <meta name="twitter:description" content="Architect of Educational Renaissance - bridging traditional Islamic scholarship with modern educational innovation." />
        <meta name="twitter:image" content="/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png" />
        
        {/* Structured Data for Enhanced SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. P.T. Abdul Rahman",
            "jobTitle": "Islamic Scholar, Educator, Humanitarian Leader",
            "description": "Visionary Islamic scholar, founder of Darul Quran Abdulla Academy, author of 15+ influential works, and UAE Golden Visa recipient.",
            "image": "/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png",
            "url": "https://ptabdulrahman.com",
            "sameAs": [
              "https://www.dqaa.ae",
              "https://linkedin.com/in/ptabdulrahman"
            ],
            "knowsAbout": [
              "Islamic Education",
              "Islamic Jurisprudence", 
              "Humanitarian Work",
              "Interfaith Dialogue",
              "Community Leadership"
            ],
            "alumniOf": "Traditional Islamic Education, Kerala",
            "worksFor": {
              "@type": "Organization",
              "name": "Darul Quran Abdulla Academy",
              "url": "https://www.dqaa.ae"
            }
          })}
        </script>
      </Helmet>
      
      <NavigationSystem />
      <ModernCinematicHero />
      <VisionarySection />
      <EnhancedTimeline />
      <AdvancedBooksShowcase />
      <PersonalLetter />
      <TestimonialsWall />
      <MediaArchive />
      <Work />
      <CallToActionSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
