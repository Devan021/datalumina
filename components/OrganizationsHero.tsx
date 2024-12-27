"use client";

import { motion } from 'framer-motion'
import { StarfieldAnimation } from './StarfieldAnimation'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function OrganizationsHero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-0">
      <StarfieldAnimation />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500 rounded-full filter blur-[120px] opacity-20 z-0"
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
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-20 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
        >
          Empower Your Organization with AI-Driven Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto font-light"
        >
          Unlock the full potential of your data and transform your business with our cutting-edge AI and machine learning solutions. From predictive analytics to process automation, we're here to guide you through every step of your AI journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-8"
        >
          <Button 
            asChild
            className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="w-full sm:w-auto text-white border-white/20 bg-white/5 hover:bg-white/10 px-8 py-3 text-base sm:text-lg rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Link href="#solutions">Explore Our Solutions</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

