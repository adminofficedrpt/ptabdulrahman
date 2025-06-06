
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const EidAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Create a simple audio context for a gentle chime sound
  useEffect(() => {
    // Create a simple audio buffer for a gentle Islamic-inspired chime
    const createAudioBuffer = async () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const sampleRate = audioContext.sampleRate;
        const duration = 3; // 3 seconds
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);

        // Generate a gentle, harmonious tone sequence
        for (let i = 0; i < buffer.length; i++) {
          const time = i / sampleRate;
          const frequency1 = 440; // A note
          const frequency2 = 554.37; // C# note
          const frequency3 = 659.25; // E note
          
          const envelope = Math.exp(-time * 0.5); // Decay envelope
          
          data[i] = envelope * (
            Math.sin(2 * Math.PI * frequency1 * time) * 0.3 +
            Math.sin(2 * Math.PI * frequency2 * time) * 0.2 +
            Math.sin(2 * Math.PI * frequency3 * time) * 0.1
          ) * 0.1; // Keep volume low
        }

        return buffer;
      } catch (error) {
        console.log('Audio context not supported');
        return null;
      }
    };

    createAudioBuffer();
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      setIsPlaying(false);
    }
  };

  const playChime = async () => {
    if (isMuted) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a gentle chime sequence
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      oscillator.frequency.setValueAtTime(554.37, audioContext.currentTime + 0.5);
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 1);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 2);
      
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2000);
    } catch (error) {
      console.log('Could not play audio:', error);
    }
  };

  useEffect(() => {
    if (!isMuted) {
      // Play initial chime after a delay
      const timer = setTimeout(() => {
        playChime();
      }, 3000);
      
      // Set up periodic gentle chimes
      const interval = setInterval(() => {
        if (!isMuted) {
          playChime();
        }
      }, 15000); // Every 15 seconds
      
      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [isMuted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute top-4 left-4 z-20"
    >
      <motion.button
        onClick={toggleMute}
        className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isMuted ? 'Enable gentle Eid chimes' : 'Disable chimes'}
      >
        {isMuted ? (
          <VolumeX size={20} />
        ) : (
          <motion.div
            animate={isPlaying ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Volume2 size={20} className={isPlaying ? 'text-yellow-300' : ''} />
          </motion.div>
        )}
      </motion.button>
      
      {/* Visual indicator when sound is playing */}
      {isPlaying && !isMuted && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-yellow-300"
          animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
          transition={{ duration: 1, repeat: 2 }}
        />
      )}
    </motion.div>
  );
};

export default EidAudio;
