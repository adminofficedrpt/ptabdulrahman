
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Award, Globe2, Languages, Tv, Shield, CreditCard } from 'lucide-react';

const credentials = [
  {
    icon: CreditCard,
    title: "UAE Golden Visa",
    description: "Awarded the prestigious UAE Golden Visa in recognition of professional contributions"
  },
  {
    icon: Shield,
    title: "Central Military Command UAE",
    description: "Role with the Central Military Command of the United Arab Emirates"
  },
  {
    icon: Tv,
    title: "The Guidance – Dharma Reka",
    description: "Pioneered Islamic television programming through the TV show 'The Guidance – Dharma Reka'"
  },
  {
    icon: Languages,
    title: "Six Languages",
    description: "Proficient in Arabic, English, Hindi, Urdu, Malayalam, and Tamil"
  },
  {
    icon: Globe2,
    title: "DIIC President",
    description: "President of the Dubai Indian Islamic Centre, serving the expatriate community"
  },
  {
    icon: Award,
    title: "Loka Kerala Sabha",
    description: "Appointed member of the Loka Kerala Sabha, connecting the global Keralite diaspora"
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
      title="About"
      subtitle="A life dedicated to scholarship, education, and community service"
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
        <p className="text-lg md:text-xl text-royal-700 leading-relaxed mb-6">
          P.T. Abdul Rahman is an Islamic scholar, author, and community leader based in Dubai, UAE. 
          With over three decades of service, he has dedicated his career to Islamic education, 
          community welfare, and interfaith understanding.
        </p>
        <p className="text-lg text-royal-600 leading-relaxed">
          Born in Kerala, India, he pursued theological studies (Dars) at Palakkod East Masjid and 
          Edakazhiyoor Juma Masjid under eminent scholars. He holds an MA and has authored multiple 
          books on Islamic philosophy, education, and social issues in Malayalam, Arabic, and English.
        </p>
      </motion.div>

      {/* Key Credentials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {credentials.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-royal-100/50 hover:shadow-lg hover:border-golden-200/50 transition-all duration-300 group"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-royal-100 to-golden-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-royal-500 group-hover:to-golden-500 transition-all duration-300">
              <item.icon size={22} className="text-royal-700 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-royal-900 mb-2">{item.title}</h3>
            <p className="text-royal-600 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Language Proficiency */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-playfair font-bold text-white text-center mb-8">
          Linguistic Proficiency
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="text-lg font-medium text-golden-300 mb-1">{lang.native}</div>
              <div className="text-sm text-white/70">{lang.name}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
