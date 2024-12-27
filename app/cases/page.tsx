"use client"

import { Suspense } from 'react'
import { Header } from '@/components/Header'
import { CasesHero } from '@/components/CasesHero'
import { CasesList } from '@/components/CasesList'
import { Footer } from '@/components/Footer'

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#020B2D]">
      <Header />
      <main className="relative pt-20">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />
        
        <div className="relative z-10">
          <Suspense fallback={<div>Loading...</div>}>
            <CasesHero />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <CasesList />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}

