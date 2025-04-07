
import { Scroll, GraduationCap, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const DQAA = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll('.dqaa-item');
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
    <section id="dqaa" className="py-24 bg-royal-50 relative overflow-hidden islamic-pattern">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">Darul Quran Abdulla Academy (DQAA)</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Established by Dr. PT Abdul Rahman as Founder Chairman in 2013, DQAA represents the culmination of a vision 
            for holistic Islamic education that seamlessly integrates Quranic memorization with modern academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <div className="absolute -bottom-3 -right-3 w-64 h-64 bg-golden-100 rounded-lg"></div>
            <img 
              src="/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png" 
              alt="Darul Quran Abdulla Academy" 
              className="relative z-10 w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-2xl font-bold text-royal-800">Founder's Vision</h3>
              <p className="text-gray-700 mt-2">
                As Founder Chairman, Dr. PT Abdul Rahman established DQAA with a clear mission: to nurture future generations 
                grounded in faith, equipped with knowledge, and guided by strong moral character. The academy stands as a testament 
                to his commitment to educational excellence that honors Islamic traditions while preparing students for modern challenges.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-royal-800">Integrated Education</h3>
              <p className="text-gray-700 mt-2">
                DQAA offers a unique educational model that blends authentic Hifz training with robust academic schooling. 
                Students not only memorize the Holy Quran but also receive comprehensive education that ensures they are prepared 
                for further academic and professional pursuits.
              </p>
            </div>

            <Button asChild className="bg-golden-600 hover:bg-golden-700 text-white mt-4">
              <a href="#admission">Learn About Admission</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div 
            id="dqaa-feature-1"
            className={`dqaa-item rounded-lg bg-white shadow-lg p-8 border border-gray-100 hover:border-golden-300 transition-all duration-300 ${
              visibleItems.includes('dqaa-feature-1') ? 'animate-fade-in opacity-0' : 'opacity-0'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-golden-50">
                <Scroll className="h-10 w-10 text-golden-600" />
              </div>
              <h3 className="text-xl font-bold text-royal-800">Quranic Excellence</h3>
              <p className="text-gray-700">
                Dedicated Tahfeez program with expert instructors guiding students through memorization of the Holy Quran with proper tajweed.
              </p>
            </div>
          </div>

          <div 
            id="dqaa-feature-2"
            className={`dqaa-item rounded-lg bg-white shadow-lg p-8 border border-gray-100 hover:border-golden-300 transition-all duration-300 ${
              visibleItems.includes('dqaa-feature-2') ? 'animate-fade-in opacity-0' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-golden-50">
                <GraduationCap className="h-10 w-10 text-golden-600" />
              </div>
              <h3 className="text-xl font-bold text-royal-800">Academic Success</h3>
              <p className="text-gray-700">
                Integrated academic curriculum ensuring students excel in both religious studies and modern subjects.
              </p>
            </div>
          </div>

          <div 
            id="dqaa-feature-3"
            className={`dqaa-item rounded-lg bg-white shadow-lg p-8 border border-gray-100 hover:border-golden-300 transition-all duration-300 ${
              visibleItems.includes('dqaa-feature-3') ? 'animate-fade-in opacity-0' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-golden-50">
                <Heart className="h-10 w-10 text-golden-600" />
              </div>
              <h3 className="text-xl font-bold text-royal-800">Character Development</h3>
              <p className="text-gray-700">
                Holistic education focused on developing moral character, leadership skills, and community service values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DQAA;
