import type { Metadata } from 'next'
import { DM_Sans, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import PageCurtain from '@/components/ui/PageCurtain'
import Navbar from '@/components/ui/Navbar'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '700'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['700', '800'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400'],
})

const BASE_URL = 'https://ankurraj.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ankur Raj — Software Developer',
    template: '%s | Ankur Raj',
  },
  description:
    'Software developer specialising in React, Next.js, Node.js and cloud infrastructure. Crafting clean, performant web experiences.',
  keywords: [
    'Ankur Raj',
    'Ankur Raj Sahu',
    'Software Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'Portfolio',
    'AI Developer',
  ],
  authors: [{ name: 'Ankur Raj', url: BASE_URL }],
  creator: 'Ankur Raj',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: 'Ankur Raj',
    title: 'Ankur Raj — Software Developer',
    description:
      'Software developer specialising in React, Next.js, Node.js and cloud infrastructure. Crafting clean, performant web experiences.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Ankur Raj — Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankur Raj — Software Developer',
    description:
      'Software developer specialising in React, Next.js, Node.js and cloud infrastructure.',
    images: ['/og_image.png'],
    creator: '@ankurrajsahu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        <LenisProvider>
          <PageCurtain />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
        </LenisProvider>
      </body>
    </html>
  )
}
