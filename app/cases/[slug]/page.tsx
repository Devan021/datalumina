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
    logo: "/solvemy.png",
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
      impact: "Instant coin data to 2 million monthly visitors",
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
    background: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950",
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
