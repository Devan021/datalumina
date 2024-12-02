"use client"

import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Bot, Mail, ArrowRight, Brain } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function AIAgentsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const router = useRouter()

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const agents = [
    {
      icon: <Phone className="w-10 h-10" />,
      title: "AI Phone Agents",
      description: "Handle call inquiries and appointments automatically"
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "Website Chatbots",
      description: "Provide 24/7 customer support and lead qualification"
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email Agents",
      description: "Automate sales outreach and support communications"
    }
  ]

  return (
    <section id="ai-agents"ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity, y }}
          className="space-y-20"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                AI Agents: Your <span className="text-gradient">Digital Workforce</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empower your business with AI agents that work tirelessly to drive growth and efficiency
              </p>
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {agents.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full bg-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex-grow">
                        <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mb-4 text-primary group-hover:text-secondary transition-colors duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-50" />
                <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-20" />
                <div className="relative p-8 sm:p-12">
                  <div className="flex flex-col items-center text-center text-white max-w-3xl mx-auto">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 0.5
                      }}
                      className="relative"
                    >
                      <Brain className="w-24 h-24 mb-6 text-white" />
                      <div className="absolute inset-0 bg-white rounded-full filter blur-xl opacity-50" style={{ transform: 'scale(0.75)' }} />
                    </motion.div>
                    <h3 className="text-4xl font-bold mb-6">Supercharge Your Operations</h3>
                    <p className="text-xl mb-8 text-gray-300">
                    Our AI agents work 24/7, managing tasks with unmatched precision and efficiency. Focus on growth while we enhance automation and lead engagement.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-white text-gray-900 hover:bg-gray-100 group relative overflow-hidden"
                        onClick={() => router.push('/pricing')}
                      >
                        <span className="relative z-10 flex items-center">
                          View Pricing
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

