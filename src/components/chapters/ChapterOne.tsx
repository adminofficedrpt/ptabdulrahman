
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Sparkles, Book, Users, Globe } from 'lucide-react';

const ChapterOne: React.FC = () => {
  const visionPoints = [
    {
      icon: Book,
      title: "Scholar of Faith",
      description: "Bridging classical Islamic scholarship with contemporary educational needs"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Fostering interfaith dialogue and cultural understanding across communities"
    },
    {
      icon: Globe,
      title: "Global Educator",
      description: "Empowering students worldwide through transformative Islamic education"
    },
    {
      icon: Sparkles,
      title: "Visionary Leader",
      description: "Pioneering innovative approaches to traditional Islamic learning"
    }
  ];

  return (
    <ChapterContainer
      id="visionary"
      chapterNumber={1}
      title="The Visionary"
      subtitle="A life dedicated to illuminating minds and nurturing souls through authentic Islamic education"
      variant="gradient"
    >
      {/* Core Philosophy */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <blockquote className="text-2xl md:text-3xl font-light italic text-royal-800 leading-relaxed mb-8">
          "True education is not merely the transmission of knowledge, but the awakening of the soul to its divine purpose and potential."
        </blockquote>
        <cite className="text-golden-600 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>

      {/* Vision Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {visionPoints.map((point, index) => (
          <motion.div
            key={point.title}
            className="text-center group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <point.icon size={32} className="text-white" />
              </div>
              
              {/* Decorative Pattern */}
              <div className="absolute -top-2 -left-2 w-24 h-24 border border-golden-300/30 rounded-full animate-pulse" />
            </div>
            
            <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-4">
              {point.title}
            </h3>
            <p className="text-royal-700 leading-relaxed">
              {point.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Personal Philosophy Section */}
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-golden-200/50">
          <h3 className="text-3xl font-playfair font-bold text-royal-900 mb-8 text-center">
            A Philosophy of Transformation
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-royal-800 mb-4">Educational Vision</h4>
              <p className="text-royal-700 leading-relaxed mb-6">
                Dr. P.T. Abdul Rahman believes that authentic Islamic education must harmonize traditional scholarship with contemporary relevance. His approach emphasizes critical thinking, spiritual development, and practical application of Islamic principles in modern life.
              </p>
              <p className="text-royal-700 leading-relaxed">
                Through the Darul Quran Abdulla Academy (DQAA), he has pioneered an educational model that preserves the richness of Islamic tradition while preparing students for leadership in the 21st century.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-royal-800 mb-4">Global Impact</h4>
              <p className="text-royal-700 leading-relaxed mb-6">
                His work transcends geographical boundaries, fostering interfaith dialogue and cultural understanding. Dr. P.T.'s humanitarian initiatives have touched countless lives across continents, embodying the universal message of compassion inherent in Islamic teachings.
              </p>
              <p className="text-royal-700 leading-relaxed">
                From Kerala to the UAE and beyond, his influence continues to shape a new generation of Islamic scholars and community leaders committed to positive social change.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
