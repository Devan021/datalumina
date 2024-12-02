'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold holler-labs-font">HOLLER LABS</Link>

        <nav className={`md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <Link href="/#services" className="px-4 py-2 hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '/#services')}>Services</Link>
          <Link href="/#ai-agents" className="px-4 py-2 hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '/#ai-agents')}>AI Agents</Link>
          <Link href="/pricing" className="px-4 py-2 hover:text-blue-600 transition-colors">Pricing</Link>
          <Link href="/#faq" className="px-4 py-2 hover:text-blue-600 transition-colors" onClick={(e) => handleNavClick(e, '/#faq')}>FAQ</Link>
        </nav>

        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="hidden md:inline-flex"
              onClick={(e) => handleNavClick(e as any, '/#book-your-free-discovery-call')}
            >
              Book Free AI Strategy Call
            </Button>
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

