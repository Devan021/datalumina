import { Suspense } from 'react'
import { Header } from '@/components/Header'
import { InsightsHero } from '@/components/InsightsHero'
import { InsightsList } from '@/components/InsightsList'
import { Footer } from '@/components/Footer'
import {SunMediumIcon as Medium} from 'lucide-react'
import {MediumBlogPosts } from '@/components/MediumBlogPosts'

export const metadata = {
  title: 'Insights | Hollerlabs',
  description: 'Explore our latest insights on AI, data science, and technology trends.',
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#020B2D]">
      <Header />
      <main className="relative pt-20">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />
        
        <div className="relative z-10">
          <Suspense fallback={<div>Loading...</div>}>
            <InsightsHero />
          </Suspense>

          <Suspense fallback={<div>Loading...</div>}>
            <InsightsList />
          </Suspense>

         <section className="py-16 px-4">
          <div className='max-w-7xl mx-auto'>
            <div className='flex items-center mb-8'>
              <h2 className='text-3xl font-bold text-white mr-4'>
                Latest from our Blog
              </h2>
              <Medium className='w-8 h-8 text-white'/>
            </div>
            <Suspense fallback={<div>Loading blog posts...</div>}>
                <MediumBlogPosts/>
            </Suspense>
          </div>
         </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

