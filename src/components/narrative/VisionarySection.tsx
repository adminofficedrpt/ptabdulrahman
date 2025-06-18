
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Heart, BookOpen, Globe } from 'lucide-react';

const VisionarySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="visionary" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-royal-900 mb-6">
            The Man Behind the Mission
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-golden-500 to-transparent mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every great legacy begins with a vision. Dr. Abdul Rahman's journey from Kerala to the UAE 
            is a testament to the power of purpose-driven leadership.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Portrait & Personal Touch */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
                alt="Dr. P.T. Abdul Rahman"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-sm border border-gray-100">
              <p className="text-sm text-gray-700 italic leading-relaxed">
                "My grandmother's wisdom shaped my understanding that true strength comes from 
                serving others with unwavering faith."
              </p>
              <p className="text-xs text-golden-600 mt-2 font-medium">— Personal Reflection</p>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-medium text-royal-800 mb-4">
                Roots in Kerala, Vision for the World
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Born into a family where scholarship and service were intertwined, Dr. Abdul Rahman's early life 
                was marked by both loss and resilience. The passing of his father could have derailed his path, 
                but under his grandmother's guidance, it instead forged an unshakeable commitment to education and community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From the traditional madrasas of Kerala to the bustling streets of Dubai, his journey represents 
                more than geographical migration—it embodies the evolution of Islamic education in the modern world.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-playfair font-medium text-royal-800 mb-4">
                The Bridge Builder
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What sets Dr. Rahman apart is his unique ability to bridge worlds. His multilingual mastery—Arabic, 
                English, Malayalam, Hindi, Urdu, and Tamil—isn't just linguistic skill; it's a metaphor for his 
                life's work of connecting diverse communities under shared values of learning and compassion.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-playfair font-light text-center text-royal-900 mb-12">
            Pillars of Purpose
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Compass,
                title: "Visionary Leadership",
                description: "Seeing beyond traditional boundaries to create transformative educational models"
              },
              {
                icon: Heart,
                title: "Compassionate Service",
                description: "Every initiative rooted in genuine care for human dignity and community welfare"
              },
              {
                icon: BookOpen,
                title: "Scholarly Excellence",
                description: "Bridging classical Islamic scholarship with contemporary educational needs"
              },
              {
                icon: Globe,
                title: "Cultural Unity",
                description: "Building bridges between diverse communities through mutual understanding"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-golden-100 to-royal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-royal-700" />
                </div>
                <h4 className="text-lg font-semibold text-royal-800 mb-3">{pillar.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisionarySection;
