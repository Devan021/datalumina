import { Suspense } from 'react'
import { Header } from '@/components/Header'
import { AboutHero } from '@/components/AboutHero'
import { TeamSection } from '@/components/TeamSection'
import { MissionSection } from '@/components/MissionSection'
import { Footer } from '@/components/Footer'

export const metadata = {
 title: 'About | Datalumina',
 description: 'Learn about our mission, team, and approach to AI and data solutions.',
}

export default function AboutPage() {
 return (
   <div className="min-h-screen bg-[#020B2D]">
     <Header />
     <main className="relative pt-20">
       <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />
       
       <div className="relative z-10">
         <Suspense fallback={<div>Loading...</div>}>
           <AboutHero />
         </Suspense>

         <Suspense fallback={<div>Loading...</div>}>
           <MissionSection />
         </Suspense>

         <Suspense fallback={<div>Loading...</div>}>
           <TeamSection />
         </Suspense>
       </div>
     </main>
     <Footer />
   </div>
 )
}

