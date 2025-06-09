
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, GraduationCap, Heart, Globe, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';

const TransformedLivesShowcase = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      category: 'Educational Excellence',
      icon: GraduationCap,
      title: 'From Village Student to International Champion',
      name: 'Ahmed Hassan',
      age: 19,
      location: 'Malappuram, Kerala → Dubai, UAE',
      background: 'Son of a daily wage laborer, Ahmed struggled with basic education in his village school.',
      challenge: 'Limited resources, language barriers, and lack of quality educational guidance threatened his academic future.',
      intervention: 'Enrolled in DQAA Academy with full scholarship, received personalized mentoring and comprehensive support.',
      transformation: 'Ahmed won the Dubai International Holy Quran Award 2023, representing India on the global stage.',
      impact: 'Now studying engineering at a prestigious university while teaching Quran to younger students.',
      quote: 'Dr. Rahman didn\'t just change my education; he transformed my entire family\'s future.',
      image: '/lovable-uploads/17b9319a-ac20-4df2-b3d8-1b600b003036.png',
      metrics: {
        academicImprovement: '95%',
        scholarshipValue: '₹12 Lakhs',
        studentsInspired: '200+'
      }
    },
    {
      id: 2,
      category: 'Community Leadership',
      icon: Users,
      title: 'Building Bridges Across Cultures',
      name: 'Sarah Christina',
      age: 34,
      location: 'Dubai, UAE',
      background: 'Christian community leader struggling to create interfaith dialogue in a diverse neighborhood.',
      challenge: 'Religious misunderstandings and cultural barriers prevented community unity and cooperation.',
      intervention: 'Participated in Dr. Rahman\'s interfaith harmony programs and received mentorship in community building.',
      transformation: 'Established the Dubai Interfaith Council, bringing together 15 religious communities.',
      impact: 'Over 5,000 families now participate in regular interfaith cultural exchanges and community service.',
      quote: 'Dr. Rahman taught me that our differences are our strength, not our weakness.',
      image: '/lovable-uploads/37251c4b-0591-433c-bbce-ac4291fc7ddb.png',
      metrics: {
        communitiesUnited: '15',
        familiesImpacted: '5,000+',
        eventsOrganized: '50+'
      }
    },
    {
      id: 3,
      category: 'Humanitarian Impact',
      icon: Heart,
      title: 'From Despair to Hope: A Family\'s Journey',
      name: 'Mohammad Ali Family',
      age: 'Family of 6',
      location: 'Kerala, India',
      background: 'Lost everything in floods, father unable to work due to injury, children forced to drop out of school.',
      challenge: 'Complete financial devastation, medical expenses, and children\'s education at risk.',
      intervention: 'Received comprehensive support through Dr. Rahman\'s humanitarian programs including medical aid, education sponsorship, and livelihood training.',
      transformation: 'Father recovered and started successful small business, all children back in school with full support.',
      impact: 'Family now helps other flood victims and has become community advocates for disaster preparedness.',
      quote: 'When we had lost everything, Dr. Rahman\'s programs gave us back our dignity and hope.',
      image: '/lovable-uploads/249ad82a-9bb5-4f8e-93f9-8f0b2dd4cad1.png',
      metrics: {
        medicalAidProvided: '₹3 Lakhs',
        childrenEducated: '4',
        familiesHelped: '150+'
      }
    },
    {
      id: 4,
      category: 'Global Outreach',
      icon: Globe,
      title: 'Educational Innovation Across Borders',
      name: 'Amina Khatoon',
      age: 28,
      location: 'London, UK',
      background: 'Young mother struggling to provide quality Islamic education to her children in a Western environment.',
      challenge: 'Balancing cultural identity with modern education, finding qualified teachers, and creating supportive community.',
      intervention: 'Connected with DQAA\'s international program, received curriculum guidance and teacher training.',
      transformation: 'Established the London Islamic Academy using DQAA\'s innovative educational model.',
      impact: 'Now serving 300+ students from 12 countries, with graduates excelling in both Islamic studies and modern academics.',
      quote: 'Dr. Rahman\'s vision showed us how to honor our heritage while embracing the future.',
      image: '/lovable-uploads/435e015e-cab6-4233-89f0-1f5ad4297257.png',
      metrics: {
        studentsServed: '300+',
        countriesRepresented: '12',
        teachersTrained: '25'
      }
    }
  ];

  const currentStory = caseStudies[currentCase];

  const handlePrevious = () => {
    setCurrentCase((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentCase((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const categoryColors = {
    'Educational Excellence': 'from-blue-500 to-blue-600',
    'Community Leadership': 'from-green-500 to-green-600',
    'Humanitarian Impact': 'from-red-500 to-red-600',
    'Global Outreach': 'from-purple-500 to-purple-600'
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-royal-50 to-golden-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
            Lives Transformed: Real Stories of Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Behind every statistic is a human story. These case studies showcase the profound, 
            lasting impact of Dr. Rahman's educational innovations and humanitarian programs 
            across communities worldwide.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Case Study Navigation */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setCurrentCase(index)}
                  className={`p-4 rounded-lg text-center transition-all duration-300 ${
                    currentCase === index
                      ? 'bg-white shadow-lg border-2 border-royal-200'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                >
                  <study.icon className={`w-8 h-8 mx-auto mb-2 ${
                    currentCase === index ? 'text-royal-600' : 'text-gray-500'
                  }`} />
                  <p className={`text-sm font-medium ${
                    currentCase === index ? 'text-royal-900' : 'text-gray-600'
                  }`}>
                    {study.category}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Main Case Study Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Story Content */}
                <div className="p-8 md:p-12">
                  <div className={`inline-block px-4 py-2 rounded-full text-white font-medium mb-6 bg-gradient-to-r ${categoryColors[currentStory.category]}`}>
                    {currentStory.category}
                  </div>

                  <h3 className="text-3xl font-playfair font-bold text-royal-900 mb-6">
                    {currentStory.title}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-royal-800 mb-2">Background</h4>
                      <p className="text-gray-700">{currentStory.background}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-royal-800 mb-2">Challenge</h4>
                      <p className="text-gray-700">{currentStory.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-royal-800 mb-2">Intervention</h4>
                      <p className="text-gray-700">{currentStory.intervention}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-royal-800 mb-2">Transformation</h4>
                      <p className="text-gray-700">{currentStory.transformation}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-royal-800 mb-2">Ongoing Impact</h4>
                      <p className="text-gray-700">{currentStory.impact}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-royal-50 to-golden-50 rounded-lg border-l-4 border-golden-500">
                    <Quote className="w-8 h-8 text-golden-500 mb-3" />
                    <p className="text-lg italic text-royal-800 mb-2">"{currentStory.quote}"</p>
                    <cite className="text-golden-600 font-medium">- {currentStory.name}</cite>
                  </div>

                  {/* Metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {Object.entries(currentStory.metrics).map(([key, value], index) => (
                      <div key={index} className="text-center p-4 bg-royal-50 rounded-lg">
                        <div className="text-2xl font-bold text-royal-900">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Content */}
                <div className="relative">
                  <img
                    src={currentStory.image}
                    alt={currentStory.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <h4 className="text-2xl font-bold mb-2">{currentStory.name}</h4>
                    <p className="text-lg opacity-90">{currentStory.location}</p>
                    <p className="text-sm opacity-75">Age: {currentStory.age}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-royal-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-royal-600" />
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentCase ? 'bg-royal-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-royal-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-royal-600" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-royal-600 to-golden-600 rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
              Your Story Could Be Next
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Whether you're seeking educational opportunities, community support, or ways to serve others, 
              Dr. Rahman's programs continue to transform lives every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-royal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Join DQAA Academy
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Support Our Mission
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformedLivesShowcase;
