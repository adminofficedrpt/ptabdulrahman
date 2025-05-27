
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, BookOpen, Heart, Award, TrendingUp, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface ImpactMetric {
  id: string;
  title: string;
  value: number;
  unit: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  growth: number;
}

interface GlobalReach {
  region: string;
  countries: string[];
  impact: string;
  initiatives: number;
  beneficiaries: number;
  coordinates: { lat: number; lng: number };
}

const impactMetrics: ImpactMetric[] = [
  {
    id: 'students',
    title: 'Students Educated',
    value: 15000,
    unit: '+',
    description: 'Students directly educated through DQAA and affiliated programs',
    icon: Users,
    color: 'from-blue-500 to-blue-600',
    growth: 15
  },
  {
    id: 'graduates',
    title: 'Hafiz Graduates',
    value: 1200,
    unit: '+',
    description: 'Students who completed Quran memorization with academic excellence',
    icon: Award,
    color: 'from-golden-500 to-golden-600',
    growth: 25
  },
  {
    id: 'countries',
    title: 'Countries Reached',
    value: 35,
    unit: '',
    description: 'Countries where Dr. P.T.\'s influence has made an impact',
    icon: Globe,
    color: 'from-green-500 to-green-600',
    growth: 12
  },
  {
    id: 'publications',
    title: 'Publications Distributed',
    value: 50000,
    unit: '+',
    description: 'Copies of books distributed globally in multiple languages',
    icon: BookOpen,
    color: 'from-purple-500 to-purple-600',
    growth: 18
  },
  {
    id: 'families',
    title: 'Families Served',
    value: 25000,
    unit: '+',
    description: 'Families who benefited from humanitarian initiatives',
    icon: Heart,
    color: 'from-red-500 to-red-600',
    growth: 20
  },
  {
    id: 'institutions',
    title: 'Partner Institutions',
    value: 150,
    unit: '+',
    description: 'Educational and cultural institutions in global network',
    icon: TrendingUp,
    color: 'from-royal-500 to-royal-600',
    growth: 30
  }
];

const globalReach: GlobalReach[] = [
  {
    region: 'Middle East & Gulf',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain'],
    impact: 'Primary humanitarian and educational operations',
    initiatives: 45,
    beneficiaries: 12000,
    coordinates: { lat: 25.2048, lng: 55.2708 }
  },
  {
    region: 'South Asia',
    countries: ['India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Maldives'],
    impact: 'Educational excellence and cultural bridge-building',
    initiatives: 35,
    beneficiaries: 8500,
    coordinates: { lat: 20.5937, lng: 78.9629 }
  },
  {
    region: 'Southeast Asia',
    countries: ['Malaysia', 'Indonesia', 'Singapore', 'Thailand', 'Philippines'],
    impact: 'Islamic education and interfaith dialogue programs',
    initiatives: 25,
    beneficiaries: 5500,
    coordinates: { lat: 4.2105, lng: 101.9758 }
  },
  {
    region: 'Africa',
    countries: ['South Africa', 'Kenya', 'Nigeria', 'Egypt', 'Morocco'],
    impact: 'Educational partnerships and humanitarian support',
    initiatives: 20,
    beneficiaries: 3200,
    coordinates: { lat: -8.7832, lng: 34.5085 }
  },
  {
    region: 'Europe & Americas',
    countries: ['UK', 'USA', 'Canada', 'Germany', 'France'],
    impact: 'Academic collaboration and cultural exchange',
    initiatives: 15,
    beneficiaries: 2100,
    coordinates: { lat: 54.5260, lng: 15.2551 }
  }
];

const GlobalImpactVisualization: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<GlobalReach | null>(null);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      impactMetrics.forEach(metric => {
        animated[metric.id] = metric.value;
      });
      setAnimatedValues(animated);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const CounterAnimation: React.FC<{ value: number; duration?: number }> = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      
      return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <section className="py-32 bg-gradient-to-br from-royal-900 via-royal-800 to-golden-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-golden-400/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-royal-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-playfair">
            Global Impact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-golden-400 to-golden-600 mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Discover the worldwide influence of Dr. P.T. Abdul Rahman's educational initiatives, 
            humanitarian work, and cultural bridge-building efforts spanning over three decades.
          </p>
        </motion.div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {impactMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setActiveMetric(metric.id)}
                onHoverEnd={() => setActiveMetric(null)}
                className="relative group"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  
                  <div className="text-4xl font-bold text-white mb-2">
                    <CounterAnimation value={animatedValues[metric.id] || 0} />
                    {metric.unit}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-golden-300 mb-2">
                    {metric.title}
                  </h3>
                  
                  <p className="text-sm text-white/70 mb-3">
                    {metric.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-green-400 text-sm">
                    <TrendingUp size={16} className="mr-1" />
                    +{metric.growth}% this year
                  </div>
                </Card>

                {/* Hover Effect */}
                <AnimatePresence>
                  {activeMetric === metric.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-gradient-to-r from-golden-500/20 to-royal-500/20 rounded-lg border-2 border-golden-400/50 pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Global Reach Map */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-4xl font-bold text-white text-center mb-12 font-playfair">
            Worldwide Presence
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalReach.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedRegion(region)}
                className="cursor-pointer group"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 hover:bg-white/20 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-golden-500 to-golden-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={24} className="text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{region.region}</h4>
                  </div>
                  
                  <p className="text-white/80 mb-4">{region.impact}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-golden-300">Initiatives:</span>
                      <span className="text-white">{region.initiatives}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-golden-300">Beneficiaries:</span>
                      <span className="text-white">{region.beneficiaries.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {region.countries.slice(0, 4).map(country => (
                      <span key={country} className="text-xs bg-royal-700 text-white px-2 py-1 rounded">
                        {country}
                      </span>
                    ))}
                    {region.countries.length > 4 && (
                      <span className="text-xs bg-golden-600 text-white px-2 py-1 rounded">
                        +{region.countries.length - 4} more
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-golden-600/20 to-royal-600/20 backdrop-blur-md rounded-2xl p-12 border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-4xl font-bold text-white mb-6 font-playfair">
            Join the Global Mission
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of Dr. P.T. Abdul Rahman's continuing legacy of education, 
            humanitarian service, and cultural understanding across the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              className="bg-golden-500 hover:bg-golden-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support Our Mission
            </motion.button>
            <motion.button 
              className="border-2 border-white text-white hover:bg-white hover:text-royal-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Region Detail Modal */}
      <AnimatePresence>
        {selectedRegion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedRegion(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-royal-900 mb-4">{selectedRegion.region}</h3>
              <p className="text-royal-700 mb-6">{selectedRegion.impact}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-royal-50 rounded-lg">
                  <div className="text-2xl font-bold text-royal-900">{selectedRegion.initiatives}</div>
                  <div className="text-sm text-royal-600">Active Initiatives</div>
                </div>
                <div className="text-center p-4 bg-golden-50 rounded-lg">
                  <div className="text-2xl font-bold text-golden-900">{selectedRegion.beneficiaries.toLocaleString()}</div>
                  <div className="text-sm text-golden-600">Beneficiaries</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-royal-900 mb-3">Countries & Territories</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRegion.countries.map(country => (
                    <span key={country} className="bg-royal-100 text-royal-800 px-3 py-1 rounded-full text-sm">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedRegion(null)}
                className="w-full bg-royal-900 text-white py-3 rounded-lg hover:bg-royal-800 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GlobalImpactVisualization;
