"use client";

import { motion } from 'framer-motion'

export function MissionSection() {
 return (
   <section className="relative py-20 px-4">
     <div className="max-w-7xl mx-auto">
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
       >
         <div className="space-y-6">
           <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Mission</h2>
           <p className="text-blue-100/80 text-lg">
             At Datalumina, we believe in the transformative power of AI and data. 
             Our mission is to help organizations navigate the complexities of modern 
             technology and emerge stronger, more efficient, and ready for the future.
           </p>
           <p className="text-blue-100/80 text-lg">
             We combine deep technical expertise with strategic insight to deliver 
             solutions that create real business value. Our approach is collaborative, 
             transparent, and focused on long-term success.
           </p>
         </div>
         <div className="space-y-6">
           <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Values</h2>
           <ul className="space-y-4">
             {[
               { title: "Excellence", description: "We strive for excellence in everything we do, from code quality to client communication." },
               { title: "Innovation", description: "We stay at the forefront of technology, constantly exploring new ways to solve complex problems." },
               { title: "Transparency", description: "We believe in open communication and sharing our knowledge with the community." },
               { title: "Impact", description: "We measure our success by the tangible impact we create for our clients and society." }
             ].map((value, index) => (
               <motion.li 
                 key={value.title}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
                 className="flex items-start space-x-4"
               >
                 <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
                 <div>
                   <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                   <p className="text-blue-100/80">{value.description}</p>
                 </div>
               </motion.li>
             ))}
           </ul>
         </div>
       </motion.div>
     </div>
   </section>
 )
}

