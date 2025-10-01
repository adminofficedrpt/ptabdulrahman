
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Heart, Handshake, Building, Users2 } from 'lucide-react';

const ChapterTwo: React.FC = () => {
  const activismInitiatives = [
    {
      icon: Heart,
      title: "Community Service",
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
      description: "Serving as President of Dubai Indian Islamic Centre, coordinating community initiatives"
    },
    {
      icon: Users2,
      title: "Advocacy Work",
      description: "Supporting expatriate welfare and representing community interests with government bodies"
    }
  ];

  return (
    <ChapterContainer
      id="bridge-builder"
      chapterNumber={2}
      title="Community Leader"
      subtitle="Serving expatriate communities through welfare programs and cultural initiatives"
      variant="light"
    >
      {/* Opening Statement */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          As President of the Dubai Indian Islamic Centre, P.T. Abdul Rahman has organized medical camps, 
          welfare schemes, and cultural programs serving the Indian expatriate community in the UAE. His work 
          focuses on community development, cultural preservation, and supporting those in need.
        </p>
      </motion.div>

      {/* Activism Initiatives Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {activismInitiatives.map((initiative, index) => (
          <motion.div
            key={initiative.title}
            className="bg-gradient-to-br from-white to-royal-50 rounded-xl p-8 border border-royal-100 hover:shadow-xl transition-all duration-300 group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <initiative.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-playfair font-semibold text-royal-900">
                  {initiative.title}
                </h3>
              </div>
            </div>
            
            <p className="text-royal-700 leading-relaxed">
              {initiative.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Social Impact Section */}
      <motion.div 
        className="bg-royal-900 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">30+</div>
            <div className="text-lg font-medium mb-2">Years of Service</div>
            <div className="text-white/80 text-sm">Community leadership in UAE</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">DIIC</div>
            <div className="text-lg font-medium mb-2">President</div>
            <div className="text-white/80 text-sm">Dubai Indian Islamic Centre</div>
          </div>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
