
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Heart, Handshake, Building, Users2 } from 'lucide-react';

const ChapterTwo: React.FC = () => {
  const bridgeInitiatives = [
    {
      icon: Heart,
      title: "Humanitarian Outreach",
      description: "Organizing relief efforts and community support programs across the UAE and internationally",
      impact: "50,000+ lives touched"
    },
    {
      icon: Handshake,
      title: "Interfaith Dialogue",
      description: "Facilitating meaningful conversations between different religious communities",
      impact: "100+ dialogue sessions"
    },
    {
      icon: Building,
      title: "Community Centers",
      description: "Establishing centers that serve as hubs for education, worship, and cultural exchange",
      impact: "15+ centers established"
    },
    {
      icon: Users2,
      title: "Youth Empowerment",
      description: "Mentoring young leaders to become agents of positive change in their communities",
      impact: "5,000+ youth mentored"
    }
  ];

  return (
    <ChapterContainer
      id="bridge-builder"
      chapterNumber={2}
      title="The Bridge Builder"
      subtitle="Connecting communities, cultures, and hearts through compassionate action and understanding"
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
          Dr. P.T. Abdul Rahman has spent decades building bridges—between traditions and modernity, 
          between different faith communities, and between humanitarian ideals and practical action. 
          His work demonstrates that true Islamic values are expressed through service to all humanity.
        </p>
      </motion.div>

      {/* Bridge Initiatives Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {bridgeInitiatives.map((initiative, index) => (
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
                <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-2">
                  {initiative.title}
                </h3>
                <div className="inline-block bg-golden-100 text-golden-700 text-sm font-medium px-3 py-1 rounded-full">
                  {initiative.impact}
                </div>
              </div>
            </div>
            
            <p className="text-royal-700 leading-relaxed">
              {initiative.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Cultural Impact Section */}
      <motion.div 
        className="bg-royal-900 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">30+</div>
            <div className="text-lg font-medium mb-2">Years of Service</div>
            <div className="text-white/80 text-sm">Dedicated to community building</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">100K+</div>
            <div className="text-lg font-medium mb-2">Lives Impacted</div>
            <div className="text-white/80 text-sm">Through educational and humanitarian work</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">25+</div>
            <div className="text-lg font-medium mb-2">Countries Reached</div>
            <div className="text-white/80 text-sm">Global humanitarian initiatives</div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <blockquote className="text-xl italic text-white/90 mb-4">
            "In serving others, we find the true essence of our faith. In building bridges, we discover our shared humanity."
          </blockquote>
          <cite className="text-golden-300">Dr. P.T. Abdul Rahman</cite>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
