'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Twitter, Linkedin, LinkIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

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
  isMediumPost?: boolean
  mediumContent?: string
}

export function InsightDetail({ title, category, date, author, content, image, isMediumPost, mediumContent }: InsightDetailProps) {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const handleShare = (platform: 'twitter' | 'linkedin' | 'copy') => {
    const shareText = `${title} - ${currentUrl}`
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(content)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(currentUrl)
        alert('Link copied to clipboard!')
        break
    }
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
                {isMediumPost && mediumContent ? (
                  <div dangerouslySetInnerHTML={{ __html: mediumContent }} />
                ) : (
                  content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="rounded-xl bg-blue-950/50 p-6 backdrop-blur-sm border border-blue-500/10">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Share this article
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      onClick={() => handleShare('twitter')}
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                    </Button>
                    <Button
                      onClick={() => handleShare('linkedin')}
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Button>
                    <Button
                      onClick={() => handleShare('copy')}
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <LinkIcon className="mr-2 h-4 w-4" />
                      Copy Link
                    </Button>
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

