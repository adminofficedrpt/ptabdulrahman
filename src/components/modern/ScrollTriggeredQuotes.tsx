
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

interface QuoteData {
  text: string;
  context: string;
  trigger: number; // scroll percentage to trigger
}

const personalQuotes: QuoteData[] = [
  {
    text: "Every challenge Allah places before us is an opportunity to grow closer to Him and serve His creation better.",
    context: "On facing adversities",
    trigger: 20
  },
  {
    text: "I write not because I have all the answers, but because sharing our thoughts and experiences might help someone on their own journey.",
    context: "On writing and authorship",
    trigger: 40
  },
  {
    text: "True success in education is not measured by grades alone, but by the character and values our children carry into the world.",
    context: "On education philosophy",
    trigger: 60
  },
  {
    text: "The greatest legacy we can leave is not in buildings or books, but in the hearts and minds we've touched with kindness and wisdom.",
    context: "On legacy and service",
    trigger: 80
  }
];

const ScrollTriggeredQuotes: React.FC = () => {
  const [activeQuote, setActiveQuote] = useState<QuoteData | null>(null);
  const [lastTriggered, setLastTriggered] = useState<number>(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Find the appropriate quote to show based on scroll position
      const currentQuote = personalQuotes
        .filter(quote => scrollPercent >= quote.trigger)
        .pop(); // Get the last one that matches
      
      if (currentQuote && currentQuote.trigger !== lastTriggered) {
        setActiveQuote(currentQuote);
        setLastTriggered(currentQuote.trigger);
        
        // Auto-hide after 6 seconds
        setTimeout(() => {
          setActiveQuote(null);
        }, 6000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastTriggered]);

  return (
    <AnimatePresence>
      {activeQuote && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 max-w-sm"
        >
          <div className="bg-gradient-to-br from-royal-900/95 to-royal-800/95 backdrop-blur-md text-white p-6 rounded-xl shadow-2xl border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Quote className="h-6 w-6 text-golden-300" />
              </div>
              <div>
                <blockquote className="text-sm font-medium italic mb-3 leading-relaxed">
                  "{activeQuote.text}"
                </blockquote>
                <cite className="text-xs text-golden-200 font-medium">
                  {activeQuote.context}
                </cite>
                <div className="text-xs text-white/60 mt-2">
                  - Dr. P.T. Abdul Rahman
                </div>
              </div>
            </div>
            
            {/* Subtle animation indicator */}
            <div className="absolute bottom-2 right-2">
              <div className="w-2 h-2 bg-golden-400 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTriggeredQuotes;
