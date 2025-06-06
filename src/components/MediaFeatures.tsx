
import { ExternalLink } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface MediaItem {
  id: string;
  title: string;
  source: string;
  url: string;
  date?: string;
  description?: string;
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
      date: "1995",
      description: "Coverage of Dr. P.T. Abdul Rahman's book 'Is the Creation Meaningless?'"
    },
    {
      id: "media2",
      title: "Islamic centre to launch scheme for Indian expats",
      source: "Gulf News",
      url: "https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474",
      date: "1996",
      description: "Initiative by Dr. P.T. Abdul Rahman to support Indian expatriates in the UAE"
    },
    {
      id: "media3",
      title: "Dubai Indian Islamic Centre celebrates Miladun Nabi with religious zeal",
      source: "Two Circles",
      url: "https://twocircles.net/2012feb06/dubai_indian_islamic_centre_celebrates_miladun_nabi_religious_zeal.html",
      date: "2012",
      description: "Cultural event organized under the leadership of Islamic scholar P.T. Abdul Rahman"
    },
    {
      id: "media4",
      title: "DIIC to hold free medical camp in Ajman",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/uae/diic-to-hold-free-medical-camp-in-ajman?botrequest=true",
      description: "Humanitarian initiative by the Dubai Indian Islamic Center led by PT Abdul Rahman"
    },
    {
      id: "media5",
      title: "8th Inter-School Quran and Educational Competition in Dubai",
      source: "IQNA",
      url: "https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-",
      description: "Educational event promoting Quranic studies among youth in Dubai"
    },
    {
      id: "media6",
      title: "Kerala Muslim art forms get a big boost in Dubai",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/uae/kerala-muslim-art-forms-get-a-big-boost-in-dubai",
      description: "Cultural initiative supporting Malayali arts in the UAE by PT Abdul Rahman"
    },
    {
      id: "media7",
      title: "DIIC embarks on fourth TV project",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/uae/diic-embarks-on-fourth-tv-project-2",
      description: "Media initiative led by the Malayali scholar in UAE, PT Abdul Rahman"
    },
    {
      id: "media8",
      title: "UAE center teaches expats Islamic values",
      source: "Arab News",
      url: "https://www.arabnews.com/node/224995",
      description: "Educational program for expatriates under the guidance of Islamic scholar PT Abdul Rahman"
    },
    {
      id: "media9",
      title: "Medical camp for DIIC members in Sharjah",
      source: "Gulf News",
      url: "https://gulfnews.com/uae/medical-camp-for-diic-members-in-sharjah-1.425825",
      description: "Healthcare initiative by Indian humanitarian in Dubai, PT Abdul Rahman"
    },
    {
      id: "media10",
      title: "Quran recitation contest",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/article/quran-recitation-contest",
      description: "Educational competition organized by Founder of Darul Quran Abdulla Academy"
    },
    {
      id: "media11",
      title: "GMC Hospital & Research Centre & Dubai Indian Islamic Center Organizes Mega Free Health Camp",
      source: "Thumbay",
      url: "https://www.thumbay.com/news/gmc-hospital-research-centre-dubai-indian-islamic-center-organizes-mega-free-health-camp/",
      description: "Healthcare initiative for community wellbeing by PT Abdul Rahman"
    },
    {
      id: "media12",
      title: "Inter-school Quran contest",
      source: "Khaleej Times",
      url: "https://www.khaleejtimes.com/uae/inter-school-quran-contest?amp=1",
      description: "Educational event promoting Quranic excellence among students"
    },
    {
      id: "media13",
      title: "Islamic centre provides free medical check-up for 800",
      source: "Gulf News",
      url: "https://gulfnews.com/uae/islamic-centre-provides-free-medical-check-up-for-800-1.421491",
      description: "Humanitarian service provided by PT Abdul Rahman's organization"
    },
    {
      id: "media14",
      title: "New article from GN24",
      source: "GN24",
      url: "https://gn24.ae/12d8ff2617da5000",
      description: "Recent coverage of Dr. PT Abdul Rahman's work and initiatives"
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
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">In the Media</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. P.T. Abdul Rahman's initiatives and contributions as an Islamic scholar in UAE and Indian humanitarian in Dubai 
            have been featured in numerous publications across the Middle East and beyond, highlighting the impact of his work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" ref={sectionRef}>
          {mediaItems.map((item, index) => (
            <div 
              key={item.id}
              id={item.id}
              className={`media-item ${visibleItems.includes(item.id) ? 'animate-fade-in opacity-0' : 'opacity-0'}`}
              style={{ animationDelay: `${0.15 * index}s` }}
              itemScope 
              itemType="https://schema.org/NewsArticle"
            >
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="media-card block bg-white rounded-lg shadow-lg p-6 border border-gray-100 h-full transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-royal-800 mb-3" itemProp="headline">{item.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium" itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">{item.source}</span>
                  </span>
                  {item.date && <span className="text-gray-500 text-sm" itemProp="datePublished">{item.date}</span>}
                </div>
                <div className="mt-4 flex items-center text-golden-700 hover:text-golden-900 font-medium">
                  Read article
                  <ExternalLink className="ml-2 h-4 w-4" />
                </div>
                <meta itemProp="author" content="Dr. P.T. Abdul Rahman" />
                <meta itemProp="description" content={item.description} />
                <link itemProp="mainEntityOfPage" href={item.url} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-royal-800">Dharmarekha | ധർമ്മരേഖ</h3>
          <p className="text-lg text-center mb-8">
            In 2001, PT Abdul Rahman pioneered the first-ever televised Islamic program on Asianet, An Indian Malayalam language television channel. 
            The videos in the playlist are few parts of that breakthrough program under the name Dharmarekha | ധർമ്മരേഖ, showcasing his role as a 
            prominent Malayali scholar in UAE sharing knowledge with audiences in Kerala.
          </p>
          
          <div className="video-container mb-8">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/videoseries?si=IlWMVc-TRL_XpZH6&amp;list=PLAabyVEuDJuNQuvOfInZOow3WO56edEo_" 
              title="Dharmarekha by Dr. P.T. Abdul Rahman" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          
          <p className="text-lg text-center mb-4">
            The latest in the Dharmarekha's continuation in 2022-2023:
          </p>
          
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/j0s21rGpqxo?si=iYH2lBwTd52PYV9C" 
              title="Recent Dharmarekha episode" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
