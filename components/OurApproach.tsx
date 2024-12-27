'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Code, BarChart, Users } from 'lucide-react'

const approaches = [
  {
    icon: Lightbulb,
    title: "Strategic Consultation",
    description: "We start by understanding your unique challenges and goals, crafting a tailored AI strategy that aligns with your business objectives."
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Our expert team develops bespoke AI solutions, leveraging cutting-edge technologies to address your specific needs and requirements."
  },
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description: "We help you unlock the power of your data, providing actionable insights that drive informed decision-making and business growth."
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "We ensure smooth integration of AI solutions into your existing workflows, minimizing disruption and maximizing adoption."
  }
]

export function OurApproach() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
        >
          Our Approach to AI Implementation
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#0A1A40]/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/10"
            >
              <approach.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{approach.title}</h3>
              <p className="text-blue-100/70">{approach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

