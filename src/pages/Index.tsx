
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SimpleNavigation from '@/components/authentic/SimpleNavigation';
import ProfessionalHero from '@/components/authentic/ProfessionalHero';
import AuthenticAbout from '@/components/authentic/AuthenticAbout';
import ProfessionalTimeline from '@/components/authentic/ProfessionalTimeline';
import InstitutionsShowcase from '@/components/authentic/InstitutionsShowcase';
import PublicationsSection from '@/components/authentic/PublicationsSection';
import MediaCoverage from '@/components/authentic/MediaCoverage';
import ProfessionalContact from '@/components/authentic/ProfessionalContact';
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
          <div className="w-12 h-12 border-2 border-slate-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-slate-600 text-lg font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Dr. P.T. Abdul Rahman - Visionary Educator, Humanitarian Leader & Legal Expert</title>
        <meta name="description" content="Dr. P.T. Abdul Rahman is a visionary educator, humanitarian leader, and legal expert. Founder of Darul Quran Abdulla Academy, Dubai Indian Islamic Centre, and Precedential Legal Consultancy. Serving UAE and India for over 30 years." />
        <meta name="keywords" content="Dr. P.T. Abdul Rahman, Darul Quran Abdulla Academy, Dubai Indian Islamic Centre, Precedential Legal Consultancy, UAE Golden Visa, Islamic education, humanitarian work, legal consultancy" />
        <meta property="og:title" content="Dr. P.T. Abdul Rahman - Visionary Educator & Humanitarian Leader" />
        <meta property="og:description" content="Founder of multiple institutions spanning education, community service, and legal consultancy. Over 30 years of dedicated service to UAE and Indian communities." />
        <meta property="og:image" content="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. P.T. Abdul Rahman - Visionary Educator & Humanitarian Leader" />
        <meta name="twitter:description" content="Founder of multiple institutions spanning education, community service, and legal consultancy. Over 30 years of dedicated service to UAE and Indian communities." />
        <meta name="twitter:image" content="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        <link rel="canonical" href="https://drptabdulrahman.com" />
      </Helmet>
      
      <SimpleNavigation />
      <div id="hero">
        <ProfessionalHero />
      </div>
      <div id="about">
        <AuthenticAbout />
      </div>
      <div id="journey">
        <ProfessionalTimeline />
      </div>
      <div id="institutions">
        <InstitutionsShowcase />
      </div>
      <div id="publications">
        <PublicationsSection />
      </div>
      <div id="media">
        <MediaCoverage />
      </div>
      <div id="contact">
        <ProfessionalContact />
      </div>
      <SimpleFooter />
    </div>
  );
};

export default Index;
