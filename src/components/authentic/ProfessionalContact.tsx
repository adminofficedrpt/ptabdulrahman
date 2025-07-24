
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Globe, Building, ExternalLink } from 'lucide-react';

const ProfessionalContact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: 'Precedential Legal Consultancy',
      details: 'Dubai, UAE',
      link: 'https://precedentiallaw.com',
      type: 'Professional Services'
    },
    {
      icon: Globe,
      title: 'Darul Quran Abdulla Academy',
      details: 'Kerala, India',
      link: 'https://darul-quran.com',
      type: 'Educational Institution'
    },
    {
      icon: Building,
      title: 'Dubai Indian Islamic Centre',
      details: 'Dubai, UAE',
      link: null,
      type: 'Community Organization'
    },
    {
      icon: MapPin,
      title: 'Locations',
      details: 'Dubai, UAE & Kerala, India',
      link: null,
      type: 'Geographic Presence'
    }
  ];

  const professionalRoles = [
    'Managing Partner - Legal Consultancy',
    'Founder - Educational Institutions',
    'Community Leader - UAE & India',
    'Author - Multiple Publications',
    'Loka Kerala Sabha Member',
    'Emirati Entrepreneurs Association Member'
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Contact</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              For inquiries regarding educational programs, legal consultancy, speaking engagements, 
              or community initiatives, please reach out through the appropriate channels.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-600 text-sm mb-2">{item.type}</p>
                        <p className="text-slate-700 mb-3">{item.details}</p>
                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Visit Website
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Roles */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Professional Roles</h3>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  {professionalRoles.map((role, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-slate-700">{role}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-blue-600 text-white p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-3">Speaking Engagements</h4>
                <p className="mb-4">
                  Available for lectures, seminars, and conferences on education, 
                  Islamic studies, community development, and humanitarian work.
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Request Speaking Engagement
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalContact;
