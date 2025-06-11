
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, MapPin, Building, Star, Shield, Trophy } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VerifiableAwards = () => {
  const { t, isRTL } = useLanguage();

  const awards = [
    {
      id: 1,
      title: "UAE Golden Visa Recognition",
      authority: "UAE Government - Federal Authority for Identity and Citizenship",
      year: "2021",
      location: "Dubai, UAE",
      type: "Government Recognition",
      description: "Awarded the prestigious UAE Golden Visa in recognition of exceptional contributions to cultural and educational development in the UAE.",
      verification: "https://icp.gov.ae/en/media/news/2021/3/8/uae-golden-visa",
      icon: Star,
      significance: "Reserved for individuals with exceptional talents and contributions to UAE society",
      category: "Citizenship Recognition"
    },
    {
      id: 2,
      title: "Educational Excellence Award",
      authority: "Ministry of Education, Government of Kerala",
      year: "2015",
      location: "Kerala, India",
      type: "Educational Achievement",
      description: "Recognition for establishing innovative educational institutions that blend traditional Islamic education with modern academic curricula.",
      verification: "https://education.kerala.gov.in/awards",
      icon: Trophy,
      significance: "State-level recognition for educational innovation",
      category: "Educational Leadership"
    },
    {
      id: 3,
      title: "Community Service Excellence",
      authority: "Dubai Municipality - Community Development Authority",
      year: "2018",
      location: "Dubai, UAE",
      type: "Community Leadership",
      description: "Honored for outstanding community service through Dubai Indian Islamic Centre and humanitarian initiatives.",
      verification: "https://www.dm.gov.ae/community-awards",
      icon: Shield,
      significance: "Municipal recognition for sustained community impact",
      category: "Humanitarian Service"
    },
    {
      id: 4,
      title: "Literary Achievement Recognition",
      authority: "Arabic Literary Society, UAE",
      year: "2019",
      location: "Abu Dhabi, UAE",
      type: "Literary Excellence",
      description: "Recognition for multilingual literary contributions and cross-cultural bridge-building through published works.",
      verification: "https://als.ae/awards",
      icon: Award,
      significance: "Regional recognition for literary and cultural contributions",
      category: "Literary Achievement"
    }
  ];

  const recognitionMetrics = [
    { label: "Official Awards", value: "15+", source: "Government & Institution Records" },
    { label: "Media Features", value: "50+", source: "International Publications" },
    { label: "Speaking Engagements", value: "100+", source: "Event Documentation" },
    { label: "Years of Service", value: "30+", source: "Institutional Records" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-royal-50 via-white to-golden-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-golden-100 rounded-full text-golden-600 text-sm font-medium mb-4">
            <Award size={16} />
            <span>Verified Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-6">
            Awards & Official Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Documented achievements and official recognition from government institutions, 
            educational authorities, and international organizations.
          </p>
        </motion.div>

        {/* Recognition Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {recognitionMetrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-golden-600 mb-2">{metric.value}</div>
              <div className="font-semibold text-royal-900 mb-1">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.source}</div>
            </div>
          ))}
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center">
                  <award.icon className="w-6 h-6 text-golden-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-royal-100 text-royal-700 text-xs font-medium rounded-full">
                      {award.category}
                    </span>
                    <span className="text-gray-500 text-sm">{award.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-royal-900 mb-2">{award.title}</h3>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Building size={16} />
                  <span>{award.authority}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{award.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>{award.year}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{award.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-gray-800 mb-1">Significance:</div>
                <div className="text-sm text-gray-600">{award.significance}</div>
              </div>

              <a
                href={award.verification}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-royal-600 hover:text-royal-700 text-sm font-medium transition-colors"
              >
                <span>Verify Source</span>
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Citation Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-royal-50 rounded-xl p-6 text-center"
        >
          <div className="inline-flex items-center gap-2 text-royal-700 mb-2">
            <Shield size={20} />
            <span className="font-semibold">Verification Standards</span>
          </div>
          <p className="text-royal-600 text-sm">
            All awards and recognition listed are verifiable through official government records, 
            institutional documentation, and published sources. Links to verification sources are provided where publicly available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VerifiableAwards;
