
import { ArrowDownIcon } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-royal-900/90 via-royal-800/80 to-royal-700/70"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/5d0ee704-bb81-4964-888b-60af01b062bb.png" 
            alt="Dr. P.T. Abdul Rahman Logo" 
            className="h-24 md:h-28 mx-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Dr. P.T. Abdul Rahman
        </h1>
        
        <h2 className="text-xl md:text-2xl text-golden-300 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
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
          <a href="#biography" className="text-golden-300 hover:text-golden-200 transition-colors" aria-label="Scroll down">
            <ArrowDownIcon size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
