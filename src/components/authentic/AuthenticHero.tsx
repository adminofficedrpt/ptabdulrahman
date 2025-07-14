
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AuthenticHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
              alt="Dr. P.T. Abdul Rahman"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-light text-slate-900 mb-6 leading-tight"
          >
            Dr. P.T. Abdul Rahman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 font-light max-w-3xl mx-auto leading-relaxed"
          >
            Islamic Scholar, Educator & Community Leader
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Bridging traditional Islamic education with modern learning at Darul Quran Abdulla Academy
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full hover:bg-slate-800 transition-colors flex items-center justify-center group">
              Learn About My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-full hover:bg-slate-50 transition-colors">
              Contact Me
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticHero;
