
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Biography = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const fadeInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const fadeInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="biography" className="py-32 islamic-pattern">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-royal-800 font-playfair">
              About Dr. P.T. Abdul Rahman
              <span className="block w-40 h-1 bg-gradient-to-r from-golden-300 via-golden-500 to-golden-300 mx-auto mt-6"></span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A distinguished Islamic scholar in UAE, visionary leader, and Indian humanitarian in Dubai whose influence spans continents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-golden-100 rounded-lg"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
                <img 
                  alt="Dr. P.T. Abdul Rahman - Malayali scholar in UAE" 
                  className="w-full h-auto rounded-lg transition-transform duration-700 hover:scale-105" 
                  src="/lovable-uploads/fb28198e-3760-4921-aaba-ddca06433f3a.jpg" 
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-royal-800 font-playfair mb-4">Early Life & Education</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr. P.T. Abdul Rahman, native to Kerala, India, emerged from a lineage characterized by profound Islamic erudition and cultural tradition. The premature demise of his father notwithstanding, he exhibited extraordinary fortitude and an unyielding dedication to intellectual pursuits. Under the aegis of his grandmother, he confronted challenges with remarkable tenacity, beginning a journey that would establish him as a renowned Islamic scholar in the UAE.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-royal-800 font-playfair mb-4">Academic Pursuits</h3>
                <p className="text-gray-700 leading-relaxed">
                  His formative education was conducted in Palakkod, Kothakurushi, and Ananganadi, subsequent to which he undertook advanced theological studies (Dars) at venerable institutions such as Palakkod East Masjid and Edakazhiyoor Juma Masjid. Under the instruction of eminent scholars, notably T.P. Muhammad Musliar and Kallur Abdullah Musliar, he cultivated a comprehensive comprehension of Islamic jurisprudence and philosophy, establishing the foundation for his future as an influential Malayali scholar in the UAE.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-royal-800 font-playfair mb-4">Linguistic Mastery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr. P.T. Abdul Rahman possesses a Master of Arts in Sociology from the University of Mysore, India. His multilingual proficiency, encompassing Arabic, English, Hindi, Urdu, Malayalam, and Tamil, facilitates engagement with disparate communities and intellectual fora globally, contributing significantly to his reputation as a leading Islamic scholar from Kerala based in the UAE.
                </p>
              </div>

              <Button 
                asChild 
                className="mt-8 bg-gradient-to-r from-golden-500 to-golden-600 hover:from-golden-600 hover:to-golden-700 text-white px-8 py-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              >
                <a href="#timeline">Explore His Journey</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biography;
