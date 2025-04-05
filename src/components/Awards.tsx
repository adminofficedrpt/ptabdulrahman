
import { useEffect, useState, useRef } from 'react';
import { Award, Star, Shield } from 'lucide-react';

const Awards = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const recognitions = [
    {
      id: "award1",
      icon: <Award className="h-10 w-10 text-royal-700" />,
      title: "UAE Leadership Commendations",
      description: "Letters of commendation from multiple UAE leaders and institutions recognizing exceptional contributions to society and cultural exchange."
    },
    {
      id: "award2",
      icon: <Star className="h-10 w-10 text-amber-500" />,
      title: "Golden Visa",
      description: "Awarded the prestigious UAE Golden Visa in recognition of his creative cultural contributions and lasting impact on society."
    },
    {
      id: "award3",
      icon: <Shield className="h-10 w-10 text-royal-700" />,
      title: "Certificates of Honor",
      description: "Received numerous certificates of honor for humanitarian efforts, educational initiatives, and interfaith dialogue contributions."
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

    const elements = document.querySelectorAll('.award-item');
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
    <section id="awards" className="py-24 bg-gradient-to-br from-royal-50 to-royal-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold islamic-border mb-12">Awards & Recognition</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. P.T. Abdul Rahman's decades of service have been acknowledged through numerous awards and
            accolades from government institutions, community organizations, and international bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" ref={sectionRef}>
          {recognitions.map((item, index) => (
            <div 
              key={item.id}
              id={item.id}
              className={`award-item bg-white rounded-lg shadow-lg p-8 border border-gray-100 ${
                visibleItems.includes(item.id) ? 'animate-fade-in opacity-0' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-royal-50">{item.icon}</div>
                <h3 className="text-xl font-bold text-royal-800">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png" 
                  alt="Dr. P.T. Abdul Rahman receiving recognition" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-royal-800 mb-4">Acknowledgment of Excellence</h3>
                <p className="text-gray-700">
                  The recognition bestowed upon Dr. Rahman reflects not only his personal achievements but also 
                  the profound impact of his work on communities across the UAE and South Asia. These honors 
                  acknowledge his role in enhancing cross-cultural understanding, promoting educational 
                  excellence, and championing humanitarian causes that have transformed countless lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
