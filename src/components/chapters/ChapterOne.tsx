
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Eye, Lightbulb, Target, Compass } from 'lucide-react';

const ChapterOne: React.FC = () => {
  const visionPillars = [
    {
      icon: Eye,
      title: "Clear Vision",
      description: "Seeing beyond the present to envision a future where Islamic education bridges tradition and modernity",
      quote: "Education is the foundation upon which we build our tomorrow"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering new methodologies that honor Islamic principles while embracing educational excellence",
      quote: "In every challenge lies an opportunity for growth and innovation"
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      description: "Every initiative stems from a deep commitment to serving humanity through knowledge and compassion",
      quote: "Purpose without action is merely intention; action without purpose is mere motion"
    },
    {
      icon: Compass,
      title: "Guidance",
      description: "Providing moral and intellectual direction for future generations of Muslim leaders",
      quote: "True leadership is not about commanding followers, but about creating more leaders"
    }
  ];

  return (
    <ChapterContainer
      id="visionary"
      chapterNumber={1}
      title="The Visionary"
      subtitle="A forward-thinking leader who sees possibilities where others see obstacles"
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
          Dr. P.T. Abdul Rahman's visionary approach to Islamic education has transformed 
          countless lives across the globe. His ability to see beyond traditional boundaries 
          while honoring Islamic principles has created a new paradigm for educational excellence.
        </p>
      </motion.div>

      {/* Vision Pillars Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {visionPillars.map((pillar, index) => (
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
                <p className="text-royal-700 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <blockquote className="italic text-golden-700 font-medium">
                  "{pillar.quote}"
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Core Philosophy Section */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          The Visionary Philosophy
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">1995</div>
            <div className="text-lg font-medium mb-2">Vision Born</div>
            <div className="text-white/80 text-sm">DQAA Academy founded</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">25+</div>
            <div className="text-lg font-medium mb-2">Countries Reached</div>
            <div className="text-white/80 text-sm">Global educational impact</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">50K+</div>
            <div className="text-lg font-medium mb-2">Lives Transformed</div>
            <div className="text-white/80 text-sm">Through education and service</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "A true visionary doesn't just see what is possible—they make the impossible inevitable through unwavering dedication and divine guidance."
        </blockquote>
        <cite className="block text-center text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
