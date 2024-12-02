'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollArrow() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const arrowVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [0, 20, 0],
      rotate: [0, 15, -15, 0],
      transition: {
        y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        rotate: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
      },
    },
  }

  if (scrollY > 300) return null

  return (
    <motion.div
      className="fixed bottom-10 right-10 z-50"
      initial="initial"
      animate="animate"
      variants={arrowVariants}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 5V45M25 45L45 25M25 45L5 25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  )
}

