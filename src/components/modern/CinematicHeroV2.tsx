
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Quote } from 'lucide-react';

const CinematicHeroV2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Advanced parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[100vh] overflow-hidden bg-royal-900"
    >
      {/* Cinematic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY, scale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png')`
          }}
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900/85 via-royal-800/75 to-royal-700/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Subtle Islamic geometric pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15h-30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex items-center justify-center h-full px-6"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Refined Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12"
          >
            <img 
              src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
              alt="Dr. P.T. Abdul Rahman" 
              className="h-24 md:h-32 mx-auto filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Cinematic Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-light text-white mb-6 leading-tight tracking-wide">
              Dr. P.T. Abdul Rahman
            </h1>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-golden-400 to-transparent mx-auto mb-8" />
          </motion.div>

          {/* Compelling Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-golden-300 font-light tracking-wide mb-8">
              Architect of Educational Renaissance
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Three decades of transforming lives through Islamic scholarship, 
              bridging cultures through education, and building tomorrow's leaders at 
              Darul Quran Abdulla Academy.
            </p>
          </motion.div>

          {/* Personal Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-16"
          >
            <div className="relative max-w-3xl mx-auto">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-golden-400/30" />
              <blockquote className="text-lg md:text-xl text-white/85 italic font-light leading-relaxed">
                "True education is not merely the transfer of knowledge, but the awakening of the soul 
                to its divine purpose and potential."
              </blockquote>
              <Quote className="absolute -bottom-4 -right-4 w-8 h-8 text-golden-400/30 rotate-180" />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center text-white/70 cursor-pointer group"
              onClick={() => {
                const nextSection = document.getElementById('visionary');
                nextSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-sm mb-3 group-hover:text-white transition-colors">
                Begin the Journey
              </span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/90"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicHeroV2;
