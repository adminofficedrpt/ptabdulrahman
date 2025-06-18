
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ExternalLink, Download, Star, Quote } from 'lucide-react';

const AdvancedBooksShowcase = () => {
  const [selectedBook, setSelectedBook] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const books = [
    {
      id: 1,
      title: "Is the Creation Meaningless?",
      subtitle: "Exploring Divine Purpose in Modern Context",
      description: "A profound exploration of existence, purpose, and divine wisdom in contemporary Islamic thought. This seminal work bridges classical theology with modern philosophical inquiry.",
      language: "English",
      pages: 284,
      year: 2019,
      category: "Philosophy & Theology",
      image: "/lovable-uploads/17b9319a-ac20-4df2-b3d8-1b600b003036.png",
      excerpt: "The question of meaning in creation has occupied human minds since the dawn of consciousness. In our rapidly evolving world, this ancient inquiry takes on new dimensions...",
      reviews: [
        {
          author: "Dr. Ahmad Hassan",
          institution: "Al-Azhar University",
          quote: "A masterful synthesis of traditional Islamic thought and contemporary philosophical discourse."
        },
        {
          author: "Prof. Sarah Mitchell",
          institution: "Oxford University",
          quote: "Rahman's work offers fresh perspectives on eternal questions, bridging East and West with remarkable insight."
        }
      ],
      impact: "25,000+ copies distributed globally, translated into 4 languages"
    },
    {
      id: 2,
      title: "Principles of Islamic Jurisprudence",
      subtitle: "Contemporary Applications of Classical Methodology",
      description: "A comprehensive examination of Islamic legal methodology adapted for modern contexts. Essential reading for scholars and practitioners of Islamic law.",
      language: "Arabic & English",
      pages: 456,
      year: 2017,
      category: "Islamic Law",
      image: "/lovable-uploads/249ad82a-9bb5-4f8e-93f9-8f0b2dd4cad1.png",
      excerpt: "Islamic jurisprudence, or Usul al-Fiqh, provides the methodological framework for understanding divine guidance in human affairs...",
      reviews: [
        {
          author: "Sheikh Abdullah Al-Mansouri",
          institution: "Islamic University of Medina",
          quote: "An exemplary work that demonstrates the flexibility and relevance of Islamic legal principles in contemporary society."
        }
      ],
      impact: "Standard text in 15+ Islamic universities worldwide"
    },
    {
      id: 3,
      title: "Ethics in Education",
      subtitle: "Building Character Through Learning",
      description: "A foundational work on integrating moral education with academic excellence. Presents a holistic approach to character development in modern educational settings.",
      language: "Malayalam & English",
      pages: 320,
      year: 2020,
      category: "Education & Ethics",
      image: "/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png",
      excerpt: "True education must nurture not only the intellect but also the character, creating individuals who contribute positively to society...",
      reviews: [
        {
          author: "Dr. Fatima Al-Zahra",
          institution: "American University of Sharjah",
          quote: "A timely and necessary contribution to the discourse on moral education in the 21st century."
        }
      ],
      impact: "Adopted as curriculum guide in 50+ educational institutions"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-royal-900 to-royal-800 text-white">
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
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-golden-500/20 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-golden-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-light mb-6">
            Scholarly Contributions
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Fifteen published works spanning philosophy, law, education, and contemporary Islamic thought, 
            reaching readers across six languages and 25 countries
          </p>
        </motion.div>

        {/* Books Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedBook === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setSelectedBook(index)}
              >
                <div className={`relative rounded-2xl overflow-hidden ${
                  selectedBook === index 
                    ? 'ring-2 ring-golden-400 shadow-2xl' 
                    : 'shadow-lg hover:shadow-xl'
                }`}>
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {selectedBook === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 w-8 h-8 bg-golden-400 rounded-full flex items-center justify-center"
                      >
                        <Star className="w-4 h-4 text-white fill-current" />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{book.title}</h3>
                    <p className="text-sm text-white/80 mb-2">{book.category}</p>
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span>{book.year}</span>
                      <span>{book.pages} pages</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Book Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBook}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Book Details */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-golden-400 text-sm font-medium px-3 py-1 bg-golden-400/20 rounded-full">
                      {books[selectedBook].category}
                    </span>
                    <span className="text-white/70 ml-4">{books[selectedBook].year}</span>
                  </div>
                  
                  <h3 className="text-3xl font-playfair font-bold mb-2">
                    {books[selectedBook].title}
                  </h3>
                  
                  <h4 className="text-xl text-golden-300 font-light mb-6">
                    {books[selectedBook].subtitle}
                  </h4>
                  
                  <p className="text-white/90 leading-relaxed mb-6">
                    {books[selectedBook].description}
                  </p>
                  
                  <div className="bg-white/5 p-4 rounded-xl mb-6">
                    <Quote className="w-5 h-5 text-golden-400 mb-2" />
                    <p className="text-white/80 italic leading-relaxed">
                      "{books[selectedBook].excerpt}"
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm text-white/70">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {books[selectedBook].pages} pages
                    </div>
                    <div className="flex items-center text-sm text-white/70">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {books[selectedBook].language}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="bg-golden-500 hover:bg-golden-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Sample
                    </button>
                    <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Reviews & Impact */}
                <div>
                  <h4 className="text-xl font-semibold mb-6">Academic Reviews</h4>
                  
                  <div className="space-y-6 mb-8">
                    {books[selectedBook].reviews.map((review, index) => (
                      <div key={index} className="bg-white/5 p-4 rounded-xl">
                        <Quote className="w-4 h-4 text-golden-400 mb-2" />
                        <p className="text-white/90 italic mb-3 leading-relaxed">
                          "{review.quote}"
                        </p>
                        <div className="text-sm">
                          <p className="text-white font-medium">{review.author}</p>
                          <p className="text-white/70">{review.institution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-royal-800/50 p-6 rounded-xl">
                    <h5 className="font-semibold text-golden-400 mb-2">Global Impact</h5>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {books[selectedBook].impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default AdvancedBooksShowcase;
