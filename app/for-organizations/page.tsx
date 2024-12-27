"use client";

import { Suspense } from 'react'
import { OrganizationsHero } from '@/components/OrganizationsHero'
import { TechnologyStack } from '@/components/TechnologyStack'
import { SolutionsGrid } from '@/components/SolutionsGrid'
import { OrganizationsCases } from '@/components/OrganizationsCases'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { OurApproach } from '@/components/OurApproach'



export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-[#020B2D]">
      <Header />
      <main className="relative pt-20">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />
        
        <div className="relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <OrganizationsHero />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <OurApproach />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <TechnologyStack />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <SolutionsGrid />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <OrganizationsCases />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}
