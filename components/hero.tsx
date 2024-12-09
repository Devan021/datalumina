'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Rocket, Brain } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import Link from 'next/link'
import EnhancedAutomationAnimation from './enhanced-automation-animation'

export default function Hero() {
  const searchParams = useSearchParams()

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const plan = searchParams?.get('plan') || null

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 lg:py-16">
      <motion.div 
        className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            className="relative z-10 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div 
                className="mb-4 sm:mb-6 inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs sm:text-sm font-semibold leading-5 text-blue-800 ring-1 ring-inset ring-blue-300/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Next-Gen AI Solutions
              </motion.div>
              <h1 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 lequire-rounded-font">
                Revolutionize Your Business with <span className="text-gradient animate-gradient">AI-Powered Growth</span>
              </h1>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg text-gray-600 animate-fade-in">
                Unlock the power of AI to automate your lead generation, streamline operations, and skyrocket your B2B growth to 8 figures and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="w-full sm:w-auto animate-scale text-xs sm:text-sm lg:text-base"
                    onClick={(e) => handleNavClick(e, '/#book-your-free-discovery-call')}
                  >
                    Book Free AI Strategy Call
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {/* Additional button can be added here if needed */}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="animate-float"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] mx-auto overflow-hidden rounded-lg shadow-2xl">
                <EnhancedAutomationAnimation />
              </div>
              <motion.div
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 lg:-bottom-10 lg:-left-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="bg-white shadow-lg hover-lift animate-bounce-subtle">
                  <CardContent className="p-1 sm:p-2 lg:p-4">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Rocket className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-blue-600 animate-spin-slow" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">10x Growth Potential</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-10 lg:-right-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="bg-white shadow-lg hover-lift animate-bounce-subtle animation-delay-300">
                  <CardContent className="p-1 sm:p-2 lg:p-4">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Brain className="h-3 w-3 sm:h-4 sm:w-4 lg:h-6 lg:w-6 text-blue-600 animate-pulse" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">AI-Driven Insights</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

