
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, Shield, Globe, Calendar, Filter, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Recognition {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'award' | 'honor' | 'recognition' | 'visa' | 'certificate';
  location: string;
  description: string;
  image?: string;
  significance: 'national' | 'international' | 'regional' | 'institutional';
  icon: 'award' | 'trophy' | 'star' | 'shield' | 'globe';
}

const recognitions: Recognition[] = [
  {
    id: '1',
    title: 'UAE Golden Visa',
    organization: 'UAE Government',
    year: '2022',
    category: 'visa',
    location: 'Dubai, UAE',
    description: 'Awarded the prestigious UAE Golden Visa in recognition of creative cultural contributions and lasting impact on society.',
    significance: 'national',
    icon: 'star'
  },
  {
    id: '2',
    title: 'Leadership Commendation',
    organization: 'Dubai Islamic Affairs',
    year: '2020',
    category: 'honor',
    location: 'Dubai, UAE',
    description: 'Special recognition for outstanding leadership in promoting interfaith dialogue and cultural understanding.',
    significance: 'regional',
    icon: 'trophy'
  },
  {
    id: '3',
    title: 'Excellence in Education',
    organization: 'Kerala Education Board',
    year: '2018',
    category: 'award',
    location: 'Kerala, India',
    description: 'Honored for revolutionary contributions to Islamic education through DQAA and innovative teaching methodologies.',
    significance: 'national',
    icon: 'award'
  },
  {
    id: '4',
    title: 'Cultural Bridge Builder',
    organization: 'International Islamic Centre',
    year: '2019',
    category: 'recognition',
    location: 'Dubai, UAE',
    description: 'Recognized for exceptional work in building bridges between diverse communities and fostering mutual understanding.',
    significance: 'international',
    icon: 'globe'
  },
  {
    id: '5',
    title: 'Humanitarian Service Certificate',
    organization: 'Red Crescent Society',
    year: '2017',
    category: 'certificate',
    location: 'UAE',
    description: 'Certificate of appreciation for organizing medical camps and humanitarian services for the expatriate community.',
    significance: 'national',
    icon: 'shield'
  },
  {
    id: '6',
    title: 'Literary Excellence Award',
    organization: 'Malayalam Literary Society',
    year: '2016',
    category: 'award',
    location: 'Dubai, UAE',
    description: 'Recognition for outstanding contributions to Malayalam literature and philosophical discourse.',
    significance: 'regional',
    icon: 'trophy'
  }
];

const AwardsRecognitionWall = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSignificance, setSelectedSignificance] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAward, setSelectedAward] = useState<Recognition | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  const categories = ['all', 'award', 'honor', 'recognition', 'visa', 'certificate'];
  const significanceLevels = ['all', 'international', 'national', 'regional', 'institutional'];

  const filteredRecognitions = recognitions.filter(recognition => {
    const matchesCategory = selectedCategory === 'all' || recognition.category === selectedCategory;
    const matchesSignificance = selectedSignificance === 'all' || recognition.significance === selectedSignificance;
    const matchesSearch = searchTerm === '' || 
      recognition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recognition.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recognition.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSignificance && matchesSearch;
  });

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case 'award': return <Award className="w-8 h-8" />;
      case 'trophy': return <Trophy className="w-8 h-8" />;
      case 'star': return <Star className="w-8 h-8" />;
      case 'shield': return <Shield className="w-8 h-8" />;
      case 'globe': return <Globe className="w-8 h-8" />;
      default: return <Award className="w-8 h-8" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'award': return 'from-yellow-400 to-orange-500';
      case 'honor': return 'from-purple-400 to-purple-600';
      case 'recognition': return 'from-blue-400 to-blue-600';
      case 'visa': return 'from-green-400 to-green-600';
      case 'certificate': return 'from-red-400 to-red-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getSignificanceBadge = (significance: string) => {
    const colors = {
      international: 'bg-red-100 text-red-800',
      national: 'bg-blue-100 text-blue-800',
      regional: 'bg-green-100 text-green-800',
      institutional: 'bg-purple-100 text-purple-800'
    };
    return colors[significance as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity, scale }}
      className="py-32 bg-gradient-to-br from-royal-50 via-white to-golden-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-golden-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-royal-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-royal-800 mb-6 font-playfair">
            Wall of Recognition
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-royal-500 to-golden-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A testament to decades of service, leadership, and contributions that have earned recognition 
            from institutions across the UAE, India, and beyond.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search recognitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Significance:</span>
              {significanceLevels.map((level) => (
                <Button
                  key={level}
                  variant={selectedSignificance === level ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSignificance(level)}
                  className="capitalize"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recognition Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredRecognitions.map((recognition, index) => (
              <motion.div
                key={recognition.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group cursor-pointer"
                onClick={() => setSelectedAward(recognition)}
              >
                <Card className="h-full bg-white shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardHeader className="relative pb-0">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${getCategoryColor(recognition.category)}`}></div>
                    
                    <div className="flex items-start justify-between pt-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${getCategoryColor(recognition.category)} text-white shadow-lg`}>
                        {getIconComponent(recognition.icon)}
                      </div>
                      <div className="text-right">
                        <Badge className={getSignificanceBadge(recognition.significance)}>
                          {recognition.significance}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-royal-800 mt-4 group-hover:text-royal-600 transition-colors">
                      {recognition.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Shield className="w-4 h-4 mr-2" />
                        {recognition.organization}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {recognition.year}
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {recognition.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {recognition.description}
                    </p>
                    
                    <div className="pt-2">
                      <Badge variant="outline" className="capitalize">
                        {recognition.category}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: 'Total Recognitions', value: recognitions.length, icon: Award },
            { label: 'Years of Service', value: '30+', icon: Calendar },
            { label: 'Countries', value: '3', icon: Globe },
            { label: 'Impact Level', value: 'Global', icon: Star }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-royal-500 to-golden-500 text-white rounded-full mb-3">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-royal-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AwardsRecognitionWall;
