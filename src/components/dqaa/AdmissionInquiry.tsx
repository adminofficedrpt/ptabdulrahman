
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AdmissionInquiry = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    age: '',
    program: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    'Primary Hifz Program (Ages 8-12)',
    'Advanced Hifz Program (Ages 13-16)',
    'Teacher Training Program (Ages 18+)',
    'Part-time Weekend Classes',
    'Online Learning Program'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Admission inquiry submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      age: '',
      program: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="admission" className="py-16 md:py-24 bg-gradient-to-br from-white to-royal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className={`text-center mb-12 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-golden-100 rounded-full text-golden-600 text-sm font-medium mb-4">
              <BookOpen size={16} />
              <span>{t('admission.title')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-4">
              Begin Your Journey at DQAA
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Submit your inquiry to join one of the most prestigious Islamic educational institutions. 
              Our admissions team will guide you through the process.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                    placeholder="Enter student's full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User size={16} className="inline mr-2" />
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                    placeholder="Enter parent's full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone size={16} className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={16} className="inline mr-2" />
                    Student Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="5"
                    max="25"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                    placeholder="Age in years"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <BookOpen size={16} className="inline mr-2" />
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-golden-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your child's interests, previous education, or any specific questions..."
                />
              </div>

              <div className="bg-royal-50 border border-royal-200 rounded-xl p-4">
                <h4 className="font-semibold text-royal-800 mb-2">What happens next?</h4>
                <ul className="text-sm text-royal-700 space-y-1">
                  <li>• Our admissions team will review your inquiry within 24 hours</li>
                  <li>• You'll receive a detailed information packet about the selected program</li>
                  <li>• We'll schedule a personal consultation to discuss your child's needs</li>
                  <li>• Application forms and admission requirements will be provided</li>
                </ul>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-golden-600 to-golden-700 text-white py-4 px-8 rounded-xl font-semibold hover:from-golden-700 hover:to-golden-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Submit Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionInquiry;
