'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { InitialLoader } from './InitialLoader';

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extended loading time to 5 seconds to match InitialLoader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <InitialLoader key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 2, 
            ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for ultra-smooth transition
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 