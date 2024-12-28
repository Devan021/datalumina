'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useState, useEffect } from 'react'

interface InsightDetailProps {
  title: string
  category: string
  date: string
  author: {
    name: string
    role: string
    avatar: string
  }
  content: string
  image: string
}

export function InsightDetail({ title, category, date, author, content, image }: InsightDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `${title} - ${currentUrl}`
    )}`
    window.open(twitterUrl, '_blank')
  }

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(content)}`
    window.open(linkedInUrl, '_blank')
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl)
    alert('Link copied to clipboard!')
  }

  return (
    <article className="relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/insights" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Insights
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="inline-block px-3 py-1 text-sm text-blue-300 bg-blue-500/10 rounded-full mb-4">
                {category}
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{title}</h1>

              <div className="flex items-center mb-8">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="text-white font-medium">{author.name}</p>
                  <p className="text-blue-300 text-sm">{author.role}</p>
                </div>
                <span className="ml-auto text-blue-300 text-sm">{date}</span>
              </div>

              <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-xl bg-blue-950/50 p-6 backdrop-blur-sm border border-blue-500/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Share this article
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleTwitterShare}
                      className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-full transition-colors"
                    >
                      Twitter
                    </button>
                    <button
                      onClick={handleLinkedInShare}
                      className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-full transition-colors"
                    >
                      LinkedIn
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-full transition-colors"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  )
}
