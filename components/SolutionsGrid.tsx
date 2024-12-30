'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

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
    <section id="solutions" className="relative py-16 sm:py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Tailored Solutions for Every Challenge
          </h2>
          <p className="text-blue-100/80 text-base sm:text-lg max-w-3xl mx-auto">
            Explore how our expertise can transform your business with cutting-edge AI and data solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="group rounded-2xl bg-[#0F172A] border border-blue-500/20 p-6 sm:p-8 shadow-lg hover:shadow-xl hover:bg-[#162033] transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-3" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-blue-100/70 mb-6 text-sm sm:text-base leading-relaxed">
                  {solution.description}
                </p>
                <div className="mt-auto">
                  <Link href="/contact" passHref>
                    <button className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium transition-colors">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  )
}
