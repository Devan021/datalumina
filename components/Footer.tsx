'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Twitter, Linkedin, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: "Programs",
    links: [
      { name: "AI Development", href: "#services" },
      { name: "Consulting", href: "#services" },
      { name: "Training", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Cases", href: "/cases" },
      { name: "Blog", href: "/insights" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
]

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://x.com/devan_s_p" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/hollerlabs/" },
  { name: "GitHub", icon: Github, href: "https://github.com/Devan021" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative py-20 sm:py-32 px-4 overflow-hidden bg-gradient-to-b from-black to-black/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerLinks.map((column) => (
            <motion.div key={column.title} className="space-y-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-blue-100/80 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <motion.div className="space-y-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-xl font-semibold text-white">Subscribe to our newsletter</h3>
            <p className="text-blue-100/80">Stay updated with our latest insights and announcements.</p>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-blue-100/50 rounded-full"
              />
              <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 py-2">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-blue-100/60 mb-4 sm:mb-0">
            © {currentYear} Hollerlabs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-blue-100/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
        <motion.div 
          className="mt-8 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-blue-100/60 hover:text-white transition-colors">
              <link.icon className="w-6 h-6" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  )
}

