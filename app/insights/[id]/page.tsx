import { Suspense } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { InsightDetail } from '@/components/InsightsDetails'

// Define the type for insights
type Insight = {
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

// Create the insights object with proper typing
const insights: Record<string, Insight> = {
  "future-of-ai-in-business": {
    title: "Why generative AI often fails to deliver value",
    category: "AI Implementation",
    date: "December 15, 2024",
    author: {
      name: "Deva Nandhan",
      role: "Chief Technology Officer",
      avatar: "/devan.jpg"
    },
    content: `Many organizations rush to implement generative AI without proper planning and infrastructure, leading to failed initiatives and wasted resources. This article explores the common pitfalls and how to avoid them.

    The first major challenge is data quality and preparation. Generative AI models require clean, well-structured data to produce meaningful results. Organizations often underestimate the time and effort needed to prepare their data properly.

    Another critical factor is setting realistic expectations. While generative AI can be powerful, it's not a magic solution that will instantly solve all problems. Organizations need to carefully identify specific use cases where AI can add real value.

    Integration with existing systems and workflows is also crucial. Many implementations fail because they don't consider how the AI solution will fit into current business processes and tech stacks.

    Finally, successful implementation requires a clear strategy for monitoring and improving model performance over time. This includes having the right metrics in place and a plan for handling edge cases and errors.`,
    image: "/data.png"
  },

'how-ai-revolutionizes-healthcare': {
  title: 'How AI is Revolutionizing Healthcare',
  category: 'AI in Healthcare',
  date: 'December 20, 2024',
  author: {
    name: 'Eswar Lakkakula',
    role: 'Strategy Lead',
    avatar: '/eswar.jpeg',
  },
  content: `Artificial Intelligence is transforming healthcare by improving patient outcomes...`,
  image: '/healthcareai.jpg',
},
'ai-transforming-b2b-sales': {
  title: 'How AI is Transforming B2B Sales Strategies',
  category: 'AI in Business',
  date: 'December 25, 2024',
  author: {
    name: 'Eswar Lakkakula',
    role: 'Strategy Lead',
    avatar: '/eswar.jpeg',
  },
  content: `Artificial Intelligence is revolutionizing B2B sales by enhancing lead generation...`,
  image: '/b2b.png',
},
  // ... other predefined insights ...
}

// Function to fetch Medium posts and create insight objects
async function fetchMediumPosts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/medium-posts`)
    const data = await response.json()
    
    const mediumInsights = data.items.reduce((acc: Record<string, Insight>, item: any) => {
      acc[item.guid] = {
        title: item.title,
        category: "Medium Blog",
        date: new Date(item.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        author: {
          name: item.author,
          role: "Medium Author",
          avatar: "/medium-avatar.png"
        },
        content: item.description,
        image: item.thumbnail || '/placeholder-blog.jpg',
        isMediumPost: true,
        mediumContent: item.content
      }
      return acc
    }, {})

    return { ...insights, ...mediumInsights }
  } catch (error) {
    console.error('Error fetching Medium posts:', error)
    return insights
  }
}

export default async function InsightPageWrapper({ params }: { params: { id: string } }) {
  const allInsights = await fetchMediumPosts()
  const insight = allInsights[decodeURIComponent(params.id)]

  if (!insight) {
    return <div>Insight not found</div>
  }

  return (
    <div className="min-h-screen bg-[#020B2D]">
      <Header />
      <main className="relative pt-20">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />
        <div className="relative z-10">
          <Suspense fallback={<div>Loading...</div>}>
            <InsightDetail {...insight} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  )
}














