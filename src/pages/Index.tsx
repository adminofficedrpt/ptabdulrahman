import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import PreLoader from '@/components/PreLoader';
import HeroEnhanced from '@/components/HeroEnhanced';
import About from '@/components/About';
import Work from '@/components/Work';
import MediaHighlights from '@/components/MediaHighlights';
import Contact from '@/components/Contact';
import FooterModern from '@/components/FooterModern';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '@/components/SectionHeading';

// These components will be loaded conditionally based on user navigation
import Timeline from '@/components/Timeline';
import Books from '@/components/Books';
import Humanitarian from '@/components/Humanitarian';
import Awards from '@/components/Awards';
import Legacy from '@/components/Legacy';
import DQAA from '@/components/DQAA';
import DQAAAdmission from '@/components/DQAAAdmission';
import DQAADonate from '@/components/DQAADonate';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  // References for scroll animations
  const mainRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({ target: mainRef });
  
  // InView hooks for section animations
  const [aboutRef, aboutInView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [workRef, workInView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [mediaRef, mediaInView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.25, triggerOnce: true });
  
  useEffect(() => {
    // Detect hash from URL for direct section navigation
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      // Smooth scroll to the section after a brief delay
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
    
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
    
    // Setup intersection observer for section detection
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setActiveSection(id);
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Create scroll-based animations
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.95]);

  // Conditionally render detailed section components based on navigation/hash
  const renderConditionalSection = () => {
    switch(activeSection) {
      case 'timeline':
        return <Timeline />;
      case 'books':
        return <Books />;
      case 'humanitarian':
        return <Humanitarian />;
      case 'awards':
        return <Awards />;
      case 'legacy':
        return <Legacy />;
      case 'dqaa':
        return <DQAA />;
      case 'admission':
        return <DQAAAdmission />;
      case 'donate':
        return <DQAADonate />;
      default:
        return null;
    }
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen" ref={mainRef}>
      <Helmet>
        <title>Dr. P.T. Abdul Rahman - Islamic Scholar, Educator & Humanitarian</title>
        <meta name="description" content="Dr. P.T. Abdul Rahman is a distinguished Islamic scholar in UAE, humanitarian in Dubai, author, and Founder Chairman of Darul Quran Abdulla Academy (DQAA)." />
        <meta name="keywords" content="PT Abdul Rahman, Dr PT Abdul Rahman, Islamic scholar UAE, Founder of Darul Quran Abdulla Academy, Indian humanitarian in Dubai, Malayali scholar in UAE, Author of Is the Creation Meaningless, DQAA Kerala, Hafiz program India, Islamic boarding school Kerala, Quran memorization school, Insight Group founder, Dubai Indian Islamic Centre founder, Humanitarian work UAE" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.ptabdulrahman.com/" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dr. P.T. Abdul Rahman" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.ptabdulrahman.com/" />
        <meta property="og:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar, Educator & Humanitarian" />
        <meta property="og:description" content="Distinguished Islamic scholar in UAE, Indian humanitarian in Dubai, and founder of Darul Quran Abdulla Academy (DQAA)." />
        <meta property="og:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. P.T. Abdul Rahman - Islamic Scholar UAE" />
        <meta name="twitter:description" content="Distinguished Islamic scholar, Malayali humanitarian in Dubai, author of 'Is the Creation Meaningless?', and founder of Darul Quran Abdulla Academy." />
        <meta name="twitter:image" content="https://www.ptabdulrahman.com/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        
        {/* Schema markup - kept and expanded for SEO */}
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
      
      {isLoading && <PreLoader />}
      
      {/* Enhanced Hero Section */}
      <motion.div style={{ opacity, scale }}>
        <HeroEnhanced />
      </motion.div>
      
      {/* About Section with Animation */}
      <motion.div 
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20"
        id="biography"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Biography" 
            subtitle="A lifetime dedicated to education, faith, and humanitarian service"
          />
          <About />
        </div>
      </motion.div>
      
      {/* Work Section with Animation */}
      <motion.div 
        ref={workRef}
        initial="hidden"
        animate={workInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-50"
        id="work"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Professional Journey" 
            subtitle="Decades of leadership, scholarship, and community impact"
          />
          <Work />
        </div>
      </motion.div>
      
      {/* Conditional Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {renderConditionalSection()}
        </div>
      </div>
      
      {/* Media Highlights with Animation */}
      <motion.div 
        ref={mediaRef}
        initial="hidden"
        animate={mediaInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-50"
        id="media"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Media Highlights" 
            subtitle="Recognition and features across prestigious publications"
          />
          <MediaHighlights />
        </div>
      </motion.div>
      
      {/* Contact Section with Animation */}
      <motion.div 
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20"
        id="contact"
      >
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Reach out for collaborations, speaking engagements, or inquiries"
          />
          <Contact />
        </div>
      </motion.div>
      
      {/* Modern Footer */}
      <FooterModern />
    </div>
  );
};

export default Index;
