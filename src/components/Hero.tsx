import { ArrowDownIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: `url('/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png')`,
      transform: `translateY(${scrollPosition * 0.15}px)`,
      transition: 'transform 0.1s ease-out'
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/90 via-royal-800/80 to-royal-700/70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8 animate-fade-in opacity-0" style={{
        animationDelay: '0.1s'
      }}>
          <img src="/lovable-uploads/fec01a1d-0c0c-4e56-9f6d-86a55967f5b0.png" alt="Dr. P.T. Abdul Rahman - Islamic Scholar UAE Logo" className="h-24 md:h-28 mx-auto" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-playfair animate-fade-in opacity-0" style={{
        animationDelay: '0.3s'
      }}>
          Dr. P.T. Abdul Rahman
        </h1>
        
        <h2 className="text-xl md:text-2xl text-golden-300 mb-10 tracking-wide animate-fade-in opacity-0" style={{
        animationDelay: '0.5s'
      }}>Educator | Humanitarian | Veteran in Legal Affairs | Author</h2>
        
        <div className="max-w-3xl mx-auto mb-14 animate-fade-in opacity-0" style={{
        animationDelay: '0.7s'
      }}>
          <p className="text-white/90 text-lg md:text-xl font-light">PT Abdul Rahman is a visionary leader in education, humanitarian service, and Islamic thought. Hailing from Kerala, India, and shaped by a lineage of Islamic scholarship, he has dedicated over three decades to community upliftment, interfaith harmony, and academic excellence. With an MA in Sociology from the University of Mysore and multilingual fluency in Arabic, English, Hindi, Malayalam, Urdu, and Tamil, he has served as a bridge between diverse communities in India and the UAE.</p>
        </div>

        <div className="animate-fade-in opacity-0" style={{
        animationDelay: '0.9s'
      }}>
          <SocialLinks />
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#biography" className="text-golden-300 hover:text-golden-200 transition-colors duration-300" aria-label="Learn more about Dr. P.T. Abdul Rahman">
            <ArrowDownIcon size={36} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;