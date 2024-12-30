'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText, Bell, Mail } from 'lucide-react'

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: "We may collect personal information such as your name, email address, and company details when you voluntarily provide it to us through our website, email communications, or other interactions with our services."
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: "We use the information we collect to provide and improve our services, communicate with you, and send you relevant updates and marketing materials (with your consent)."
  },
  {
    icon: Eye,
    title: "Data Security",
    content: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction."
  },
  {
    icon: FileText,
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below."
  },
  {
    icon: Bell,
    title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date."
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: "If you have any questions about this Privacy Policy, please contact us at privacy@datalumina.ai."
  }
]

export function PrivacyPolicyContent() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
        <p className="text-blue-100/80 mb-12 text-center">
          At Datalumina, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our website and services.
        </p>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#0A1A40]/80 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <section.icon className="w-6 h-6 text-blue-400 mr-3" />
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              </div>
              <p className="text-blue-100/80">{section.content}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-sm text-blue-100/60 text-center">
          Last updated: December 30, 2024
        </p>
      </motion.div>
    </section>
  )
}

