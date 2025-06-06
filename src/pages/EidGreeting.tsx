
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import CrescentMoon from '@/components/eid/CrescentMoon';
import TwinklingStars from '@/components/eid/TwinklingStars';
import TextRevealAnimation from '@/components/eid/TextRevealAnimation';
import IslamicPattern from '@/components/eid/IslamicPattern';
import LanguageToggle from '@/components/eid/LanguageToggle';
import SocialShare from '@/components/eid/SocialShare';
import EidAudio from '@/components/eid/EidAudio';

const EidGreeting = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.includes('ar') || browserLang.includes('arabic')) {
      setLanguage('ar');
    }
  }, []);

  const content = {
    en: {
      title: "Eid ul Adha Mubarak 2024",
      greeting: "Eid Mubarak!",
      message: "May this blessed Eid ul Adha bring peace, prosperity, and countless blessings to you and your loved ones.",
      signature: "— Dr. P.T. Abdul Rahman",
      subtitle: "Wishing you and your family joy and happiness",
      shareText: "Eid Mubarak from Dr. P.T. Abdul Rahman"
    },
    ar: {
      title: "عيد الأضحى المبارك ٢٠٢٤",
      greeting: "عيد مبارك!",
      message: "نسأل الله أن يعيد هذا العيد عليكم بالخير والسلام والبركات الوفيرة.",
      signature: "— د. عبد الرحمن",
      subtitle: "نتمنى لكم ولعائلتكم السعادة والفرح",
      shareText: "عيد مبارك من الدكتور عبد الرحمن"
    }
  };

  const currentContent = content[language];
  const isRTL = language === 'ar';

  return (
    <>
      <Helmet>
        <title>Eid ul Adha 2024 - Greetings from Dr. P.T. Abdul Rahman | عيد الأضحى مبارك</title>
        <meta name="description" content="Eid Mubarak from Dr. P.T. Abdul Rahman. May this blessed Eid bring peace and prosperity. عيد مبارك من الدكتور عبد الرحمن" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ptabdulrahman.com/eid" />
        <meta property="og:title" content="Eid ul Adha 2024 - Dr. P.T. Abdul Rahman | عيد الأضحى مبارك" />
        <meta property="og:description" content="Eid Mubarak! Blessed greetings from Dr. P.T. Abdul Rahman. عيد مبارك من الدكتور عبد الرحمن" />
        <meta property="og:image" content="https://www.ptabdulrahman.com/eid-thumbnail.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.ptabdulrahman.com/eid" />
        <meta name="twitter:title" content="Eid ul Adha 2024 - Dr. P.T. Abdul Rahman" />
        <meta name="twitter:description" content="Eid Mubarak! Blessed greetings from Dr. P.T. Abdul Rahman" />
        <meta name="twitter:image" content="https://www.ptabdulrahman.com/eid-thumbnail.jpg" />
        
        {/* Language alternatives */}
        <link rel="alternate" hrefLang="en" href="https://www.ptabdulrahman.com/eid?lang=en" />
        <link rel="alternate" hrefLang="ar" href="https://www.ptabdulrahman.com/eid?lang=ar" />
        
        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Helmet>

      <div 
        className={`min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 ${isRTL ? 'rtl' : 'ltr'}`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Background Elements */}
        <TwinklingStars />
        <IslamicPattern />
        
        {/* Audio Control */}
        <EidAudio />
        
        {/* Language Toggle */}
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
          {/* Crescent Moon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mb-8"
          >
            <CrescentMoon />
          </motion.div>
          
          {/* Greeting Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-lg mx-auto text-center bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className={`text-2xl md:text-3xl font-bold text-yellow-300 mb-6 ${isRTL ? 'font-arabic' : 'font-playfair'}`}
            >
              {currentContent.title}
            </motion.h1>
            
            {/* Animated Greeting */}
            <TextRevealAnimation 
              text={currentContent.greeting}
              className={`text-4xl md:text-5xl font-bold text-white mb-4 ${isRTL ? 'font-arabic' : 'font-playfair'}`}
              delay={2}
            />
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className={`text-yellow-200 text-lg mb-6 ${isRTL ? 'font-arabic' : ''}`}
            >
              {currentContent.subtitle}
            </motion.p>
            
            {/* Main Message */}
            <TextRevealAnimation
              text={currentContent.message}
              className={`text-white text-lg leading-relaxed mb-6 ${isRTL ? 'font-arabic text-right' : 'text-left'}`}
              delay={3}
              speed={50}
            />
            
            {/* Signature */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className={`text-yellow-300 text-xl font-semibold ${isRTL ? 'font-arabic text-right' : 'text-right font-playfair'}`}
            >
              {currentContent.signature}
            </motion.p>
          </motion.div>
          
          {/* Social Share */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5 }}
            className="mt-8"
          >
            <SocialShare 
              language={language}
              shareText={currentContent.shareText}
              url="https://www.ptabdulrahman.com/eid"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default EidGreeting;
