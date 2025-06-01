
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Heart, Handshake, Building, Users2 } from 'lucide-react';

const ChapterTwo: React.FC = () => {
  const serviceJourney = [
    {
      icon: Heart,
      title: "Responding to Need",
      description: "When I see families struggling or individuals in hardship, I cannot remain idle. Allah has given us the ability to help, so we must use it. Every small act of service is an opportunity for barakah.",
      impact: "Countless families supported"
    },
    {
      icon: Handshake,
      title: "Standing Together",
      description: "Through decades of community work, I've learned that real change happens when people come together with sincere intentions. We support each other because this is what our faith teaches us.",
      impact: "Community partnerships built"
    },
    {
      icon: Building,
      title: "Building for the Future",
      description: "Establishing institutions like DQAA was never about personal legacy. It was about creating spaces where proper education and values can flourish long after we're gone, Insha'Allah.",
      impact: "Sustainable institutions created"
    },
    {
      icon: Users2,
      title: "Mentoring Others",
      description: "The greatest joy comes from seeing young people develop into leaders who serve their communities. I pray that those I've had the privilege to guide will surpass my efforts, Ameen.",
      impact: "Next generation empowered"
    }
  ];

  return (
    <ChapterContainer
      id="bridge-builder"
      chapterNumber={2}
      title="A Life of Service"
      subtitle="Standing with communities through challenges and growth, by Allah's guidance"
      variant="light"
    >
      {/* Personal Opening */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          For over thirty years, I have tried to answer Allah's call to serve others. Through times 
          of difficulty and blessing, I've learned that true fulfillment comes not from what we 
          achieve for ourselves, but from how we can lift others. This work has been my greatest teacher 
          and my most humbling responsibility.
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

      {/* Personal Reflection on Service */}
      <motion.div 
        className="bg-royal-900 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">30+</div>
            <div className="text-lg font-medium mb-2">Years of Service</div>
            <div className="text-white/80 text-sm">Alhamdulillah for every opportunity</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">Many</div>
            <div className="text-lg font-medium mb-2">Challenges Faced</div>
            <div className="text-white/80 text-sm">Each one a lesson and blessing</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">Ongoing</div>
            <div className="text-lg font-medium mb-2">Commitment</div>
            <div className="text-white/80 text-sm">Until Allah calls us home</div>
          </div>
        </div>
        
        <div className="text-center">
          <blockquote className="text-xl italic text-white/90 mb-4">
            "I have faced many adversities in life, but each challenge taught me that our true strength 
            comes from Allah and our purpose is to serve His creation with humility and compassion."
          </blockquote>
          <cite className="text-golden-300">Dr. P.T. Abdul Rahman</cite>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
