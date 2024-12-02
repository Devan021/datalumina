import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Clipboard, User, LinkIcon, FileText, Settings } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Lead generation",
      description: "Scalable, affordable outbound & marketing systems to grow your company on autopilot.",
      learnMoreUrl: "/services/lead-generation",
    },
    {
      icon: <Clipboard className="w-12 h-12 text-primary" />,
      title: "Project management",
      description: "Tailored project management systems trusted by leading 8-figure agencies and top-tier SaaS companies",
      learnMoreUrl: "/services/project-management",
    },
    {
      icon: <LinkIcon className="w-12 h-12 text-primary" />,
      title: "Hiring systems",
      description: "Automated processes that source, contact, and evaluate candidates for you.",
      learnMoreUrl: "/services/hiring-systems",
    },
    {
      icon: <User className="w-12 h-12 text-primary" />,
      title: "Website Chatbots",
      description: "Streamline operations, delight customers, and cut costs with instant, automated solutions.",
      learnMoreUrl: "/services/ai-service-fulfillment",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "CRM buildouts",
      description: "Sales systems to track, iterate, and scale growth just like industry-leading businesses.",
      learnMoreUrl: "/services/crm-buildouts",
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "SOPs & consultation",
      description: "We refine your offer, reveal strategies used by industry-leading businesses, and develop a comprehensive library of SOPs tailored to your needs.",
      learnMoreUrl: "/services/sops-and-consultation",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering your business with cutting-edge solutions tailored for growth and efficiency
          </p>
        </motion.div>
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card className="bg-white border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <motion.div 
                      className="mb-4 bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 flex-grow">{item.description}</p>
                    <Link href={item.learnMoreUrl}>
                      <motion.div 
                        className="mt-4 inline-flex items-center text-primary font-semibold"
                        whileHover={{ x: 5 }}
                      >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

