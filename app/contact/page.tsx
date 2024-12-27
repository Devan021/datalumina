import { Header } from '@/components/Header'
import { ContactHero } from '@/components/ContactHero'
import { ContactCards } from '@/components/ContactCards'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Contact | Datalumina',
  description: 'Get in touch with Datalumina to learn more about our services and how we can help you tackle your data challenges.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020B2D]">
      <Header />
      <main className="relative">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />
        
        <div className="relative z-10">
          <ContactHero />
          <ContactCards />
        </div>
      </main>
      <Footer />
    </div>
  )
}

