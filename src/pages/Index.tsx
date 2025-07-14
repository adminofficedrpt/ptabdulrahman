
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SimpleNavigation from '@/components/authentic/SimpleNavigation';
import AuthenticHero from '@/components/authentic/AuthenticHero';
import AboutSection from '@/components/authentic/AboutSection';
import WorkSection from '@/components/authentic/WorkSection';
import ContactSection from '@/components/authentic/ContactSection';
import SimpleFooter from '@/components/authentic/SimpleFooter';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-slate-200 border-t-slate-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-slate-600 text-lg font-light">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dr. P.T. Abdul Rahman - Islamic Scholar, Educator & Community Leader</title>
        <meta name="description" content="Dr. P.T. Abdul Rahman is an Islamic scholar and educator who founded Darul Quran Abdulla Academy, bridging traditional Islamic education with modern learning methods." />
        <meta property="og:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar & Educator" />
        <meta property="og:description" content="Founder of Darul Quran Abdulla Academy, bridging traditional Islamic education with contemporary learning methods." />
        <meta property="og:image" content="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
      </Helmet>
      
      <SimpleNavigation />
      <div id="hero">
        <AuthenticHero />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="work">
        <WorkSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <SimpleFooter />
    </div>
  );
};

export default Index;
