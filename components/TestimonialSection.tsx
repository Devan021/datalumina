import { motion } from 'framer-motion'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Quote } from 'lucide-react'

export function TestimonialSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-black/50 backdrop-blur-sm"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-12"
        >
          <Quote className="w-16 h-16 text-blue-500 mx-auto mb-8" />
          <Image
            src="/testimonial-avatar.jpg"
            alt="Testimonial"
            width={80}
            height={80}
            className="rounded-full mx-auto mb-6 border-4 border-blue-500/20"
          />
          <blockquote className="text-2xl text-white mb-8 font-medium leading-relaxed">
            "Together with Hollerlabs, we developed a state-of-the-art model project. In a rapidly evolving landscape, they've proven to be an invaluable partner."
          </blockquote>
          <div className="flex flex-col items-center space-y-2">
            <Button variant="link" className="text-xl text-blue-400 hover:text-blue-300">
              Martin Wagner
            </Button>
            <p className="text-blue-100/60">Chief Technology Officer, TechCorp</p>
            <Button variant="link" className="text-blue-400 hover:text-blue-300 mt-4">
              Read the full case study
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

