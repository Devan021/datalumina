"use client";

import { motion } from 'framer-motion'
import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const cases = [
  {
    slug: "solvemyhealth",
    category: "Healthcare",
    title: "Transforming healthcare with AI-driven chat solutions for SOLVEMyHealth",
    description: "Delivered rapid healthcare insights to over 2 million monthly users, elevating experience and strengthening SOLVEMyHealth's leadership.",
    logo: "/solvemy.jpg",
    image: "/data.png",
    metrics: [
      { label: "Response Time", value: "<100ms" },
      { label: "Monthly Visitors", value: "100K+" },
      { label: "Uptime", value: "99.99%" }
    ]
  },
  {
    slug: "innpixelai",
    category: "AI-Powered Automation",
    title: "Supercharging Operations with AI Automation for InnPixel",
    description: "InnPixel AI revolutionized their operations with AI-powered automation, significantly improving client onboarding and scaling their operations without increasing headcount.",
    logo: "/innpixel.png",
    image: "/data1.png", // Replace with actual image if needed
    metrics: [
      { label: "Client Onboarding Efficiency", value: "+90%" },
      { label: "Report Generation Time", value: "-80%" },
      { label: "Client Handling Capacity", value: "+25%" }
    ]
  },
  {
    slug: "greenviewrealty",
    category: "AI-Powered Real Estate Support",
    title: "Transforming Real Estate Engagement with AI Agents for GreenView Realty",
    description: "GreenView Realty implemented AI-driven agents, resulting in faster response times and improved sales conversions by automating customer interactions.",
    logo: "/greenview.jpeg",
    image: "/data.png", // Replace with actual image if needed
    metrics: [
      { label: "Response Time Reduction", value: "-40%" },
      { label: "Sales Conversions Increase", value: "+30%" },
      { label: "AI-Agent Interactions", value: "100K+" }
    ]
  }  
]

export function CasesSection() {
  return (
    <section className="relative py-24 sm:py-32 px-4 overflow-hidden bg-[#020B2D]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Case Studies</h2>
          <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
            Explore how we've helped organizations across industries leverage AI and data to achieve extraordinary results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <Link href={`/cases/${caseStudy.slug}`}>
                <div className="rounded-3xl overflow-hidden bg-blue-950/50 backdrop-blur-sm relative flex flex-col h-full border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="relative h-56 sm:h-64">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8 flex-grow">
                    <span className="inline-block px-3 py-1 text-sm text-blue-300 bg-blue-500/10 rounded-full mb-4">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">
                      {caseStudy.title}
                    </h3>
                    <p className="text-blue-100/80 text-sm sm:text-base mb-6">
                      {caseStudy.description}
                    </p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="text-lg sm:text-2xl font-bold text-blue-400">{metric.value}</div>
                          <div className="text-xs sm:text-sm text-blue-200/60">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 border-t border-blue-500/10 flex items-center justify-between">
                    <Image
                      src={caseStudy.logo}
                      alt="Company logo"
                      width={80}
                      height={30}
                      className="h-6 sm:h-8 w-auto"
                    />
                    <span className="text-blue-300 group-hover:text-blue-200 transition-colors inline-flex items-center group/link">
                      Read case study
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
            <Link href="/cases" className="inline-flex items-center">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

