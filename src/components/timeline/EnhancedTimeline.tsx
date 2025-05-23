
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Book, Users, Heart } from 'lucide-react';

const EnhancedTimeline = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);

  const milestones = [
    {
      year: '1970s',
      title: 'Early Life & Education',
      location: 'Kerala, India',
      icon: Book,
      description: 'Born and raised in Kerala, India, with a deep foundation in Islamic studies and traditional scholarship.',
      details: 'Received early Islamic education and showed exceptional aptitude for religious studies and community leadership.',
      image: '/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png'
    },
    {
      year: '1992',
      title: 'Migration to UAE',
      location: 'Dubai, UAE',
      icon: MapPin,
      description: 'Moved to the United Arab Emirates, beginning his journey of serving the expatriate community.',
      details: 'Established himself as a bridge between Indian and Emirati cultures, focusing on community development and religious guidance.',
      image: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png'
    },
    {
      year: '1995',
      title: 'First Major Publication',
      location: 'UAE',
      icon: Book,
      description: 'Published "Is the Creation Meaningless?" - a philosophical exploration of divine purpose.',
      details: 'This groundbreaking work was later translated into multiple languages and became influential in Islamic philosophical discourse globally.',
      image: '/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png'
    },
    {
      year: '2000s',
      title: 'Community Leadership',
      location: 'UAE',
      icon: Users,
      description: 'Founded Dubai Indian Islamic Centre, providing spiritual and social services to the community.',
      details: 'Established various programs including educational initiatives, healthcare support, and interfaith dialogue sessions.',
      image: '/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg'
    },
    {
      year: '2013',
      title: 'Educational Innovation',
      location: 'Kerala, India',
      icon: Award,
      description: 'Founded Darul Quran Abdulla Academy (DQAA), integrating traditional Islamic education with modern academics.',
      details: 'Pioneered a unique educational model that produces Hafiz students while maintaining high academic standards in conventional subjects.',
      image: '/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png'
    },
    {
      year: '2015-Present',
      title: 'Global Recognition',
      location: 'International',
      icon: Heart,
      description: 'Received numerous awards and recognitions for humanitarian work and educational contributions.',
      details: 'Continues to influence Islamic education globally while maintaining active involvement in community development across UAE and India.',
      image: '/lovable-uploads/02a7f6e7-40d5-49af-ad68-279b52a2688a.png'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-royal-800 mb-6 font-playfair">
            Journey of Service & Impact
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A timeline of dedication, innovation, and transformative contributions spanning over three decades
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-golden-300 to-royal-300 rounded-full hidden lg:block"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-inherit mb-8 lg:mb-0`}>
                  <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                      <div className="bg-gradient-to-br from-golden-100 to-royal-100 p-3 rounded-full mr-3">
                        <milestone.icon className="h-6 w-6 text-royal-700" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-royal-800 font-playfair">{milestone.title}</h3>
                        <div className="flex items-center text-golden-600 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {milestone.year}
                          <MapPin className="h-4 w-4 ml-3 mr-1" />
                          {milestone.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{milestone.description}</p>
                    
                    <button
                      onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
                      className="text-royal-600 hover:text-royal-800 font-medium transition-colors"
                    >
                      {selectedMilestone === index ? 'Show Less' : 'Learn More'}
                    </button>
                    
                    {selectedMilestone === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-200"
                      >
                        <p className="text-gray-600 leading-relaxed">{milestone.details}</p>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0 w-6 h-6 hidden lg:block">
                  <div className="absolute inset-0 bg-golden-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute inset-1 bg-royal-600 rounded-full"></div>
                </div>

                {/* Image */}
                <div className="lg:w-5/12 w-full">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-3xl font-bold">{milestone.year}</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTimeline;
