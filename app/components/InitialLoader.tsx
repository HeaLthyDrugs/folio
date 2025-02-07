'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Extended loading time to 5 seconds for a more immersive experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="relative">
        <motion.div
          className="h-24 w-24 rounded-full border-4 border-primary/40"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
        <motion.div
          className="absolute inset-0 h-24 w-24 rounded-full border-t-4 border-primary"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div>
      <motion.h1
        className="absolute mt-32 text-2xl font-bold text-primary/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.8,
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        Loading...
      </motion.h1>
    </motion.div>
  );
} 