'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const insights = [
  {
    title: "The Future of AI in Business",
    description: "Exploring how artificial intelligence is reshaping industries and driving innovation across sectors.",
    image: "/insights/ai-business-future.jpg",
    category: "AI Trends",
    author: {
      name: "Dr. Emily Chen",
      role: "AI Research Lead",
      avatar: "/team/emily-chen.jpg"
    }
  },
  {
    title: "Implementing Ethical AI Practices",
    description: "A deep dive into the importance of ethical considerations in AI development and deployment.",
    image: "/insights/ethical-ai.jpg",
    category: "AI Ethics",
    author: {
      name: "Michael Johnson",
      role: "Ethics Specialist",
      avatar: "/team/michael-johnson.jpg"
    }
  },
  {
    title: "Optimizing Data Pipelines for AI",
    description: "Best practices for building efficient and scalable data pipelines to fuel your AI initiatives.",
    image: "/insights/data-pipelines.jpg",
    category: "Data Engineering",
    author: {
      name: "Sarah Thompson",
      role: "Lead Data Engineer",
      avatar: "/team/sarah-thompson.jpg"
    }
  }
]

export function InsightsSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[#020B2D]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white mb-16"
        >
          Our latest insights
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="rounded-3xl overflow-hidden bg-[#0A1A40] flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A40] to-transparent"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-3 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {insight.title}
                </h3>
                <p className="text-blue-100/70 mb-6 flex-grow">
                  {insight.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={insight.author.avatar}
                      alt={insight.author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-white font-medium">{insight.author.name}</p>
                      <p className="text-sm text-white/60">{insight.author.role}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 p-0"
                  >
                    READ ARTICLE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/insights" className="inline-flex items-center">
              View All Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

