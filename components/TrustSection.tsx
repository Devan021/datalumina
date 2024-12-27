"use client";

import { motion } from 'framer-motion'
import { Shield, Zap, Users, Target, Eye, BarChart } from 'lucide-react'

export function TrustSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-[url('/trust-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#000213] via-[#000213]/95 to-blue-950/90"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Why our clients trust us
          </h2>
          <p className="text-lg text-gray-300">
            At Datalumina, we bring together a decade of AI engineering, software development, and 
            enterprise consulting experience to help you cut through the noise and transform 
            possibilities into practical solutions.
          </p>
        </motion.div>

        {/* Established Expertise Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-blue-400 mb-10"
          >
            Established Expertise
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <Shield className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Technical Excellence</h4>
              <p className="text-gray-300">
                With deep expertise in software architecture and AI systems, our engineering team brings over a decade 
                of hands-on experience building to the table.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              <Zap className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Data and AI Mastery</h4>
              <p className="text-gray-300">
                Operating at the forefront of AI advancements, we are continuously exploring new frontiers and 
                incorporating cutting-edge tech into our solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              <Users className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Strategic Guidance</h4>
              <p className="text-gray-300">
                A blend of AI engineering, software development, and strategic consulting enables us to deliver end-to-end 
                solutions that drive real business value.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Proven Track Record Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-blue-400 mb-10"
          >
            Proven Track Record
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <Target className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Real-World Impact</h4>
              <p className="text-gray-300">
                We are successfully implementing AI solutions across various industries, transforming complex 
                challenges into practical advantages.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
              <Eye className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Building in Public</h4>
              <p className="text-gray-300">
                With over 4 million views across hundreds of tutorials, you can see exactly how we build our 
                solutions and communicate our results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-4"
            >
              <BarChart className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-semibold text-white">Value Creation</h4>
              <p className="text-gray-300">
                We specialize in identifying and implementing AI solutions that deliver measurable business results 
                and sustainable, competitive advantages.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

