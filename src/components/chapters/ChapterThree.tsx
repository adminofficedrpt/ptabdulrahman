
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { GraduationCap, BookOpen, Users, Heart } from 'lucide-react';

const ChapterThree: React.FC = () => {
  const educationPillars = [
    {
      icon: GraduationCap,
      title: "Proper Upbringing",
      description: "Education is not just about academic knowledge. It's about raising children with strong character, good values, and deep faith. This is what I've tried to provide for my own family and all the students who come to our institutions.",
      impact: "Holistic development approach"
    },
    {
      icon: BookOpen,
      title: "DQAA Academy",
      description: "Establishing Darul Quran Abdulla Academy was a dream that Allah made possible. It's a place where children can grow academically while strengthening their Islamic identity and character. Alhamdulillah for every student who walks through our doors.",
      impact: "Center of learning excellence"
    },
    {
      icon: Users,
      title: "Generational Impact",
      description: "Now in my sixties, I see the fruits of this educational mission. Students have become teachers, parents, and community leaders. They carry forward not just knowledge, but the values and principles we tried to instill.",
      impact: "Legacy of guided leaders"
    },
    {
      icon: Heart,
      title: "Family Foundation",
      description: "My greatest pride is seeing how Allah blessed our family's next generation with proper education and strong values. They understand that knowledge is a trust to be shared and that success means serving others.",
      impact: "Strong family legacy"
    }
  ];

  return (
    <ChapterContainer
      id="educator"
      chapterNumber={3}
      title="Education & Legacy"
      subtitle="Building tomorrow through proper upbringing and meaningful learning, Insha'Allah"
      variant="accent"
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
          As I reflect on decades of involvement in education, I'm reminded that teaching is the most 
          noble profession our Prophet (PBUH) engaged in. Through DQAA and other educational efforts, 
          I've tried to create spaces where young minds can flourish while staying rooted in their values. 
          The greatest reward is seeing our students become beacons of knowledge and character in their communities.
        </p>
      </motion.div>

      {/* Education Philosophy Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {educationPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="bg-white rounded-xl p-8 shadow-lg border border-royal-100 hover:shadow-xl transition-all duration-300 group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <pillar.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-playfair font-semibold text-royal-900 mb-2">
                  {pillar.title}
                </h3>
                <div className="inline-block bg-golden-100 text-golden-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {pillar.impact}
                </div>
                <p className="text-royal-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DQAA Highlight Section */}
      <motion.div 
        className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white mb-16"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-playfair font-bold text-center mb-8">
          Darul Quran Abdulla Academy
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">1995</div>
            <div className="text-lg font-medium mb-2">Established</div>
            <div className="text-white/80 text-sm">A dream Allah made possible</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">Thousands</div>
            <div className="text-lg font-medium mb-2">Students Served</div>
            <div className="text-white/80 text-sm">Each one precious and unique</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-golden-300 mb-2">Ongoing</div>
            <div className="text-lg font-medium mb-2">Mission</div>
            <div className="text-white/80 text-sm">For generations to come</div>
          </div>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light italic text-center text-white/90 mb-4">
          "DQAA is not just a school - it's a place where we nurture both the mind and the soul, 
          preparing young people to be successful in this world while never forgetting their purpose in the next."
        </blockquote>
        <cite className="block text-center text-golden-300 font-medium">Dr. P.T. Abdul Rahman</cite>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="text-center bg-gradient-to-br from-golden-50 to-royal-50 rounded-xl p-8"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-2xl font-playfair font-semibold text-royal-900 mb-4">
          Continue the Journey
        </h4>
        <p className="text-royal-700 mb-6 max-w-2xl mx-auto">
          If you're interested in learning more about DQAA's programs or would like to contribute 
          to our educational mission, we welcome you to be part of this blessed work.
        </p>
        <motion.button
          className="bg-gradient-to-r from-royal-600 to-golden-600 text-white px-8 py-3 rounded-lg font-medium hover:from-royal-700 hover:to-golden-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn About DQAA
        </motion.button>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterThree;
