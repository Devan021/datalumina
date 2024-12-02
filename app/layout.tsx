"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display: 'swap' })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/lequire-rounded" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        
          <Header />
          <main className="relative z-20 min-h-screen">
            {children}
          </main>
          <Footer />
        
        <Script id="voiceflow-widget" strategy="afterInteractive">
          {`
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '672ce34be13b9a0cd7eb8848' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production'
                });
              }
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `}
        </Script>
      </body>
    </html>
  )
}

