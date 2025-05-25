
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Globe, Calendar, ExternalLink, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface BookData {
  id: string;
  title: string;
  subtitle?: string;
  arabicTitle?: string;
  malayalamTitle?: string;
  year: string;
  languages: string[];
  pages: number;
  publisher: string;
  isbn?: string;
  description: string;
  longDescription: string;
  excerpt: string;
  themes: string[];
  impact: string;
  rating: number;
  cover: string;
  spine?: string;
  featured?: boolean;
  awards?: string[];
}

const booksData: BookData[] = [
  {
    id: 'creation-meaningless',
    title: 'Is the Creation Meaningless?',
    arabicTitle: 'هل الخلق بلا معنى؟',
    malayalamTitle: 'സൃഷ്ടി അർഥരഹിതമാണോ?',
    year: '1995',
    languages: ['English', 'Arabic', 'Malayalam'],
    pages: 256,
    publisher: 'Islamic Publications',
    isbn: '978-9971-40-123-4',
    description: 'A profound philosophical exploration examining the divine purpose behind creation from an Islamic perspective.',
    longDescription: 'Dr. P.T. Abdul Rahman\'s flagship work represents a comprehensive examination of one of humanity\'s most fundamental questions: Does creation have inherent meaning and purpose? Drawing from classical Islamic sources, contemporary philosophical thought, and practical wisdom gained through decades of scholarship, this book provides readers with a nuanced understanding of Islamic cosmology and theodicy.',
    excerpt: 'The question of whether creation has meaning touches the very core of human existence, challenging us to look beyond the material realm and discover the divine purpose that underlies all of existence.',
    themes: ['Philosophy', 'Theology', 'Purpose', 'Existence', 'Islamic Thought'],
    impact: 'Translated into multiple languages and studied in Islamic universities worldwide, this work has become a cornerstone text for understanding Islamic philosophical thought.',
    rating: 4.8,
    cover: '/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png',
    featured: true,
    awards: ['Islamic Book Award 1996', 'Philosophical Excellence Recognition']
  },
  {
    id: 'towards-creator',
    title: 'Towards the Creator',
    malayalamTitle: 'സൃഷ്ടാവിലേക്ക്',
    year: '2005',
    languages: ['English', 'Malayalam'],
    pages: 180,
    publisher: 'Darul Quran Publications',
    description: 'A spiritual journey exploring the path towards divine understanding and connection through Islamic teachings.',
    longDescription: 'This contemplative work guides readers through the spiritual dimensions of Islamic faith, offering practical insights for developing a deeper relationship with the Divine. Through a combination of theological exposition and personal reflection, Dr. Rahman provides a roadmap for spiritual growth.',
    excerpt: 'The journey towards the Creator begins with a single step of sincere intention, illuminated by the guidance of authentic Islamic teachings.',
    themes: ['Spirituality', 'Guidance', 'Faith', 'Self-discovery'],
    impact: 'A spiritual guide for thousands across different cultures, helping readers deepen their connection with the Divine.',
    rating: 4.7,
    cover: '/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png'
  },
  {
    id: 'address-to-know',
    title: 'The Address to Know How to Address',
    year: '2010',
    languages: ['English'],
    pages: 142,
    publisher: 'Educational Excellence Press',
    description: 'A comprehensive guide to effective communication and interaction in various contexts, drawing from Islamic principles.',
    longDescription: 'This practical guide explores the art of communication from an Islamic perspective, covering everything from interpersonal dialogue to public speaking. Dr. Rahman draws on classical Islamic sources and modern communication theory.',
    excerpt: 'True communication transcends mere words; it is an art form that bridges hearts and minds through wisdom and compassion.',
    themes: ['Communication', 'Ethics', 'Leadership', 'Social Skills'],
    impact: 'Widely used in educational institutions and leadership training programs across the Islamic world.',
    rating: 4.6,
    cover: '/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png'
  },
  {
    id: 'education-modern',
    title: 'Education in the Modern Islamic Context',
    malayalamTitle: 'ആധുനിക ഇസ്ലാമിക പശ്ചാത്തലത്തിൽ വിദ്യാഭ്യാസം',
    year: '2018',
    languages: ['English', 'Malayalam'],
    pages: 220,
    publisher: 'DQAA Publications',
    description: 'An examination of Islamic educational philosophy and its application in contemporary educational institutions.',
    longDescription: 'Based on his experience founding and leading Darul Quran Abdulla Academy, Dr. Rahman presents a comprehensive framework for integrating Islamic values with modern educational excellence.',
    excerpt: 'True education must nourish both the mind and the soul, preparing students for success in this world while keeping them connected to their spiritual foundation.',
    themes: ['Education', 'Curriculum', 'Islamic Values', 'Modern Teaching'],
    impact: 'Serves as a foundational text for Islamic educational institutions seeking to balance traditional values with contemporary excellence.',
    rating: 4.9,
    cover: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png'
  }
];

