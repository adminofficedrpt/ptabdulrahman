
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Pen, BookOpen, Globe2, Users } from 'lucide-react';

const ChapterOne: React.FC = () => {
  const literaryJourney = [
    {
      icon: Pen,
      title: "The Writer's Path",
      description: "By Allah's grace, my writing journey began with a simple desire to share knowledge and understanding. Each book has been a trust (amanah) to convey meaningful messages.",
      quote: "Every word I write is a prayer that it may benefit someone, somewhere"
    },
    {
      icon: BookOpen,
      title: "Books as Bridges",
      description: "Alhamdulillah, my 15+ books have reached readers across 8 languages. I never imagined these humble efforts would travel so far, but Allah's plans are always greater.",
      quote: "True knowledge should build bridges, not walls between communities"
    },
    {
      icon: Globe2,
      title: "Global Connections",
      description: "What humbles me most is hearing from readers worldwide who found comfort or guidance in these writings. SubhanAllah, how Allah connects hearts through words.",
      quote: "A book carries the author's heart to every reader who opens it"
    },
    {
      icon: Users,
      title: "Writing for Change",
      description: "My hope has always been that these writings might inspire positive action. If even one person is moved to help another, the effort is worthwhile, Insha'Allah.",
      quote: "The pen that serves humanity serves Allah"
    }
  ];

  return (
    <ChapterContainer
      id="visionary"
      chapterNumber={1}
      title="My Journey as a Writer"
      subtitle="Sharing thoughts and reflections through the written word, by Allah's grace"
      variant="light"
    >
      {/* Personal Opening */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          For over three decades, I have been blessed to share my thoughts through writing. 
          What started as personal reflections has, Alhamdulillah, grown into books that have 
          reached readers in many countries. This journey has taught me that words, when written 
          with sincere intention, can touch hearts we may never meet.
        </p>
      </motion.div>

      {/* Writing Journey Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {literaryJourney.map((chapter, index) => (
          <motion.div
            key={chapter.title}
            className="bg-white rounded-xl p-8 shadow-lg border border-royal-100 hover:shadow-xl transition-all duration-300 group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <chapter.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold text-royal-900 mb-4">
                  {chapter.title}
                </h3>
                <p className="text-royal-700 leading-relaxed mb-4">
                  {chapter.description}
                </p>
                <blockquote className="italic text-golden-700 font-medium">
                  "{chapter.quote}"
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Personal Reflection Section */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          A Humble Reflection on Writing
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">1995</div>
            <div className="text-lg font-medium mb-2">First Publication</div>
            <div className="text-white/80 text-sm">When Allah opened this door</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">15+</div>
            <div className="text-lg font-medium mb-2">Books Published</div>
            <div className="text-white/80 text-sm">Each one a trust and responsibility</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">8</div>
            <div className="text-lg font-medium mb-2">Languages</div>
            <div className="text-white/80 text-sm">Reaching hearts across cultures</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "I never write thinking I am teaching others. Rather, I write hoping that Allah will 
          use these words to benefit whoever needs them most."
        </blockquote>
        <cite className="block text-center text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
