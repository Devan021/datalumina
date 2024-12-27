"use client";

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { StarfieldAnimation } from './StarfieldAnimation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-6 sm:space-y-8 z-20 px-4"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-sm"
        >
          Transforming businesses with AI - Version 4.22.0
        </motion.span>
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight sm:leading-tight lg:leading-tight text-shadow-glow"
        >
          Unleash the Power of <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI-Driven Solutions</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mt-4 sm:mt-6"
        >
          Harness cutting-edge AI and data technologies to transform your business landscape. Our tailored solutions deliver unparalleled scalability and competitive advantages. Now with improved performance and enhanced user experience!
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-6 sm:pt-8"
        >
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center"
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto text-white border-white/20 bg-white/5 hover:bg-white/10 px-8 py-6 text-base sm:text-lg rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <Link href="#services">Explore Solutions</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

