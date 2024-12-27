"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cloud, Cpu, Container, Zap, Code } from "lucide-react";

// Define the interface for a technology
interface Tech {
  name: string;
  icon: React.ElementType; // Type for a React component
  color: string;
}

// Define the props for the TechIcon component
interface TechIconProps {
  tech: Tech;
  index: number;
  isCenter: boolean;
}

// List of technologies with their icons and colors
const technologies: Tech[] = [
  { name: "Docker", icon: Container, color: "rgb(30, 64, 175)" },
  { name: "PostgreSQL", icon: Database, color: "rgb(37, 99, 235)" },
  { name: "FastAPI", icon: Zap, color: "rgb(59, 130, 246)" },
  { name: "CPU", icon: Cpu, color: "rgb(96, 165, 250)" },
  { name: "OpenAI", icon: Cloud, color: "rgb(37, 99, 235)" },
  { name: "Azure", icon: Cloud, color: "rgb(30, 64, 175)" },
  { name: "Node.js", icon: Cpu, color: "rgb(30, 58, 138)" },
];

// TechIcon component
const TechIcon: React.FC<TechIconProps> = ({ tech, index, isCenter }) => {
  const IconComponent = tech.icon; // Dynamically render the icon component

  return (
    <motion.div
      key={tech.name}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: isCenter ? 1 : 1 - Math.abs(index - 3) * 0.15, y: 0 },
      }}
      className={`relative mx-2 ${isCenter ? "z-20" : ""}`}
      style={{
        width: `${isCenter ? 96 : 64}px`,
        height: `${isCenter ? 96 : 64}px`,
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: tech.color }}
        animate={
          isCenter
            ? {
                opacity: [0.8, 0.6, 0.8],
                scale: [1, 1.1, 1],
              }
            : {
                opacity: [0.3, 0.2, 0.3],
              }
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div
        className={`absolute inset-0 rounded-full blur-xl ${
          isCenter ? "bg-blue-500/30" : "bg-blue-400/10"
        }`}
      />

      <motion.div
        className="relative w-full h-full p-3"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3 + index * 0.2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {IconComponent && (
          <IconComponent
            className={`w-full h-full ${
              isCenter ? "text-white" : "text-white/90"
            }`}
          />
        )}
      </motion.div>

      {isCenter && (
        <div className="absolute inset-[-25%] bg-blue-500/5 rounded-full blur-2xl" />
      )}
    </motion.div>
  );
};

// TechnologyStack component
export function TechnologyStack() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-blue-950 to-[#020B2D]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-32"
        >
          We tackle data challenges
          <br />
          across the full stack
        </motion.h2>

        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {technologies.map((tech, index) => (
            <TechIcon
              key={tech.name}
              tech={tech}
              index={index}
              isCenter={index === Math.floor(technologies.length / 2)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
