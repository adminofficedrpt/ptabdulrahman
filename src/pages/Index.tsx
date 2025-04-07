
import { useEffect } from 'react';
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
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Smooth scroll functionality for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Add meta tags for mobile optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Add touch icons for iOS
    const linkIcon = document.createElement('link');
    linkIcon.rel = 'apple-touch-icon';
    linkIcon.href = '/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png';
    document.getElementsByTagName('head')[0].appendChild(linkIcon);

    // Initialize animation observers
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-from-left, .slide-from-right, .scale-in').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Dr. P.T. Abdul Rahman - Visionary Leader | Humanitarian | Author | Educator | DQAA Founder Chairman</title>
        <meta name="description" content="Dr. P.T. Abdul Rahman is a distinguished scholar, visionary leader, humanitarian, and Founder Chairman of Darul Quran Abdulla Academy (DQAA), whose influence spans continents through education, philanthropy, and literature." />
        <meta name="keywords" content="PT Abdul Rahman, Dr PT Abdul Rahman, PT Abdul Rahman author, PT Abdul Rahman humanitarian, PT Abdul Rahman educator, Darul Quran Abdulla Academy, DQAA Kerala, Hafiz program India, Islamic boarding school Kerala, Quran memorization school, Insight Group founder, Dubai Indian Islamic Centre founder, Humanitarian work UAE, Islamic scholar" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dr. P.T. Abdul Rahman - Visionary Leader & DQAA Founder" />
        <meta property="og:description" content="Distinguished scholar, visionary leader, humanitarian, and founder of Darul Quran Abdulla Academy (DQAA)." />
        <meta property="og:url" content="https://www.ptabdulrahman.com/" />
        <meta property="og:image" content="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. P.T. Abdul Rahman" />
        <meta name="twitter:description" content="Distinguished scholar, visionary leader, humanitarian, and founder of Darul Quran Abdulla Academy (DQAA)." />
        <meta name="twitter:image" content="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.ptabdulrahman.com/" />
      </Helmet>
      
      <Navbar />
      <Hero />
      
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-golden-50 text-golden-700 mb-6">
              <span className="text-sm font-medium">Explore the Visual Journey</span>
            </div>
            <h2 className="text-3xl font-bold text-royal-800 mb-4">Discover Dr. P.T. Abdul Rahman's Impact Through Images</h2>
            <p className="text-gray-600 mb-8">Browse through our comprehensive photo gallery showcasing moments from humanitarian work, DQAA activities, and more.</p>
            <Link 
              to="/gallery" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-golden-600 hover:bg-golden-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
            >
              View Photo Gallery
            </Link>
          </div>
        </div>
      </div>
      
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
