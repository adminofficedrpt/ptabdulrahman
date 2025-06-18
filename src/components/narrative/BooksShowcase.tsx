
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Globe, Award, Users, ExternalLink } from 'lucide-react';

const BooksShowcase = () => {
  const [selectedBook, setSelectedBook] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const featuredBooks = [
    {
      title: "Is the Creation Meaningless?",
      subtitle: "A Philosophical Inquiry into Purpose and Divine Design",
      year: "1995",
      languages: ["Malayalam", "English", "Arabic"],
      cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
      description: "Dr. Rahman's landmark philosophical work explores the fundamental questions of existence, purpose, and divine wisdom. This groundbreaking book has been translated into multiple languages and continues to influence Islamic philosophical discourse worldwide.",
      impact: "Global reach across 3 languages, foundational text in Islamic philosophy",
      themes: ["Divine Purpose", "Existential Philosophy", "Islamic Theology"],
      criticalReview: "A masterful blend of classical Islamic scholarship and contemporary philosophical inquiry.",
      readingExcerpt: "The question is not whether creation has meaning, but whether we have the wisdom to perceive the meaning that has always been there..."
    },
    {
      title: "Towards the Creator",
      subtitle: "A Journey of Spiritual Awakening",
      year: "1998",
      languages: ["Malayalam", "Arabic"],
      cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
      description: "A deeply personal yet universally resonant exploration of the spiritual journey toward divine connection. This work combines mystical insights with practical guidance for contemporary Muslims.",
      impact: "Widely studied in Islamic study circles across the Middle East and South Asia",
      themes: ["Spiritual Development", "Mysticism", "Divine Connection"],
      criticalReview: "An eloquent guide that bridges the mystical and the practical in Islamic spirituality.",
      readingExcerpt: "The path to the Creator is not found in the distance we travel, but in the depth of our surrender..."
    },
    {
      title: "The Sun of Scholars",
      subtitle: "Illuminating the Path of Knowledge",
      year: "2001",
      languages: ["Malayalam", "English"],
      cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
      description: "An examination of the role of Islamic scholarship in the modern world, highlighting the responsibilities and opportunities of contemporary Muslim intellectuals.",
      impact: "Required reading in several Islamic universities and seminaries",
      themes: ["Islamic Scholarship", "Modern Challenges", "Intellectual Responsibility"],
      criticalReview: "A clarion call for Islamic scholarship to engage meaningfully with contemporary challenges.",
      readingExcerpt: "The scholar's duty is not merely to preserve knowledge, but to illuminate its relevance for each generation..."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-royal-50">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-royal-900 mb-6">
            Literary Legacy
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Over 15 published works spanning philosophy, spirituality, and Islamic scholarship, 
            translated into multiple languages and studied across continents.
          </p>
        </motion.div>

        {/* Books Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {featuredBooks.map((book, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedBook(index)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                selectedBook === index
                  ? 'bg-royal-900 text-white border-royal-900'
                  : 'bg-white text-royal-800 border-gray-200 hover:border-royal-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-medium text-sm">{book.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Book Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBook}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Book Cover & Details */}
              <div className="space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-golden-200 to-royal-200 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white rounded-xl p-8 shadow-xl">
                    <img 
                      src={featuredBooks[selectedBook].cover}
                      alt={featuredBooks[selectedBook].title}
                      className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto mb-6"
                    />
                    
                    {/* Book Metadata */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Globe className="w-4 h-4 mr-1" />
                          {featuredBooks[selectedBook].languages.join(", ")}
                        </span>
                        <span>•</span>
                        <span>{featuredBooks[selectedBook].year}</span>
                      </div>
                      
                      <div className="flex flex-wrap justify-center gap-2">
                        {featuredBooks[selectedBook].themes.map((theme, idx) => (
                          <span key={idx} className="px-3 py-1 bg-royal-100 text-royal-800 rounded-full text-xs font-medium">
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="bg-gradient-to-br from-golden-50 to-royal-50 rounded-xl p-6">
                  <h4 className="font-semibold text-royal-800 mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Global Impact
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {featuredBooks[selectedBook].impact}
                  </p>
                </div>
              </div>

              {/* Content Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-playfair font-medium text-royal-900 mb-2">
                    {featuredBooks[selectedBook].title}
                  </h3>
                  <p className="text-xl text-golden-600 font-light mb-6">
                    {featuredBooks[selectedBook].subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {featuredBooks[selectedBook].description}
                  </p>
                </div>

                {/* Reading Excerpt */}
                <div className="bg-white rounded-xl p-6 border-l-4 border-golden-500 shadow-lg">
                  <h4 className="font-semibold text-royal-800 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Excerpt
                  </h4>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{featuredBooks[selectedBook].readingExcerpt}"
                  </blockquote>
                </div>

                {/* Critical Review */}
                <div className="bg-royal-50 rounded-xl p-6">
                  <h4 className="font-semibold text-royal-800 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Critical Reception
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {featuredBooks[selectedBook].criticalReview}
                  </p>
                </div>

                {/* Call to Action */}
                <motion.button
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-royal-800 to-royal-900 text-white rounded-lg hover:from-royal-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Read Full Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default BooksShowcase;
