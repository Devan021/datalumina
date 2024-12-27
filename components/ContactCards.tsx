'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

const contactCards = [
  {
    title: "Work with us",
    description: "Ready to bring AI to production? We specialize in guiding engineering teams through AI transformation — from team training and product strategy to implementation. Whether you're building AI-powered features or scaling existing solutions, let's explore how we can create value together.",
    email: "BUSINESS@DATALUMINA.COM"
  },
  {
    title: "Get answers",
    description: "Curious about how we turn complexity into capability? Want specifics about our approach? We're here to cut through the noise and give you clarity. Ask us anything.",
    email: "INFO@DATALUMINA.COM"
  }
]

export function ContactCards() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              className="group rounded-3xl bg-[#010B2C]/80 border border-blue-500/10 p-8 sm:p-12 backdrop-blur-sm hover:bg-[#011142]/80 transition-colors"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="space-y-4 max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="text-blue-100/70 text-base sm:text-lg">
                    {card.description}
                  </p>
                </div>
                <Link 
                  href={`mailto:${card.email.toLowerCase()}`}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link text-base sm:text-lg font-medium"
                >
                  {card.email}
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

