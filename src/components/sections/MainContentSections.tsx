
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionContainer from '@/components/design-system/SectionContainer';
import About from '@/components/About';
import Work from '@/components/Work';
import MediaHighlights from '@/components/MediaHighlights';
import Contact from '@/components/Contact';
import SectionHeading from '@/components/SectionHeading';

const MainContentSections = () => {
  // InView hooks for section animations
  const [aboutRef, aboutInView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [workRef, workInView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [mediaRef, mediaInView] = useInView({ threshold: 0.25, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.25, triggerOnce: true });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      {/* About Section */}
      <motion.div 
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInUp}
        id="biography"
      >
        <SectionContainer variant="default" pattern>
          <SectionHeading 
            title="Biography" 
            subtitle="A lifetime dedicated to education, faith, and humanitarian service"
          />
          <About />
        </SectionContainer>
      </motion.div>
      
      {/* Work Section */}
      <motion.div 
        ref={workRef}
        initial="hidden"
        animate={workInView ? "visible" : "hidden"}
        variants={fadeInUp}
        id="work"
      >
        <SectionContainer variant="accent">
          <SectionHeading 
            title="Professional Journey" 
            subtitle="Decades of leadership, scholarship, and community impact"
          />
          <Work />
        </SectionContainer>
      </motion.div>
      
      {/* Media Highlights */}
      <motion.div 
        ref={mediaRef}
        initial="hidden"
        animate={mediaInView ? "visible" : "hidden"}
        variants={fadeInUp}
        id="media"
      >
        <SectionContainer variant="default" pattern>
          <SectionHeading 
            title="Media Highlights" 
            subtitle="Recognition and features across prestigious publications"
          />
          <MediaHighlights />
        </SectionContainer>
      </motion.div>
      
      {/* Contact Section */}
      <motion.div 
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeInUp}
        id="contact"
      >
        <SectionContainer variant="accent">
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Reach out for collaborations, speaking engagements, or inquiries"
          />
          <Contact />
        </SectionContainer>
      </motion.div>
    </>
  );
};

export default MainContentSections;
