
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BookOpen, Award, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/language/LanguageSelector';

const EnhancedHeroSection = () => {
  const { t, isRTL } = useLanguage();
  
  const stats = [
    { icon: Users, value: "10,000+", label: "Lives Impacted" },
    { icon: BookOpen, value: "15+", label: "Books Published" },
    { icon: Award, value: "25+", label: "Awards Received" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Language Selector */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSelector />
      </div>

      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg"
          alt="Dr. P.T. Abdul Rahman"
          className="w-full h-full object-cover"
        />
        {/* Modern gradient overlay */}
        <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/70 via-black/50 to-transparent`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`${isRTL ? 'text-right' : 'text-left'}`}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6"
            >
              <span className="text-sm font-medium">Distinguished Islamic Scholar</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {t('hero.title').split(' ').slice(0, -1).join(' ')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-golden-400 to-golden-600">
                {t('hero.title').split(' ').slice(-1)[0]}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 font-light mb-8 leading-relaxed"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className={`flex flex-col sm:flex-row gap-4 mb-12 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
            >
              <button
                onClick={() => handleScrollTo('about')}
                className="group bg-gradient-to-r from-golden-500 to-golden-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-golden-600 hover:to-golden-700 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:-translate-y-1"
              >
                {t('hero.cta.discover')}
                <ArrowRight className={`ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </button>
              
              <button
                onClick={() => handleScrollTo('dqaa')}
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                <Play className={`mr-2 w-5 h-5 ${isRTL ? 'mr-0 ml-2' : ''}`} />
                {t('hero.cta.vision')}
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className={`text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className={`flex items-center ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'} mb-2`}>
                    <div className={`w-12 h-12 bg-golden-500/20 rounded-full flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                      <stat.icon className="w-6 h-6 text-golden-400" />
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Highlight */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`hidden lg:flex flex-col items-end ${isRTL ? 'items-start text-left' : 'text-right'}`}
          >
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 max-w-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t('dqaa.subtitle')}
              </h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Founder of Darul Quran Abdulla Academy, bridging traditional Islamic education 
                with modern pedagogical approaches for the 21st century.
              </p>
              <button
                onClick={() => handleScrollTo('dqaa')}
                className={`text-golden-400 hover:text-golden-300 font-semibold flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                Learn More <ArrowRight className={`ml-2 w-4 h-4 ${isRTL ? 'rotate-180 mr-2 ml-0' : ''}`} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
