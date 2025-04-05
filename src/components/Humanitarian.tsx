
import { Heart, Users, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Humanitarian = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const initiatives = [
    {
      id: "initiative1",
      icon: <Heart className="h-12 w-12 text-golden-600" />,
      title: "Repatriation Services",
      description: "Facilitated the dignified return of deceased expatriates to their families, providing crucial support during times of grief."
    },
    {
      id: "initiative2",
      icon: <Users className="h-12 w-12 text-golden-600" />,
      title: "Medical Outreach Programs",
      description: "Organized the first free medical camp in the UAE, providing healthcare support to thousands of low-income workers."
    },
    {
      id: "initiative3",
      icon: <Briefcase className="h-12 w-12 text-golden-600" />,
      title: "Educational Endowments",
      description: "Established scholarship programs to ensure access to quality education for underprivileged students across multiple regions."
    },
    {
      id: "initiative4",
      icon: <GraduationCap className="h-12 w-12 text-golden-600" />,
      title: "Prisoner Rehabilitation",
      description: "Implemented programs to provide legal aid and welfare support to incarcerated individuals and their families for reintegration."
    }
  ];

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

    const elements = document.querySelectorAll('.humanitarian-item');
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
    <section id="humanitarian" className="py-24 bg-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('/lovable-uploads/40bbf3ea-9c2c-4b7d-a391-c948fb701d74.png')` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12 text-royal-800">Humanitarian Efforts</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            PT Abdul Rahman has remained steadfast in his commitment to humanitarian service, 
            spearheading several impactful initiatives that have positively affected thousands of lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto" ref={sectionRef}>
          {initiatives.map((initiative, index) => (
            <div 
              key={initiative.id}
              id={initiative.id}
              className={`humanitarian-item rounded-lg bg-white shadow-lg p-8 border border-gray-100 hover:border-golden-300 transition-all duration-300 ${
                visibleItems.includes(initiative.id) ? 'animate-fade-in opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-golden-50">{initiative.icon}</div>
                <h3 className="text-xl font-bold text-royal-800">{initiative.title}</h3>
                <p className="text-gray-700">{initiative.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 italic">
            "His compassionate initiatives have not only addressed immediate needs but have created lasting systems of support for the most vulnerable among us."
          </p>
          <p className="mt-4 text-gray-500">— Community Leader</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png" 
              alt="Dr. Rahman receiving recognition" 
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/ff033cfa-8c52-470c-af76-d48b0136aabc.png" 
              alt="Dr. Rahman with UAE leaders" 
              className="w-full h-60 object-cover" 
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png" 
              alt="Dr. Rahman receiving honor" 
              className="w-full h-60 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humanitarian;
