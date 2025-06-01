
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
}

const PrayerTimeWidget: React.FC = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Get current time and mock prayer times (in a real app, you'd fetch from an API)
    const updateTimes = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: 'Asia/Dubai'
      });
      setCurrentTime(timeString);

      // Mock prayer times for Dubai (in a real app, calculate based on location)
      const mockPrayerTimes = [
        { name: 'Fajr', time: '5:30 AM', isNext: false },
        { name: 'Dhuhr', time: '12:15 PM', isNext: false },
        { name: 'Asr', time: '3:30 PM', isNext: true },
        { name: 'Maghrib', time: '6:45 PM', isNext: false },
        { name: 'Isha', time: '8:00 PM', isNext: false },
      ];
      
      setPrayerTimes(mockPrayerTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return (
      <motion.button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-20 right-4 bg-gradient-to-r from-royal-600 to-golden-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Prayer Times"
      >
        <Clock className="h-5 w-5" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="fixed bottom-20 right-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-royal-100 p-4 min-w-[200px] z-30"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-royal-600" />
          <h3 className="font-medium text-royal-900 text-sm">Prayer Times</h3>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-royal-400 hover:text-royal-600 text-lg leading-none"
        >
          ×
        </button>
      </div>
      
      <div className="flex items-center space-x-1 text-xs text-royal-600 mb-3">
        <MapPin className="h-3 w-3" />
        <span>Dubai, UAE</span>
      </div>

      <div className="space-y-2">
        {prayerTimes.map((prayer) => (
          <div
            key={prayer.name}
            className={`flex justify-between items-center py-1 px-2 rounded text-sm ${
              prayer.isNext 
                ? 'bg-golden-100 text-golden-800 font-medium' 
                : 'text-royal-700'
            }`}
          >
            <span>{prayer.name}</span>
            <span>{prayer.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 pt-2 border-t border-royal-100 text-center">
        <div className="text-xs text-royal-600">Current Time</div>
        <div className="text-sm font-medium text-royal-900">{currentTime}</div>
      </div>
    </motion.div>
  );
};

export default PrayerTimeWidget;
