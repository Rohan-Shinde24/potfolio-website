import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-3 rounded-full glass-morphism border border-[#06B6D4]/30 text-[#06B6D4] shadow-[0_0_20px_rgba(6,182,212,0.2)] group hover:bg-[#06B6D4]/10 transition-all duration-300"
          aria-label="Back to Top"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Up
          </span>
          <ArrowUp size={20} strokeWidth={3} className="animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
