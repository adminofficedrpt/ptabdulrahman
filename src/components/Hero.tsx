
import { ArrowDownIcon } from 'lucide-react';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen hero-pattern flex items-center justify-center">
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          Dr. P.T. Abdul Rahman
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          Visionary Leader | Humanitarian | Author | Educator
        </h2>
        
        <div className="max-w-lg mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <p className="text-white/80 text-lg">
            Dedicated to elevating education, humanitarian service, and spiritual guidance through decades of impactful work spanning the Middle East and South Asia.
          </p>
        </div>

        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <SocialLinks />
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#biography" className="text-white/70 hover:text-white transition-colors">
            <ArrowDownIcon size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
