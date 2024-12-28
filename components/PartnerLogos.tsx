"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
 { name: 'CLAUDE', logo: '/claude.png' },
 { name: 'MAKE', logo: '/make.png' },
 { name: 'VOICEFLOW', logo: '/voiceflow.png' },
 { name: 'NODE', logo: '/node-js.png' },
 { name: 'ZAPIER', logo: '/zapier.png' },
 { name: 'CURSOR', logo: '/cursor-you.svg' }
]

export function PartnerLogos() {
 return (
   <div className="relative bg-black border-y border-white/10 overflow-hidden py-16 backdrop-blur-sm">
     <div className="max-w-7xl mx-auto px-4">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="flex flex-wrap justify-center items-center gap-8 sm:gap-12"
       >
         {partners.map((partner, index) => (
           <motion.div
             key={partner.name}
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: index * 0.1, duration: 0.5 }}
             className="flex items-center space-x-2 text-white/40 hover:text-white/60 transition-colors group"
           >
             <div className="relative w-8 h-8 sm:w-10 sm:h-10">
               <Image
                 src={partner.logo}
                 alt={partner.name}
                 layout="fill"
                 objectFit="contain"
                 className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
               />
             </div>
             <span className="text-sm sm:text-base font-medium">{partner.name}</span>
           </motion.div>
         ))}
       </motion.div>
     </div>
   </div>
 )
}

