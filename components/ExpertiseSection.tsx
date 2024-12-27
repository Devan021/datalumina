import { motion } from 'framer-motion'
import { Brain, Cpu, Database, Network, Cloud } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Develop cutting-edge ML models to solve complex business problems and drive innovation."
  },
  {
    icon: Database,
    title: "Big Data Analytics",
    description: "Harness the power of big data to extract valuable insights and inform strategic decisions."
  },
  {
    icon: Network,
    title: "AI Integration",
    description: "Seamlessly integrate AI solutions into existing systems and workflows for maximum impact."
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Implement AI at the edge for real-time processing and reduced latency in critical applications."
  },
  {
    icon: Cloud,
    title: "Cloud AI Solutions",
    description: "Design and implement scalable AI solutions leveraging cloud technologies for maximum flexibility and performance."
  },
]

export function ExpertiseSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to deliver transformative AI solutions across industries.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-800/30 rounded-lg p-6 backdrop-blur-sm border border-blue-700/50 hover:border-blue-500/50 transition-colors"
            >
              <area.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{area.title}</h3>
              <p className="text-blue-200">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

