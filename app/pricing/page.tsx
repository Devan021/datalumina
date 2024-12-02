"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useRouter } from 'next/navigation'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const router = useRouter()

  const plans = [
    {
      title: "AI Text Chatbots",
      price: isAnnual ? "$2,700" : "$3,000",
      period: isAnnual ? "/year" : "/month",
      features: [
        "Advanced Automations",
        "Rigorous Testing",
        "24/7 Priority Support",
        "Social Media Integrations",
        "Latest AI Models",
      ],
      isPopular: false,
    },
    {
      title: "AI Voice Agents",
      price: isAnnual ? "$3,600" : "$4,000",
      period: isAnnual ? "/year" : "/month",
      features: [
        "Advanced Automations",
        "Human Like Quality",
        "24/7 Priority Support",
        "Weekly Development Calls",
        "Rigorous Testing",
        "Latest AI Models",
      ],
      isPopular: true,
    },
  ]

  const handleGetStarted = () => {
    router.push('/?scrollTo=book-your-free-discovery-call')
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that best fits your needs. No hidden fees, no surprises.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-green-500 font-bold">(Save 10%)</span>
            </span>
          </div>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`overflow-hidden h-full flex flex-col ${plan.isPopular ? 'border-primary shadow-lg' : 'border-gray-200'}`}>
                {plan.isPopular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gray-900 text-white hover:bg-gray-800"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

