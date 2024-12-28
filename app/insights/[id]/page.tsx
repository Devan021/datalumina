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

  "how-ai-revolutionizes-healthcare": {
  title: "How AI is Revolutionizing Healthcare",
  category: "AI in Healthcare",
  date: "December 20, 2024",
  author: {
    name: "Eswar Lakkakula",
    role: "Strategy Lead",
    avatar: "/eswar.jpeg"
  },
  content: `Artificial Intelligence is transforming healthcare by improving patient outcomes, streamlining administrative tasks, and advancing medical research. This article delves into key areas where AI is making a profound impact on the industry.

  One of the most significant applications of AI in healthcare is diagnostics. AI-powered tools can analyze medical imaging data, such as X-rays and MRIs, with remarkable accuracy. This not only helps detect conditions like cancer at earlier stages but also reduces diagnostic errors.

  Another area where AI is driving change is personalized medicine. By analyzing genetic information, medical history, and lifestyle data, AI can help design tailored treatment plans for individual patients, improving efficacy and reducing side effects.

  Administrative efficiency is another notable benefit of AI in healthcare. Automating repetitive tasks like scheduling, billing, and medical record management allows healthcare providers to focus on patient care, reducing burnout and improving overall efficiency.

  AI also plays a critical role in drug discovery. Machine learning algorithms can sift through vast datasets to identify potential drug candidates more quickly and cost-effectively than traditional methods, accelerating the path to new treatments.

  However, integrating AI into healthcare comes with challenges. Ethical concerns, such as patient privacy and the need for unbiased algorithms, must be addressed. Additionally, healthcare providers require training to effectively use these new technologies.

  As AI continues to evolve, its potential to reshape healthcare is boundless. From enhancing diagnostics to driving groundbreaking research, AI is paving the way for a healthier future.`,
  image: "/healthcareai.jpg"
},
"ai-transforming-b2b-sales": {
  title: "How AI is Transforming B2B Sales Strategies",
  category: "AI in Business",
  date: "December 25, 2024",
  author: {
    name: "Eswar Lakkakula",
    role: "Strategy Lead",
    avatar: "/eswar.jpeg"
  },
  content: `Artificial Intelligence is revolutionizing B2B sales by enhancing lead generation, personalizing customer interactions, and optimizing sales processes. This article explores how AI is reshaping traditional B2B sales strategies to drive growth and efficiency.

  One of the most impactful uses of AI in B2B sales is predictive analytics. By analyzing historical data and market trends, AI can identify high-quality leads, forecast deal success rates, and recommend the best approaches for nurturing prospects. This enables sales teams to focus their efforts on the most promising opportunities.

  AI-powered personalization is also redefining customer engagement in B2B. Intelligent algorithms can tailor product recommendations, emails, and even pricing strategies to each client's specific needs and preferences. This not only enhances the buyer experience but also increases the likelihood of closing deals.

  Virtual assistants and chatbots are becoming essential tools for streamlining customer interactions. These tools handle routine inquiries, schedule meetings, and provide instant responses to client questions, freeing up sales teams to concentrate on more complex tasks.

  Another area where AI excels is in sales process optimization. Automated CRM updates, pipeline management, and performance tracking reduce manual workload and help sales leaders make data-driven decisions in real time.

  While AI offers immense benefits, it also comes with challenges. Data privacy concerns, integration with existing tools, and the need for sales teams to adapt to AI-driven workflows are key considerations. Companies must invest in training and change management to fully capitalize on AI's potential.

  As AI continues to evolve, its ability to transform B2B sales will only grow. Organizations that embrace AI-driven strategies will gain a competitive edge by delivering more value to their clients and achieving greater operational efficiency.`,
  image: "/b2b.png"
}


}

export default function InsightPageWrapper({ params }: { params: { id: string } }) {
  // Access the insight using the key, which is safe now
  const insight = insights[params.id as keyof typeof insights]

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
