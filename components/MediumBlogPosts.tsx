'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface MediumPost {
  title: string
  subtitle: string
  thumbnail: string
  link: string
  pubDate: string
}

export function MediumBlogPosts() {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch('/api/medium-posts')
        const data = await response.json()
        setPosts(data.items.slice(0, 3).map((item: any) => ({
          title: item.title,
          subtitle: item.description.replace(/<[^>]+>/g, '').slice(0, 100) + '...',
          thumbnail: item.thumbnail || '/placeholder-blog.jpg',
          link: item.link,
          pubDate: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        })))
      } catch (error) {
        console.error('Error fetching Medium posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMediumPosts()
  }, [])

  if (loading) {
    return <div className="text-center text-white">Loading blog posts...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.link}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-blue-900/30 rounded-lg overflow-hidden backdrop-blur-sm border border-blue-500/10"
        >
          <div className="relative h-48">
            <Image
              src={post.thumbnail}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
            <p className="text-blue-200 mb-4">{post.subtitle}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-300">{post.pubDate}</span>
              <Button asChild variant="ghost" className="text-blue-400 hover:text-blue-300">
                <a href="https://medium.com/@devansp2020" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

