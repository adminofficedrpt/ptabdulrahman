
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Users, BookOpen, Award, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const DQAAShowcase = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: 'Hifz Program',
      description: 'Complete Quran memorization with proper Tajweed',
      stats: '500+ Huffaz'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'Integrated modern curriculum with Islamic studies',
      stats: '95% Success Rate'
    },
    {
      icon: Users,
      title: 'Character Development',
      description: 'Holistic personality development and leadership training',
      stats: '1000+ Alumni'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Nationally recognized educational institution',
      stats: '25+ Awards'
    }
  ];

  const programs = [
    {
      name: 'Primary Hifz',
      duration: '3-4 Years',
      age: 'Ages 8-12',
      description: 'Foundation program for young students'
    },
    {
      name: 'Advanced Hifz',
      duration: '2-3 Years',
      age: 'Ages 13-16',
      description: 'Intensive memorization with academic studies'
    },
    {
      name: 'Teacher Training',
      duration: '1 Year',
      age: 'Ages 18+',
      description: 'Specialized program for Islamic educators'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-royal-50 via-white to-golden-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-golden-100 rounded-full text-golden-600 text-sm font-medium mb-4">
            <GraduationCap size={16} />
            <span>Educational Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-6">
            {t('dqaa.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t('dqaa.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://darul-quran.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-golden-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-golden-700 transition-colors"
            >
              <span>Visit DQAA Website</span>
              <ExternalLink size={16} />
            </a>
            <button
              onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 border-2 border-royal-600 text-royal-600 px-6 py-3 rounded-xl font-semibold hover:bg-royal-600 hover:text-white transition-colors"
            >
              <span>Apply Now</span>
            </button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-golden-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-golden-600" />
              </div>
              <h3 className="text-xl font-bold text-royal-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-3">{feature.description}</p>
              <div className="text-2xl font-bold text-golden-600">{feature.stats}</div>
            </motion.div>
          ))}
        </div>

        {/* Programs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-16"
        >
          <h3 className="text-2xl font-bold text-royal-900 mb-8 text-center">Academic Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-golden-300 transition-colors">
                <h4 className="text-xl font-bold text-royal-800 mb-2">{program.name}</h4>
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span>{program.duration}</span>
                  <span>{program.age}</span>
                </div>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-royal-600 to-royal-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Get in Touch with DQAA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <MapPin size={20} />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-royal-100">Kerala, India</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone size={20} />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-royal-100">+91 XXX XXX XXXX</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail size={20} />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-royal-100">info@darul-quran.com</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DQAAShowcase;
