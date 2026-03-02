import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Heart, Handshake, Building, Users2 } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';

const initiatives = [
  {
    icon: Heart,
    title: "Humanitarian Initiatives",
    description: "Leading and organizing critical medical camps, welfare programs, and support systems for expatriate communities in the UAE."
  },
  {
    icon: Handshake,
    title: "Interfaith & Cultural Harmony",
    description: "Promoting rich Kerala Muslim cultural heritage and fostering profound interfaith understanding through dialogue and engagement."
  },
  {
    icon: Building,
    title: "Institutional Leadership",
    description: "Serving as the esteemed President of the Dubai Indian Islamic Centre, orchestrating impactful community initiatives and development."
  },
  {
    icon: Users2,
    title: "Community Advocacy",
    description: "Vigorously advocating for expatriate welfare and effectively representing community interests with governmental and international bodies."
  }
];

const ChapterTwo: React.FC = () => {
  return (
    <ChapterContainer
      id="community"
      title="The Bridge Builder"
      subtitle="A legacy of fostering unity, welfare, and cultural understanding across diverse communities."
      variant="gradient"
    >
      {/* Opening */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className={`text-fluid-lg md:text-fluid-xl ${designTokens.typography.fontFamily.body.join(',')} text-primary-700 leading-relaxed`}>
          As the visionary President of the Dubai Indian Islamic Centre, Dr. P.T. Abdul Rahman has been instrumental in shaping community welfare and cultural integration. His tireless efforts have led to the successful organization of numerous medical camps, welfare schemes, and cultural programs, profoundly benefiting the Indian expatriate community in the UAE.
        </p>
      </motion.div>

      {/* Initiatives Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {initiatives.map((item, index) => (
          <motion.div
            key={item.title}
            className={`bg-neutral-50/70 backdrop-blur-sm rounded-xl p-8 border border-primary-100/50 shadow-md hover:shadow-lg transition-all duration-300 group`}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
            viewport={{ once: true }}
          >
            <div className={`w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
              <item.icon size={26} className={`text-neutral-50`} />
            </div>
            <h3 className={`text-fluid-xl font-heading font-semibold text-primary-900 mb-3`}>
              {item.title}
            </h3>
            <p className={`text-fluid-base ${designTokens.typography.fontFamily.body.join(',')} text-primary-600 leading-relaxed`}>{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div 
        className={`bg-primary-900 rounded-2xl p-8 md:p-12 text-center shadow-xl`}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className={`text-fluid-3xl font-bold ${designTokens.typography.fontFamily.heading.join(',')} text-accent-300 mb-2`}>30+</div>
            <div className={`text-neutral-50/90 font-medium ${designTokens.typography.fontFamily.body.join(',')} mb-1`}>Years of Dedicated Service</div>
            <div className={`text-neutral-50/60 text-fluid-sm ${designTokens.typography.fontFamily.body.join(',')} `}>Leadership in Community Welfare in UAE</div>
          </div>
          <div>
            <div className={`text-fluid-3xl font-bold ${designTokens.typography.fontFamily.heading.join(',')} text-accent-300 mb-2`}>DIIC</div>
            <div className={`text-neutral-50/90 font-medium ${designTokens.typography.fontFamily.body.join(',')} mb-1`}>President</div>
            <div className={`text-neutral-50/60 text-fluid-sm ${designTokens.typography.fontFamily.body.join(',')} `}>Dubai Indian Islamic Centre</div>
          </div>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
