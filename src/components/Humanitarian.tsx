
import { Heart, Users, Briefcase, GraduationCap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const Humanitarian = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const initiatives = [
    {
      id: "initiative1",
      icon: <Heart className="h-12 w-12 text-royal-700" />,
      title: "Free Medical Camps",
      description: "Pioneered free healthcare services in the UAE, providing essential medical care to thousands of expatriates without access to healthcare."
    },
    {
      id: "initiative2",
      icon: <Users className="h-12 w-12 text-royal-700" />,
      title: "Prisoner Welfare",
      description: "Established legal aid and reintegration programs for prisoners, helping them navigate legal challenges and reestablish their lives after release."
    },
    {
      id: "initiative3",
      icon: <Briefcase className="h-12 w-12 text-royal-700" />,
      title: "Repatriation Services",
      description: "Created a specialized team for managing death cases, including Janaza procedures, burial arrangements, and repatriation of remains to families."
    },
    {
      id: "initiative4",
      icon: <GraduationCap className="h-12 w-12 text-royal-700" />,
      title: "Educational Scholarships",
      description: "Funded numerous scholarships for underprivileged students, enabling them to pursue quality education and build brighter futures."
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
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12">Humanitarian Efforts</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Throughout his career, Dr. P.T. Abdul Rahman has spearheaded numerous humanitarian initiatives 
            that have positively impacted thousands of lives across the UAE and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto" ref={sectionRef}>
          {initiatives.map((initiative, index) => (
            <div 
              key={initiative.id}
              id={initiative.id}
              className={`humanitarian-item rounded-lg bg-white shadow-lg p-8 border border-gray-100 ${
                visibleItems.includes(initiative.id) ? 'animate-fade-in opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-royal-100">{initiative.icon}</div>
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
      </div>
    </section>
  );
};

export default Humanitarian;
