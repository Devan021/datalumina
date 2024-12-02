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

  const plan = searchParams?.get('plan') || null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
      <motion.div 
        className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <motion.div 
            className="relative z-10 md:pt-10 lg:pt-0"
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
                className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold leading-6 text-blue-800 ring-1 ring-inset ring-blue-300/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-2 h-4 w-4" />
                Next-Gen AI Solutions
              </motion.div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lequire-rounded-font">
                Revolutionize Your Business with <span className="text-gradient animate-gradient">AI-Powered Growth</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600 sm:text-xl animate-fade-in">
              Discover the perfect offer, automate lead acquisition, and streamline project management—all while scaling your business to 8 figures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    className="w-full sm:w-auto animate-scale"
                    onClick={(e) => handleNavClick(e, '/#book-your-free-discovery-call')}
                  >
                    Book Free AI Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    className="w-full sm:w-auto animate-scale animation-delay-300"
                    asChild
                  >
                    <Link href="/pricing">
                      View AI Solutions & Pricing
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
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
              <div className="relative w-[400px] h-[400px] mx-auto overflow-hidden rounded-lg shadow-2xl">
                <EnhancedAutomationAnimation />
              </div>
              <motion.div
                className="absolute -bottom-10 -left-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="bg-white shadow-lg hover-lift animate-bounce-subtle">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Rocket className="h-6 w-6 text-blue-600 animate-spin-slow" />
                      <span className="text-sm font-semibold text-gray-900">10x Growth Potential</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                className="absolute -top-10 -right-10"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="bg-white shadow-lg hover-lift animate-bounce-subtle animation-delay-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-6 w-6 text-blue-600 animate-pulse" />
                      <span className="text-sm font-semibold text-gray-900">AI-Driven Insights</span>
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

