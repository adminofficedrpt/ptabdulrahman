
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Book as BookIcon, ChevronRight, ExternalLink, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

interface Book {
  id: string;
  title: string;
  language: string;
  description: string;
  cover?: string;
  year?: string;
  slug?: string;
  transliteratedTitle?: string;
  original?: boolean;
}

const BookDetail = ({ book, isOpen, onClose }: { 
  book: Book | null; 
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!book) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-royal-800">
            {book.title}
          </DialogTitle>
          {book.transliteratedTitle && (
            <DialogDescription className="text-lg text-royal-600 font-light italic">
              {book.transliteratedTitle}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 to-transparent z-10 opacity-50 transition-opacity group-hover:opacity-30"></div>
            <img 
              src={book.cover || "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png"} 
              alt={`Cover of ${book.title}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-800">
                  <Globe className="mr-1 h-3 w-3" />
                  {book.language}
                </span>
                {book.year && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-golden-100 text-golden-800">
                    {book.year}
                  </span>
                )}
                {book.original && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Original Work
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                {book.description}
              </p>
              
              <div className="prose prose-sm max-w-none text-gray-600">
                <p>
                  This thought-provoking exploration delves into fundamental questions about existence, purpose, and the divine blueprint for creation. Dr. PT Abdul Rahman draws on his extensive knowledge of Islamic philosophy to present a compelling case for the inherent meaning and purpose behind all of creation.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <DialogClose asChild>
                <Button variant="outline" className="mr-2">Close</Button>
              </DialogClose>
              <Button className="bg-royal-700 hover:bg-royal-800 text-white">
                More Details
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const BookCover = ({ book, onClick }: { book: Book; onClick: () => void }) => {
  return (
    <motion.div 
      className="book-cover-wrapper relative aspect-[3/4] cursor-pointer"
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 to-transparent opacity-40 rounded-lg z-10"></div>
      <motion.div 
        className="book-cover relative h-full w-full rounded-lg overflow-hidden shadow-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img 
          src={book.cover || (
            book.language === "Malayalam" ? "/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png" :
            book.language === "Arabic" ? "/lovable-uploads/7df32583-084c-40cc-86e3-dd30973c5f3d.png" : 
            "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png"
          )}
          alt={`Cover of ${book.title}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-4 z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-white text-lg font-bold truncate">{book.title}</h3>
        <p className="text-white/80 text-sm truncate">{book.language}</p>
      </motion.div>
    </motion.div>
  );
};

const Books = () => {
  const [visibleBooks, setVisibleBooks] = useState<string[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const booksRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: booksRef,
    offset: ["start end", "end start"]
  });
  
  const translateY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const books: Book[] = [
    {
      id: "book1",
      title: "സൃഷ്ടി അർഥരഹിതമാണോ?",
      transliteratedTitle: "Is the Creation Meaningless? (Malayalam)",
      language: "Malayalam",
      description: "A philosophical exploration of the purpose of creation from an Islamic perspective by Dr. PT Abdul Rahman.",
      year: "1995",
      slug: "is-the-creation-meaningless-malayalam",
      cover: "/lovable-uploads/45713be7-cf84-488a-bddd-5efbe361b577.png",
      original: true
    },
    {
      id: "book2",
      title: "هل الخلق بلا معنى؟",
      transliteratedTitle: "Is the Creation Meaningless? (Arabic)",
      language: "Arabic",
      description: "Arabic version of 'Is the Creation Meaningless?', examining the divine purpose behind existence by Islamic scholar PT Abdul Rahman.",
      year: "1995",
      slug: "is-the-creation-meaningless-arabic",
      cover: "/lovable-uploads/7df32583-084c-40cc-86e3-dd30973c5f3d.png"
    },
    {
      id: "book3",
      title: "Is the Creation Meaningless?",
      language: "English",
      description: "A thought-provoking examination of the purpose of creation and human existence by Malayali scholar in UAE, Dr. PT Abdul Rahman.",
      year: "1995",
      slug: "is-the-creation-meaningless-english",
      cover: "/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png"
    },
    {
      id: "book4",
      title: "സൃഷ്ടാവിലേക്ക്",
      transliteratedTitle: "Towards the Creator (Malayalam)",
      language: "Malayalam",
      description: "A spiritual journey exploring the path towards the Creator by Indian humanitarian in Dubai, Dr. PT Abdul Rahman.",
      slug: "towards-the-creator-malayalam",
      cover: "/lovable-uploads/c2272747-e473-4de4-85b6-44d98505294c.png",
      original: true
    },
    {
      id: "book5",
      title: "Towards the Creator",
      language: "English",
      description: "An exploration of the spiritual journey towards divine understanding and connection by Islamic scholar in UAE, Dr. PT Abdul Rahman.",
      slug: "towards-the-creator-english",
      cover: "/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png"
    },
    {
      id: "book6",
      title: "The Address to Know How to Address",
      language: "English",
      description: "A guide to effective communication and interaction in various contexts by the Founder of Darul Quran Abdulla Academy.",
      slug: "address-to-know-how-to-address"
    },
    {
      id: "book7",
      title: "إنهُ شمس العلماء",
      transliteratedTitle: "The Sun of Scholars (Arabic)",
      language: "Arabic",
      description: "Biography of Sheikh E.K. Abu Bakr Musliar, a comprehensive account of the renowned scholar's life and contributions by Dr. PT Abdul Rahman.",
      slug: "sun-of-scholars-arabic"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBooks((prev) => [...prev, entry.target.id]);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const bookElements = document.querySelectorAll('.book-item');
    bookElements.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      bookElements.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <section id="books" className="py-20 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-royal-50 z-0">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4a5568_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <motion.div 
        style={{ opacity, y: translateY }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-royal-800 mb-6">Literary Contributions</h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700">
            Dr. P.T. Abdul Rahman has authored several influential works 
            in Malayalam, Arabic, and English, contributing to discourse on spirituality, 
            philosophy, and cultural understanding.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-royal-50 border border-royal-100">
              <BookIcon className="h-5 w-5 text-royal-600" />
              <span className="text-royal-800 font-medium">Featured Publications</span>
            </div>
          </div>

          {/* Featured Book - "Is the Creation Meaningless?" */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 via-royal-800/40 to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/7c03ac28-c08f-47d0-9842-d43e2feeb25b.png" 
                alt="Is the Creation Meaningless? book cover" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-golden-500/20 text-golden-200 mb-3">
                  Flagship Publication
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Is the Creation Meaningless?</h3>
                <p className="text-white/80">Published in multiple languages</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-royal-800">A philosophical exploration of existence</h3>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">"Is the Creation Meaningless?"</span> stands as Dr. P.T. Abdul Rahman's most influential work, 
                addressing profound theological questions about existence and purpose from an Islamic perspective. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                First published in 1995, this philosophical masterpiece has been translated into multiple languages including English, Arabic, 
                and Malayalam, touching readers across continents and establishing Dr. Rahman as a prominent Islamic scholar from Kerala 
                making significant contributions to religious discourse in the UAE and beyond.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-royal-100 text-royal-800">
                  <Globe className="mr-1 h-3 w-3" />
                  Available in 3 languages
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-golden-100 text-golden-800">
                  First published in 1995
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={() => handleBookClick(books[0])}
                  className="bg-royal-700 hover:bg-royal-800 text-white group"
                >
                  Explore this book
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-royal-800 text-center mb-12">Complete Bibliography</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" ref={booksRef}>
            {books.map((book, index) => (
              <div 
                key={book.id}
                id={book.id}
                className={`book-item ${visibleBooks.includes(book.id) ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  transition: `opacity 0.5s ease ${0.1 * index}s, transform 0.5s ease ${0.1 * index}s`,
                  transform: visibleBooks.includes(book.id) ? 'translateY(0)' : 'translateY(20px)'
                }}
                itemScope 
                itemType="https://schema.org/Book"
              >
                <BookCover book={book} onClick={() => handleBookClick(book)} />
                <meta itemProp="author" content="Dr. P.T. Abdul Rahman" />
                <meta itemProp="name" content={book.title} />
                <meta itemProp="inLanguage" content={book.language} />
                {book.year && <meta itemProp="datePublished" content={book.year} />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <BookDetail 
        book={selectedBook} 
        isOpen={isDialogOpen} 
        onClose={handleCloseDialog} 
      />
    </section>
  );
};

export default Books;
