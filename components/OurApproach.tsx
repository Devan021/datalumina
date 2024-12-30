'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Code, BarChart, Users, Zap, Shield } from 'lucide-react'

const approaches = [
  {
    icon: Lightbulb,
    title: "Strategic Consultation",
    description: "We start by understanding your unique challenges and goals, crafting a tailored AI strategy that aligns with your business objectives.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Our expert team develops bespoke AI solutions, leveraging cutting-edge technologies to address your specific needs and requirements.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    description: "We help you unlock the power of your data, providing actionable insights that drive informed decision-making and business growth.",
    color: "from-green-400 to-emerald-500"
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "We ensure smooth integration of AI solutions into your existing workflows, minimizing disruption and maximizing adoption.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Zap,
    title: "Continuous Optimization",
    description: "Our iterative approach ensures your AI solutions evolve with your business, continuously improving performance and ROI.",
    color: "from-red-400 to-rose-500"
  },
  {
    icon: Shield,
    title: "Ethical AI Practices",
    description: "We prioritize responsible AI development, ensuring transparency, fairness, and privacy in all our solutions.",
    color: "from-teal-400 to-cyan-500"
  }
]

export function OurApproach() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 bg-gradient-to-b bg-gradient-to-b from-black   via-blue-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Approach to AI Implementation
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We combine strategic insight with technical expertise to deliver AI solutions that drive real business value.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -m-1 p-1">
                <div className={`absolute inset-0 bg-gradient-to-r ${approach.color} rounded-2xl blur-xl`} />
              </div>
              <div className="bg-blue-800/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/10 relative z-10 h-full transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${approach.color}`}>
                    <approach.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white ml-4">{approach.title}</h3>
                </div>
                <p className="text-blue-200">{approach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

