
import { ExternalLink } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface MediaItem {
  id: string;
  title: string;
  source: string;
  url: string;
  date?: string;
}

const MediaFeatures = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const mediaItems: MediaItem[] = [
    {
      id: "media1",
      title: "Book presents Islamic view on creation",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation",
      date: "1995"
    },
    {
      id: "media2",
      title: "Islamic centre to launch scheme for Indian expats",
      source: "Gulf News",
      url: "https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474",
      date: "1996"
    },
    {
      id: "media3",
      title: "Dubai Indian Islamic Centre celebrates Miladun Nabi with religious zeal",
      source: "Two Circles",
      url: "https://twocircles.net/2012feb06/dubai_indian_islamic_centre_celebrates_miladun_nabi_religious_zeal.html",
      date: "2012"
    },
    {
      id: "media4",
      title: "DIIC to hold free medical camp in Ajman",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/uae/diic-to-hold-free-medical-camp-in-ajman?botrequest=true",
    },
    {
      id: "media5",
      title: "8th Inter-School Quran and Educational Competition in Dubai",
      source: "IQNA",
      url: "https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-",
    },
    {
      id: "media6",
      title: "Kerala Muslim art forms get a big boost in Dubai",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/uae/kerala-muslim-art-forms-get-a-big-boost-in-dubai",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.id]);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.media-item');
    elements.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      elements.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="media" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12">In the Media</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. P.T. Abdul Rahman's initiatives and contributions have been featured in numerous 
            publications across the Middle East and beyond, highlighting the impact of his work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" ref={sectionRef}>
          {mediaItems.map((item, index) => (
            <div 
              key={item.id}
              id={item.id}
              className={`media-item ${visibleItems.includes(item.id) ? 'animate-fade-in opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-lg p-6 border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-royal-800 mb-3">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">{item.source}</span>
                  {item.date && <span className="text-gray-500 text-sm">{item.date}</span>}
                </div>
                <div className="mt-4 flex items-center text-royal-700 hover:text-royal-900 font-medium">
                  Read article
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
