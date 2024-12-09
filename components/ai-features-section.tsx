'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedAIService() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Featured AI Service: <span className="text-gradient">AI-Powered Chatbot</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of customer interaction with our advanced AI chatbot
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Transform Your Customer Support</h3>
            <p className="text-gray-600 mb-6">
              Our AI-powered chatbot provides instant, accurate responses to customer queries 24/7. 
              It learns from each interaction, continuously improving its performance and 
              personalizing the experience for each user.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Natural Language Processing for human-like conversations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Multi-architecture support for global businesses
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Seamless integration with your existing systems
              </li>
            </ul>
            <Link 
              href="https://calendly.com/eswarsairam22/hollerlabs_free_discovery_call" 
              target="_blank" 
              rel="noopener noreferrer" 
              passHref
            >
              <Button className="group" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white shadow-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Bot className="h-8 w-8 text-primary mr-2" />
                    <span className="font-semibold text-lg">AI Chatbot</span>
                  </div>
                  <div className="text-sm text-gray-500">Online</div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-3 max-w-xs">
                      Hello! How can I help you today?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg py-2 px-3 max-w-xs">
                      I have a question about your services.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-3 max-w-xs">
                      Of course! I'd be happy to help. What specific service are you interested in?
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

