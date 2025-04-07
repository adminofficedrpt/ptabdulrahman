
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

    // Update SEO meta tags
    updateSEOMetaTags();
  }, []);

  const updateSEOMetaTags = () => {
    // Update title
    document.title = "Dr. P.T. Abdul Rahman - Visionary Leader | Humanitarian | Author | Educator | DQAA Founder Chairman";
    
    // Update description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Official website of Dr. P.T. Abdul Rahman, a distinguished scholar, visionary leader, humanitarian, ' +
        'and Founder Chairman of Darul Quran Abdulla Academy (DQAA), whose influence spans continents.');
    }

    // Update keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 
      'PT Abdul Rahman, Dr PT Abdul Rahman, PT Abdul Rahman author, PT Abdul Rahman humanitarian, ' +
      'PT Abdul Rahman educator, Darul Quran Abdulla Academy, DQAA Kerala, Hafiz program India, ' +
      'Islamic boarding school Kerala, Quran memorization school, Insight Group founder, ' +
      'Dubai Indian Islamic Centre founder, Humanitarian work UAE, Islamic scholar');

    // Update OG tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="og:${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', `og:${property}`);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };

    updateOGTag('title', 'Dr. P.T. Abdul Rahman - Visionary Leader & DQAA Founder');
    updateOGTag('description', 'Distinguished scholar, visionary leader, humanitarian, and founder of Darul Quran Abdulla Academy.');
    updateOGTag('url', 'https://www.ptabdulrahman.com/');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
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
