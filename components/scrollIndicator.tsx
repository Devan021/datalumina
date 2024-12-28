"use client";

import { motion } from 'framer-motion';

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 sm:hidden"
    >
      <span className="text-white/60 text-xs font-medium">Scroll to explore</span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="w-1 h-8 rounded-full relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 rounded-full" />
        <motion.div
          animate={{
            scaleY: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-white/40 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}

