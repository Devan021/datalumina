"use client";

import { motion } from 'framer-motion'
import { StarfieldAnimation } from './StarfieldAnimation'

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-32">
      <StarfieldAnimation />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full filter blur-[120px] opacity-20 z-0"
      />
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
        >
          Getting in touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto font-light"
        >
          You guessed it – we're inviting you to contact us today to learn more about 
          our services and how we can help you tackle your data challenges.
        </motion.p>
      </motion.div>
    </section>
  )
}

