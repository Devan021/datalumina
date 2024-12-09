'use client'

import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Cloud, Cog, CheckCircle, Zap, Database, Lock } from 'lucide-react'

const DataPoint = ({ delay, icon: Icon, color }: { delay: number; icon: any; color: string }) => {
  const controls = useAnimation()
  const y = useMotionValue(0)
  const scale = useTransform(y, [-20, 0, 20], [0.8, 1, 0.8])

  useEffect(() => {
    controls.start({
      x: [0, 400],
      y: [0, -20, 0, 20, 0],
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      opacity: [0, 1, 1, 0],
      transition: {
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }
    })
  }, [controls, delay])

  return (
    <motion.div
      animate={controls}
      style={{ y, scale }}
      className="absolute left-0"
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.2 }}
      >
        <Icon className={`w-8 h-8 ${color}`} />
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              `0 0 0 0px ${color}50`,
              `0 0 0 10px ${color}00`
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
  const particles = Array.from({ length: 30 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-300 rounded-full"
      initial={{
        x: Math.random() * 400,
        y: Math.random() * 400,
        opacity: 0,
      }}
      animate={{
        y: [null, -20, 20],
        opacity: [0, 0.7, 0],
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

const PulsingCircle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-32 h-32 rounded-full bg-blue-500 opacity-10"
    initial={{ scale: 0 }}
    animate={{ scale: 1.5, opacity: [0.1, 0.2, 0.1] }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

export default function EnhancedAutomationAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width
    const y = (clientY - top) / height
    setMousePosition({ x, y })
  }

  const xOffset = useTransform(
    useMotionValue(mousePosition.x),
    [0, 1],
    [-10, 10]
  )
  const yOffset = useTransform(
    useMotionValue(mousePosition.y),
    [0, 1],
    [-10, 10]
  )

  return (
    <motion.div 
      className="relative w-full h-full max-w-[400px] max-h-[400px] bg-gray-900 rounded-lg overflow-hidden"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-20"
        style={{
          backgroundPositionX: xOffset,
          backgroundPositionY: yOffset,
        }}
      />
      <BackgroundParticles />
      <div className="absolute inset-0 flex items-center justify-center">
        <PulsingCircle delay={0} />
        <PulsingCircle delay={1} />
        <PulsingCircle delay={2} />
        <div className="relative w-full h-32">
          <ConveyorBelt />
          <DataPoint delay={0} icon={Cloud} color="text-blue-400" />
          <DataPoint delay={1} icon={Cog} color="text-green-400" />
          <DataPoint delay={2} icon={CheckCircle} color="text-purple-400" />
          <DataPoint delay={3} icon={Zap} color="text-yellow-400" />
          <DataPoint delay={4} icon={Database} color="text-red-400" />
          <DataPoint delay={5} icon={Lock} color="text-indigo-400" />
        </div>
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(124, 58, 237, 0.1))",
            "linear-gradient(to bottom right, rgba(16, 185, 129, 0.1), rgba(236, 72, 153, 0.1))",
            "linear-gradient(to bottom right, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}

