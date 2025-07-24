
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Scale, Building, Shield, Briefcase, ExternalLink } from 'lucide-react';

const InstitutionsShowcase = () => {
  const institutions = [
    {
      name: 'Darul Quran Abdulla Academy',
      location: 'Kerala, India',
      year: '2013',
      description: 'Premier Islamic educational institution providing comprehensive Quranic education and academic excellence.',
      icon: GraduationCap,
      website: 'darul-quran.com',
      color: 'bg-blue-500'
    },
    {
      name: 'Dubai Indian Islamic Centre',
      location: 'Dubai, UAE',
      year: '1992',
      description: 'Community center serving Indian expatriates with religious, social, and welfare services.',
      icon: Users,
      website: null,
      color: 'bg-green-500'
    },
    {
      name: 'Precedential Legal Consultancy',
      location: 'Dubai, UAE',
      year: '2024',
      description: 'Professional legal consultancy firm providing comprehensive legal services in the UAE.',
      icon: Scale,
      website: 'precedentiallaw.com',
      color: 'bg-purple-500'
    },
    {
      name: 'ABR Academy',
      location: 'Kerala, India',
      year: '2017',
      description: 'Academy for Education & Culture promoting holistic development and cultural values.',
      icon: Building,
      website: null,
      color: 'bg-orange-500'
    },
    {
      name: 'Shamsa Academy for Girls',
      location: 'Kerala, India',
      year: '2022',
      description: 'Dedicated educational institution focused on empowering girls through quality education.',
      icon: GraduationCap,
      website: null,
      color: 'bg-pink-500'
    },
    {
      name: 'Group 2 Security',
      location: 'UAE',
      year: '2005',
      description: 'ISO certified security services company providing professional security solutions.',
      icon: Shield,
      website: null,
      color: 'bg-red-500'
    },
    {
      name: 'Insight Plus Advertising',
      location: 'Dubai, UAE',
      year: '2005',
      description: 'Creative advertising and marketing solutions for diverse business needs.',
      icon: Briefcase,
      website: null,
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Founded Institutions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse portfolio of institutions spanning education, community service, legal consultancy, 
              and business services, each contributing to societal development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${institution.color} rounded-lg flex items-center justify-center mr-4`}>
                    <institution.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-500">Est. {institution.year}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{institution.name}</h3>
                <p className="text-slate-600 text-sm mb-3">{institution.location}</p>
                <p className="text-slate-600 mb-4 leading-relaxed">{institution.description}</p>
                
                {institution.website && (
                  <a
                    href={`https://${institution.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsShowcase;
