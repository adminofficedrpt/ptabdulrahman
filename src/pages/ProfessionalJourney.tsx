import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SimpleNavigation from '@/components/authentic/SimpleNavigation';
import SimpleFooter from '@/components/authentic/SimpleFooter';
import { 
  Calendar, 
  Building, 
  Users, 
  GraduationCap, 
  Shield, 
  FileText, 
  Globe, 
  Briefcase,
  Award,
  Heart,
  BookOpen,
  Coins
} from 'lucide-react';

const ProfessionalJourney = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const milestones = [
    {
      year: "1988",
      title: "Arrival in Dubai",
      description: "Embarked on his professional journey in Dubai, gaining deep insights into expatriate community dynamics.",
      icon: Globe,
      category: "Migration"
    },
    {
      year: "1992",
      title: "Administrator, Central Military Command",
      description: "Served as Administrator at CMC until 1996, exhibiting strategic leadership and operational expertise. Received Letter of Appreciation for exemplary service.",
      icon: Shield,
      category: "Government Service"
    },
    {
      year: "1992",
      title: "Founded Dubai Indian Islamic Centre",
      description: "Established DIIC on June 28, addressing educational, cultural, and spiritual needs of the Indian expatriate community.",
      icon: Building,
      category: "Community Building"
    },
    {
      year: "1994",
      title: "Pioneered Hajj Facilitation",
      description: "Secured official authorization from Saudi Consulate to streamline Hajj processes under DIIC banner.",
      icon: Heart,
      category: "Religious Service"
    },
    {
      year: "1996",
      title: "Dubai Government Researcher",
      description: "Joined Dubai Government's Awqaf & Islamic Affairs Department as Research Assistant, contributing to policy development.",
      icon: FileText,
      category: "Research"
    },
    {
      year: "2005",
      title: "Founded Insight Group",
      description: "Expanded professional portfolio by establishing Insight Plus Advertising, demonstrating business acumen.",
      icon: Briefcase,
      category: "Entrepreneurship"
    },
    {
      year: "2009-2011",
      title: "Security & Technical Ventures",
      description: "Established Group 2 Security (2009) and Group 2 Technical Works (2011), leveraging strategic management expertise.",
      icon: Building,
      category: "Business Expansion"
    },
    {
      year: "2013",
      title: "Darul Quran Abdulla Academy",
      description: "Founded DQAA in Kerala, integrating contemporary education with Islamic studies. Academy gained international recognition.",
      icon: GraduationCap,
      category: "Education"
    },
    {
      year: "2017",
      title: "ABR Academy Establishment",
      description: "Founded ABR Academy for Education & Culture, furthering his commitment to holistic education.",
      icon: BookOpen,
      category: "Education"
    },
    {
      year: "2022",
      title: "Multiple Leadership Roles",
      description: "Became Managing Partner in prestigious UAE law firm and founded Shamsa Academy for Girls.",
      icon: Award,
      category: "Leadership"
    },
    {
      year: "2023",
      title: "Al-Badawi Shariah College",
      description: "Established college named after Imam Ahmad Al-Badawi, reflecting commitment to higher Islamic education.",
      icon: GraduationCap,
      category: "Higher Education"
    },
    {
      year: "2024",
      title: "Legal & Digital Innovation",
      description: "Launched Precedential Legal Consultancy and engaged in digital finance and blockchain initiatives.",
      icon: Coins,
      category: "Innovation"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Migration": "text-blue-600 bg-blue-50",
      "Government Service": "text-green-600 bg-green-50",
      "Community Building": "text-purple-600 bg-purple-50",
      "Religious Service": "text-amber-600 bg-amber-50",
      "Research": "text-indigo-600 bg-indigo-50",
      "Entrepreneurship": "text-red-600 bg-red-50",
      "Business Expansion": "text-orange-600 bg-orange-50",
      "Education": "text-emerald-600 bg-emerald-50",
      "Leadership": "text-rose-600 bg-rose-50",
      "Higher Education": "text-teal-600 bg-teal-50",
      "Innovation": "text-cyan-600 bg-cyan-50"
    };
    return colors[category as keyof typeof colors] || "text-gray-600 bg-gray-50";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Journey - Dr. P.T. Abdul Rahman</title>
        <meta name="description" content="Explore Dr. P.T. Abdul Rahman's remarkable professional journey from 1988 to present. Over 35 years of achievements in education, government service, entrepreneurship, and community leadership." />
        <meta name="keywords" content="Dr. P.T. Abdul Rahman career, Dubai Indian Islamic Centre, Darul Quran Academy, UAE government service, legal consultancy" />
      </Helmet>
      
      <SimpleNavigation />
      
      {/* Hero Section */}
      <section className="section-professional bg-gradient-subtle">
        <div className="container-professional">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-display mb-6">Professional Journey</h1>
            <p className="text-body text-xl">
              Over three decades of transformative leadership across education, government service, 
              entrepreneurship, and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-professional">
        <div className="container-professional">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: -60 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1, duration: 0.6 }
                    }
                  }}
                  className="relative flex items-start mb-12"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <milestone.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 card-professional flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-display font-bold text-primary">{milestone.year}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(milestone.category)}`}>
                        {milestone.category}
                      </span>
                    </div>
                    <h3 className="text-subheading mb-3">{milestone.title}</h3>
                    <p className="text-body">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Impact */}
      <section className="section-professional bg-gradient-subtle">
        <div className="container-professional">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-heading text-center mb-12">Professional Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">35+</div>
                <div className="text-body">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">8+</div>
                <div className="text-body">Institutions Founded</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">6</div>
                <div className="text-body">Languages Spoken</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">7+</div>
                <div className="text-body">Books Published</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="section-professional">
        <div className="container-professional">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-heading mb-8">Current Focus</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-professional">
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-subheading mb-4">Legal Excellence</h3>
                <p className="text-body">
                  Leading Precedential Legal Consultancy with high-level advisory services 
                  for global clientele in Dubai.
                </p>
              </div>
              <div className="card-professional">
                <Coins className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-subheading mb-4">Digital Innovation</h3>
                <p className="text-body">
                  Contributing to blockchain technology advancement and secure digital 
                  finance initiatives.
                </p>
              </div>
              <div className="card-professional">
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-subheading mb-4">Educational Leadership</h3>
                <p className="text-body">
                  Overseeing multiple educational institutions that blend traditional 
                  values with modern curricula.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
};

export default ProfessionalJourney;