import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-black/50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  Training
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Subscribe to our newsletter</h3>
            <p className="text-blue-100/80">Stay updated with our latest insights and announcements.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-blue-100/50 rounded-full"
              />
              <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100/60 mb-4 md:mb-0">
            © 2024 Datalumina. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-blue-100/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-100/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

