
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, Globe, ExternalLink, Play, Volume2, Download, Share2 } from 'lucide-react';
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
  excerpt: string;
  impact: string;
  cover: string;
  downloadUrl?: string;
  audioUrl?: string;
  featured?: boolean;
  reviews?: number;
  translations?: number;
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
    description: "A profound philosophical exploration examining the divine purpose behind creation from an Islamic perspective, challenging materialist worldviews and offering spiritual insights.",
    excerpt: "In the grand tapestry of existence, every thread has meaning, every pattern serves a purpose. To question whether creation has meaning is to embark on the most fundamental journey of human consciousness...",
    impact: "Translated into 8 languages, influenced Islamic philosophical discourse globally, cited in 200+ academic papers",
    cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
    featured: true,
    reviews: 1250,
    translations: 8
  },
  {
    id: '2',
    title: "Towards the Creator",
    malayalamTitle: "സൃഷ്ടാവിലേക്ക്",
    subtitle: "A Spiritual Journey of Understanding",
    year: "2008",
    languages: ["English", "Malayalam"],
    description: "A comprehensive guide exploring the spiritual path towards divine understanding, combining traditional Islamic wisdom with contemporary insights.",
    excerpt: "The journey towards the Creator is not measured in miles or years, but in the depth of understanding and the purity of intention that guides each step...",
    impact: "Adopted as study material in 50+ Islamic institutions worldwide",
    cover: "/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png",
    reviews: 850,
    translations: 4
  },
  {
    id: '3',
    title: "The Address to Know How to Address",
    subtitle: "Communication in the Modern Islamic Context",
    year: "2015",
    languages: ["English"],
    description: "A comprehensive guide to effective communication and interaction in various contexts from an Islamic ethical perspective.",
    excerpt: "In an age of global connectivity, the art of addressing others with wisdom, respect, and clarity becomes not just a skill, but a moral imperative...",
    impact: "Used in diplomatic training programs and interfaith dialogue initiatives",
    cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png",
    reviews: 650,
    translations: 2
  }
];

const InteractiveBookExperience: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);
  const [isReading, setIsReading] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

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
    <section className="py-32 bg-gradient-to-br from-royal-50 via-white to-golden-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-royal-300 to-golden-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-golden-300 to-royal-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-royal-900 mb-8 font-playfair">
            Living Literature
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-royal-500 to-golden-500 mx-auto mb-8" />
          <p className="text-xl text-royal-700 max-w-4xl mx-auto leading-relaxed">
            Explore Dr. P.T. Abdul Rahman's philosophical works that have shaped Islamic thought 
            and interfaith understanding across the globe.
          </p>
        </motion.div>

        {/* Featured Book Experience */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 3D Book Display */}
          <motion.div 
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              mouseX.set(0);
              mouseY.set(0);
            }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative preserve-3d"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative transform-style-preserve-3d">
                  <img 
                    src={selectedBook.cover}
                    alt={selectedBook.title}
                    className="w-full h-auto object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-900/20 to-transparent rounded-lg" />
                  <div className="absolute -top-4 -right-4 bg-golden-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedBook.featured ? 'Flagship Work' : 'Classic'}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Stats */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg text-center">
                <div className="text-2xl font-bold text-royal-900">{selectedBook.reviews}</div>
                <div className="text-xs text-royal-600">Reviews</div>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg text-center">
                <div className="text-2xl font-bold text-royal-900">{selectedBook.translations}</div>
                <div className="text-xs text-royal-600">Languages</div>
              </div>
            </div>
          </motion.div>

          {/* Book Details */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedBook.languages.map((lang) => (
                  <span 
                    key={lang}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-800"
                  >
                    <Globe className="mr-1 h-3 w-3" />
                    {lang}
                  </span>
                ))}
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-golden-100 text-golden-800">
                  {selectedBook.year}
                </span>
              </div>

              <h3 className="text-4xl font-bold text-royal-900 mb-2 font-playfair">
                {selectedBook.title}
              </h3>
              
              {selectedBook.arabicTitle && (
                <p className="text-2xl text-royal-600 mb-2 font-arabic">{selectedBook.arabicTitle}</p>
              )}
              
              {selectedBook.malayalamTitle && (
                <p className="text-xl text-royal-600 mb-4">{selectedBook.malayalamTitle}</p>
              )}

              <p className="text-lg text-golden-700 mb-6">{selectedBook.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-royal-900 mb-3">About This Work</h4>
                <p className="text-royal-700 leading-relaxed">{selectedBook.description}</p>
              </div>

              {/* Reading Experience */}
              <AnimatePresence>
                {isReading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-royal-50 rounded-xl p-6 border-l-4 border-golden-500"
                  >
                    <h5 className="font-semibold text-royal-900 mb-3">Excerpt</h5>
                    <p className="text-royal-700 italic leading-relaxed mb-4">
                      "{selectedBook.excerpt}"
                    </p>
                    <div className="flex items-center gap-2 text-sm text-royal-600">
                      <Volume2 size={16} />
                      <span>Audio narration available</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <h4 className="text-lg font-semibold text-royal-900 mb-3">Global Impact</h4>
                <p className="text-royal-600 text-sm leading-relaxed">{selectedBook.impact}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => setIsReading(!isReading)}
                  className="bg-royal-700 hover:bg-royal-800 text-white"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  {isReading ? 'Close Preview' : 'Read Preview'}
                </Button>
                
                <Button variant="outline" className="border-golden-500 text-golden-700 hover:bg-golden-50">
                  <Play className="mr-2 h-4 w-4" />
                  Audio Preview
                </Button>
                
                <Button variant="outline" className="border-royal-300 text-royal-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                
                <Button variant="outline" className="border-royal-300 text-royal-700">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Book Gallery */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedBook.id === book.id ? 'scale-105 shadow-2xl' : 'hover:scale-102 hover:shadow-lg'
              }`}
              onClick={() => setSelectedBook(book)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white">
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
                  
                  <h4 className="text-lg font-semibold text-royal-900 mb-2 font-playfair">
                    {book.title}
                  </h4>
                  
                  <p className="text-sm text-royal-600 mb-3">{book.subtitle}</p>
                  
                  <div className="flex justify-between items-center text-xs text-royal-500">
                    <span>{book.year}</span>
                    <span>{book.reviews} reviews</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-royal-900 to-golden-900 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 font-playfair">
            Explore the Complete Library
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Dive deeper into Dr. P.T. Abdul Rahman's philosophical insights and scholarly contributions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-golden-500 hover:bg-golden-600 text-white">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit Digital Library
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <BookOpen className="mr-2 h-5 w-5" />
              Request Physical Copies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveBookExperience;
