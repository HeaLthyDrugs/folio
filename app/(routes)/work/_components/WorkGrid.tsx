"use client";

import { motion } from "framer-motion";

export function WorkGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Work items will go here */}
      <motion.div 
        className="h-64 rounded-lg bg-muted"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* Placeholder for work item */}
      </motion.div>
    </div>
  );
} 