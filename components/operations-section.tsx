"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Cog, Zap, Clock } from 'lucide-react'

export default function OperationsSection() {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Pause anytime",
      description: "The best systems are built in short bursts. Get what you need and pause or cancel anytime.",
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "No bloat",
      description: "We offer async project updates and weekly ops consultations. Systems revised until you're 100% satisfied.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Results twice as fast",
      description: "Start as early as tomorrow. Quick onboarding and immediate setup on our PM system.",
    },
  ]

  return (
    <section id="operations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            Operations as a <span className="text-gradient">Service</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            On-demand automation experts on a simple monthly subscription to give you the systems you need for less.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

