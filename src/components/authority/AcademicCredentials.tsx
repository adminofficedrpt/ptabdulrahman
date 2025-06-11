
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, Calendar, Award, Users, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AcademicCredentials = () => {
  const { t, isRTL } = useLanguage();

  const educationalBackground = [
    {
      degree: "Master of Arts (M.A.) in Sociology",
      institution: "University of Mysore",
      year: "1985",
      location: "Mysore, Karnataka, India",
      specialization: "Social Development and Community Studies",
      thesis: "Community Development in Post-Independence India",
      significance: "Premier state university, nationally recognized program",
      verification: "https://www.uni-mysore.ac.in/",
      accreditation: "UGC Recognized, NAAC A+ Grade"
    },
    {
      degree: "Bachelor of Arts (B.A.) in Islamic Studies",
      institution: "Jamia Islamia Arabic College",
      year: "1982",
      location: "Kerala, India",
      specialization: "Islamic Philosophy and Jurisprudence",
      thesis: "Contemporary Applications of Islamic Principles",
      significance: "Renowned institution for Islamic higher education",
      verification: "#",
      accreditation: "Affiliated with University of Kerala"
    }
  ];

  const teachingPositions = [
    {
      position: "Visiting Professor of Islamic Studies",
      institution: "Moulana Azad Foundation University",
      period: "2015 - Present",
      location: "Multiple Campuses, India",
      responsibilities: [
        "Advanced Islamic Philosophy courses",
        "Research supervision for graduate students",
        "Interfaith dialogue academic programs",
        "Curriculum development for modern Islamic education"
      ],
      studentCount: "500+ students taught"
    },
    {
      position: "Guest Lecturer",
      institution: "Darul Huda Islamic University",
      period: "2010 - Present",
      location: "Kerala, India",
      responsibilities: [
        "Contemporary Islamic thought seminars",
        "Arabic language instruction",
        "Community development methodology",
        "Research methodology in Islamic studies"
      ],
      studentCount: "300+ students taught"
    },
    {
      position: "Arabic Language Instructor",
      institution: "Consulate General of India",
      period: "2012 - Present",
      location: "Dubai, UAE",
      responsibilities: [
        "Arabic language training for Indian diplomats",
        "Cultural orientation programs",
        "Cross-cultural communication workshops",
        "Official translation services"
      ],
      studentCount: "100+ diplomats trained"
    }
  ];

  const institutionalAffiliations = [
    {
      organization: "International Association of Islamic Universities",
      role: "Advisory Board Member",
      period: "2018 - Present",
      focus: "Modern Islamic Education Standards"
    },
    {
      organization: "UAE Islamic Education Council",
      role: "Consultant",
      period: "2016 - Present",
      focus: "Curriculum Development and Assessment"
    },
    {
      organization: "Kerala Islamic Scholars Association",
      role: "Executive Committee Member",
      period: "2010 - Present",
      focus: "Educational Policy and Community Welfare"
    }
  ];

  const academicMetrics = [
    { label: "Teaching Experience", value: "15+ Years", icon: GraduationCap },
    { label: "Students Taught", value: "1000+", icon: Users },
    { label: "Academic Institutions", value: "5+", icon: Building },
    { label: "Research Publications", value: "25+", icon: BookOpen }
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-royal-100 rounded-full text-royal-600 text-sm font-medium mb-4">
            <GraduationCap size={16} />
            <span>Academic Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-royal-900 mb-6">
            Academic Credentials & Teaching Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Formal academic qualifications, teaching positions, and institutional affiliations 
            spanning over three decades of educational excellence.
          </p>
        </motion.div>

        {/* Academic Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {academicMetrics.map((metric, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-royal-600" />
              </div>
              <div className="text-3xl font-bold text-royal-700 mb-2">{metric.value}</div>
              <div className="font-semibold text-royal-900">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Educational Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-royal-900 mb-8 text-center">Educational Background</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {educationalBackground.map((education, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-golden-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-golden-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-royal-900 mb-2">{education.degree}</h4>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Building size={14} />
                        <span>{education.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{education.year} • {education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-medium text-royal-800">Specialization: </span>
                    <span className="text-gray-700">{education.specialization}</span>
                  </div>
                  <div>
                    <span className="font-medium text-royal-800">Thesis: </span>
                    <span className="text-gray-700">{education.thesis}</span>
                  </div>
                  <div>
                    <span className="font-medium text-royal-800">Accreditation: </span>
                    <span className="text-gray-700">{education.accreditation}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-sm font-medium text-gray-800 mb-1">Institutional Significance:</div>
                  <div className="text-sm text-gray-600">{education.significance}</div>
                </div>

                <a
                  href={education.verification}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-royal-600 hover:text-royal-700 text-sm font-medium transition-colors"
                >
                  <span>Verify Institution</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Teaching Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-royal-900 mb-8 text-center">Teaching Positions & Academic Roles</h3>
          <div className="space-y-8">
            {teachingPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <div className="md:flex items-start gap-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <h4 className="text-xl font-bold text-royal-900 mb-2">{position.position}</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Building size={14} />
                        <span>{position.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{position.period}</span>
                      </div>
                      <div className="text-golden-600 font-medium">{position.studentCount}</div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h5 className="font-semibold text-royal-800 mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {position.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-golden-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Institutional Affiliations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-royal-900 mb-8 text-center">Professional Affiliations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {institutionalAffiliations.map((affiliation, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-royal-600" />
                </div>
                <h4 className="font-bold text-royal-900 mb-2">{affiliation.organization}</h4>
                <div className="text-golden-600 font-medium mb-2">{affiliation.role}</div>
                <div className="text-sm text-gray-600 mb-3">{affiliation.period}</div>
                <div className="text-sm text-gray-700">{affiliation.focus}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Verification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-royal-50 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-royal-900 mb-4">Academic Verification</h3>
          <p className="text-royal-700 max-w-3xl mx-auto">
            All academic credentials, teaching positions, and institutional affiliations are verifiable 
            through official university records, institutional websites, and academic registries. 
            Degree certificates and employment records are available for verification upon request 
            from recognized educational authorities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicCredentials;
