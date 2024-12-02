"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  {
    question: "What types of AI Agents do you offer?",
    answer: "We offer both text-based chatbots and voice AI agents. Our chatbots can handle customer service, lead qualification, and sales processes, while our voice agents can manage phone calls, appointments, and complex conversations."
  },
  {
    question: "How do you handle project timelines?",
    answer: "We work in agile sprints with clear milestones and deadlines. Most projects are completed within 2-4 weeks, depending on complexity. We provide regular updates and maintain transparent communication throughout the development process."
  },
  {
    question: "How do you ensure the quality of your projects?",
    answer: "We implement rigorous testing protocols, including automated testing, human review, and real-world scenarios. Each project goes through multiple QA stages before deployment, and we provide ongoing monitoring and optimization."
  },
  {
    question: "How often will I receive updates on the project?",
    answer: "We provide weekly progress reports and maintain daily communication through your preferred channel (Slack, email, etc.). You'll have access to our project management system to track progress in real-time."
  },
  {
    question: "What is your development process like?",
    answer: "Our development process follows an agile methodology with four main phases: Discovery, Design, Development, and Deployment. We emphasize collaboration, iterative improvement, and continuous feedback throughout the process."
  }
]

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>
        <Card className="bg-white shadow-xl">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full" onValueChange={setOpenItem}>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AnimatePresence>
                    {openItem === `item-${index + 1}` && (
                      <AccordionContent forceMount>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-600 mt-2">{faq.answer}</p>
                        </motion.div>
                      </AccordionContent>
                    )}
                  </AnimatePresence>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

