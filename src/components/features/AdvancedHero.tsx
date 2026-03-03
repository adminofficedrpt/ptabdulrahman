import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from '@/components/ui/progressive-image';

const AdvancedHero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-background min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="container mx-auto px-6 pt-8 flex justify-between items-start text-xs tracking-[0.2em] uppercase text-muted-foreground">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border border-border px-3 py-1.5"
        >
          Based in Dubai, UAE
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-right hidden sm:block"
        >
          Scholar · Educator · Community Leader
        </motion.span>
      </div>

      {/* Massive Name */}
      <div className="container mx-auto px-6 mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center gap-4 md:gap-8"
        >
          <h1 className="font-playfair font-bold text-foreground text-display-lg text-center leading-[0.85] tracking-tight uppercase">
            <span className="block">P.T. Abdul</span>
            <span className="block">Rahman</span>
          </h1>
        </motion.div>
      </div>

      {/* Inline Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="container mx-auto px-6 mt-8 md:mt-12"
      >
        <div className="border-t border-b border-border py-4 flex flex-wrap justify-center gap-6 md:gap-10">
          {['About', 'Career', 'Publications', 'Milestones', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 min-h-[44px] flex items-center"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="text-xs tracking-[0.2em] uppercase text-golden-600 hover:text-golden-700 transition-colors duration-300 font-semibold min-h-[44px] flex items-center"
          >
            Get in Touch
          </button>
        </div>
      </motion.nav>

      {/* Two-column: Role + Portrait */}
      <div className="container mx-auto px-6 flex-1 flex items-center py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left: Role description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="font-playfair text-fluid-5xl md:text-fluid-6xl font-bold text-foreground leading-[1.05] mb-6">
              Islamic Scholar<br />
              <span className="text-golden-600">&amp; Legal Consultant</span>
            </h2>
            <p className="text-muted-foreground text-fluid-base leading-relaxed max-w-xl mb-8">
              An educator based in the UAE with over three decades dedicated to community service, interfaith understanding, and educational development across the Middle East and India.
            </p>
            <button
              onClick={() => scrollTo('about')}
              className="bg-foreground text-background px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-foreground/90 transition-colors min-h-[48px]"
            >
              Explore His Journey
            </button>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-[28rem] md:w-96 md:h-[32rem] overflow-hidden">
              <ProgressiveImage
                src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
                alt="P.T. Abdul Rahman"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedHero;
