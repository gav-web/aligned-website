import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ALIGNED - Awaken Your True Power | Desktop Transformation Platform',
  description: 'Discover who you really are. Create the life and business of your dreams with the ALIGNED desktop application for spiritual entrepreneur transformation.',
  keywords: 'spiritual entrepreneur, transformation, awakening, purpose, manifestation, desktop app, windows, mac, consciousness, spiritual business',
  openGraph: {
    title: 'ALIGNED - Desktop Transformation Platform',
    description: 'Powerful desktop application for spiritual entrepreneurs to awaken their true power and transform their lives and businesses.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cosmic-deep text-cosmic-white`}>
        {children}
      </body>
    </html>
  )
}