import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const cases = [
  {
    category: "Software Development",
    title: "Delivering real-time coin data to millions of Crypto...",
    description: "Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, offered over 7 million...",
    image: "/cases/crypto-insiders.jpg",
    logo: "/logos/crypto-insiders.svg"
  },
  {
    category: "AI Engineering",
    title: "Transforming BLANK's customer service with AI",
    description: "BLANK is a prominent e-commerce brand focused on sunglasses, with over 200k customers around the world. Their customer support team faced challenges in managing high-ticket volumes while maintaining...",
    image: "/cases/blank.jpg",
    logo: "/logos/blank.svg"
  },
  {
    category: "YouTube Collaboration",
    title: "Partnering with Timescale to simplify embeddings for AI developers",
    description: "This case highlights the collaboration with Timescale to showcase their innovative PostgreSQL extensions, pgvector/timescale and pgtl. Through a series of tutorials...",
    image: "/cases/timescale.jpg",
    logo: "/logos/timescale.svg"
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
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-400 p-6 sm:p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between">
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

