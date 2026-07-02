'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { personal } from '@/data/personal'

gsap.registerPlugin(SplitText)

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !headlineRef.current) return

    const split = new SplitText(headlineRef.current, { type: 'lines' })
    split.lines.forEach((line) => {
      const wrapper = document.createElement('div')
      wrapper.style.overflow = 'hidden'
      line.parentNode?.insertBefore(wrapper, line)
      wrapper.appendChild(line)
    })

    gsap.fromTo(
      split.lines,
      { y: '110%' },
      {
        y: '0%',
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.1,
        delay: 1.6,
      }
    )
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-24 pt-32 relative"
    >
      {/* Very subtle radial accent glow — bottom left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 100%, rgba(200,255,0,0.04) 0%, transparent 55%)',
        }}
      />

      {/* Scroll progress line — very top of page */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-[2px] bg-accent z-[60] origin-left"
        style={{ width: '0%' }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto">



        {/* Main headline — SplitText animated */}
        <div className="overflow-hidden mb-10">
          <h1
            ref={headlineRef}
            className="font-display font-bold text-text-primary tracking-editorial leading-[0.95]"
            style={{ fontSize: 'clamp(56px, 9vw, 130px)' }}
          >
            Software<br />
            Developer<span className="text-accent">.</span>
          </h1>
        </div>

        {/* Subtext row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
        >
          {/* Bio */}
          <p className="text-text-secondary text-base leading-relaxed max-w-sm">
            {personal.bio}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              className="group flex items-center gap-2 bg-accent text-black font-semibold text-sm rounded-full px-6 py-3 transition-colors duration-200 hover:bg-accent-hover"
            >
              View Work
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 border border-[rgba(255,255,255,0.2)] text-text-primary text-sm rounded-full px-6 py-3 transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Stats row — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mt-16 md:mt-24 flex flex-wrap gap-8 md:gap-12"
        >
          {[
            { value: personal.stats.experience, label: 'Years Experience' },
            { value: personal.stats.projects, label: 'Projects Built' },
            { value: personal.stats.clients, label: 'Happy Clients' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display font-bold text-text-primary text-3xl">
                {value}
              </div>
              <div className="text-text-muted text-xs mt-1 font-mono tracking-widest uppercase">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — bottom center */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase">
          scroll
        </span>
        <ChevronDown size={16} className="text-text-muted animate-scroll-bounce" />
      </div>
    </section>
  )
}
