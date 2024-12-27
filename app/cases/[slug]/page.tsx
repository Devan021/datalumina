import { Suspense } from 'react';
import { CaseStudyDetail } from '@/components/CaseStudyDetail';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Define the type for case study keys
type CaseStudyKey = keyof typeof caseStudies;

// This would typically come from a CMS or API
const caseStudies = {
  'crypto-insiders': {
    title: "Delivering real-time coin data to millions of Crypto Insiders visitors",
    description:
      "Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, attracts over 2 million monthly visitors who rely on up-to-the-minute coverage of the crypto market. To enhance its position as an industry leader and elevate the customer experience, the platform set its sights on delivering real-time coin pricing data directly to its users.",
    logo: "/logos/crypto-insiders.svg",
    date: "Oct 15, 2023",
    author: {
      name: "Christan Doornhof",
      role: "Strategy Lead",
      avatar: "/team/christan-doornhof.jpg",
    },
    details: {
      location: "Amsterdam",
      website: "https://www.crypto-insiders.nl/",
      industry: "News",
      impact: "Instant coin data to 2 million monthly visitors",
    },
    content: {
      challenge:
        "Crypto Insider's existing infrastructure struggled to handle the demands of live updates, especially during high-traffic market surges, causing delays and outages. To stay ahead, they needed a fast, reliable, and scalable solution that could meet the expectations of their growing audience.",
      mission:
        "Our mission was to create a future-proof system that delivered real-time coin data seamlessly to Crypto Insider's visitors. We focused on engineering a solution that prioritized speed, reliability, and scalability—ensuring the platform could meet today's demands and handle tomorrow's growth.",
      solution:
        "We engineered a high-performance data delivery system tailored to Crypto Insider's needs. At the heart of the solution is a dedicated ingestion server that aggregates and verifies coin pricing data, ensuring every update is accurate and reliable. Paired with a dedicated caching layer, the system delivers blazing-fast response times under 200 milliseconds, keeping millions of visitors informed without missing a beat.\n\nTo guarantee the platform's resilience, we built a robust architecture to handle surges during volatile market events. The result? A scalable, future-proof system that supports Crypto Insider's rapid growth, ensuring their audience enjoys a seamless experience—every time they visit.",
      results:
        "The results speak for themselves—our solution delivered real-time coin pricing with response times under 200 milliseconds and 99% uptime, vastly improving the user experience for millions of visitors. CryptoInsiders can now handle peak traffic effortlessly, solidifying their position as the Netherlands' top cryptocurrency news platform.",
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
