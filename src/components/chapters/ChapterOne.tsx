import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Award, Globe2, Languages, Tv, Shield, CreditCard, BookOpen, Users } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';

const credentials = [
  {
    icon: CreditCard,
    title: "UAE Golden Visa",
    description: "Awarded the prestigious UAE Golden Visa for outstanding contributions to society and culture."
  },
  {
    icon: Shield,
    title: "Central Military Command UAE",
    description: "Served with distinction in the Central Military Command of the United Arab Emirates."
  },
  {
    icon: Tv,
    title: "Pioneering TV Program",
    description: "Creator and presenter of \'The Guidance – Dharma Reka\', a groundbreaking Islamic television series on Asianet."
  },
  {
    icon: BookOpen,
    title: "Prolific Author",
    description: "Authored numerous influential books on Islamic philosophy, education, and contemporary social issues."
  },
  {
    icon: Users,
    title: "Community Leadership",
    description: "Founder and President of the Dubai Indian Islamic Centre, fostering community welfare and interfaith harmony."
  },
  {
    icon: Award,
    title: "Global Recognition",
    description: "Honored by various international bodies and royal families for his humanitarian and educational endeavors."
  }
];

const languages = [
  { name: "Arabic", native: "العربية" },
  { name: "English", native: "English" },
  { name: "Hindi", native: "हिन्दी" },
  { name: "Urdu", native: "اردو" },
  { name: "Malayalam", native: "മലയാളം" },
  { name: "Tamil", native: "தமிழ்" },
];

const ChapterOne: React.FC = () => {
  return (
    <ChapterContainer
      id="about"
      title="The Visionary Scholar"
      subtitle="A life dedicated to intellectual pursuit, humanitarian service, and global understanding."
      variant="light"
    >
      {/* Biography */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className={`text-fluid-lg md:text-fluid-xl ${designTokens.typography.fontFamily.body.join(',')} text-primary-700 leading-relaxed mb-6`}>
          Dr. P.T. Abdul Rahman is a distinguished Islamic scholar, prolific author, and influential community leader based in Dubai, UAE. With over three decades of unwavering commitment, he has profoundly impacted Islamic education, community welfare, and interfaith dialogue across the globe.
        </p>
        <p className={`text-fluid-base ${designTokens.typography.fontFamily.body.join(',')} text-primary-600 leading-relaxed`}>
          Born in the vibrant cultural landscape of Kerala, India, Dr. Rahman pursued rigorous theological studies under eminent scholars. He holds a Master's degree and has penned numerous seminal works on Islamic philosophy, education, and contemporary social issues, published in multiple languages including Malayalam, Arabic, and English.
        </p>
      </motion.div>

      {/* Key Credentials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {credentials.map((item, index) => (
          <motion.div
            key={item.title}
            className={`bg-neutral-50/70 backdrop-blur-sm rounded-xl p-6 border border-primary-100/50 shadow-md hover:shadow-lg hover:border-accent-200/50 transition-all duration-300 group`}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className={`w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300`}>
              <item.icon size={22} className={`text-primary-700 group-hover:text-neutral-50 transition-colors`} />
            </div>
            <h3 className={`text-fluid-lg font-semibold ${designTokens.typography.fontFamily.heading.join(',')} text-primary-900 mb-2`}>{item.title}</h3>
            <p className={`text-fluid-sm ${designTokens.typography.fontFamily.body.join(',')} text-primary-600 leading-relaxed`}>{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Language Proficiency */}
      <motion.div 
        className={`bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 shadow-xl`}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-fluid-2xl font-heading font-bold text-neutral-50 text-center mb-8`}>
          Multilingual Mastery
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              className={`text-center p-4 bg-neutral-50/10 backdrop-blur-sm rounded-xl border border-neutral-50/10 shadow-inner`}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className={`text-fluid-base font-medium ${designTokens.typography.fontFamily.body.join(',')} text-accent-300 mb-1`}>{lang.native}</div>
              <div className={`text-fluid-sm ${designTokens.typography.fontFamily.body.join(',')} text-neutral-200`}>{lang.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
