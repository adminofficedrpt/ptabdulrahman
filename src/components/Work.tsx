
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

type WorkCategory = 'all' | 'dqaa' | 'humanitarian' | 'books' | 'awards';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('all');
  
  const filteredWorks = works.filter(work => 
    activeCategory === 'all' || work.category === activeCategory
  );
  
  return (
    <section id="work" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Impactful Contributions" 
          subtitle="Exploring Dr. Rahman's educational initiatives, humanitarian work, publications, and recognitions"
          className="mb-16"
        />
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              className={activeCategory === category.value ? 
                "bg-royal-800 hover:bg-royal-700" : 
                "hover:bg-royal-50"
              }
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          animate="animate"
          variants={containerVariants}
        >
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              custom={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={work.imageUrl} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="inline-block px-3 py-1 bg-golden-500 text-white text-xs font-medium rounded-full mb-2 uppercase tracking-wide">
                      {getCategoryLabel(work.category)}
                    </span>
                    <h3 className="text-white text-xl font-playfair font-bold">{work.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-3">{work.description}</p>
                  <a 
                    href={`#${work.category}`}
                    className="inline-flex items-center text-royal-800 hover:text-golden-600 font-medium group"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const getCategoryLabel = (category: WorkCategory): string => {
  const found = categories.find(c => c.value === category);
  return found ? found.label : '';
};

const categories = [
  { value: 'all' as WorkCategory, label: 'All Work' },
  { value: 'dqaa' as WorkCategory, label: 'DQAA' },
  { value: 'humanitarian' as WorkCategory, label: 'Humanitarian' },
  { value: 'books' as WorkCategory, label: 'Books' },
  { value: 'awards' as WorkCategory, label: 'Awards' }
];

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const works = [
  {
    id: 1,
    title: "Darul Quran Abdulla Academy",
    category: 'dqaa' as WorkCategory,
    description: "A revolutionary educational institution that integrates Quranic memorization with modern academic excellence, serving students from diverse backgrounds.",
    imageUrl: "/lovable-uploads/83fac78b-1270-459b-82e4-404239c646d7.png"
  },
  {
    id: 2,
    title: "Medical Camps Initiative",
    category: 'humanitarian' as WorkCategory,
    description: "Free healthcare services provided to thousands in underserved communities across UAE and Kerala through regular medical camps.",
    imageUrl: "/lovable-uploads/66572de8-7486-4f48-ac7f-1219779e9bd6.jpg"
  },
  {
    id: 3,
    title: "Is the Creation Meaningless?",
    category: 'books' as WorkCategory,
    description: "A philosophical exploration of existence through an Islamic lens, translated into multiple languages and recognized for its scholarly contribution.",
    imageUrl: "/lovable-uploads/6856dd37-63cb-4029-b897-0b2143071d2f.png"
  },
  {
    id: 4,
    title: "Community Education Programs",
    category: 'dqaa' as WorkCategory,
    description: "Weekend school and adult literacy programs designed to provide accessible education to all segments of the community.",
    imageUrl: "/lovable-uploads/bdaaf13f-2912-4e1d-b6d7-eb5852916364.png"
  },
  {
    id: 5,
    title: "Flood Relief Mission",
    category: 'humanitarian' as WorkCategory,
    description: "Emergency relief efforts during the Kerala floods, providing food, medical supplies, and rehabilitation support to affected families.",
    imageUrl: "/lovable-uploads/76eef9a7-0487-4c6f-b458-32397f9edbd6.png"
  },
  {
    id: 6,
    title: "Sharjah Award for Islamic Studies",
    category: 'awards' as WorkCategory,
    description: "Prestigious recognition for outstanding contributions to Islamic scholarship and thought leadership in the region.",
    imageUrl: "/lovable-uploads/ff033cfa-8c52-470c-af76-d48b0136aabc.png"
  }
];

export default Work;
