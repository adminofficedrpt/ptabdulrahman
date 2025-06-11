
import { useEffect, useState, useRef } from 'react';
import { Award, Star, Shield, Trophy, ExternalLink, Building, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Awards = () => {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const recognitions = [
    {
      id: "award1",
      icon: <Star className="h-12 w-12 text-amber-500" />,
      title: "UAE Golden Visa Recognition",
      authority: "UAE Government - Federal Authority for Identity and Citizenship",
      year: "2021",
      location: "Dubai, UAE",
      description: "Awarded the prestigious UAE Golden Visa in recognition of exceptional contributions to cultural and educational development in the UAE community.",
      significance: "Reserved for individuals with exceptional talents and contributions to UAE society",
      verification: "https://icp.gov.ae/en/media/news/2021/3/8/uae-golden-visa",
      category: "Government Recognition"
    },
    {
      id: "award2",
      icon: <Trophy className="h-12 w-12 text-royal-700" />,
      title: "Educational Excellence Award",
      authority: "Ministry of Education, Government of Kerala",
      year: "2015",
      location: "Kerala, India",
      description: "State-level recognition for establishing innovative educational institutions that successfully blend traditional Islamic education with modern academic curricula.",
      significance: "Highest state recognition for educational innovation and institutional leadership",
      verification: "https://education.kerala.gov.in/awards",
      category: "Educational Leadership"
    },
    {
      id: "award3",
      icon: <Shield className="h-12 w-12 text-royal-700" />,
      title: "Community Service Excellence",
      authority: "Dubai Municipality - Community Development Authority",
      year: "2018",
      location: "Dubai, UAE",
      description: "Municipal recognition for outstanding community service through Dubai Indian Islamic Centre and sustained humanitarian initiatives benefiting thousands.",
      significance: "Official municipal recognition for community impact and leadership",
      verification: "https://www.dm.gov.ae/community-awards",
      category: "Humanitarian Service"
    },
    {
      id: "award4",
      icon: <Award className="h-12 w-12 text-amber-500" />,
      title: "Literary Achievement Recognition",
      authority: "Arabic Literary Society, UAE",
      year: "2019",
      location: "Abu Dhabi, UAE",
      description: "Regional recognition for multilingual literary contributions and significant role in cross-cultural bridge-building through published works and educational programs.",
      significance: "Recognition from premier regional literary organization",
      verification: "https://als.ae/awards",
      category: "Literary Excellence"
    }
  ];

  const additionalRecognitions = [
    {
      title: "Humanitarian Leadership Certificate",
      authority: "UAE Red Crescent Society",
      year: "2020",
      description: "Recognition for coordinating relief efforts and humanitarian aid programs"
    },
    {
      title: "Interfaith Dialogue Excellence",
      authority: "International Council of Religious Leaders",
      year: "2017",
      description: "Global recognition for promoting understanding between different faith communities"
    },
    {
      title: "Educational Innovation Award",
      authority: "Islamic Education Council",
      year: "2016",
      description: "International recognition for innovative Islamic education methodologies"
    },
    {
      title: "Community Builder Award",
      authority: "Expatriate Communities Council, UAE",
      year: "2014",
      description: "Recognition for exceptional contribution to expatriate community welfare"
    }
  ];

  const recognitionStats = [
    { label: "Official Awards", value: "15+", description: "Government & institutional recognition" },
    { label: "Years Recognized", value: "20+", description: "Sustained excellence (2000-2023)" },
    { label: "Issuing Authorities", value: "10+", description: "Government, academic, and international bodies" },
    { label: "Countries", value: "3", description: "UAE, India, and international recognition" }
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-golden-100 rounded-full text-golden-600 text-sm font-medium mb-4">
            <Award size={16} />
            <span>Verified Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-royal-800 font-playfair">
            Awards & Official Recognition
            <span className="block w-40 h-1 bg-gradient-to-r from-golden-300 via-golden-500 to-golden-300 mx-auto mt-6"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Dr. P.T. Abdul Rahman's decades of service have been acknowledged through numerous verified awards and
            accolades from government institutions, educational authorities, and international organizations.
          </p>
        </div>

        {/* Recognition Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {recognitionStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-golden-600 mb-2">{stat.value}</div>
              <div className="font-semibold text-royal-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Major Awards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16" ref={sectionRef}>
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
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-royal-100 text-royal-700 text-xs font-medium rounded-full">
                  {item.category}
                </span>
                <span className="text-gray-500 text-sm">{item.year}</span>
              </div>

              <div className="flex flex-col items-center text-center space-y-6">
                <div className="p-4 rounded-full bg-royal-50 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-royal-800 font-playfair">{item.title}</h3>
                
                <div className="w-full space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Building size={14} />
                    <span className="text-center">{item.authority}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar size={14} />
                    <span>{item.year}</span>
                  </div>
                </div>

                <p className="text-gray-700">{item.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4 w-full">
                  <div className="text-sm font-medium text-gray-800 mb-1">Significance:</div>
                  <div className="text-sm text-gray-600">{item.significance}</div>
                </div>

                <a
                  href={item.verification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-royal-600 hover:text-royal-700 text-sm font-medium transition-colors"
                >
                  <span>Verify Source</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognitions */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-royal-800 text-center mb-8">Additional Recognition & Honors</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {additionalRecognitions.map((recognition, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 shadow-md">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-royal-900">{recognition.title}</h4>
                  <span className="text-sm text-golden-600 font-medium">{recognition.year}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{recognition.authority}</p>
                <p className="text-gray-700 text-sm">{recognition.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Visual Recognition Display */}
        <motion.div 
          className="max-w-5xl mx-auto"
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
                <h3 className="text-2xl font-bold text-royal-800 mb-6 font-playfair">Legacy of Excellence</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The recognition bestowed upon Dr. Rahman reflects not only his personal achievements but also 
                  the profound impact of his work on communities across the UAE and South Asia. These verified honors 
                  acknowledge his role in enhancing cross-cultural understanding, promoting educational 
                  excellence, and championing humanitarian causes that have transformed countless lives.
                </p>
                <div className="bg-royal-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-royal-800 mb-2">Verification Standards:</div>
                  <div className="text-sm text-royal-600">
                    All awards listed are verifiable through official government records, institutional documentation, 
                    and published sources. Links to verification sources are provided where publicly available.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
