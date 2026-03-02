import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { BookOpen, Tv, Award, Newspaper, Mic, Globe } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';

const publications = [
  {
    icon: BookOpen,
    title: "Is the Creation Meaningless?",
    year: "1995",
    description: "A seminal philosophical work exploring the purpose of existence from an Islamic perspective, translated into multiple languages.",
    link: "https://www.ptabdulrahman.com/books/is-the-creation-meaningless"
  },
  {
    icon: BookOpen,
    title: "Towards the Creator",
    year: "2000",
    description: "An insightful guide on spiritual journey and understanding the divine, offering profound reflections for contemporary readers.",
    link: "https://www.ptabdulrahman.com/books/towards-the-creator"
  },
  {
    icon: BookOpen,
    title: "The Address to Know How to Address",
    year: "2005",
    description: "A practical and philosophical treatise on effective communication and discourse, drawing from Islamic wisdom.",
    link: "https://www.ptabdulrahman.com/books/the-address-to-know-how-to-address"
  },
  {
    icon: Newspaper,
    title: "Khaleej Times Columnist",
    year: "Ongoing",
    description: "Regular contributions to a leading Middle Eastern newspaper, offering perspectives on current affairs, Islamic thought, and community issues.",
    link: "https://www.khaleejtimes.com/"
  },
];

const mediaAndRecognition = [
  {
    icon: Tv,
    title: "The Guidance – Dharma Reka (Asianet)",
    year: "2001-2003",
    description: "Creator and presenter of a groundbreaking Islamic television series, reaching millions and fostering spiritual understanding."
  },
  {
    icon: Mic,
    title: "Foreign Media Coordinator (DIHQA)",
    year: "2000s",
    description: "Managed international media relations for the prestigious Dubai International Holy Quran Award, enhancing its global outreach."
  },
  {
    icon: Award,
    title: "UAE Golden Visa for Social Contributions",
    year: "2020",
    description: "Awarded for significant and sustained contributions to the social and cultural fabric of the UAE."
  },
  {
    icon: Globe,
    title: "International Speaker & Delegate",
    year: "Ongoing",
    description: "Keynote speaker and delegate at numerous international conferences and forums on Islamic affairs, education, and humanitarian efforts."
  },
];

const ChapterThree: React.FC = () => {
  return (
    <ChapterContainer
      id="publications"
      title="Intellectual Contributions & Global Recognition"
      subtitle="A profound impact through scholarly works, influential media presence, and esteemed international accolades."
      variant="light"
    >
      {/* Publications Section */}
      <motion.div 
        className="max-w-6xl mx-auto mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-fluid-3xl font-heading font-bold text-primary-900 text-center mb-10`}>
          Authored Works & Scholarly Articles
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {publications.map((item, index) => (
            <motion.div
              key={item.title}
              className={`bg-white rounded-xl p-6 border border-primary-100 shadow-md hover:shadow-lg transition-all duration-300 group`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4`}>
                <item.icon size={22} className={`text-primary-700`} />
              </div>
              <h4 className={`text-fluid-lg font-semibold ${designTokens.typography.fontFamily.heading.join(",")} text-primary-900 mb-2`}>{item.title}</h4>
              <p className={`text-fluid-sm ${designTokens.typography.fontFamily.body.join(",")} text-primary-600 mb-3`}>{item.description}</p>
              <span className={`text-xs font-medium text-accent-600`}>{item.year}</span>
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={`block mt-4 text-accent-500 hover:text-accent-700 text-sm font-semibold transition-colors`}>
                  Read More &rarr;
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Media & Recognition Section */}
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={`text-fluid-3xl font-heading font-bold text-primary-900 text-center mb-10`}>
          Media Presence & Esteemed Accolades
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaAndRecognition.map((item, index) => (
            <motion.div
              key={item.title}
              className={`bg-white rounded-xl p-6 border border-primary-100 shadow-md hover:shadow-lg transition-all duration-300 group`}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4`}>
                <item.icon size={22} className={`text-primary-700`} />
              </div>
              <h4 className={`text-fluid-lg font-semibold ${designTokens.typography.fontFamily.heading.join(",")} text-primary-900 mb-2`}>{item.title}</h4>
              <p className={`text-fluid-sm ${designTokens.typography.fontFamily.body.join(",")} text-primary-600 mb-3`}>{item.description}</p>
              <span className={`text-xs font-medium text-accent-600`}>{item.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterThree;
