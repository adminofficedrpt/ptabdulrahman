
import { useEffect, useState, useRef } from 'react';
import { Award, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Awards = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const recognitions = [
    {
      id: "award1",
      icon: <Award className="h-12 w-12 text-royal-700" />,
      title: "UAE Leadership Commendations",
      description: "Letters of commendation from multiple UAE leaders and institutions recognizing exceptional contributions to society and cultural exchange."
    },
    {
      id: "award2",
      icon: <Star className="h-12 w-12 text-amber-500" />,
      title: "Golden Visa",
      description: "Awarded the prestigious UAE Golden Visa in recognition of his creative cultural contributions and lasting impact on society."
    },
    {
      id: "award3",
      icon: <Shield className="h-12 w-12 text-royal-700" />,
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
    <section id="awards" className="py-32 bg-gradient-to-br from-royal-50 to-royal-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-royal-800 font-playfair">
            Awards & Recognition
            <span className="block w-40 h-1 bg-gradient-to-r from-golden-300 via-golden-500 to-golden-300 mx-auto mt-6"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. P.T. Abdul Rahman's decades of service have been acknowledged through numerous awards and
            accolades from government institutions, community organizations, and international bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto" ref={sectionRef}>
          {recognitions.map((item, index) => (
            <motion.div 
              key={item.id}
              id={item.id}
              className="award-item bg-white rounded-xl shadow-xl p-10 border border-gray-100 overflow-hidden relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={visibleItems.includes(item.id) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-golden-300 to-golden-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 rounded-full bg-royal-50 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-royal-800 font-playfair">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white rounded-xl shadow-xl p-10 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png" 
                  alt="Dr. P.T. Abdul Rahman receiving recognition" 
                  className="w-full h-auto rounded-lg shadow-md transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-royal-800 mb-6 font-playfair">Acknowledgment of Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  The recognition bestowed upon Dr. Rahman reflects not only his personal achievements but also 
                  the profound impact of his work on communities across the UAE and South Asia. These honors 
                  acknowledge his role in enhancing cross-cultural understanding, promoting educational 
                  excellence, and championing humanitarian causes that have transformed countless lives.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
