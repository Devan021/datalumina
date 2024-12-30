'use client'

import { motion } from 'framer-motion'
import { CheckCircle, FileText, Shield, AlertTriangle, RefreshCw, Mail } from 'lucide-react'

const sections = [
  {
    icon: CheckCircle,
    title: "Acceptance of Terms",
    content: "By accessing or using the Datalumina website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services."
  },
  {
    icon: FileText,
    title: "Use of Services",
    content: "You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You are prohibited from violating or attempting to violate the security of the website or services."
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content: "The content, features, and functionality of the Datalumina website and services are owned by Datalumina and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws."
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content: "Datalumina shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the website or services."
  },
  {
    icon: RefreshCw,
    title: "Modifications to Terms",
    content: "Datalumina reserves the right to modify or replace these Terms of Service at any time. We will provide notice of any material changes by posting the updated Terms on this page and updating the 'Last updated' date."
  },
  {
    icon: Mail,
    title: "Contact Information",
    content: "If you have any questions about these Terms of Service, please contact us at legal@datalumina.ai."
  }
]

export function TermsOfServiceContent() {
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>
        <p className="text-blue-100/80 mb-12 text-center">
          Welcome to Datalumina. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
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

