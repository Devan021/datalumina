import { Suspense } from 'react'
import { Header } from '@/components/Header'
import { PrivacyPolicyContent } from '@/components/PrivacyPolicyContent'
import { Footer } from '@/components/Footer'
import { StarfieldAnimation } from '@/components/StarfieldAnimation'

export const metadata = {
  title: 'Privacy Policy | Datalumina',
  description: 'Our commitment to protecting your privacy and personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#020B2D]">
      <Header />
      <main className="relative pt-20">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />
        <StarfieldAnimation />
        <div className="relative z-10">
          <Suspense fallback={<div>Loading...</div>}>
            <PrivacyPolicyContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}

