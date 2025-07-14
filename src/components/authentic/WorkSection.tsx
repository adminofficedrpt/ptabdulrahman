
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Building, Heart } from 'lucide-react';

const WorkSection = () => {
  const workAreas = [
    {
      icon: BookOpen,
      title: "Education",
      description: "Innovative Islamic education that integrates traditional Quranic studies with modern academic excellence."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering unity and understanding between diverse communities through dialogue and shared initiatives."
    },
    {
      icon: Building,
      title: "Institution Development", 
      description: "Establishing and nurturing educational and community institutions that serve society's needs."
    },
    {
      icon: Heart,
      title: "Humanitarian Service",
      description: "Providing support and assistance to those in need through various welfare and aid programs."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Areas of Work
            </h2>
            <div className="w-24 h-px bg-slate-300 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <area.icon className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">{area.title}</h3>
                <p className="text-slate-600 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
