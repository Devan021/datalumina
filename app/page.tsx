"use client";

import { Suspense } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { HeroSection } from '@/components/HeroSection'
import { PartnerLogos } from '@/components/PartnerLogos'
import { ServicesSection } from '@/components/ServicesSection'
import { CasesSection } from '@/components/CasesSection'
import { TrustSection } from '@/components/TrustSection'
import { InsightsSection } from '@/components/InsightsSection'
import { TestimonialSection } from '@/components/TestimonialSection'
import { CtaSection } from '@/components/CtaSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-full px-6 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Datalumina" width={32} height={32} />
              <span className="text-white font-semibold">Datalumina</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/for-organizations" className="text-blue-100/80 hover:text-white transition-colors">
                For Organizations
              </Link>
              <Link href="/for-developers" className="text-blue-100/80 hover:text-white transition-colors">
                For Developers
              </Link>
              <Link href="/cases" className="text-blue-100/80 hover:text-white transition-colors">
                Cases
              </Link>
              <Link href="/insights" className="text-blue-100/80 hover:text-white transition-colors">
                Insights
              </Link>
              <Link href="/about" className="text-blue-100/80 hover:text-white transition-colors">
                About
              </Link>
            </div>
            <Button 
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <HeroSection />
        </Suspense>

        <Suspense fallback={null}>
          <PartnerLogos />
        </Suspense>

        <Suspense fallback={null}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={null}>
          <CasesSection />
        </Suspense>

        <Suspense fallback={null}>
          <TrustSection />
        </Suspense>

        <Suspense fallback={null}>
          <InsightsSection />
        </Suspense>

        <Suspense fallback={null}>
          <TestimonialSection />
        </Suspense>

        <Suspense fallback={null}>
          <CtaSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

