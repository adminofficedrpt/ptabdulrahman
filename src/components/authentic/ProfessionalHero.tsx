
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Scale } from 'lucide-react';

const ProfessionalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
              alt="Dr. P.T. Abdul Rahman"
              className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-2xl border-4 border-white"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Dr. P.T. Abdul Rahman
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Visionary Educator
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Humanitarian Leader
            </span>
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
              Legal Expert
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Founder of Darul Quran Abdulla Academy, Dubai Indian Islamic Centre, and Precedential Legal Consultancy. 
            Serving UAE communities for over 30 years with dedication to education, humanitarian work, and legal excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center group">
              Explore His Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
              View Publications
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <BookOpen className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">6+ Books Published</h3>
              <p className="text-slate-300 text-sm">Multiple languages including Arabic, English, Malayalam</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">30+ Years Service</h3>
              <p className="text-slate-300 text-sm">Dedicated community leadership in UAE</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Scale className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Legal Excellence</h3>
              <p className="text-slate-300 text-sm">Precedential Legal Consultancy founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;
