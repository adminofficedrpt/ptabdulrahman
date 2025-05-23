
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Book, Globe, Calendar, ExternalLink, Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface BookData {
  id: string;
  title: string;
  subtitle?: string;
  language: string;
  year: string;
  cover: string;
  spine: string;
  description: string;
  excerpt: string;
  audioSample?: string;
  themes: string[];
  impact: string;
  reviews: number;
  pages: number;
}

const books: BookData[] = [
  {
    id: 'creation-meaningless-en',
    title: 'Is the Creation Meaningless?',
    subtitle: 'A Philosophical Exploration',
    language: 'English',
    year: '1995',
    cover: '/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png',
    spine: '/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png',
    description: 'A profound philosophical exploration examining the purpose and meaning behind divine creation from an Islamic perspective.',
    excerpt: 'The question of whether creation has meaning touches the very core of human existence...',
    themes: ['Philosophy', 'Theology', 'Purpose', 'Existence'],
    impact: 'Translated into multiple languages, influencing theological discourse globally',
    reviews: 4.8,
    pages: 256
  },
  {
    id: 'creation-meaningless-ml',
    title: 'സൃഷ്ടി അർഥരഹിതമാണോ?',
    subtitle: 'Malayalam Original',
    language: 'Malayalam',
    year: '1995',
    cover: '/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png',
    spine: '/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png',
    description: 'The original Malayalam work that started Dr. Rahman\'s philosophical literary journey.',
    excerpt: 'സൃഷ്ടിയുടെ അർഥം എന്ന ചോദ്യം മനുഷ്യ അസ്തിത്വത്തിന്റെ കേന്ദ്രത്തിൽ സ്പർശിക്കുന്നു...',
    themes: ['ദർശനം', 'ദൈവശാസ്ത്രം', 'ഉദ്ദേശ്യം', 'അസ്തിത്വം'],
    impact: 'Malayalam literary community\'s foundational philosophical text',
    reviews: 4.9,
    pages: 240
  },
  {
    id: 'towards-creator',
    title: 'Towards the Creator',
    subtitle: 'A Spiritual Journey',
    language: 'English',
    year: '2000',
    cover: '/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png',
    spine: '/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png',
    description: 'A guide for spiritual seekers on the path of divine understanding and connection.',
    excerpt: 'The journey towards the Creator begins with a single step of sincere intention...',
    themes: ['Spirituality', 'Guidance', 'Faith', 'Self-discovery'],
    impact: 'Spiritual guide for thousands across different cultures',
    reviews: 4.7,
    pages: 320
  },
  {
    id: 'towards-creator-ml',
    title: 'സൃഷ്ടാവിലേക്ക്',
    subtitle: 'ആത്മീയ യാത്ര',
    language: 'Malayalam',
    year: '2000',
    cover: '/lovable-uploads/c2272747-e473-4de4-85b6-44d98505294c.png',
    spine: '/lovable-uploads/c2272747-e473-4de4-85b6-44d98505294c.png',
    description: 'ആത്മീയ അന്വേഷകർക്കായുള്ള ദൈവിക ധാരണയുടെയും ബന്ധത്തിന്റെയും പാതയിലുള്ള മാർഗദർശി.',
    excerpt: 'സൃഷ്ടാവിലേക്കുള്ള യാത്ര ആത്മാർത്ഥമായ ഉദ്ദേശ്യത്തിന്റെ ഒരു കാലടിയിൽ ആരംഭിക്കുന്നു...',
    themes: ['ആത്മീയത', 'മാർഗദർശനം', 'വിശ്വാസം', 'ആത്മാവിഷ്കാരം'],
    impact: 'വിവിധ സംസ്കാരങ്ങളിലുള്ള ആയിരങ്ങൾക്ക് ആത്മീയ വഴികാട്ടി',
    reviews: 4.8,
    pages: 310
  }
];

const ImmersiveBookGallery = () => {
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  const handleBookClick = (book: BookData) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const getLanguageColor = (language: string) => {
    switch (language) {
      case 'English': return 'bg-blue-100 text-blue-800';
      case 'Malayalam': return 'bg-green-100 text-green-800';
      case 'Arabic': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }}
      className="py-32 bg-gradient-to-br from-slate-900 via-royal-900 to-slate-800 relative overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(79,70,229,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair">
            Literary Universe
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-golden-400 to-royal-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the philosophical works that have shaped minds and hearts across cultures and continents.
          </p>
        </motion.div>

        {/* 3D Book Shelf */}
        <motion.div 
          style={{ rotateX }}
          className="perspective-1000"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {books.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 100, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
                onClick={() => handleBookClick(book)}
              >
                {/* Book 3D Container */}
                <div className="relative preserve-3d">
                  <motion.div
                    className="book-container relative w-full aspect-[2/3] transform-gpu"
                    whileHover={{ 
                      rotateY: -25, 
                      rotateX: 5,
                      scale: 1.05,
                      z: 50
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* Book Cover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-r-lg shadow-2xl overflow-hidden">
                      <img 
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Book Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <Badge className={`mb-2 ${getLanguageColor(book.language)}`}>
                          <Globe className="w-3 h-3 mr-1" />
                          {book.language}
                        </Badge>
                        <h3 className="font-bold text-sm mb-1 line-clamp-2">{book.title}</h3>
                        <p className="text-xs text-gray-300 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {book.year}
                        </p>
                      </div>
                    </div>

                    {/* Book Spine */}
                    <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-b from-gray-700 to-gray-800 transform-gpu origin-left rotateY-90 shadow-lg">
                      <div className="w-full h-full bg-gradient-to-r from-transparent to-black/20"></div>
                    </div>

                    {/* Hover Effects */}
                    <AnimatePresence>
                      {hoveredBook === book.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute -top-2 -right-2 bg-royal-600 text-white p-2 rounded-full shadow-lg"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Book Stats */}
                  <motion.div 
                    className="mt-4 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex justify-center items-center gap-2 text-gray-400 text-sm">
                      <span>★ {book.reviews}</span>
                      <span>•</span>
                      <span>{book.pages} pages</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 font-playfair italic">
            "The pursuit of knowledge is not merely an intellectual exercise, but a spiritual journey 
            that leads us closer to understanding our purpose in creation."
          </blockquote>
          <cite className="text-golden-400 font-medium">— Dr. P.T. Abdul Rahman</cite>
        </motion.div>
      </div>

      {/* Book Detail Dialog */}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, index) => (
                      <Badge key={index} variant="secondary">{theme}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <Badge className={getLanguageColor(selectedBook.language)}>
                      <Globe className="w-3 h-3 mr-1" />
                      {selectedBook.language}
                    </Badge>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {selectedBook.year}
                    </span>
                    <span>{selectedBook.pages} pages</span>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">{selectedBook.description}</p>
                  
                  <div className="bg-royal-50 p-4 rounded-lg border-l-4 border-royal-500">
                    <h4 className="font-semibold text-royal-800 mb-2">Sample Excerpt</h4>
                    <p className="text-gray-700 italic">"{selectedBook.excerpt}"</p>
                  </div>
                  
                  <div className="bg-golden-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-golden-800 mb-2">Impact & Influence</h4>
                    <p className="text-gray-700">{selectedBook.impact}</p>
                  </div>

                  {selectedBook.audioSample && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">Audio Sample</h4>
                          <p className="text-sm text-gray-600">Listen to Dr. Rahman discuss key concepts</p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                          className="flex items-center gap-2"
                        >
                          {isAudioPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                          <Volume2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default ImmersiveBookGallery;
