
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, BookOpen, Award, MapPin, TrendingUp } from 'lucide-react';

interface ImpactData {
  region: string;
  country: string;
  students: number;
  institutions: number;
  programs: number;
  coordinates: [number, number];
  description: string;
}

const globalImpactData: ImpactData[] = [
  {
    region: "Middle East",
    country: "UAE",
    students: 15000,
    institutions: 12,
    programs: 25,
    coordinates: [55.2708, 25.2048],
    description: "Home to DQAA Academy and the largest concentration of educational programs"
  },
  {
    region: "South Asia",
    country: "India",
    students: 8500,
    institutions: 8,
    programs: 15,
    coordinates: [77.1025, 28.7041],
    description: "Strong presence in Kerala and other states with cultural exchange programs"
  },
  {
    region: "Southeast Asia",
    country: "Malaysia",
    students: 6200,
    institutions: 6,
    programs: 12,
    coordinates: [101.6869, 3.1390],
    description: "Growing network of Islamic education centers and community programs"
  },
  {
    region: "Africa",
    country: "South Africa",
    students: 3800,
    institutions: 4,
    programs: 8,
    coordinates: [28.0473, -26.2041],
    description: "Educational outreach and humanitarian initiatives"
  },
  {
    region: "Europe",
    country: "United Kingdom",
    students: 2500,
    institutions: 3,
    programs: 6,
    coordinates: [-0.1276, 51.5074],
    description: "Academic partnerships and scholarly exchange programs"
  },
  {
    region: "North America",
    country: "Canada",
    students: 1800,
    institutions: 2,
    programs: 4,
    coordinates: [-75.6972, 45.4215],
    description: "Research collaborations and interfaith dialogue initiatives"
  }
];

const GlobalImpactVisualization: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<ImpactData | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const totalStudents = globalImpactData.reduce((sum, data) => sum + data.students, 0);
  const totalInstitutions = globalImpactData.reduce((sum, data) => sum + data.institutions, 0);
  const totalPrograms = globalImpactData.reduce((sum, data) => sum + data.programs, 0);

  return (
    <section className="py-32 bg-gradient-to-br from-royal-50 via-white to-golden-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-royal-300 to-golden-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-golden-300 to-royal-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-royal-900 mb-8 font-playfair">
            Global Impact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-royal-500 to-golden-500 mx-auto mb-8" />
          <p className="text-xl text-royal-700 max-w-4xl mx-auto leading-relaxed">
            Dr. P.T. Abdul Rahman's educational and humanitarian initiatives have created 
            a worldwide network of learning, compassion, and positive change.
          </p>
        </motion.div>

        {/* Global Statistics */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-royal-100">
            <Globe className="h-12 w-12 text-royal-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-royal-900 mb-2">6</div>
            <div className="text-royal-600">Continents Reached</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-royal-100">
            <Users className="h-12 w-12 text-golden-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-royal-900 mb-2">{totalStudents.toLocaleString()}+</div>
            <div className="text-royal-600">Students Impacted</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-royal-100">
            <BookOpen className="h-12 w-12 text-royal-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-royal-900 mb-2">{totalInstitutions}</div>
            <div className="text-royal-600">Partner Institutions</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg border border-royal-100">
            <Award className="h-12 w-12 text-golden-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-royal-900 mb-2">{totalPrograms}</div>
            <div className="text-royal-600">Active Programs</div>
          </div>
        </motion.div>

        {/* Interactive World Map Visualization */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Map Placeholder with Interactive Dots */}
          <motion.div 
            className="relative bg-gradient-to-br from-royal-100 to-golden-100 rounded-2xl p-8 h-96 flex items-center justify-center border border-royal-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full h-full">
              <Globe className="h-32 w-32 text-royal-300 mx-auto mt-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-8 w-full max-w-sm">
                  {globalImpactData.slice(0, 6).map((region, index) => (
                    <motion.button
                      key={region.country}
                      onClick={() => setSelectedRegion(region)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        selectedRegion?.country === region.country
                          ? 'bg-golden-500 scale-150 shadow-lg'
                          : 'bg-royal-500 hover:bg-golden-400 hover:scale-125'
                      }`}
                      animate={{
                        scale: animationPhase === index % 4 ? [1, 1.5, 1] : 1,
                        opacity: animationPhase === index % 4 ? [0.7, 1, 0.7] : 0.8
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      title={region.country}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Region Details */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-royal-900 font-playfair">
              Regional Impact
            </h3>
            
            <AnimatePresence mode="wait">
              {selectedRegion ? (
                <motion.div
                  key={selectedRegion.country}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-royal-100"
                >
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-golden-500 mr-2" />
                    <h4 className="text-xl font-semibold text-royal-900">
                      {selectedRegion.country}, {selectedRegion.region}
                    </h4>
                  </div>
                  
                  <p className="text-royal-700 mb-6 leading-relaxed">
                    {selectedRegion.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-royal-900">{selectedRegion.students.toLocaleString()}</div>
                      <div className="text-sm text-royal-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-royal-900">{selectedRegion.institutions}</div>
                      <div className="text-sm text-royal-600">Institutions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-royal-900">{selectedRegion.programs}</div>
                      <div className="text-sm text-royal-600">Programs</div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-gradient-to-r from-royal-50 to-golden-50 rounded-xl p-6 border border-royal-100"
                >
                  <p className="text-royal-600 text-center">
                    Click on any region dot to explore detailed impact statistics and programs.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Impact Timeline */}
        <motion.div 
          className="bg-gradient-to-r from-royal-900 to-royal-800 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 font-playfair">
            Growth Over Time
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <TrendingUp className="h-8 w-8 text-golden-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-golden-300 mb-2">1995</div>
              <div className="text-lg font-medium mb-2">Foundation Year</div>
              <div className="text-white/80 text-sm">DQAA Academy established</div>
            </div>
            <div>
              <Users className="h-8 w-8 text-golden-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-golden-300 mb-2">2005</div>
              <div className="text-lg font-medium mb-2">Regional Expansion</div>
              <div className="text-white/80 text-sm">Programs across 5 countries</div>
            </div>
            <div>
              <Globe className="h-8 w-8 text-golden-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-golden-300 mb-2">2015</div>
              <div className="text-lg font-medium mb-2">Global Reach</div>
              <div className="text-white/80 text-sm">Presence in 15+ countries</div>
            </div>
            <div>
              <Award className="h-8 w-8 text-golden-300 mx-auto mb-4" />
              <div className="text-3xl font-bold text-golden-300 mb-2">2024</div>
              <div className="text-lg font-medium mb-2">Continued Legacy</div>
              <div className="text-white/80 text-sm">Inspiring future generations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpactVisualization;
