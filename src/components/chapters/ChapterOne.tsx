import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Award, BookOpen, Users, Shield, Gavel, Tv, Globe2 } from 'lucide-react'; // Added Gavel for legal, Globe2 for global
import { designTokens } from '@/lib/design-tokens';

const credentials = [
  {
    icon: Gavel, // Legal consultant icon
    title: "Distinguished Legal Consultant",
    description: "Managing Partner at Precedential Legal Consultancy and Senior Legal Consultant at Tasheel Legal Consultancy, with extensive experience in UAE law."
  },
  {
    icon: Shield, // Military/Government icon
    title: "Government Service & Leadership",
    description: "Administrator at the Central Military Command, UAE, and Researcher at the Department of Islamic Affairs, Government of Dubai, contributing to public service and policy."
  },
  {
    icon: Tv, // Media icon
    title: "Pioneering Media Contributor",
    description: "Creator and presenter of 'The Guidance – Dharma Reka', a groundbreaking Islamic television series on Asianet (2001–2003)."
  },
  {
    icon: BookOpen, // Author icon
    title: "Prolific Author & Scholar",
    description: "Authored numerous influential books on Islamic philosophy, education, and contemporary social issues, published in multiple languages."
  },
  {
    icon: Users, // Community/Institutional icon
    title: "Institutional Founder & Leader",
    description: "Founder of Abdulla Educational Academy (India) and President of the Indian Islamic Center (Dubai), establishing key platforms for education and community welfare."
  },
  {
    icon: Award, // Recognition icon
    title: "Recognized Global Humanitarian",
    description: "Awarded the prestigious UAE Golden Visa for social contributions and recognized by UAE leadership for humanitarian endeavors."
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
      title="An Enduring Legacy of Impact"
      subtitle="A life defined by intellectual rigor, principled leadership, and profound humanitarian service."
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
        <p className={`text-fluid-lg md:text-fluid-xl ${designTokens.typography.fontFamily.body.join(',')} text-primary-800 leading-relaxed mb-6`}>
          Dr. P.T. Abdul Rahman stands as a distinguished figure with over three decades of impactful contributions across diverse fields. Based in the UAE, his expertise spans legal consultancy, Islamic scholarship, humanitarian leadership, institutional founding, and influential media contributions.
        </p>
        <p className={`text-fluid-base ${designTokens.typography.fontFamily.body.join(',')} text-primary-700 leading-relaxed`}>
          His journey reflects a steadfast commitment to intellectual growth and community empowerment. From government service and legal advisory to pioneering educational initiatives and fostering interfaith dialogue, Dr. Rahman's work has left an indelible mark on society in both the UAE and India, embodying a rare blend of authoritative knowledge and humble service.
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
