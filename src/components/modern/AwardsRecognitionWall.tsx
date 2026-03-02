
import { motion } from 'framer-motion';
import { Award, Globe, Calendar, MapPin } from 'lucide-react';

const recognitions = [
  {
    title: 'Appreciation Award',
    organization: "Ruler's Court of Ajman",
    year: '2010',
    location: 'Ajman, UAE',
    description: 'H.E. Sheikh Dr. Majid Bin Saeed Al Nuaimi presented an Appreciation Award for the role as Founder and Secretary General of the Dubai Indian Islamic Centre.',
    icon: Award,
  },
  {
    title: 'Loka Kerala Sabha Member',
    organization: 'Government of Kerala',
    year: '2022',
    location: 'Kerala, India',
    description: 'Official delegate and member of the Loka Kerala Sabha, a global platform connecting the Keralite diaspora.',
    icon: Globe,
  }
];

const AwardsRecognitionWall = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-royal-50 via-white to-golden-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-royal-900 mb-6">
            Recognition
          </h2>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-golden-600 to-transparent mx-auto mb-6" />
          <p className="text-lg text-royal-600 max-w-2xl mx-auto">
            Official recognitions for community service and educational contributions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {recognitions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-royal-100/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-golden-400 to-golden-600 rounded-xl flex items-center justify-center mb-6">
                <item.icon size={26} className="text-white" />
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-royal-900 mb-2">{item.title}</h3>
              
              <div className="flex flex-wrap gap-3 mb-4 text-sm text-royal-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {item.year}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>
              
              <p className="text-royal-600 text-sm leading-relaxed mb-3">{item.description}</p>
              <p className="text-xs text-royal-400 font-medium">{item.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognitionWall;
