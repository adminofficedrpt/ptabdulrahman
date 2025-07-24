import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SimpleNavigation from '@/components/authentic/SimpleNavigation';
import SimpleFooter from '@/components/authentic/SimpleFooter';
import { GraduationCap, Globe, Heart, Users, Book, Award } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const achievements = [
    {
      icon: Award,
      title: "Golden Visa Recipient",
      description: "Conferred by the Dubai Government in recognition of significant contributions to education and social welfare"
    },
    {
      icon: GraduationCap,
      title: "Master's in Sociology",
      description: "University of Mysore, India, with extensive theological education at prestigious institutions"
    },
    {
      icon: Globe,
      title: "Multilingual Scholar",
      description: "Fluent in Arabic, English, Hindi, Urdu, Malayalam, and Tamil"
    },
    {
      icon: Users,
      title: "Community Leadership",
      description: "Over 30 years of dedicated service to expatriate communities in the UAE"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Dr. P.T. Abdul Rahman - Visionary Educator & Humanitarian Leader</title>
        <meta name="description" content="Learn about Dr. P.T. Abdul Rahman's journey from Kerala to becoming a respected educator, humanitarian, and legal expert in the UAE. His life story of resilience and service." />
        <meta name="keywords" content="Dr. P.T. Abdul Rahman biography, Islamic education, UAE Golden Visa, humanitarian work, multilingual scholar" />
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
            <h1 className="text-display mb-6">About Dr. P.T. Abdul Rahman</h1>
            <p className="text-body text-xl max-w-3xl mx-auto">
              A visionary leader whose journey from early adversity in Kerala to international recognition 
              exemplifies dedication to education, humanitarian service, and community empowerment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Early Life & Education */}
      <section className="section-professional">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-heading mb-6">Early Life & Education</h2>
              <div className="space-y-4 text-body">
                <p>
                  Born in Kerala, India, into a family deeply rooted in Islamic scholarship and cultural heritage, 
                  Dr. P.T. Abdul Rahman faced profound adversity early in life with the loss of his father. 
                  Raised under the loving guardianship of his grandmother, he demonstrated exceptional resilience 
                  and an unwavering commitment to knowledge.
                </p>
                <p>
                  His educational journey began in Palakkod, Kothakurushi, and Ananganadi, where he laid strong 
                  foundations before advancing his theological studies (Dars) at prestigious institutions including 
                  Palakkod East Masjid and Edakazhiyoor Juma Masjid.
                </p>
                <p>
                  Under the distinguished tutelage of renowned scholars T.P. Muhammad Musliar and Kallur Abdullah Musliar, 
                  he developed an extensive understanding of Islamic jurisprudence and philosophy. His academic pursuits 
                  culminated in a Master's degree in Sociology from the University of Mysore, India.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="card-professional text-center">
                  <achievement.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-display font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-caption text-xs">{achievement.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="section-professional bg-gradient-subtle">
        <div className="container-professional">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-heading text-center mb-12">Professional Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="w-16 h-16 text-secondary mx-auto mb-4" />
                <h3 className="text-subheading mb-4">Service to Humanity</h3>
                <p className="text-body">
                  Deeply devoted to serving communities with sincerity, humility, and ethical leadership 
                  across cultural and religious boundaries.
                </p>
              </div>
              <div className="text-center">
                <Book className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-subheading mb-4">Education as Reform</h3>
                <p className="text-body">
                  Believes in education as the most powerful tool for societal transformation and 
                  individual empowerment.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-subheading mb-4">Global Vision</h3>
                <p className="text-body">
                  Committed to fostering progress, inclusivity, and ethical governance on an 
                  international scale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Statement */}
      <section className="section-professional">
        <div className="container-professional">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-heading mb-8">A Living Legacy</h2>
            <p className="text-body text-xl leading-relaxed">
              Dr. P.T. Abdul Rahman's enduring contributions to education, legal advocacy, and humanitarianism 
              continue to shape societies and inspire future generations. His leadership in intellectual, social, 
              and economic spheres has positioned him as a distinguished figure dedicated to fostering progress, 
              inclusivity, and ethical governance.
            </p>
            <div className="mt-12 p-8 bg-card rounded-lg border border-border">
              <blockquote className="text-lg italic text-muted-foreground">
                "Serve humanity, seek divine approval."
              </blockquote>
              <p className="text-caption mt-4">— Dr. P.T. Abdul Rahman</p>
            </div>
          </motion.div>
        </div>
      </section>

      <SimpleFooter />
    </div>
  );
};

export default About;