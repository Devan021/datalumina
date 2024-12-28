import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Kanit } from "next/font/google"

const kanit = Kanit({subsets: ['latin'], weight:['200']})



export const metadata: Metadata = {
  title: "Hollerlabs - AI Agents",
  description: "Next-generation AI and data solutions for accelerated business success - Simplifying Your Future with AI Agents",
  icons: {
    icon: "/favicon2.png",
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${kanit.className} min-h-screen bg-[#020B2D]`}>
        {children}
      </body>
    </html>
  )
}

