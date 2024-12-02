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

export default function Terms() {
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
        Terms and Conditions
      </motion.h1>

      <motion.div 
        variants={itemVariants}
        className="prose prose-gray max-w-none space-y-6"
      >
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing our website and using our AI automation services, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily access our services for personal or business use, subject to the following restrictions:</p>
          <ul className="list-disc pl-6">
            <li>You must not modify or copy our materials without explicit permission</li>
            <li>You must not use the materials for any commercial purpose without our consent</li>
            <li>You must not attempt to decompile or reverse engineer any software</li>
            <li>You must not remove any copyright or proprietary notations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
          <p>
            We provide AI automation services designed to enhance business operations. While we strive to ensure high quality and availability of our services, we cannot guarantee that:
          </p>
          <ul className="list-disc pl-6">
            <li>The service will meet your specific requirements</li>
            <li>The service will be uninterrupted, timely, or error-free</li>
            <li>The results obtained from using the service will be accurate or reliable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p>
            In no event shall AI Automation Agency be liable for any damages arising out of the use or inability to use our services. This includes but is not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li>Loss of data</li>
            <li>Business interruption</li>
            <li>Financial loss</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Modifications</h2>
          <p>
            We reserve the right to revise these terms of service at any time without notice. By using this website and our services, you agree to be bound by the current version of these terms of service.
          </p>
        </section>

        <motion.div 
          variants={itemVariants}
          className="mt-8"
        >
          <Link 
            href="/privacy-policy"
            className="text-primary hover:underline"
          >
            View Privacy Policy
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

