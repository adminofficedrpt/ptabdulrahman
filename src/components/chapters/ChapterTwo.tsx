
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Heart, Handshake, Building, Users2, Award, Globe } from 'lucide-react';

const ChapterTwo: React.FC = () => {
  const serviceJourney = [
    {
      icon: Heart,
      title: "Humanitarian Leadership",
      description: "Throughout my career, I have prioritized addressing community needs through systematic humanitarian initiatives. From legal aid for prisoners to healthcare camps, each program was designed to create lasting positive impact on vulnerable populations.",
      impact: "Thousands of families supported"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description: "Building effective alliances with government entities, educational institutions, and community organizations has been central to scaling our humanitarian efforts. These partnerships have multiplied our capacity to serve communities across UAE and India.",
      impact: "Multi-sector collaboration expertise"
    },
    {
      icon: Building,
      title: "Institutional Development",
      description: "Establishing sustainable institutions like the Indian Islamic Center Dubai and DQAA was about creating frameworks for long-term community development. These institutions continue to serve thousands while maintaining operational excellence.",
      impact: "Self-sustaining community infrastructure"
    },
    {
      icon: Users2,
      title: "Leadership Development",
      description: "Mentoring emerging leaders and professionals has been one of my most fulfilling responsibilities. Many of those I've guided now lead their own organizations and community initiatives, creating a multiplier effect of positive change.",
      impact: "Next generation empowered"
    }
  ];

  const serviceMetrics = [
    { value: "30+", label: "Years of Service", description: "Continuous community leadership" },
    { value: "5", label: "Major Institutions", description: "Founded and led to success" },
    { value: "1000s", label: "Lives Impacted", description: "Direct beneficiaries of programs" },
    { value: "Global", label: "Recognition", description: "International humanitarian awards" }
  ];

  return (
    <ChapterContainer
      id="bridge-builder"
      chapterNumber={2}
      title="Humanitarian Leadership & Community Development"
      subtitle="Three decades of strategic service and institutional building across UAE and India"
      variant="light"
    >
      {/* Professional Opening */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          My approach to humanitarian service has always been systematic and sustainable. Rather than 
          short-term aid, I focus on building institutions and programs that address root causes and 
          create lasting change. This philosophy has guided my work from the Central Military Command 
          in the 1990s to founding multiple educational and community institutions.
        </p>
      </motion.div>

      {/* Service Journey Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {serviceJourney.map((service, index) => (
          <motion.div
            key={service.title}
            className="bg-gradient-to-br from-white to-royal-50 rounded-xl p-8 border border-royal-100 hover:shadow-xl transition-all duration-300 group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-2">
                  {service.title}
                </h3>
                <div className="inline-block bg-golden-100 text-golden-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {service.impact}
                </div>
              </div>
            </div>
            
            <p className="text-royal-700 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Professional Achievement Metrics */}
      <motion.div 
        className="bg-royal-900 rounded-2xl p-8 md:p-12 text-white mb-16"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          Career Impact & Professional Recognition
        </h3>
        
        <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
          {serviceMetrics.map((metric, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-golden-300 mb-2">{metric.value}</div>
              <div className="text-lg font-medium mb-2">{metric.label}</div>
              <div className="text-white/80 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <blockquote className="text-xl italic text-white/90 mb-4">
            "Effective humanitarian leadership requires both vision and practical execution. 
            Every initiative must be designed for sustainability, scalability, and measurable impact."
          </blockquote>
          <cite className="text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
        </div>
      </motion.div>

      {/* Professional Recognition */}
      <motion.div 
        className="bg-gradient-to-br from-golden-50 to-royal-50 rounded-xl p-8 mb-16"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-playfair font-semibold text-royal-900 mb-6 text-center">
          Key Professional Achievements
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <Award className="h-6 w-6 text-golden-600 mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-royal-800 mb-1">Dubai Government Recognition</h5>
              <p className="text-royal-600 text-sm">Golden Visa awarded for significant social contributions to UAE community development</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Globe className="h-6 w-6 text-golden-600 mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-royal-800 mb-1">International Impact</h5>
              <p className="text-royal-600 text-sm">Programs and institutions serving communities across UAE, India, and internationally</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Building className="h-6 w-6 text-golden-600 mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-royal-800 mb-1">Institutional Leadership</h5>
              <p className="text-royal-600 text-sm">Founded multiple successful organizations with sustainable operational models</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Users2 className="h-6 w-6 text-golden-600 mt-1 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-royal-800 mb-1">Community Development</h5>
              <p className="text-royal-600 text-sm">Strategic initiatives in education, healthcare, legal aid, and cultural preservation</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center bg-white rounded-xl p-8 shadow-lg border border-royal-100"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-playfair font-semibold text-royal-900 mb-4">
          Continuing the Mission of Service
        </h4>
        <p className="text-royal-700 mb-6 max-w-2xl mx-auto">
          Our humanitarian initiatives continue to evolve and expand. Learn about current programs, 
          partnership opportunities, and how you can contribute to sustainable community development initiatives.
        </p>
        <motion.button
          className="bg-gradient-to-r from-royal-600 to-golden-600 text-white px-8 py-3 rounded-lg font-medium hover:from-royal-700 hover:to-golden-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Current Initiatives
        </motion.button>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
