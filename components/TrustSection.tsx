import { motion } from 'framer-motion'
import { Shield, Zap, Users, Target, Scale, Lightbulb } from 'lucide-react'

const trustFactors = [
  { 
    title: "Established Experience", 
    description: "Proven track record in delivering AI solutions",
    icon: Shield,
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  { 
    title: "Cutting-edge Technology", 
    description: "Leveraging the latest advancements in AI",
    icon: Zap,
    gradient: "from-purple-600/20 to-pink-600/20"
  },
  { 
    title: "Expert Team", 
    description: "Highly skilled professionals in AI and data science",
    icon: Users,
    gradient: "from-pink-600/20 to-blue-600/20"
  },
  { 
    title: "Tailored Solutions", 
    description: "Customized approaches for each client's needs",
    icon: Target,
    gradient: "from-blue-600/20 to-purple-600/20"
  },
  { 
    title: "Scalable Infrastructure", 
    description: "Robust systems to handle growing demands",
    icon: Scale,
    gradient: "from-purple-600/20 to-pink-600/20"
  },
  { 
    title: "Continuous Innovation", 
    description: "Staying ahead with ongoing research and development",
    icon: Lightbulb,
    gradient: "from-pink-600/20 to-blue-600/20"
  }
]

export function TrustSection() {
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
          Why our clients trust us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group glass-card glass-card-hover rounded-3xl p-8"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${factor.gradient} flex items-center justify-center mb-6`}>
                <factor.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{factor.title}</h3>
              <p className="text-blue-100/80 text-lg">{factor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

