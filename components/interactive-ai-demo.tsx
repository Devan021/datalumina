'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Send, User, Bot } from 'lucide-react'

const chatbotResponses = {
  "email": "To automate email management, we can implement an AI-powered system that categorizes emails, auto-responds to common queries, and prioritizes important messages.",
  "customer service": "For customer service automation, we offer AI chatbots that can handle frequently asked questions, route complex issues to human agents, and provide 24/7 support.",
  "inventory": "To automate inventory management, we can implement an AI system that predicts demand, optimizes stock levels, and automates reordering processes.",
  "default": "I'd be happy to discuss how we can automate that task for you. Could you provide more details about your specific needs?"
}

export default function InteractiveAIDemo() {
  const [input, setInput] = useState('')
  const [chat, setChat] = useState<{type: 'user' | 'bot', message: string}[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { type: 'user' as const, message: input }
    setChat(prev => [...prev, userMessage])

    let botResponse = chatbotResponses.default
    Object.keys(chatbotResponses).forEach(key => {
      if (input.toLowerCase().includes(key)) {
        botResponse = chatbotResponses[key as keyof typeof chatbotResponses]
      }
    })

    setTimeout(() => {
      setChat(prev => [...prev, { type: 'bot', message: botResponse }])
    }, 1000)

    setInput('')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gradient">
            Experience AI in Action
          </h2>
          <p className="text-xl text-gray-400">
            Try our AI assistant and see how it can transform your business
          </p>
        </motion.div>

        <Card className="w-full max-w-4xl mx-auto bg-secondary/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-primary">
              Interactive AI Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">AI Assistant</h3>
                <div className="h-[400px] overflow-y-auto p-4 rounded-lg bg-background/30 space-y-4">
                  {chat.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          {message.message}
                        </div>
                        {message.type === 'user' ? (
                          <User className="w-6 h-6 text-primary" />
                        ) : (
                          <Bot className="w-6 h-6 text-primary" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder="Ask about our AI solutions..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-grow bg-background text-white border-gray-700"
                  />
                  <Button type="submit" className="bg-primary text-primary-foreground">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-primary">AI Workflow</h3>
                <div className="h-[400px] p-6 rounded-lg bg-background/30">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="font-semibold text-primary mb-4">Email Automation Process</h4>
                    <ul className="space-y-4">
                      {[
                        "Receive incoming email",
                        "AI analyzes content and intent",
                        "Categorize and prioritize",
                        "Auto-respond or route to human agent",
                        "Update CRM with interaction details"
                      ].map((step, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary font-semibold">{index + 1}</span>
                          </div>
                          <span className="text-gray-300">{step}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

