
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              About
            </h2>
            <div className="w-24 h-px bg-slate-300 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                Dr. P.T. Abdul Rahman is an Islamic scholar and educator who has dedicated 
                his life to bridging traditional Islamic education with contemporary learning methods.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                As the founder of Darul Quran Abdulla Academy in Kerala, India, he has created 
                an educational model where students can achieve Hafiz status while excelling 
                in conventional academic subjects.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in the UAE since 1992, Dr. Rahman has served as a bridge between 
                cultures, establishing the Dubai Indian Islamic Centre and contributing 
                to interfaith dialogue and community development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-medium text-slate-900 mb-6">Key Contributions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-600">Founder of Darul Quran Abdulla Academy</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-600">Established Dubai Indian Islamic Centre</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-600">Author of Islamic philosophical works</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-slate-600">Community service and humanitarian initiatives</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
