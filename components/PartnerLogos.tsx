'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const partners = [
  { name: 'MAKE', logo: '/make.png' },
  { name: 'ZAPIER', logo: '/zapier.png' },
  { name: 'EXPRESS', logo: '/express-js.png' },
  { name: 'LANGCHAIN', logo: '/langchain.png' },
  { name: 'NODE', logo: '/node-js.png' },
  { name: 'MAKE', logo: '/make.png' },
  { name: 'ZAPIER', logo: '/zapier.png' },
  { name: 'EXPRESS', logo: '/express-js.png' },
  { name: 'PYTHON', logo: '/langchain.png' },
  { name: 'NODE', logo: '/node-js.png' },
]

export function PartnerLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const animationDuration = scrollWidth / 150 // Adjusted for responsive speed

    scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`)
    scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`)

    controls.start({
      x: [`0%`, `-${100 / 3}%`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: animationDuration,
          ease: 'linear',
        },
      },
    })
  }, [controls])

  return (
    <section className="relative bg-gradient-to-b from-[#000510] via-[#001030] to-[#000510] overflow-hidden py-16 sm:py-20 md:py-32">
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 sm:mb-6 tracking-tight">
          Powered by Cutting Edge Technologies
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 text-center max-w-lg sm:max-w-2xl mx-auto leading-relaxed">
          Our platform uses cutting-edge technologies to create pure innovation for your business,
          driving the future of AI-driven technologies.
        </p>
      </div>

      {/* Gradient masks for fade effects */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-[300px] bg-gradient-to-r from-[#000510] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-[300px] bg-gradient-to-l from-[#000510] to-transparent z-10" />

      {/* Scrolling container */}
      <motion.div
        ref={scrollRef}
        className="relative flex items-center sm:gap-16 gap-8 md:gap-32 flex-wrap justify-around whitespace-nowrap py-8 overflow-hidden"
        animate={controls}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {[...partners, ...partners, ...partners].map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <div className="relative w-24 h-12 sm:w-36 sm:h-20 md:w-48 md:h-24 bg-opacity-10 bg-white rounded-lg p-2 sm:p-4 backdrop-filter backdrop-blur-sm">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                style={{ objectFit: 'contain' }}
                className={`transition-all duration-500 ${
                  isHovered ? 'filter-none' : 'filter grayscale'
                }`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--scroll-width) / 3));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .scrolling-container {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
