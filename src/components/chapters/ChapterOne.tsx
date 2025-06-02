
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Pen, BookOpen, Globe2, Users, Award, Languages } from 'lucide-react';

const ChapterOne: React.FC = () => {
  const literaryJourney = [
    {
      icon: Pen,
      title: "First Major Publication",
      description: "In 1995, I published 'Is the Creation Meaningless?' - a philosophical work that would reach readers in Malayalam, Arabic, and English through the Department of Islamic Affairs. SubhanAllah, this book opened doors I never imagined.",
      achievement: "Multi-language philosophical work"
    },
    {
      icon: Languages,
      title: "Multilingual Scholarship",
      description: "By Allah's blessing, I write and translate in six languages: Arabic, English, Hindi, Urdu, Malayalam, and Tamil. This has allowed me to serve as Arabic-English translator and conduct classes for Indian diplomats in Dubai.",
      achievement: "Cross-cultural communication bridge"
    },
    {
      icon: BookOpen,
      title: "Diverse Literary Contributions",
      description: "From 'The Address to Know How to Address' (Arabic learning guide) to 'The Sun of Scholars' (404-page biography in Arabic), each book serves a purpose. I've also contributed to Khaleej Times, Suprabhatam, and Al-Diya magazine.",
      achievement: "Academic and popular publications"
    },
    {
      icon: Globe2,
      title: "Television & Media Pioneer",
      description: "I had the honor of creating the first Islamic TV program on Indian channel Asianet (2001-2003), titled 'The Guidance - Dharma Reka.' It promoted peace among Islam, Christianity, and Hinduism - inspiring other Malayalam channels to follow.",
      achievement: "Interfaith dialogue pioneer"
    }
  ];

  const publications = [
    { title: "Is the Creation Meaningless?", languages: "Malayalam, Arabic, English", year: "1995" },
    { title: "Towards the Creator", languages: "English, Malayalam", year: "Multiple editions" },
    { title: "The Address to Know How to Address", languages: "Arabic learning guide", year: "Educational" },
    { title: "The Sun of Scholars", languages: "Arabic (404 pages)", year: "2015" }
  ];

  return (
    <ChapterContainer
      id="visionary"
      chapterNumber={1}
      title="My Literary & Media Journey"
      subtitle="Sharing knowledge across languages and cultures, by Allah's guidance"
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
          My writing journey began with a desire to share the wisdom I've gained through my studies, 
          including my M.A. in Sociology from University of Mysore. What started as personal reflections 
          has, Alhamdulillah, grown into books published in multiple languages and media programs 
          that reached audiences across cultures and faiths.
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
          Published Works & Contributions
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {publications.map((book, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-semibold text-golden-300 mb-2">{book.title}</h4>
              <p className="text-white/80 text-sm mb-1">Languages: {book.languages}</p>
              <p className="text-white/60 text-xs">{book.year}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">6</div>
            <div className="text-lg font-medium mb-2">Languages</div>
            <div className="text-white/80 text-sm">Written & spoken fluently</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">15+</div>
            <div className="text-lg font-medium mb-2">Published Works</div>
            <div className="text-white/80 text-sm">Books and articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">2001</div>
            <div className="text-lg font-medium mb-2">TV Pioneer</div>
            <div className="text-white/80 text-sm">First Islamic program on Asianet</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "Every word I write is a prayer that it may benefit someone, somewhere. 
          Knowledge is a trust from Allah, and we must share it responsibly."
        </blockquote>
        <cite className="block text-center text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>

      {/* Media Contributions */}
      <motion.div 
        className="text-center bg-gradient-to-br from-golden-50 to-royal-50 rounded-xl p-8"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-playfair font-semibold text-royal-900 mb-4">
          Media Publications & Recognition
        </h4>
        <p className="text-royal-700 mb-6 max-w-2xl mx-auto">
          My articles have appeared in prestigious publications including Khaleej Times, 
          Gulf News, Al-Diya (Department of Islamic Affairs), and various Indian magazines. 
          Each contribution aims to promote understanding, education, and community welfare.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-royal-600">
          <span className="bg-white px-3 py-1 rounded-full">Khaleej Times</span>
          <span className="bg-white px-3 py-1 rounded-full">Gulf News</span>
          <span className="bg-white px-3 py-1 rounded-full">Al-Diya Magazine</span>
          <span className="bg-white px-3 py-1 rounded-full">Suprabhatam</span>
          <span className="bg-white px-3 py-1 rounded-full">Various Indian Publications</span>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterOne;
