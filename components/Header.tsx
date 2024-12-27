'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false)
 const [scrolled, setScrolled] = useState(false)

 useEffect(() => {
   const handleScroll = () => {
     setScrolled(window.scrollY > 20)
   }

   window.addEventListener('scroll', handleScroll)
   return () => window.removeEventListener('scroll', handleScroll)
 }, [])

 return (
   <header className={`fixed top-0 w-full z-50 px-4 sm:px-6 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
     <div className="max-w-7xl mx-auto">
       <nav className={`glass-card rounded-full px-3 sm:px-6 py-2 sm:py-3 flex justify-between items-center backdrop-blur-md transition-all duration-300 ${scrolled ? 'bg-black/60 border-white/20' : 'bg-black/40 border-white/10'}`}>
         <Link href="/" className="text-white font-semibold text-base sm:text-lg pl-2">
           Hollerlabs
         </Link>
         <div className="hidden md:flex items-center space-x-6 sm:space-x-8">
           {['For Organizations', 'Cases', 'Insights', 'About'].map((item, index) => (
             <motion.div
               key={item}
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
             >
               <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white transition-colors text-sm">
                 {item}
               </Link>
             </motion.div>
           ))}
         </div>
         <div className="flex items-center space-x-2 sm:space-x-4">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4 }}
           >
             <Link 
               href="/contact" 
               className="hidden sm:flex items-center space-x-2 bg-white text-black hover:bg-white/90 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200"
             >
               Contact
             </Link>
           </motion.div>
           <Button
             className="md:hidden bg-transparent text-white hover:bg-white/10 rounded-full p-1.5 sm:p-2 transition-colors"
             onClick={() => setIsMenuOpen(!isMenuOpen)}
           >
             {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
           </Button>
         </div>
       </nav>
     </div>
     <AnimatePresence>
       {isMenuOpen && (
         <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -20 }}
           transition={{ duration: 0.2 }}
           className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl bg-black/90 backdrop-blur-md py-4 border border-white/10"
         >
           <div className="flex flex-col items-center space-y-4">
             {['For Organizations', 'Cases', 'Insights', 'About', 'Contact'].map((item, index) => (
               <motion.div
                 key={item}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1 }}
               >
                 <Link 
                   href={`/${item.toLowerCase().replace(' ', '-')}`} 
                   className="text-white/80 hover:text-white transition-colors text-sm py-2"
                   onClick={() => setIsMenuOpen(false)}
                 >
                   {item}
                 </Link>
               </motion.div>
             ))}
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   </header>
 )
}

