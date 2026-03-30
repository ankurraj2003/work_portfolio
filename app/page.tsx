import Hero from '@/components/sections/Hero'
import Education from '@/components/sections/Education'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import TechMarquee from '@/components/sections/TechMarquee'
import Achievements from '@/components/sections/Achievements'
import Footer from '@/components/ui/Footer'

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
