
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, BookOpen, Users, Award } from 'lucide-react';
import SocialLinks from '../SocialLinks';

const ClearHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { icon: BookOpen, label: "Published Books", value: "7+" },
    { icon: Users, label: "Students Impacted", value: "10,000+" },
    { icon: Award, label: "Years of Service", value: "30+" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-700"></div>
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png"
            alt="Dr. P.T. Abdul Rahman"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-transparent to-royal-900/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 60 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center px-4 py-2 rounded-full bg-golden-500/20 text-golden-300 mb-6 text-sm font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              Islamic Scholar • Educator • Humanitarian
            </motion.div>
            
            {/* Name */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-playfair"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Dr. P.T. Abdul Rahman
            </motion.h1>
            
            {/* Mission Statement */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl text-golden-300 font-light mb-4">
                Bridging Faith, Education, and Humanity
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                A distinguished Islamic scholar from Kerala serving the UAE for over three decades. 
                Founder of Darul Quran Abdulla Academy, author of influential Islamic literature, 
                and champion of interfaith dialogue and humanitarian causes.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-6 w-6 text-golden-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a 
                href="#about" 
                className="px-8 py-3 bg-gradient-to-r from-golden-500 to-golden-600 text-white rounded-lg hover:from-golden-600 hover:to-golden-700 transition-all duration-300 shadow-lg font-medium"
              >
                Discover His Story
              </a>
              <a 
                href="#books" 
                className="px-8 py-3 border-2 border-golden-400 text-golden-300 rounded-lg hover:bg-golden-400 hover:text-royal-900 transition-all duration-300 font-medium"
              >
                Explore His Books
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-golden-300/20 to-royal-300/30 blur-lg"></div>
              <img 
                src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" 
                alt="Dr. P.T. Abdul Rahman Portrait" 
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <motion.a 
          href="#about"
          className="flex flex-col items-center text-golden-300 hover:text-golden-200 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm mb-2">Learn More</span>
          <ArrowDownIcon size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ClearHero;
