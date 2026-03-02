
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Book {
  id: string;
  title: string;
  arabicTitle?: string;
  malayalamTitle?: string;
  subtitle: string;
  year: string;
  languages: string[];
  description: string;
  cover: string;
}

const books: Book[] = [
  {
    id: '1',
    title: "Is the Creation Meaningless?",
    arabicTitle: "هل الخلق بلا معنى؟",
    malayalamTitle: "സൃഷ്ടി അർഥരഹിതമാണോ?",
    subtitle: "A Philosophical Exploration of Divine Purpose",
    year: "1995",
    languages: ["English", "Arabic", "Malayalam"],
    description: "A philosophical exploration examining the divine purpose behind creation from an Islamic perspective, addressing fundamental questions about existence and meaning.",
    cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
  },
  {
    id: '2',
    title: "Towards the Creator",
    malayalamTitle: "സൃഷ്ടാവിലേക്ക്",
    subtitle: "A Spiritual Journey of Understanding",
    year: "2008",
    languages: ["English", "Malayalam"],
    description: "A guide exploring the spiritual path towards divine understanding, combining traditional Islamic wisdom with contemporary insights.",
    cover: "/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png",
  },
  {
    id: '3',
    title: "The Address to Know How to Address",
    subtitle: "Communication in the Modern Islamic Context",
    year: "2015",
    languages: ["English"],
    description: "A guide to effective communication and interaction in various contexts from an Islamic ethical perspective.",
    cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
  }
];

const InteractiveBookExperience: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  return (
    <section id="publications" className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-royal-50 via-white to-golden-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-royal-900 mb-6">
            Publications
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-golden-600 to-transparent mx-auto mb-6" />
          <p className="text-lg text-royal-600 max-w-3xl mx-auto">
            Books on Islamic philosophy, education, and contemporary social questions.
          </p>
        </motion.div>

        {/* Featured Book */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* 3D Book Display */}
          <motion.div 
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative preserve-3d"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <img 
                  src={selectedBook.cover}
                  alt={selectedBook.title}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Book Details */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedBook.languages.map((lang) => (
                <span key={lang} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-800">
                  <Globe className="mr-1 h-3 w-3" />
                  {lang}
                </span>
              ))}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-golden-100 text-golden-800">
                {selectedBook.year}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900">
              {selectedBook.title}
            </h3>
            
            {selectedBook.arabicTitle && (
              <p className="text-xl text-royal-500">{selectedBook.arabicTitle}</p>
            )}
            
            {selectedBook.malayalamTitle && (
              <p className="text-lg text-royal-500">{selectedBook.malayalamTitle}</p>
            )}

            <p className="text-golden-700 font-medium">{selectedBook.subtitle}</p>

            <p className="text-royal-600 leading-relaxed">{selectedBook.description}</p>
          </div>
        </div>

        {/* Book Gallery */}
        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedBook.id === book.id ? 'ring-2 ring-golden-400 rounded-xl' : ''
              }`}
              onClick={() => setSelectedBook(book)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="overflow-hidden bg-white/70 backdrop-blur-sm border-royal-100/50 hover:shadow-lg transition-shadow">
                <div className="aspect-[3/4] bg-gradient-to-br from-royal-50 to-golden-50 p-6 flex items-center justify-center">
                  <img 
                    src={book.cover}
                    alt={book.title}
                    className="h-full w-auto object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="p-5">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {book.languages.map((lang) => (
                      <span key={lang} className="text-xs px-2 py-0.5 bg-royal-50 text-royal-600 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-base font-semibold text-royal-900 mb-1 font-playfair">
                    {book.title}
                  </h4>
                  
                  <p className="text-sm text-royal-500">{book.year}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveBookExperience;
