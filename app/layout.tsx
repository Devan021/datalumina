import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Kanit } from "next/font/google"

const kanit = Kanit({subsets: ['latin'], weight:['200']})



export const metadata: Metadata = {
  title: "Datalumina v4.10 - AI-Powered Business Transformation",
  description: "Next-generation AI and data solutions for accelerated business success - Version 4.10 with enhanced responsiveness, consistent button styling, and optimized performance",
  icons: {
    icon: "/favicon.ico",
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

