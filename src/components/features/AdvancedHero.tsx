import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ResponsiveContainer from '@/components/layout/ResponsiveContainer';
import HeroPortrait from '@/components/hero/HeroPortrait';
import { designTokens } from '@/lib/design-tokens';

const AdvancedHero: React.FC = () => {
  const scrollToContent = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Background image with refined overlay for better contrast */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg"
          alt="Dr. P.T. Abdul Rahman"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Increased opacity for the gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/90 to-primary-700/85" />
      </div>

      {/* Main Content */}
      <ResponsiveContainer size="xl" padding="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-screen py-24">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-accent-400 text-fluid-sm md:text-fluid-base font-light tracking-[0.25em] uppercase">
                Distinguished Legal Consultant · Scholar · Humanitarian · Leader
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-5xl md:text-fluid-6xl font-heading font-bold text-neutral-50 mb-8 leading-tight"
            >
              Dr. P.T. Abdul Rahman
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-fluid-lg md:text-fluid-xl font-body text-neutral-200 leading-relaxed max-w-2xl lg:max-w-none mb-10"
            >
              Official digital platform of Dr. P.T. Abdul Rahman: UAE-based Legal Consultant, Islamic Scholar, Humanitarian Leader, Institutional Founder, and Author with 30+ years of global impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={scrollToContent}
                className="bg-accent-500 hover:bg-accent-600 text-primary-900 px-8 py-4 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl min-h-[56px]"
              >
                Explore His Journey
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-neutral-300 text-neutral-50 px-8 py-4 rounded-lg hover:bg-neutral-800 transition-all duration-300 font-semibold min-h-[56px]"
              >
                Connect with Dr. Rahman
              </button>
            </motion.div>
          </div>

          {/* Portrait */}
          <HeroPortrait />
        </div>
      </ResponsiveContainer>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-300 hover:text-neutral-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
};

export default AdvancedHero;
