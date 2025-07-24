
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const AuthenticAbout = () => {
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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Dr. P.T. Abdul Rahman</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A visionary educator, humanitarian leader, and legal expert who has dedicated over three decades 
              to serving communities and advancing education across the UAE and India.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <span className="text-lg text-slate-700">Dubai, UAE & Kerala, India</span>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. P.T. Abdul Rahman arrived in Dubai in 1988 and has since become a cornerstone of the 
                expatriate community. His journey from a young scholar to a respected leader exemplifies 
                dedication to service and education.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                As the founder of multiple institutions including Darul Quran Abdulla Academy, Dubai Indian 
                Islamic Centre, and Precedential Legal Consultancy, he has created lasting impact across 
                education, community welfare, and legal services.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                His multilingual expertise spans Arabic, English, Hindi, Urdu, Malayalam, and Tamil, 
                enabling him to serve diverse communities effectively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">UAE Golden Visa Recipient</span>
                    <p className="text-slate-600 text-sm">Recognition for exceptional contributions to UAE society</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">Founder of Multiple Institutions</span>
                    <p className="text-slate-600 text-sm">DQAA, DIIC, ABR Academy, Shamsa Academy, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">Loka Kerala Sabha Member (2022)</span>
                    <p className="text-slate-600 text-sm">Representing Kerala diaspora interests globally</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-slate-900">Emirati Entrepreneurs Association Member</span>
                    <p className="text-slate-600 text-sm">One of the first non-Arab members (2022)</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthenticAbout;
