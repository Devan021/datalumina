"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const insights = [
  {
    title: "The Future of AI in Business",
    description: "Exploring how artificial intelligence is reshaping industries and driving innovation.",
    image: "/demo.jpg",
    author: {
      name: "Dr Aswin Santiago",
      role: "AI Research Lead",
      avatar: "/avatar-ashwin-santiago.jpg"
    },
    category: "Artificial Intelligence"
  },
  {
    title: "Data Privacy in the Age of Big Data",
    description: "Navigating the complex landscape of data protection and ethical use of information.",
    image: "/demo.jpg",
    author: {
      name: "Florence Shaw",
      role: "Data Ethics Specialist",
      avatar: "/avatar-florence-shaw.jpg"
    },
    category: "Data Ethics"
  },
  {
    title: "Machine Learning for Predictive Maintenance",
    description: "How ML is revolutionizing equipment maintenance across industries.",
    image: "/demo.jpg",
    author: {
      name: "Owen Garcia",
      role: "ML Engineer",
      avatar: "/avatar-owen-garcia.jpg"
    },
    category: "Machine Learning"
  }
]

export function InsightsList() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-[#0A1A40] flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1A40]/80"></div>
              </div>
              <div className="p-8 flex-grow">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 mb-4 inline-block">
                  {insight.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{insight.title}</h3>
                <p className="text-blue-100/70 mb-6">{insight.description}</p>
                <div className="flex items-center mb-6">
                  <Image
                    src={insight.author.avatar}
                    alt={insight.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-white font-medium">{insight.author.name}</p>
                    <p className="text-blue-300 text-sm">{insight.author.role}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-blue-300 p-0 group flex items-center"
                >
                  Read article 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

