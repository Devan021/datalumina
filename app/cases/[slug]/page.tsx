import { Suspense } from 'react';
import { CaseStudyDetail } from '@/components/CaseStudyDetail';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Define the type for case study keys
type CaseStudyKey = keyof typeof caseStudies;

const caseStudies = {
  'solvemyhealth': {
    title: "Enhancing Healthcare Support with AI-Powered Multimodal Chat Solutions for SOLVEMyHealth.",
    description:
      "SOLVEMyHealth, a leading health-tech platform, serves thousands of users monthly with innovative solutions to healthcare challenges. Committed to empowering individuals and enhancing patient care, the platform now focuses on delivering personalized, real-time health support through seamless AI-driven integrations.",
    logo: "/solvemy.jpg",
    date: "Nov 15, 2024",
    author: {
      name: "Rajiv Ambat",
      role: "CEO",
      avatar: "/rajiv.jpeg",
    },
    details: {
      location: "Kochi",
      website: "https://www.solvemyhealth.com/",
      industry: "News",
      impact: "Instant pump of visitors from 10k to 100K monthly visitors",
    },
    content: {
      challenge:
        "SOLVEMyHealth faced a growing need for a robust and scalable customer support solution capable of handling high volumes of patient inquiries across multiple channels. With increasing demand for personalized healthcare services, they required a seamless, real-time support system to improve engagement, resolve queries instantly, and ensure patients received timely and accurate information, especially during peak times.",
      mission:
        "Our mission was to design and implement an AI-powered, multimodal customer support system that could efficiently manage patient interactions across various channels, including chat, voice, and messaging. By leveraging the latest advancements in natural language processing (NLP) and retrieval-augmented generation (RAG), we aimed to create a responsive and reliable solution that would elevate the patient experience while supporting SOLVEMyHealth's long-term growth.",
      solution:
        "We implemented an AI-powered, multimodal customer support system for SOLVEMyHealth, utilizing natural language processing (NLP) and retrieval-augmented generation (RAG) to deliver real-time, personalized responses across text and voice channels. The system intelligently routes complex queries to human agents, ensuring seamless support and scalability for future growth.",
      results:
        "The solution significantly enhanced patient satisfaction with faster, accurate responses, reducing wait times and improving engagement. SOLVEMyHealth now offers a seamless, scalable customer support experience, handling increasing volumes of inquiries efficiently while maintaining high service quality.",
    },
    background: "bg-gradient-to-br from-blue-900 via-purple-400 to-purple-700",
  },
  'innpixelai': {
    title: "Supercharging Operations with AI Automation for InnPixel.",
    description:
      "InnPixel AI, a top competitor among AI-powered Digital Marketing Agencies, helps B2B clients succeed with data-driven marketing solutions. By leveraging AI, they optimize campaigns, boost engagement, and drive measurable results for businesses.",
    logo: "/innpixel.png",
    date: "December 9, 2024",
    author: {
      name: "Paresh Makwana",
      role: "CEO",
      avatar: "/innpixel.png",
    },
    details: {
      location: "Mumbai, India",
      website: "https://www.innpixel.in",
      industry: "Digital Marketing",
      impact: "Increased client onboarding efficiency by 90%, scaled operations to handle 25% more clients.",
    },
    content: {
      challenge:
        "InnPixel AI was struggling with time-consuming manual processes for client onboarding, task management, and report generation. These inefficiencies slowed down their ability to scale operations and deliver fast results to their growing client base.",
      mission:
        "Our mission was to design and implement an AI-powered automation system that could streamline client onboarding, task management, and reporting. By leveraging AI, we aimed to improve operational efficiency, reduce manual work, and provide faster, data-driven results for InnPixel’s B2B clients.",
      solution:
        "We implemented AI-powered automation using Make.com and Airtable to automate client onboarding, task assignment, and report generation. Additionally, we integrated an AI chatbot to handle client queries, providing real-time updates on campaign performance and ROI. This solution significantly reduced onboarding time, boosted report generation efficiency, and allowed the agency to scale without increasing staff.",
      results:
        "The solution reduced client onboarding time by 90%, cutting report generation time by 80%. As a result, InnPixel AI successfully scaled operations, handling 25% more clients without increasing headcount. The agency saw a noticeable improvement in client satisfaction and operational efficiency, leading to better results and stronger business growth.",
    },
    background: "bg-gradient-to-br from-red-900 via-blue-800 to-blue-950",
  },
  'greenviewrealty': {
    title: "Transforming Real Estate Engagement with AI Agents for GreenView Realty",
    description:
      "GreenView Realty, a mid-sized real estate agency in Los Angeles, leveraged AI-driven agents to enhance customer engagement, reduce response time, and increase sales conversions.",
    logo: "/greenview.jpeg",
    date: "September 18, 2024",
    author: {
      name: "Brian Kernick",
      role: "CEO",
      avatar: "/brian.jpeg",
    },
    details: {
      location: "Los Angeles, CA",
      website: "https://thegreenviewrealtors.com/",
      industry: "Real Estate",
      impact: "40% reduction in response time, 30% increase in conversions",
    },
    content: {
      challenge:
        "GreenView Realty faced challenges in managing high volumes of customer inquiries, leading to slow response times and missed sales opportunities. They needed a solution to provide quick and personalized responses to prospective buyers while freeing up their sales team for more complex tasks.",
      mission:
        "Our mission was to develop AI-driven agents that could manage customer inquiries, suggest properties, and schedule viewings, all while maintaining personalized engagement and improving conversion rates.",
      solution:
        "We implemented an AI-powered support system that integrated seamlessly with GreenView Realty’s website and mobile app. The AI agents handled property inquiries, scheduled viewings, and captured qualified leads, routing them to sales agents for follow-up.",
      results:
        "The AI agents helped GreenView Realty achieve a 40% reduction in customer inquiry response time. The conversion rate increased by 30%, as AI handled routine queries and passed qualified leads to the sales team for faster follow-up and higher sales.",
    },
    background: "bg-gradient-to-br from-green-800 via-green-700 to-green-950",
  },

};

export default function CaseStudyPage({
  params,
}: {
  params: { slug: CaseStudyKey }; // Restrict slug to valid keys
}) {
  const caseStudy = caseStudies[params.slug];

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#020B2D]">
      <Header />
      <main className="relative pt-20">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a2a4e] via-[#0a0f1a] to-[#020B2D] z-0" />

        <div className="relative z-10">
          <Suspense fallback={<div>Loading...</div>}>
            <CaseStudyDetail caseStudy={caseStudy} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
