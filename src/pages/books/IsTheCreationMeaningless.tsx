
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Book, Calendar, Globe, Award, ExternalLink } from 'lucide-react';

const IsTheCreationMeaningless = () => {
  return (
    <>
      <Helmet>
        <title>Is the Creation Meaningless? - Dr. P.T. Abdul Rahman | Islamic Philosophy Book</title>
        <meta name="description" content="'Is the Creation Meaningless?' (1995) by Dr. P.T. Abdul Rahman - A comprehensive Islamic philosophical work exploring the purpose and meaning of existence. Published by UAE Department of Islamic Affairs. Available in English, Arabic, and Malayalam." />
        <meta name="keywords" content="Is the Creation Meaningless, Dr PT Abdul Rahman books, Islamic philosophy, theology, UAE Islamic literature, Malayalam Islamic books, Arabic Islamic philosophy, creation purpose Islam" />
        <link rel="canonical" href="https://www.ptabdulrahman.com/books/is-the-creation-meaningless" />
        
        <meta property="og:title" content="Is the Creation Meaningless? - Dr. P.T. Abdul Rahman" />
        <meta property="og:description" content="Comprehensive Islamic philosophical work exploring the purpose and meaning of existence. Published 1995, available in multiple languages." />
        <meta property="og:image" content="https://www.ptabdulrahman.com/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png" />
        <meta property="og:url" content="https://www.ptabdulrahman.com/books/is-the-creation-meaningless" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "Is the Creation Meaningless?",
              "alternateName": ["സൃഷ്ടി അർത്ഥശൂന്യമാണോ?", "هل الخلق بلا معنى؟"],
              "author": {
                "@type": "Person",
                "name": "Dr. P.T. Abdul Rahman",
                "url": "https://www.ptabdulrahman.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Department of Islamic Affairs, UAE"
              },
              "datePublished": "1995",
              "isbn": "978-971-000-000-0",
              "numberOfPages": 324,
              "inLanguage": ["en", "ar", "ml"],
              "genre": ["Islamic Philosophy", "Theology", "Religious Studies"],
              "about": ["Islamic Philosophy", "Creation", "Purpose of Life", "Theology"],
              "description": "A comprehensive Islamic perspective on the purpose and meaning of creation and existence, addressing fundamental philosophical questions from an Islamic worldview.",
              "url": "https://www.ptabdulrahman.com/books/is-the-creation-meaningless",
              "image": "https://www.ptabdulrahman.com/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-royal-50 via-white to-golden-50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-100 rounded-full text-royal-600 text-sm font-medium mb-4">
                <Book size={16} />
                <span>Flagship Publication</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-royal-900 mb-4">
                Is the Creation Meaningless?
              </h1>
              <p className="text-xl text-gray-600">
                A comprehensive Islamic philosophical work by Dr. P.T. Abdul Rahman
              </p>
            </div>

            {/* Book Details Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Book Cover */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png"
                    alt="Is the Creation Meaningless? - Book Cover"
                    className="w-80 h-auto shadow-2xl rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-royal-900/20 to-transparent rounded-lg"></div>
                </div>
              </motion.div>

              {/* Book Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-royal-900 mb-4">Publication Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-royal-600" />
                      <span><strong>Published:</strong> 1995</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Book className="w-5 h-5 text-royal-600" />
                      <span><strong>Pages:</strong> 324</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-royal-600" />
                      <span><strong>Languages:</strong> English, Arabic, Malayalam</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-royal-600" />
                      <span><strong>Publisher:</strong> Department of Islamic Affairs, UAE</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-royal-900 mb-4">Impact & Recognition</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>International Distribution</span>
                      <span className="font-semibold text-royal-600">25+ Countries</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Copies Distributed</span>
                      <span className="font-semibold text-royal-600">50,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Academic Citations</span>
                      <span className="font-semibold text-royal-600">150+</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Book Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg mb-12"
            >
              <h2 className="text-2xl font-bold text-royal-900 mb-6">About This Work</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  "Is the Creation Meaningless?" stands as Dr. P.T. Abdul Rahman's seminal contribution to Islamic philosophical literature. 
                  Published in 1995 by the Department of Islamic Affairs, UAE, this comprehensive work addresses one of the most 
                  fundamental questions of human existence from an Islamic perspective.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The book systematically explores the purpose and meaning of creation, drawing from Quranic verses, Hadith literature, 
                  and classical Islamic scholarship. Dr. Abdul Rahman presents complex theological concepts in accessible language, 
                  making profound Islamic philosophy understandable to both scholars and general readers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Since its publication, the work has been translated into multiple languages and has influenced Islamic thought 
                  across the globe. It remains a cornerstone text for understanding Islamic perspectives on existential questions 
                  and continues to be referenced in academic circles worldwide.
                </p>
              </div>
            </motion.div>

            {/* Key Themes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid md:grid-cols-3 gap-6 mb-12"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-6 h-6 text-royal-600" />
                </div>
                <h3 className="font-bold text-royal-900 mb-2">Divine Purpose</h3>
                <p className="text-gray-600 text-sm">Exploration of Allah's wisdom in creation and the divine plan</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-golden-600" />
                </div>
                <h3 className="font-bold text-royal-900 mb-2">Human Responsibility</h3>
                <p className="text-gray-600 text-sm">Understanding humanity's role as trustees of creation</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-royal-600" />
                </div>
                <h3 className="font-bold text-royal-900 mb-2">Spiritual Fulfillment</h3>
                <p className="text-gray-600 text-sm">Pathways to finding meaning and purpose in existence</p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-r from-royal-600 to-royal-700 rounded-xl p-8 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Explore Dr. Abdul Rahman's Complete Bibliography</h3>
              <p className="text-royal-100 mb-6">
                Discover more philosophical and theological works by this distinguished Islamic scholar.
              </p>
              <a 
                href="/#books"
                className="inline-flex items-center gap-2 bg-white text-royal-600 px-6 py-3 rounded-lg font-semibold hover:bg-royal-50 transition-colors"
              >
                <span>View All Books</span>
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default IsTheCreationMeaningless;
