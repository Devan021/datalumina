"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    id: "future-of-ai-in-business",
    title: "Why generative AI often fails to deliver value",
    category: "AI Implementation",
    date: "December 15, 2024",
    author: {
      name: "Deva Nandhan",
      role: "Chief Technology Officer",
      avatar: "/devan.jpg",
    },
    content: `Many organizations rush to implement generative AI without proper planning and infrastructure, leading to failed initiatives and wasted resources. This article explores the common pitfalls and how to avoid them...`,
    image: "/data.png",
  },
  {
    id: "how-ai-revolutionizes-healthcare",
    title: "How AI is Revolutionizing Healthcare",
    category: "AI in Healthcare",
    date: "December 20, 2024",
    author: {
      name: "Eswar Lakkakula",
      role: "Strategy Lead",
      avatar: "/eswar.jpeg",
    },
    content: `Artificial Intelligence is transforming healthcare by improving patient outcomes, streamlining administrative tasks, and advancing medical research. This article delves into key areas where AI is making a profound impact...`,
    image: "/healthcareai.jpg",
  },
  {
    id: "ai-transforming-b2b-sales",
    title: "How AI is Transforming B2B Sales Strategies",
    category: "AI in Business",
    date: "December 25, 2024",
    author: {
      name: "Eswar Lakkakula",
      role: "Strategy Lead",
      avatar: "/eswar.jpeg",
    },
    content: `Artificial Intelligence is revolutionizing B2B sales by enhancing lead generation, personalizing customer interactions, and optimizing sales processes. This article explores how AI is reshaping traditional B2B sales strategies...`,
    image: "/b2b.png",
  },
];

export function InsightsList() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-[#0A1A40] flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A1A40]/80"></div>
              </div>
              <div className="p-8 flex-grow">
                <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 mb-4 inline-block">
                  {insight.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{insight.title}</h3>
                <p className="text-blue-100/70 mb-6">
                  {insight.content.slice(0, 120)}...
                </p>
                <div className="flex items-center mb-6">
                  <Image
                    src={insight.author.avatar}
                    alt={insight.author.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="text-white font-medium">{insight.author.name}</p>
                    <p className="text-blue-300 text-sm">{insight.author.role}</p>
                  </div>
                </div>
                <Link href={`/insights/${insight.id}`}>
                  <Button
                    variant="ghost"
                    className="text-blue-400 hover:text-blue-300 p-0 group flex items-center"
                  >
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
