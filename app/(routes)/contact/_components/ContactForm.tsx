"use client";

import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.div 
      className="max-w-md w-full mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="rounded-lg border bg-card p-6">
        <h2 className="font-semibold mb-4">Send a Message</h2>
        <div className="space-y-4">
          {/* Form fields will go here */}
          <div className="h-32 rounded bg-muted animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
} 