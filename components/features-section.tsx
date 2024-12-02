import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Shield, Cpu, BarChart, Globe, Clock } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Lightning Fast AI",
    description: "Our advanced AI agents respond in milliseconds, ensuring seamless and instant customer interactions."
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and compliance measures to protect your data with 99.99% uptime guarantee."
  },
  {
    icon: <Cpu className="h-6 w-6 text-primary" />,
    title: "Cutting-Edge AI Models",
    description: "Leveraging the latest in machine learning for human-like conversations and decision-making."
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain deep, actionable insights from every interaction to continuously improve your business strategies."
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Multilingual Support",
    description: "AI agents fluent in over 50 languages, enabling global customer engagement and support."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "24/7 Availability",
    description: "Round-the-clock AI-powered support and operations, never missing a beat in your business."
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Why Choose <span className="text-gradient">HOLLER LABS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of business automation with our state-of-the-art AI solutions
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <motion.div 
                      className="rounded-full bg-primary/10 p-3 mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

