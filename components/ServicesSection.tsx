import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Brain, Users, Cloud, BookOpen } from 'lucide-react'

const services = [
  { 
    number: "01", 
    title: "AI Development", 
    description: "Cutting-edge AI solutions tailored to your business needs",
    icon: Code
  },
  { 
    number: "02", 
    title: "Data Analytics", 
    description: "Transform raw data into actionable insights",
    icon: Database
  },
  { 
    number: "03", 
    title: "Machine Learning", 
    description: "Implement ML models to automate and optimize processes",
    icon: Brain
  },
  { 
    number: "04", 
    title: "Consulting", 
    description: "Expert guidance on AI strategy and implementation",
    icon: Users
  },
  { 
    number: "05", 
    title: "Cloud Solutions", 
    description: "Scalable and secure cloud infrastructure for AI workloads",
    icon: Cloud
  },
  { 
    number: "06", 
    title: "Training", 
    description: "Empower your team with AI and data science skills",
    icon: BookOpen
  }
]

export function ServicesSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-black/50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group glass-card glass-card-hover rounded-3xl p-8"
            >
              <div className="relative">
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-blue-500/10 transition-all duration-300 group-hover:text-blue-500/20">
                  {service.number}
                </div>
                <service.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-blue-100/80 mb-8 text-lg">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-blue-300 p-0 group flex items-center text-lg"
                >
                  Learn more 
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

