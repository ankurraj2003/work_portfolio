import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

// Dynamically import below-the-fold components to reduce initial JS payload
const Education = dynamic(() => import('@/components/sections/Education'))
const TechMarquee = dynamic(() => import('@/components/sections/TechMarquee'))
const Experience = dynamic(() => import('@/components/sections/Experience'))
const Projects = dynamic(() => import('@/components/sections/Projects'))
const Achievements = dynamic(() => import('@/components/sections/Achievements'))
const Footer = dynamic(() => import('@/components/ui/Footer'))

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <TechMarquee />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </>
  )
}
