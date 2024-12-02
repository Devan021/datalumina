'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CurvedLineAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const pathOffset = useTransform(scrollYProgress, [0, 1], [1, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full absolute"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q50,50 100,0"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          style={{
            pathLength: pathLength,
            pathOffset: pathOffset,
            opacity: opacity
          }}
        />
      </svg>
    </div>
  )
}

