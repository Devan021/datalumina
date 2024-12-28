'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const insights = [
  {
    id: "future-of-ai-in-business",
    title: "Why Generative AI Often Fails to Deliver Value",
    description: "Many organizations rush to implement generative AI without proper planning and infrastructure, leading to failed initiatives and wasted resources.",
    image: "/data.png",
    category: "AI Implementation",
    author: {
      name: "Deva Nandhan",
      role: "Chief Technology Officer",
      avatar: "/devan.jpg"
    }
  },
  {
    id: "how-ai-revolutionizes-healthcare",
    title: "How AI is Revolutionizing Healthcare",
    description: "Artificial Intelligence is transforming healthcare by improving patient outcomes, streamlining tasks, and advancing medical research.",
    image: "/healthcareai.jpg",
    category: "AI in Healthcare",
    author: {
      name: "Eswar Lakkakula",
      role: "Strategy Lead",
      avatar: "/eswar.jpeg"
    }
  },
  {
    id: "ai-transforming-b2b-sales",
    title: "How AI is Transforming B2B Sales Strategies",
    description: "AI is enabling B2B companies to personalize customer interactions, improve lead scoring, and optimize sales strategies for better results.",
    image: "/b2b.png",
    category: "AI in Business",
    author: {
      name: "Eswar Lakkakula",
      role: "Strategy Lead",
      avatar: "/eswar.jpeg"
    }
  }
]

export function InsightsSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-black via-blue-800 to-black">
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
              key={insight.id}
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
                    asChild
                  >
                    <Link href={`/insights/${insight.id}`}>
                      READ ARTICLE
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
