import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useScrollNavigation() {
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2)
      if (window.location.pathname === '/') {
        scrollToSection(sectionId)
      } else {
        router.push('/')
        // We need to wait for the navigation to complete before scrolling
        setTimeout(() => scrollToSection(sectionId), 100)
      }
    } else {
      router.push(href)
    }
  }

  return { handleNavigation }
}