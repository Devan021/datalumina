"use client";

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue-950/50 backdrop-blur-sm"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's turn complexity into capability
          </h2>
          <p className="text-xl text-blue-100/80 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start the conversation and explore the possibilities together.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
          >
            Get in touch
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

