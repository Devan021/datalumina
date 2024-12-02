'use client'

import { motion } from 'framer-motion'
import { Circle, Square, Triangle } from 'lucide-react'
import { useEffect, useState } from 'react'

const DataPoint = ({ delay, icon: Icon, color }: { delay: number; icon: any; color: string }) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ 
      x: [null, 400],
      opacity: [null, 1, 1, 0]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "linear"
    }}
    className={`absolute ${color} filter blur-[1px]`}
  >
    <div className="relative">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            `0 0 0 0px ${color}`,
            `0 0 0 10px transparent`
          ]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  </motion.div>
)

const ConveyorLine = () => (
  <motion.div
    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-500 to-blue-500/50"
    animate={{
      backgroundPosition: ["0px", "400px"]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear"
    }}
    style={{
      backgroundSize: "400px 2px"
    }}
  />
)

export default function AutomationAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative w-[400px] h-[400px] bg-gray-50/50 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-32">
          <ConveyorLine />
          
          <DataPoint 
            delay={0} 
            icon={Circle} 
            color="text-blue-500"
          />
          <DataPoint 
            delay={1.3} 
            icon={Square} 
            color="text-green-500"
          />
          <DataPoint 
            delay={2.6} 
            icon={Triangle} 
            color="text-purple-500"
          />

          {/* Processing nodes */}
          <motion.div
            className="absolute left-1/4 -top-8 w-4 h-4 rounded-full bg-blue-500/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute left-2/4 -bottom-8 w-4 h-4 rounded-full bg-green-500/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute left-3/4 -top-8 w-4 h-4 rounded-full bg-purple-500/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.path
              d="M 100 0 L 100 60 M 200 60 L 200 120 M 300 120 L 300 60"
              stroke="rgba(59, 130, 246, 0.2)"
              strokeWidth="2"
              strokeDasharray="4 4"
              fill="none"
              animate={{
                strokeDashoffset: [0, -32]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
        </div>
      </div>

      {/* Background grid effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  )
}

