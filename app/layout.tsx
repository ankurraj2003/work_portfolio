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

export const metadata: Metadata = {
  title: 'Ankur Raj | Software Developer',
  description: 'Software Developer crafting clean, performant web experiences.',
  icons: {
    icon: '/favicon.png',
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
