
import React from 'react';
import { motion } from 'framer-motion';
import ChapterContainer from './ChapterContainer';
import { Heart, Handshake, Building, Users2 } from 'lucide-react';

const ChapterTwo: React.FC = () => {
  const activismInitiatives = [
    {
      icon: Heart,
      title: "Community Empowerment",
      description: "Leading grassroots movements that strengthen communities through education, healthcare access, and economic opportunity",
      impact: "50,000+ families supported"
    },
    {
      icon: Handshake,
      title: "Social Justice Advocacy",
      description: "Championing equality, human rights, and social reform through policy advocacy and community organizing",
      impact: "100+ policy initiatives"
    },
    {
      icon: Building,
      title: "Institutional Development",
      description: "Establishing sustainable organizations that continue the mission of social transformation and community service",
      impact: "15+ institutions founded"
    },
    {
      icon: Users2,
      title: "Leadership Development",
      description: "Mentoring the next generation of social activists and change-makers to carry forward the vision of equality",
      impact: "5,000+ leaders trained"
    }
  ];

  return (
    <ChapterContainer
      id="bridge-builder"
      chapterNumber={2}
      title="The Social Activist"
      subtitle="Championing justice, equality, and human dignity through transformative social action"
      variant="light"
    >
      {/* Opening Statement */}
      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xl md:text-2xl text-royal-700 leading-relaxed">
          Dr. P.T. Abdul Rahman's commitment to social justice has driven three decades of transformative 
          activism. From grassroots organizing to international advocacy, his work demonstrates that 
          sustainable change comes through empowering communities and building bridges of understanding.
        </p>
      </motion.div>

      {/* Activism Initiatives Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {activismInitiatives.map((initiative, index) => (
          <motion.div
            key={initiative.title}
            className="bg-gradient-to-br from-white to-royal-50 rounded-xl p-8 border border-royal-100 hover:shadow-xl transition-all duration-300 group"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-royal-500 to-golden-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <initiative.icon size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-playfair font-semibold text-royal-900 mb-2">
                  {initiative.title}
                </h3>
                <div className="inline-block bg-golden-100 text-golden-700 text-sm font-medium px-3 py-1 rounded-full">
                  {initiative.impact}
                </div>
              </div>
            </div>
            
            <p className="text-royal-700 leading-relaxed">
              {initiative.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Social Impact Section */}
      <motion.div 
        className="bg-royal-900 rounded-2xl p-8 md:p-12 text-white"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">30+</div>
            <div className="text-lg font-medium mb-2">Years of Activism</div>
            <div className="text-white/80 text-sm">Dedicated to social transformation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">100K+</div>
            <div className="text-lg font-medium mb-2">Lives Transformed</div>
            <div className="text-white/80 text-sm">Through direct action and advocacy</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-300 mb-2">25+</div>
            <div className="text-lg font-medium mb-2">Countries Reached</div>
            <div className="text-white/80 text-sm">Global social impact initiatives</div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <blockquote className="text-xl italic text-white/90 mb-4">
            "True activism is not about fighting against something—it's about building toward a better tomorrow for all humanity."
          </blockquote>
          <cite className="text-golden-300">Dr. P.T. Abdul Rahman</cite>
        </div>
      </motion.div>
    </ChapterContainer>
  );
};

export default ChapterTwo;
