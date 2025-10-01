
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Pen, BookOpen, Globe2, Users } from 'lucide-react';

const ChapterOne: React.FC = () => {
  const literaryPillars = [
    {
      icon: Pen,
      title: "Literary Work",
      description: "Authoring books that explore Islamic philosophy, social issues, and the intersection of faith and modern life"
    },
    {
      icon: BookOpen,
      title: "Philosophical Inquiry",
      description: "Examining fundamental questions about creation, purpose, and human existence from an Islamic perspective"
    },
    {
      icon: Globe2,
      title: "Cultural Engagement",
      description: "Writing in multiple languages to reach diverse communities across the Gulf region and South Asia"
    },
    {
      icon: Users,
      title: "Educational Focus",
      description: "Publishing works that support religious education and promote thoughtful discourse on contemporary issues"
    }
  ];

  return (
    <ChapterContainer
      id="visionary"
      chapterNumber={1}
      title="The Author"
      subtitle="Writing on Islamic philosophy, education, and social issues"
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
          P.T. Abdul Rahman has authored books on Islamic philosophy, education, and contemporary social issues. 
          His works include writings in Malayalam, Arabic, and English, addressing topics ranging from religious 
          education to community development.
        </p>
      </motion.div>

      {/* Literary Pillars Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {literaryPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="bg-white rounded-xl p-8 shadow-lg border border-royal-100 hover:shadow-xl transition-all duration-300 group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <pillar.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold text-royal-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-royal-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Literary Achievement Section */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          Published Works
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">30+</div>
            <div className="text-lg font-medium mb-2">Years Writing</div>
            <div className="text-white/80 text-sm">Decades of literary contribution</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">Multiple</div>
            <div className="text-lg font-medium mb-2">Languages</div>
            <div className="text-white/80 text-sm">Malayalam, Arabic, English</div>
          </div>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
