"use client";

import { Suspense, lazy } from 'react'
import dynamic from 'next/dynamic'
import LoadingSpinner from '@/components/ui/loading-spinner'

const ClientHero = dynamic(() => import('@/components/hero'), { ssr: false })
const FeaturesSection = lazy(() => import('@/components/features-section'))
const ServicesSection = lazy(() => import('@/components/services-section'))
const AIAgentsSection = lazy(() => import('@/components/ai-agents-section'))
const TypeformAutomationSection = lazy(() => import('@/components/typeform-automation-section'))
const OperationsSection = lazy(() => import('@/components/operations-section'))
const FAQSection = lazy(() => import('@/components/faq-section'))
const CalendlyEmbed = lazy(() => import('@/components/calendly-embed'))

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
)

export default function Home() {
  return (
    <>
      <ClientHero />
      <SectionWrapper>
        <FeaturesSection />
      </SectionWrapper>
      <SectionWrapper>
        <ServicesSection />
      </SectionWrapper>
      <SectionWrapper>
        <AIAgentsSection />
      </SectionWrapper>
      <SectionWrapper>
        <TypeformAutomationSection />
      </SectionWrapper>
      <SectionWrapper>
        <OperationsSection />
      </SectionWrapper>
      <SectionWrapper>
        <FAQSection />
      </SectionWrapper>
      <SectionWrapper>
        <section id="book-your-free-discovery-call" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Book Your Free AI Strategy Call</h2>
            <CalendlyEmbed 
              url="https://calendly.com/eswarsairam22/automate-your-dream"
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            />
          </div>
        </section>
      </SectionWrapper>
    </>
  )
}

