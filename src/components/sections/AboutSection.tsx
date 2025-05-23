
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Educational Pioneer",
      description: "Founder of Darul Quran Abdulla Academy, nurturing Islamic education for over three decades"
    },
    {
      icon: Heart,
      title: "Humanitarian Leader", 
      description: "Champion of community welfare, interfaith dialogue, and social justice initiatives"
    },
    {
      icon: Globe,
      title: "Global Scholar",
      description: "Author of influential works translated into multiple languages, reaching audiences worldwide"
    },
    {
      icon: Users,
      title: "Community Builder",
      description: "Bridging cultures between Kerala and UAE, fostering understanding and cooperation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-royal-800 mb-6 font-playfair">
              About Dr. P.T. Abdul Rahman
            </h2>
            <div className="w-24 h-1 bg-golden-500 mb-8"></div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-xl">
                Dr. P.T. Abdul Rahman stands as one of the most influential Islamic scholars 
                and educators connecting Kerala's rich Islamic heritage with the modern UAE landscape.
              </p>
              
              <p>
                Born and raised in Kerala, India, Dr. Rahman has dedicated over three decades 
                to serving the Islamic community in the UAE. His journey began with a deep 
                commitment to Islamic scholarship and evolved into a multifaceted mission 
                encompassing education, humanitarian work, and cultural bridge-building.
              </p>
              
              <p>
                As the founder of <strong>Darul Quran Abdulla Academy</strong>, he has created 
                a premier institution for Islamic education that has shaped thousands of young minds. 
                His educational philosophy emphasizes the balance between traditional Islamic 
                knowledge and contemporary relevance.
              </p>
              
              <p>
                Beyond education, Dr. Rahman is a prolific author whose works on Islamic 
                philosophy, particularly "Is the Creation Meaningless?", have been translated 
                into multiple languages and have influenced Islamic discourse globally.
              </p>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-golden-200/30 to-royal-200/30 blur-xl"></div>
              <img 
                src="/lovable-uploads/1d6707a7-0406-4dc9-84d6-39b112fdab24.png"
                alt="Dr. P.T. Abdul Rahman"
                className="relative w-full rounded-2xl shadow-2xl"
              />
              
              {/* Quote Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl max-w-sm">
                <blockquote className="text-royal-800 italic mb-2">
                  "Education is not just about acquiring knowledge, but about spreading wisdom that can transform society."
                </blockquote>
                <cite className="text-golden-600 text-sm font-medium">— Dr. P.T. Abdul Rahman</cite>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-royal-800 text-center mb-12 font-playfair">
            His Impact & Legacy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div 
                key={highlight.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-golden-100 to-royal-100 rounded-full mb-4 group-hover:from-golden-200 group-hover:to-royal-200 transition-colors">
                  <highlight.icon className="h-8 w-8 text-royal-700" />
                </div>
                <h4 className="text-xl font-semibold text-royal-800 mb-3 font-playfair">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
