"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl font-bold mb-8"
      >
        Privacy Policy
      </motion.h1>

      <motion.div 
        variants={itemVariants}
        className="prose prose-gray max-w-none space-y-6"
      >
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to AI Automation Agency. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
          <ul className="list-disc pl-6">
            <li>Identity Data (name, username)</li>
            <li>Contact Data (email address, phone number)</li>
            <li>Technical Data (IP address, browser type, device information)</li>
            <li>Usage Data (how you use our website and services)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
          <p>We use your data to:</p>
          <ul className="list-disc pl-6">
            <li>Provide and improve our AI automation services</li>
            <li>Communicate with you about our services</li>
            <li>Analyze and improve our website performance</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:</p>
          <ul className="list-disc pl-6">
            <li>The right to access your personal data</li>
            <li>The right to correct your personal data</li>
            <li>The right to erase your personal data</li>
            <li>The right to object to processing of your personal data</li>
          </ul>
        </section>

        <motion.div 
          variants={itemVariants}
          className="mt-8"
        >
          <Link 
            href="/terms"
            className="text-primary hover:underline"
          >
            View Terms of Service
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
