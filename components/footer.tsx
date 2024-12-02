import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <footer className={`bg-gray-900 text-white ${isHomePage ? 'py-12' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${isHomePage ? 'md:grid-cols-3 gap-8' : 'md:grid-cols-2 gap-4'}`}>
          <div>
            <h3 className="text-lg font-bold mb-4 holler-labs-font">HOLLER LABS</h3>
            <p className="text-gray-400">Automating your business growth</p>
          </div>
          {isHomePage && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          )}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/termsofservice" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className={`${isHomePage ? 'mt-8 pt-8 border-t border-gray-800' : 'mt-4'} text-center`}>
          <p className="text-gray-400">&copy; 2024 HOLLER LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

