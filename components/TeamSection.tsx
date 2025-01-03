'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: "Deva Nandhan",
    role: "CTO and Co-Founder",
    image: "/devan.jpg",
    bio: "Leading our technical vision and innovation with extensive experience in AI and software architecture.",
  },
  {
    name: "Eswar Lakkakula",
    role: "Strategy Lead and Co-Founder",
    image: "/eswar.jpeg",
    bio: "Guiding our strategic direction and client partnerships with a deep understanding of business and technology integration.",
  },
];

export function TeamSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-b from-black via-blue-800 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Meet the visionaries behind Datalumina's success. Our founders bring together decades
            of experience in AI, engineering, and business strategy to drive innovation and deliver results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group text-center"
            >
              <div className="relative w-full max-w-[350px] mx-auto h-[450px] mb-6 rounded-2xl overflow-hidden border-4 border-blue-500 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-blue-100 text-lg">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-100 text-lg max-w-4xl mx-auto">
            Our team extends beyond our founders. We're proud to work with a diverse group of talented
            AI engineers, data scientists, and strategists who are passionate about pushing the boundaries
            of what's possible with AI and data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
