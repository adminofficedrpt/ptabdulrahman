
import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';

type MediaType = 'news' | 'video' | 'interview';

interface Media {
  id: number;
  title: string;
  source: string;
  date: string;
  type: MediaType;
  url: string;
  imageUrl: string;
  excerpt: string;
}

const MediaHighlights = () => {
  const [activeFilter, setActiveFilter] = useState<MediaType | 'all'>('all');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const filteredMedia = media.filter(
    item => activeFilter === 'all' || item.type === activeFilter
  );
  
  const handleMouseEnter = useCallback((id: number) => {
    setHoveredId(id);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);
  
  return (
    <section id="media" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Media Features" 
          subtitle="Dr. Rahman's contributions recognized in various media outlets"
          className="mb-16"
        />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeFilter === 'all' ? "default" : "outline"}
            className={activeFilter === 'all' ? 
              "bg-royal-800 hover:bg-royal-700" : 
              "hover:bg-royal-50"
            }
            onClick={() => setActiveFilter('all')}
          >
            All Media
          </Button>
          <Button
            variant={activeFilter === 'news' ? "default" : "outline"}
            className={activeFilter === 'news' ? 
              "bg-royal-800 hover:bg-royal-700" : 
              "hover:bg-royal-50"
            }
            onClick={() => setActiveFilter('news')}
          >
            News Articles
          </Button>
          <Button
            variant={activeFilter === 'video' ? "default" : "outline"}
            className={activeFilter === 'video' ? 
              "bg-royal-800 hover:bg-royal-700" : 
              "hover:bg-royal-50"
            }
            onClick={() => setActiveFilter('video')}
          >
            Video Features
          </Button>
          <Button
            variant={activeFilter === 'interview' ? "default" : "outline"}
            className={activeFilter === 'interview' ? 
              "bg-royal-800 hover:bg-royal-700" : 
              "hover:bg-royal-50"
            }
            onClick={() => setActiveFilter('interview')}
          >
            Interviews
          </Button>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMedia.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 to-transparent opacity-70"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`
                        inline-block px-3 py-1 text-xs font-medium rounded-full uppercase tracking-wide
                        ${getMediaTypeBadgeColor(item.type)}
                      `}>
                        {getMediaTypeLabel(item.type)}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white/70 text-sm mb-1">{item.source} • {item.date}</p>
                      <h3 className="text-white text-lg font-medium line-clamp-2">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-royal-800 font-medium">Read more</span>
                      <motion.div 
                        className="h-8 w-8 rounded-full bg-royal-50 flex items-center justify-center"
                        animate={{ 
                          x: hoveredId === item.id ? 5 : 0,
                          backgroundColor: hoveredId === item.id ? '#f3f4f6' : '#eef2ff'
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-royal-800">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

function getMediaTypeLabel(type: MediaType): string {
  switch(type) {
    case 'news': return 'News Article';
    case 'video': return 'Video Feature';
    case 'interview': return 'Interview';
    default: return '';
  }
}

function getMediaTypeBadgeColor(type: MediaType): string {
  switch(type) {
    case 'news': return 'bg-blue-100 text-blue-800';
    case 'video': return 'bg-red-100 text-red-800';
    case 'interview': return 'bg-green-100 text-green-800';
    default: return '';
  }
}

const media: Media[] = [
  {
    id: 1,
    title: "Book presents Islamic view on creation",
    source: "Khaleej Times",
    date: "Oct 15, 2018",
    type: "news",
    url: "https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation",
    imageUrl: "/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png",
    excerpt: "Dr. P.T. Abdul Rahman's seminal work 'Is the Creation Meaningless?' presents a comprehensive Islamic perspective on the purpose and meaning of existence."
  },
  {
    id: 2,
    title: "Islamic centre to launch scheme for Indian expats",
    source: "Gulf News",
    date: "Mar 3, 2019",
    type: "news",
    url: "https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474",
    imageUrl: "/lovable-uploads/bdaaf13f-2912-4e1d-b6d7-eb5852916364.png",
    excerpt: "Dubai Indian Islamic Centre, founded by Dr. P.T. Abdul Rahman, launches a comprehensive welfare scheme to support Indian expatriates in the UAE."
  },
  {
    id: 3,
    title: "Interview with Dr. P.T. Abdul Rahman on Islamic Education",
    source: "Dubai One TV",
    date: "Jun 12, 2020",
    type: "interview",
    url: "#media",
    imageUrl: "/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg",
    excerpt: "An in-depth conversation about integrating traditional Islamic education with modern academic curricula and the success of Darul Quran Abdulla Academy."
  },
  {
    id: 4,
    title: "DIIC to hold free medical camp in Ajman",
    source: "Khaleej Times",
    date: "Sep 8, 2021",
    type: "news",
    url: "https://www.khaleejtimes.com/uae/diic-to-hold-free-medical-camp-in-ajman",
    imageUrl: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg",
    excerpt: "Dubai Indian Islamic Centre's humanitarian initiative, led by Dr. P.T. Abdul Rahman, provides free healthcare services to thousands in Ajman."
  },
  {
    id: 5,
    title: "Documentary: The Educational Revolution in Kerala",
    source: "Kerala Vision",
    date: "Dec 5, 2022",
    type: "video",
    url: "#media",
    imageUrl: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
    excerpt: "A documentary featuring the revolutionary educational approach of DQAA and its impact on students' academic and spiritual development."
  },
  {
    id: 6,
    title: "8th Inter-School Quran and Educational Competition in Dubai",
    source: "IQNA",
    date: "Feb 18, 2023",
    type: "news",
    url: "https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-",
    imageUrl: "/lovable-uploads/76eef9a7-0487-4c6f-b458-32397f9edbd6.png",
    excerpt: "Annual competition organized by Dr. P.T. Abdul Rahman brings together students from across the UAE to showcase Quranic knowledge and academic excellence."
  }
];

export default MediaHighlights;
