
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
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Biography />
      <Timeline />
      <Books />
      <Humanitarian />
      <Awards />
      <MediaFeatures />
      <Legacy />
      <Footer />
    </div>
  );
};

export default Index;
