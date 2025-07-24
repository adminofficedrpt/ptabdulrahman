
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, BookOpen, Scale, Award } from 'lucide-react';

const ProfessionalTimeline = () => {
  const milestones = [
    {
      year: '1988',
      title: 'Arrived in Dubai',
      description: 'Began his journey in the UAE, laying the foundation for decades of community service.',
      icon: Building,
      color: 'bg-blue-500'
    },
    {
      year: '1992',
      title: 'Founded Dubai Indian Islamic Centre',
      description: 'Established DIIC to serve the growing Indian expatriate community in Dubai.',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      year: '1994',
      title: 'Pioneered Hajj Facilitation',
      description: 'Introduced organized Hajj services under Saudi Consulate guidance.',
      icon: Award,
      color: 'bg-purple-500'
    },
    {
      year: '1996',
      title: 'Government Research Role',
      description: 'Joined Dubai Awqaf & Islamic Affairs as Research Assistant.',
      icon: BookOpen,
      color: 'bg-orange-500'
    },
    {
      year: '2005',
      title: 'Founded Insight Group',
      description: 'Established advertising and business consulting services.',
      icon: Building,
      color: 'bg-teal-500'
    },
    {
      year: '2013',
      title: 'Darul Quran Abdulla Academy',
      description: 'Founded premier Islamic educational institution in Kerala.',
      icon: BookOpen,
      color: 'bg-indigo-500'
    },
    {
      year: '2017',
      title: 'ABR Academy Established',
      description: 'Expanded educational initiatives with ABR Academy for Education & Culture.',
      icon: Users,
      color: 'bg-pink-500'
    },
    {
      year: '2022',
      title: 'Shamsa Academy for Girls',
      description: 'Launched dedicated educational institution for girls.',
      icon: Award,
      color: 'bg-red-500'
    },
    {
      year: '2024',
      title: 'Precedential Legal Consultancy',
      description: 'Founded legal consultancy firm in UAE, expanding professional services.',
      icon: Scale,
      color: 'bg-yellow-500'
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Journey</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A timeline of key milestones spanning over three decades of dedicated service, 
              institutional building, and community leadership.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-300 hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 ${milestone.color} rounded-full flex items-center justify-center mr-4`}>
                        <milestone.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-2xl font-bold text-slate-900">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;
