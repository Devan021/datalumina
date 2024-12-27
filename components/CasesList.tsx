import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    id: 'crypto-insiders',
    title: "Real-time Coin Data for Crypto Insiders",
    description: "Delivered lightning-fast cryptocurrency data to over 2 million monthly visitors, enhancing user experience and solidifying Crypto Insiders' market position.",
    image: "/case-crypto-insiders.jpg",
    logo: "/logos/crypto-insiders.svg",
    tags: ["FinTech", "Real-time Data", "Scalability"],
    gradient: "from-blue-600/20 to-purple-600/20",
    metrics: [
      { label: "Response Time", value: "<200ms" },
      { label: "Monthly Visitors", value: "2M+" },
      { label: "Uptime", value: "99.99%" }
    ]
  },
  {
    id: 'blank-customer-service',
    title: "AI-Powered Customer Service for BLANK",
    description: "Revolutionized customer support for BLANK, a leading e-commerce brand, by implementing an AI-driven solution that dramatically improved response times and customer satisfaction.",
    image: "/case-blank.jpg",
    logo: "/logos/blank.svg",
    tags: ["E-commerce", "AI", "Customer Service"],
    gradient: "from-purple-600/20 to-pink-600/20",
    metrics: [
      { label: "Response Time", value: "-60%" },
      { label: "Customer Satisfaction", value: "+40%" },
      { label: "Tickets Automated", value: "70%" }
    ]
  },
  {
    id: 'timescale-embeddings',
    title: "Timescale Embeddings Simplification",
    description: "Collaborated with Timescale to showcase their innovative PostgreSQL extensions, simplifying complex embeddings for AI developers and expanding the reach of cutting-edge database technology.",
    image: "/case-timescale.jpg",
    logo: "/logos/timescale.svg",
    tags: ["Database", "AI", "Developer Tools"],
    gradient: "from-pink-600/20 to-blue-600/20",
    metrics: [
      { label: "Tutorial Views", value: "100K+" },
      { label: "GitHub Stars", value: "+2K" },
      { label: "Developer Adoption", value: "+150%" }
    ]
  }
]

export function CasesList() {
  const [filter, setFilter] = useState('All')

  const filteredCases = filter === 'All' 
    ? cases 
    : cases.filter(c => c.tags.includes(filter))

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-2 rounded-full ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-blue-500/10 text-blue-300'}`}
          >
            All
          </button>
          {Array.from(new Set(cases.flatMap(c => c.tags))).map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full ${filter === tag ? 'bg-blue-500 text-white' : 'bg-blue-500/10 text-blue-300'}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-[#0A1A40] flex flex-col"
            >
              <div className="relative h-64">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} mix-blend-overlay`}></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                <p className="text-blue-100/70 mb-6 flex-grow">{caseStudy.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{metric.value}</div>
                      <div className="text-sm text-blue-200">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Image 
                    src={caseStudy.logo} 
                    alt={`${caseStudy.title} logo`}
                    width={80}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <Link 
                    href={`/cases/${caseStudy.id}`}
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center group"
                  >
                    Read case study 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

