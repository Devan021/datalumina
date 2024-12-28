'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Quote } from 'lucide-react'

export function TestimonialSection() {
  return (
    <section className="relative py-24 px-6 sm:py-32 sm:px-12 lg:px-20 overflow-hidden bg-gradient-to-b from-black-900 via-black to-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-black-800 via-black-900 to-black shadow-xl shadow-blue-800/10"
        >
          <Quote className="w-14 h-14 sm:w-20 sm:h-20 text-blue-500 mx-auto mb-6 sm:mb-10" />
          <Image
            src="/rajiv.jpg"
            alt="Testimonial"
            width={100}
            height={100}
            className="rounded-full mx-auto mb-6 border-4 border-blue-500/20 shadow-lg"
          />
          <blockquote className="text-lg sm:text-2xl text-white font-medium leading-relaxed">
            "Together with Hollerlabs, we developed a state-of-the-art AI model project. In a rapidly evolving landscape, they've proven to be an invaluable partner."
          </blockquote>
          <div className="mt-8">
            <p className="text-lg sm:text-xl text-blue-400 font-semibold">Rajiv Ambat</p>
            <p className="text-sm sm:text-base text-blue-100/60">Chief Executive Officer, SolveMyHealth</p>
          </div>
          <div className="mt-8">
            <Link href="/cases/solvemyhealth">
              <Button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-xl transition duration-300">
                Read the Full Case Study
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
