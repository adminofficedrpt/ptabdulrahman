
import { useEffect, useState, useRef } from 'react';
import { BookOpen, Heart, Users, Lightbulb } from 'lucide-react';

const Legacy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const legacyPillars = [
    {
      icon: <BookOpen className="h-8 w-8 text-royal-700" />,
      title: "Educational Vision",
      description: "Establishing institutions that provide quality education with spiritual grounding."
    },
    {
      icon: <Heart className="h-8 w-8 text-royal-700" />,
      title: "Humanitarian Spirit",
      description: "Creating sustainable systems for community support and individual empowerment."
    },
    {
      icon: <Users className="h-8 w-8 text-royal-700" />,
      title: "Interfaith Unity",
      description: "Building bridges between diverse communities through dialogue and mutual respect."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-royal-700" />,
      title: "Intellectual Leadership",
      description: "Advancing scholarship that addresses contemporary challenges with timeless wisdom."
    }
  ];

  return (
    <section id="legacy" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12">Legacy Statement</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-royal-700 to-royal-900 rounded-lg shadow-lg p-10 text-white ${isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'}`}>
            <h3 className="text-2xl font-playfair font-bold mb-6 text-center">A Living Legacy of Service</h3>
            <p className="text-lg mb-8 leading-relaxed">
              Dr. P.T. Abdul Rahman's legacy transcends the institutions he has founded and the positions he has held. 
              It lives in the thousands of students who have received education through his initiatives, in the families 
              who have found support in times of crisis, and in the bridges built between different cultures and faiths. 
              His life's work demonstrates how intellectual leadership, when combined with compassionate action, can 
              elevate entire communities and inspire generations to come.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              As he continues his journey of service, Dr. Rahman's vision of a more educated, compassionate, and 
              interconnected world serves as both a blueprint and an inspiration for future leaders committed to 
              positive social change and human development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {legacyPillars.map((pillar, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 border border-gray-100 ${isVisible ? 'animate-fade-in opacity-0' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-royal-50">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-royal-800">{pillar.title}</h4>
                    <p className="text-gray-700 mt-2">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
