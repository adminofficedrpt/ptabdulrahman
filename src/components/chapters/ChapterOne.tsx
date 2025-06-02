
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Pen, BookOpen, Globe2, Tv, Award, Languages } from 'lucide-react';

const ChapterOne: React.FC = () => {
  const literaryJourney = [
    {
      icon: Pen,
      title: "Pioneering Publications",
      description: "Since 1995, Dr. Rahman has authored 15+ influential works, beginning with 'Is the Creation Meaningless?' - a philosophical masterpiece published in Malayalam, Arabic, and English by the Department of Islamic Affairs. His writings bridge cultures and inspire thoughtful discourse across linguistic boundaries.",
      achievement: "Multi-language philosophical impact"
    },
    {
      icon: Languages,
      title: "Multilingual Mastery",
      description: "Fluent in six languages - Arabic, English, Hindi, Urdu, Malayalam, and Tamil - Dr. Rahman serves as a cultural bridge, conducting Arabic classes for Indian diplomats and translating complex concepts across linguistic divides. This linguistic versatility amplifies his global reach and influence.",
      achievement: "Cross-cultural communication excellence"
    },
    {
      icon: Tv,
      title: "Television Innovation",
      description: "In 2001, Dr. Rahman created 'The Guidance - Dharma Reka,' the first program of its kind on Indian channel Asianet. This groundbreaking show promoted interfaith harmony among Islam, Christianity, and Hinduism, inspiring other Malayalam channels to adopt similar formats.",
      achievement: "Interfaith dialogue pioneer"
    },
    {
      icon: Globe2,
      title: "Global Media Presence",
      description: "His thought leadership extends through prestigious publications including Khaleej Times, Gulf News, Suprabhatam, and Al-Diya magazine. Each contribution reflects his commitment to education, social harmony, and community welfare, reaching diverse audiences worldwide.",
      achievement: "International thought leadership"
    }
  ];

  const publications = [
    { title: "Is the Creation Meaningless?", languages: "Malayalam, Arabic, English", year: "1995", impact: "Philosophical foundation work" },
    { title: "Towards the Creator", languages: "English, Malayalam", year: "Multiple editions", impact: "Spiritual guidance bestseller" },
    { title: "The Address to Know How to Address", languages: "Arabic learning guide", year: "Educational", impact: "Language learning revolution" },
    { title: "The Sun of Scholars", languages: "Arabic (404 pages)", year: "2015", impact: "Biographical masterpiece" }
  ];

  return (
    <ChapterContainer
      id="visionary"
      chapterNumber={1}
      title="Visionary Author & Media Pioneer"
      subtitle="Bridging cultures through words, inspiring minds across continents"
      variant="light"
    >
      {/* Enhanced Opening */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          Dr. Rahman's literary journey represents more than mere authorship—it embodies a vision of 
          connecting hearts and minds across cultural divides. With his M.A. in Sociology from University of Mysore 
          as his foundation, his 15+ published works and groundbreaking television programs have transformed 
          how communities engage with complex social and spiritual questions.
        </p>
      </motion.div>

      {/* Literary Journey Grid */}
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
                <h3 className="text-2xl font-playfair font-semibold text-royal-900 mb-2">
                  {chapter.title}
                </h3>
                <div className="inline-block bg-golden-100 text-golden-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {chapter.achievement}
                </div>
                <p className="text-royal-700 leading-relaxed">
                  {chapter.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Publications Showcase */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white mb-16"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          Published Works & Global Impact
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {publications.map((book, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold text-golden-300 mb-2">{book.title}</h4>
              <p className="text-white/80 text-sm mb-1">Languages: {book.languages}</p>
              <p className="text-white/60 text-xs mb-2">{book.year}</p>
              <p className="text-golden-200 text-sm font-medium">{book.impact}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">6</div>
            <div className="text-lg font-medium mb-2">Languages</div>
            <div className="text-white/80 text-sm">Fluently spoken & written</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">15+</div>
            <div className="text-lg font-medium mb-2">Published Works</div>
            <div className="text-white/80 text-sm">Books and influential articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">2001</div>
            <div className="text-lg font-medium mb-2">TV Innovation</div>
            <div className="text-white/80 text-sm">First interfaith program on Asianet</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "Through words, we build bridges. Through understanding, we create lasting change. 
          Every book, every article, every program is an opportunity to touch a life and inspire transformation."
        </blockquote>
        <cite className="block text-center text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center bg-gradient-to-br from-golden-50 to-royal-50 rounded-xl p-8"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-playfair font-semibold text-royal-900 mb-4">
          Explore His Literary Legacy
        </h4>
        <p className="text-royal-700 mb-6 max-w-2xl mx-auto">
          Discover the profound insights and transformative ideas that have shaped minds across cultures. 
          From philosophical treatises to practical guides, Dr. Rahman's works continue to inspire readers worldwide.
        </p>
        <motion.button
          className="bg-gradient-to-r from-royal-600 to-golden-600 text-white px-8 py-3 rounded-lg font-medium hover:from-royal-700 hover:to-golden-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover His Published Works
        </motion.button>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
