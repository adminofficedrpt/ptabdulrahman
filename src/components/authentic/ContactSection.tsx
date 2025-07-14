
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';

const ContactSection = () => {
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
              Get in Touch
            </h2>
            <div className="w-24 h-px bg-slate-300 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              For inquiries about educational programs, speaking engagements, or community initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900">Email</h3>
              <p className="text-slate-600">Available upon request</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900">Location</h3>
              <p className="text-slate-600">Dubai, UAE & Kerala, India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900">Institution</h3>
              <p className="text-slate-600">Darul Quran Abdulla Academy</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
