"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface CaseStudyContent {
  challenge?: string
  mission?: string
  solution?: string
  results?: string
}

interface CaseStudyDetails {
  location?: string
  website?: string
  industry?: string
  impact?: string
}

interface CaseStudyProps {
  caseStudy: {
    title: string
    description: string
    logo: string
    date?: string
    author?: {
      name: string
      role: string
      avatar: string
    }
    details?: CaseStudyDetails
    content?: CaseStudyContent
    background?: string
  }
}

export function CaseStudyDetail({ caseStudy }: CaseStudyProps) {
  const background = caseStudy.background || "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"
  
  return (
    <article className="relative">
      {/* Hero Section */}
      <div className={`relative px-4 py-12 ${background}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020B2D]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/cases" 
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {caseStudy.title}
                </h1>
                
                <p className="text-blue-100/70 text-lg mb-8">
                  {caseStudy.description}
                </p>

                {caseStudy.author && (
                  <div className="flex items-center mb-12">
                    <Image
                      src={caseStudy.author.avatar}
                      alt={caseStudy.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="text-white font-medium">{caseStudy.author.name}</div>
                      <div className="text-blue-300 text-sm">{caseStudy.author.role}</div>
                    </div>
                    {caseStudy.date && (
                      <div className="ml-auto text-blue-300 text-sm">{caseStudy.date}</div>
                    )}
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="relative w-32 h-32 mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl" />
                  <div className="relative w-full h-full rounded-full bg-[#0A1A40]/50 border border-white/10 p-6 flex items-center justify-center">
                    <Image
                      src={caseStudy.logo}
                      alt="Company logo"
                      width={80}
                      height={80}
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-16">
                {caseStudy.content?.challenge && (
                  <Section title="The challenge">
                    {caseStudy.content.challenge}
                  </Section>
                )}

                {caseStudy.content?.mission && (
                  <Section title="Our mission">
                    {caseStudy.content.mission}
                  </Section>
                )}

                {caseStudy.content?.solution && (
                  <Section title="A solid solution">
                    {caseStudy.content.solution}
                  </Section>
                )}

                {caseStudy.content?.results && (
                  <Section title="Results">
                    {caseStudy.content.results}
                  </Section>
                )}

                <div className="pt-8">
                  <p className="text-blue-100/70">
                    Ready to bring your vision of real-time data to life?{' '}
                    <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                      Contact us
                    </Link>
                    {' '}to learn how we can help—or explore our other{' '}
                    <Link href="/cases" className="text-blue-400 hover:text-blue-300">
                      case studies
                    </Link>
                    {' '}for more success stories.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              {caseStudy.details && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="sticky top-24"
                >
                  <div className="rounded-3xl bg-[#0A1A40]/50 backdrop-blur-sm border border-white/10 p-8">
                    {caseStudy.details.website && (
                      <h2 className="text-2xl font-bold text-white mb-8">
                        {new URL(caseStudy.details.website).hostname.replace('www.', '')}
                      </h2>
                    )}

                    <div className="space-y-6">
                      {caseStudy.details.location && (
                        <DetailItem label="Location" value={caseStudy.details.location} />
                      )}
                      {caseStudy.details.website && (
                        <DetailItem 
                          label="Website" 
                          value={
                            <a 
                              href={caseStudy.details.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300"
                            >
                              {caseStudy.details.website.replace('https://', '')}
                            </a>
                          } 
                        />
                      )}
                      {caseStudy.details.industry && (
                        <DetailItem label="Industry" value={caseStudy.details.industry} />
                      )}
                      {caseStudy.details.impact && (
                        <DetailItem label="Impact" value={caseStudy.details.impact} />
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-blue-100/70 leading-relaxed whitespace-pre-wrap">{children}</p>
    </div>
  )
}

function DetailItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm text-blue-300 mb-1">{label}</div>
      <div className="text-white">{value}</div>
    </div>
  )
}