const EnhancedBooksGallery = () => {
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredBooks = useMemo(() => {
    if (filter === 'all') return booksData;
    return booksData.filter(book => 
      book.themes.some(theme => theme.toLowerCase().includes(filter.toLowerCase()))
    );
  }, [filter]);

  const featuredBook = booksData.find(book => book.featured);
  const regularBooks = booksData.filter(book => !book.featured);

  const handleBookClick = (book: BookData) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const getLanguageColor = (language: string) => {
    const colors = {
      English: 'bg-blue-100 text-blue-800',
      Arabic: 'bg-purple-100 text-purple-800',
      Malayalam: 'bg-green-100 text-green-800'
    };
    return colors[language as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-royal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-800 mb-6 font-playfair">
            Literary Legacy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-golden-400 to-royal-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the philosophical works that have shaped Islamic thought and interfaith understanding across the globe
          </p>
        </motion.div>

        {/* Featured Book - 3D Showcase */}
        {featuredBook && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-royal-900 via-royal-800 to-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.1),transparent_50%)]"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* 3D Book Display */}
                <motion.div
                  className="relative perspective-1000"
                  whileHover={{ rotateY: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="book-container relative w-full max-w-sm mx-auto">
                    <div className="aspect-[3/4] relative transform-gpu preserve-3d hover:scale-105 transition-transform duration-500">
                      {/* Book Cover */}
                      <div className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden">
                        <img 
                          src={featuredBook.cover}
                          alt={featuredBook.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      {/* Book Spine */}
                      <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-b from-gray-700 to-gray-800 transform-gpu origin-left rotateY-90 shadow-lg rounded-l-lg">
                        <div className="w-full h-full bg-gradient-to-r from-transparent to-black/20"></div>
                      </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-golden-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Featured Work
                    </div>
                  </div>
                </motion.div>

                {/* Book Details */}
                <div className="text-white">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredBook.languages.map((lang) => (
                      <Badge key={lang} className="bg-white/20 text-white border-white/30">
                        <Globe className="mr-1 h-3 w-3" />
                        {lang}
                      </Badge>
                    ))}
                    <Badge className="bg-golden-500/20 text-golden-300 border-golden-500/30">
                      <Calendar className="mr-1 h-3 w-3" />
                      {featuredBook.year}
                    </Badge>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-3 font-playfair">
                    {featuredBook.title}
                  </h3>
                  
                  {featuredBook.arabicTitle && (
                    <p className="text-xl text-golden-300 mb-2 font-arabic">{featuredBook.arabicTitle}</p>
                  )}
                  {featuredBook.malayalamTitle && (
                    <p className="text-xl text-golden-300 mb-6">{featuredBook.malayalamTitle}</p>
                  )}

                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">{renderStars(featuredBook.rating)}</div>
                    <span className="text-golden-300">{featuredBook.rating}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {featuredBook.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div><span className="text-gray-400">Pages:</span> {featuredBook.pages}</div>
                    <div><span className="text-gray-400">Publisher:</span> {featuredBook.publisher}</div>
                    <div><span className="text-gray-400">Languages:</span> {featuredBook.languages.length}</div>
                    <div><span className="text-gray-400">ISBN:</span> {featuredBook.isbn}</div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={() => handleBookClick(featuredBook)}
                      className="bg-golden-600 hover:bg-golden-700 text-white"
                    >
                      <Book className="mr-2 h-4 w-4" />
                      Explore Book
                    </Button>
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      <Download className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
              onClick={() => handleBookClick(book)}
            >
              <Card className="h-full bg-white hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  {/* Book Cover with 3D Effect */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-royal-50 to-golden-50">
                    <motion.div
                      className="w-full h-full relative"
                      whileHover={{ rotateY: -5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredBook === book.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-royal-900/80 flex items-center justify-center"
                          >
                            <div className="text-center text-white">
                              <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                              <p className="text-sm font-medium">Explore Book</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Book Info */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {book.languages.map((lang) => (
                        <Badge key={lang} className={`text-xs ${getLanguageColor(lang)}`}>
                          {lang}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-xs">
                        {book.year}
                      </Badge>
                    </div>

                    <h4 className="text-xl font-semibold text-royal-800 mb-2 font-playfair line-clamp-2">
                      {book.title}
                    </h4>

                    {book.malayalamTitle && (
                      <p className="text-sm text-royal-600 mb-3 line-clamp-1">{book.malayalamTitle}</p>
                    )}

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex">{renderStars(book.rating)}</div>
                      <span className="text-sm text-gray-600">{book.rating}</span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {book.description}
                    </p>

                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <span>{book.pages} pages</span>
                      <span>{book.publisher}</span>
                    </div>

                    <Button variant="ghost" size="sm" className="w-full text-royal-600 hover:text-royal-800 hover:bg-royal-50">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-royal-50 to-golden-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-royal-800 mb-2">{booksData.length}+</div>
              <div className="text-gray-600">Published Works</div>
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
              <div className="text-gray-600">Impact & Reach</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Book Detail Modal */}
      <Dialog open={isDialogOpen} onOpenChange={(open) => !open && setIsDialogOpen(false)}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedBook && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-royal-800 font-playfair">
                  {selectedBook.title}
                </DialogTitle>
                {selectedBook.subtitle && (
                  <p className="text-lg text-gray-600 italic">{selectedBook.subtitle}</p>
                )}
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                <div className="space-y-6">
                  <div className="relative group">
                    <img 
                      src={selectedBook.cover}
                      alt={selectedBook.title}
                      className="w-full rounded-lg shadow-2xl"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, index) => (
                      <Badge key={index} variant="secondary">{theme}</Badge>
                    ))}
                  </div>

                  {selectedBook.awards && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-royal-800">Awards & Recognition</h4>
                      {selectedBook.awards.map((award, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-golden-500" />
                          {award}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    {selectedBook.languages.map((lang) => (
                      <Badge key={lang} className={getLanguageColor(lang)}>
                        <Globe className="w-3 h-3 mr-1" />
                        {lang}
                      </Badge>
                    ))}
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {selectedBook.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(selectedBook.rating)}</div>
                    <span className="font-medium">{selectedBook.rating}/5</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{selectedBook.longDescription}</p>
                  
                  <div className="bg-royal-50 p-4 rounded-lg border-l-4 border-royal-500">
                    <h4 className="font-semibold text-royal-800 mb-2">Featured Excerpt</h4>
                    <p className="text-gray-700 italic">"{selectedBook.excerpt}"</p>
                  </div>
                  
                  <div className="bg-golden-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-golden-800 mb-2">Impact & Influence</h4>
                    <p className="text-gray-700">{selectedBook.impact}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div><strong>Pages:</strong> {selectedBook.pages}</div>
                    <div><strong>Publisher:</strong> {selectedBook.publisher}</div>
                    {selectedBook.isbn && (
                      <div className="col-span-2"><strong>ISBN:</strong> {selectedBook.isbn}</div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EnhancedBooksGallery;
