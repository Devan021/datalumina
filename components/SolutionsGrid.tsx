'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: "Building Systems with LLMs",
    description: "Our expertise in LLMs allows us to design and optimize powerful AI-driven systems tailored to your needs.",
  },
  {
    title: "Production-Ready AI Solutions",
    description: "We guide you through the entire process, from prototyping to full-scale production, ensuring your AI initiatives are successful and scalable.",
  },
  {
    title: "Data Platform Engineering",
    description: "Building robust and scalable data platforms on Azure to support your AI initiatives.",
  },
  {
    title: "Deploying AI Applications",
    description: "We ensure your data-centric and AI applications are deployed seamlessly, with industry-best practices.",
  },
  {
    title: "Upskilling Your Engineering Team",
    description: "We provide hands-on training to elevate your team's skills, ensuring they're equipped to maintain and evolve your AI systems.",
  },
  {
    title: "Integrating AI into Your Stack",
    description: "We help you incorporate AI into your current systems to enhance their capabilities without disrupting existing workflows.",
  }
]

export function SolutionsGrid() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl bg-[#010B2C] border border-blue-500/10 p-6 sm:p-8 hover:bg-[#011142] transition-colors"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-blue-100/70 mb-6 text-sm sm:text-base">
                  {solution.description}
                </p>
                <div className="mt-auto">
                  <button className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

