'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'BLANK', logo: '/favicon.png' },
  { name: 'MAKE DAY', logo: '/favicon.png' },
  { name: 'FLOW', logo: '/favicon.png' },
  { name: 'DRIPPT', logo: '/favicon.png' },
  { name: 'CRYPTO STUDIO', logo: '/favicon.png' },
  { name: 'MAKE SET', logo: '/favicon.png' }
]

export function PartnerLogos() {
  return (
    <div className="relative bg-black/50 border-y border-white/10 overflow-hidden py-12 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15, // Reduced duration for a faster loop
            ease: 'easeInOut', // Smooth transition
          }}
          className="flex space-x-16 whitespace-nowrap"
        >
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              className="flex items-center space-x-2 text-white/40 hover:text-white/60 transition-colors"
              whileHover={{
                scale: 1.1, // Slight zoom effect on hover
                transition: { duration: 0.3, ease: 'easeInOut' },
              }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={32} // Increased size for better visibility
                height={32}
                className="w-8 h-8" // Adjusted class size
              />
              <span className="text-lg font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
