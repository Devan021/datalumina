import { Suspense } from 'react'
import { Header } from "@/components/Header"
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
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <PartnerLogos />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <ServicesSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <CasesSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <TrustSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <InsightsSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <TestimonialSection />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <CtaSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}

