'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const insights = [
  {
    title: "We're continuously gathering new intel",
    author: "Thomas Anderson",
    date: "Dec 16, 2024",
    image: "/blog-1.jpg",
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  {
    title: "Why generative AI often fails to deliver value",
    author: "Sarah Connor",
    date: "Dec 15, 2024",
    image: "/blog-2.jpg",
    gradient: "from-purple-600/20 to-pink-600/20"
  },
  {
    title: "Breaking down the challenges of implementation",
    author: "John Matrix",
    date: "Dec 14, 2024",
    image: "/blog-3.jpg",
    gradient: "from-pink-600/20 to-blue-600/20"
  }
]

export function InsightsSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-blue-950/50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our latest insights</h2>
          <p className="text-blue-100/80 text-xl max-w-2xl mx-auto">
            Stay updated with our latest thoughts on AI, data science, and digital transformation
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group glass-card glass-card-hover rounded-3xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} mix-blend-overlay`}></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">{post.title}</h3>
                <div className="flex items-center space-x-4 mb-6">
                  <Image
                    src="/placeholder-avatar.jpg"
                    alt={post.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-white font-medium">{post.author}</p>
                    <p className="text-blue-100/60 text-sm">{post.date}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-blue-300 p-0 group flex items-center"
                >
                  Read article 
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

