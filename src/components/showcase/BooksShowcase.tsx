import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BooksShowcase = () => {
  const [selectedBook, setSelectedBook] = useState(0);

  const books = [
    {
      id: 1,
      title: "Is the Creation Meaningless?",
      arabicTitle: "هل الخلق بلا معنى؟",
      malayalamTitle: "സൃഷ്ടി അർഥരഹിതമാണോ?",
      languages: ["English", "Arabic", "Malayalam"],
      year: "1995",
      description: "A profound philosophical exploration examining the divine purpose behind creation from an Islamic perspective.",
      impact: "Translated into multiple languages, this work has influenced Islamic philosophical discourse globally.",
      cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
      featured: true
    },
    {
      id: 2,
      title: "Towards the Creator",
      malayalamTitle: "സൃഷ്ടാവിലേക്ക്",
      languages: ["English", "Malayalam"],
      description: "A spiritual journey exploring the path towards divine understanding and connection.",
      cover: "/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png"
    },
    {
      id: 3,
      title: "The Address to Know How to Address",
      languages: ["English"],
      description: "A comprehensive guide to effective communication and interaction in various contexts.",
      cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png"
    }
  ];

  return (
    <section id="books" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-800 mb-6 font-playfair">
            Literary Contributions
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. P.T. Abdul Rahman has authored influential works in multiple languages, 
            contributing to Islamic scholarship and interfaith understanding worldwide.
          </p>
        </motion.div>

        {/* Featured Book */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Book Cover */}
              <div className="relative bg-gradient-to-br from-royal-100 to-golden-50 p-8 flex items-center justify-center">
                <div className="relative">
                  <img 
                    src={books[0].cover}
                    alt={books[0].title}
                    className="h-80 w-auto object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-golden-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Flagship Work
                  </div>
                </div>
              </div>

              {/* Book Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {books[0].languages.map((lang) => (
                    <span 
                      key={lang}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-800"
                    >
                      <Globe className="mr-1 h-3 w-3" />
                      {lang}
                    </span>
                  ))}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-golden-100 text-golden-800">
                    {books[0].year}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-royal-800 mb-2 font-playfair">
                  {books[0].title}
                </h3>
                
                {books[0].arabicTitle && (
                  <p className="text-xl text-royal-600 mb-2 font-arabic">{books[0].arabicTitle}</p>
                )}
                
                {books[0].malayalamTitle && (
                  <p className="text-xl text-royal-600 mb-6">{books[0].malayalamTitle}</p>
                )}

                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                  {books[0].description}
                </p>

                <p className="text-gray-600 mb-8 italic">
                  {books[0].impact}
                </p>

                <div className="flex gap-4">
                  <Button className="bg-royal-700 hover:bg-royal-800 text-white">
                    <BookOpen className="mr-2 h-4 w-4" />
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

        {/* Other Books Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-royal-800 text-center mb-12 font-playfair">
            Complete Bibliography
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.slice(1).map((book, index) => (
              <motion.div 
                key={book.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
                  </div>
                  
                  <h4 className="text-lg font-semibold text-royal-800 mb-2 font-playfair">
                    {book.title}
                  </h4>
                  
                  {book.malayalamTitle && (
                    <p className="text-sm text-royal-600 mb-3">{book.malayalamTitle}</p>
                  )}
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Interested in Dr. Rahman's complete works and philosophical insights?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-golden-500 to-golden-600 text-white">
            Explore Complete Library
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BooksShowcase;
