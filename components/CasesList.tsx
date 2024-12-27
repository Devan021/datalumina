import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    id: 'solvemyhealth',
    title: "Transforming healthcare with AI-driven chat solutions for SOLVEMyHealth",
    description: "Delivered rapid healthcare insights to over 2 million monthly users, elevating experience and strengthening SOLVEMyHealth's leadership.",
    image: "/blue.jpg",
    logo: "/solvemy.jpg",
    tags: ["Healthcare", "Real-time Data", "Scalability"],
    gradient: "from-blue-600/20 to-purple-600/20",
    metrics: [
      { label: "Response Time", value: "<100ms" },
      { label: "Monthly Visitors", value: "100K+" },
      { label: "Uptime", value: "99.99%" }
    ]
  },
  {
    id: 'innpixelai',
    title: "Supercharging Operations with AI Automation for innPixelAI",
    description: "Revolutionized customer support for inPixelAI, a leading Digital Marketing Agency, by implementing an AI-driven solution that dramatically improved response times and customer satisfaction.",
    image: "/blue.jpg",
    logo: "/innpixel.png",
    tags: ["Digital-Marketing", "AI", "Customer Service"],
    gradient: "from-purple-600/20 to-pink-600/20",
    metrics: [
      { label: "Response Time", value: "-60%" },
      { label: "Customer Satisfaction", value: "+40%" },
      { label: "Tickets Automated", value: "70%" }
    ]
  },
  {
    id: 'greenviewrealty',
    title: "Transforming Real Estate Engagement with AI Agents for GreenView Realty",
    description: "GreenView Realty, a mid-sized real estate agency in Los Angeles, leveraged AI-driven agents to enhance customer engagement, reduce response time, and increase sales conversions.",
    image: "/blue.jpg",
    logo: "/greenview.jpeg",
    tags: ["Real Estate", "AI", "Customer Engagement"],
    gradient: "from-green-600/20 to-blue-600/20",
    metrics: [
      { label: "Response Time Reduction", value: "40%" },
      { label: "Conversion Increase", value: "30%" },
      { label: "Customer Inquiries Managed", value: "500K+" }
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

