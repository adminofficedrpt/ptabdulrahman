
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Heart, Handshake, Building, Users2 } from 'lucide-react';

const initiatives = [
  {
    icon: Heart,
    title: "Community Welfare",
    description: "Organizing medical camps and welfare programs for expatriate communities in the UAE"
  },
  {
    icon: Handshake,
    title: "Cultural Engagement",
    description: "Promoting Kerala Muslim cultural heritage and fostering interfaith understanding"
  },
  {
    icon: Building,
    title: "Institutional Leadership",
    description: "Serving as President of the Dubai Indian Islamic Centre, coordinating community initiatives"
  },
  {
    icon: Users2,
    title: "Advocacy",
    description: "Supporting expatriate welfare and representing community interests with government bodies"
  }
];

const ChapterTwo: React.FC = () => {
  return (
    <ChapterContainer
      id="community"
      title="Community"
      subtitle="Serving expatriate communities through welfare programs and cultural initiatives"
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
        <p className="text-lg md:text-xl text-royal-700 leading-relaxed">
          As President of the Dubai Indian Islamic Centre, P.T. Abdul Rahman has organized medical camps, 
          welfare schemes, and cultural programs serving the Indian expatriate community in the UAE.
        </p>
      </motion.div>

      {/* Initiatives Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {initiatives.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-royal-100/50 hover:shadow-lg transition-all duration-300 group"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-royal-500 to-golden-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
              <item.icon size={26} className="text-white" />
            </div>
            <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-3">
              {item.title}
            </h3>
            <p className="text-royal-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <motion.div 
        className="bg-royal-900 rounded-2xl p-8 md:p-12 text-center"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-3xl font-bold text-golden-300 mb-2">30+</div>
            <div className="text-white/90 font-medium mb-1">Years of Service</div>
            <div className="text-white/60 text-sm">Community leadership in UAE</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-golden-300 mb-2">DIIC</div>
            <div className="text-white/90 font-medium mb-1">President</div>
            <div className="text-white/60 text-sm">Dubai Indian Islamic Centre</div>
          </div>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
