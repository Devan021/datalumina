import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const cases = [
  {
    category: "AI-Powered Support",
    title: "Revolutionizing Customer Service for Solve",
    description: "Solve implemented AI-driven solutions to streamline their customer support processes, leading to faster response times and higher customer satisfaction.",
    image: "/data.png",
    logo: "/solve.jpg"
  },
  {
    category: "AI-Powered Automation",
    title: "Supercharging Operations with AI Automation for InnPixel",
    description: "InnPixel AI revolutionized their operations with AI-powered automation, significantly improving client onboarding and scaling their operations without increasing headcount.",
    image: "/data1.png",
    logo: "/innpixel.png"
  },
  {
    category: "Real Estate AI Support",
    title: "Transforming Real Estate Engagement with AI Agents for GreenView Realty",
    description: "GreenView Realty implemented AI-driven agents, resulting in faster response times and improved sales conversions by automating customer interactions.",
    image: "/data.png",
    logo: "/greenview.jpeg"
  }
]

export function OrganizationsCases() {
  return (
    <section className="relative py-20 sm:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Cases</h2>
          <p className="text-blue-100/70 max-w-3xl text-sm sm:text-base">
            Our work extends from initial strategy development to full implementation, always focusing on practical outcomes that drive solid business value. Here are some of our most recent projects:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl bg-blue-950/20 border border-blue-500/10 overflow-hidden"
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="text-xs sm:text-sm text-blue-400 mb-3 sm:mb-4">{caseStudy.category}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{caseStudy.title}</h3>
                <p className="text-blue-100/70 mb-6 text-sm sm:text-base line-clamp-3">{caseStudy.description}</p>
                <Link href="/cases" passHref>
                  <Button 
                    variant="ghost" 
                    className="text-blue-400 hover:text-blue-300 p-0 group flex items-center text-sm sm:text-base"
                  >
                    READ MORE 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 sm:mt-16"
        >
          <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900  to-blue-1000 p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-6 sm:mb-0 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Let's talk about how we can help you get from complexity to capability
              </h3>
            </div>
            <Button 
              className="bg-white text-blue-600 hover:bg-white/90 rounded-full px-6 py-2 text-sm sm:text-base"
            >
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

