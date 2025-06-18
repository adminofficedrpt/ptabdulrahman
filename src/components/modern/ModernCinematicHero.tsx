
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Play, Award, Users, Globe } from 'lucide-react';

const ModernCinematicHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { icon: Award, label: 'UAE Golden Visa', sublabel: 'Distinguished Educator' },
    { icon: Users, label: '10,000+ Lives', sublabel: 'Transformed' },
    { icon: Globe, label: '6 Languages', sublabel: 'Fluent Speaker' }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative h-screen min-h-[100vh] overflow-hidden bg-black"
    >
      {/* Modern Background with Gradient Overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png')`
          }}
        />
        {/* Contemporary gradient - no more 80s vibes */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
      </motion.div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-golden-400/10 rounded-full"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex items-center h-full px-6 lg:px-8"
        style={{ y: contentY, opacity }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              
              {/* Refined Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-8"
              >
                <img 
                  src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" 
                  alt="Dr. P.T. Abdul Rahman" 
                  className="h-20 md:h-24 filter drop-shadow-2xl"
                />
              </motion.div>

              {/* Modern Typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-[1.1] tracking-tight">
                  Dr. P.T. Abdul
                  <span className="block font-bold bg-gradient-to-r from-white to-golden-300 bg-clip-text text-transparent">
                    Rahman
                  </span>
                </h1>
                <div className="w-16 h-px bg-gradient-to-r from-golden-400 to-transparent mb-6" />
              </motion.div>

              {/* Contemporary Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mb-8"
              >
                <p className="text-xl md:text-2xl text-gray-200 font-light mb-4 leading-relaxed">
                  Architect of Educational Renaissance
                </p>
                <p className="text-lg text-gray-300 font-light leading-relaxed max-w-2xl">
                  Three decades of transforming lives through Islamic scholarship, 
                  bridging cultures through education, and building tomorrow's leaders.
                </p>
              </motion.div>

              {/* Modern CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mb-12"
              >
                <button
                  onClick={() => {
                    const nextSection = document.getElementById('visionary');
                    nextSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Discover His Legacy</span>
                </button>
              </motion.div>

              {/* Achievement Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-wrap gap-4"
              >
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.label}
                    className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                  >
                    <div className="w-8 h-8 bg-golden-400/20 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-4 h-4 text-golden-400" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{achievement.label}</div>
                      <div className="text-gray-400 text-xs">{achievement.sublabel}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative"
              >
                <div className="relative w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden">
                  <img
                    src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
                    alt="Dr. P.T. Abdul Rahman"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Floating Quote */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 max-w-sm"
                >
                  <p className="text-white text-sm italic leading-relaxed">
                    "True education awakens the soul to its divine purpose and infinite potential."
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center text-white/60 cursor-pointer group"
          onClick={() => {
            const nextSection = document.getElementById('visionary');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs font-light mb-3 group-hover:text-white/80 transition-colors">
            Scroll to explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
          <ArrowDown className="w-4 h-4 mt-2 group-hover:translate-y-1 transition-transform" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernCinematicHero;
