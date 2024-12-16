import "@/styles/globals.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Datalumina v4 - Transforming Complexity into Capability",
  description: "Next-gen AI and data solutions for accelerated business success - Version 4.0 with enhanced features and improved experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-black to-blue-950`}>
        {children}
      </body>
    </html>
  )
}

