'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronRight, Gift } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import dynamic from 'next/dynamic'

const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

interface LeadDetails {
  email: string
  companySize: string
  interest: string
}

const CookiePopup: React.FC = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [leadDetails, setLeadDetails] = useState<LeadDetails>({
    email: '',
    companySize: '',
    interest: ''
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const [errors, setErrors] = useState<Partial<LeadDetails>>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('leadCaptured')) {
        setIsVisible(true)
      }
    }, 5000)

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    let newErrors: Partial<LeadDetails> = {}

    if (step === 1 && !validateEmail(leadDetails.email)) {
      newErrors.email = 'Please enter a valid email address'
    } else if (step === 2 && !leadDetails.companySize) {
      newErrors.companySize = 'Please select your company size'
    } else if (step === 3 && !leadDetails.interest) {
      newErrors.interest = 'Please select your primary interest'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log('Lead details captured:', leadDetails)
      localStorage.setItem('leadCaptured', 'true')
      setShowConfetti(true)
      setTimeout(() => {
        setShowConfetti(false)
        setIsVisible(false)
      }, 5000)
    }
  }, [step, leadDetails])

  const handleClose = useCallback(() => {
    setIsVisible(false)
  }, [])

  const updateLeadDetails = useCallback((field: keyof LeadDetails, value: string) => {
    setLeadDetails(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }, [])

  const renderStepContent = useCallback(() => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">
                Unlock Exclusive AI Insights!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Join our community of innovators and get a free AI strategy guide. Your journey to AI-powered growth starts here!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={leadDetails.email}
                    onChange={(e) => updateLeadDetails('email', e.target.value)}
                    required
                    className="w-full"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Get My Free Guide <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </>
        )
      case 2:
        return (
          <>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">
                Customize Your AI Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Help us tailor our solutions to your needs. It'll only take a moment!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select
                    value={leadDetails.companySize}
                    onValueChange={(value) => updateLeadDetails('companySize', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201+">201+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.companySize && <p className="text-red-500 text-xs mt-1">{errors.companySize}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </>
        )
      case 3:
        return (
          <>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold">
                Last Step: Claim Your Bonus!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                You're almost there! Tell us what interests you most and we'll throw in a special bonus.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="interest">Primary Interest</Label>
                  <Select
                    value={leadDetails.interest}
                    onValueChange={(value) => updateLeadDetails('interest', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chatbots">AI Chatbots</SelectItem>
                      <SelectItem value="automation">Business Automation</SelectItem>
                      <SelectItem value="analytics">Predictive Analytics</SelectItem>
                      <SelectItem value="other">Other AI Solutions</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Claim My Bonus <Gift className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </>
        )
    }
  }, [step, leadDetails, errors, handleSubmit, updateLeadDetails])

  return (
    <>
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#3b82f6']}
        />
      )}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 left-4 md:left-auto z-50 md:max-w-md w-auto"
          >
            <Card className="bg-white shadow-lg overflow-hidden relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-blue-600 hover:text-blue-800 z-10"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
              {renderStepContent()}
              <CardFooter className="pt-0">
                <p className="text-xs text-gray-500">
                  By continuing, you agree to our privacy policy and terms of service.
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <motion.div
              className="bg-white p-4 sm:p-8 rounded-lg shadow-xl text-center"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-gradient animate-gradient"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Congratulations!
              </motion.h2>
              <motion.p 
                className="text-lg sm:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Your bonus is on its way to your inbox!
              </motion.p>
              <motion.div
                className="mt-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.8 }}
              >
                <Gift className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 mx-auto" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

CookiePopup.displayName = 'CookiePopup'

export default CookiePopup