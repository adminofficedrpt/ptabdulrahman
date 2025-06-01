
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Pen, BookOpen, Globe2, Users } from 'lucide-react';

const ChapterOne: React.FC = () => {
  const literaryPillars = [
    {
      icon: Pen,
      title: "Literary Excellence",
      description: "Crafting transformative narratives that bridge cultural divides and inspire social consciousness across global audiences",
      quote: "Words have the power to heal divisions and build understanding between communities"
    },
    {
      icon: BookOpen,
      title: "Intellectual Authority",
      description: "Establishing thought leadership through compelling works that challenge conventional thinking and propose innovative solutions",
      quote: "True wisdom lies not in knowing all the answers, but in asking the right questions"
    },
    {
      icon: Globe2,
      title: "Global Impact",
      description: "Reaching millions of readers worldwide through translated works that resonate across cultures and generations",
      quote: "Literature transcends borders; it speaks the universal language of human experience"
    },
    {
      icon: Users,
      title: "Social Influence",
      description: "Inspiring positive change through written works that advocate for justice, equality, and human dignity",
      quote: "The pen that writes for justice is mightier than any sword raised in anger"
    }
  ];

  return (
    <ChapterContainer
      id="visionary"
      chapterNumber={1}
      title="The Literary Pioneer"
      subtitle="A transformative author whose words inspire social change and bridge cultural understanding"
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
          Dr. P.T. Abdul Rahman's literary journey spans over three decades, producing influential works 
          that have shaped discourse on social justice, education, and human rights. His books, translated 
          into eight languages, continue to inspire readers and activists worldwide.
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

      {/* Literary Achievement Section */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          Literary Legacy & Impact
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">1995</div>
            <div className="text-lg font-medium mb-2">First Publication</div>
            <div className="text-white/80 text-sm">"Is the Creation Meaningless?" launched</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">8</div>
            <div className="text-lg font-medium mb-2">Languages</div>
            <div className="text-white/80 text-sm">Global literary reach</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">2M+</div>
            <div className="text-lg font-medium mb-2">Readers Worldwide</div>
            <div className="text-white/80 text-sm">Lives touched through literature</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "A true author doesn't just write books—they write the future, one transformative idea at a time."
        </blockquote>
        <cite className="block text-center text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
