'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

const cases = [
  { 
    title: "AI-Powered Financial Forecasting", 
    description: "Revolutionizing financial predictions for a Fortune 500 company", 
    image: "/case-finance.jpg",
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  { 
    title: "Optimizing Supply Chain with ML", 
    description: "Reducing costs and improving efficiency for a global retailer", 
    image: "/case-supply-chain.jpg",
    gradient: "from-purple-600/20 to-pink-600/20"
  },
  { 
    title: "Personalized Healthcare Recommendations", 
    description: "Enhancing patient care with AI-driven insights", 
    image: "/case-healthcare.jpg",
    gradient: "from-pink-600/20 to-blue-600/20"
  }
]

export function CasesSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue-950/50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          Case Studies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group glass-card glass-card-hover rounded-3xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} mix-blend-overlay`}></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{caseStudy.title}</h3>
                <p className="text-blue-100/80 mb-6">{caseStudy.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-blue-300 p-0 group flex items-center"
                >
                  Read case study 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Button 
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View All Case Studies
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

