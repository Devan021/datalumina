'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const services = [
 {
   number: "01",
   label: "Datalumina",
   title: "Development",
   subtitle: "Custom AI solutions & data platforms",
   description: "Whether it's data warehousing or intelligent systems, we architect and implement scalable solutions that transform complex problems into competitive advantages for our clients."
 },
 {
   number: "02",
   label: "Datalumina",
   title: "Consulting",
   subtitle: "Strategic AI implementation & transformation",
   description: "We guide organizations and startups through their AI journey, combining deep technical expertise with strong strategic insight."
 },
 {
   number: "03",
   label: "Datalumina",
   title: "Training",
   subtitle: "Comprehensive AI education",
   description: "We empower teams with the knowledge and skills needed to leverage AI effectively, ensuring long-term success and innovation."
 }
]

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section id="services" className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-black   via-blue-800 to-blue-990/50">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16"
        >
          <h2 className="text-5xl font-bold text-white">Services</h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            From building enterprise-grade AI platforms to guiding digital transformation and upskilling development teams, we help you move beyond any boundaries of what's possible, pointing you to AI and data technologies that make sense in helping you grow.
          </p>
        </motion.div>

        {isMobile ? (
          <div className="relative">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="rounded-[24px] overflow-hidden bg-[#000213] relative p-8"
            >
              <div className="flex flex-col">
                <span className="text-sm text-white/80 mb-1">{services[currentSlide].label}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{services[currentSlide].title}</h3>
                <div className="absolute top-8 right-8 text-8xl font-bold text-white/10">
                  {services[currentSlide].number}
                </div>
                <h4 className="text-xl text-white font-medium mb-4">{services[currentSlide].subtitle}</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  {services[currentSlide].description}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-white hover:text-blue-200 transition-colors group mt-auto"
                >
                  READ MORE <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
            <div className="flex justify-between mt-4">
              <button onClick={prevSlide} className="p-2 bg-blue-500 rounded-full text-white">
                <ChevronLeft />
              </button>
              <button onClick={nextSlide} className="p-2 bg-blue-500 rounded-full text-white">
                <ChevronRight />
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group rounded-[24px] overflow-hidden bg-[#000213] relative"
              >
                {/* Mobile Design */}
                <div className="block lg:hidden p-8">
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80 mb-1">{service.label}</span>
                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <div className="absolute top-8 right-8 text-8xl font-bold text-white/10">
                      {service.number}
                    </div>
                    <h4 className="text-xl text-white font-medium mb-4">{service.subtitle}</h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-white hover:text-blue-200 transition-colors group mt-auto"
                    >
                      READ MORE <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Desktop Design */}
                <div className="hidden lg:flex h-full">
                  <div className="w-1/2 relative overflow-hidden">
                    <div 
                      className="absolute inset-0" 
                      style={{
                        background: 'radial-gradient(circle at top left, #3A4FFF, rgba(58, 79, 255, 0) 100%)'
                      }}
                    />
                    <div className="absolute left-8 bottom-8 text-[12rem] font-bold text-white/10 leading-none">
                      {service.number}
                    </div>
                    <div className="p-8 relative z-10">
                      <span className="text-sm text-white/80 mb-1">{service.label}</span>
                      <h3 className="text-4xl font-bold text-white mt-2">{service.title}</h3>
                    </div>
                  </div>
                  <div className="w-1/2 p-8 flex flex-col">
                    <h4 className="text-xl text-white font-medium mb-4">{service.subtitle}</h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-white hover:text-blue-200 transition-colors group mt-auto"
                    >
                      READ MORE <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
























