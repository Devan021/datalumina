'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Cloud, Cog, CheckCircle } from 'lucide-react'

const DataPoint = ({ delay, icon: Icon }: { delay: number; icon: any }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: [0, 400],
      y: [0, -20, 0, 20, 0],
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }
    })
  }, [controls, delay])

  return (
    <motion.div
      animate={controls}
      className="absolute left-0"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.2 }}
      >
        <Icon className="w-8 h-8 text-blue-400" />
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 0 0px rgba(59, 130, 246, 0.5)',
              '0 0 0 10px rgba(59, 130, 246, 0)'
            ]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
    </motion.div>
  )
}

const ConveyorBelt = () => (
  <svg className="absolute inset-0" width="100%" height="100%">
    <defs>
      <linearGradient id="belt-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
        <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
        <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
      </linearGradient>
    </defs>
    <motion.path
      d="M0,50 Q100,30 200,50 T400,50"
      stroke="url(#belt-gradient)"
      strokeWidth="4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  </svg>
)

const BackgroundParticles = () => {
  const particles = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-300 rounded-full"
      initial={{
        x: Math.random() * 400,
        y: Math.random() * 400,
        opacity: 0,
      }}
      animate={{
        y: [null, -10, 10],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  ))

  return <>{particles}</>
}

export default function EnhancedAutomationAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width
    const y = (clientY - top) / height
    setMousePosition({ x, y })
  }

  return (
    <div 
      className="relative w-[400px] h-[400px] bg-gray-900 rounded-lg overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-20"
        style={{
          backgroundPositionX: mousePosition.x * 20,
          backgroundPositionY: mousePosition.y * 20,
        }}
      />
      <BackgroundParticles />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-32">
          <ConveyorBelt />
          <DataPoint delay={0} icon={Cloud} />
          <DataPoint delay={1.3} icon={Cog} />
          <DataPoint delay={2.6} icon={CheckCircle} />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
    </div>
  )
}

