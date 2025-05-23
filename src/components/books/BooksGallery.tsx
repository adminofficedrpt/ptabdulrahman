
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Globe, Download, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BooksGallery = () => {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  const books = [
    {
      id: 1,
      title: "Is the Creation Meaningless?",
      arabicTitle: "هل الخلق بلا معنى؟",
      malayalamTitle: "സൃഷ്ടി അർഥരഹിതമാണോ?",
      year: "1995",
      languages: ["English", "Arabic", "Malayalam"],
      pages: 256,
      publisher: "Islamic Publications",
      isbn: "978-9971-40-123-4",
      description: "A profound philosophical exploration examining the divine purpose behind creation from an Islamic perspective. This seminal work delves into the fundamental questions of existence, purpose, and meaning through the lens of Islamic theology and philosophy.",
      longDescription: "Dr. P.T. Abdul Rahman's flagship work represents a comprehensive examination of one of humanity's most fundamental questions: Does creation have inherent meaning and purpose? Drawing from classical Islamic sources, contemporary philosophical thought, and practical wisdom gained through decades of scholarship, this book provides readers with a nuanced understanding of Islamic cosmology and theodicy. The work has been praised by scholars across the Islamic world for its accessibility, depth, and relevance to modern philosophical discourse.",
      impact: "Translated into multiple languages and studied in Islamic universities worldwide, this work has become a cornerstone text for understanding Islamic philosophical thought in the contemporary era.",
      cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
      awards: ["Islamic Book Award 1996", "Philosophical Excellence Recognition"],
      featured: true
    },
    {
      id: 2,
      title: "Towards the Creator",
      malayalamTitle: "സൃഷ്ടാവിലേക്ക്",
      year: "2005",
      languages: ["English", "Malayalam"],
      pages: 180,
      publisher: "Darul Quran Publications",
      description: "A spiritual journey exploring the path towards divine understanding and connection through Islamic teachings and personal reflection.",
      longDescription: "This contemplative work guides readers through the spiritual dimensions of Islamic faith, offering practical insights for developing a deeper relationship with the Divine. Through a combination of theological exposition and personal reflection, Dr. Rahman provides a roadmap for spiritual growth rooted in Islamic tradition yet relevant to contemporary seekers.",
      cover: "/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png"
    },
    {
      id: 3,
      title: "The Address to Know How to Address",
      year: "2010",
      languages: ["English"],
      pages: 142,
      publisher: "Educational Excellence Press",
      description: "A comprehensive guide to effective communication and interaction in various contexts, drawing from Islamic principles of discourse.",
      longDescription: "This practical guide explores the art of communication from an Islamic perspective, covering everything from interpersonal dialogue to public speaking. Dr. Rahman draws on classical Islamic sources and modern communication theory to provide readers with tools for effective, ethical communication.",
      cover: "/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png"
    },
    {
      id: 4,
      title: "Education in the Modern Islamic Context",
      malayalamTitle: "ആധുനിക ഇസ്ലാമിക പശ്ചാത്തലത്തിൽ വിദ്യാഭ്യാസം",
      year: "2018",
      languages: ["English", "Malayalam"],
      pages: 220,
      publisher: "DQAA Publications",
      description: "An examination of Islamic educational philosophy and its application in contemporary educational institutions.",
      longDescription: "Based on his experience founding and leading Darul Quran Abdulla Academy, Dr. Rahman presents a comprehensive framework for integrating Islamic values with modern educational excellence. This work serves as both theoretical foundation and practical guide for educators seeking to implement holistic Islamic education.",
      cover: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png"
    }
  ];

  return (
    <section id="books" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-800 mb-6 font-playfair">
            Published Works & Contributions
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Literary works that have influenced Islamic scholarship and interfaith understanding across the globe
          </p>
        </motion.div>

        {/* Featured Book */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-royal-50 to-golden-50 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-golden-400/20 to-royal-400/20 rounded-2xl blur-xl"></div>
                <img 
                  src={books[0].cover}
                  alt={books[0].title}
                  className="relative w-full max-w-sm mx-auto h-auto object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-golden-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Flagship Work
                </div>
              </motion.div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {books[0].languages.map((lang) => (
                    <span 
                      key={lang}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-royal-100 text-royal-800"
                    >
                      <Globe className="mr-1 h-3 w-3" />
                      {lang}
                    </span>
                  ))}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-golden-100 text-golden-800">
                    <Calendar className="mr-1 h-3 w-3" />
                    {books[0].year}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-royal-800 mb-2 font-playfair">
                  {books[0].title}
                </h3>
                
                <p className="text-xl text-royal-600 mb-2">{books[0].arabicTitle}</p>
                <p className="text-xl text-royal-600 mb-6">{books[0].malayalamTitle}</p>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {books[0].description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-600">
                  <div>
                    <strong>Pages:</strong> {books[0].pages}
                  </div>
                  <div>
                    <strong>Publisher:</strong> {books[0].publisher}
                  </div>
                  <div>
                    <strong>ISBN:</strong> {books[0].isbn}
                  </div>
                  <div>
                    <strong>Languages:</strong> {books[0].languages.length}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-royal-700 hover:bg-royal-800 text-white">
                    <Book className="mr-2 h-4 w-4" />
                    Read More
                  </Button>
                  <Button variant="outline" className="border-golden-500 text-golden-700 hover:bg-golden-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Find Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.slice(1).map((book, index) => (
            <motion.div 
              key={book.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedBook(selectedBook === book.id ? null : book.id)}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-royal-50 to-golden-50 p-6 flex items-center justify-center">
                <img 
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-auto object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-1 mb-3">
                  {book.languages.map((lang) => (
                    <span 
                      key={lang}
                      className="text-xs px-2 py-1 bg-royal-100 text-royal-700 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                  <span className="text-xs px-2 py-1 bg-golden-100 text-golden-700 rounded-full">
                    {book.year}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-royal-800 mb-2 font-playfair">
                  {book.title}
                </h4>
                
                {book.malayalamTitle && (
                  <p className="text-sm text-royal-600 mb-3">{book.malayalamTitle}</p>
                )}
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {book.description}
                </p>

                {selectedBook === book.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 pt-4"
                  >
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {book.longDescription}
                    </p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div><strong>Pages:</strong> {book.pages}</div>
                      <div><strong>Publisher:</strong> {book.publisher}</div>
                    </div>
                  </motion.div>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-royal-600 hover:text-royal-800"
                >
                  {selectedBook === book.id ? 'Show Less' : 'Learn More'}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publication Stats */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-royal-50 to-golden-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-royal-800 mb-2">4+</div>
              <div className="text-gray-600">Books Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-royal-800 mb-2">5+</div>
              <div className="text-gray-600">Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-royal-800 mb-2">25+</div>
              <div className="text-gray-600">Years of Writing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-royal-800 mb-2">Global</div>
              <div className="text-gray-600">Reach & Impact</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BooksGallery;
