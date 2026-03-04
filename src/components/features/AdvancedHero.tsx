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

      {/* Massive Name with logo */}
      <div className="container mx-auto px-6 mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.img
            src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png"
            alt="Logo"
            className="h-16 md:h-20 w-auto opacity-80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
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
          {['About', 'Career', 'Publications', 'Gallery', 'Milestones', 'Contact'].map((item) => (
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
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0">
        {/* Left: Role description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:col-span-5 bg-[#EDE8E3] flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-0"
        >
          <div>
            <h2 className="font-playfair text-fluid-5xl md:text-fluid-6xl font-bold text-foreground leading-[1.05] mb-4">
              Islamic Scholar<br />
              <span className="text-golden-600">&amp; Legal Consultant</span>
            </h2>
            <p className="text-foreground/60 text-fluid-base leading-relaxed max-w-md mb-4">
              A distinguished figure with over three decades of impactful contributions across legal consultancy, Islamic scholarship, and humanitarian leadership.
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
              Educator · Community Leader · Humanitarian
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollTo('contact')}
                className="bg-foreground text-background px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-foreground/90 transition-colors min-h-[48px]"
              >
                Get in Touch
              </button>
              <button
                onClick={() => scrollTo('about')}
                className="border border-foreground text-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-foreground hover:text-background transition-colors min-h-[48px]"
              >
                Explore
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="lg:col-span-7 relative overflow-hidden min-h-[400px] lg:min-h-0"
        >
          <ProgressiveImage
            src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
            alt="P.T. Abdul Rahman"
            className="w-full h-full object-cover object-top"
            priority
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#EDE8E3]/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedHero;
