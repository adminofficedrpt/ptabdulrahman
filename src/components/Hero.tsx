
import { ArrowDownIcon } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('/lovable-uploads/dca07fdf-4089-4256-81d5-5c6ff3a39e6b.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/80 via-royal-800/70 to-royal-700/60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/bdaaf13f-2912-4e1d-b6d7-eb5852916364.png" 
            alt="Dr. P.T. Abdul Rahman Logo" 
            className="h-20 md:h-24 mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Dr. P.T. Abdul Rahman
        </h1>
        
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          Visionary Leader | Humanitarian | Author | Educator
        </h2>
        
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <p className="text-white/90 text-lg">
            Dedicated humanitarian & legal expert. Progressing education & community upliftment. 
            Prolific author, insightful columnist, humbly devoted to Allah.
          </p>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <SocialLinks />
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#biography" className="text-white/70 hover:text-white transition-colors" aria-label="Scroll down">
            <ArrowDownIcon size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
