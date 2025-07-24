
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="A Scholar with Global Impact" 
          subtitle="Spanning decades of contributions to education, humanitarian work, and Islamic scholarship"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-tr from-golden-300/20 to-royal-300/30 blur-lg"></div>
              <img 
                src="/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg" 
                alt="Dr. P.T. Abdul Rahman Speaking" 
                className="rounded-2xl shadow-xl relative z-10 w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-golden-500 rounded-full flex items-center justify-center z-20">
                <span className="text-white text-xl font-bold">30+</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-golden-500/50 rounded-full animate-ping"></div>
            </div>
            <div className="bg-white shadow-xl p-6 rounded-xl max-w-[80%] ml-auto -mt-20 relative z-20">
              <p className="text-royal-800 font-playfair text-xl font-medium">Years of service in education and humanitarian work</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-light text-gray-700 mb-8 leading-relaxed">
                Dr. P.T. Abdul Rahman is a distinguished Islamic scholar, educator, humanitarian, and veteran in legal affairs based in the UAE. With roots in Kerala, India, he has dedicated over three decades to advancing education, promoting interfaith harmony, and uplifting communities across both regions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-royal-800 font-playfair text-xl mb-3">Educational Visionary</h3>
                  <p className="text-gray-700">Founder of Darul Quran Abdulla Academy (DQAA), integrating Quranic memorization with academic excellence.</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-royal-800 font-playfair text-xl mb-3">Accomplished Author</h3>
                  <p className="text-gray-700">Published numerous works including the acclaimed "Is the Creation Meaningless?" exploring Islamic philosophy.</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-royal-800 font-playfair text-xl mb-3">Humanitarian Leader</h3>
                  <p className="text-gray-700">Spearheaded numerous initiatives providing aid, education, and healthcare to underserved communities.</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-royal-800 font-playfair text-xl mb-3">Community Builder</h3>
                  <p className="text-gray-700">Founded multiple organizations fostering cultural exchange and interfaith dialogue in the UAE.</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-10">
                <a 
                  href="#work" 
                  className="inline-flex items-center text-royal-800 hover:text-golden-600 font-medium group"
                >
                  <span>Explore Dr. Rahman's Work</span>
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gray-50 rounded-xl p-8 h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="text-4xl md:text-5xl font-bold text-golden-600 mb-2">{item.value}</div>
                  <h3 className="text-lg text-royal-800 font-medium">{item.label}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Achievement data
const achievements = [
  { 
    value: "5+", 
    label: "Publications", 
    description: "Books and scholarly articles published in multiple languages" 
  },
  { 
    value: "200+", 
    label: "Lectures & Seminars", 
    description: "Educational presentations delivered across the globe" 
  },
  { 
    value: "15+", 
    label: "Awards & Honors", 
    description: "Recognitions received for contributions to society" 
  },
  { 
    value: "1000+", 
    label: "Students Mentored", 
    description: "Lives touched through education and guidance" 
  }
];

export default About;
