
import { useEffect, useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  language: string;
  description: string;
  cover?: string;
  year?: string;
}

const Books = () => {
  const [visibleBooks, setVisibleBooks] = useState<string[]>([]);
  const booksRef = useRef<HTMLDivElement>(null);

  const books: Book[] = [
    {
      id: "book1",
      title: "സൃഷ്ടി അർഥരഹിതമാണോ?",
      language: "Malayalam",
      description: "A philosophical exploration of the purpose of creation from an Islamic perspective.",
      year: "1995"
    },
    {
      id: "book2",
      title: "هل الخلق بلا معنى؟",
      language: "Arabic",
      description: "Arabic version of 'Is the Creation Meaningless?', examining the divine purpose behind existence.",
      year: "1995"
    },
    {
      id: "book3",
      title: "Is the Creation Meaningless?",
      language: "English",
      description: "A thought-provoking examination of the purpose of creation and human existence.",
      year: "1995"
    },
    {
      id: "book4",
      title: "സൃഷ്ടാവിലേക്ക്",
      language: "Malayalam",
      description: "A spiritual journey exploring the path towards the Creator.",
    },
    {
      id: "book5",
      title: "Towards the Creator",
      language: "English",
      description: "An exploration of the spiritual journey towards divine understanding and connection.",
    },
    {
      id: "book6",
      title: "The Address to Know How to Address",
      language: "English",
      description: "A guide to effective communication and interaction in various contexts.",
    },
    {
      id: "book7",
      title: "إنهُ شمس العلماء",
      language: "Arabic",
      description: "Biography of Sheikh E.K. Abu Bakr Musliar, a comprehensive account of the renowned scholar's life and contributions.",
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

  return (
    <section id="books" className="py-24 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12">Literary Contributions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. P.T. Abdul Rahman has authored several influential works in Malayalam, Arabic, and English, 
            contributing to discourse on spirituality, philosophy, and cultural understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" ref={booksRef}>
          {books.map((book, index) => (
            <div 
              key={book.id}
              id={book.id}
              className={`book-item ${visibleBooks.includes(book.id) ? 'animate-scale-in opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 book-card border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-royal-700 to-royal-900 flex items-center justify-center p-4 text-center">
                  <h3 className="text-xl font-bold text-white">{book.title}</h3>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-royal-100 text-royal-800 rounded-full mb-3">
                    {book.language}
                    {book.year && ` • ${book.year}`}
                  </span>
                  <p className="text-gray-700 mb-4">{book.description}</p>
                  <a href="#" className="inline-flex items-center text-royal-700 hover:text-royal-900 font-medium">
                    Learn more
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
