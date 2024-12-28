"use client";

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { StarfieldAnimation } from './StarfieldAnimation';
import { ScrollIndicator } from './scrollIndicator';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slows down stagger between child animations
        delayChildren: 1, // Start animating children after a delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Increase duration for smoother and slower animation
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <StarfieldAnimation />
      
      {/* Enhanced mobile-optimized gradient background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] bg-blue-500 rounded-full filter blur-[80px] sm:blur-[120px] opacity-20 z-0"
      />
      
      {/* Enhanced background layers */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.15] bg-[length:20px_20px] sm:bg-[length:30px_30px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-5 sm:space-y-8 z-20 px-4"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-3"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
            Worlds Best Affordable AI Agents
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 hidden sm:block" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] sm:leading lg:leading-tight lg:tracking-tight sm:tracking-medium text-balance"
        >
          Simplifying Your Future{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 inline-block">
            Affordably
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed"
        >
          Revolutionizing businesses with affordable AI solutions that transform the way you work
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-row justify-center items-center gap-3 sm:gap-4 pt-6 sm:pt-8"
        >
          <Button 
            asChild
            className="group w-auto bg-blue-100 text-black hover:bg-blue-800 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:text-white flex items-center justify-center gap-2"
          >
            <Link href="/contact">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="w-auto text-white border-white/20 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-sm font-medium rounded-full backdrop-blur-sm transition-all duration-300 hover:border-white/40"
          >
            <Link href="/for-organizations">
              Explore Solutions
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="pt-8 sm:pt-12"
        >
          <p className="text-white/40 text-sm">Join us to Conquer the World with AI</p>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
