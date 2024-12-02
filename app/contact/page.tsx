"use client"

import ContactForm from '@/components/contact-form'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    { icon: <MapPin className="h-6 w-6" />, text: "123 AI Street, Tech City, TC 12345" },
    { icon: <Phone className="h-6 w-6" />, text: "+1 (555) 123-4567" },
    { icon: <Mail className="h-6 w-6" />, text: "info@hollerlabs.ai" },
  ]

  return (
    <div>
          <ContactForm />
    </div>
  )
}

