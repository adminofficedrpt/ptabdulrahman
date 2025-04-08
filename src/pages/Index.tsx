
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import Timeline from '@/components/Timeline';
import Books from '@/components/Books';
import Humanitarian from '@/components/Humanitarian';
import Awards from '@/components/Awards';
import Legacy from '@/components/Legacy';
import MediaFeatures from '@/components/MediaFeatures';
import DQAA from '@/components/DQAA';
import DQAAAdmission from '@/components/DQAAAdmission';
import DQAADonate from '@/components/DQAADonate';
import Footer from '@/components/Footer';
import PreLoader from '@/components/PreLoader';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without page reload
          window.history.pushState({}, '', href);
        }
      });
    });
    
    // Preload important images
    const preloadImages = [
      '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png',
      '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png',
      '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg',
      '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
    
    // Set loading to false after a brief delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dr. P.T. Abdul Rahman - Islamic Scholar UAE | Indian Humanitarian in Dubai</title>
        <meta name="description" content="Dr. P.T. Abdul Rahman is a distinguished Islamic scholar in UAE, humanitarian in Dubai, author of 'Is the Creation Meaningless?', and Founder Chairman of Darul Quran Abdulla Academy (DQAA)." />
        <meta name="keywords" content="PT Abdul Rahman, Dr PT Abdul Rahman, Islamic scholar UAE, Founder of Darul Quran Abdulla Academy, Indian humanitarian in Dubai, Malayali scholar in UAE, Author of Is the Creation Meaningless, DQAA Kerala, Hafiz program India, Islamic boarding school Kerala, Quran memorization school, Insight Group founder, Dubai Indian Islamic Centre founder, Humanitarian work UAE" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.ptabdulrahman.com/" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dr. P.T. Abdul Rahman" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.ptabdulrahman.com/" />
        <meta property="og:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar UAE & DQAA Founder" />
        <meta property="og:description" content="Distinguished Islamic scholar in UAE, Indian humanitarian in Dubai, and founder of Darul Quran Abdulla Academy (DQAA)." />
        <meta property="og:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar UAE" />
        <meta name="twitter:description" content="Distinguished Islamic scholar, Malayali humanitarian in Dubai, author of 'Is the Creation Meaningless?', and founder of Darul Quran Abdulla Academy." />
        <meta name="twitter:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        
        {/* Structured Data - Person */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.ptabdulrahman.com/#person",
              "name": "Dr. P.T. Abdul Rahman",
              "alternateName": "PT Abdul Rahman",
              "description": "Distinguished Islamic scholar in UAE, humanitarian, author, and founder of Darul Quran Abdulla Academy",
              "image": "https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png",
              "url": "https://www.ptabdulrahman.com/",
              "sameAs": [
                "https://linkedin.com/in/dr-pt-abdul-rahman-mohd-52538a68",
                "https://youtube.com/@dharmarekha",
                "https://www.facebook.com/abdulrahman.peetee",
                "https://instagram.com/drpt7"
              ],
              "jobTitle": "Founder Chairman",
              "worksFor": {
                "@type": "Organization",
                "@id": "https://www.darul-quran.com/#organization",
                "name": "Darul Quran Abdulla Academy",
                "url": "https://www.darul-quran.com/"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Mysore",
                "location": "Mysore, India"
              },
              "knowsLanguage": ["Arabic", "English", "Malayalam", "Hindi", "Urdu", "Tamil"]
            }
          `}
        </script>

        {/* Structured Data - Organization (DQAA) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.darul-quran.com/#organization",
              "name": "Darul Quran Abdulla Academy",
              "url": "https://www.darul-quran.com/",
              "logo": "https://www.ptabdulrahman.com/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png",
              "description": "An educational institution founded by Dr. P.T. Abdul Rahman that integrates Quranic memorization with modern academic excellence",
              "founder": {
                "@type": "Person",
                "@id": "https://www.ptabdulrahman.com/#person"
              },
              "foundingDate": "2013",
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "India",
                  "addressRegion": "Kerala"
                }
              }
            }
          `}
        </script>

        {/* Structured Data - Books */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Book",
                  "position": 1,
                  "name": "Is the Creation Meaningless?",
                  "author": {
                    "@type": "Person",
                    "@id": "https://www.ptabdulrahman.com/#person"
                  },
                  "inLanguage": "English",
                  "datePublished": "1995"
                },
                {
                  "@type": "Book",
                  "position": 2,
                  "name": "Towards the Creator",
                  "author": {
                    "@type": "Person",
                    "@id": "https://www.ptabdulrahman.com/#person"
                  },
                  "inLanguage": "English"
                },
                {
                  "@type": "Book",
                  "position": 3,
                  "name": "The Address to Know How to Address",
                  "author": {
                    "@type": "Person",
                    "@id": "https://www.ptabdulrahman.com/#person"
                  },
                  "inLanguage": "English"
                }
              ]
            }
          `}
        </script>

        {/* Structured Data - News Articles */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "NewsArticle",
                  "position": 1,
                  "headline": "Book presents Islamic view on creation",
                  "url": "https://www.khaleejtimes.com/uae/book-presents-islamic-view-on-creation",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Khaleej Times"
                  },
                  "about": {
                    "@type": "Person",
                    "@id": "https://www.ptabdulrahman.com/#person"
                  }
                },
                {
                  "@type": "NewsArticle",
                  "position": 2,
                  "headline": "Islamic centre to launch scheme for Indian expats",
                  "url": "https://gulfnews.com/uae/islamic-centre-to-launch-scheme-for-indian-expats-1.424474",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Gulf News"
                  },
                  "about": {
                    "@type": "Person",
                    "@id": "https://www.ptabdulrahman.com/#person"
                  }
                },
                {
                  "@type": "NewsArticle",
                  "position": 3,
                  "headline": "DIIC to hold free medical camp in Ajman",
                  "url": "https://www.khaleejtimes.com/uae/diic-to-hold-free-medical-camp-in-ajman",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Khaleej Times"
                  },
                  "about": {
                    "@type": "Person",
                    "@id": "https://www.ptabdulrahman.com/#person"
                  }
                },
                {
                  "@type": "NewsArticle",
                  "position": 4,
                  "headline": "8th Inter-School Quran and Educational Competition in Dubai",
                  "url": "https://iqna.ir/en/news/1925695/8th-inter-school-quran-and-educational-competition-in-dubai-",
                  "publisher": {
                    "@type": "Organization",
                    "name": "IQNA"
                  },
                  "about": {
                    "@type": "Person",
                    "@id": "https://www.ptabdulrahman.com/#person"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      <PreLoader />
      <Navbar />
      <Hero />
      
      <motion.div 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-golden-50 text-golden-700 mb-6">
              <span className="text-sm font-medium">Explore the Visual Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-royal-800 mb-6 font-playfair">Discover Dr. P.T. Abdul Rahman's Impact Through Images</h2>
            <p className="text-gray-600 mb-10">Browse through our comprehensive photo gallery showcasing moments from humanitarian work, DQAA activities, and more.</p>
            
            <Button asChild className="bg-gradient-to-r from-golden-500 to-golden-600 hover:from-golden-600 hover:to-golden-700 text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300">
              <Link to="/gallery" className="inline-flex items-center justify-center">
                View Photo Gallery
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
      
      <Biography />
      <Timeline />
      <DQAA />
      <DQAAAdmission />
      <Books />
      <Humanitarian />
      <Awards />
      <MediaFeatures />
      <DQAADonate />
      <Legacy />
      <Footer />
    </div>
  );
};

export default Index;
