'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[#020B2D]">
      <div className="absolute inset-0 bg-gradient-to-b from-black   via-blue-800 to-black" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <span className="text-blue-400 to text-xl">
            Ready</span>
            <span className="text-blue-400 to text-xl">to</span>
            <span className="text-blue-400 to text-xl">talk</span>
            <span className="text-blue-400 to text-xl">data</span>
          
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight">
            Let's turn complexity<br />
            into capability
          </h2>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Whether you're looking to automate processes, streamline operations, or unlock 
            new opportunities – we'll work alongside your team to implement solutions that 
            scale (with) your business.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="pt-8"
          >
            <Button 
              asChild
              className="bg-white text-blue-900 hover:bg-white/90 px-8 py-2 text-sm rounded-full"
            >
              <Link href="/contact" className="flex items-center">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
