'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Database, Cloud, Cpu, Container, Zap, Code, Server } from 'lucide-react'

const technologies = [
  { name: 'Docker', icon: Container, color: 'rgb(30, 64, 175)' },
  { name: 'PostgreSQL', icon: Database, color: 'rgb(37, 99, 235)' },
  { name: 'FastAPI', icon: Zap, color: 'rgb(59, 130, 246)' },
  { name: 'CPU', icon: Cpu, color: 'rgb(96, 165, 250)' },
  { name: 'OpenAI', icon: Cloud, color: 'rgb(37, 99, 235)' },
  { name: 'Azure', icon: Server, color: 'rgb(30, 64, 175)' },
  { name: 'Node.js', icon: Code, color: 'rgb(30, 58, 138)' }
]

export function LogoTicker() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-950 to-[#020B2D]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-16"
        >
          We tackle data challenges<br />
          across the full stack
        </motion.h2>

        <motion.div 
          className="flex items-center justify-center flex-wrap gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
              style={{ 
                width: '120px',
                height: '120px'
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br"
                style={{ backgroundColor: tech.color }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              />
              
              <motion.div
                className="relative w-full h-full p-4 flex flex-col items-center justify-center"
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                <tech.icon className="w-12 h-12 text-white mb-2" />
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
              </motion.div>

              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

